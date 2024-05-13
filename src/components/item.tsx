'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Item({
  index,
  isDone,
  title,
  setList,
}: {
  index: number;
  isDone: boolean;
  title: string;
  setList: React.Dispatch<
    React.SetStateAction<{ isDone: boolean; title: string }[]>
  >;
}) {
  const [checked, setChecked] = useState(isDone);

  useEffect(() => {
    setList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, isDone: checked } : item
      )
    );
  }, [checked, index, setList]);

  const handleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleRemove = () => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className=" my-4 rounded-lg flex min-h-[5rem] bg-white items-center">
      <div className="border-l-[6px] border-[#7d8ecd] min-h-[5rem] w-[5%] rounded-l"></div>

      <div className="flex items-center space-x-2 w-[90%]">
        <Checkbox id="terms" onClick={handleCheck} checked={checked} />
        <Label
          htmlFor="terms"
          className={`${
            checked ? 'line-through' : ''
          } text-slate-400 font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
        >
          {title}
        </Label>
      </div>

      <div className="w-[5%]">
        <X
          className="w-4 h-4 cursor-pointer text-[#7d8ecd]/50"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
}
