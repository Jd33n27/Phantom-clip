import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <div className="bg-noise" /> {/* Persistent background effect */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}