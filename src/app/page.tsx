'use server';
import Header from '@/components/header';
import ProgressBar from '@/components/progressBar';
import MoveDownSwitch from '@/components/move-down-switch';

import TodoList from '@/components/todo-list';
import { auth } from '@clerk/nextjs/server';

export default async function Home() {
  function renderTitle() {
    return (
      <div className="my-4">
        <h1 className="text-3xl text-[#7d8ecd]">ToDo List</h1>
        <div className="my-4 text-[#7d8ecd]/50">Add things to do</div>
        <div className="border-b-2 "></div>
      </div>
    );
  }

  const { userId } = auth();

  if (userId) {
    console.log(userId);
  }

  return (
    <div className="container max-w-[1024px] max-h-[768px]">
      <Header />
      <section className="bg-[#eff6fe] rounded px-16 py-4">
        {renderTitle()}

        <TodoList />
        <MoveDownSwitch />
      </section>
    </div>
  );
}
