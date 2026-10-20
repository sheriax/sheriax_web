"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { mainNavLinks, TATHEER_URL } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnResize = () => setOpen(false);
    desktop.addEventListener("change", closeOnResize);
    return () => desktop.removeEventListener("change", closeOnResize);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          closeMenu();
          buttonRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
      }}
    >
      <div className="shell header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Sheriax home"
          onClick={closeMenu}
        >
          <Image
            src="/logo/Sheriax-Logo.png"
            alt=""
            width={30}
            height={30}
            priority
          />
          <span>Sheriax</span>
        </Link>
        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main"
          className={`main-navigation ${open ? "is-open" : ""}`}
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <a href={TATHEER_URL} className="nav-product" onClick={closeMenu}>
            Explore Tat’heer <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
