"use client"

import { useEffect, useState } from "react"

export default function HomeSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [displayText, setDisplayText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const fullText = "AI/ML Engineer | Full-Stack Developer | Precision-Engineering Next-Generation AI Systems"

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 40)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1
                  className="text-6xl md:text-8xl font-light tracking-tight drop-shadow-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  HARSHA
                </h1>
                <h1
                  className="text-5xl md:text-7xl font-light tracking-tight drop-shadow-lg"
                  style={{ color: "var(--accent)" }}
                >
                  MURALIDHARAN
                </h1>
                <div
                  className="h-px w-24"
                  style={{
                    background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
                  }}
                />
              </div>

              <div className="min-h-24 flex items-center">
                <div className="max-w-xl">
                  <p
                    className="text-base md:text-lg font-light tracking-wide leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {displayText}
                    <span
                      style={{
                        color: "var(--accent)",
                        opacity: cursorVisible ? 1 : 0,
                        transition: "opacity 100ms linear",
                      }}
                    >
                      |
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base font-light" style={{ color: "var(--text-secondary)" }}>
                Driving value through intelligent automation, generative AI, and robust full-stack implementation
              </p>
            </div>

            {/* Key Areas */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { label: "Generative AI", desc: "LLMs • RAG" },
                { label: "Deep Learning", desc: "CNNs • CV" },
                { label: "Full-Stack", desc: "Backend • Frontend" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="luxury-card"
                  style={{
                    transition: "all 280ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <p className="font-semibold text-sm mb-2" style={{ color: "var(--accent)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8">
              <button
                onClick={() => onNavigate("projects")}
                className="group relative px-8 py-3 rounded-lg font-medium transition-all duration-350"
                style={{
                  background: "rgba(169, 169, 169, 0.08)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(169, 169, 169, 0.15)"
                  e.currentTarget.style.borderColor = "rgba(169, 169, 169, 0.6)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(169, 169, 169, 0.08)"
                  e.currentTarget.style.borderColor = "var(--border-color)"
                }}
              >
                View Work
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="group relative px-8 py-3 rounded-lg font-medium transition-all duration-350"
                style={{
                  background: "rgba(169, 169, 169, 0.12)",
                  border: "1px solid var(--accent)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(169, 169, 169, 0.2)"
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(169, 169, 169, 0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(169, 169, 169, 0.12)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                Connect
              </button>
            </div>

            {/* Direct Links */}
            <div
              className="pt-12 border-t"
              style={{
                borderTopColor: "var(--border-color)",
                marginTop: "3rem",
              }}
            >
              <p className="text-xs font-medium tracking-widest mb-8" style={{ color: "var(--text-secondary)" }}>
                DIRECT LINKS
              </p>
              <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
                <a
                  href="tel:+919884763315"
                  className="contact-link-icon-box group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    backgroundColor: "rgba(82, 183, 136, 0.04)",
                    transition: "all 350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    color: "var(--text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)"
                    e.currentTarget.style.backgroundColor = "rgba(82, 183, 136, 0.1)"
                    e.currentTarget.style.transform = "translateY(-4px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)"
                    e.currentTarget.style.backgroundColor = "rgba(82, 183, 136, 0.04)"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "color 350ms ease",
                    }}
                  >
                    +91 9884763315
                  </span>
                </a>

                <a
                  href="mailto:mharsha10007@gmail.com"
                  className="contact-link-icon-box group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    backgroundColor: "rgba(82, 183, 136, 0.04)",
                    transition: "all 350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    color: "var(--text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)"
                    e.currentTarget.style.backgroundColor = "rgba(82, 183, 136, 0.1)"
                    e.currentTarget.style.transform = "translateY(-4px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)"
                    e.currentTarget.style.backgroundColor = "rgba(82, 183, 136, 0.04)"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "color 350ms ease",
                    }}
                  >
                    Email
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/harshamuralidharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-icon-box group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    backgroundColor: "rgba(82, 183, 136, 0.04)",
                    transition: "all 350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    color: "var(--text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)"
                    e.currentTarget.style.backgroundColor = "rgba(82, 183, 136, 0.1)"
                    e.currentTarget.style.transform = "translateY(-4px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)"
                    e.currentTarget.style.backgroundColor = "rgba(82, 183, 136, 0.04)"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "color 350ms ease",
                    }}
                  >
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Hero Photo */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                border: "1px solid var(--border-color)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
                transition: "all 350ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 30px 80px rgba(169, 169, 169, 0.2)"
                e.currentTarget.style.borderColor = "rgba(169, 169, 169, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.4)"
                e.currentTarget.style.borderColor = "var(--border-color)"
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO%20SECTION-Z71x2GvGB6THccTHCJx2jP9oDqjvsQ.jpg"
                alt="Harsha Muralidharan"
                className="w-full h-auto object-cover"
                style={{
                  filter: "grayscale(100%) contrast(1.1)",
                  transition: "filter 350ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(50%) contrast(1.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%) contrast(1.1)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
