"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";

const slides = [
  {
    tag: "Content Creation",
    headline: "Stories That Stick. Content That Converts.",
    description:
      "We craft compelling, high-quality narratives and visuals that capture attention, spark engagement, and turn casual scrollers into loyal customers.",
    image: "/hero-content/slide1.jpeg",
  },
  {
    tag: "Experiential Marketing",
    headline: "Don't Just Launch. Create an Experience.",
    description:
      "We bridge the gap between digital and physical, designing immersive, real-world brand activations that your audience will feel, remember, and share.",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    tag: "Digital Marketing",
    headline: "Precision Targeting. Measurable Growth.",
    description:
      "Stop guessing where your customers are. Our data-driven digital strategies put your brand right in front of the right audience at the perfect moment.",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    tag: "Branding & Identity",
    headline: "Unmistakable Identity. Unforgettable Brands.",
    description:
      "Go beyond a logo. We build cohesive, powerful brand identities, positioning, and design languages that command authority in your market.",
    image:
      "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    tag: "Media Planning & Buying",
    headline: "Maximize Your Reach. Optimize Your Spend.",
    description:
      "Get the ultimate return on your ad spend. We strategically plan, negotiate, and place your campaigns across top-tier media channels for maximum impact.",
    image:
      "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

// const stats = [
//   { icon: <Users size={16} />, value: "120+", label: "Clients" },
//   { icon: <TrendingUp size={16} />, value: "300%", label: "Avg. ROI" },
//   { icon: <Award size={16} />, value: "4+", label: "Yrs Active" },
//   { icon: <Zap size={16} />, value: "50+", label: "Campaigns" },
// ];

const SLIDE_DURATION = 8000;
const TEXT_FADE_DURATION = 700;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0); // what text is currently shown
  const [textVisible, setTextVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Whenever "active" changes, fade text out, swap content, fade text in
  useEffect(() => {
    setTextVisible(false); // start fade out
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDisplayed(active); // swap text content while invisible
      setTextVisible(true); // fade back in
    }, TEXT_FADE_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active]);

  const goTo = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive(index);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  const slide = slides[displayed];

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 650,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Background images — crossfade */}
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === active ? 1 : 0,
            transition: "opacity 2.2s ease-in-out",
          }}
        >
          <img
            src={s.image}
            alt={s.tag}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: i === active ? "scale(1.06)" : "scale(1)",
              transition: "transform 10s ease-out",
            }}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 60%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 45%, transparent 75%)",
        }}
      />

      {/* Content — single fading wrapper, no remount flash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 32px 80px",
          paddingTop: 100,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div
            style={{
              opacity: textVisible ? 1 : 0,
              transition: `opacity ${TEXT_FADE_DURATION}ms ease`,
            }}
          >
            {/* Tag pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "8px 18px",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              <span style={{ position: "relative", display: "inline-flex" }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                    opacity: 0.4,
                  }}
                />
              </span>
              <span
                style={{
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                color: "#fff",
                maxWidth: 760,
                marginBottom: 20,
              }}
            >
              {slide.headline}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75,
                maxWidth: 560,
                marginBottom: 36,
              }}
            >
              {slide.description}
            </p>
          </div>

          {/* CTAs — stay visible, don't fade with text */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            <Link
              href="/contact"
              className="btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#fff",
                color: "#131b2e",
                fontSize: 15,
                fontWeight: 700,
                padding: "15px 32px",
                borderRadius: 10,
                textDecoration: "none",
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
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                padding: "15px 28px",
                borderRadius: 10,
                textDecoration: "none",
              }}
            >
              Our Services
            </Link>
          </div>

          {/* Stats row */}
          {/* <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            {stats.map(({ icon, value, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goTo((active - 1 + slides.length) % slides.length)}
        className="btn hero-nav-btn"
        style={{
          position: "absolute",
          left: 24,
          top: "50%",
          transform: "translateY(-50%)",
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => goTo((active + 1) % slides.length)}
        className="btn hero-nav-btn"
        style={{
          position: "absolute",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide title indicator */}
      <div
        style={{
          position: "absolute",
          top: 96,
          right: 32,
          display: "flex",
          alignItems: "center",
          gap: 10,
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
          padding: "8px 18px",
          borderRadius: 100,
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "0.5px",
          }}
        >
          {String(active + 1).padStart(2, "0")}
        </span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>—</span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.3px",
          }}
        >
          {slides[active].tag}
        </span>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        .hero-nav-btn:hover {
          background-color: rgba(0,0,0,0.6) !important;
        }
        @media (max-width: 768px) {
          .hero-nav-btn { display: none !important; }
        }
      `}</style>
    </section>
  );
}
