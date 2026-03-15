import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundImage from "@/components/BackgroundImage";
import VisualEffects from "@/components/VisualEffects";

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
      <body className="bg-black text-white antialiased overflow-x-hidden min-h-screen">
        {/* Global Framer-Style Effects Mount */}
        <VisualEffects />

        <BackgroundImage />
        <Navbar />
        <main className="relative z-10 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
