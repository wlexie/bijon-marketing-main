"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  Award,
  Zap,
} from "lucide-react";

const slides = [
  {
    tag: "Kenya's Full-Service Marketing Agency",
    headline: ["We don't just", "market. We"],
    accent: "author your",
    end: "success.",
    sub: "Bijon Marketing blends executive-level strategy with editorial precision to transform high-growth brands into industry leaders.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    tag: "Digital Marketing Excellence",
    headline: ["Comprehensive", "strategies that"],
    accent: "drive real",
    end: "results.",
    sub: "From SEO to paid media and social channels, we manage your entire digital ecosystem with surgical precision.",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    tag: "Experiential Marketing",
    headline: ["Immersive brand", "activations that"],
    accent: "create lasting",
    end: "connections.",
    sub: "We create memorable brand experiences that foster emotional connections and direct consumer engagement across Kenya.",
    image:
      "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimKey((k) => k + 1);
      setIsTransitioning(false);
    }, 300);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <section
      style={{
        backgroundColor: "var(--bg)",
        minHeight: "100vh",
        paddingTop: 72,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,74,198,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(137,65,0,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Floating dots pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: i % 2 === 0 ? "var(--primary)" : "var(--accent)",
              opacity: 0.15,
              top: `${15 + i * 13}%`,
              left: `${5 + i * 8}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "60px 32px 40px",
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* LEFT: Text content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Tag pill */}
            <div
              key={`tag-${animKey}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(0,74,198,0.08)",
                border: "1px solid rgba(0,74,198,0.15)",
                padding: "8px 16px",
                borderRadius: 100,
                width: "fit-content",
                animation: "fadeUp 0.5s ease both",
              }}
            >
              {/* Pulsing dot */}
              <span style={{ position: "relative", display: "inline-flex" }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                    animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                    opacity: 0.4,
                  }}
                />
              </span>
              <span
                style={{
                  color: "var(--primary)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <div
              key={`h-${animKey}`}
              style={{ animation: "fadeUp 0.55s 0.05s ease both", opacity: 0 }}
            >
              <h1
                style={{
                  fontSize: "clamp(40px, 5.5vw, 68px)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-1.5px",
                  color: "var(--dark)",
                  margin: 0,
                }}
              >
                {slide.headline.map((line, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
                <span style={{ display: "block" }}>
                  <span
                    style={{
                      color: "var(--accent)",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    {slide.accent}
                    {/* Underline decoration */}
                    <svg
                      style={{
                        position: "absolute",
                        bottom: -6,
                        left: 0,
                        width: "100%",
                        height: 8,
                        overflow: "visible",
                      }}
                      viewBox="0 0 200 8"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,6 Q50,0 100,5 Q150,10 200,4"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        style={{ opacity: 0.4 }}
                      />
                    </svg>
                  </span>
                </span>
                <span style={{ display: "block" }}>{slide.end}</span>
              </h1>
            </div>

            {/* Subtext */}
            <p
              key={`sub-${animKey}`}
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "var(--text)",
                lineHeight: 1.75,
                maxWidth: 520,
                margin: 0,
                animation: "fadeUp 0.55s 0.1s ease both",
                opacity: 0,
              }}
            >
              {slide.sub}
            </p>

            {/* CTA Buttons */}
            <div
              key={`btns-${animKey}`}
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                animation: "fadeUp 0.55s 0.15s ease both",
                opacity: 0,
              }}
            >
              <Link
                href="/contact"
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "14px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  boxShadow: "0 8px 24px -4px rgba(0,74,198,0.4)",
                }}
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "transparent",
                  border: "1.5px solid var(--border-light)",
                  color: "var(--dark)",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "14px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                Our Services
              </Link>
            </div>

            {/* Slide controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                paddingTop: 8,
              }}
            >
              <button
                onClick={prev}
                className="btn"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1.5px solid var(--border-light)",
                  background: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text)",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <div style={{ display: "flex", gap: 6 }}>
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      height: 4,
                      borderRadius: 2,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.4s ease",
                      width: i === current ? 28 : 8,
                      backgroundColor:
                        i === current
                          ? "var(--primary)"
                          : "var(--border-light)",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="btn"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "none",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,74,198,0.3)",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT: Image card */}
          <div style={{ position: "relative" }} className="hero-image-col">
            {/* Main image card */}
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4/5",
                boxShadow: "0 32px 64px -12px rgba(0,0,0,0.15)",
                transition: "opacity 0.3s ease",
                opacity: isTransitioning ? 0.6 : 1,
              }}
            >
              <img
                key={`img-${animKey}`}
                src={slide.image}
                alt="Bijon Marketing"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  animation: "zoomIn 6s ease forwards",
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(19,27,46,0.5) 0%, transparent 50%)",
                }}
              />

              {/* Bottom label on image */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 14,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: 2,
                    }}
                  >
                    Current Focus
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>
                    {slide.tag}
                  </div>
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRight size={16} color="#fff" />
                </div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: 80,
                left: -20,
                backgroundColor: "var(--accent)",
                borderRadius: 12,
                padding: "10px 16px",
                boxShadow: "0 8px 24px rgba(137,65,0,0.3)",
                animation: "slideInLeft 0.6s 0.4s ease both",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
              className="hero-badge"
            >
              <span style={{ fontSize: 18 }}>🏆</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>
                  Top Agency
                </div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)" }}>
                  Kenya 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          from { transform: translateY(0px); }
          to   { transform: translateY(-12px); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes zoomIn {
          from { transform: scale(1.05); }
          to   { transform: scale(1); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-col { display: none !important; }
          .hero-stats-card { display: none !important; }
          .hero-badge { display: none !important; }
        }
        @media (max-width: 1100px) {
          .hero-stats-card { right: -8px !important; }
          .hero-badge { left: -8px !important; }
        }
      `}</style>
    </section>
  );
}
