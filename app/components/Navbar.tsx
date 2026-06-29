"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      className={scrolled ? "nav-scrolled" : ""}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border-light)",

        transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/logo.png"
            alt="Bijon Marketing"
            style={{ height: 54, width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: pathname === l.href ? "var(--primary)" : "var(--text)",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: 8,
                  backgroundColor:
                    pathname === l.href ? "rgba(0,74,198,0.07)" : "transparent",
                  transition: "all 0.2s",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Theme toggle */}
          {mounted && (
            <button
              className="btn"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--bg-section)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
              }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* CTA — desktop only */}
          {!isMobile && (
            <Link
              href="/contact"
              className="btn"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "var(--primary)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                padding: "10px 22px",
                borderRadius: 10,
                textDecoration: "none",
                boxShadow: "0 8px 20px -4px rgba(0,74,198,0.35)",
              }}
            >
              Let&apos;s Talk
            </Link>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              className="btn"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--dark)",
                display: "flex",
                alignItems: "center",
                padding: 4,
              }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {open && isMobile && (
        <div
          className="drawer"
          style={{
            borderTop: "1px solid var(--border)",
            padding: "12px 24px 28px",
            backgroundColor: "var(--bg)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          {[{ href: "/", label: "Home" }, ...LINKS].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 4px",
                fontSize: 16,
                fontWeight: 500,
                color: pathname === l.href ? "var(--primary)" : "var(--text)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {l.label}
              {pathname === l.href && (
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                    display: "inline-block",
                  }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: 20,
              backgroundColor: "var(--primary)",
              color: "#fff",
              textAlign: "center",
              padding: "15px",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              boxShadow: "0 8px 20px -4px rgba(0,74,198,0.35)",
            }}
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
