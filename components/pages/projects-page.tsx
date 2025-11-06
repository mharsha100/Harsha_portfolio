"use client"

import { useState } from "react"

export default function ProjectsPage() {
  // CHANGE: Added state for tracking selected project and filters
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<"All" | "In Development" | "Completed">("All")

  const projects = [
    {
      title: "StudAI Builder",
      description: "Next-generation AI-native cloud development engine",
      highlights: [
        "Building an AI-native cloud development engine inspired by Firebase Studio model",
        "Intelligent code generation, end-to-end app automation, multi-cloud deployment",
        "Enhanced platform intelligence with multi-LLM orchestration and RAG architectures",
        "Responsible for AI prompt design, backend integration, and innovation pipeline",
      ],
      tech: ["LLMs", "RAG", "Python", "Node.js", "Cloud APIs"],
      status: "In Development",
      icon: "🏗️",
    },
    {
      title: "Autonomous Wheelchair Navigation",
      description: "Dynamic obstacle detection with ROS integration",
      highlights: [
        "Developed real-time autonomous navigation system using Intel RealSense D435 & ROS",
        "Built custom perception nodes in Python/C++ for depth-based object detection",
        "Implemented dynamic path planning and safe re-routing in complex indoor environments",
        "Simulation in Gazebo/RViz with real hardware adaptation and system validation",
      ],
      tech: ["ROS", "Python", "C++", "Computer Vision", "Robotics"],
      status: "Completed",
      icon: "🦽",
    },
    {
      title: "Tourism Website with AI Chatbot",
      description: "Full-stack travel assistant with integrated AI",
      highlights: [
        "Built full-stack travel assistant platform with React JS and Node.js backend",
        "Integrated intelligent AI chatbot for travel recommendations and queries",
        "Seamless user experience with real-time data processing",
      ],
      tech: ["React.js", "Node.js", "AI/NLP", "MongoDB", "Express"],
      status: "Completed",
      icon: "✈️",
    },
    {
      title: "Probabilistic Fraud Detection System",
      description: "Advanced anomaly detection in financial transactions",
      highlights: [
        "Designed backend AI pipeline for transaction anomaly detection",
        "Implemented probabilistic models for real-time fraud identification",
        "Achieved high accuracy in identifying suspicious transaction patterns",
      ],
      tech: ["Machine Learning", "Python", "Scikit-learn", "Backend APIs"],
      status: "Completed",
      icon: "🛡️",
    },
    {
      title: "AI-Driven Smart Lighting & Weather Detection",
      description: "IoT integration with behavioral forecasting",
      highlights: [
        "Built IoT AI simulations with behavioral forecasting using custom datasets",
        "Full-stack implementation: Backend, Frontend, HiveMQ, MongoDB",
        "Real-time environmental monitoring and smart device control",
      ],
      tech: ["IoT", "Python", "HiveMQ", "MongoDB", "React.js"],
      status: "Completed",
      icon: "💡",
    },
    {
      title: "Weather Sensing System",
      description: "Embedded systems weather monitoring",
      highlights: [
        "Developed weather monitoring using Arduino Uno and multiple sensors",
        "Integrated DHT22 temperature/humidity, YL-83 rain, BH1750 light sensors",
        "Real-time data collection and analysis",
      ],
      tech: ["Arduino", "C++", "Embedded Systems", "Sensors"],
      status: "Completed",
      icon: "🌡️",
    },
  ]

  const filteredProjects = projects.filter((p) => selectedStatus === "All" || p.status === selectedStatus)

  return (
    <div className="min-h-screen px-6 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-premium">Featured Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            30+ AI/ML projects showcasing innovation in computer vision, NLP, and deep learning
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-12 flex-wrap animate-fade-in-up" style={{ animationDelay: "50ms" }}>
          {["All", "In Development", "Completed"].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status as any)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedStatus === status
                  ? "bg-gradient-to-r from-primary to-accent text-foreground glow-combined"
                  : "glass-effect text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="glass-effect-strong rounded-2xl p-8 card-hover group animate-fade-in-up cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-5xl group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                    {project.icon}
                  </span>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-primary font-semibold mt-2 text-lg">{project.description}</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-mono px-4 py-2 rounded-full whitespace-nowrap font-bold transition-all duration-300 ${
                    project.status === "In Development"
                      ? "bg-accent/20 text-accent border border-accent/50"
                      : "bg-green-500/20 text-green-400 border border-green-500/50"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {project.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="flex gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <span className="text-primary mt-1 flex-shrink-0">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                {project.tech.map((tech, tidx) => (
                  <span
                    key={tidx}
                    style={{ animationDelay: `${tidx * 30}ms` }}
                    className="text-xs bg-secondary/20 text-secondary px-4 py-2 rounded-full border border-secondary/40 hover:border-secondary/70 hover:bg-secondary/30 transition-all duration-300 font-semibold animate-fade-in-up"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">No projects found for selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
