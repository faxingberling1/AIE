"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-white/40 mb-6">
      <Link href="/dashboard" className="hover:text-primary transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Platform</span>
      </Link>
      
      {paths.map((path, i) => {
        const isLast = i === paths.length - 1;
        const href = `/${paths.slice(0, i + 1).join("/")}`;
        const name = path.charAt(0).toUpperCase() + path.slice(1);

        return (
          <div key={path} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-white/10" />
            {isLast ? (
              <span className="text-white/80 font-bold">{name}</span>
            ) : (
              <Link href={href} className="hover:text-primary transition-colors">
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
