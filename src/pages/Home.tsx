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
      style={{ background: "#000000" }}
    >
      {/* Background Pattern with Cartoon Drawings */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2'%3E%3Cpath d='M30 50 Q35 40 40 50 Q45 60 40 70 Q35 80 30 70 Q25 60 30 50'/%3E%3Ccircle cx='33' cy='55' r='1.5'/%3E%3Ccircle cx='37' cy='55' r='1.5'/%3E%3Cpath d='M35 65 Q35 70 30 70'/%3E%3Cpath d='M80 40 Q90 30 100 40 Q110 50 100 60 Q90 70 80 60 Q70 50 80 40'/%3E%3Ccircle cx='83' cy='45' r='1.5'/%3E%3Ccircle cx='93' cy='45' r='1.5'/%3E%3Cpath d='M88 55 Q88 60 83 60'/%3E%3Cpath d='M130 50 Q140 40 150 50 Q160 60 150 70 Q140 80 130 70 Q120 60 130 50'/%3E%3Ccircle cx='133' cy='55' r='1.5'/%3E%3Ccircle cx='143' cy='55' r='1.5'/%3E%3Cpath d='M138 65 Q138 70 133 70'/%3E%3Cpath d='M180 40 Q190 30 200 40 Q210 50 200 60 Q190 70 180 60 Q170 50 180 40'/%3E%3Ccircle cx='183' cy='45' r='1.5'/%3E%3Ccircle cx='193' cy='45' r='1.5'/%3E%3Cpath d='M188 55 Q188 60 183 60'/%3E%3Cpath d='M230 50 Q240 40 250 50 Q260 60 250 70 Q240 80 230 70 Q220 60 230 50'/%3E%3Ccircle cx='233' cy='55' r='1.5'/%3E%3Ccircle cx='243' cy='55' r='1.5'/%3E%3Cpath d='M238 65 Q238 70 233 70'/%3E%3Cpath d='M50 30 L60 20 L70 30 L65 40 L55 40 Z'/%3E%3Cpath d='M150 30 L160 20 L170 30 L165 40 L155 40 Z'/%3E%3Cpath d='M250 30 L260 20 L270 30 L265 40 L255 40 Z'/%3E%3Cpath d='M20 100 L30 90 L40 100 L35 110 L25 110 Z'/%3E%3Cpath d='M120 100 L130 90 L140 100 L135 110 L125 110 Z'/%3E%3Cpath d='M220 100 L230 90 L240 100 L235 110 L225 110 Z'/%3E%3Cpath d='M60 120 Q70 110 80 120 Q90 130 80 140 Q70 150 60 140 Q50 130 60 120'/%3E%3Ccircle cx='63' cy='125' r='1.5'/%3E%3Ccircle cx='73' cy='125' r='1.5'/%3E%3Cpath d='M68 135 Q68 140 63 140'/%3E%3Cpath d='M160 120 Q170 110 180 120 Q190 130 180 140 Q170 150 160 140 Q150 130 160 120'/%3E%3Ccircle cx='163' cy='125' r='1.5'/%3E%3Ccircle cx='173' cy='125' r='1.5'/%3E%3Cpath d='M168 135 Q168 140 163 140'/%3E%3Cpath d='M260 120 Q270 110 280 120 Q290 130 280 140 Q270 150 260 140 Q250 130 260 120'/%3E%3Ccircle cx='263' cy='125' r='1.5'/%3E%3Ccircle cx='273' cy='125' r='1.5'/%3E%3Cpath d='M268 135 Q268 140 263 140'/%3E%3Cpath d='M30 180 Q40 170 50 180 Q60 190 50 200 Q40 210 30 200 Q20 190 30 180'/%3E%3Ccircle cx='33' cy='185' r='1.5'/%3E%3Ccircle cx='43' cy='185' r='1.5'/%3E%3Cpath d='M38 195 Q38 200 33 200'/%3E%3Cpath d='M130 180 Q140 170 150 180 Q160 190 150 200 Q140 210 130 200 Q120 190 130 180'/%3E%3Ccircle cx='133' cy='185' r='1.5'/%3E%3Ccircle cx='143' cy='185' r='1.5'/%3E%3Cpath d='M138 195 Q138 200 133 200'/%3E%3Cpath d='M230 180 Q240 170 250 180 Q260 190 250 200 Q240 210 230 200 Q220 190 230 180'/%3E%3Ccircle cx='233' cy='185' r='1.5'/%3E%3Ccircle cx='243' cy='185' r='1.5'/%3E%3Cpath d='M238 195 Q238 200 233 200'/%3E%3Cpath d='M10 80 L15 75 L20 80 L18 85 L12 85 Z'/%3E%3Cpath d='M110 80 L115 75 L120 80 L118 85 L112 85 Z'/%3E%3Cpath d='M210 80 L215 75 L220 80 L218 85 L212 85 Z'/%3E%3Cpath d='M10 160 L15 155 L20 160 L18 165 L12 165 Z'/%3E%3Cpath d='M110 160 L115 155 L120 160 L118 165 L112 165 Z'/%3E%3Cpath d='M210 160 L215 155 L220 160 L218 165 L212 165 Z'/%3E%3Cpath d='M10 240 L15 235 L20 240 L18 245 L12 245 Z'/%3E%3Cpath d='M110 240 L115 235 L120 240 L118 245 L112 245 Z'/%3E%3Cpath d='M210 240 L215 235 L220 240 L218 245 L212 245 Z'/%3E%3Cpath d='M25 25 L30 20 L35 25'/%3E%3Cpath d='M125 25 L130 20 L135 25'/%3E%3Cpath d='M225 25 L230 20 L235 25'/%3E%3Cpath d='M25 275 L30 270 L35 275'/%3E%3Cpath d='M125 275 L130 270 L135 275'/%3E%3Cpath d='M225 275 L230 270 L235 275'/%3E%3Ccircle cx='45' cy='25' r='10'/%3E%3Ccircle cx='145' cy='25' r='10'/%3E%3Ccircle cx='245' cy='25' r='10'/%3E%3Ccircle cx='45' cy='275' r='10'/%3E%3Ccircle cx='145' cy='275' r='10'/%3E%3Ccircle cx='245' cy='275' r='10'/%3E%3Cpath d='M70 25 L75 20 L80 25 L78 30 L72 30 Z'/%3E%3Cpath d='M170 25 L175 20 L180 25 L178 30 L172 30 Z'/%3E%3Cpath d='M270 25 L275 20 L280 25 L278 30 L272 30 Z'/%3E%3Cpath d='M70 275 L75 270 L80 275 L78 280 L72 280 Z'/%3E%3Cpath d='M170 275 L175 270 L180 275 L178 280 L172 280 Z'/%3E%3Cpath d='M270 275 L275 270 L280 275 L278 280 L272 280 Z'/%3E%3Cpath d='M150 10 L155 5 L160 10'/%3E%3Cpath d='M150 290 L155 285 L160 290'/%3E%3Cpath d='M90 60 L95 55 L100 60'/%3E%3Cpath d='M190 60 L195 55 L200 60'/%3E%3Cpath d='M90 240 L95 235 L100 240'/%3E%3Cpath d='M190 240 L195 235 L200 240'/%3E%3Cpath d='M40 150 L45 145 L50 150'/%3E%3Cpath d='M140 150 L145 145 L150 150'/%3E%3Cpath d='M240 150 L245 145 L250 150'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      ></div>

      {/* Header - Smaller and More Professional */}
      <header className="relative z-20 bg-[#5D4E75] text-white px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.166 1.183-.835 4.05-1.179 5.37-.174.75-.519 1-.85 1.025-.72.05-1.265-.475-1.96-.93-1.08-.75-1.69-1.215-2.74-1.945-1.215-.825-.428-1.28.265-2.02.18-.19 3.245-2.975 3.305-3.23.008-.027.015-.125-.055-.185-.07-.06-.172-.04-.247-.025-.106.02-1.79 1.14-5.06 3.345-.48.33-.914.49-1.304.48-.43-.01-1.255-.24-1.87-.44-.755-.245-1.355-.375-1.305-.79.027-.21.405-.425 1.115-.645 4.326-1.885 7.22-3.13 8.68-3.735 4.24-1.76 5.12-2.07 5.695-2.09.125-.005.405.03.56.19.14.14.19.33.21.465.02.14.04.46.02.71z" />
          </svg>
          <span className="font-medium text-base">Telegram</span>
        </div>
        <button
          onClick={handleJoinClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-blue-500/50"
        >
          DOWNLOAD
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-44px)] flex items-center justify-center px-4 py-8">
        <div className="bg-[#1a1a1a] rounded-3xl p-6 md:p-10 max-w-md w-full shadow-2xl">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-white/10">
              <img
                src="/image.png"
                alt="Aniket Roy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Channel Name */}
            <div className="text-center mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2 flex-wrap">
                <span>Aniket Roy™</span>
                <span className="text-gray-300">[ Official ]</span>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  TOP
                </span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                30 888 subscribers
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center mb-6">
            <p className="text-white font-bold text-base md:text-lg">
              We Do Not Support Gambling. 🦅
            </p>
          </div>

          {/* Description - Shortened */}
          <div className="space-y-3 mb-8 text-white text-sm md:text-base leading-relaxed">
            <p>
              Welcome to Cricket Prediction Center 🏏
            </p>
            <p className="text-gray-300">
              Match analysis, pitch reports & fantasy tips for cricket lovers.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm pt-2">
              <span>No spam</span>
              <span>•</span>
              <span>Quality content</span>
            </div>
          </div>

          {/* Join Button - Animated and Prominent */}
          <button
            onClick={handleJoinClick}
            className="relative w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-5 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 active:scale-95 animate-bounce-glow hover:animate-none overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
              JOIN CHANNEL
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.166 1.183-.835 4.05-1.179 5.37-.174.75-.519 1-.85 1.025-.72.05-1.265-.475-1.96-.93-1.08-.75-1.69-1.215-2.74-1.945-1.215-.825-.428-1.28.265-2.02.18-.19 3.245-2.975 3.305-3.23.008-.027.015-.125-.055-.185-.07-.06-.172-.04-.247-.025-.106.02-1.79 1.14-5.06 3.345-.48.33-.914.49-1.304.48-.43-.01-1.255-.24-1.87-.44-.755-.245-1.355-.375-1.305-.79.027-.21.405-.425 1.115-.645 4.326-1.885 7.22-3.13 8.68-3.735 4.24-1.76 5.12-2.07 5.695-2.09.125-.005.405.03.56.19.14.14.19.33.21.465.02.14.04.46.02.71z" />
              </svg>
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
