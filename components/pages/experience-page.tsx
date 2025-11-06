"use client"

import { useState } from "react"

export default function ExperiencePage() {
  // CHANGE: Added interactive state for expanded experience cards
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  const experiences = [
    {
      title: "AI/ML Technical Intern",
      company: "StudAI Edutech",
      period: "July 2025 - Present",
      duration: "Current",
      achievements: [
        "Architected and implemented AI-powered automation pipelines, collaborating with product, backend, and frontend teams",
        "Integrated intelligent features in production web systems using PHP, Laravel, and Node.js",
        "Led initiatives in custom pipeline development, API design, and advanced debugging",
        "Delivering AI solutions to businesses and helping clients leverage AI for growth and efficiency",
      ],
      icon: "🚀",
    },
    {
      title: "Virtual AI Intern",
      company: "Pantech Solutions",
      period: "Sept 2024 - Nov 2024",
      duration: "3 months",
      achievements: [
        "Designed and implemented 30+ AI/ML projects spanning computer vision, NLP, and deep learning",
        "Key projects: Face & Emotion Recognition, Fake News Detection, Reinforcement Learning Path Solver, OCR-driven Label Readers, Real-time Vehicle Detection, AI Chatbots",
        "Developed Python pipelines utilizing OpenCV and TensorFlow",
        "Deployed edge AI solutions on Raspberry Pi",
      ],
      icon: "🤖",
    },
    {
      title: "Front End Development Intern",
      company: "Yenmin Communications",
      period: "Nov 2023 - Dec 2023",
      duration: "2 months",
      achievements: [
        "Delivered responsive, production-ready user interfaces using React JS, HTML5 and CSS3",
        "Implemented API integrations via Node.js",
        "Collaborated with design and backend teams on seamless integration",
      ],
      icon: "⚛️",
    },
  ]

  return (
    <div className="min-h-screen px-6 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-premium">Work Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground">Professional journey in AI/ML and full-stack development</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30"></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className="animate-fade-in-up group cursor-pointer"
            >
              <div className="glass-effect-strong rounded-2xl p-8 card-hover relative ml-24">
                {/* Timeline dot */}
                <div className="absolute left-[-48px] top-8 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{exp.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h2>
                      <p className="text-primary font-semibold mt-1">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono text-accent bg-accent/10 px-4 py-2 rounded-lg border border-accent/30">
                      {exp.period}
                    </span>
                    <p className="text-xs text-muted-foreground mt-2 font-semibold">{exp.duration}</p>
                  </div>
                </div>

                {/* Achievements - Collapsible */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedIdx === idx ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, aidx) => (
                      <li
                        key={aidx}
                        className="flex gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span className="text-primary mt-1 flex-shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand indicator */}
                <div
                  className={`mt-4 text-sm font-semibold text-primary transition-all duration-300 flex items-center gap-2 ${
                    expandedIdx === idx ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {expandedIdx === idx ? "Show less" : "Show more"}
                  <span className={`transition-transform duration-300 ${expandedIdx === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Objective */}
        <div
          className="mt-16 glass-effect-strong rounded-2xl p-8 animate-fade-in-up border-l-4 border-l-primary"
          style={{ animationDelay: "300ms" }}
        >
          <h3 className="text-2xl font-bold bg-gradient-premium mb-4">Career Objective</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To contribute to a dynamic and stable organization in the field of AI/ML Developer, where I can continuously
            enhance my skills and knowledge, take on new challenges, and grow professionally while supporting the
            organization's security and compliance objectives.
          </p>
        </div>
      </div>
    </div>
  )
}
