import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/MyDA1tL.png" 
          alt="Community empowerment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[0.95]">
            Empowering Lives,<br />
            <span className="text-white/80">Building Futures.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 font-normal leading-relaxed tracking-tight">
            SebAid Foundation is dedicated to bridging gaps in health, education, and opportunity across Ghana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href="#programs" 
              className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Our Programs
            </a>
            <a 
              href="#get-involved" 
              className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              Get Involved <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
