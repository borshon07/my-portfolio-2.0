import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Borshon Roy | Junior Web Developer & CS Student",
  description:
    "Portfolio of Borshon Roy, a Computer Science & Technology student and Junior Web Developer based in Bangladesh. Building modern, responsive web experiences with React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Borshon Roy",
    "Junior Web Developer",
    "Computer Science Student",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Bangladesh Developer",
    "Web Development Portfolio",
  ],
  authors: [{ name: "Borshon Roy" }],
  creator: "Borshon Roy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://borshonroy.dev",
    title: "Borshon Roy | Junior Web Developer & CS Student",
    description:
      "Building thoughtful experiences for the web with React, Next.js, TypeScript, and Tailwind CSS.",
    siteName: "Borshon Roy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Borshon Roy | Junior Web Developer & CS Student",
    description:
      "Building thoughtful experiences for the web with React, Next.js, TypeScript, and Tailwind CSS.",
    creator: "@borshonroy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased selection:bg-indigo-500/30 selection:text-white flex flex-col transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
