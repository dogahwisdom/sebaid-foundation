import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-6">Our Mission</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              To empower underserved communities through sustainable health, educational, and social support initiatives.
            </h3>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center md:border-l md:border-gray-100 md:pl-20"
          >
            <span className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-6">Our Vision</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              A world where equitable access to healthcare and skills creates resilient communities and lasting positive change.
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
