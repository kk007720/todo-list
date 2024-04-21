import Header from '@/components/header';
import Item from '@/components/item';
import ProgressBar from '@/components/progressBar';
import MoveDownSwitch from '@/components/move-down-switch';
import AddItem from '@/components/add-item';

export default function Home() {
  function renderTitle() {
    return (
      <div className="my-4">
        <h1 className="text-3xl text-[#7d8ecd]">ToDo List</h1>
        <div className="my-4 text-[#7d8ecd]/50">Add things to do</div>
        <div className="border-b-2 "></div>
      </div>
    );
  }

  function renderList() {
    return (
      <>
        {Array.from({ length: 5 }).map((ele, index) => (
          <Item key={`item-${index}`} />
        ))}
        <div className="border-b-2 "></div>
      </>
    );
  }

  return (
    <div className="container max-w-[1024px] max-h-[768px]">
      <Header />
      <section className="bg-[#eff6fe] rounded px-16 py-4">
        {renderTitle()}
        <ProgressBar progressValue={66} />
        {renderList()}
        <MoveDownSwitch />
        <AddItem />
      </section>
    </div>
  );
}
