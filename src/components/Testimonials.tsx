import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Our mission is not just to provide aid, but to empower individuals to become the architects of their own future. Together, we are building a legacy of hope and resilience.",
    author: "Ethel Sebuabe",
    role: "Founder & CEO, SebAid Foundation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "SebAid Foundation didn't just give me a scholarship; they gave me a future. I'm now the first university graduate in my family.",
    author: "Kwame Mensah",
    role: "Scholarship Recipient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The health screening saved my mother's life. We detected her condition early thanks to the free community outreach.",
    author: "Ama Serwaa",
    role: "Community Member",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Partnering with SebAid has allowed us to reach remote areas we couldn't access before. Their grassroots network is incredible.",
    author: "Dr. Samuel Ofori",
    role: "Medical Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The vocational training program gave me the skills to start my own business. I can now support my family with pride.",
    author: "Yaa Abrafi",
    role: "Community Member",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Voices of Change</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                <Quote className="w-16 h-16 text-gray-200 mb-10" />
                
                <p className="text-3xl md:text-5xl font-medium text-gray-900 mb-12 leading-tight tracking-tight max-w-4xl">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>
                
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={TESTIMONIALS[currentIndex].image} 
                    alt={TESTIMONIALS[currentIndex].author} 
                    className="w-16 h-16 rounded-full object-cover grayscale opacity-80"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{TESTIMONIALS[currentIndex].author}</h4>
                    <p className="text-gray-500 text-sm tracking-wide uppercase">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal Controls */}
          <div className="flex justify-center gap-12 mt-16">
            <button 
              onClick={prev}
              className="group p-4 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={32} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
            </button>
            <button 
              onClick={next}
              className="group p-4 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={32} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
