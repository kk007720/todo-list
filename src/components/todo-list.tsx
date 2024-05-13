'use client';
import { useState, useEffect } from 'react';
import Item from '@/components/item';
import AddItem from '@/components/add-item';
import ProgressBar from './progressBar';

type ListItem = {
  isDone: boolean;
  title: string;
};

export default function TodoList() {
  const [list, setList] = useState<ListItem[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      if (list.length === 0) return 0;
      const doneItems = list.filter((item) => item.isDone).length;
      return (doneItems / list.length) * 100;
    };

    setProgress(calculateProgress());
  }, [list]);
  function renderList() {
    return (
      <>
        {list.map((ele, index) => (
          <Item
            key={`item-${index}`}
            index={index}
            isDone={ele.isDone}
            title={ele.title}
            setList={setList}
          />
        ))}
        <div className="border-b-2 "></div>
      </>
    );
  }
  return (
    <>
      <ProgressBar progressValue={progress} />
      {renderList()}
      <AddItem setList={setList} />
    </>
  );
}
