"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface PlayConsentDialogProps {
  onConsent: () => void;
}

const CONSENT_COOKIE_NAME = "tycov_play_consent";

const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

const setCookie = (name: string, value: string, days: number = 365): void => {
  if (typeof document === 'undefined') return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax; Secure`;
};

export default function PlayConsentDialog({ onConsent }: PlayConsentDialogProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [hasReadData, setHasReadData] = useState(false);

  useEffect(() => {
    const consentGiven = getCookie(CONSENT_COOKIE_NAME);
    if (!consentGiven) {
      setShowDialog(true);
    }
  }, []);

  const handleAgree = () => {
    setCookie(CONSENT_COOKIE_NAME, "true");
    setShowDialog(false);
    onConsent();
  };

  return (
    <AnimatePresence>
      {showDialog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 max-w-md w-full text-white text-center shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Welcome to TYCOV Play!</h2>
            <p className="mb-4 text-gray-300">
              Before you start, please ensure you have read and agree to our{" "}
              <Link href="/terms" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mb-6 text-gray-300">
              It's also important to understand how your data contributes to our research. Please read our{" "}
              <Link href="/data" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Data & Research page
              </Link>{" "}
              before proceeding.
            </p>
            <div className="flex items-center justify-center mb-8">
              <Checkbox
                id="readData"
                checked={hasReadData}
                onCheckedChange={(checked: boolean) => setHasReadData(checked)}
                className="mr-2"
              />
              <label htmlFor="readData" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I have read and understood the Data & Research page.
              </label>
            </div>
            <Button
              onClick={handleAgree}
              disabled={!hasReadData}
              className="w-full bg-white text-black hover:bg-gray-200 relative z-10 cursor-pointer"
            >
              Agree and Continue
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
