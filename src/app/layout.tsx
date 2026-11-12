import type { Metadata } from "next";
import { Gaegu, Solway } from "next/font/google";

import "./globals.css";

const solway=Solway({
  variable:"--font-solway",
  subsets:["latin"],
  weight:["400"]
})


const gaegu = Gaegu({
  weight: ["400"],
  variable: "--font-gaegu",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Aditya Sultania",
  description:
    "Aditya Sultania — Full Stack Developer building scalable APIs, real-time systems and RAG-powered AI apps with Django, Node.js and React.",
  authors: [{ name: "Aditya Sultania" }],
  openGraph: {
    title: "Aditya Sultania",
    description:
      "Full Stack Developer building scalable APIs, real-time systems and RAG-powered AI apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gaegu.variable} ${solway.variable} antialiased`}
      >

        {children}

      </body>
    </html>
  );
}
