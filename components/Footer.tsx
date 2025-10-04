import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">Glow</span>
            <span className="text-foreground/50">·</span>
            <span className="text-foreground/70">Your daily light</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-foreground/50 text-sm">
          © {new Date().getFullYear()} Glow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
