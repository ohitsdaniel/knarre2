import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-6xl mx-auto p-8 pb-16">
        <div className="text-center">
          <Image
            src="/images/logo.avif"
            alt="Knarre Band Logo"
            width={1024}
            height={459}
            className="object-cover w-80 mx-auto py-8"
          />

          <div className="mb-16 text-center p-8 retro-grey">
            <h1 className="text-6xl font-black mb-4 text-teal-400">404</h1>
            <h2 className="text-3xl font-black mb-6 text-white">HIER GIBT ES NICHTS ZU SEHEN</h2>
            <p className="text-lg font-medium text-white mb-8 max-w-2xl mx-auto">
              Diese Seite existiert nicht. Wahrscheinlich habt ihr euch vertippt oder der Link ist kaputt.
            </p>

            <Link
              href="/"
              className="inline-block bg-teal-400 text-black font-black py-4 px-8 text-xl hover:scale-105 transition-transform border-4 border-black"
            >
              ZURÜCK ZUR STARTSEITE
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}