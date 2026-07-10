"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Calendar, TrendingUp } from "lucide-react";

// const stats = [
//   {
//     icon: <Users size={20} />,
//     value: "120+",
//     label: "Global Clients",
//     color: "var(--primary)",
//   },
//   {
//     icon: <Calendar size={20} />,
//     value: "4+",
//     label: "Years in Kenya",
//     color: "var(--accent)",
//   },
//   {
//     icon: <TrendingUp size={20} />,
//     value: "300%",
//     label: "Avg. ROI Growth",
//     color: "var(--primary)",
//   },
// ];

export default function OurStory() {
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

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "var(--bg)",
        padding: "120px 32px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,74,198,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section label */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 64,
          }}
        >
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
            Our Story
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "center",
          }}
          className="story-grid"
        >
          {/* LEFT: Image collage */}
          <div className="reveal-left" style={{ position: "relative" }}>
            {/* Main large image */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                aspectRatio: "4/5",
                boxShadow: "0 24px 48px -12px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bijon Marketing team"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(19,27,46,0.4) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Small floating image */}
            <div
              style={{
                position: "absolute",
                bottom: 40,
                right: -32,
                width: "45%",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 16px 32px -8px rgba(0,0,0,0.2)",
                border: "4px solid var(--bg)",
                aspectRatio: "1/1",
              }}
            >
              <img
                src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Bijon team at work"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Floating year badge */}
            <div
              style={{
                position: "absolute",
                top: 32,
                left: -20,
                backgroundColor: "var(--primary)",
                borderRadius: 16,
                padding: "16px 20px",
                boxShadow: "0 8px 24px rgba(0,74,198,0.35)",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                2021
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Founded
              </div>
            </div>

            {/* Decorative dots */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: 20,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 6,
                opacity: 0.3,
              }}
            >
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div
            className="reveal-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-1.2px",
                color: "var(--dark)",
                margin: 0,
              }}
            >
              Our Story: Leading the{" "}
              <span
                style={{
                  color: "var(--accent)",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Narrative
              </span>
            </h2>

            {/* Divider */}
            <div
              style={{
                width: 60,
                height: 4,
                background:
                  "linear-gradient(to right, var(--primary), var(--accent))",
                borderRadius: 2,
              }}
            />

            <p
              style={{
                fontSize: 17,
                color: "var(--text)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Founded in 2021, Bijon Marketing has grown from a small section in
              Bijon Brand Africa to Kenya&apos;s most trusted full-service
              marketing agency. We&apos;ve helped businesses achieve their
              marketing goals through innovative strategies and cutting-edge
              technology.
            </p>

            <p
              style={{
                fontSize: 17,
                color: "var(--text)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Our team combines local market knowledge with international best
              practices to deliver campaigns that resonate with Kenyan audiences
              while meeting global standards.
            </p>

            {/* Stats row */}
            {/* <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                paddingTop: 16,
                marginTop: 8,
                borderTop: "1px solid var(--border-light)",
              }}
            >
              {stats.map(({ icon, value, label, color }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    padding: "16px",
                    backgroundColor: "var(--bg-section)",
                    borderRadius: 14,
                    border: "1px solid var(--border)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  className="hover-lift"
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: `${color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color,
                    }}
                  >
                    {icon}
                  </div>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      color,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div> */}

            <div style={{ paddingTop: 8 }}>
              <Link
                href="/about"
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--primary)",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "12px 0",
                  borderBottom: "2px solid var(--primary)",
                  transition: "gap 0.2s",
                }}
              >
                Read Full Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1100px) {
          .story-grid > div:first-child > div:nth-child(2) {
            right: -12px !important;
          }
        }
      `}</style>
    </section>
  );
}
