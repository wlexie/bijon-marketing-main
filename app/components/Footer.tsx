import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--footer-bg)",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 0" }}>
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Link
              href="/"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              <img
                src="/logo.png"
                alt="Bijon Marketing"
                style={{ height: 60, width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p
              style={{
                fontSize: 18,
                color: "var(--muted)",
                lineHeight: 1.75,
                maxWidth: 280,
              }}
            >
              Kenya&apos;s most trusted full-service marketing agency. Elevating
              brands through innovative strategy and data-driven performance.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              {[
                {
                  icon: <FaLinkedinIn size={18} />,
                  href: "https://www.linkedin.com/company/bijon-marketing-agency/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaInstagram size={18} />,
                  href: "https://www.instagram.com/bijon_marketing/",
                  label: "Instagram",
                },
                {
                  icon: <FaXTwitter size={18} />,
                  href: "https://x.com/Bijonmarketing?s=20",
                  label: "Twitter",
                },
                {
                  icon: <FaFacebook size={18} />,
                  href: "https://www.facebook.com/share/1JBR3oQvvW/",
                  label: "Facebook",
                },
                {
                  icon: <FaTiktok size={18} />,
                  href: "https://vt.tiktok.com/ZSCP5Pjv1/",
                  label: "TikTok",
                },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="btn"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--bg-section)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--dark)",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}
            >
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["About Us", "/about"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: 16,
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  className="hover:text-(--primary) footer-link"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--dark)",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a
                href="mailto:info@bijonmarketing.co.ke"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    marginTop: 2,
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={15} />
                </div>
                <span
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: 16,
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  info@bijonmarketing.co.ke
                </span>
              </a>
              <a
                href="tel:+254 100 595 044"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                }}
              >
                <div style={{ color: "var(--primary)", flexShrink: 0 }}>
                  <Phone size={15} />
                </div>
                <span
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: 16,
                    color: "var(--muted)",
                  }}
                >
                  +254 100 595 044
                </span>
              </a>
              <a
                href="tel:+254 701 860 050"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                }}
              >
                <div style={{ color: "var(--primary)", flexShrink: 0 }}>
                  <Phone size={15} />
                </div>
                <span
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: 16,
                    color: "var(--muted)",
                  }}
                >
                  +254 701 860 050
                </span>
              </a>
              <div
                style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
              >
                <div
                  style={{
                    marginTop: 2,
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={15} />
                </div>
                <span
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: 16,
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  Marsabit Plaza Ngong Road, Nairobi Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--dark)",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}
            >
              Legal
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
                (label) => (
                  <a
                    key={label}
                    href="#"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 16,
                      color: "var(--muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    className="hover:text-(--primary)"
                  >
                    {label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 13,
              color: "var(--muted)",
            }}
          >
            © {year} Bijon Marketing. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 13,
              color: "var(--muted)",
            }}
          >
            Built with love in Nairobi, Kenya
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--primary) !important; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
