export default function UIPage() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <section className="relative z-10 py-24 px-6 md:px-24">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
              UI / Frontend Projects
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Crafting pixel-perfect interfaces using React.js and Tailwind CSS. We focus on design systems, responsiveness, and smooth UX experiences.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Landing Page UI",
                subtitle: "REACT + TAILWIND",
                img: "https://images.unsplash.com/photo-1580894908361-967195033215",
                desc: "A smooth, scroll-based landing page with modern layout, reusable components, and mobile-first design approach.",
                gradient: "from-blue-600 to-cyan-600",
                icon: "🎨"
              },
              {
                title: "Portfolio Site",
                subtitle: "UI DESIGN",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
                desc: "Fully responsive personal portfolio with dark mode toggle, animated sections, and creative grid layout system.",
                gradient: "from-indigo-600 to-purple-600",
                icon: "💼"
              },
              {
                title: "Dashboard UI",
                subtitle: "INTERFACE SYSTEM",
                img: "https://images.unsplash.com/photo-1617042220911-1040587eb927",
                desc: "Modular admin dashboard with sidebar navigation, cards, charts, and user management interface for data visualization.",
                gradient: "from-cyan-600 to-teal-600",
                icon: "📈"
              },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-full transform transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                  {/* Glowing background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative h-full bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
                    {/* Icon */}
                    <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                      {project.icon}
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <h3 className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent tracking-widest uppercase`}>
                        {project.subtitle}
                      </h3>
                      <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                        {project.desc}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          UI/Frontend Project
                        </span>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
