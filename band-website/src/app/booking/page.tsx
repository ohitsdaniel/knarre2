import Image from "next/image";
import Link from "next/link";
import { Mail } from 'lucide-react';
import Concerts from "@/components/Concerts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Knarre - Booking',
  description: 'Wollt ihr Knarre buchen? Hier ist alles, was ihr wissen müsst. Kontakt, technische Anforderungen, Rider und Pressefotos der Punk Rock Band aus Berlin.',
  keywords: ['Knarre buchen', 'Band booking', 'Konzert buchen', 'Punk Rock', 'Berlin', 'Live Music'],
  openGraph: {
    title: 'Knarre aus Berlin - Booking Information',
    description: 'Bucht Knarre. Alle Informationen zu Kontakt, technischen Anforderungen und Rider. Skramz-Pop aus Berlin.',
    images: ['/images/band_balloons.webp'],
  },
};

export default function Booking() {
  return (
    <div className="min-h-screen bg-black pb-16">
      <nav className="p-4 border-b-4 border-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-black text-white tracking-tight retro-shadow">
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
            BOOKING
          </h2>
          <p className="text-xl text-gray-100 font-medium">
            Wollt ihr uns buchen? Hier ist alles, was ihr wissen müsst.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="text-white p-6 retro-grey">
            <h3 className="text-2xl font-black mb-4 text-teal-400">PRESSE MATERIAL</h3>
            <h4 className="text-xl font-black text-white mb-4">BAND INFO</h4>
            <p className="font-medium mb-8">Vor sechs Jahren gegründet bleibt Knarre aus Berlin ein Produkt aus Freundschaft und Zufall. Zufällig in derselben Stadt, zufällig am selben Küchentisch, zufällig Lust auf gemeinsamen Krach mit Melodie. &quot;Hundeleben&quot; erschien im Sommer 2024 bei Through Love Records. Irgendwo zwischen Screamo, Punk und irgendwas mit Vorsilbe &quot;post&quot;. Manchmal albern, hoffentlich immer mit stabiler Haltung und nun auch irgendwie ein bisschen Ü30. </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center mb-4">
              {[
                { name: "Daniel", image: "/images/daniel.webp" },
                { name: "Andi", image: "/images/andi.webp" },
                { name: "Matti", image: "/images/matti.webp" },
                { name: "Flo", image: "/images/flo.webp" },
              ].map((member) => (
                <div key={member.name} className="group">
                  <div className="border-4 border-white shadow-brutal overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <p className="text-white font-medium m-4 text-center">{member.name}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 font-bold">
              <a
                href="https://drive.google.com/drive/folders/1DbJ4PaUeW6B99NAEKyy7A4W7uRDSYEnC"
                className="block hover:text-teal-400 transition-colors"
                target="_blank"
              >
                → BAND PHOTOS
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-black p-8 retro-white">
              <h3 className="text-3xl font-black mb-6 text-teal-400">KONTAKT</h3>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-black text-black text-lg">E-Mail</h4>
                  <a href="mailto:knarreausberlin@gmail.com" className="font-medium">knarreausberlin@gmail.com</a>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <h4 className="text-xl font-black text-black mb-4">WIR SPIELEN</h4>
                <ul className="space-y-2 font-medium">
                  <li>→ Clubs</li>
                  <li>→ Festivals</li>
                  <li>→ In Deinem Keller</li>
                  <li>→ Den Geburtstag Deines Hundes</li>
                </ul>
              </div>
            </div>

            <div className="text-black p-6 retro-teal">
              <div className="space-y-2 font-bold">
                <h3 className="text-xl font-black text-white mb-4">INSTRUMENTE & BESETZUNG</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-black mb-2">INSTRUMENTE</h4>
                    <ul className="space-y-1 font-medium">
                      <li>→ 4x Gesang</li>
                      <li>→ Gitarre</li>
                      <li>→ Bass</li>
                      <li>→ Schlagzeug</li>
                      <li>→ Trompete/Saxophon (über Gesangsmikrofon)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-black mb-2">BESETZUNG</h4>
                    <ul className="space-y-1 font-medium">
                      <li>→ Daniel — Hauptgesang (Floormic), Trompete/Saxophon</li>
                      <li>→ Matthias — Gitarre, Gesang</li>
                      <li>→ André — Bass, Gesang</li>
                      <li>→ Florian — Schlagzeug, Gesang</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-black mb-2">CATERING</h4>
                    <div className="space-y-1 font-medium">
                      <p>Vegan (keine Allergien)</p>
                      <p>Idealerweise gesunde Kost, nicht zu viel Ersatzproduktkram.</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="/pdfs/knarre_rider.pdf"
                className="inline-block mt-4 bg-black text-white font-black py-2 px-4 border-2 border-white hover:bg-white hover:text-black transition-all"
                target="_blank"
              >
                RIDER ↓
              </a>
            </div>
          </div>
        </div>

        <Concerts />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-white p-8 retro-grey">
            <h3 className="text-2xl font-black mb-4 text-teal-400">WAS WIR BRAUCHEN</h3>
            <ul className="space-y-2 font-medium">
              <li>→ Sound system</li>
              <li>→ Bisschen Licht</li>
              <li>→ Gute Vibes</li>
              <li>→ Vielleicht ein paar lecker Kaltgetränke und Snacks</li>
              <li>→ Spritgeld und bisschen was für die Bandkasse</li>
            </ul>
          </div>

          <div className="text-black p-8 retro-teal">
            <h3 className="text-2xl font-black mb-4">WAS IHR BEKOMMT</h3>
            <ul className="space-y-2 font-medium">
              <li>→ 30-45 Minuten Set</li>
              <li>→ Eventuell Popcorn</li>
              <li>→ Unerwartete, manchmal auch überraschende Momente</li>
              <li>→ Keine Urnen auf der Bühne</li>
              <li>→ Gespräche über Emo-bilität</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="text-black p-12 retro-white max-w-3xl mx-auto">
            <h3 className="text-4xl font-black mb-6 text-black">ÜBERZEUGT?</h3>
            <p className="text-lg font-medium mb-8 max-w-2xl mx-auto">
              Schickt uns eine Nachricht. Erzählt uns über eure Show, eure Location, euren Vibe.
              Wir melden uns schnellstmöglich, falls Daniel seine Emails liest.
            </p>
            <a
              href="mailto:booking@knarre.band?subject=Show Booking"
              className="inline-block bg-black text-white font-black py-4 px-8 border-2 border-white hover:bg-teal-400 hover:text-black transition-all text-xl items-center"
            >
              <Mail className="w-4 h-4 inline-block mr-2" /> WORAUF WARTEN?
            </a>
          </div>
        </div>
      </main >
    </div >
  );
}