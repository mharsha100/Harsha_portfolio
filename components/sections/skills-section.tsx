"use client"

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "PROGRAMMING",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
    },
    {
      category: "WEB & FULL-STACK",
      skills: ["React.js", "Node.js", "Express.js", "PHP", "Laravel", "HTML5", "CSS3"],
    },
    {
      category: "AI/ML & DEEP LEARNING",
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
    },
    {
      category: "DEVOPS & INFRASTRUCTURE",
      skills: ["Docker", "Git/GitHub", "Kubernetes", "n8n"],
    },
    {
      category: "DATABASES",
      skills: ["MongoDB", "Supabase", "PostgreSQL"],
    },
    {
      category: "SPECIALIZATIONS",
      skills: ["Generative AI", "Computer Vision", "NLP", "Robotics", "IoT", "Cloud"],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Technical Expertise
          </h2>
          <div
            className="h-px w-20"
            style={{
              background: "linear-gradient(90deg, var(--accent), transparent)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="luxury-card">
              <h3 className="text-sm font-semibold tracking-widest mb-6" style={{ color: "var(--accent)" }}>
                {cat.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sidx) => (
                  <span key={sidx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths and Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="luxury-card">
            <h3 className="text-sm font-semibold tracking-widest mb-6" style={{ color: "var(--accent)" }}>
              CORE STRENGTHS
            </h3>
            <ul className="space-y-3">
              {["Optimistic Problem Solving", "Creative Innovation", "Adaptability", "Exceptional Teamwork"].map(
                (strength, idx) => (
                  <li key={idx} className="flex gap-3 items-center text-sm hover-accent">
                    <span style={{ color: "var(--accent)" }}>—</span>
                    <span style={{ color: "var(--text-secondary)" }}>{strength}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="luxury-card">
            <h3 className="text-sm font-semibold tracking-widest mb-6" style={{ color: "var(--accent)" }}>
              LANGUAGES
            </h3>
            <ul className="space-y-3">
              {["Tamil", "English", "Malayalam", "Hindi", "Spanish"].map((lang, idx) => (
                <li key={idx} className="flex gap-3 items-center text-sm hover-accent">
                  <span style={{ color: "var(--accent)" }}>·</span>
                  <span style={{ color: "var(--text-secondary)" }}>{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
