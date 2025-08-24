import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://knar.re'),
  title: {
    default: 'Knarre - Punk Rock Band aus Berlin',
    template: '%s | Knarre'
  },
  description: 'Knarre ist eine Punk Rock Band aus Berlin. Vor sechs Jahren gegründet bleibt Knarre ein Produkt aus Freundschaft und Zufall. "Hundeleben" erschien 2024 bei Through Love Records.',
  keywords: ['Knarre', 'Punk Rock', 'Berlin', 'Band', 'Screamo', 'Post-Punk', 'Through Love Records', 'Hundeleben', 'Konzerte', 'Live Music'],
  authors: [{ name: 'Knarre' }],
  creator: 'Knarre',
  publisher: 'Knarre',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://knar.re',
    siteName: 'Knarre',
    title: 'Knarre - Punk Rock Band aus Berlin',
    description: 'Knarre ist eine Punk Rock Band aus Berlin. Vor sechs Jahren gegründet bleibt Knarre ein Produkt aus Freundschaft und Zufall.',
    images: [
      {
        url: '/images/band_balloons.webp',
        width: 1200,
        height: 630,
        alt: 'Knarre Band Photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knarre - Punk Rock Band aus Berlin',
    description: 'Knarre ist eine Punk Rock Band aus Berlin. Vor sechs Jahren gegründet bleibt Knarre ein Produkt aus Freundschaft und Zufall.',
    images: ['/images/band_balloons.webp'],
  },
  alternates: {
    canonical: 'https://knar.re',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Knarre",
              "genre": ["Punk Rock", "Screamo", "Post-Punk", "Skramz-Pop"],
              "foundingDate": "2018",
              "foundingLocation": {
                "@type": "Place",
                "name": "Berlin, Germany"
              },
              "url": "https://knar.re",
              "sameAs": [
                "https://www.instagram.com/knarreausberlin/",
                "https://www.facebook.com/knarreausberlin",
                "https://knarreausberlin.bandcamp.com/",
                "https://open.spotify.com/artist/2knOcWIjZqmLuiskhc9F0L"
              ],
              "member": [
                { "@type": "Person", "name": "Daniel Peter", "roleName": "Gesang, Trompete, Saxophon" },
                { "@type": "Person", "name": "Matthias Olk", "roleName": "Gitarre, Gesang" },
                { "@type": "Person", "name": "André Borkowski", "roleName": "Bass, Gesang" },
                { "@type": "Person", "name": "Florian Biedenbach", "roleName": "Schlagzeug, Gesang" }
              ],
              "album": {
                "@type": "MusicAlbum",
                "name": "Hundeleben",
                "datePublished": "2024",
                "recordLabel": "Through Love Records"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "knarreausberlin@gmail.com",
                "contactType": "booking"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
