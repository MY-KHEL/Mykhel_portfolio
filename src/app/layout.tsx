import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Michael Ojo | Mykhel",
  description: "Explore the portfolio of Michael Ojo",
  keywords: [
    "Michael Ojo",
    "Mykhel",
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    'ReactJs',
    "NextJs",
    "NextJS Developer",
    "Web Developer Nigeria",
    "Next.js Portfolio",
    "Tailwind CSS Developer",
    "Tech Portfolio",
    "Animation Developer"
  ],
  authors: [{ name: "Michael Ojo", url: "https://mykhel-portfolio.vercel.app/" }],
  creator: "Michael Ojo",
   generator: "Next.js",

   openGraph: {
    title: "Michael Ojo | Frontend Developer & Innovator",
    description: "Check out my work and projects — built with Next.js, React, Tailwind CSS, and modern web tools.",
    url: "https://mykhel-portfolio.vercel.app/",
    siteName: "Michael Ojo Portfolio",
    
    locale: "en_US",
    type: "website",
  },
     twitter: {
    card: "summary_large_image",
    title: "Michael Ojo | Frontend Developer",
    description: "Modern, clean, and interactive frontend developer portfolio.",

  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
