"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const contactInfo: {
  icon: string;
  label: string;
  value: string;
  value2?: string;
  href: string;
  color: string;
  bg: string;
}[] = [
  {
    icon: "mail",
    label: "Email Us",
    value: "info@bijonmarketing.co.ke",
    value2: "support@bijonmarketing.co.ke",
    href: "mailto:info@bijonmarketing.co.ke",
    color: "var(--primary)",
    bg: "rgba(0,74,198,0.08)",
  },
  {
    icon: "phone",
    label: "Call Us",
    value: "+254 100 595 044",
    value2: "+254 701 860 050",
    href: "tel:+254100595044",
    color: "var(--accent)",
    bg: "rgba(137,65,0,0.08)",
  },

  {
    icon: "map",
    label: "Our Location",
    value: "Marsabit Plaza Ngong Road, Nairobi Kenya",
    href: "#",
    color: "var(--primary)",
    bg: "rgba(0,74,198,0.08)",
  },
];

export default function CTAForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 5000);
      setForm({ name: "", email: "", service: "", message: "" });
    }, 1500);
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    backgroundColor: "var(--bg-section)",
    border: `1.5px solid ${
      focus === name ? "var(--primary)" : "var(--border)"
    }`,
    borderRadius: 10,
    padding: "14px 16px",
    fontSize: 15,
    color: "var(--dark)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focus === name ? "0 0 0 3px rgba(0,74,198,0.1)" : "none",
    fontFamily: "Outfit, sans-serif",
  });

  const getIcon = (type: string) => {
    if (type === "mail") return <Mail size={18} />;
    if (type === "phone") return <Phone size={18} />;
    return <MapPin size={18} />;
  };

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
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,74,198,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(137,65,0,0.04) 0%, transparent 70%)",
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
              Get In Touch
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
            Ready to author your
            <span style={{ color: "var(--accent)" }}> next chapter?</span>
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
            Let&apos;s discuss how Bijon Marketing can elevate your brand
            through strategic marketing and performance-driven campaigns.
          </p>
        </div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "clamp(32px, 5vw, 72px)",
            alignItems: "start",
          }}
          className="cta-grid"
        >
          {/* LEFT: Contact info */}
          <div
            className="reveal-left"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Info card */}
            <div
              style={{
                backgroundColor: "var(--card)",
                borderRadius: 20,
                padding: 32,
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--dark)",
                  margin: 0,
                }}
              >
                Contact Information
              </h3>
            </div>
            {contactInfo.map((item) => (
              <a
                key={item.value}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  transition: "transform 0.2s",
                }}
                className="btn"
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: item.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    flexShrink: 0,
                  }}
                >
                  {getIcon(item.icon)}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--muted)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: 2,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--dark)",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </div>
                  {item.value2 && (
                    <div
                      style={{
                        fontSize: 15,
                        color: "var(--dark)",
                        fontWeight: 500,
                        marginTop: 2,
                      }}
                    >
                      {item.value2}
                    </div>
                  )}
                </div>
              </a>
            ))}

            {/* Decorative card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, #1e3a8a 100%)",
                borderRadius: 20,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ fontSize: 32, lineHeight: 1 }}>🚀</div>
              <h4
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Let&apos;s build something great
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                We typically respond within 24 hours. Our team is ready to help
                you take your brand to the next level.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                {["Strategy", "Creative", "Growth"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.9)",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      padding: "4px 12px",
                      borderRadius: 100,
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="reveal-right">
            <div
              style={{
                backgroundColor: "var(--card)",
                borderRadius: 24,
                padding: "clamp(24px, 4vw, 48px)",
                boxShadow: "0 24px 48px -12px rgba(0,0,0,0.08)",
                border: "1px solid var(--border)",
              }}
            >
              {sent ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      backgroundColor: "rgba(0,74,198,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 32,
                    }}
                  >
                    ✅
                  </div>
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "var(--dark)",
                      margin: 0,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: 16, color: "var(--text)", margin: 0 }}>
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "var(--dark)",
                        margin: "0 0 4px 0",
                      }}
                    >
                      Send Us a Message
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--muted)",
                        margin: 0,
                      }}
                    >
                      Fill in the form below and we&apos;ll be in touch.
                    </p>
                  </div>

                  {/* Name + Email */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                    className="form-row"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <label
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--text)",
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        onFocus={() => setFocus("name")}
                        onBlur={() => setFocus("")}
                        style={inputStyle("name")}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <label
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--text)",
                        }}
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        onFocus={() => setFocus("email")}
                        onBlur={() => setFocus("")}
                        style={inputStyle("email")}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--text)",
                      }}
                    >
                      Interested Service
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      onFocus={() => setFocus("service")}
                      onBlur={() => setFocus("")}
                      style={{
                        ...inputStyle("service"),
                        appearance: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Select a service...</option>
                      <option>Digital Marketing</option>
                      <option>Experiential Marketing</option>
                      <option>Media Planning & Buying</option>
                      <option>Creative Content</option>
                      <option>Branding & Identity</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--text)",
                      }}
                    >
                      Project Details
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your goals and project..."
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      onFocus={() => setFocus("message")}
                      onBlur={() => setFocus("")}
                      style={{
                        ...inputStyle("message"),
                        resize: "vertical",
                        minHeight: 120,
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn"
                    disabled={loading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      backgroundColor: loading
                        ? "rgba(0,74,198,0.7)"
                        : "var(--primary)",
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: 600,
                      padding: "16px",
                      borderRadius: 12,
                      border: "none",
                      cursor: loading ? "not-allowed" : "pointer",
                      boxShadow: "0 8px 24px -4px rgba(0,74,198,0.4)",
                      width: "100%",
                      transition: "all 0.2s",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {loading ? (
                      <>
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTop: "2px solid #fff",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
