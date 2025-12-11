import React, { useEffect, useState } from "react";

const TELEGRAM_LINK = "https://t.me/+lyHe_ZTfamkxNzE1";

const Home: React.FC = () => {
  const [seconds, setSeconds] = useState(4);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    // Prevent back navigation after redirect
    const handlePopState = () => {
      window.location.replace(TELEGRAM_LINK);
    };

    window.addEventListener("popstate", handlePopState);

    // Countdown timer
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("popstate", handlePopState);
      };
    } else if (!redirected) {
      // Auto-redirect after 4 seconds using replace to prevent back navigation
      setRedirected(true);
      window.location.replace(TELEGRAM_LINK);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [seconds, redirected]);

  // Redirect on any click
  const handleClick = () => {
    if (!redirected) {
      setRedirected(true);
      window.location.replace(TELEGRAM_LINK);
    }
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRedirected(true);
    window.location.replace(TELEGRAM_LINK);
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden cursor-pointer"
      onClick={handleClick}
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)",
      }}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='1'%3E%3Ccircle cx='20' cy='20' r='8'/%3E%3Ccircle cx='80' cy='20' r='8'/%3E%3Ccircle cx='20' cy='80' r='8'/%3E%3Ccircle cx='80' cy='80' r='8'/%3E%3Cpath d='M50 10 L50 90 M10 50 L90 50'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Main Content - Premium Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-4 sm:py-6">
        <div className="w-full max-w-md">
          {/* Premium Card with Enhanced Shadow */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-5 sm:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-gray-700/50 backdrop-blur-sm">
            {/* Inner Vignette Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Profile Section */}
              <div className="flex flex-col items-center mb-5">
                {/* Profile Picture with Premium Ring & Glow */}
                <div className="relative mb-3">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-60 blur-2xl animate-pulse"></div>
                  {/* Avatar Ring */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-[3px] border-white/30 shadow-2xl ring-4 ring-blue-500/20">
                    <img
                      src="/image.png"
                      alt="Aniket Roy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-lg border-2 border-gray-900">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Channel Name with Better Typography */}
                <div className="text-center mb-3">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1.5 flex items-center justify-center gap-2 flex-wrap tracking-tight">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                      Aniket Roy™
                    </span>
                    <span className="text-gray-400 font-normal text-lg sm:text-xl">
                      [ Official ]
                    </span>
                  </h1>

                  {/* Social Proof Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-800/60 rounded-full border border-gray-700/50 mt-2">
                    <svg
                      className="w-3.5 h-3.5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white text-xs font-semibold">
                      30.9K subscribers
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-4"></div>

              {/* Disclaimer */}
              <div className="text-center mb-4">
                <p className="text-white font-semibold text-sm tracking-wide">
                  We Do Not Support Gambling. 🦅
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-4"></div>

              {/* Value Proposition - Compact */}
              <div className="mb-5">
                <h2 className="text-white text-lg sm:text-xl font-bold text-center mb-3">
                  Welcome to Cricket Prediction Center 🏏
                </h2>

                {/* Benefits as Compact Bullets */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-300 text-sm">
                      Daily match insights & analysis
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-300 text-sm">
                      Pitch reports & fantasy tips
                    </p>
                  </div>
                </div>

                {/* Trust Badges - Compact */}
                <div className="flex items-center justify-center gap-3 text-gray-400 text-xs pt-1">
                  <span className="font-medium">No spam</span>
                  <span className="text-gray-600">•</span>
                  <span className="font-medium">Quality content</span>
                </div>
              </div>

              {/* Primary CTA - Benefit-Driven */}
              <div className="mb-3">
                <button
                  onClick={handleJoinClick}
                  className="relative w-full bg-gradient-to-r from-[#2f6bff] via-[#5b4bff] to-[#2f6bff] hover:from-[#2563eb] hover:via-[#4f46e5] hover:to-[#2563eb] text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl text-center transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 shadow-[0_8px_24px_rgba(43,51,99,0.35)] hover:shadow-[0_14px_34px_rgba(43,51,99,0.45)] overflow-hidden group focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide">
                    Join & Get Today's Match Tips
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.166 1.183-.835 4.05-1.179 5.37-.174.75-.519 1-.85 1.025-.72.05-1.265-.475-1.96-.93-1.08-.75-1.69-1.215-2.74-1.945-1.215-.825-.428-1.28.265-2.02.18-.19 3.245-2.975 3.305-3.23.008-.027.015-.125-.055-.185-.07-.06-.172-.04-.247-.025-.106.02-1.79 1.14-5.06 3.345-.48.33-.914.49-1.304.48-.43-.01-1.255-.24-1.87-.44-.755-.245-1.355-.375-1.305-.79.027-.21.405-.425 1.115-.645 4.326-1.885 7.22-3.13 8.68-3.735 4.24-1.76 5.12-2.07 5.695-2.09.125-.005.405.03.56.19.14.14.19.33.21.465.02.14.04.46.02.71z" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Trust & Friction Reduction - Compact */}
              <div className="text-center">
                <p className="text-gray-500 text-xs">
                  Redirects to Telegram • No payment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
