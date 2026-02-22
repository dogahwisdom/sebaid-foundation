import { motion } from 'motion/react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Our Impact</h2>
            <p className="text-xl text-gray-500 max-w-xl">
              Real stories of change from the communities we serve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden h-[600px] group cursor-pointer"
          >
            <img 
              src="https://i.imgur.com/Z5KTwRZ.png" 
              alt="Education Impact" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-12 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-white/80 text-sm font-medium tracking-widest uppercase mb-4">Education</span>
              <h3 className="text-4xl font-bold text-white mb-4 leading-tight">Education for All</h3>
              <p className="text-gray-300 text-lg max-w-md">We provided trainings on soft and hard skills for women and youth, bridging the digital divide in rural districts.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[2rem] overflow-hidden h-[600px] group cursor-pointer"
          >
            <img 
              src="https://i.imgur.com/oYBoBsB.png" 
              alt="Healthcare Impact" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-12 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-white/80 text-sm font-medium tracking-widest uppercase mb-4">Healthcare</span>
              <h3 className="text-4xl font-bold text-white mb-4 leading-tight">Community Health</h3>
              <p className="text-gray-300 text-lg max-w-md">Conducted free health screenings for 1,200+ community members, ensuring early detection and care.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
