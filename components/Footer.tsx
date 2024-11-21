import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center px-6">
          <p className="text-lg font-semibold mb-4">Slick Site</p>
          <p className="text-sm text-gray-400 mb-8">Transforming ideas into impactful digital experiences.</p>
          <div className="space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">&copy; 2024 SlickSite. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  