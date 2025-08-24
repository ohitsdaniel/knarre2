import Image from "next/image";

const links = [
  {
    href: "https://www.instagram.com/knarreausberlin/",
    image: "/images/insta.avif",
    alt: "Instagram",
    label: "INSTA"
  },
  {
    href: "https://www.facebook.com/knarreausberlin",
    image: "/images/fb.avif",
    alt: "Facebook",
    label: "FACEBOOK"
  },
  {
    href: "https://knarreausberlin.bandcamp.com/",
    image: "/images/bandcamp.avif",
    alt: "Bandcamp",
    label: "BANDCAMP"
  },
  {
    href: "https://open.spotify.com/artist/2knOcWIjZqmLuiskhc9F0L",
    image: "/images/spotify.avif",
    alt: "Spotify",
    label: "SPOTIFY"
  },
  {
    href: "https://throughloverec.com/",
    image: "/images/tl_logo.webp",
    alt: "Through Love Records",
    label: "THROUGH LOVE"
  }
];

export default function Links() {
  return (
    <div className="mt-16 text-center p-8 retro-teal">
      <h3 className="text-3xl font-black mb-6 text-black">LINKS</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="border-4 border-black p-4 group-hover:scale-105 transition-transform">
              <Image
                src={link.image}
                alt={link.alt}
                width={80}
                height={80}
                className="w-full h-16 object-contain"
              />
              <p className="font-black text-black mt-2">{link.label}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}