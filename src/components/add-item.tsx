'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
type AddItemProps = {
  setList: React.Dispatch<
    React.SetStateAction<{ isDone: boolean; title: string }[]>
  >;
};

export default function AddItem({ setList }: AddItemProps) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setList((prevList) => [
        ...prevList,
        { isDone: false, title: inputValue },
      ]);
      setInputValue('');
    }
  };

  return (
    <div className="mb-4 mt-12">
      <div className="text-[#7d8ecd]">Add to list</div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <Input
          className="w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">
          <Plus className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
