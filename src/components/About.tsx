import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
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
              Founded with a vision to create equitable opportunities for all, SEBaid Foundation operates on the belief that sustainable development starts at the community level.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-12">
              We focus on health equity, skill acquisition, and social support systems designed to uplift the most vulnerable. Our team is driven by compassion, integrity, and a relentless pursuit of impact.
            </p>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 pt-12">
              <div>
                <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-2 tracking-tighter">
                  <Counter from={0} to={120} />+
                </h3>
                <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">Lives Impacted</p>
              </div>
              <div>
                <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-2 tracking-tighter">
                  <Counter from={0} to={12} />+
                </h3>
                <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">Communities Served</p>
              </div>
              <div>
                <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-2 tracking-tighter">
                  <Counter from={0} to={15} />+
                </h3>
                <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">Volunteers</p>
              </div>
              <div>
                <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-2 tracking-tighter">89%</h3>
                <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">Commitment</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working in the field" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Mission Card Overlay */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-12 -left-12 bg-white/90 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl max-w-sm hidden md:block border border-white/20"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To empower underserved communities through sustainable health and educational initiatives.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
