import React from 'react';
import { Book } from '../types';
import { Clock } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-ink-100 flex flex-col h-full transform hover:-translate-y-1">
      <div className="h-56 overflow-hidden relative bg-ink-200">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <span className="text-white text-sm font-medium tracking-wider px-3 py-1 border border-white/50 rounded-full backdrop-blur-sm">
            查看详情
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-ink-900 group-hover:text-red-800 transition-colors line-clamp-1">{book.title}</h3>
        </div>
        <div className="flex items-center gap-4 text-xs text-ink-500 mb-4 font-medium">
          <span className="flex items-center gap-1 bg-ink-50 px-2 py-1 rounded">
             {book.author}
          </span>
          <span className="flex items-center gap-1 text-ink-400">
            <Clock size={12} /> {book.readingTime}
          </span>
        </div>
        <p className="text-ink-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {book.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {book.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-ink-50 text-ink-500 text-xs rounded-full border border-ink-100 group-hover:border-red-100 group-hover:text-red-700 group-hover:bg-red-50/50 transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;