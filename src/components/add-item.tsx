'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function AddItem() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);
  };

  return (
    <div className="mb-4 mt-12">
      <div className="text-[#7d8ecd]">Add to list</div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <Input className="w-full" />
        <Button type="submit">
          <Plus className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
