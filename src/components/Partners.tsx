import { motion } from 'motion/react';

const PARTNERS = [
  { name: "MTN Ghana Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MTN_Logo.svg/1024px-MTN_Logo.svg.png" },
  { name: "Google.org", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" },
  { name: "USAID", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/1024px-USAID-Identity.svg.png" },
  { name: "World Health Organization", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1024px-WHO_logo.svg.png" },
  { name: "UNICEF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Unicef_logo.png/1200px-Unicef_logo.png" },
];

export default function Partners() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Trusted by leading organizations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-24 md:w-32 h-16 flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
