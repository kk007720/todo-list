'use client';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function MoveDownSwitch() {
  return (
    <div className="flex gap-4 my-4 justify-end">
      <div className="flex items-center space-x-2">
        <Label htmlFor="mode" className="text-slate-400">
          Move done this to the end?
        </Label>
        <Switch id="mode" />
      </div>
    </div>
  );
}
