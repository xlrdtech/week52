"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

// Using standard HTML <a> and <img> tags to work in any React environment.

// A simple SVG icon component for social links.
interface SocialIconProps {
  href: string;
  "aria-label": string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  "aria-label": ariaLabel,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-slate-400 hover:text-cyan-400 transition-colors"
  >
    {children}
  </a>
);

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Responsive layout container: centered on mobile, 4-col on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center lg:text-left">
        {/* Main grid: 1 col on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-x-8">
          {/* Section 1: Brand */}
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1390.JPG-r9oNMP7wdPFYTmV0JqgGWfVmP5FESW.jpeg"
                alt="52 Weeks Development Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="font-bold text-xl">52 Weeks Development</span>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              Redeveloping individuals and communities through second chance
              opportunities.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-base text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-base text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-base text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-base text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Get in Touch */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <span>Serving Broward and Dade Counties</span>
              </li>
              <li>
                <a
                  href="mailto:waine@52weeks.dev"
                  className="hover:text-cyan-400 transition-colors"
                >
                  waine@52weeks.dev
                </a>
              </li>
              <li>
                <a
                  href="tel:9546965494"
                  className="hover:text-cyan-400 transition-colors"
                >
                  (954) 696-5494
                </a>
              </li>
              <li>
                <a
                  href="https://www.52weeks.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  www.52weeks.dev
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Support & Inspire */}
          <div className="space-y-6">
            <a
              href="https://square.link/u/OQowKsqR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Donate Now
            </a>
            {/* Social Media Icons */}
            <div className="flex space-x-5 justify-center lg:justify-start">
              <SocialIcon
                href="https://instagram.com/52weeksdev"
                aria-label="52 Weeks Development on Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.842a10.158 10.158 0 00-3.22.587 9.875 9.875 0 00-3.414 1.84A9.874 9.874 0 003.52 7.683 10.156 10.156 0 003 10.9v2.2c0 1.25.21 2.45.617 3.56a9.874 9.874 0 001.84 3.413 9.875 9.875 0 003.414 1.84 10.158 10.158 0 006.258 0 9.875 9.875 0 003.414-1.84 9.874 9.874 0 001.84-3.413A10.156 10.156 0 0021 13.1v-2.2c0-1.25-.21-2.45-.617-3.56a9.874 9.874 0 00-1.84-3.413A9.875 9.875 0 0015.138 2.43 10.158 10.158 0 0012 1.842zM5.803 7.024a.79.79 0 01.79-.79h.01a.79.79 0 01.79.79v.01a.79.79 0 01-.79.79h-.01a.79.79 0 01-.79-.79v-.01zM12 7.17a4.83 4.83 0 100 9.66 4.83 4.83 0 000-9.66zM12 15a3 3 0 110-6 3 3 0 010 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://x.com/52weeksdev"
                aria-label="52 Weeks Development on X"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.918L5.788 9.418 0 15.25H2.454l4.94-5.616L11.542.75H12.6zM10.9 13.628l1.102 1.579h1.564l-6.32-8.995L2.13.75H.61l5.88 8.4 1.102 1.579 2.18 3.127z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 mt-8 py-8 text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} 52 Weeks Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
