"use client";

export default function HeroVSL() {
  const iframeSrcDoc = `
    <html>
        <head>
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    background: transparent;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                * {
                    box-sizing: border-box;
                }
            </style>
        </head>
        <body>
            <vturb-smartplayer id="" style="display: block; margin: 0 auto; width: 100%; height: 100%;"></vturb-smartplayer> 
            <script type="text/javascript"> 
                var s=document.createElement("script"); 
                s.src="https://scripts.converteai.net/91171985-478d-44a2-816e-f35e484650ea/players/68d95566232c1a965f3d4d1f/v4/player.js"; 
                s.async=!0;
                document.head.appendChild(s); 
            </script>
        </body>
    </html>
  `;

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 md:mt-16 rounded-2xl overflow-hidden border border-[#C084FC]/20 shadow-[0_0_40px_rgba(192,132,252,0.15)] bg-white/5 backdrop-blur-sm p-2 z-10">
      {/* Wrapper to maintain a standard 16:9 video aspect ratio */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
        <iframe
          className="w-full h-full border-none"
          srcDoc={iframeSrcDoc}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Video Sales Letter"
        />
      </div>
    </div>
  );
}