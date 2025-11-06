"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Briefcase, BookOpen } from "lucide-react"

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"professional" | "academic">("professional")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      company: "StudAI EduTech",
      role: "AI/ML Technical Intern",
      period: "July 2025 - Present",
      type: "professional",
      icon: "🤖",
      highlights: [
        "Architecting AI-powered automation pipelines with cross-functional teams",
        "Integrating intelligent features in production systems (PHP, Laravel, Node.js)",
        "Leading pipeline development, API design, and advanced debugging initiatives",
      ],
      techs: ["Python", "LLMs", "RAG", "APIs", "Node.js"],
    },
    {
      company: "Pantech Solutions",
      role: "Virtual AI Intern",
      period: "Sept 2024 - Nov 2024",
      type: "professional",
      icon: "🧠",
      highlights: [
        "Designed and implemented 30+ AI/ML projects across computer vision, NLP, and deep learning",
        "Deployed edge AI solutions on Raspberry Pi with OpenCV and TensorFlow",
        "Key projects: Face Recognition, Fake News Detection, Vehicle Detection, AI Chatbots",
      ],
      techs: ["OpenCV", "TensorFlow", "Python", "RaspberryPi", "CV"],
    },
    {
      company: "Yenmin Communications",
      role: "Front End Development Intern",
      period: "Nov 2023 - Dec 2023",
      type: "professional",
      icon: "🎨",
      highlights: [
        "Delivered production-ready responsive UIs using React.js, HTML5, and CSS3",
        "Implemented seamless API integrations via Node.js",
        "Collaborated with design and backend teams for optimal implementation",
      ],
      techs: ["React", "HTML5", "CSS3", "Node.js", "APIs"],
    },
  ]

  const checkScroll = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 0)
      setCanScrollRight(
        carouselRef.current.scrollLeft < carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10,
      )
    }
  }

  useEffect(() => {
    checkScroll()
    const carousel = carouselRef.current
    carousel?.addEventListener("scroll", checkScroll)
    return () => carousel?.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 350
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const filteredExperiences = experiences.filter((e) => e.type === activeTab)

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Experience
          </h2>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>
            My journey in the academic & professional front
          </p>
          <div
            className="h-px w-20 mt-6"
            style={{
              background: "linear-gradient(90deg, var(--accent), transparent)",
            }}
          />
        </div>

        <div className="flex gap-6 mb-12">
          <button
            onClick={() => setActiveTab("professional")}
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-350"
            style={{
              background: activeTab === "professional" ? "rgba(169, 169, 169, 0.08)" : "transparent",
              borderBottom: activeTab === "professional" ? "2px solid var(--accent)" : "1px solid var(--border-color)",
              color: activeTab === "professional" ? "var(--accent)" : "var(--text-secondary)",
            }}
          >
            <Briefcase size={18} />
            <span className="font-semibold">Professional</span>
          </button>
          <button
            onClick={() => setActiveTab("academic")}
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-350"
            style={{
              background: activeTab === "academic" ? "rgba(169, 169, 169, 0.08)" : "transparent",
              borderBottom: activeTab === "academic" ? "2px solid var(--accent)" : "1px solid var(--border-color)",
              color: activeTab === "academic" ? "var(--accent)" : "var(--text-secondary)",
            }}
          >
            <BookOpen size={18} />
            <span className="font-semibold">Academic</span>
          </button>
        </div>

        <div className="relative group">
          <div className="carousel-scroll flex gap-6 pb-4" ref={carouselRef}>
            {activeTab === "professional" ? (
              filteredExperiences.map((exp, idx) => (
                <div key={idx} className="carousel-item luxury-card min-w-[350px] md:min-w-[420px] group/card">
                  <div className="text-3xl mb-4">{exp.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {exp.role}
                  </h3>
                  <p className="text-sm mb-2 font-semibold" style={{ color: "var(--accent)" }}>
                    {exp.company}
                  </p>
                  <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
                    {exp.period}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, hidx) => (
                      <li key={hidx} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent)" }}>→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t" style={{ borderTopColor: "var(--border-color)" }}>
                    <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                      TECH STACK
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techs.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="text-xs px-2 py-1 border rounded"
                          style={{
                            borderColor: "var(--border-color)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="luxury-card w-full">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <p className="text-sm mb-3 font-semibold" style={{ color: "var(--accent)" }}>
                  Vellore Institute of Technology (VIT) | GPA: 7.91
                </p>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                  Nov 2022 - Present
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Relevant Courses: Data Structures, Algorithms, AI, Machine Learning, Linear Algebra, Database Systems,
                  Probability, Calculus
                </p>
              </div>
            )}
          </div>

          {activeTab === "professional" && (
            <>
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-12 p-3 rounded-full transition-all duration-350 opacity-0 group-hover:opacity-100 disabled:opacity-30"
                style={{
                  background: "rgba(169, 169, 169, 0.1)",
                  color: "var(--accent)",
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-12 p-3 rounded-full transition-all duration-350 opacity-0 group-hover:opacity-100 disabled:opacity-30"
                style={{
                  background: "rgba(169, 169, 169, 0.1)",
                  color: "var(--accent)",
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Certifications */}
        <div className="mt-20 pt-12 border-t" style={{ borderTopColor: "var(--border-color)" }}>
          <h3 className="text-sm font-semibold tracking-widest mb-6" style={{ color: "var(--accent)" }}>
            CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
              "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
              "Gen AI Workshop (IIT Madras, Technobytes)",
              "DevSOC'25 Hackathon | Yantra'25/CODECHEF-VI",
              "PHP & MySQL Master Class",
              "50 Projects in 50 Days: HTML, CSS & JavaScript",
              "The Complete Frontend Web Development Course",
            ].map((cert, idx) => (
              <div key={idx} className="luxury-card hover:scale-105 transition-transform duration-350">
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
