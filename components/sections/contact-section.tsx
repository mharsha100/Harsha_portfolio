"use client"

import type React from "react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      const mailtoLink = `mailto:mharsha10007@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`
      window.location.href = mailtoLink
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({ name: "", email: "", message: "" })
    }
  }

  const contactItems = [
    {
      label: "PHONE",
      value: "+91 9884763315",
      href: "tel:+919884763315",
    },
    {
      label: "EMAIL",
      value: "mharsha10007@gmail.com",
      href: "mailto:mharsha10007@gmail.com",
    },
    {
      label: "LINKEDIN",
      value: "harshamuralidharan",
      href: "https://www.linkedin.com/in/harshamuralidharan",
      external: true,
    },
    {
      label: "LOCATION",
      value: "Chennai, India",
      href: null,
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
            Let's Connect
          </h2>
          <div
            className="h-1 w-24 mx-auto rounded-full"
            style={{
              background: "var(--accent-primary)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xs font-bold tracking-widest mb-10" style={{ color: "var(--accent-primary)" }}>
              DIRECT CONTACT
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactItems.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="luxury-card group relative h-full flex flex-col justify-between hover:shadow-xl transition-all duration-400"
                    >
                      <div>
                        <p
                          className="text-xs tracking-widest font-bold mb-4"
                          style={{ color: "var(--accent-primary)" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-base font-light break-all group-hover:font-medium transition-colors duration-300"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.value}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-400" />
                    </a>
                  ) : (
                    <div className="luxury-card group relative h-full flex flex-col justify-between">
                      <div>
                        <p
                          className="text-xs tracking-widest font-bold mb-4"
                          style={{ color: "var(--accent-primary)" }}
                        >
                          {item.label}
                        </p>
                        <p className="text-base font-light" style={{ color: "var(--text-primary)" }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest mb-10" style={{ color: "var(--accent-primary)" }}>
              SEND MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  required
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  required
                />
              </div>

              <div className="relative group">
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full relative px-8 py-4 rounded-lg text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group"
                style={{
                  background: "var(--accent-primary)",
                  boxShadow: "0 4px 16px rgba(82, 183, 136, 0.25)",
                }}
              >
                <span className="relative z-10">{submitted ? "Message Sent" : "Send Message"}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
