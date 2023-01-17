"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/compare/screen", label: "Screen" },
  { href: "/compare/phone", label: "Phone" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="text-gray-500 order-3 w-full md:w-auto md:order-2">
      <ul className="flex font-semibold">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className="pr-4 py-2">
            <a
              href={href}
              className={`hover:text-primary-400 ${
                pathname == href ? "text-primary-500" : ""
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
