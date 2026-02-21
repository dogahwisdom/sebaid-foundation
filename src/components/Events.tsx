import { motion } from 'motion/react';
import { EVENTS } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">Upcoming Events</h2>
        
        <div className="space-y-6">
          {EVENTS.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 md:items-center p-6 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-gray-50/50 hover:bg-white"
            >
              {/* Date Badge */}
              <div className="flex-shrink-0 w-full md:w-24 h-24 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center text-center border border-gray-100">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {event.date.split(' ')[0]}
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {event.date.split(' ')[1].replace(',', '')}
                </span>
                <span className="text-xs text-gray-500">
                  {event.date.split(' ')[2]}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex-shrink-0">
                <a 
                  href="#contact" 
                  className="inline-flex px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  Register Interest
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
