'use client';

import { Progress } from '@/components/ui/progress';

import { useState, useEffect } from 'react';

export default function ProgressBar({
  progressValue,
}: {
  progressValue: number;
}) {
  const [progress, setProgress] = useState(progressValue);

  useEffect(() => {
    // setProgress(progressValue);
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex gap-3 items-center my-4">
      <div>{progressValue}%</div>
      <Progress value={progress} className="w-full" />
    </div>
  );
}
