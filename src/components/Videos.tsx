import { useState } from 'react';
import { motion } from 'motion/react';
import { VIDEOS, LINKS } from '../constants';
import { Play, Youtube } from 'lucide-react';

export default function Videos() {
  const [playing, setPlaying] = useState<string | null>(null);
  const featuredVideo = VIDEOS[0];
  const otherVideos = VIDEOS.slice(1);

  return (
    <section id="videos" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Media & Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Witness the impact of our work through the stories of the people we serve.
            </p>
          </div>
          <a 
            href={LINKS.youtube} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-colors"
          >
            <Youtube size={20} />
            Subscribe on YouTube
          </a>
        </div>

        {/* Featured Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden bg-gray-900 mb-12 group"
        >
          {playing === featuredVideo.id ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1`}
              title={featuredVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            <div className="cursor-pointer w-full h-full" onClick={() => setPlaying(featuredVideo.id)}>
              <img 
                src={featuredVideo.thumbnail} 
                alt={featuredVideo.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play fill="white" className="text-white ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/80 to-transparent">
                <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-medium mb-3">Featured</span>
                <h3 className="text-2xl md:text-4xl font-bold">{featuredVideo.title}</h3>
                <p className="text-gray-300 mt-2 max-w-2xl hidden md:block">{featuredVideo.description}</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-900">
                {playing === video.id ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div className="cursor-pointer w-full h-full" onClick={() => setPlaying(video.id)}>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play fill="white" className="text-white ml-1" size={20} />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>
                )}
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{video.title}</h4>
              <p className="text-sm text-gray-400 line-clamp-2">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
