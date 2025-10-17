"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

export default function Support() {
  const router = useRouter();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/support")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Mascot - Top Center - Clickable to Home */}
      <div className="flex justify-center py-8 pt-[20vh]">
        <div
          className="w-32 lg:w-40 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => router.push("/")}
        >
          <Image
            src="/mascot-alone.png"
            alt="Glow Mascot - Return Home"
            width={160}
            height={160}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
            h1: ({ children }) => (
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/80">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-foreground">{children}</strong>
            ),
          }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
