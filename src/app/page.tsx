import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 sm:p-8">
      <div className="container mx-auto">

        {/* Header - About me */}
        <section className="mb-12 lg:mb-16">
          <div className="bg-purple-800 text-white p-4 px-6 rounded-lg shadow-lg inline-block">
            <h1 className="text-2xl sm:text-3xl font-bold">About me</h1>
          </div>
        </section>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column - About, Contact */}
          <div className="flex-1 order-2 lg:order-1">
            <section className="mb-8">
              <p className="mb-3">Hi!</p>
              <p className="mb-3">My name is Henri.</p>
              <p className="mb-3">[Your Title and Location]</p>
              <p>[My objective: Your Objective]</p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-purple-400">Contact</h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  {/* Email Icon Placeholder */}
                  <span className="text-purple-400">[Email Icon]</span>
                  <span>[Your Email]</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Phone Icon Placeholder */}
                  <span className="text-purple-400">[Phone Icon]</span>
                  <span>[Your Phone Number]</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* LinkedIn Icon Placeholder */}
                  <span className="text-purple-400">[LinkedIn Icon]</span>
                  <span>[Your LinkedIn Profile]</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Behance Icon Placeholder */}
                  <span className="text-purple-400">[Behance Icon]</span>
                  <span>[Your Behance Profile]</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right column - Image Placeholder */}
          <div className="w-full lg:w-1/3 flex justify-center items-start order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Image Placeholder */}
            <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center text-sm text-gray-400 shadow-lg">
              [Your Image Here]
            </div>
          </div>
        </div>

        {/* Additional Sections - Education, Skills, Interest, Language */}
        <section className="mt-8 bg-purple-800 bg-opacity-60 p-6 rounded-lg shadow-lg">
          {/* Education */}
          <div className="mb-8 pb-4 border-b border-purple-700">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Education</h2>
            <p>[Your Education Details] - [Years]</p>
          </div>

          {/* Skills and Language (Flex container for side-by-side layout on larger screens)*/}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left side - Soft Skills, Technical Skills, Interest */}
            <div className="flex-1">
              {/* Soft Skill */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Soft skill</h3>
                <ul className="list-disc list-inside pl-4">
                  <li>[Soft Skill 1]</li>
                  <li>[Soft Skill 2]</li>
                  <li>[Soft Skill 3]</li>
                </ul>
              </div>

              {/* Technical Skill */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Technical skill</h3>
                {/* Technical Skill Stats */}
                <div className="flex flex-col gap-4">

                  {/* Example Skill: Photoshop (6/7) */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Photoshop</span>
                    <div className="flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${i < 6 ? 'bg-purple-400' : 'bg-gray-600'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Skill: Premiere Pro (5/7) */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Premiere Pro</span>
                    <div className="flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${i < 5 ? 'bg-purple-400' : 'bg-gray-600'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Skill: After Effects (4/7) */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">After Effects</span>
                    <div className="flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${i < 4 ? 'bg-purple-400' : 'bg-gray-600'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Skill: Illustrator (6/7) */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Illustrator</span>
                    <div className="flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${i < 6 ? 'bg-purple-400' : 'bg-gray-600'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Skill: InDesign (5/7) */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">InDesign</span>
                    <div className="flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${i < 5 ? 'bg-purple-400' : 'bg-gray-600'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Interest */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Interest</h3>
                <p>[Your Interests]</p>
              </div>
            </div>

            {/* Right side - Skill Set, Language */}
            <div className="flex-1">
              {/* Skill Set */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Skill set</h3>
                {/* Using a simple grid or flex for skill sets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                  <div>User research</div>
                  <div>Web Design</div>
                  <div>Wireframing</div>
                  <div>App Design</div>
                  <div>Brainstorming</div>
                  <div>Prototyping</div>
                </div>
              </div>

              {/* Language */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Language</h3>
                <p>[Your Languages and Proficiency]</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
