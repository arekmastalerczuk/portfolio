"use client";

import NavItem from "@/components/NavItem/NavItem";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();
  let ctaClasses = "cta !text-secondary hover:!text-orange-500";

  return (
    <nav>
      <ul className="flex space-x-2 mr-4">
        <NavItem path="/" className={pathname === "/" ? "active" : ""}>
          Strona główna
        </NavItem>
        <NavItem
          path="/about"
          className={pathname === "/about" ? "active" : ""}
        >
          O mnie
        </NavItem>
        <NavItem
          path="/portfolio"
          className={pathname === "/portfolio" ? "active" : ""}
        >
          Portfolio
        </NavItem>
        <NavItem
          path="/goals"
          className={pathname === "/goals" ? "active" : ""}
        >
          Lista celów
        </NavItem>
        <NavItem
          path="/contact"
          className={
            pathname === "/" ? `${ctaClasses} active` : `${ctaClasses}`
          }
        >
          Kontakt
        </NavItem>
      </ul>
    </nav>
  );
};
