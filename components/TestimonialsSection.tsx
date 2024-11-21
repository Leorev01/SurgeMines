'use client'
import { useState } from 'react';
import Image from 'next/image';
import TrustPilot from './TrustPilot';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, TechCorp',
    quote: 'This agency completely transformed our website! Our conversions have skyrocketed.',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Director, StartupX',
    quote: 'Incredible design team! They understood our needs and delivered ahead of schedule.',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 3,
    name: 'Michael Lee',
    position: 'Founder, CreativeLab',
    quote: 'We love our new site! The results are amazing, and the process was seamless.',
    image: 'https://via.placeholder.com/80',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { name, position, quote, image } = testimonials[currentIndex];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Image width={80} height={80} src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
            <div>
              <p className="text-xl font-semibold text-gray-800">{name}</p>
              <p className="text-gray-500">{position}</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 italic">&quot;{quote}&quot;</p>
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
            >
              Next
            </button>
          </div>
        </div>
        <TrustPilot />
      </div>
    </div>
  );
}
