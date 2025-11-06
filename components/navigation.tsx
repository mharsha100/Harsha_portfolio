"use client"

import { useState } from "react"

interface NavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-neutral-950 border-b"
      style={{ borderBottomColor: "var(--border-color)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="text-lg font-bold tracking-widest hover-accent"
          style={{ color: "var(--text-primary)" }}
        >
          HM
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="btn-minimal text-sm font-medium transition-all duration-280"
              style={{
                color: activeSection === item.id ? "var(--text-primary)" : "var(--text-secondary)",
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <div
                  className="absolute bottom-0 left-0 h-px w-full transition-all duration-280"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          style={{ color: "var(--accent)" }}
        >
          <span
            className={`w-5 h-px transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span
            className={`w-5 h-px transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span
            className={`w-5 h-px transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--accent)" }}
          />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 md:hidden border-b"
            style={{ backgroundColor: "var(--bg-primary)", borderBottomColor: "var(--border-color)" }}
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsOpen(false)
                  }}
                  className="px-6 py-3 text-left font-medium border-b transition-all duration-280 hover-accent"
                  style={{
                    color: activeSection === item.id ? "var(--text-primary)" : "var(--text-secondary)",
                    borderBottomColor: "var(--border-color)",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
