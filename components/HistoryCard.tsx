import React from 'react';
import { HistoryEvent } from '../types';

interface HistoryCardProps {
  event: HistoryEvent;
  isEven: boolean; // We treat this as "should be on the right" or alternating index
}

const HistoryCard: React.FC<HistoryCardProps> = ({ event, isEven }) => {
  // If isEven is true (e.g. index 1, 3, 5), display on Right.
  // If isEven is false (e.g. index 0, 2, 4), display on Left.
  const isRight = isEven;

  return (
    <div className={`flex flex-col md:flex-row w-full mb-0 md:mb-12 items-center ${isRight ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Content Side (45%) */}
      <div className="w-full md:w-[45%] p-4 md:p-0">
        <div className={`bg-white p-6 rounded-lg shadow-sm border border-ink-100 hover:shadow-md transition-all duration-300 relative group
          ${isRight ? 'md:text-left' : 'md:text-right'} text-left`}>
          
          {/* Mobile Period Badge */}
          <div className="md:hidden inline-block bg-ink-800 text-white py-1 px-3 rounded-full text-xs font-bold mb-3">
            {event.period}
          </div>

          <h3 className="text-2xl font-serif font-bold text-ink-900 mb-2">{event.era}</h3>
          
          {/* Desktop Period */}
          <div className="hidden md:block text-sm font-bold text-red-800 mb-3 tracking-wide">
            {event.period}
          </div>

          <p className="text-ink-600 mb-4 leading-relaxed text-sm md:text-base">{event.description}</p>
          
          <div className={`bg-ink-50 p-4 rounded-md mb-4 border border-ink-100 ${isRight ? 'text-left' : 'md:text-right text-left'}`}>
            <h4 className="font-bold text-ink-800 mb-2 text-xs uppercase tracking-wider flex items-center gap-2 md:justify-end justify-start">
               {isRight ? <span>❖ 关键事件</span> : <span className="flex-row-reverse flex items-center gap-2"><span>❖ 关键事件</span></span>}
            </h4>
            <ul className={`space-y-1 ${isRight ? 'md:text-left' : 'md:text-right text-left'}`}>
              {event.keyEvents.map((e, idx) => (
                <li key={idx} className="text-ink-700 text-sm leading-snug">{e}</li>
              ))}
            </ul>
          </div>

          <div className={`border-red-800 py-1 bg-red-50/50 rounded-md px-3
            ${isRight ? 'border-l-4' : 'border-l-4 md:border-l-0 md:border-r-4'}`}>
            <h4 className="text-xs text-ink-500 font-semibold mb-1">历史意义</h4>
            <p className="text-ink-900 italic text-sm">{event.significance}</p>
          </div>
          
          {/* Desktop Arrow Pointer */}
          <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white border-t border-r border-ink-100 rotate-45 z-10
            ${isRight ? '-left-[9px] border-t-0 border-r-0 border-b border-l' : '-right-[9px]'}`}>
          </div>
        </div>
      </div>

      {/* Center Axis (10%) */}
      <div className="hidden md:flex w-[10%] justify-center relative h-full min-h-[100px]">
         {/* Dot */}
         <div className="w-4 h-4 bg-red-800 rounded-full border-4 border-paper z-10 shadow-sm mt-8 relative">
            <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse opacity-0 group-hover:opacity-50"></div>
         </div>
      </div>

      {/* Spacer Side (45%) */}
      <div className="hidden md:block w-[45%]"></div>
      
    </div>
  );
};

export default HistoryCard;