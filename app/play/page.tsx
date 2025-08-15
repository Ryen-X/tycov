"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PlayConsentDialog from "@/components/play-consent-dialog";
import CircleLoader from "@/components/ui/circle-loader";
import ButtonLoader from "@/components/ui/button-loader";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import StatsTable from "@/components/ui/stats-table";

const fetchImagesFromManifest = async () => {
  const response = await fetch('/manifest.json');
  const data = await response.json();
  return data.images;
};

const CONSENT_COOKIE_NAME = "tycov_play_consent";
const PERSONAL_STATS_COOKIE_NAME = "tycov_personal_stats";
const SESSION_COOKIE_NAME = "tycov_user_session";

// A simple UUID generator
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

interface ImageItem {
  url: string;
  type: 'real' | 'ai';
}

export default function TycoVGame() {
  const [currentImage, setCurrentImage] = useState<ImageItem | null>(null);
  const [seenImages, setSeenImages] = useState<string[]>([]);
  const [userStats, setUserStats] = useState({ correct: 0, incorrect: 0 });
  const [personalStats, setPersonalStats] = useState({ correct: 0, incorrect: 0 });
  const [hasConsented, setHasConsented] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [loadingButton, setLoadingButton] = useState<"real" | "ai" | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{ correct: boolean; imageType: "real" | "ai" } | null>(null);
  const [userSession, setUserSession] = useState<string | null>(null);
  const [allImages, setAllImages] = useState<ImageItem[]>([]);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const consentGiven = getCookie(CONSENT_COOKIE_NAME) === 'true';
      if (consentGiven) {
        setHasConsented(true);
        fetchStats();
      }

      let session = getCookie(SESSION_COOKIE_NAME);
      if (!session) {
        session = generateUUID();
        setCookie(SESSION_COOKIE_NAME, session, 365);
      }
      setUserSession(session);

      const statsCookie = getCookie(PERSONAL_STATS_COOKIE_NAME);
      if (statsCookie) {
        setPersonalStats(JSON.parse(statsCookie));
      }

      const fetchedAllImages = await fetchImagesFromManifest();
      setAllImages(fetchedAllImages);

      const fetchSeenImagesFromDb = async (currentSession: string) => {
        try {
          const response = await fetch(`/api/seen-images?user_session=${currentSession}`);
          const data = await response.json();
          if (data.seenImages) {
            setSeenImages(data.seenImages);
          }
        } catch (error) {
          console.error('Failed to fetch seen images from DB:', error);
        }
      };

      if (session) {
        await fetchSeenImagesFromDb(session);
      }

      const savedImageId = localStorage.getItem(`tycov_current_image_${session}`);
      if (savedImageId && fetchedAllImages.length > 0) {
        const savedImage = fetchedAllImages.find((img: ImageItem) => img.url === savedImageId);
        if (savedImage) {
          setCurrentImage(savedImage);
          setShowSkeleton(false);
          setIsLoading(false);
          return;
        }
      }
      setIsLoading(false);
    };

    loadInitialData();

    return () => {
      // Cleanup interval if it exists
    };
  }, []);

  useEffect(() => {
    if (currentImage && userSession) {
      localStorage.setItem(`tycov_current_image_${userSession}`, currentImage.url);
    }
  }, [currentImage, userSession]);

  const handleConsentGiven = () => {
    setCookie(CONSENT_COOKIE_NAME, 'true', 365);
    setHasConsented(true);
    setIsLoading(true);
    setTimeout(() => {
      setShowSkeleton(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowSkeleton(false);
      }, 1500);
    }, 1000);
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      if (data) {
        const correct = Number(data.correct_real) + Number(data.correct_ai);
        const incorrect = Number(data.incorrect_real) + Number(data.incorrect_ai);
        setUserStats({
          correct: correct || 0,
          incorrect: incorrect || 0,
        });
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };


  const fetchNewImage = useCallback(async (currentSeenImages: string[]) => {
    let availableImages = allImages.filter((image) => !currentSeenImages.includes(image.url));

    if (availableImages.length === 0) {
      // If all images have been seen, reset seenImages and use all images again
      setSeenImages([]);
      availableImages = allImages;
    }

    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const selectedImage = availableImages[randomIndex];

    setCurrentImage(selectedImage);
    setSeenImages((prev) => [...prev, selectedImage.url]);
  }, [allImages]);

  useEffect(() => {
    if (hasConsented && !isLoading && !currentImage && allImages.length > 0) {
      // Only fetch a new image if currentImage is null (no image loaded or restored)
      // and allImages are loaded.
      // seenImages will be fetched from DB in loadInitialData, so it's ready here.
      fetchNewImage(seenImages)
        .then(() => {
          setShowSkeleton(false);
        })
        .catch((error) => {
          console.error("Error fetching new image:", error);
          setShowSkeleton(false);
        });
    }
  }, [hasConsented, isLoading, currentImage, seenImages, allImages, fetchNewImage]);

  const handleGuess = async (guess: "Real" | "AI") => {
    if (!currentImage) return;

    setLoadingButton(guess.toLowerCase() as "real" | "ai");

    const imageType = currentImage.type;
    const isCorrect = guess.toLowerCase() === imageType;

    try {
      await fetch('/api/guess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_session: userSession,
          image_id: currentImage.url,
          image_label: imageType,
          user_choice: guess.toLowerCase(),
        }),
      });
    } catch (error) {
      console.error('Failed to submit guess:', error);
    }

    const newPersonalStats = { ...personalStats };
    if (isCorrect) {
      newPersonalStats.correct += 1;
    } else {
      newPersonalStats.incorrect += 1;
    }
    setPersonalStats(newPersonalStats);
    setCookie(PERSONAL_STATS_COOKIE_NAME, JSON.stringify(newPersonalStats), 365);

    setResult({ correct: isCorrect, imageType });
    setLoadingButton(null);
    setShowResult(true);
  };

  const handleCloseResult = () => {
    setShowResult(false);
    setCurrentImage(null);
    setShowSkeleton(true);
    localStorage.removeItem(`tycov_current_image_${userSession}`); // Clear saved image on next
    fetchStats(); // Fetch stats after loading a new image
    if (userSession) {
      // Re-fetch seen images from DB to ensure the latest state is used for the next image
      fetch(`/api/seen-images?user_session=${userSession}`)
        .then(res => res.json())
        .then(data => {
          if (data.seenImages) {
            setSeenImages(data.seenImages);
          }
        })
        .catch(error => console.error('Failed to re-fetch seen images after guess:', error));
    }
  };

  if (!hasConsented) {
    return <PlayConsentDialog onConsent={handleConsentGiven} />;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 font-sans">
        {showSkeleton ? (
          <div className="w-full max-w-2xl mx-auto">
            <Skeleton className="h-8 w-1/3 mb-4" />
            <Skeleton className="h-4 w-1/4 mb-8" />
            <Skeleton className="w-full aspect-square max-w-xl mx-auto bg-neutral-800 rounded-lg" />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
            </div>
          </div>
        ) : (
          <CircleLoader />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 font-sans">
      <AnimatePresence>
        {showResult && result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <div
              className={`p-6 mx-4 rounded-lg text-center max-w-sm w-11/12 ${
                result.correct ? "bg-emerald-950" : "bg-red-950"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">
                The image was {result.imageType === "real" ? "REAL" : "AI-GENERATED"}
              </h2>
              <p className="text-lg mb-6">
                You were {result.correct ? "correct!" : "incorrect."}
              </p>
              <Button onClick={handleCloseResult} className="bg-white text-black hover:text-black hover:bg-gray-200 hover:cursor-pointer" >Next Image</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-2xl mx-auto mt-10">
        <main className="mt-4">
          <div className="text-center text-blue-300 text-sm mb-4 p-2 rounded-md bg-blue-950 border border-blue-700 mt-10">
            ⓘ Anonymous data is collected like statistics. See <a href="/cookies" className="underline">Cookies</a>, <a href="/data" className="underline">Data</a>, and <a href="/terms" className="underline">Terms</a>.
          </div>
          <div className="relative w-full aspect-square max-w-xl mx-auto bg-black">
            {showSkeleton ? (
              <Skeleton className="w-full h-full bg-neutral-800 rounded-lg" />
            ) : currentImage ? (
              <Image
                src={currentImage.url}
                alt="Cognitive Vision Game Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p>Loading Image...</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button
              variant="outline"
              className="bg-emerald-950 border-emerald-700 hover:bg-emerald-900 text-white uppercase tracking-widest py-6 text-lg hover:text-white hover:cursor-pointer flex items-center justify-center"
              onClick={() => handleGuess("Real")}
              disabled={loadingButton !== null}
            >
              {loadingButton === 'real' ? <ButtonLoader /> : 'Real'}
            </Button>
            <Button
              variant="outline"
              className="bg-red-950 border-red-700 hover:bg-red-900 text-white uppercase tracking-widest py-6 text-lg hover:text-white hover:cursor-pointer flex items-center justify-center"
              onClick={() => handleGuess("AI")}
              disabled={loadingButton !== null}
            >
              {loadingButton === 'ai' ? <ButtonLoader /> : 'AI'}
            </Button>
          </div>
          <h2 className="text-center text-xl font-bold mt-8 mb-4">
            Personal Statistics
          </h2>
          <StatsTable
            correct={personalStats.correct}
            incorrect={personalStats.incorrect}
          />
          <h2 className="text-center text-xl font-bold mt-8 mb-4">
            Global Statistics
          </h2>
          <StatsTable
            correct={userStats.correct}
            incorrect={userStats.incorrect}
          />
        </main>
      </div>
    </div>
  );
}
