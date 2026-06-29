"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Award,
  Globe,
} from "lucide-react";

const values = [
  {
    icon: <Target size={24} />,
    title: "Results-Driven",
    description:
      "We focus on metrics that matter to your business growth — not vanity numbers. Every strategy we build is tied to real, measurable outcomes.",
    color: "var(--primary)",
    bg: "rgba(0,74,198,0.08)",
  },
  {
    icon: <Eye size={24} />,
    title: "Local Insight",
    description:
      "Deep understanding of Kenya's unique market landscape, combined with international best practices to deliver campaigns that truly resonate.",
    color: "var(--accent)",
    bg: "rgba(137,65,0,0.08)",
  },
  {
    icon: <Heart size={24} />,
    title: "Client-Centered",
    description:
      "We see ourselves as an extension of your team, fully invested in your success. Your goals become our goals from day one.",
    color: "var(--primary)",
    bg: "rgba(0,74,198,0.08)",
  },
  {
    icon: <Zap size={24} />,
    title: "Innovation-Led",
    description:
      "Cutting-edge technology and creative thinking drive everything we do. We stay ahead of trends so your brand always leads the conversation.",
    color: "var(--accent)",
    bg: "rgba(137,65,0,0.08)",
  },
];

const stats = [
  {
    icon: <Users size={20} />,
    value: "120+",
    label: "Clients Served",
    color: "var(--primary)",
  },
  {
    icon: <TrendingUp size={20} />,
    value: "300%",
    label: "Avg. ROI Growth",
    color: "var(--accent)",
  },
  {
    icon: <Award size={20} />,
    value: "4+",
    label: "Years of Excellence",
    color: "var(--primary)",
  },
  {
    icon: <Globe size={20} />,
    value: "50+",
    label: "Campaigns Delivered",
    color: "var(--accent)",
  },
];

const team = [
  {
    name: "Innocent Simiyu",
    role: "Chief Executive Officer",
    image:
      "https://images.pexels.com/photos/3760137/pexels-photo-3760137.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Charles Lusweti",
    role: "Head of Digital Marketing",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Phoebe Wanjiku",
    role: "Creative Director",
    image:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Victor Sudi",
    role: "Head of Experiential Marketing",
    image:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".about-section");
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
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section
        className="about-section"
        style={{
          backgroundColor: "#131b2e",
          padding: "160px 32px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "center",
          }}
          className="about-hero-grid"
        >
          {/* Left */}
          <div className="reveal-left">
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
                About Us
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 5.5vw, 64px)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-1.5px",
                lineHeight: 1.08,
                marginBottom: 24,
              }}
            >
              We author Kenya&apos;s most compelling{" "}
              <span style={{ color: "var(--accent)" }}>brand stories.</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75,
                marginBottom: 40,
              }}
            >
              Founded in 2021, Bijon Marketing has grown from a small section in
              Bijon Brand Africa to Kenya&apos;s most trusted full-service
              marketing agency.
            </p>

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
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: image */}
          <div className="reveal-right">
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 32px 64px -12px rgba(0,0,0,0.4)",
                position: "relative",
              }}
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Bijon Marketing Team"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(19,27,46,0.5) 0%, transparent 60%)",
                }}
              />
              {/* Founded badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  backgroundColor: "var(--primary)",
                  borderRadius: 14,
                  padding: "14px 20px",
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
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="about-section"
        style={{
          backgroundColor: "var(--bg-section)",
          padding: "60px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
          className="stats-grid"
        >
          {stats.map(({ icon, value, label, color }) => (
            <div
              key={label}
              className="reveal hover-lift"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "28px 20px",
                backgroundColor: "var(--card)",
                borderRadius: 16,
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
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
                  fontSize: "clamp(28px, 3.5vw, 40px)",
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
      </section>

      {/* Mission & Vision */}
      <section
        className="about-section"
        style={{
          backgroundColor: "var(--bg)",
          padding: "100px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
              Who We Are
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 80,
            }}
            className="mv-grid"
          >
            {/* Mission */}
            <div
              className="reveal-left hover-lift"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, #1e3a8a 100%)",
                borderRadius: 24,
                padding: "clamp(32px, 4vw, 48px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  fontSize: 40,
                  marginBottom: 20,
                }}
              >
                🎯
              </div>
              <h3
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                To help Kenyan businesses achieve their marketing goals through
                innovative strategies and cutting-edge technology. We combine
                local market knowledge with international best practices to
                deliver campaigns that resonate with Kenyan audiences while
                meeting global standards.
              </p>
            </div>

            {/* Vision */}
            <div
              className="reveal-right hover-lift"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, #c05c00 100%)",
                borderRadius: 24,
                padding: "clamp(32px, 4vw, 48px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  fontSize: 40,
                  marginBottom: 20,
                }}
              >
                🚀
              </div>
              <h3
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                To become Africa&apos;s most trusted full-service marketing
                agency — known for our integrity, creativity, and the
                transformative results we deliver for clients across the
                continent and beyond.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 100px)",
              alignItems: "center",
            }}
            className="story-grid"
          >
            <div className="reveal-left">
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 700,
                  color: "var(--dark)",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Our Story
              </h2>
              <div
                style={{
                  width: 56,
                  height: 4,
                  background:
                    "linear-gradient(to right, var(--primary), var(--accent))",
                  borderRadius: 2,
                  marginBottom: 24,
                }}
              />
              <p
                style={{
                  fontSize: 16,
                  color: "var(--text)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                Founded in 2021, Bijon Marketing has grown from a small section
                in Bijon Brand Africa to Kenya&apos;s most trusted full-service
                marketing agency. We&apos;ve helped businesses achieve their
                marketing goals through innovative strategies and cutting-edge
                technology.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--text)",
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Our team combines local market knowledge with international best
                practices to deliver campaigns that resonate with Kenyan
                audiences while meeting global standards. We focus on metrics
                that matter to your business growth.
              </p>
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
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="reveal-right" style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  boxShadow: "0 24px 48px -12px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Floating card */}
              <div
                style={{
                  position: "absolute",
                  bottom: 32,
                  left: -32,
                  backgroundColor: "var(--card)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  boxShadow: "0 16px 40px -8px rgba(0,0,0,0.15)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "var(--primary)",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  120+
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                  }}
                >
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="about-section"
        style={{
          backgroundColor: "var(--bg-section)",
          padding: "100px 32px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{
              textAlign: "center",
              marginBottom: 64,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 16,
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
                What Drives Us
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
                color: "var(--dark)",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Our Core Values
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            className="values-grid"
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`reveal hover-lift d${index + 1}`}
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: 20,
                  padding: "clamp(24px, 3vw, 36px)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    backgroundColor: value.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: value.color,
                  }}
                >
                  {value.icon}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--dark)",
                    margin: 0,
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="about-section"
        style={{
          backgroundColor: "var(--bg)",
          padding: "100px 32px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{
              textAlign: "center",
              marginBottom: 64,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 16,
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
                The People Behind the Work
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
                color: "var(--dark)",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Meet Our Team
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            className="team-grid"
          >
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`reveal hover-lift d${index + 1}`}
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    aspectRatio: "1/1",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    className="team-img"
                  />
                </div>
                <div
                  style={{
                    padding: "20px 24px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: 4,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="about-section"
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
            Ready to work with us?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            Let&apos;s build something great together. Reach out and let&apos;s
            start the conversation.
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
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .team-img:hover { transform: scale(1.05); }
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
          .mv-grid { grid-template-columns: 1fr !important; }
          .story-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
