'use client'
import Link from 'next/link';
import Image from 'next/image';
// PortfolioSection.tsx
import React, { useRef } from 'react';

export default function PortfolioSection() {
  // Create a ref for the portfolio section
  const portfolioRef = useRef<HTMLDivElement>(null);

  const portfolio = [
    {
      id: 1,
      title: 'Website for Roofing Company',
      description: 'A modern, responsive website that boosts sales with a user-friendly interface.',
      imageUrl: '/images/roofer.png',
      href: 'https://roofer-website.vercel.app/',
    },
    {
      id: 2,
      title: 'Portfolio Website for Web Developer',
      description: 'A clean, professional portfolio showcasing a web developer’s skills.',
      imageUrl: '/images/portfolio.png',
      href: 'https://www.leonardorevrenna.software/',
    },
    {
      id: 3,
      title: 'Live Video Conference App',
      description: 'A real-time video conferencing app with seamless communication features.',
      imageUrl: '/images/video.png',
      href: 'https://zoom-clone-five-self.vercel.app/',
    },
  ];

  return (
    <div ref={portfolioRef} id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Our Recent Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolio.map((project) => (
            <div key={project.id} className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <Image
                width={400}
                height={250}
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <Link
                  href={project.href}
                  target='_blank'
                  className="inline-block text-indigo-600 hover:text-indigo-800"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
