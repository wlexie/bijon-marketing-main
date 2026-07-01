"use client";
import { useEffect, useRef } from "react";

const partners = [
  { name: "Medivic Medical Supplies", logo: "/partners/medivic.jpeg" },
  {
    name: "Conservation Alliance Kenya",
    logo: "/partners/conservation-alliance.jpeg",
  },
  { name: "Impala Saracens", logo: "/partners/impala-saracens.jpeg" },
  { name: "Kenya Harlequin FC", logo: "/partners/harlequin.jpeg" },
  { name: "Kenya Rugby Union", logo: "/partners/kenya-rugby.jpeg" },
  { name: "Jewels Promotions", logo: "/partners/jewels.jpeg" },
  { name: "Maji Moto Maasai Camp", logo: "/partners/maji-moto.jpeg" },
  { name: "Cigna Healthcare", logo: "/partners/cigna.jpeg" },
];

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el) => el.classList.add("in"));
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const doubled = [...partners, ...partners];

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "var(--bg)",
        padding: "100px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 200,
          background:
            "radial-gradient(ellipse, rgba(0,74,198,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          marginBottom: 56,
        }}
      >
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 2,
                backgroundColor: "var(--accent)",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Trusted By
            </span>
            <div
              style={{
                width: 40,
                height: 2,
                backgroundColor: "var(--accent)",
                borderRadius: 2,
              }}
            />
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "var(--dark)",
              margin: 0,
            }}
          >
            Our Partners
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--text)",
              maxWidth: 480,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            We are proud to work with some of Kenya&apos;s most respected brands
            and organisations.
          </p>
        </div>
      </div>

      {/* Marquee wrapper */}
      <div style={{ position: "relative" }}>
        {/* Fade left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 160,
            background:
              "linear-gradient(to right, var(--bg) 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Fade right */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 160,
            background:
              "linear-gradient(to left, var(--bg) 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Row 1 — left to right */}
        <div style={{ overflow: "hidden", marginBottom: 16 }}>
          <div className="marquee" style={{ gap: 16 }}>
            {doubled.map((partner, i) => (
              <div
                key={i}
                className="partner-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 40px",
                  flexShrink: 0,
                  height: 80,
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxHeight: 60,
                    maxWidth: 140,
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    filter: "var(--partner-filter)",
                    transition: "filter 0.3s ease, transform 0.3s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div style={{ overflow: "hidden" }}>
          <div
            className="marquee"
            style={{
              gap: 16,
              animationDirection: "reverse",
              animationDuration: "50s",
            }}
          >
            {[...doubled].reverse().map((partner, i) => (
              <div
                key={i}
                className="partner-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 40px",
                  flexShrink: 0,
                  height: 80,
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxHeight: 60,
                    maxWidth: 140,
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    filter: "var(--partner-filter)",
                    transition: "filter 0.3s ease, transform 0.3s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div
        className="reveal"
        style={{
          maxWidth: 1280,
          margin: "64px auto 0",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--bg-section)",
            borderRadius: 20,
            border: "1px solid var(--border)",
            padding: "32px 48px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
          className="partners-stats"
        >
          {[
            { value: "120+", label: "Brands Served", color: "var(--primary)" },
            { value: "50+", label: "Campaigns Run", color: "var(--accent)" },
            {
              value: "4+",
              label: "Years of Excellence",
              color: "var(--primary)",
            },
            { value: "98%", label: "Client Retention", color: "var(--accent)" },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 800,
                  color,
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  letterSpacing: "0.5px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
  :root {
    --partner-filter: grayscale(40%) opacity(0.75);
  }
  .dark {
    --partner-filter: grayscale(30%) opacity(0.6) brightness(1.3);
  }
  .partner-card:hover img {
    filter: none !important;
    transform: scale(1.08);
  }
  @media (max-width: 768px) {
    .partners-stats {
      grid-template-columns: 1fr 1fr !important;
      gap: 24px !important;
      padding: 24px !important;
    }
  }
`}</style>
    </section>
  );
}
