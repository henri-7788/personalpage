'use client';

import { useInView } from 'react-intersection-observer';
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
  const skillRef0 = useInView({ triggerOnce: true, threshold: 0.1 });
  const skillRef1 = useInView({ triggerOnce: true, threshold: 0.1 });
  const skillRef2 = useInView({ triggerOnce: true, threshold: 0.1 });
  const skillRef3 = useInView({ triggerOnce: true, threshold: 0.1 });
  const skillRef4 = useInView({ triggerOnce: true, threshold: 0.1 });
  const skillRef5 = useInView({ triggerOnce: true, threshold: 0.1 });

  // Create refs for each project item
  const projectRef0 = useInView({ triggerOnce: true, threshold: 0.1 });
  const projectRef1 = useInView({ triggerOnce: true, threshold: 0.1 });

  // Skill-Array mit expliziten Refs
  const skills = [
    { name: 'Thema: Informations Technologie', width: 95, ref: skillRef0.ref, inView: skillRef0.inView },
    { name: 'Thema: Künstliche Intelligenz', width: 90, ref: skillRef1.ref, inView: skillRef1.inView },
    { name: 'Premiere Pro', width: 80, ref: skillRef2.ref, inView: skillRef2.inView },
    { name: 'Photoshop', width: 75, ref: skillRef3.ref, inView: skillRef3.inView },
    { name: 'FL Studio', width: 65, ref: skillRef4.ref, inView: skillRef4.inView },
    { name: 'Python', width: 45, ref: skillRef5.ref, inView: skillRef5.inView },
  ];
  // Project-Array mit expliziten Refs
  const projectRefsArr = [projectRef0, projectRef1];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 p-2 sm:p-4 flex justify-center overflow-x-hidden">
      {/* Outer container for the framed effect */}
      <div ref={framedContentRef} className={`transition-all duration-1000 ease-out ${framedContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full max-w-screen-lg bg-gray-800 bg-opacity-50 rounded-xl shadow-lg p-6 sm:p-8`}>
        <div className="container mx-auto px-0 sm:px-4">

          {/* Header Section */}
          <section ref={topRef} className={`transition-all duration-700 ease-out ${topInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-8`}>
            {/* Left side of Header */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fade-in">
              {/* Icon Placeholder */}
              <div className="icon-placeholder mb-2">{/* Icon here */}</div>
              <p className="text-orange-500 text-lg mb-2 font-semibold tracking-wide">Hello, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight animate-slide-in">Henri</h1>
              {/* Download CV Button */}
              <button ref={cvButtonRef} className={`transition-all duration-700 ease-out ${cvButtonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 animate-fade-in`}>Download CV</button>
            </div>

            {/* Right side of Header - Profile Image Placeholder */}
            <div className="flex-shrink-0 w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-sm text-gray-400 overflow-hidden border-4 border-orange-600 shadow-lg animate-fade-in">
              {/* Icon Placeholder */}
              <div className="icon-placeholder">{/* Icon here */}</div>
              [Your Image Here]
            </div>
          </section>

          {/* Separator Line */}
          <hr ref={separator1Ref} className={`transition-all duration-700 ease-out ${separator1InView ? 'opacity-100' : 'opacity-0'} border-t border-gray-700 mb-12`} />

          {/* About Me and Skills Section */}
          <section ref={aboutSkillsRef} className={`transition-all duration-700 ease-out ${aboutSkillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex flex-col md:flex-row gap-12 mb-12 animate-fade-in`}>
            {/* About Me */}
            <div className="flex-1 bg-gray-900 bg-opacity-70 rounded-xl shadow-lg p-8 animate-slide-in">
              <div className="icon-placeholder mb-2">{/* Icon here */}</div>
              <h2 className="text-2xl font-bold mb-4 text-orange-500 tracking-wide">ÜBER MICH</h2>
              <p className="text-lg leading-relaxed text-gray-200">Ich bin technikaffin, kreativ und immer neugierig auf Neues. Mit einem Fachabitur in Technischer Informatik und viel praktischer Erfahrung im Umgang mit digitalen Medien gestalte ich Inhalte am liebsten dort, wo Technik und Kreativität aufeinandertreffen. Ob IT, Künstliche Inteligenz, Design oder wirtschaftliche Themen – mein breites Interessenfeld spiegelt sich in allem wider, was ich mache.</p>
            </div>

            {/* Skills */}
            <div className="flex-1 bg-gray-900 bg-opacity-70 rounded-xl shadow-lg p-4 sm:p-8 animate-slide-in w-full">
              <div className="icon-placeholder mb-2">{/* Icon here */}</div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-500 tracking-wide">SKILLS</h2>
              <div className="flex flex-col gap-6">
                {/* Skill Items */}
                {skills.map((skill) => (
                  <div key={skill.name} ref={skill.ref} className={`transition-all duration-700 ease-out ${skill.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-fade-in`}>
                    <div className="icon-placeholder inline-block align-middle mr-2">{/* Icon here */}</div>
                    <span className="text-gray-200 font-medium block mb-1 text-lg">{skill.name}</span>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-2 rounded-full transition-all duration-700" style={{ width: `${skill.width}%`, background: 'linear-gradient(to right, #f97316, #f59e0b)' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Separator Line */}
          <hr ref={separator2Ref} className={`transition-all duration-700 ease-out ${separator2InView ? 'opacity-100' : 'opacity-0'} border-t border-gray-700 mb-12`} />

          {/* Projekte Section */}
          <section ref={projectsRef} className={`transition-all duration-700 ease-out ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-12 animate-fade-in`}>
            <h2 className="text-2xl font-bold mb-8 text-orange-500 text-center tracking-wide animate-slide-in">PROJEKTE</h2>

            {/* Projects Grid/List */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

              {/* Example Project 1 */}
              <div ref={projectRefsArr[0].ref} className={`transition-all duration-700 ease-out ${projectRefsArr[0].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-gray-900 bg-opacity-80 rounded-xl shadow-xl overflow-hidden animate-fade-in hover:scale-105 hover:shadow-2xl group`}>
                <div className="w-full h-48 relative">
                  <Image 
                    src="/static/project1.webp" 
                    alt="Screenshot von Project 1" 
                    fill 
                    className="object-cover rounded-t-xl" 
                    priority
                  />
                  <div className="icon-placeholder absolute top-2 left-2">{/* Icon here */}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Vollautomatischer Shortform Content</h3>
                  <p className="text-gray-300 text-base">Mithilfe von KI, Python und einem ausgemusterten MiniPc wird alle 3-6 Stunden ein perfekt geschnittenes Video erstellt und ohne jegliche Eingriffe auf TikTok und Instagram hochgeladen.</p>
                </div>
              </div>

              {/* Example Project 2 */}
               <div ref={projectRefsArr[1].ref} className={`transition-all duration-700 ease-out ${projectRefsArr[1].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-gray-900 bg-opacity-80 rounded-xl shadow-xl overflow-hidden animate-fade-in hover:scale-105 hover:shadow-2xl group`}>
                <div className="w-full h-48 relative">
                  <Image 
                    src="/static/project2.webp" 
                    alt="Screenshot von Project 2" 
                    fill 
                    className="object-cover rounded-t-xl" 
                    priority
                  />
                  <div className="icon-placeholder absolute top-2 left-2">{/* Icon here */}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Persönliches Krypto Übersichtsterminal</h3>
                  <p className="text-gray-300 text-base">Candl ist eine Webseite, die mithilfe von APIs allerlei Daten über Kryptowährungen sammelt und in einem Übersichtsterminal anzeigt. Dieses Projekt ist noch in Arbeit.</p>
                </div>
              </div>

              {/* Add more projects here */}

            </div>
          </section>

          {/* Separator Line before Contact */}
          <hr ref={separator3Ref} className={`transition-all duration-700 ease-out ${separator3InView ? 'opacity-100' : 'opacity-0'} border-t border-gray-700 mb-12`} />

          {/* Lebenslauf Section (Timeline) */}
          <section ref={timelineRef} className={`transition-all duration-700 ease-out ${timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-12 animate-fade-in`}>
            <h2 className="text-3xl font-extrabold mb-10 text-orange-500 text-center tracking-wide animate-slide-in">LEBENSLAUF</h2>
            <div className="flex flex-col gap-12">
              {/* Berufliche Erfahrung */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-orange-500 rounded mr-3 animate-pulse"></div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide">Berufliche Erfahrung</h3>
                </div>
                <div className="relative border-l-4 border-orange-500 pl-8 flex flex-col gap-8">
                  {/* Timeline Cards Beruf */}
                  {[
                    {
                      title: 'Selbstständig',
                      date: 'Seit 2024',
                      details: [
                        'Produktion von Shortform Content',
                        'Youtube Kanal mit 30.000 Abonnenten',
                        '200.000 Aufrufe pro Monat auf TikTok',
                      ],
                    },
                    {
                      title: 'Bundesfreiwilligendienst, Frankfurt',
                      date: '2023/2024',
                      details: ['BFD im Historischen Museum Frankfurt als Haustechniker', 'Erwerb der Fachhochschulreife '],
                    },
                    {
                      title: 'Deutsche Bank Park, Frankfurt',
                      date: '2022 - 2023',
                      details: ['Minijob in der Logistik'],
                    },
                    {
                      title: 'Dental Delight, Bad Homburg',
                      date: '2021 – 2022',
                      details: ['Minijob als Aushilfe im Bereich E-Commerce'],
                    },
                  ].map((item, idx, arr) => (
                    <div key={item.title} className="relative flex items-start group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-2.1rem] top-8 z-10 flex flex-col items-center">
                        <div className="w-5 h-5 bg-orange-500 border-4 border-gray-900 rounded-full animate-pulse"></div>
                        {/* Vertical line below dot, except for last item */}
                        {idx < arr.length - 1 && (
                          <div className="w-1 h-full bg-orange-500"></div>
                        )}
                      </div>
                      {/* Horizontal connector */}
                      <div className="absolute left-[-1.1rem] top-10 w-8 h-1 bg-orange-500"></div>
                      {/* Card */}
                      <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-6 max-w-xl mx-auto ml-8 animate-fade-in w-full sm:max-w-xl sm:ml-8 ml-2">
                        <div className="icon-placeholder mb-2">{/* Icon here */}</div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <span className="text-sm text-gray-400 font-medium mb-2 block">{item.date}</span>
                        <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1">
                          {item.details.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bildungsweg */}
              <div>
                <div className="flex items-center mb-6 mt-10">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3 animate-pulse"></div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide">Bildungsweg</h3>
                </div>
                <div className="relative border-l-4 border-blue-500 pl-8 flex flex-col gap-8">
                  {/* Timeline Cards Bildung */}
                  {[
                    {
                      title: 'Studium Digital Media Systems, Technische Hochschule Mittelhessen, Gießen',
                      date: 'Seit Oktober, 2024',
                      details: [],
                    },
                    {
                      title: 'Hochtaunusschule (Gymnasialzweig), Oberursel',
                      date: '2021 – 2023',
                      details: ['Schulischer Teil der Fachhochschulreife (Technische Informatik)'],
                    },
                    {
                      title: 'Gesamtschule am Gluckenstein, Bad Homburg',
                      date: '2020 – 2021',
                      details: ['Qualifizierter Realschulabschluss'],
                    },
                    {
                      title: 'Kaiserin-Friedrich-Gymnasium, Bad Homburg',
                      date: '2014 – 2020',
                      details: [],
                    },
                    {
                      title: 'Hölderlin-Schule, Bad Homburg',
                      date: '2009 – 2014',
                      details: ['Grundschule mit Eingangsstufe'],
                    },
                  ].map((item, idx, arr) => (
                    <div key={item.title} className="relative flex items-start group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-2.1rem] top-8 z-10 flex flex-col items-center">
                        <div className="w-5 h-5 bg-blue-500 border-4 border-gray-900 rounded-full animate-pulse"></div>
                        {/* Vertical line below dot, except for last item */}
                        {idx < arr.length - 1 && (
                          <div className="w-1 h-full bg-blue-500"></div>
                        )}
                      </div>
                      {/* Horizontal connector */}
                      <div className="absolute left-[-1.1rem] top-10 w-8 h-1 bg-blue-500"></div>
                      {/* Card */}
                      <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-6 max-w-xl mx-auto ml-8 animate-fade-in w-full sm:max-w-xl sm:ml-8 ml-2">
                        <div className="icon-placeholder mb-2">{/* Icon here */}</div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <span className="text-sm text-gray-400 font-medium mb-2 block">{item.date}</span>
                        {item.details.length > 0 && (
                          <p className="text-gray-300 text-sm">{item.details[0]}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Separator Line before Contact */}
          <hr ref={separator4Ref} className={`transition-all duration-700 ease-out ${separator4InView ? 'opacity-100' : 'opacity-0'} border-t border-gray-700 mb-12`} />


          {/* Contact Section */}
          <section ref={contactRef} className={`transition-all duration-700 ease-out ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8 animate-fade-in`}>
            <h2 className="text-2xl font-bold mb-6 text-orange-500 animate-slide-in">KONTAKT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6 bg-gray-900 bg-opacity-70 rounded-xl shadow-lg p-8 animate-fade-in">
                <div className="icon-placeholder mb-2">{/* Icon here */}</div>
                <h3 className="text-lg font-semibold text-white mb-2">Adresse</h3>
                <p className="text-gray-300">Oberer Mittelweg 3</p>
                <p className="text-gray-300">61352 Bad Homburg</p>
                <p className="text-gray-300">Deutschland</p>
                <h3 className="text-lg font-semibold text-white mb-2 mt-6">Telefon</h3>
                <p className="text-gray-300">+49 172 9453652</p>
              </div>
              <div className="space-y-6 bg-gray-900 bg-opacity-70 rounded-xl shadow-lg p-8 animate-fade-in">
                <div className="icon-placeholder mb-2">{/* Icon here */}</div>
                <h3 className="text-lg font-semibold text-white mb-2">E-Mail</h3>
                <p className="text-gray-300">lattenmayer.henri@gmail.com</p>
                <h3 className="text-lg font-semibold text-white mb-2 mt-6">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/henri-7788" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors hover:scale-110 animate-fade-in">GitHub</a>
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
