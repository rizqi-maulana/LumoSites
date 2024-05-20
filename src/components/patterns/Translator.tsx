"use client"

import { usePathname } from "next/navigation";

interface Props {
  to: string;
  children: React.ReactNode;
}

export const Translate = ({ to, children }: Props) => {
  const pathname = usePathname();
  return <>{pathname?.startsWith('/id') ? to : children}</>;
};