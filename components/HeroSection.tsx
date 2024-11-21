// HeroSection.tsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-tr from-blue-600 to-purple-700 text-white py-32">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-6">
          Transform Your Ideas into Stunning Websites
        </h1>
        <p className="text-lg max-w-2xl text-center mb-8">
          Web design, branding, and digital solutions for businesses that want to grow.
        </p>
        <div className="flex space-x-4">
          <Link
            href="mailto:leo@slick-site.com"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Schedule a FREE Consultation
          </Link>
          <Link
            href="#portfolio" // Updated href to scroll to the portfolio section
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            View Our Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
