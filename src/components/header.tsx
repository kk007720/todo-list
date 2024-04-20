import { UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <div className="flex justify-end p-4">
      <UserButton />
    </div>
  );
}
