'use client';

import { Progress } from '@/components/ui/progress';

import { useState, useEffect } from 'react';

export default function ProgressBar({
  progressValue,
}: {
  progressValue: number;
}) {
  return (
    <div className="flex gap-3 items-center my-4">
      <div>{progressValue}%</div>
      <Progress value={progressValue} className="w-full" />
    </div>
  );
}
