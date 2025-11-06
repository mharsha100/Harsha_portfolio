"use client"

import type React from "react"
import { useState } from "react"

export default function ContactPage() {
  // CHANGE: Enhanced form handling with validation and visual feedback
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 800))

    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsLoading(false)

    // Reset success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      value: "mharsha10007@gmail.com",
      link: "mailto:mharsha10007@gmail.com",
      color: "from-primary to-blue-500",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91-9884763315",
      link: "tel:+919884763315",
      color: "from-secondary to-cyan-500",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chennai, India",
      color: "from-accent to-yellow-400",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/harshamuralidharan",
      link: "http://www.linkedin.com/in/harshamuralidharan",
      color: "from-blue-500 to-cyan-400",
    },
  ]

  return (
    <div className="min-h-screen px-6 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-premium">Let's Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out and let's
            create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="glass-effect-strong rounded-2xl p-8 card-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full glass-effect rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all focus:glow-primary"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass-effect rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all focus:glow-primary"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-3">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full glass-effect rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all focus:glow-primary"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-3">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full glass-effect rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all focus:glow-primary resize-none h-40"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-premium w-full bg-gradient-to-r from-primary to-accent text-foreground font-bold py-4 rounded-xl hover:shadow-2xl hover:glow-primary transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm font-semibold animate-fade-in-up">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {contactLinks.map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target={contact.link?.startsWith("http") ? "_blank" : undefined}
                rel={contact.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-effect-strong rounded-2xl p-6 card-hover group block"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                    {contact.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground font-semibold">{contact.label}</p>
                    <p className="text-foreground font-bold mt-2 group-hover:text-primary transition-colors truncate">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="glass-effect-strong rounded-2xl p-6 card-hover">
              <h3 className="font-bold text-foreground mb-4">Follow My Work</h3>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="http://www.linkedin.com/in/harshamuralidharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/10 hover:from-primary/40 hover:to-accent/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-primary/30"
                  title="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="mailto:mharsha10007@gmail.com"
                  className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/10 hover:from-secondary/40 hover:to-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-secondary/30"
                  title="Email"
                >
                  📧
                </a>
                <a
                  href="tel:+919884763315"
                  className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/10 hover:from-accent/40 hover:to-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-accent/30"
                  title="Phone"
                >
                  📱
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
