// src/components/TrustedBy.tsx
"use client";

import Link from 'next/link';

// You can easily update this array with your client's logos and links.
const brands = [
  {
    name: 'Vercel',
    logoSrc: '/logos/vercel.svg',
    url: 'https://vercel.com',
  },
  {
    name: 'Notion',
    logoSrc: '/logos/notion.svg',
    url: 'https://notion.so',
  },
  {
    name: 'Loom',
    logoSrc: '/logos/loom.svg',
    url: 'https://loom.com',
  },
  {
    name: 'Webflow',
    logoSrc: '/logos/webflow.svg',
    url: 'https://webflow.com',
  },
  {
    name: 'Loom1',
    logoSrc: '/logos/loom.svg',
    url: 'https://loom.com',
  },
  {
    name: 'Webflow1',
    logoSrc: '/logos/webflow.svg',
    url: 'https://webflow.com',
  },
];

const TrustedBy = () => {
  return (
    <section className="bg-black py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-200">
          Powering the next generation of industry leaders
        </h2>
        
        {/* Logo Cloud Grid */}
        <div className="mt-12 grid grid-cols-2 place-items-center gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              // The group class allows us to control the child's style on hover
              className="group h-24 w-32" // Fixed-size container for consistency
              aria-label={`Link to ${brand.name}`} // Improved accessibility
            >
              <div
                className="
                  h-full w-full 
                  bg-purple-500 // This is the color your logo will be
                  
                  // --- The Hover Effect ---
                  opacity-70 
                  transition-all duration-300 ease-in-out
                  group-hover:opacity-100
                  group-hover:[--glow-color:theme(colors.purple.500)]
                  group-hover:drop-shadow-[0_0_10px_var(--glow-color)]

                  // --- The Masking Technique ---
                  // These properties use the logo's shape as a stencil
                  // Note: A style attribute is needed because the URL is dynamic
                "
                style={{
                  maskImage: `url(${brand.logoSrc})`,
                  maskSize: 'contain',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat',
                  // Webkit prefix for Safari/Chrome compatibility
                  WebkitMaskImage: `url(${brand.logoSrc})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;