"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-background">
      <div className="p-6">
        <h2 className="text-xl font-bold">
          Knowledge Hub
        </h2>
      </div>

      <nav className="space-y-1 px-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                active
                  ? "bg-muted font-medium"
                  : ""
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}