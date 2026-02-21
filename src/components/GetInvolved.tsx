import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 md:py-32 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-4 block">Join the Mission</span>
            <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tighter leading-tight">
              Make a Real<br />Difference Today.
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg font-light">
              Whether you want to volunteer your time, partner with us, or make a donation, your support helps us build stronger communities.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Become a Volunteer
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Partner With Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Donate", desc: "Support our projects financially." },
              { title: "Volunteer", desc: "Give your time and skills." },
              { title: "Advocate", desc: "Spread the word." },
              { title: "Partner", desc: "Collaborate with us." }
            ].map((item, i) => (
              <a href="#contact" key={i} className="block group">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between min-h-[200px]"
                >
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
