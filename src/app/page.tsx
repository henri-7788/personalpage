import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">

        {/* Header - About me */}
        <section className="mb-8">
          <div className="bg-purple-700 text-white p-4 rounded-lg inline-block">
            <h1 className="text-2xl font-bold">About me</h1>
          </div>
        </section>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - About, Contact */}
          <div className="flex-1">
            <section className="mb-8">
              <p className="mb-4">Hi!</p>
              <p className="mb-4">My name is Henri.</p>
              <p className="mb-4">[Your Title and Location]</p>
              <p>My objective: [Your Objective]</p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {/* Email Icon Placeholder */}
                  <span>[Email Icon]</span>
                  <span>[Your Email]</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Phone Icon Placeholder */}
                  <span>[Phone Icon]</span>
                  <span>[Your Phone Number]</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* LinkedIn Icon Placeholder */}
                  <span>[LinkedIn Icon]</span>
                  <span>[Your LinkedIn Profile]</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Behance Icon Placeholder */}
                  <span>[Behance Icon]</span>
                  <span>[Your Behance Profile]</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right column - Image Placeholder */}
          <div className="w-full lg:w-1/3 flex justify-center items-start">
            {/* Image Placeholder */}
            <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center text-sm text-gray-400">
              [Your Image Here]
            </div>
          </div>
        </div>

        {/* Additional Sections - Education, Skills, Interest, Language */}
        <section className="mt-8 bg-purple-700 bg-opacity-50 p-6 rounded-lg">
          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <p>[Your Education Details]</p>
          </div>

          {/* Skills and Language (Flex container for side-by-side layout on larger screens)*/}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Soft Skills, Technical Skills, Interest */}
            <div className="flex-1">
              {/* Soft Skill */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Soft skill</h3>
                <ul className="list-disc list-inside">
                  <li>[Soft Skill 1]</li>
                  <li>[Soft Skill 2]</li>
                  <li>[Soft Skill 3]</li>
                </ul>
              </div>

              {/* Technical Skill */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Technical skill</h3>
                <div className="flex gap-4">
                  {/* Technical Skill Icon Placeholders */}
                  <div className="w-12 h-12 bg-gray-600 flex items-center justify-center rounded text-xs">[Pr]</div>
                  <div className="w-12 h-12 bg-gray-600 flex items-center justify-center rounded text-xs">[Ae]</div>
                  <div className="w-12 h-12 bg-gray-600 flex items-center justify-center rounded text-xs">[Ai]</div>
                  <div className="w-12 h-12 bg-gray-600 flex items-center justify-center rounded text-xs">[Id]</div>
                  <div className="w-12 h-12 bg-gray-600 flex items-center justify-center rounded text-xs">[Ps]</div>
                </div>
              </div>

              {/* Interest */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Interest</h3>
                <p>[Your Interests]</p>
              </div>
            </div>

            {/* Right side - Skill Set, Language */}
            <div className="flex-1">
              {/* Skill Set */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Skill set</h3>
                {/* Using a simple grid or flex for skill sets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <h3 className="text-lg font-semibold mb-2">Language</h3>
                <p>[Your Languages and Proficiency]</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
