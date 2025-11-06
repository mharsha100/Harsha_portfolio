"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HomeSection from "@/components/sections/home-section"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ExperienceSection from "@/components/sections/experience-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="luxury-bg" />

      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="relative z-10">
        <HomeSection onNavigate={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-gray-800 py-12 px-6 text-center">
        <p className="text-sm text-gray-500" style={{ letterSpacing: "0.3px" }}>
          Harsha Muralidharan | Architected for Precision © 2025
        </p>
      </footer>
    </div>
  )
}
