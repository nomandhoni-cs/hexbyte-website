"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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

// Using your updated constants
const ORBIT_RADIUS = 250;
const BADGE_WIDTH = 80;
const BADGE_HEIGHT = 36;

// This calculates how much of the top of the circle is visible. 1.3 = ~65%
const VISIBLE_ORBIT_FACTOR = 1.3;
const VISIBLE_ORBIT_HEIGHT = ORBIT_RADIUS * VISIBLE_ORBIT_FACTOR;
// This calculates the vertical offset to center the visible part
const ORBIT_Y_OFFSET = ORBIT_RADIUS * (VISIBLE_ORBIT_FACTOR - 1);

const HeroBanner = () => {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Background */}
            <Image
                src="https://p2myfh92qq.ufs.sh/f/93hqarYp4cDdu18yTspa57e0NVAWpOlihtm43rqY2IfvKy8R"
                alt="Abstract blue and purple digital network background"
                fill
                priority
                className="object-cover -z-10"
            />
            <div className="absolute inset-0 bg-black/80 -z-10" />

            {/* Main Content */}
            <div className="z-10 text-center px-6 max-w-5xl flex-grow flex flex-col justify-center -mt-32">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
                    Transform ideas into scalable, secure, and intelligent solutions
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl font-semibold text-gray-300/70">
                    We architect and build high-performance applications using a modern, battle-tested technology stack.
                </p>
            </div>

            {/* --- IMPROVEMENT: FERRIS WHEEL (UNCLICKABLE) --- */}
            <div
                className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full flex justify-center overflow-hidden pointer-events-none"
                style={{
                    height: `${VISIBLE_ORBIT_HEIGHT}px`,
                }}
            >
                {/* This is the full circle container, which gets shifted down */}
                <div
                    className="relative"
                    style={{
                        width: `${ORBIT_RADIUS * 2}px`,
                        height: `${ORBIT_RADIUS * 2}px`,
                        transform: `translateY(${ORBIT_Y_OFFSET}px)`,
                    }}
                >
                    {/* Decorative orbit path */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30" />

                    {/* Rotating container */}
                    <div className="relative w-full h-full animate-spin-slow">
                        {technologies.map((tech, i) => {
                            const angle = (2 * Math.PI * i) / technologies.length;
                            const x = ORBIT_RADIUS + ORBIT_RADIUS * Math.cos(angle) - (BADGE_WIDTH / 2);
                            const y = ORBIT_RADIUS + ORBIT_RADIUS * Math.sin(angle) - (BADGE_HEIGHT / 2);

                            return (
                                <div key={tech.name} className="absolute" style={{ left: `${x}px`, top: `${y}px`, width: `${BADGE_WIDTH}px`, height: `${BADGE_HEIGHT}px` }}>
                                    <div className="w-full h-full flex items-center justify-center animate-counter-spin-slow">
                                        <div className="flex items-center gap-2 bg-white/10 border border-white/20 hover:border-purple-500 rounded-full px-3 py-1 text-xs text-white font-medium shadow-md backdrop-blur-md transition-all duration-200 whitespace-nowrap hover:bg-white/20">
                                            <span className="text-base">{tech.icon}</span>
                                            <span>{tech.name}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                className="absolute left-1/2 -bottom-14 -translate-x-1/2 z-20"
            >
                <Link
                    href="#contact"
                    className="flex items-center justify-center w-28 h-28 -translate-y-1/2 sm:w-32 sm:h-32 bg-purple-600 text-white font-semibold rounded-full shadow-lg shadow-purple-900/50 transition-all duration-300 hover:scale-110 hover:bg-purple-500 focus-visible:ring-4 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black text-center text-base"
                >
                    Start Project
                </Link>
            </div>
        </section>
    );
};

export default HeroBanner;