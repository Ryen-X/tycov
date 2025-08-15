"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AnimatedCounter = ({ endValue, duration = 2000 }: { endValue: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor(progress / duration * endValue), endValue);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [endValue, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const StatisticsSection = () => {
  const [stats, setStats] = useState({
    participants: 1217,
    records: 60123,
    accuracy: 60,
  });


  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Statistics</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          <Card className="bg-neutral-900 border-neutral-800 text-white">
            <CardHeader>
              <CardTitle className="text-center">Participants</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">
                <AnimatedCounter endValue={stats.participants} />
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 text-white">
            <CardHeader>
              <CardTitle className="text-center">Records</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">
                <AnimatedCounter endValue={stats.records} />
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 text-white">
            <CardHeader>
              <CardTitle className="text-center">Global Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold">
                <AnimatedCounter endValue={stats.accuracy} />%
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center text-yellow-300 text-sm p-2 rounded-md bg-yellow-950 border border-yellow-700 mt-10 max-w-fit mx-auto">
            ⓘ Statistics shown are as of July 26, 2025.
          </div>
        <div className="mt-5 grid grid-cols-1 gap-8">
          <div className="flex justify-center">
            <Image src="/linegraph.webp" alt="Line Graph" width={1000} height={1000} />
          </div>
          <div className="flex justify-center">
            <Image src="/bargraph.webp" alt="Bar Graph" width={1000} height={1000} />
          </div>
          <div className="flex justify-center">
            <Image src="/piechart.webp" alt="Pie Chart" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
