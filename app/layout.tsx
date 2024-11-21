import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script"; // Import Script from Next.js for optimized script loading

// Load local fonts
const geistSans = localFont({
  src: "/fonts/GeistVF.woff", // Ensure correct path if the fonts are in the public folder
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff", // Ensure correct path if the fonts are in the public folder
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Surge Mines – Professional Lead Generation Services",
  description:
    "",
  authors: [{ name: "Surge Mines Team" }],
  openGraph: {
    title: "Surge Mines – Professional Lead Generation Services",
    description:
      "",
    url: "https://www.surgemines.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surge Mines – Professional Lead Generation Services",
    description:
      "",
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
    <html lang="en">
      <head>
        {/* Trustpilot Widget Script */}
        <Script
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive" // Ensures the script loads after the page is interactive
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
