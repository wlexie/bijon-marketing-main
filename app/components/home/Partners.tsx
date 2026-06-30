"use client";
import { useEffect, useRef } from "react";

const partners = [
  {
    name: "Safaricom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Safaricom_Logo.svg/2560px-Safaricom_Logo.svg.png",
  },
  {
    name: "Equity Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Equity_Bank_Kenya_logo.svg/2560px-Equity_Bank_Kenya_logo.svg.png",
  },
  {
    name: "KCB Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/KCB_Group_logo.svg/2560px-KCB_Group_logo.svg.png",
  },
  {
    name: "Nation Media",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Nation_Media_Group_logo.svg/2560px-Nation_Media_Group_logo.svg.png",
  },
  {
    name: "Kenya Airways",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kenya_Airways_logo.svg/2560px-Kenya_Airways_logo.svg.png",
  },
  {
    name: "Jubilee Insurance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Jubilee_Insurance_logo.svg/2560px-Jubilee_Insurance_logo.svg.png",
  },
  {
    name: "Java House",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Java_House_logo.svg/2560px-Java_House_logo.svg.png",
  },
  {
    name: "Britam",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Britam_logo.svg/2560px-Britam_logo.svg.png",
  },
];

const partnerNames = [
  "Safaricom",
  "Equity Bank",
  "KCB Group",
  "Nation Media Group",
  "Kenya Airways",
  "Jubilee Insurance",
  "Java House",
  "Britam Holdings",
  "Naivas Supermarkets",
  "Total Energies",
  "Diageo Kenya",
  "Unilever Kenya",
  "Sarova Hotels",
  "Bamburi Cement",
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

  const doubled = [...partnerNames, ...partnerNames];

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
            {doubled.map((name, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 32px",
                  backgroundColor: "var(--card)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  minWidth: 180,
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                className="partner-card"
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--text)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {name}
                </span>
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
            {[...doubled].reverse().map((name, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 32px",
                  backgroundColor: "var(--bg-section)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  minWidth: 180,
                  cursor: "default",
                }}
                className="partner-card"
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--muted)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {name}
                </span>
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
        .partner-card:hover {
          border-color: var(--primary) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(0,74,198,0.1);
        }
        @media (max-width: 768px) {
          .partners-stats {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
            padding: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .partners-stats {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
