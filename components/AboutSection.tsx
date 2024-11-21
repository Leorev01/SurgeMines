import { GlobeAltIcon, ArrowTrendingUpIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const cards = [
  {
    name: 'Web Design & Development',
    description:
      'Creating visually stunning and user-friendly websites tailored to your brand. We transform ideas into engaging online experiences.',
    icon: GlobeAltIcon,
  },
  {
    name: 'SEO & Digital Marketing',
    description:
      'Boost your online presence with our SEO strategies and digital marketing services. Drive organic traffic and convert visitors into customers.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Branding & Graphic Design',
    description:
      'From logos to brand guidelines, we craft cohesive and memorable visual identities that set you apart from the competition.',
    icon: PencilSquareIcon,
  },
];

export default function AboutSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-600 py-24 sm:py-32">
      <Image
        width={2830}
        height={1500}
        alt="About Us Background"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Who We Are</h2>
          <p className="mt-8 text-lg text-gray-300 sm:text-xl max-w-3xl mx-auto">
            At SlickSite, we bring a fresh approach to web design, crafting visually stunning websites
            that drive results. In just 2 years, we&apos;ve helped numerous businesses transform their online
            presence with custom, high-converting web solutions. Our mission is to combine creativity with strategy,
            delivering a website that truly sets your brand apart.
          </p>
        </div>

        {/* Card Section */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="group relative flex gap-x-4 rounded-xl bg-white/10 p-6 ring-1 ring-inset ring-white/20 hover:ring-white/30 transition-all duration-300 ease-in-out"
            >
              <card.icon aria-hidden="true" className="h-8 w-8 flex-none text-indigo-400 group-hover:text-white transition-all duration-300 ease-in-out" />
              <div className="text-base text-white">
                <h3 className="font-semibold">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
