import "./globals.css";

export const metadata = {
  title: "Ozuna Construction LLC | Roofing, Siding, Framing & Remodeling in Columbus, OH",
  description: "Licensed & insured contractor in Columbus, OH. Roofing, siding, framing, carpentry and remodeling. Free estimates. 10+ years of experience. Warranty on labor.",
  metadataBase: new URL("https://ozunaconstructionllc.vercel.app"),
  openGraph: {
    title: "Ozuna Construction LLC",
    description: "Roofing, siding, framing & remodeling in Columbus, OH. Free estimates.",
    type: "website",
    url: "https://ozunaconstructionllc.vercel.app"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozuna Construction LLC",
    description: "Roofing, siding, framing & remodeling in Columbus, OH."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body></html>
  );
}
