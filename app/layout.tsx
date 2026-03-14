import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundImage from "@/components/BackgroundImage";

export const metadata = {
  title: "Phantom Clips",
  description: "Attention is the real currency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-white overflow-x-hidden">
        <BackgroundImage />
        {/*<div className="bg-noise" />*/}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
