"use client";

import React from "react";

interface StatsTableProps {
  correct: number;
  incorrect: number;
}

export default function StatsTable({ correct, incorrect }: StatsTableProps) {
  const total = correct + incorrect;
  const accuracy = total > 0 ? ((correct / total) * 100).toFixed(2) : "0.00";

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 bg-neutral-900 rounded-lg">
          <p className="text-2xl font-bold">{correct}</p>
          <p className="text-sm text-neutral-400">Correct</p>
        </div>
        <div className="p-4 bg-neutral-900 rounded-lg">
          <p className="text-2xl font-bold">{incorrect}</p>
          <p className="text-sm text-neutral-400">Incorrect</p>
        </div>
        <div className="col-span-2 p-4 bg-neutral-900 rounded-lg">
          <p className="text-2xl font-bold">{accuracy}%</p>
          <p className="text-sm text-neutral-400"> Accuracy</p>
        </div>
      </div>
    </div>
  );
}
