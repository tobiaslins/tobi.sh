import Link from "next/link";
import { MenuItem } from "@/app/components/menu-item";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      <div className="text-sm bg-neutral-950 flex gap-1.5 flex-col p-4 w-64 border-r border-stone-900">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/blog">Blog</MenuItem>
        <MenuItem href="/about">About</MenuItem>
      </div>
      <div className="bg-neutral-950 flex-1">{children}</div>
    </div>
  );
}
