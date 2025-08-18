import "./globals.css";
import Script from "next/script";

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
      <body>{children}
    {process.env.NEXT_PUBLIC_GA_ID ? (<><Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" /><Script id="gtag-init" strategy="afterInteractive">{`
      window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{ anonymize_ip:true });window.gtag=gtag;`}</Script></>) : null}
  </body>
    </html>
  );
}
