"use client";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-700/50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="relative z-10 container px-6 py-12 mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Logo Section */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-3 rounded-full shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
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
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:via-purple-500 group-hover:to-indigo-400 transition-all duration-300">
              GetProject
            </span>
          </button>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { name: 'Home', href: '#' },
              { name: 'Projects', href: '#projects' },
              { name: 'Features', href: '#features' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {[
              {
                name: 'Facebook',
                href: '#',
                icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
                color: 'hover:text-blue-400'
              },
              {
                name: 'Twitter',
                href: '#',
                icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
                color: 'hover:text-cyan-400'
              },
              {
                name: 'Instagram',
                href: '#',
                icon: (
                  <>
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </>
                ),
                color: 'hover:text-pink-400'
              },
              {
                name: 'LinkedIn',
                href: '#',
                icon: (
                  <>
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" stroke="none" />
                  </>
                ),
                color: 'hover:text-indigo-400'
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`text-gray-500 ${social.color} transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-gray-800/50`}
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-semibold">GetProject</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
