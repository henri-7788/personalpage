'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  // Use the useInView hook for relevant sections and elements
  const { ref: topRef, inView: topInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cvButtonRef, inView: cvButtonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: separator1Ref, inView: separator1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: aboutSkillsRef, inView: aboutSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: separator2Ref, inView: separator2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: separator3Ref, inView: separator3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

    const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

    const { ref: separator4Ref, inView: separator4InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Ref for the entire framed content area
  const { ref: framedContentRef, inView: framedContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // Trigger when 5% of the element is visible
  });

  // Create refs for each skill item dynamically or individually
  const skillRefs = Array.from({ length: 4 }).map(() => useInView({ triggerOnce: true, threshold: 0.1 }));

  // Create refs for each project item
  const projectRefs = Array.from({ length: 2 }).map(() => useInView({ triggerOnce: true, threshold: 0.1 })); // Example: 2 projects

  // Create refs for each timeline item
  const timelineItemRefs = Array.from({ length: 3 }).map(() => useInView({ triggerOnce: true, threshold: 0.1 })); // Example: 3 timeline items


  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 p-4 sm:p-8 flex justify-center">
      {/* Outer container for the framed effect */}
      <div ref={framedContentRef} className={`transition-all duration-1000 ease-out ${framedContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full max-w-screen-lg bg-gray-800 bg-opacity-50 rounded-xl shadow-lg p-6 sm:p-8`}>
        <div className="container mx-auto">

          {/* Header Section */}
          <section ref={topRef} className={`transition-all duration-700 ease-out ${topInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-8`}>
            {/* Left side of Header */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-orange-500 text-lg mb-2">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Henri</h1> {/* Using your name here */}
              {/* Download CV Button */}
              <button ref={cvButtonRef} className={`transition-all duration-700 ease-out ${cvButtonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300`}>
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
          <hr ref={separator1Ref} className={`transition-all duration-700 ease-out ${separator1InView ? 'opacity-100' : 'opacity-0'} border-t border-gray-700 mb-12`} />

          {/* About Me and Skills Section */}
          <section ref={aboutSkillsRef} className={`transition-all duration-700 ease-out ${aboutSkillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex flex-col md:flex-row gap-12 mb-12`}>
            {/* About Me */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-orange-500">ÜBER MICH</h2>
              <p>Ich bin technikaffin, kreativ und immer neugierig auf Neues. Mit einem Fachabitur in Technischer Informatik und viel praktischer Erfahrung im Umgang mit digitalen Medien gestalte ich Inhalte am liebsten dort, wo Technik und Kreativität aufeinandertreffen. Ob IT, Künstliche Inteligenz, Design oder wirtschaftliche Themen – mein breites Interessenfeld spiegelt sich in allem wider, was ich mache.</p>
            </div>

            {/* Skills */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-orange-500">SKILLS</h2>
              <div className="flex flex-col gap-4">
                {/* Skill: HTML (Example Proficiency) */}
                <div ref={skillRefs[0].ref} className={`transition-all duration-700 ease-out ${skillRefs[0].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="text-gray-200 block mb-1">Premiere Pro</span>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: '80%', background: 'linear-gradient(to right, #f97316, #f59e0b)' }}></div> {/* Adjust width and gradient colors for proficiency */}
                  </div>
                </div>

                {/* Skill: CSS (Example Proficiency) */}
                <div ref={skillRefs[1].ref} className={`transition-all duration-700 ease-out ${skillRefs[1].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="text-gray-200 block mb-1">Photoshop</span>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: '75%', background: 'linear-gradient(to right, #f97316, #f59e0b)' }}></div> {/* Adjust width and gradient colors for proficiency */}
                  </div>
                </div>

                {/* Skill: JavaScript (Example Proficiency) */}
                <div ref={skillRefs[2].ref} className={`transition-all duration-700 ease-out ${skillRefs[2].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="text-gray-200 block mb-1">JavaScript</span>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: '80%', background: 'linear-gradient(to right, #f97316, #f59e0b)' }}></div> {/* Adjust width and gradient colors for proficiency */}
                  </div>
                </div>

                {/* Skill: React (Example Proficiency) */}
                <div ref={skillRefs[3].ref} className={`transition-all duration-700 ease-out ${skillRefs[3].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="text-gray-200 block mb-1">React</span>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: '75%', background: 'linear-gradient(to right, #f97316, #f59e0b)' }}></div> {/* Adjust width and gradient colors for proficiency */}
                  </div>
                </div>

                {/* Add other skills here */}
              </div>
            </div>
          </section>

          {/* Separator Line */}
          <hr ref={separator2Ref} className={`transition-all duration-700 ease-out ${separator2InView ? 'opacity-100' : 'opacity-0'} border-t border-gray-700 mb-12`} />

          {/* Projekte Section */}
          <section ref={projectsRef} className={`transition-all duration-700 ease-out ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-12`}>
            <h2 className="text-xl font-semibold mb-6 text-orange-500 text-center">PROJEKTE</h2>

            {/* Projects Grid/List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Example Project 1 */}
              <div ref={projectRefs[0].ref} className={`transition-all duration-700 ease-out ${projectRefs[0].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-gray-700 bg-opacity-50 rounded-lg shadow-lg overflow-hidden`}>
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gray-600 flex items-center justify-center text-gray-400 text-sm">
                  [Project 1 Image]
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">[Project 1 Title]</h3>
                  <p className="text-gray-300 text-sm">[Short description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.]</p>
                </div>
              </div>

              {/* Example Project 2 */}
               <div ref={projectRefs[1].ref} className={`transition-all duration-700 ease-out ${projectRefs[1].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-gray-700 bg-opacity-50 rounded-lg shadow-lg overflow-hidden`}>
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gray-600 flex items-center justify-center text-gray-400 text-sm">
                  [Project 2 Image]
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">[Project 2 Title]</h3>
                  <p className="text-gray-300 text-sm">[Short description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.]</p>
                </div>
              </div>

              {/* Add more projects here */}

            </div>
          </section>

          {/* Separator Line before Contact */}
          <hr ref={separator3Ref} className={`transition-all duration-700 ease-out ${separator3InView ? 'opacity-100' : 'opacity-0'} border-t border-gray-700 mb-12`} />

          {/* Lebenslauf Section (Timeline) */}
          <section ref={timelineRef} className={`transition-all duration-700 ease-out ${timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-12`}>
             <h2 className="text-xl font-semibold mb-6 text-orange-500 text-center">LEBENSLAUF</h2>

            {/* Timeline Container */}
            <div className="relative border-l border-gray-700 ml-4 md:ml-12">

              {/* Timeline Item Example 1 */}
              <div ref={timelineItemRefs[0].ref} className={`transition-all duration-700 ease-out ${timelineItemRefs[0].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8 flex items-start`}>
                {/* Timeline Point */}
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                {/* Timeline Content */}
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">[Position/Degree]</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">[Start Date] - [End Date]</time>
                  <p className="mb-2 text-base font-normal text-gray-300">[Company/Institution]</p>
                  <p className="text-sm font-normal text-gray-400">[Brief Description of Responsibilities/Studies]</p>
                </div>
              </div>

              {/* Timeline Item Example 2 */}
               <div ref={timelineItemRefs[1].ref} className={`transition-all duration-700 ease-out ${timelineItemRefs[1].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8 flex items-start`}>
                {/* Timeline Point */}
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                {/* Timeline Content */}
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">[Position/Degree]</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">[Start Date] - [End Date]</time>
                  <p className="mb-2 text-base font-normal text-gray-300">[Company/Institution]</p>
                  <p className="text-sm font-normal text-gray-400">[Brief Description of Responsibilities/Studies]</p>
                </div>
              </div>

              {/* Timeline Item Example 3 */}
               <div ref={timelineItemRefs[2].ref} className={`transition-all duration-700 ease-out ${timelineItemRefs[2].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8 flex items-start`}>
                {/* Timeline Point */}
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                {/* Timeline Content */}
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">[Position/Degree]</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">[Start Date] - [End Date]</time>
                  <p className="mb-2 text-base font-normal text-gray-300">[Company/Institution]</p>
                  <p className="text-sm font-normal text-gray-400">[Brief Description of Responsibilities/Studies]</p>
                </div>
              </div>

              {/* Add more timeline items here */}

            </div>
          </section>

          {/* Separator Line before Contact */}
          <hr ref={separator4Ref} className={`transition-all duration-700 ease-out ${separator4InView ? 'opacity-100' : 'opacity-0'} border-t border-gray-700 mb-12`} />


          {/* Contact Section */}
          <section ref={contactRef} className={`transition-all duration-700 ease-out ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8`}>
            <h2 className="text-xl font-semibold mb-6 text-orange-500">KONTAKT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Adresse</h3>
                  <p className="text-gray-300">Musterstraße 123</p>
                  <p className="text-gray-300">12345 Musterstadt</p>
                  <p className="text-gray-300">Deutschland</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Telefon</h3>
                  <p className="text-gray-300">+49 123 456789</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">E-Mail</h3>
                  <p className="text-gray-300">kontakt@beispiel.de</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/in/beispiel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://github.com/henri-7788" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                      GitHub
                    </a>
                    <a href="https://twitter.com/beispiel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The previous additional sections (Education, Soft Skills, etc.) are removed to match the template */}

        </div>
      </div>
    </div>
  );
}
