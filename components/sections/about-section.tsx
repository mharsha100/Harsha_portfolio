"use client"

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Photo */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <div
              className="relative rounded-2xl overflow-hidden"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABOUT%20SECTION-j5sTOG8LaWWMC8PriMeN21yJnngymI.jpg"
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

          {/* Right: About Content */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-light tracking-tight" style={{ color: "var(--text-primary)" }}>
                About Me
              </h2>
              <div
                className="h-px w-24"
                style={{
                  background: "linear-gradient(90deg, var(--accent), transparent)",
                }}
              />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  I'm an AI/ML engineer and full-stack developer with a passion for building intelligent systems that
                  solve real-world problems. Currently, I'm a Technical Intern at StudAI EduTech, where I architect and
                  deploy AI-powered automation pipelines for enterprise clients.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--accent)" }}>
                  Background
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  I'm pursuing my Bachelor of Technology in Computer Science and Engineering at Vellore Institute of
                  Technology (VIT) with a strong foundation in AI, Machine Learning, and Data Science. My academic
                  journey has equipped me with expertise in designing complex algorithms and implementing cutting-edge
                  solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--accent)" }}>
                  Expertise
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Specializing in generative AI, deep learning, computer vision, NLP, and full-stack development. I've
                  designed 30+ AI/ML projects spanning from edge AI deployment on Raspberry Pi to production-grade web
                  systems using modern tech stacks like React, Node.js, and Python.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--accent)" }}>
                  Philosophy
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  I believe in precision-engineering solutions that balance innovation with practicality. My approach
                  combines creative problem-solving with technical rigor, always focusing on delivering maximum value
                  and driving sustainable growth.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                {["AI/ML", "Full-Stack", "Computer Vision", "NLP", "DevOps", "Cloud"].map((skill, idx) => (
                  <div
                    key={idx}
                    className="luxury-card px-4 py-2"
                    style={{
                      transition: "all 280ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
