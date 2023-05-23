"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import clsxm from "@/lib/clsxm";
import routes from "@/router/routes";

export default function Navigation() {
  const pathname = usePathname();

  function pathNameMatches(href: string) {
    if (pathname === "/" && href === "/") {
      return true;
    }

    if (href !== "/" && pathname?.includes(href)) {
      return true;
    }
  }

  return (
    <nav className="text-gray-500 order-3 w-full md:w-auto md:order-2 mt-1 md:pt-0">
      <ul className="flex font-semibold">
        {routes.map(({ href, label }) => (
          <li key={`${href}${label}`} className="pr-4 py-2">
            <a
              href={href}
              className={clsxm(
                "hover:text-primary-400",
                pathNameMatches(href) ? "text-primary-500" : ""
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
