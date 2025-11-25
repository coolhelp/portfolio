"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900">
      {/* Hero Section with Parallax Effect */}
      <header className="relative py-24 md:py-32 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className={`relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4 shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <Image 
                src="/profile.jpg" 
                alt="Andrew Yang" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 tracking-tight animate-gradient bg-[length:200%_auto] leading-tight pb-2">
            Andrew Yang
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-gray-800">Full-Stack Software Engineer</p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap max-w-xl mx-auto">
            <span className="px-4 py-2 bg-white rounded-full shadow-md font-medium text-gray-700 hover:shadow-lg transition-shadow">React</span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md font-medium text-gray-700 hover:shadow-lg transition-shadow">Next.js</span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md font-medium text-gray-700 hover:shadow-lg transition-shadow">Node.js</span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md font-medium text-gray-700 hover:shadow-lg transition-shadow">Go</span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md font-medium text-gray-700 hover:shadow-lg transition-shadow">AWS</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <SocialLink href="https://github.com/coolhelp" icon="github" />
            <SocialLink href="https://linkedin.com" icon="linkedin" />
            <SocialLink href="mailto:cool.andrew2026@gmail.com" icon="email" />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-20 h-20 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* About Section */}
        <Section delay={0}>
          <SectionTitle>About Me</SectionTitle>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
            <p className="text-lg leading-relaxed text-gray-700">
              Full-stack engineer with <span className="font-semibold text-blue-600">3+ years of experience</span>. 
              Former <span className="font-semibold text-purple-600">Staff Software Engineer at Shopify</span>, 
              specializing in scalable backend systems, cloud infrastructure, and high-performance web applications.
              <br /><br />
              💼 <span className="font-medium">Open to U.S. remote full-time and contract roles.</span>
            </p>
          </div>
        </Section>

        {/* Skills Section */}
        <Section delay={200}>
          <SectionTitle>Tech Stack</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
              { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
              { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
              { name: "NestJS", icon: "🐱", color: "from-red-500 to-pink-600" },
              { name: "Go", icon: "🔷", color: "from-blue-400 to-cyan-500" },
              { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-800" },
              { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
              { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
              { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-700" },
              { name: "Kubernetes", icon: "☸️", color: "from-blue-600 to-purple-600" },
              { name: "GraphQL", icon: "◈", color: "from-pink-500 to-purple-600" },
              { name: "Redis", icon: "⚡", color: "from-red-600 to-red-800" }
            ].map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} delay={index * 50} />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section delay={400}>
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="space-y-8">
            <Project 
              title="SaaS Subscription Platform"
              description="Full SaaS application with billing, RBAC, analytics dashboards. Built with modern architecture patterns and best practices for scalability."
              tech={["Next.js", "NestJS", "Stripe", "PostgreSQL"]}
              link="https://github.com/coolhelp/saas-platform"
              image="/project1.jpg"
              gradient="from-blue-500 to-cyan-500"
            />
            <Project 
              title="Realtime Collaboration Board"
              description="Figma-like multi-user canvas with live cursors and messaging. Features real-time synchronization and conflict resolution."
              tech={["React", "Go", "Redis", "WebSockets"]}
              link="https://github.com/coolhelp/collaboration-board"
              image="/project2.jpg"
              gradient="from-purple-500 to-pink-500"
            />
            <Project 
              title="E-Commerce Microservices"
              description="Distributed microservices with event-driven architecture. Implements CQRS pattern and handles high-traffic scenarios."
              tech={["Go", "gRPC", "Kafka", "PostgreSQL", "Docker"]}
              link="https://github.com/coolhelp/ecommerce-microservices"
              image="/project3.jpg"
              gradient="from-green-500 to-teal-500"
            />
          </div>
        </Section>

        {/* Contact Section */}
        <Section delay={600}>
          <SectionTitle>Let's Connect</SectionTitle>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl text-white text-center">
            <p className="text-xl mb-6">Interested in working together? Let's talk!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:cool.andrew2026@gmail.com"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                📧 cool.andrew2026@gmail.com
              </a>
              <a 
                href="https://github.com/coolhelp"
                className="px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙 github.com/coolhelp
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600">
        <p>© 2025 Andrew Yang. Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}

function Section({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <section
      ref={ref}
      className={`mb-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {children}
    </h2>
  );
}

function SkillCard({ skill, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="relative z-10 text-center">
        <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <div className="font-semibold text-gray-800">{skill.name}</div>
      </div>
    </div>
  );
}

function Project({ title, description, tech, link, image, gradient }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:flex">
        {/* Project Image */}
        <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <div className="text-white text-6xl opacity-50">📱</div>
            {/* Uncomment when you add project images */}
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Project Content */}
        <div className="md:w-3/5 p-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={link}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View on GitHub</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  const icons = {
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    email: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  };

  return (
    <a
      href={href}
      className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icons[icon]}
    </a>
  );
}
