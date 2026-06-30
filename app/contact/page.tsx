"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Mail, MapPin, Phone, Star } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "feedback">("contact");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    rating: 0,
    experience: "",
    message: "",
  });
  const [contactSent, setContactSent] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);
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
      { threshold: 0.05 },
    );
    const sections = document.querySelectorAll(".contact-section");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    backgroundColor: "var(--bg-section)",
    border: `1.5px solid ${focus === name ? "var(--primary)" : "var(--border)"}`,
    borderRadius: 10,
    padding: "14px 16px",
    fontSize: 15,
    color: "var(--dark)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focus === name ? "0 0 0 3px rgba(0,74,198,0.1)" : "none",
    fontFamily: "Outfit, sans-serif",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setContactSent(true);
      setTimeout(() => setContactSent(false), 5000);
      setContactForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFeedbackSent(true);
      setTimeout(() => setFeedbackSent(false), 5000);
      setFeedbackForm({
        name: "",
        email: "",
        rating: 0,
        experience: "",
        message: "",
      });
    }, 1500);
  };

  const socials = [
    {
      icon: <FaLinkedinIn size={16} />,
      href: "https://www.linkedin.com/company/bijon-marketing-agency/",
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: <FaInstagram size={16} />,
      href: "https://www.instagram.com/bijon_marketing/",
      label: "Instagram",
      color: "#e4405f",
    },
    {
      icon: <FaXTwitter size={16} />,
      href: "https://x.com/Bijonmarketing?s=20",
      label: "Twitter",
      color: "#000000",
    },
    {
      icon: <FaFacebook size={16} />,
      href: "https://www.facebook.com/share/1JBR3oQvvW/",
      label: "Facebook",
      color: "#1877f2",
    },
    {
      icon: <FaTiktok size={16} />,
      href: "https://vt.tiktok.com/ZSCP5Pjv1/",
      label: "TikTok",
      color: "#000000",
    },
  ];

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section
        className="contact-section"
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
          }}
        >
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
                Contact Us
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
                maxWidth: 700,
              }}
            >
              Let&apos;s start a{" "}
              <span style={{ color: "var(--accent)" }}>conversation.</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.6)",
                maxWidth: 560,
                lineHeight: 1.75,
              }}
            >
              Whether you have a project in mind or just want to explore
              possibilities, we&apos;d love to hear from you. Our team typically
              responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="contact-section"
        style={{
          backgroundColor: "var(--bg)",
          padding: "100px 32px",
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
              "radial-gradient(circle, rgba(0,74,198,0.04) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* LEFT: Info */}
          <div
            className="reveal-left"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Contact details card */}
            <div
              style={{
                backgroundColor: "var(--card)",
                borderRadius: 20,
                padding: 32,
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--dark)",
                  margin: 0,
                }}
              >
                Contact Information
              </h3>

              {/* Email */}
              <a
                href="mailto:info@bijonmarketing.co.ke"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                }}
                className="btn"
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "rgba(0,74,198,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
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
                    Email Us
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--dark)",
                      fontWeight: 500,
                    }}
                  >
                    info@bijonmarketing.co.ke
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+254100595044"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                }}
                className="btn"
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "rgba(137,65,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
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
                    Call Us
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--dark)",
                      fontWeight: 500,
                    }}
                  >
                    +254 100 595 044
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--dark)",
                      fontWeight: 500,
                      marginTop: 2,
                    }}
                  >
                    +254 701 860 050
                  </div>
                </div>
              </a>

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "rgba(0,74,198,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
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
                    Our Location
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--dark)",
                      fontWeight: 500,
                    }}
                  >
                    Nairobi, Kenya
                  </div>
                </div>
              </div>
            </div>

            {/* Social media card */}
            <div
              style={{
                backgroundColor: "var(--card)",
                borderRadius: 20,
                padding: 32,
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--dark)",
                  margin: 0,
                }}
              >
                Follow Us
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
                className="socials-grid"
              >
                {socials.map(({ icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "12px 16px",
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--bg-section)",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        backgroundColor: `${color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color,
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--dark)",
                      }}
                    >
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours card */}
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
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Business Hours
              </h3>
              {[
                { day: "Monday - Friday", hours: "9:00 AM - 4:00 PM" },
                { day: "Saturday", hours: "9:00 AM - 12:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map(({ day, hours }) => (
                <div
                  key={day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}
                  >
                    {day}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color:
                        hours === "Closed" ? "rgba(255,255,255,0.4)" : "#fff",
                    }}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Forms */}
          <div className="reveal-right">
            {/* Tab switcher */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 32,
                backgroundColor: "var(--bg-section)",
                padding: 6,
                borderRadius: 14,
                border: "1px solid var(--border)",
              }}
            >
              {[
                { key: "contact", label: "📩 Send a Message" },
                { key: "feedback", label: "⭐ Leave Feedback" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as "contact" | "feedback")}
                  style={{
                    flex: 1,
                    padding: "12px 20px",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 15,
                    fontWeight: 600,
                    transition: "all 0.2s",
                    backgroundColor:
                      activeTab === key ? "var(--card)" : "transparent",
                    color:
                      activeTab === key ? "var(--primary)" : "var(--muted)",
                    boxShadow:
                      activeTab === key ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Contact Form */}
            {activeTab === "contact" && (
              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: 24,
                  padding: "clamp(24px, 4vw, 48px)",
                  boxShadow: "0 24px 48px -12px rgba(0,0,0,0.08)",
                  border: "1px solid var(--border)",
                }}
              >
                {contactSent ? (
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
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: "rgba(0,74,198,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 36,
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
                    <p
                      style={{ fontSize: 16, color: "var(--text)", margin: 0 }}
                    >
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleContactSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: 22,
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
                        Fill in the form and we&apos;ll be in touch shortly.
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
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              name: e.target.value,
                            })
                          }
                          onFocus={() => setFocus("c-name")}
                          onBlur={() => setFocus("")}
                          style={inputStyle("c-name")}
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
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              email: e.target.value,
                            })
                          }
                          onFocus={() => setFocus("c-email")}
                          onBlur={() => setFocus("")}
                          style={inputStyle("c-email")}
                        />
                      </div>
                    </div>

                    {/* Phone + Service */}
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
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+254 700 000 000"
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              phone: e.target.value,
                            })
                          }
                          onFocus={() => setFocus("c-phone")}
                          onBlur={() => setFocus("")}
                          style={inputStyle("c-phone")}
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
                          Interested Service
                        </label>
                        <select
                          value={contactForm.service}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              service: e.target.value,
                            })
                          }
                          onFocus={() => setFocus("c-service")}
                          onBlur={() => setFocus("")}
                          style={{
                            ...inputStyle("c-service"),
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
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project and goals..."
                        required
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value,
                          })
                        }
                        onFocus={() => setFocus("c-message")}
                        onBlur={() => setFocus("")}
                        style={{
                          ...inputStyle("c-message"),
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
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Feedback Form */}
            {activeTab === "feedback" && (
              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: 24,
                  padding: "clamp(24px, 4vw, 48px)",
                  boxShadow: "0 24px 48px -12px rgba(0,0,0,0.08)",
                  border: "1px solid var(--border)",
                }}
              >
                {feedbackSent ? (
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
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: "rgba(245,158,11,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 36,
                      }}
                    >
                      ⭐
                    </div>
                    <h3
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "var(--dark)",
                        margin: 0,
                      }}
                    >
                      Thank You!
                    </h3>
                    <p
                      style={{ fontSize: 16, color: "var(--text)", margin: 0 }}
                    >
                      We appreciate your feedback. It helps us serve you better.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleFeedbackSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: 22,
                          fontWeight: 700,
                          color: "var(--dark)",
                          margin: "0 0 4px 0",
                        }}
                      >
                        Share Your Experience
                      </h3>
                      <p
                        style={{
                          fontSize: 14,
                          color: "var(--muted)",
                          margin: 0,
                        }}
                      >
                        We&apos;d love to hear about your experience working
                        with us.
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
                          value={feedbackForm.name}
                          onChange={(e) =>
                            setFeedbackForm({
                              ...feedbackForm,
                              name: e.target.value,
                            })
                          }
                          onFocus={() => setFocus("f-name")}
                          onBlur={() => setFocus("")}
                          style={inputStyle("f-name")}
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
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={feedbackForm.email}
                          onChange={(e) =>
                            setFeedbackForm({
                              ...feedbackForm,
                              email: e.target.value,
                            })
                          }
                          onFocus={() => setFocus("f-email")}
                          onBlur={() => setFocus("")}
                          style={inputStyle("f-email")}
                        />
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <label
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--text)",
                        }}
                      >
                        Overall Rating
                      </label>
                      <div style={{ display: "flex", gap: 8 }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() =>
                              setFeedbackForm({ ...feedbackForm, rating: star })
                            }
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(0)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: 4,
                              transition: "transform 0.15s",
                              transform:
                                star <= (hoveredStar || feedbackForm.rating)
                                  ? "scale(1.2)"
                                  : "scale(1)",
                            }}
                          >
                            <Star
                              size={32}
                              fill={
                                star <= (hoveredStar || feedbackForm.rating)
                                  ? "#f59e0b"
                                  : "none"
                              }
                              color={
                                star <= (hoveredStar || feedbackForm.rating)
                                  ? "#f59e0b"
                                  : "var(--border)"
                              }
                            />
                          </button>
                        ))}
                      </div>
                      {feedbackForm.rating > 0 && (
                        <p
                          style={{
                            fontSize: 13,
                            color: "#f59e0b",
                            margin: 0,
                            fontWeight: 500,
                          }}
                        >
                          {feedbackForm.rating === 1 && "Poor"}
                          {feedbackForm.rating === 2 && "Fair"}
                          {feedbackForm.rating === 3 && "Good"}
                          {feedbackForm.rating === 4 && "Very Good"}
                          {feedbackForm.rating === 5 && "Excellent! 🎉"}
                        </p>
                      )}
                    </div>

                    {/* Experience */}
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
                        Service You Used
                      </label>
                      <select
                        value={feedbackForm.experience}
                        onChange={(e) =>
                          setFeedbackForm({
                            ...feedbackForm,
                            experience: e.target.value,
                          })
                        }
                        onFocus={() => setFocus("f-exp")}
                        onBlur={() => setFocus("")}
                        style={{
                          ...inputStyle("f-exp"),
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
                        Your Feedback
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your experience working with Bijon Marketing..."
                        required
                        value={feedbackForm.message}
                        onChange={(e) =>
                          setFeedbackForm({
                            ...feedbackForm,
                            message: e.target.value,
                          })
                        }
                        onFocus={() => setFocus("f-message")}
                        onBlur={() => setFocus("")}
                        style={{
                          ...inputStyle("f-message"),
                          resize: "vertical",
                          minHeight: 120,
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn"
                      disabled={loading || feedbackForm.rating === 0}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        backgroundColor:
                          loading || feedbackForm.rating === 0
                            ? "rgba(245,158,11,0.5)"
                            : "#f59e0b",
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        padding: "16px",
                        borderRadius: 12,
                        border: "none",
                        cursor:
                          loading || feedbackForm.rating === 0
                            ? "not-allowed"
                            : "pointer",
                        boxShadow:
                          feedbackForm.rating > 0
                            ? "0 8px 24px -4px rgba(245,158,11,0.4)"
                            : "none",
                        width: "100%",
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Feedback <Star size={16} />
                        </>
                      )}
                    </button>
                    {feedbackForm.rating === 0 && (
                      <p
                        style={{
                          fontSize: 13,
                          color: "var(--muted)",
                          textAlign: "center",
                          margin: 0,
                        }}
                      >
                        Please select a star rating before submitting
                      </p>
                    )}
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
          @media (min-width: 400px) {
  .socials-grid { grid-template-columns: 1fr 1fr 1fr !important; }
}
      `}</style>
    </div>
  );
}
