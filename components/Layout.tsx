import React, { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
} from "lucide-react";
import { NAV_ITEMS } from "../constants";

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center text-[10px] leading-tight text-gray-500 font-mono tracking-widest uppercase">
      <Globe size={14} className="mb-1.5 text-brand/70 animate-pulse" />
      <span className="opacity-80">Pakistan</span>
      <span className="font-bold text-gray-400 dark:text-gray-500 mt-0.5">
        {time.toLocaleTimeString("en-GB", {
          hour12: false,
          timeZone: "Asia/Karachi",
        })}
      </span>
    </div>
  );
};

const Layout: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const requestRef = useRef<number>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);

    // Global Intersection Observer for reveals
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // We delay slightly to ensure DOM is ready
    const timer = setTimeout(() => {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => revealObserver.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      revealObserver.disconnect();
    };
  }, [location]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth mouse follower logic
  useEffect(() => {
    const animateFollower = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
      requestRef.current = requestAnimationFrame(animateFollower);
    };

    requestRef.current = requestAnimationFrame(animateFollower);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      const target = event.target as HTMLElement;
      const isInteractive = !!target.closest("a, button, [data-hover]");
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const primaryGlow = isDark
    ? "rgba(155, 91, 255, 0.15)"
    : "rgba(155, 91, 255, 0.08)";

  const secondaryGlow = isDark
    ? "rgba(0, 255, 255, 0.05)"
    : "rgba(255, 0, 150, 0.04)";

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand selection:text-white relative overflow-x-hidden transition-colors duration-500">
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-1 bg-brand z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Dynamic Mouse Follower Background Layers */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${primaryGlow}, transparent 80%)`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(${
            isHovering ? "600px" : "400px"
          } circle at ${followerPosition.x}px ${
            followerPosition.y
          }px, ${secondaryGlow}, transparent 70%)`,
        }}
      />

      {/* Mouse Follower Dot */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-brand/40 pointer-events-none z-[9999] transition-transform duration-300 ease-out flex items-center justify-center ${
          isHovering ? "scale-[2] bg-brand/5" : "scale-100"
        }`}
        style={{
          transform: `translate(${followerPosition.x - 16}px, ${
            followerPosition.y - 16
          }px) scale(${isHovering ? 2 : 1})`,
          transition:
            "transform 0.1s ease-out, background 0.3s ease, scale 0.3s ease",
        }}
      >
        <div
          className={`w-1 h-1 bg-brand rounded-full transition-opacity ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#fafafa] dark:bg-[#050505]">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.03]" />
      </div>

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-2xl">
        <div className="glass-nav rounded-full px-2 py-2 pl-6 flex items-center justify-between gap-8 shadow-2xl shadow-black/5 dark:shadow-black/20 transition-all duration-300">
          <NavLink
            to="/"
            className="font-bold text-gray-900 dark:text-white tracking-tight text-sm hover:opacity-70 transition-opacity"
          >
            Hasnain
            <span className="text-gray-400 dark:text-gray-600"></span>
          </NavLink>

          <div className="hidden md:flex items-center bg-gray-100 dark:bg-white/5 rounded-full px-1 py-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3 pr-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-900 dark:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full mt-4 p-2 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl flex flex-col gap-1 overflow-hidden animate-[fadeInUp_0.2s_ease-out]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-center text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6 z-10">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 dark:border-white/5 bg-white/50 dark:bg-[#050505] backdrop-blur-sm z-10 relative">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center gap-10">
            <div
              className="flex flex-col items-center text-center gap-6 w-full"
              data-reveal
            >
              <div className="space-y-1">
                <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
                  Hasnain Samoo
                </h2>
                <p className="text-[10px] text-gray-500 dark:text-gray-500 font-bold uppercase tracking-[0.3em]">
                  Frontend Engineer & UI Architect
                </p>
              </div>

              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent"></div>

              <TimeDisplay />
            </div>

            <div
              className="flex flex-col md:flex-row items-center justify-between w-full pt-4 border-t border-gray-100 dark:border-white/[0.03] gap-6"
              data-reveal
            >
              <div className="flex gap-8">
                {[
                  { Icon: Github, url: "https://github.com/hasnainahmed66" },
                  {
                    Icon: Linkedin,
                    url: "https://www.linkedin.com/in/hasnain-developer/",
                  },
                  { Icon: Twitter, url: "https://twitter.com/Hasnain" },
                  { Icon: Mail, url: "mailto:hasnainsamoo02@gmail.com" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand transition-all transform hover:scale-110"
                  >
                    <item.Icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 font-bold">
               made &hearts; Hasnain Samoo &copy;  {new Date().getFullYear()} 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
