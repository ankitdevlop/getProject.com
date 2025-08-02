// ✅ Import only if your bundler supports video imports
'use client';
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <HowItWorks/>
      <WhyChooseUs />
      <ContactSection/>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg transition-all duration-300 border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo - Clickable to home */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-3 hover:scale-105 transition-all duration-300 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-all duration-300" />
            <div className="relative bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-2.5 rounded-full shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
              <svg
                className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:via-purple-500 group-hover:to-indigo-400 transition-all duration-300">
            GetProject
          </span>
        </button>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white p-2 rounded hover:bg-gray-800 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>

        {/* Navigation links (desktop) */}
        <nav className="hidden md:flex space-x-8 text-sm text-white font-medium">
          <a href="#features" className="relative group hover:text-indigo-400 transition-all duration-300 hover:scale-105">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" className="relative group hover:text-indigo-400 transition-all duration-300 hover:scale-105">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="relative group hover:text-indigo-400 transition-all duration-300 hover:scale-105">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition-all duration-300" />
            <a
              href="#login"
              className="relative bg-gradient-to-r from-indigo-600 to-pink-600 px-5 py-2.5 rounded-lg shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 font-semibold"
            >
              Log In
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-md px-4 py-4 transition-all duration-300 border-t border-gray-700/50 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 text-white text-sm">
          <a href="#features" className="hover:text-indigo-400 transition-all duration-300 hover:translate-x-2 py-2 px-3 rounded-lg hover:bg-gray-800/50">
            Features
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition-all duration-300 hover:translate-x-2 py-2 px-3 rounded-lg hover:bg-gray-800/50">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition-all duration-300 hover:translate-x-2 py-2 px-3 rounded-lg hover:bg-gray-800/50">
            Contact
          </a>
          <div className="relative group mt-2">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition-all duration-300" />
            <a
              href="#login"
              className="relative bg-gradient-to-r from-indigo-600 to-pink-600 px-4 py-3 rounded-lg shadow-lg text-center font-semibold block hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Log In
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function SectionOne() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 p-4 sm:p-8 text-white overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/videos/intoVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 -z-10" />
      
      {/* Animated particles background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-20" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-30" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-25" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-float opacity-0 animate-fade-in bg-gradient-to-r from-white via-indigo-200 to-pink-200 bg-clip-text text-transparent">
          Empowering Student Projects — From Idea to Innovation
        </h1>
        
        <div className="max-w-5xl mx-auto space-y-6 animate-float-delayed opacity-0 animate-fade-in-delayed">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            At <span className="font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">GetProject.com</span>, we help students turn ideas into impactful projects. Born from firsthand experience with academic struggles, our mission is to guide you in building real-world solutions — not just completing assignments.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            With a team of <span className="font-semibold text-indigo-400">15+ experts</span> across diverse technologies, we specialize in crafting everything from full-stack web apps to AI-powered tools. Our focus? Personalized mentorship, practical coding support, and deep technical guidance — so you understand every line of code you write.
          </p>
          
          <p className="text-lg sm:text-xl font-medium text-white">
            We're not just your project service — <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-bold">we're your growth partner.</span>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row gap-6 relative z-10">
        {[
          ["Start Your Project Journey", "#contact", "from-indigo-600 to-pink-600"],
          ["Explore Our Projects", "#projects", "from-pink-600 to-purple-600"]
        ].map(([text, href, gradient]) => (
          <div key={text} className="relative inline-flex items-center justify-center group">
            <div className={`absolute inset-0 duration-300 opacity-60 bg-gradient-to-r ${gradient} rounded-xl blur-lg group-hover:opacity-100 group-hover:blur-xl group-hover:scale-110 transition-all`} />
            <a
              role="button"
              href={href}
              className={`group relative inline-flex items-center justify-center text-base sm:text-lg rounded-xl bg-gradient-to-r ${gradient} px-8 sm:px-10 py-4 sm:py-4 font-bold text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 w-full sm:w-auto border border-white/20 backdrop-blur-sm`}
            >
              {text}
              <svg 
                aria-hidden="true" 
                viewBox="0 0 10 10" 
                height="10" 
                width="10" 
                fill="none" 
                className="ml-3 stroke-white stroke-2 group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M0 5h7" className="transition-opacity opacity-0 group-hover:opacity-100" />
                <path d="M1 1l4 4-4 4" className="transition-transform group-hover:translate-x-1" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionTwo() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="projects" className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Our Expertise
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From web development to AI, our team has the skills to bring your project to life with cutting-edge technology and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              name: "Team of GetProject",
              role: "UI / Frontend Developer",
              image: "/images/uidev.jpg",
              text: "We specialize in creating stunning, responsive user interfaces using React.js, Next.js, and Tailwind CSS. Our designs focus on user experience and modern aesthetics.",
              links: "/webDev",
              gradient: "from-blue-600 to-cyan-600",
              icon: "🎨"
            },
            {
              name: "Team of GetProject",
              role: "Full Stack Developer",
              image: "/images/fullstack.jpg",
              text: "From database design to API development, we build complete web applications using MERN stack, ensuring scalability and performance.",
              links: "/fullStack",
              gradient: "from-indigo-600 to-purple-600",
              icon: "⚡"
            },
            {
              name: "Team of GetProject",
              role: "AI / ML Engineer",
              image: "/images/ai.jpg",
              text: "We develop intelligent solutions using Python, TensorFlow, and PyTorch. From data analysis to machine learning models, we bring AI to life.",
              links: "/aiMl",
              gradient: "from-pink-600 to-rose-600",
              icon: "🤖"
            }
          ].map((testimonial, index) => (
            <Link key={index} href={testimonial.links} className="group cursor-pointer">
              <div className="relative h-full transform transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative h-full bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden">
                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                    {testimonial.icon}
                  </div>
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden mb-6 rounded-xl">
                    <div className={`absolute inset-0 bg-gradient-to-t ${testimonial.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <img
                      alt={testimonial.role}
                      src={testimonial.image}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {testimonial.role}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {testimonial.name}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}


export function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 px-8 md:px-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl animate-pulse" />
      </div>
      
      {/* Section Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text  animate-gradient-x">
          How it Works
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your Project Journey in 5 Simple Steps
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-center relative z-10">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 animate-pulse rounded-full" />

        {/* Step 1 */}
        <div className="flex flex-col items-center group transform hover:-translate-y-4 transition-all duration-500 ease-out">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full h-28 w-28 flex items-center justify-center text-3xl text-white font-bold border-2 border-indigo-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-indigo-500/50 group-hover:shadow-indigo-500/80">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">1</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-all duration-300 mb-3">Share Your Vision</h3>
          <p className="text-sm text-gray-400 max-w-xs mx-auto group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">Initial consultation where you share your project ideas and requirements with our expert team</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center group transform hover:-translate-y-4 transition-all duration-500 ease-out">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full h-28 w-28 flex items-center justify-center text-3xl text-white font-bold border-2 border-pink-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-pink-500/50 group-hover:shadow-pink-500/80">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">2</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-all duration-300 mb-3">Consultation & Proposal</h3>
          <p className="text-sm text-gray-400 max-w-xs mx-auto group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">We analyze your needs and create a detailed project proposal with timeline and deliverables</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center group transform hover:-translate-y-4 transition-all duration-500 ease-out">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full h-28 w-28 flex items-center justify-center text-3xl text-white font-bold border-2 border-purple-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-500/80">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">3</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-all duration-300 mb-3">Project Explanation</h3>
          <p className="text-sm text-gray-400 max-w-xs mx-auto group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">Comprehensive walkthrough of technical approach, architecture and implementation plan</p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center group transform hover:-translate-y-4 transition-all duration-500 ease-out">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full h-28 w-28 flex items-center justify-center text-3xl text-white font-bold border-2 border-indigo-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-indigo-500/50 group-hover:shadow-indigo-500/80">
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">4</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-all duration-300 mb-3">Development Begins</h3>
          <p className="text-sm text-gray-400 max-w-xs mx-auto group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">Our expert team starts building your project with regular code reviews and testing</p>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col items-center group transform hover:-translate-y-4 transition-all duration-500 ease-out">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full h-28 w-28 flex items-center justify-center text-3xl text-white font-bold border-2 border-blue-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-blue-500/50 group-hover:shadow-blue-500/80">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">5</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-all duration-300 mb-3">Regular Updates</h3>
          <p className="text-sm text-gray-400 max-w-xs mx-auto group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">Continuous communication with progress reports, demos and milestone achievements</p>
        </div>
      </div>
    </section>
  );
}




const features = [
  {
    title: "Transparent Deployment & Instant Update",
    description:
      "We offer real-time updates and transparent deployment processes. From code commits to production releases, you’re always in the loop."
  },
  {
    title: "Comprehensive Code Explanation",
    description:
      "Every line of code is documented and explained. We ensure you're not just getting a product — you’re learning how it’s built."
  },
  {
    title: "Real-time Customer Support",
    description:
      "Our team is available to assist you throughout the project. Get real-time communication via chat, email, or video call."
  },
  {
    title: "Fair & Transparent Pricing",
    description:
      "Our pricing model is simple and honest. No hidden charges, just clear deliverables for what you pay."
  },
  {
    title: "Collaborative Partnership",
    description:
      "We build alongside you, encouraging feedback and involvement at every stage. It’s your project, your vision — we’re here to bring it to life."
  }
];

export function WhyChooseUs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24 px-6 md:px-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-pink-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse" />
      </div>

      <div id="features" className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
          Why Choose Us
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Discover what makes us the perfect partner for your project journey
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full" />
      </div>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 relative z-10">
        {features.map((item, index) => {
          const gradients = [
            'from-indigo-600 to-purple-600',
            'from-pink-600 to-rose-600', 
            'from-purple-600 to-indigo-600',
            'from-blue-600 to-cyan-600',
            'from-emerald-600 to-teal-600'
          ];
          const gradient = gradients[index % gradients.length];

          return (
            <div
              key={index}
              className="group relative w-full max-w-md transform transition-all duration-500 hover:-translate-y-6 hover:scale-105"
            >
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-500 overflow-hidden">
                
                {/* Number badge */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {index + 1}
                </div>

                {/* Decorative line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} rounded-t-2xl`} />

                {/* Title + Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="relative w-full text-left focus:outline-none group/button"
                >
                  <h3 className="text-xl font-bold text-white transition-all duration-300 mb-4 pr-8">
                    {item.title}
                  </h3>

                  {/* Expand icon */}
                  <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center">
                    <svg 
                      className={`w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 ${
                        expandedIndex === index ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Expandable Description */}
                <div className={`transition-all duration-500 ${
                  expandedIndex === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                 
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
 <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-white-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



export function ContactMap() {
  return (
    <div className="lg:w-2/3 md:w-1/2 relative group h-96 md:h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
      <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl overflow-hidden sm:mr-10 p-6 flex items-end justify-start shadow-2xl transition-all duration-500 hover:shadow-indigo-500/40 border border-gray-700/50 group-hover:border-indigo-500/50 h-full">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 rounded-2xl"
          frameBorder="0"
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Hyderabad&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.3) transition: all 0.5s ease" }}
        />
        <div className="bg-gray-900/95 backdrop-blur-md relative flex flex-wrap py-8 px-6 rounded-xl shadow-2xl border border-gray-600/50 transition-all duration-500 hover:border-indigo-500/70 group-hover:bg-gray-800/95">
          <div className="lg:w-1/2 px-2">
            <h2 className="font-bold text-indigo-400 tracking-widest text-xs mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              ADDRESS
            </h2>
            <p className="text-white group-hover:text-gray-100 transition-colors duration-300">Banjara Hills, Hyderabad, Telangana 500034</p>
          </div>
          <div className="lg:w-1/2 px-2 mt-4 lg:mt-0">
            <h2 className="font-bold text-indigo-400 tracking-widest text-xs mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              EMAIL
            </h2>
            <a href="mailto:contact@example.com" className="text-white hover:text-indigo-400 transition-all duration-300 hover:scale-105 inline-block">
              contact@example.com
            </a>
            <h2 className="font-bold text-indigo-400 tracking-widest text-xs mt-4 mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              PHONE
            </h2>
            <p className="text-white group-hover:text-gray-100 transition-colors duration-300">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  return (
    <div className="lg:w-1/3 md:w-1/2 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
      <div className="relative bg-gray-900/90 backdrop-blur-md flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-2xl border border-gray-700/50 shadow-2xl transition-all duration-500 hover:shadow-pink-500/30 group-hover:border-pink-500/50">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4 font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Send Us a Message
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-4 rounded-full" />
          <p className="leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <form className="space-y-6">
          <div className="relative group/input">
            <label htmlFor="name" className="block text-sm font-medium text-indigo-400 mb-2 group-hover/input:text-indigo-300 transition-colors duration-300">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="w-full bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 text-base outline-none text-white py-3 px-4 leading-8 transition-all duration-300 placeholder-gray-500 group-hover/input:bg-gray-800/70 group-hover/input:border-gray-600"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
          
          <div className="relative group/input">
            <label htmlFor="email" className="block text-sm font-medium text-indigo-400 mb-2 group-hover/input:text-indigo-300 transition-colors duration-300">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 text-base outline-none text-white py-3 px-4 leading-8 transition-all duration-300 placeholder-gray-500 group-hover/input:bg-gray-800/70 group-hover/input:border-gray-600"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
          
          <div className="relative group/input">
            <label htmlFor="message" className="block text-sm font-medium text-indigo-400 mb-2 group-hover/input:text-indigo-300 transition-colors duration-300">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what's on your mind..."
                rows={4}
                className="w-full bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 text-base outline-none text-white py-3 px-4 resize-none leading-6 transition-all duration-300 placeholder-gray-500 group-hover/input:bg-gray-800/70 group-hover/input:border-gray-600"
              ></textarea>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
          
          <div className="relative group/button">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg blur opacity-50 group-hover/button:opacity-100 group-hover/button:blur-lg transition-all duration-300" />
            <button
              type="submit"
              className="relative w-full text-white bg-gradient-to-r from-indigo-600 to-pink-600 py-4 px-8 rounded-lg font-semibold hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-lg"
            >
              <span className="flex items-center justify-center">
                Send Message
                <svg className="w-5 h-5 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>We respect your privacy. Your details are safe with us.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="text-white body-font relative bg-gradient-to-b from-black via-gray-900 to-black py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" />
      </div>
      
      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to start your project? Let's discuss your ideas and bring them to life.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-6 rounded-full" />
      </div>
      
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap relative z-10 gap-8">
        <ContactMap />
        <ContactForm />
      </div>
    </section>
  );
}
