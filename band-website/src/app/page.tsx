import Link from "next/link";
import Image from "next/image";
import { Mail } from 'lucide-react';
import Concerts from '@/components/Concerts';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">

      <main className="max-w-6xl mx-auto p-8 pb-16">
        <div className="text-left mb-16">
          <Image
            src="/images/logo.avif"
            alt="Knarre Logo"
            width={1024}
            height={459}
            className="object-cover w-80 py-8"
          />
          <p className="text-xl text-gray-100 max-w-2xl font-medium leading-relaxed">
            Vor sechs Jahren gegründet bleibt Knarre aus Berlin ein Produkt aus Freundschaft und Zufall. Zufällig in derselben Stadt, zufällig am selben Küchentisch, zufällig Lust auf gemeinsamen Krach mit Melodie. „Hundeleben“ erschien im Sommer 2024 bei Through Love Records.
          </p>
        </div>


        <Concerts />

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-4 border-white shadow-brutal overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/B81U2EJkOvs?si=XgYU1DjLqkvENPAi"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
            <div className="border-4 border-white shadow-brutal overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/vqaHyRetyVc?si=ZvAoy-5FG50l5ecM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "DANIEL", image: "/images/daniel.webp" },
              { name: "ANDI", image: "/images/andi.webp" },
              { name: "MATTI", image: "/images/matti.webp" },
              { name: "FLO", image: "/images/flo.webp" },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="border-4 border-white shadow-brutal overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-gray-800 border-4 border-black shadow-brutal-white">
          <a
            href="mailto:knarreausberlin@gmail.com?subject=Knarre buchen!"
            className="flex flex-col mb-4"
          >
            <Mail className="w-12 h-12 text-white mb-8" />
            <h3 className="text-3xl font-black mb-4 text-teal-400">WOLLT IHR UNS BUCHEN?</h3>
            <p className="text-lg font-medium text-white mb-6 max-w-2xl">
              Wir spielen fast überall. Keller, Clubs, Festivals - egal.
              Schreibt uns einfach per email an knarreausberlin [at] gmail [dot] com.
            </p>
          </a>
        </div>

        <div className="mt-16 text-center p-8 bg-teal-400 border-4 border-black shadow-brutal-white">
          <h3 className="text-3xl font-black mb-6 text-black">LINKS</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <a
              href="https://www.instagram.com/knarreausberlin/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border-4 border-black p-4 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/insta.avif"
                  alt="Instagram"
                  width={80}
                  height={80}
                  className="w-full h-16 object-contain"
                />
                <p className="font-black text-black mt-2">INSTA</p>
              </div>
            </a>
            <a
              href="https://www.facebook.com/knarreausberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border-4 border-black p-4 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/fb.avif"
                  alt="Facebook"
                  width={80}
                  height={80}
                  className="w-full h-16 object-contain"
                />
                <p className="font-black text-black mt-2">FACEBOOK</p>
              </div>

            </a>
            <a
              href="https://knarreausberlin.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border-4 border-black p-4 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/bandcamp.avif"
                  alt="Bandcamp"
                  width={80}
                  height={80}
                  className="w-full h-16 object-contain"
                />
                <p className="font-black text-black mt-2">BANDCAMP</p>
              </div>
            </a>
            <a
              href="https://open.spotify.com/artist/2knOcWIjZqmLuiskhc9F0L"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border-4 border-black p-4 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/spotify.avif"
                  alt="Spotify"
                  width={80}
                  height={80}
                  className="w-full h-16 object-contain"
                />
                <p className="font-black text-black mt-2">SPOTIFY</p>
              </div>
            </a>

            <a
              href="https://open.spotify.com/artist/2knOcWIjZqmLuiskhc9F0L"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border-4 border-black p-4 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/tl_logo.webp"
                  alt="Through Love Records"
                  width={80}
                  height={80}
                  className="w-full h-16 object-contain"
                />
                <p className="font-black text-black mt-2">THROUGH LOVE</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
