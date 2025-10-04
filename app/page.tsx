"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const handleMascotClick = () => {
    setIsAnimating(true);
    setIsReading(!isReading);
    setTimeout(() => setIsAnimating(false), 600);
  };
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Image
                src="/icon.png"
                alt="Glow Icon"
                width={48}
                height={48}
                className="rounded-2xl"
              />
              <h1 className="text-3xl font-bold text-foreground">Glow</h1>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-none">
                Meet Glow, your pocket companion
              </h2>
              <p className="text-xl lg:text-2xl text-foreground/70">
                Daily warmth when everything feels cold
              </p>
            </div>

            {/* Download Button */}
            <a
              href="#"
              className="flex w-full justify-center lg:inline-flex lg:w-auto items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              Download on iOS
            </a>
          </div>

          {/* Right Column - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="/iphone.png"
                alt="Glow App on iPhone"
                className="w-full max-h-[600px] object-contain drop-shadow-[0_0_60px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="mb-12">
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple by design
          </h3>
          <p className="text-xl text-foreground/70">
            Simple features designed to actually fit into your life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 items-stretch grid-rows-[1fr_auto_auto]">
          {/* Widgets Card */}
          <div className="grid grid-rows-subgrid row-span-3 gap-4">
            <div className="relative bg-white rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.08)] gap-4">
              <div className="px-6 pt-4">
                <img
                  src="/large-widget.png"
                  alt="Large Widget"
                  className="w-full h-auto rounded-[5rem] md:rounded-[2rem] shadow-md"
                />
              </div>
              <div className="px-6">
                <img
                  src="/top-widget.png"
                  alt="Top Widget"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-foreground mt-2">Widgets</h4>
            <p className="text-foreground/70">
            Add quotes directly to your home screen. New wisdom every hour, no need to open the app. 
            </p>
          </div>

          {/* Daily Reminders Card */}
          <div className="grid grid-rows-subgrid row-span-3 gap-4">
            <div className="relative bg-white rounded-3xl overflow-hidden flex items-start justify-center shadow-[0_0_20px_rgba(0,0,0,0.08)]">
              <div className="px-12 pb-8">

                <img
                  src="/notifications.png"
                  alt="Notifications"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-foreground mt-2">Gentle nudges</h4>
            <p className="text-foreground/70">
            Choose when you need support most. Your schedule, your timing.
            </p>
          </div>

          {/* Categories Card */}
          <div className="grid grid-rows-subgrid row-span-3 gap-4">
            <div className="relative bg-white rounded-3xl overflow-hidden flex flex-col justify-end shadow-[0_0_20px_rgba(0,0,0,0.08)]">
              <div className="px-12 pt-8">
                <img
                  src="/categories.png"
                  alt="Categories"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-foreground mt-2">Categories</h4>
            <p className="text-foreground/70">
            Pick from unique categories for focused support. Or blend multiple categories together to create your perfect mix.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Mascot - Bottom Left */}
      <div
        className={`fixed -bottom-10 -left-10 w-32 lg:w-48 cursor-pointer z-10 ${isAnimating ? 'animate-mascot-wiggle' : 'mascot-base'}`}
        onClick={handleMascotClick}
      >
        <div className="relative w-full h-full">
          <Image
            src="/mascot-alone.png"
            alt="Glow Mascot"
            width={200}
            height={200}
            className={`w-full h-auto transition-opacity duration-300 ${isReading ? 'opacity-0' : 'opacity-100'}`}
          />
          <Image
            src="/mascot-alone-reading.png"
            alt="Glow Mascot Reading"
            width={200}
            height={200}
            className={`w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ${isReading ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
