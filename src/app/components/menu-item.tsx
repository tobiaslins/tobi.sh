"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const currentRoute = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        "text-sm w-full text-neutral-200 hover:bg-neutral-900 px-3 py-1.5 rounded",
        currentRoute === href && "bg-neutral-900"
      )}
    >
      {children}
    </Link>
  );
}
