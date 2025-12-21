import React from "react";
import { Link } from "react-router-dom";
import { Globe, Code2, Layout, Download } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 overflow-hidden">
      <h2
        className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-8"
        data-reveal
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Text */}
        <div
          className="md:col-span-2 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed"
          data-reveal="left"
        >
          <p>
            I’m a passionate MERN Stack Developer who loves turning ideas into
            interactive, user-friendly web applications. I work with MongoDB,
            Express.js, React,Next.jsand Node.js, focusing on clean code,
            responsive design, and smooth user experiences.
          </p>
          <p>
            As a fresher developer, I’m always eager to learn, build, and grow.
            I enjoy taking on challenges that help me improve both my technical
            and problem-solving skills. My goal is to become part of a creative
            team where I can contribute to real-world projects and deliver
            impactful digital solutions.
          </p>
          <p>
            ✨Tech Stack: JavaScript | React | Node.js | Express.js | MongoDB |
            HTML | CSS 🚀 Goal: To build modern, scalable web apps that make a
            difference.
          </p>

          {/* Fix: Merged duplicate className attribute for stagger animation */}
          <div className="pt-4 stagger-1" data-reveal>
            <a
              href="/Hasnain resume.docx" // public folder me jo file hai
              download // click karte hi file download ho jayegi
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-light transition-colors group"
            >
              <Download
                size={16}
                className="group-hover:-translate-y-1 transition-transform"
              />
              Download Resume
            </a>
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-4">
          {/* Fix: Merged duplicate className attribute for stagger animation */}
          <div
            className="p-5 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 stagger-1"
            data-reveal="right"
          >
            <Code2 className="w-8 h-8 text-brand mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              Engineering
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Clean, scalable code patterns.
            </p>
          </div>
          {/* Fix: Merged duplicate className attribute for stagger animation */}
          <div
            className="p-5 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 stagger-2"
            data-reveal="right"
          >
            <Layout className="w-8 h-8 text-brand mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              Design
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Minimalist & accessible UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
