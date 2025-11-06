"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function ProjectsSection() {
  const [selectedStatus, setSelectedStatus] = useState<"All" | "In Development" | "Completed">("All")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "StudAI Builder",
      description: "AI-native cloud development engine with multi-LLM orchestration",
      highlights: [
        "Next-generation Firebase Studio-inspired development engine",
        "Multi-LLM orchestration and RAG for intelligent code generation",
        "AI prompt design and innovation pipeline",
      ],
      status: "In Development",
      stars: 139,
      techs: ["LLMs", "RAG", "Python", "React", "Node.js"],
    },
    {
      title: "Autonomous Wheelchair Navigation",
      description: "Real-time navigation with Intel RealSense D435 & ROS",
      highlights: [
        "Dynamic obstacle detection and autonomous path planning",
        "Custom perception nodes (Python/C++) for depth-based detection",
        "Gazebo/RViz simulation and real hardware validation",
      ],
      status: "Completed",
      stars: 89,
      techs: ["ROS", "Python", "C++", "OpenCV", "Robotics"],
    },
    {
      title: "Tourism Website with AI Chatbot",
      description: "Full-stack travel platform with intelligent recommendations",
      highlights: [
        "React.js frontend with Node.js backend architecture",
        "Integrated AI chatbot for personalized travel suggestions",
        "Real-time data processing and seamless UX",
      ],
      status: "Completed",
      stars: 145,
      techs: ["React", "Node.js", "AI", "APIs", "MongoDB"],
    },
    {
      title: "Probabilistic Fraud Detection",
      description: "Advanced anomaly detection in financial transactions",
      highlights: [
        "Probabilistic ML models for real-time fraud identification",
        "High-accuracy suspicious transaction pattern detection",
        "Production-grade backend API",
      ],
      status: "Completed",
      stars: 112,
      techs: ["ML", "Python", "APIs", "Analytics", "Security"],
    },
  ]

  const filteredProjects = projects.filter((p) => selectedStatus === "All" || p.status === selectedStatus)

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
    window.addEventListener("resize", checkScroll)
    return () => {
      carousel?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 450
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Featured Projects
          </h2>
          <div
            className="h-px w-20"
            style={{
              background: "linear-gradient(90deg, var(--accent), transparent)",
            }}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {["All", "In Development", "Completed"].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status as any)}
              className="text-sm font-semibold px-6 py-2 border rounded transition-all duration-350 hover:scale-105"
              style={{
                color: selectedStatus === status ? "var(--text-primary)" : "var(--text-secondary)",
                borderColor: selectedStatus === status ? "var(--accent)" : "var(--border-color)",
                backgroundColor: selectedStatus === status ? "rgba(169, 169, 169, 0.1)" : "transparent",
              }}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="relative group">
          <div className="carousel-scroll flex gap-6 pb-4" ref={carouselRef}>
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="carousel-item luxury-card min-w-[380px] md:min-w-[450px] flex flex-col group/project"
              >
                {/* Brain icon */}
                <div className="text-5xl mb-6 transform group-hover/project:scale-110 transition-transform duration-350">
                  {project.title.charAt(0)}
                </div>

                <h3
                  className="text-2xl font-semibold mb-2 group-hover/project:text-opacity-100 transition-colors duration-350"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((h, hidx) => (
                    <li key={hidx} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--accent)" }}>•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t space-y-4" style={{ borderTopColor: "var(--border-color)" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest" style={{ color: "var(--accent)" }}>
                      {project.status}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star size={14} style={{ color: "var(--accent)" }} fill="var(--accent)" />
                      <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        {project.stars}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="text-xs px-3 py-1 border rounded transition-all duration-350 hover:border-current hover:text-current hover:scale-105 cursor-default"
                        style={{
                          borderColor: "var(--border-color)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full mt-4 py-2 border rounded transition-all duration-350 hover:scale-105 font-semibold"
                    style={{
                      borderColor: "var(--accent)",
                      color: "var(--accent)",
                    }}
                  >
                    View →
                  </button>
                </div>
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </section>
  )
}
