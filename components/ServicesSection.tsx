export default function ServicesSection() {
  const services = [
    {
      title: 'Basic Website Design & Development',
      description: 'A simple website with a few pages (Home, About, Contact). Ideal for personal blogs, portfolios, and small businesses.',
      price: '£400 - £1,200',  // Reduced price range in GBP
      icon: '🌐',
      details: [
        'Up to 3 pages',
        'Responsive Design',
        'Basic SEO Setup',
        'Pre-made Template Design',
      ],
    },
    {
      title: 'Custom Landing Page',
      description: 'A single-page website designed to showcase a product or service with high-conversion forms and CTAs.',
      price: '£250 - £1,000',  // Price range for landing pages in GBP
      icon: '🎯',
      details: [
        'Single Page Design',
        'Lead Generation Forms',
        'Custom Call-to-Action',
        'Mobile Responsive',
        'Basic SEO Optimization',
      ],
    },
    {
      title: 'Basic eCommerce Website',
      description: 'A simple online store with essential features like product pages and payment integration, perfect for startups.',
      price: '£1,600 - £4,000',  // Affordable eCommerce option in GBP
      icon: '🛒',
      details: [
        'Up to 10 Products',
        'Shopping Cart & Checkout System',
        'Payment Gateway Integration (Stripe/PayPal)',
        'Basic Product Management',
        'Mobile-Responsive Design',
      ],
    },
    {
      title: 'Portfolio or Personal Website',
      description: 'A personal website or portfolio to showcase your work, perfect for freelancers, creatives, and individuals.',
      price: '£300 - £1,200',  // Price range for portfolio websites in GBP
      icon: '🎨',
      details: [
        'Up to 5 pages',
        'Portfolio Gallery',
        'Contact Form Integration',
        'Social Media Links',
        'Responsive Design',
      ],
    },
    {
      title: 'Advanced Website with CMS',
      description: 'A content management system (CMS)-based website that allows you to manage content easily and keep it up to date.',
      price: '£2,000 - £5,000',  // More affordable than fully custom websites in GBP
      icon: '📈',
      details: [
        'Up to 15 pages',
        'CMS Integration (WordPress, Webflow, or similar)',
        'Customizable Design',
        'Blog or News Section',
        'SEO Optimization',
      ],
    },
    {
      title: 'Small Business Website Package',
      description: 'Ideal for small businesses looking for a professional, affordable web presence to represent their brand online.',
      price: '£600 - £1,600',  // Affordable small business option in GBP
      icon: '🏢',
      details: [
        'Up to 5 pages',
        'Basic SEO',
        'Mobile-Responsive',
        'Google Analytics Setup',
        'Basic Contact Form & Social Links',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Our Website Development Pricing</h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose the right web development package based on your business needs. We offer affordable options for every budget.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <p className="text-lg font-semibold text-indigo-600 mb-4">{service.price}</p>  {/* Price displayed in GBP */}
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-indigo-600">✔</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block text-indigo-600 font-semibold hover:text-indigo-800"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
