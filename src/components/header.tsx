'use client';

import { NAME, PAGES } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        router.push(href);
    };

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
                <nav
                    className={`${isOpen ? "flex" : "hidden"} z-10 absolute top-16 left-0 w-full flex-col justify-end space-y-2 bg-background border-y px-2 py-4 sm:static sm:flex sm:flex-row sm:w-auto sm:items-center sm:space-x-4 sm:space-y-0 sm:px-0 sm:py-0 sm:border-0`}
                >
                    {PAGES.map(({ href, label, icon }) => (
                        <button
                            key={href}
                            onClick={() => handleNavClick(href)}
                            className="w-full text-left border-b border-transparent py-1 hover:underline hover:underline-offset-4 sm:w-auto sm:py-0 sm:px-2 sm:hover:bg-transparent sm:hover:underline-offset-0"
                            type="button"
                        >
                            <p className="flex items-center gap-2">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {(icon as any).render({ size: 24 })}
                                {label}
                            </p>
                        </button>
                    ))}
                </nav>
            </header>
        </div>
    );
}
