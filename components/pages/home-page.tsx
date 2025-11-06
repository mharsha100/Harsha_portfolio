"use client"

export default function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  // CHANGE: Made buttons fully functional with navigation
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-3xl text-center space-y-12 animate-fade-in-up relative z-10">
        {/* Hero Title */}
        <div className="space-y-6">
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary mb-6">
              AI/ML Engineer & Full-Stack Developer
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            <span className="bg-gradient-premium">Harsha</span>
            <br />
            <span className="text-foreground">Muralidharan</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent font-light">Building tomorrow's AI applications today</p>
        </div>

        {/* Subtitle */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Crafting intelligent solutions with generative AI, machine learning, and advanced automation. Specializing
            in AI pipelines, computer vision, and cloud-native architectures that solve real-world problems at scale.
          </p>
        </div>

        {/* Key Areas - Enhanced with glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: "🤖", label: "Generative AI", desc: "LLMs, RAG, Prompt Engineering" },
            { icon: "🧠", label: "Deep Learning", desc: "CNNs, Computer Vision, NLP" },
            { icon: "⚡", label: "Full-Stack", desc: "Backend, Frontend, DevOps" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="glass-effect rounded-2xl p-8 card-hover group animate-fade-in-up"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons - CHANGE: Fully functional with navigation and external links */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center pt-12 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <button
            onClick={() => onNavigate("projects")}
            className="btn-premium px-8 py-4 bg-gradient-to-r from-primary to-accent text-foreground rounded-xl font-semibold hover:shadow-2xl hover:glow-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="btn-premium px-8 py-4 glass-effect rounded-xl font-semibold text-foreground hover:bg-primary/10 hover:glow-primary"
          >
            Get In Touch
          </button>
        </div>

        {/* Contact Info Cards - CHANGE: Added real links */}
        <div className="pt-16 border-t border-border/30 mt-16 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="tel:+919884763315" className="glass-effect rounded-xl p-6 card-hover group text-center">
              <p className="text-sm text-muted-foreground mb-2">Phone</p>
              <p className="font-mono text-sm text-primary group-hover:text-accent transition-colors">+91-9884763315</p>
            </a>
            <a
              href="mailto:mharsha10007@gmail.com"
              className="glass-effect rounded-xl p-6 card-hover group text-center"
            >
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <p className="font-mono text-sm text-primary group-hover:text-accent transition-colors truncate">
                mharsha10007@gmail.com
              </p>
            </a>
            <div className="glass-effect rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="font-mono text-sm text-accent">Chennai, India</p>
            </div>
            <a
              href="http://www.linkedin.com/in/harshamuralidharan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect rounded-xl p-6 card-hover group text-center"
            >
              <p className="text-sm text-muted-foreground mb-2">LinkedIn</p>
              <p className="font-mono text-sm text-primary group-hover:text-accent transition-colors">Visit Profile</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
