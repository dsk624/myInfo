import React from 'react';
import { HistoryEvent } from '../types';

interface HistoryCardProps {
  event: HistoryEvent;
  isEven: boolean;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ event, isEven }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 mb-12 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Date Marker (Desktop) */}
      <div className="hidden md:flex w-1/4 justify-center pt-2">
        <div className="bg-ink-800 text-white py-1 px-4 rounded-full text-sm font-bold shadow-md">
          {event.period}
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-ink-100 hover:shadow-md transition-shadow duration-300 relative">
         {/* Timeline Dot (Desktop) */}
         <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-ink-400 border-4 border-paper ${isEven ? '-left-[calc(2.5rem+8px)]' : '-right-[calc(2.5rem+8px)]'}`}></div>

        {/* Mobile Date Marker */}
        <div className="md:hidden inline-block bg-ink-800 text-white py-0.5 px-3 rounded-full text-xs font-bold mb-3">
          {event.period}
        </div>

        <h3 className="text-2xl font-serif font-bold text-ink-900 mb-2">{event.era}</h3>
        <p className="text-ink-600 mb-4 leading-relaxed">{event.description}</p>
        
        <div className="bg-ink-50 p-4 rounded-md mb-4">
          <h4 className="font-bold text-ink-800 mb-2 text-sm uppercase tracking-wider">关键事件</h4>
          <ul className="list-disc list-inside space-y-1">
            {event.keyEvents.map((e, idx) => (
              <li key={idx} className="text-ink-700 text-sm">{e}</li>
            ))}
          </ul>
        </div>

        <div className="border-l-4 border-red-800 pl-4 py-1">
          <h4 className="text-xs text-ink-500 font-semibold mb-1">历史意义</h4>
          <p className="text-ink-800 italic text-sm">{event.significance}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;