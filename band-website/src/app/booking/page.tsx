import Link from "next/link";

export default function Booking() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="p-4 border-b-4 border-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-black text-white tracking-tight">
            KNARRE
          </h1>
          <div className="flex gap-6">
            <Link href="/" className="text-white font-bold hover:bg-teal-400 hover:text-black px-3 py-1 transition-all">
              HOME
            </Link>
            <Link href="/booking" className="text-white font-bold hover:bg-teal-400 hover:text-black px-3 py-1 transition-all">
              BOOKING
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-black text-white mb-6 retro-shadow">
            BOOK US
          </h2>
          <p className="text-xl text-gray-100 font-medium">
            Want us at your show? Here&apos;s everything you need to know.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white text-black p-8 border-4 border-white shadow-brutal">
            <h3 className="text-3xl font-black mb-6 text-black">GET IN TOUCH</h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-black text-black text-lg">MANAGEMENT</h4>
                <p className="font-medium">booking@knarre.band</p>
                <p className="font-medium">+49 (0) 89 123 456</p>
              </div>
            </div>

            <h4 className="text-xl font-black text-black mb-4">WE PLAY</h4>
            <ul className="space-y-2 font-medium">
              <li>→ CLUBS & VENUES</li>
              <li>→ FESTIVALS</li>
              <li>→ PRIVATE PARTIES</li>
              <li>→ YOUR BASEMENT</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-teal-400 text-black p-6 border-4 border-white shadow-brutal-white">
              <h3 className="text-2xl font-black mb-4">TECH STUFF</h3>
              <div className="space-y-2 font-bold">
                <p>STAGE: 4m x 3m minimum</p>
                <p>POWER: Standard outlets</p>
                <p>SOUND: We bring our gear</p>
                <p>LIGHTS: Whatever you got</p>
              </div>
              <a 
                href="/pdfs/knarre_rider.pdf" 
                className="inline-block mt-4 bg-black text-white font-black py-2 px-4 border-2 border-white hover:bg-white hover:text-black transition-all"
                target="_blank"
              >
                FULL RIDER ↓
              </a>
            </div>

            <div className="bg-gray-800 text-white p-6 border-4 border-white shadow-brutal-white">
              <h3 className="text-2xl font-black mb-4 text-teal-400">PRESS PHOTOS</h3>
              <p className="font-medium mb-4">
                Need photos and info? We got you covered.
              </p>
              <div className="space-y-2 font-bold">
                <a 
                  href="/images/band_balloons.webp" 
                  className="block hover:text-teal-400 transition-colors"
                  target="_blank"
                >
                  → BAND PHOTOS
                </a>
                <a 
                  href="mailto:booking@knarre.band" 
                  className="block hover:text-teal-400 transition-colors"
                >
                  → REQUEST BIO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 text-white p-8 border-4 border-white shadow-brutal-white">
            <h3 className="text-2xl font-black mb-4 text-teal-400">WHAT WE NEED</h3>
            <ul className="space-y-2 font-medium">
              <li>→ Stage (doesn&apos;t have to be fancy)</li>
              <li>→ Sound system</li>
              <li>→ Some lights</li>
              <li>→ Good vibes</li>
              <li>→ Maybe some beer</li>
            </ul>
          </div>

          <div className="bg-teal-400 text-black p-8 border-4 border-white shadow-brutal-white">
            <h3 className="text-2xl font-black mb-4">WHAT YOU GET</h3>
            <ul className="space-y-2 font-medium">
              <li>→ 45-60 minutes of punk rock</li>
              <li>→ Loud, fast, honest music</li>
              <li>→ Four guys having fun</li>
              <li>→ Energy that fills the room</li>
              <li>→ Stories you&apos;ll tell later</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white text-black p-12 border-4 border-white shadow-brutal max-w-3xl mx-auto">
            <h3 className="text-4xl font-black mb-6 text-black">READY?</h3>
            <p className="text-lg font-medium mb-8 max-w-2xl mx-auto">
              Drop us a line. Tell us about your show, your venue, your vibe. 
              We&apos;ll get back to you quick.
            </p>
            <a 
              href="mailto:booking@knarre.band?subject=Show Booking"
              className="inline-block bg-black text-white font-black py-4 px-8 border-2 border-white hover:bg-teal-400 hover:text-black transition-all text-xl"
            >
              EMAIL US NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}