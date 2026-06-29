"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Comprehensive online strategies to build brand presence, drive engagement, and generate measurable conversions through digital channels.",
    image:
      "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["SEO", "Paid Media", "Social Media", "Email Marketing"],
    color: "var(--primary)",
    lightColor: "rgba(0,74,198,0.08)",
  },
  {
    number: "02",
    title: "Experiential Marketing",
    description:
      "Creating immersive, memorable brand experiences that foster emotional connections and direct consumer engagement in physical or virtual spaces.",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Brand Activations", "Events", "Pop-Ups", "Virtual Experiences"],
    color: "var(--accent)",
    lightColor: "rgba(137,65,0,0.08)",
  },
  {
    number: "03",
    title: "Media Planning & Buying",
    description:
      "Strategic placement of advertising across optimal channels to reach target audiences efficiently while maximizing budget effectiveness.",
    image:
      "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["TV & Radio", "OOH", "Digital Media", "Programmatic"],
    color: "var(--primary)",
    lightColor: "rgba(0,74,198,0.08)",
  },
  {
    number: "04",
    title: "Creative Content",
    description:
      "Crafting compelling narratives, visuals, and multimedia content that captures attention, communicates value, and inspires action.",
    image:
      "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Video Production", "Copywriting", "Photography", "Design"],
    color: "var(--accent)",
    lightColor: "rgba(137,65,0,0.08)",
  },
];

export default function Services() {
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
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "var(--bg-section)",
        padding: "120px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,74,198,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            marginBottom: 80,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
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
              What We Do
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
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-1.2px",
              color: "var(--dark)",
              margin: 0,
            }}
          >
            Precision Services
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--text)",
              maxWidth: 520,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Full-service marketing capabilities tailored to Kenya&apos;s market,
            delivered with global standards.
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 28,
          }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal hover-lift ${index % 2 === 0 ? "" : "d1"}`}
              style={{
                backgroundColor: "var(--card)",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 220,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  className="service-img"
                />
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(19,27,46,0.5) 100%)",
                  }}
                />
                {/* Number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    backgroundColor: service.color,
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 100,
                    letterSpacing: "1px",
                  }}
                >
                  {service.number}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "28px 32px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  flex: 1,
                }}
              >
                {/* Icon dot + title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: service.color,
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--dark)",
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginTop: 4,
                  }}
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: service.color,
                        backgroundColor: service.lightColor,
                        padding: "4px 12px",
                        borderRadius: 100,
                        border: `1px solid ${service.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div style={{ marginTop: "auto", paddingTop: 8 }}>
                  <Link
                    href="/services"
                    className="btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 14,
                      fontWeight: 600,
                      color: service.color,
                      textDecoration: "none",
                    }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: 56,
          }}
        >
          <Link
            href="/services"
            className="btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "var(--primary)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 12,
              textDecoration: "none",
              boxShadow: "0 8px 24px -4px rgba(0,74,198,0.4)",
            }}
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        .service-img:hover { transform: scale(1.05); }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
