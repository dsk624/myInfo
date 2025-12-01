import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-ink-100 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative bg-ink-200">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-medium tracking-wider">阅读详情</span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-ink-900 group-hover:text-red-900 transition-colors">{book.title}</h3>
        </div>
        <p className="text-sm text-ink-500 mb-3 font-medium">作者: {book.author}</p>
        <p className="text-ink-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
          {book.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {book.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-ink-50 text-ink-600 text-xs rounded-md border border-ink-200">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;