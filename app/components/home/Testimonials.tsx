"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    quote:
      "Bijon's integrated approach to marketing transformed our business. Their digital, branding, and creative services worked seamlessly together to give us a significant increase in sales.",
    name: "John Mwangi",
    role: "CEO, TechStart Kenya",
    image:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
  },
  {
    quote:
      "The experiential marketing event Bijon created for our boutique was phenomenal. Combined with their creative content and media buying, we tripled our customer base!",
    name: "Amina Hassan",
    role: "Owner, Nairobi Boutique",
    image:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
  },
  {
    quote:
      "Bijon's media planning and creative services helped us reach international tourists effectively. Our bookings increased and brand recognition improved dramatically!",
    name: "David Kamau",
    role: "Director, Savanna Tours",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
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

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => goTo((active + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [active]);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 300);
  };

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#131b2e",
        padding: "120px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,74,198,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(137,65,0,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Decorative quote marks */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          fontSize: 200,
          color: "rgba(255,255,255,0.02)",
          fontFamily: "Georgia, serif",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
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
            marginBottom: 72,
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
              Client Stories
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
              color: "#fff",
              margin: 0,
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "center",
          }}
          className="testi-grid"
        >
          {/* LEFT: Main testimonial */}
          <div
            className="reveal-left"
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            {/* Quote icon */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                backgroundColor: "rgba(0,74,198,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary)",
              }}
            >
              <Quote size={24} />
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: 4 }}>
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} size={18} color="#f59e0b" />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontSize: "clamp(18px, 2.2vw, 26px)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.55,
                margin: 0,
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                opacity: animating ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(0,74,198,0.5)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 2,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingTop: 8,
              }}
            >
              <button
                onClick={() =>
                  goTo((active - 1 + testimonials.length) % testimonials.length)
                }
                className="btn"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "transparent",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={18} />
              </button>

              <div style={{ display: "flex", gap: 6 }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      height: 4,
                      borderRadius: 2,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      width: i === active ? 28 : 8,
                      backgroundColor:
                        i === active
                          ? "var(--primary)"
                          : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => goTo((active + 1) % testimonials.length)}
                className="btn"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,74,198,0.4)",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT: All testimonial cards */}
          <div
            className="reveal-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                style={{
                  backgroundColor:
                    i === active
                      ? "rgba(0,74,198,0.15)"
                      : "rgba(255,255,255,0.04)",
                  border: `1px solid ${
                    i === active
                      ? "rgba(0,74,198,0.4)"
                      : "rgba(255,255,255,0.08)"
                  }`,
                  borderRadius: 16,
                  padding: "20px 24px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
                className="testi-card"
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: `2px solid ${
                      i === active ? "var(--primary)" : "rgba(255,255,255,0.1)"
                    }`,
                    transition: "border-color 0.3s",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: i === active ? "#fff" : "rgba(255,255,255,0.7)",
                      marginBottom: 4,
                      transition: "color 0.3s",
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {item.role}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                      marginTop: 6,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.quote}
                  </p>
                </div>

                {/* Active indicator */}
                {i === active && (
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "var(--primary)",
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testi-card:hover {
          background-color: rgba(255,255,255,0.07) !important;
        }
        @media (max-width: 768px) {
          .testi-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
