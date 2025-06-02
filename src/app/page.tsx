'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  // Use the useInView hook for relevant sections if desired, or remove if not needed for this template
  // Keeping the hooks for now, but the usage below will change significantly
  const { ref: topRef, inView: topInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: aboutSkillsRef, inView: aboutSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 p-6 sm:p-8">
      <div className="container mx-auto">

        {/* Header Section */}
        <section ref={topRef} className={`transition-all duration-700 ease-out ${topInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-8`}>
          {/* Left side of Header */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-orange-500 text-lg mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Henri</h1> {/* Using your name here */}
            {/* Download CV Button */}
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Download CV
            </button>
          </div>

          {/* Right side of Header - Profile Image Placeholder */}
          <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-700 flex items-center justify-center text-sm text-gray-400 overflow-hidden border-4 border-orange-600">
            {/* Image Placeholder */}
            [Your Image Here]
          </div>
        </section>

        {/* Separator Line */}
        <hr className="border-t border-gray-700 mb-12" />

        {/* About Me and Skills Section */}
        <section ref={aboutSkillsRef} className={`transition-all duration-700 ease-out ${aboutSkillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex flex-col md:flex-row gap-12 mb-12`}>
          {/* About Me */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-orange-500">ABOUT ME</h2>
            <p>[Your About Me Text - I'm a passionate... ]</p>
          </div>

          {/* Skills */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-orange-500">SKILLS</h2>
            <div className="flex flex-col gap-4">
              {/* Skill: HTML (Example Proficiency) */}
              <div>
                <span className="text-gray-200 block mb-1">HTML</span>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '90%' }}></div> {/* Adjust width for proficiency */}
                </div>
              </div>

              {/* Skill: CSS (Example Proficiency) */}
              <div>
                <span className="text-gray-200 block mb-1">CSS</span>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div> {/* Adjust width for proficiency */}
                </div>
              </div>

              {/* Skill: JavaScript (Example Proficiency) */}
              <div>
                <span className="text-gray-200 block mb-1">JavaScript</span>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '80%' }}></div> {/* Adjust width for proficiency */}
                </div>
              </div>

              {/* Skill: React (Example Proficiency) */}
              <div>
                <span className="text-gray-200 block mb-1">React</span>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '75%' }}></div> {/* Adjust width for proficiency */}
                </div>
              </div>

              {/* Add other skills here */}
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <hr className="border-t border-gray-700 mb-12" />

        {/* Contact Section */}
        <section ref={contactRef} className={`transition-all duration-700 ease-out ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8`}>
          <h2 className="text-xl font-semibold mb-4 text-orange-500">CONTACT</h2>
          {/* Contact details can be added here, similar to previous version but matching new style */}
          <p>[Your Contact Details]</p>
        </section>

        {/* The previous additional sections (Education, Soft Skills, etc.) are removed to match the template */}

      </div>
    </div>
  );
}
