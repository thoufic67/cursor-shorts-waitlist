import React from 'react';
import { AI_MODELS } from '@/constants';
import { Cpu, Image as ImageIcon, Video } from 'lucide-react';

const ModelShowcase: React.FC = () => {
  return (
    <section id="models" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Powered by the World&apos;s Best</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just use standard APIs. We fine-tune the absolute bleeding edge of generative models to ensure your shorts stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AI_MODELS.map((model, index) => (
            <div 
              key={index} 
              className="group relative p-1 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 hover:from-brand-blue hover:to-purple-600 transition-all duration-500"
            >
              <div className="bg-gray-950 h-full w-full rounded-xl p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {model.type === 'Video' ? <Video size={100} /> : <ImageIcon size={100} />}
                </div>

                <div className="inline-flex items-center self-start px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs font-mono text-gray-300 mb-6 group-hover:border-gray-600">
                  {model.badge}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                  {model.name}
                </h3>
                
                <p className="text-gray-400 mb-8 flex-grow">
                  {model.description}
                </p>

                {model.name.includes("Banana") && (
                   <div className="absolute bottom-4 right-4 text-[10px] text-yellow-500/50 font-mono">
                      *Banana-optimized
                   </div>
                )}
                
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue group-hover:text-white transition-colors">
                  <Cpu size={16} />
                  <span>Active Integration</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelShowcase;