import Link from 'next/link';
import { useEffect } from 'react';

const TrustPilot = () => {
  useEffect(() => {
    // Dynamically load Trustpilot widget script
    const script = document.createElement('script');
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    script.onload = () => {
      console.log('Trustpilot widget script loaded');
    };

    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="trustpilot-widget mt-8"
      data-locale="en-GB"
      data-template-id="56278e9abfbbba0bdcd568bc" // Template ID
      data-businessunit-id="6734fb019ecd53e30da492bb" // Business unit ID
      data-style-height="52px"
      data-style-width="100%"
    >
      <Link href="https://uk.trustpilot.com/review/slick-site.com" target="_blank" rel="noopener">
        Trustpilot
      </Link>
    </div>
  );
};

export default TrustPilot;
