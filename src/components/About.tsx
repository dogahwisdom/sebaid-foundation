import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Driven by Purpose,<br />
              United by Impact.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              Founded with a vision inspired by the ideals of compassion, service, equality of opportunity, and determined to empower individuals and communities through education, skills development, access to healthcare, and sustainable practices.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              We are committed to fostering unity, integrity, transparency, accountability and environmental stewardship in all our endeavors, recognizing that SebAid Foundation operates in the belief that sustainable development starts at the community level.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80&w=1000" alt="Team working in the field" className="w-full h-full object-cover" />
            </div>
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute -bottom-12 -left-12 bg-white/90 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl max-w-sm hidden md:block border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To empower underserved individuals and communities impacted by natural disasters,
                systemic poverty, and abuse through equitable access to education, skills development,
                and holistic health resources.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
