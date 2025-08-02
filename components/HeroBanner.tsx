// src/components/HeroBanner.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Data can be stored in a separate file for larger projects
const technologies = [
    { name: 'Go', icon: '🔵' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'NextJS', icon: '▲' },
    { name: 'React Native', icon: '📱' },
    { name: 'Expo + EAS', icon: '🚀' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'SQLite', icon: '💾' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redis', icon: '⚡' },
    { name: 'Valkey', icon: '🔑' },
    { name: 'Docker', icon: '🐳' }
];

// Duplicate for the seamless loop effect
const allTechnologies = [...technologies, ...technologies];

const HeroBanner = () => {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
            <Image
                src="https://p2myfh92qq.ufs.sh/f/93hqarYp4cDdu18yTspa57e0NVAWpOlihtm43rqY2IfvKy8R"
                alt="Abstract blue and purple digital network background"
                fill
                priority // Crucial for LCP performance
                className="object-cover -z-10"
            />
            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/70 -z-10" />

            {/* Main Content */}
            <div className="z-10 text-center px-6 max-w-5xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-sans text-white tracking-tighter leading-tight">
                    Transform ideas into scalable, secure, and intelligent solutions
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                    We architect and build high-performance applications using a modern, battle-tested technology stack.
                </p>
                <Link
                    href="#contact" // Link to a section or page
                    className="mt-10  inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                    Start Your Project
                </Link>
            </div>

            {/* Infinite Scrolling Logo Marquee */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 flex items-center">
                <div
                    className="w-full inline-flex flex-nowrap overflow-hidden 
                     [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]"
                >
                    <ul className="flex items-center justify-center animate-infinite-scroll" aria-hidden="true">
                        {allTechnologies.map((tech, index) => (
                            <li key={`tech-${index}`} className="flex items-center space-x-3 mx-6 group">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800/80 group-hover:bg-gray-700/80 transition-colors">
                                    <span className="text-lg font-bold text-gray-300">{tech.icon}</span>
                                </div>
                                <span className="text-md font-medium text-gray-300 whitespace-nowrap">{tech.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;