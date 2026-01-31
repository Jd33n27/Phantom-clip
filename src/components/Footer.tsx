import { motion } from 'framer-motion';

export default function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black pt-20 md:pt-32 pb-10 overflow-hidden">
      
      {/* CTA Section */}
      <div className="w-full max-w-360 mx-auto px-6 mb-24 md:mb-32 flex flex-col items-center text-center relative z-10">
        
        {/* Ambient Glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8"
        >
          Ready to <span className="text-yellow-500">Scale?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
        >
          Join the creators and brands generating billions of views with our automated clipping infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="https://calendly.com/roimediainc/buildyourclippingarmy"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-yellow-500 rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)]"
          >
            <span className="relative z-10">Book Your Strategy Call</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Glass Navigation & Copyright */}
      <div className="w-full max-w-360 mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="md:col-span-1 space-y-6">
              <a href="/" className="inline-block">
                <div className="text-2xl font-bold tracking-tighter text-white">
                  ROI<span className="text-yellow-500">MEDIA</span>
                </div>
              </a>
              <p className="text-sm text-gray-400 leading-relaxed">
                We build mass content distribution systems for brands and creators.
              </p>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-semibold">Explore</h4>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Home</a>
                <a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">About</a>
                <a href="#process" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Process</a>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-semibold">Support</h4>
                <a href="#faq" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">FAQ</a>
                <a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Contact</a>
                <a href="mailto:hello@roimedia.com" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Email Us</a>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-semibold">Socials</h4>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Twitter / X</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">YouTube</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} ROI Media Inc. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};