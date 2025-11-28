// src/App.tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Professional Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'), linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)`,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 container mx-auto px-4 py-12 md:py-20 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20 animate-fade-in">
            <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-5xl md:text-6xl">🏏</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
              Aniket Roy Top Update
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-4">
              Get daily cricket match analysis and updates
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Cricket match analysis, team updates aur fantasy discussions – daily
            </p>
            <p className="text-base text-gray-400 mt-3 max-w-xl mx-auto">
              Ye channel specially cricket lovers ke liye banaya gaya hai.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-16 md:mb-20 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white text-center">
                Join our official Telegram channel to get:
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureItem icon="✓" text="Match analysis" />
                <FeatureItem icon="✓" text="Team news" />
                <FeatureItem icon="✓" text="Statistics & updates" />
                <FeatureItem icon="✓" text="Daily sports content" />
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center mb-16 md:mb-20 animate-fade-in">
            <div className="inline-block">
              <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
                No fake promises, sirf real aur simple cricket content.
              </p>
              <a
                href="https://t.me/aniketroytopupdate"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-black font-semibold text-lg md:text-xl rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.166 1.183-.835 4.05-1.179 5.37-.174.75-.519 1-.85 1.025-.72.05-1.265-.475-1.96-.93-1.08-.75-1.69-1.215-2.74-1.945-1.215-.825-.428-1.28.265-2.02.18-.19 3.245-2.975 3.305-3.23.008-.027.015-.125-.055-.185-.07-.06-.172-.04-.247-.025-.106.02-1.79 1.14-5.06 3.345-.48.33-.914.49-1.304.48-.43-.01-1.255-.24-1.87-.44-.755-.245-1.355-.375-1.305-.79.027-.21.405-.425 1.115-.645 4.326-1.885 7.22-3.13 8.68-3.735 4.24-1.76 5.12-2.07 5.695-2.09.125-.005.405.03.56.19.14.14.19.33.21.465.02.14.04.46.02.71z"/>
                </svg>
                <span>Join on Telegram</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-16 md:mb-20 animate-fade-in">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <SocialLink
                href="mailto:contact@aniketroy.com"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                label="Email"
              />
              <SocialLink
                href="https://instagram.com"
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                }
                label="Instagram"
              />
              <SocialLink
                href="https://youtube.com"
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                }
                label="YouTube"
              />
              <SocialLink
                href="https://vimeo.com"
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.011 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                  </svg>
                }
                label="Vimeo"
              />
              <SocialLink
                href="https://patreon.com"
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M16.9 8.66c-.087 0-.143-.05-.18-.127l-1.17-2.275c-.05-.1-.12-.127-.2-.127h-1.22c-.1 0-.15.05-.15.15v6.5c0 .1.05.15.15.15h1.03c.1 0 .15-.05.15-.15v-4.05c0-.05.05-.1.1-.1h.68c.05 0 .1.05.1.1v4.05c0 .1.05.15.15.15h1.03c.1 0 .15-.05.15-.15V8.78c0-.1-.05-.12-.15-.12h-1.38z"/>
                  </svg>
                }
                label="Patreon"
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-amber-400 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>Disclaimer</span>
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed text-sm md:text-base">
                <p>
                  Ye channel sirf informational aur educational purpose ke liye hai.
                </p>
                <p>
                  Hum kisi bhi type ka profit, fixed return ya guaranteed winning ka promise nahi karte.
                </p>
                <p>
                  Cricket aur fantasy games me risk hota hai.
                </p>
                <p className="text-amber-300 font-medium">
                  18+ audience ke liye recommended hai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Aniket Roy Top Update. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: string;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 text-white">
      <span className="text-green-400 text-xl font-bold">{icon}</span>
      <span className="text-lg">{text}</span>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
      aria-label={label}
    >
      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};

export default App;
