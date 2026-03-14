import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-black">
      <Image
        src="/phantomclips-bg.jpg"
        alt="Background"
        fill
        quality={100}
        priority
        className="object-cover"
      />
    </div>
  );
}
