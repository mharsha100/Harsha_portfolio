"use client"

import { useState } from "react"

export default function SkillsPage() {
  // CHANGE: Added state for tracking hovered skill category
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
      icon: "💻",
      color: "from-primary to-blue-500",
    },
    {
      category: "Web & Full-Stack",
      skills: ["React.js", "Node.js", "Express.js", "PHP", "Laravel", "HTML5", "CSS3"],
      icon: "🌐",
      color: "from-secondary to-cyan-500",
    },
    {
      category: "AI/ML & Deep Learning",
      skills: [
        "CNNs",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV",
        "Keras",
        "LLMs",
        "GANs",
        "VAE",
        "SVM",
        "DialogFlow",
        "Langchain",
      ],
      icon: "🤖",
      color: "from-primary to-purple-500",
    },
    {
      category: "DevOps & Infrastructure",
      skills: ["Docker", "Git/GitHub", "Kubernetes (Basics)", "n8n"],
      icon: "⚙️",
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "Supabase (Basics)", "PostgreSQL"],
      icon: "🗄️",
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Specializations",
      skills: [
        "Generative AI",
        "Computer Vision",
        "NLP",
        "Robotics & ROS",
        "IoT & Embedded Systems",
        "Cloud Deployment",
      ],
      icon: "⭐",
      color: "from-accent to-yellow-400",
    },
  ]

  return (
    <div className="min-h-screen px-6 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-premium">Technical Skills</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Expertise across modern AI/ML frameworks and full-stack technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 50}ms` }}
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="glass-effect-strong rounded-2xl p-8 card-hover animate-fade-in-up group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-4xl group-hover:scale-125 transition-transform duration-300`}>{cat.icon}</div>
                <h2 className="text-2xl font-bold bg-gradient-premium">{cat.category}</h2>
              </div>

              {/* Skills with staggered animation */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    style={{
                      animationDelay: `${sidx * 30}ms`,
                      opacity: hoveredCategory === idx || hoveredCategory === null ? 1 : 0.5,
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/10 text-primary rounded-full text-sm font-semibold hover:from-primary/40 hover:to-accent/20 transition-all duration-300 cursor-pointer border border-primary/40 hover:border-primary/70 hover:glow-primary animate-fade-in-up"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths and Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="glass-effect-strong rounded-2xl p-8 card-hover animate-fade-in-up border-l-4 border-l-accent"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="text-2xl font-bold bg-gradient-premium mb-6">Key Strengths</h3>
            <ul className="space-y-4">
              {[
                "Optimistic Personality",
                "Creative Problem Solving",
                "Flexibility and Adaptability",
                "Exceptional Teamwork",
              ].map((strength, idx) => (
                <li
                  key={idx}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  className="flex gap-3 items-center animate-fade-in-up"
                >
                  <span className="text-xl text-accent">✓</span>
                  <span className="text-muted-foreground hover:text-foreground transition-colors">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="glass-effect-strong rounded-2xl p-8 card-hover animate-fade-in-up border-l-4 border-l-primary"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-2xl font-bold bg-gradient-premium mb-6">Known Languages</h3>
            <ul className="space-y-4">
              {["Tamil", "English", "Malayalam", "Hindi, Spanish (Basics)"].map((lang, idx) => (
                <li
                  key={idx}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  className="flex gap-3 items-center animate-fade-in-up"
                >
                  <span className="text-xl text-primary">◆</span>
                  <span className="text-muted-foreground hover:text-foreground transition-colors">{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
