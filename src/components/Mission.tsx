import { motion } from 'motion/react';

const CORE_VALUES = [
  'Commitment',
  'Altruism',
  'Loyalty',
  'Integrity',
  'Dedicated',
  'Accountability',
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-6">Our Mission</span>
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
              To empower underserved individuals and communities impacted by natural disasters,
              systemic poverty, and abuse through equitable access to education, skills development,
              and holistic health resources, fostering resilience and sustainable advancement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center md:border-l md:border-gray-100 md:pl-20"
          >
            <span className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-6">Our Vision</span>
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
              Envisioning equitable, resilient communities where marginalized populations achieve
              lasting empowerment through accessible health promotion, transformative skill
              development, and sustainable livelihood opportunities, fostering inclusive progress
              for generations.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-16 border-t border-gray-100"
        >
          <span className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-6 block">Core Values</span>
          <div className="flex flex-wrap gap-3">
            {CORE_VALUES.map((value) => (
              <span key={value} className="px-5 py-2.5 bg-gray-50 text-gray-800 font-medium rounded-full text-sm border border-gray-100">
                {value}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
