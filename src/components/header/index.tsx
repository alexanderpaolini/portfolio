'use client';

import { NAME } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { HeaderPagesList } from './pages-list';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function onNavClick(href: string) {
    router.push(href);
    setIsOpen(false);
  }

  return (
    <div className="w-full border-b border-gray-200 mb-8">
      <header className="flex items-center justify-between h-16 w-full max-w-4xl mx-auto px-4 section">
        <Link href="/" className="hover:underline underline-offset-4">
          <span className="text-xl font-semibold">{NAME}</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden w-6 h-6"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <HeaderPagesList isOpen={isOpen} onNavClick={onNavClick} />
      </header>
    </div>
  );
}
