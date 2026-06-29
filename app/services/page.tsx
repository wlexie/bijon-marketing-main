"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    tagline: "Reach the right people at the right time",
    description:
      "Comprehensive online strategies to build brand presence, drive engagement, and generate measurable conversions through digital channels. From SEO to paid media, we manage the entire ecosystem with surgical precision.",
    features: [
      "Search Engine Optimisation (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Performance Analytics & Reporting",
    ],
    image:
      "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=900",
    color: "var(--primary)",
    bg: "rgba(0,74,198,0.06)",
  },
  {
    number: "02",
    title: "Experiential Marketing",
    tagline: "Create moments that matter",
    description:
      "Creating immersive, memorable brand experiences that foster emotional connections and direct consumer engagement in physical or virtual spaces. We design activations that leave lasting impressions.",
    features: [
      "Brand Activation Events",
      "Product Launch Campaigns",
      "Pop-Up Experiences",
      "Virtual & Hybrid Events",
      "Consumer Engagement Activations",
    ],
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=900",
    color: "var(--accent)",
    bg: "rgba(137,65,0,0.06)",
  },
  {
    number: "03",
    title: "Media Planning & Buying",
    tagline: "Put your message where it matters most",
    description:
      "Strategic placement of advertising across optimal channels to reach target audiences efficiently while maximizing budget effectiveness. We negotiate the best placements and ensure every shilling delivers maximum impact.",
    features: [
      "TV & Radio Advertising",
      "Out-of-Home (OOH) Advertising",
      "Digital Media Buying",
      "Programmatic Advertising",
      "Media Performance Analysis",
    ],
    image:
      "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=900",
    color: "var(--primary)",
    bg: "rgba(0,74,198,0.06)",
  },
  {
    number: "04",
    title: "Creative Content",
    tagline: "Stories that captivate and convert",
    description:
      "Crafting compelling narratives, visuals, and multimedia content that captures attention, communicates value, and inspires action. From social captions to full brand campaigns, we tell your story with impact.",
    features: [
      "Brand Video Production",
      "Photography & Visual Content",
      "Copywriting & Brand Voice",
      "Social Media Content Creation",
      "Campaign Creative Direction",
    ],
    image:
      "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=900",
    color: "var(--accent)",
    bg: "rgba(137,65,0,0.06)",
  },
  {
    number: "05",
    title: "Branding & Identity",
    tagline: "Build a brand that stands out",
    description:
      "Developing powerful brand identities that resonate with your target audience and stand the test of time. We craft visual systems, messaging frameworks, and brand guidelines that make your business unforgettable.",
    features: [
      "Logo Design & Visual Identity",
      "Brand Strategy & Positioning",
      "Brand Guidelines & Style Guides",
      "Messaging & Tone of Voice",
      "Brand Refresh & Rebranding",
    ],
    image:
      "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=900",
    color: "var(--primary)",
    bg: "rgba(0,74,198,0.06)",
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

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
    if (pageRef.current) observer.observe(pageRef.current);

    // Also observe each service section individually
    const sections = document.querySelectorAll(".service-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#131b2e",
          padding: "160px 32px 100px",
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
              "radial-gradient(circle, rgba(0,74,198,0.15) 0%, transparent 70%)",
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

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
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
              What We Offer
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-1.5px",
              lineHeight: 1.08,
              maxWidth: 700,
              marginBottom: 24,
            }}
          >
            Services built for{" "}
            <span style={{ color: "var(--accent)" }}>real growth.</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 560,
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            Full-service marketing capabilities tailored to Kenya&apos;s market,
            delivered with global standards and a deep understanding of what
            drives results.
          </p>

          {/* Service quick links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {services.map((s) => (
              <a
                key={s.number}
                href={`#service-${s.number}`}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "8px 16px",
                  borderRadius: 100,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                className="service-pill"
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      {services.map((service, index) => (
        <section
          key={service.number}
          id={`service-${service.number}`}
          className="service-section"
          style={{
            backgroundColor:
              index % 2 === 0 ? "var(--bg)" : "var(--bg-section)",
            padding: "100px 32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background number */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: index % 2 === 0 ? 32 : "auto",
              left: index % 2 !== 0 ? 32 : "auto",
              fontSize: "clamp(100px, 15vw, 200px)",
              fontWeight: 800,
              color: "var(--border)",
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
              opacity: 0.5,
            }}
          >
            {service.number}
          </div>

          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 100px)",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
            className="service-grid"
          >
            {/* Image */}
            <div
              className={index % 2 === 0 ? "reveal-left" : "reveal-right"}
              style={{
                order: index % 2 === 0 ? 1 : 2,
              }}
            >
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "4/3",
                  boxShadow: "0 24px 48px -12px rgba(0,0,0,0.15)",
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
                      "linear-gradient(to top, rgba(19,27,46,0.4) 0%, transparent 60%)",
                  }}
                />
                {/* Number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    backgroundColor: service.color,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "6px 16px",
                    borderRadius: 100,
                    letterSpacing: "1px",
                  }}
                >
                  {service.number} / 05
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={index % 2 === 0 ? "reveal-right" : "reveal-left"}
              style={{
                order: index % 2 === 0 ? 2 : 1,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* Tagline */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: service.bg,
                  padding: "6px 14px",
                  borderRadius: 100,
                  width: "fit-content",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: service.color,
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: service.color,
                  }}
                >
                  {service.tagline}
                </span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 700,
                  color: "var(--dark)",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                {service.title}
              </h2>

              {/* Divider */}
              <div
                style={{
                  width: 56,
                  height: 4,
                  background: `linear-gradient(to right, ${service.color}, transparent)`,
                  borderRadius: 2,
                }}
              />

              <p
                style={{
                  fontSize: 16,
                  color: "var(--text)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {service.description}
              </p>

              {/* Features */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <CheckCircle
                      size={18}
                      style={{ color: service.color, flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: 15,
                        color: "var(--text)",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: service.color,
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "14px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  width: "fit-content",
                  marginTop: 8,
                  boxShadow: `0 8px 24px -4px ${service.color}66`,
                }}
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #131b2e 0%, #1e3a8a 100%)",
          padding: "100px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(0,74,198,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-1.2px",
              marginBottom: 20,
            }}
          >
            Ready to grow your brand?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            Let&apos;s talk about how we can help you achieve your marketing
            goals with a strategy tailored specifically to your business.
          </p>
          <Link
            href="/contact"
            className="btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "var(--accent)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              padding: "16px 36px",
              borderRadius: 12,
              textDecoration: "none",
              boxShadow: "0 8px 24px -4px rgba(137,65,0,0.5)",
            }}
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .service-pill:hover {
          background-color: rgba(255,255,255,0.15) !important;
          color: #fff !important;
        }
        .service-img:hover {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: 1fr !important;
          }
          .service-grid > div {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
}
