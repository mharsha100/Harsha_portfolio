"use client"

import { useState } from "react"

export default function EducationPage() {
  // CHANGE: Added hover states for interactive elements
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)

  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "Vellore Institute of Technology (VIT)",
    status: "In Progress (Nov 2022 - Present)",
    gpa: "7.91",
    courses: [
      "Data Structures and Algorithms",
      "Design & Analysis of Algorithms",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Privacy",
      "Linear Algebra",
      "Database Systems",
      "Probability",
      "Calculus",
    ],
  }

  const certifications = [
    { name: "Gen AI Workshop", issuer: "IIT Madras, Technobytes", icon: "🎓" },
    { name: "DevSOC'25 Hackathon", issuer: "Yantra'25/CODECHEF-VI", icon: "🏆" },
    { name: "PHP & MySQL Master class", issuer: "Udemy", icon: "💾" },
    { name: "50 Projects in 50 Days: HTML, CSS & JavaScript", issuer: "Udemy", icon: "🎨" },
    { name: "The Complete Frontend Web Development Course", issuer: "Udemy", icon: "🌐" },
    { name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", icon: "☁️" },
    { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", icon: "🔐" },
  ]

  return (
    <div className="min-h-screen px-6 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-premium">Education & Certifications</span>
          </h1>
          <p className="text-lg text-muted-foreground">Academic background and professional credentials</p>
        </div>

        {/* Education */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-foreground mb-6">University Education</h2>
          <div className="glass-effect-strong rounded-2xl p-8 card-hover border-l-4 border-l-primary">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{education.degree}</h3>
                <p className="text-primary font-semibold text-lg">{education.university}</p>
                <p className="text-muted-foreground font-mono text-sm mt-3">{education.status}</p>
              </div>
              <div className="glass-effect rounded-lg px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-muted-foreground mb-1">GPA</p>
                <p className="text-3xl font-black bg-gradient-premium">{education.gpa}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4 text-lg">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-3">
                {education.courses.map((course, idx) => (
                  <span
                    key={idx}
                    style={{ animationDelay: `${idx * 30}ms` }}
                    className="text-sm bg-gradient-to-r from-primary/20 to-accent/10 text-primary px-4 py-2 rounded-full border border-primary/40 hover:border-primary/70 hover:from-primary/40 hover:to-accent/20 transition-all duration-300 cursor-pointer hover:glow-primary animate-fade-in-up"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 50}ms` }}
                onMouseEnter={() => setHoveredCert(idx)}
                onMouseLeave={() => setHoveredCert(null)}
                className="glass-effect-strong rounded-xl p-6 card-hover group animate-fade-in-up border-l-4 border-l-accent"
              >
                <div className="flex gap-4 items-start">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{cert.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-2">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications & Patents */}
        <div className="space-y-6">
          <div
            className="glass-effect-strong rounded-2xl p-8 card-hover animate-fade-in-up border-l-4 border-l-secondary"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-2xl font-bold bg-gradient-premium mb-4">Publications</h3>
            <p className="font-bold text-foreground mb-3 text-lg">
              A Comprehensive Survey on Explainable and Trustworthy Machine Learning in Critical Decision-Making Domains
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Conducting rigorous literature survey and benchmarking of explainability and trust in ML across
              healthcare, finance, and autonomous systems. Focus on practical deployment, regulatory compliance,
              fairness, and human-centric evaluation.
            </p>
            <span className="inline-block mt-4 text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
              In Progress
            </span>
          </div>

          <div
            className="glass-effect-strong rounded-2xl p-8 card-hover animate-fade-in-up border-l-4 border-l-accent"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="text-2xl font-bold bg-gradient-premium mb-4">Patent Application</h3>
            <p className="font-bold text-foreground mb-3 text-lg">Agribot-Drone</p>
            <p className="text-muted-foreground leading-relaxed">
              Innovative agricultural automation project combining drone technology with AI for smart farming solutions
              and precision agriculture.
            </p>
            <span className="inline-block mt-4 text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
              In Progress
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
