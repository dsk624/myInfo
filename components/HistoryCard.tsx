import React from 'react';
import { HistoryEvent } from '../types';

interface HistoryCardProps {
  event: HistoryEvent;
  isEven: boolean; 
}

const HistoryCard: React.FC<HistoryCardProps> = ({ event, isEven }) => {
  const isRight = isEven;

  return (
    <div className={`flex flex-col md:flex-row w-full mb-0 md:mb-16 items-center ${isRight ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Content Side (45%) */}
      <div className="w-full md:w-[45%] p-4 md:p-0">
        <div className={`bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl border border-ink-100 transition-all duration-300 relative group transform hover:-translate-y-1
          ${isRight ? 'md:text-left' : 'md:text-right'} text-left`}>
          
          {/* Mobile Period Badge */}
          <div className="md:hidden inline-block bg-red-800 text-white py-1 px-3 rounded-full text-xs font-bold mb-4 shadow-sm">
            {event.period}
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink-900 mb-2 group-hover:text-red-900 transition-colors">{event.era}</h3>
          
          {/* Desktop Period */}
          <div className="hidden md:block text-sm font-bold text-red-700 mb-4 tracking-wide uppercase opacity-80">
            {event.period}
          </div>

          <p className="text-ink-600 mb-6 leading-relaxed text-sm md:text-base font-medium">{event.description}</p>
          
          <div className={`bg-ink-50/80 p-5 rounded-lg mb-5 border border-ink-100/50 ${isRight ? 'text-left' : 'md:text-right text-left'}`}>
            <h4 className="font-bold text-ink-400 mb-3 text-xs uppercase tracking-widest flex items-center gap-2 md:justify-end justify-start">
               {isRight ? <span>❖ 关键事件</span> : <span className="flex-row-reverse flex items-center gap-2"><span>❖ 关键事件</span></span>}
            </h4>
            <ul className={`space-y-2 ${isRight ? 'md:text-left' : 'md:text-right text-left'}`}>
              {event.keyEvents.map((e, idx) => (
                <li key={idx} className="text-ink-700 text-sm leading-relaxed">{e}</li>
              ))}
            </ul>
          </div>

          <div className={`border-red-800 py-2 bg-gradient-to-r from-red-50/50 to-transparent rounded-r-lg px-4
            ${isRight ? 'border-l-4' : 'border-l-4 md:border-l-0 md:border-r-4 md:bg-gradient-to-l'}`}>
            <h4 className="text-xs text-red-900/60 font-bold mb-1 uppercase tracking-wider">历史意义</h4>
            <p className="text-ink-900 font-serif italic text-sm">{event.significance}</p>
          </div>
          
          {/* Desktop Arrow Pointer */}
          <div className={`hidden md:block absolute top-10 w-4 h-4 bg-white border-t border-r border-ink-100 rotate-45 z-10
            ${isRight ? '-left-[9px] border-t-0 border-r-0 border-b border-l' : '-right-[9px]'}`}>
          </div>
        </div>
      </div>

      {/* Center Axis (10%) */}
      <div className="hidden md:flex w-[10%] justify-center relative h-full min-h-[120px]">
         {/* Connector Line Logic handles by parent, this is just the dot */}
         <div className="w-5 h-5 bg-white rounded-full border-4 border-red-800 z-10 shadow-md mt-10 relative group-hover:scale-125 transition-transform duration-300">
            <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-0 group-hover:opacity-20"></div>
         </div>
      </div>

      {/* Spacer Side (45%) */}
      <div className="hidden md:block w-[45%]"></div>
      
    </div>
  );
};

export default HistoryCard;