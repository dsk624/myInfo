import React, { useState, useEffect } from 'react';
import { BookOpen, Scroll, User, History as HistoryIcon, Menu, X, ArrowUp } from 'lucide-react';
import { Category, NavItem } from './types';
import { featuredBooks, ancientHistory, modernHistory } from './data';
import BookCard from './components/BookCard';
import HistoryCard from './components/HistoryCard';

const navItems: NavItem[] = [
  { id: Category.HOME, label: '主页', icon: <User size={18} /> },
  { id: Category.BOOKS, label: '藏书阁', icon: <BookOpen size={18} /> },
  { id: Category.ANCIENT_HISTORY, label: '古代史', icon: <Scroll size={18} /> },
  { id: Category.MODERN_HISTORY, label: '近代史', icon: <HistoryIcon size={18} /> },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>(Category.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case Category.HOME:
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-ink-100 text-center mb-10">
              <div className="w-32 h-32 mx-auto bg-ink-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg">
                 <img src="https://picsum.photos/300/300?grayscale&blur=2" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink-900 mb-4">静读史书</h1>
              <p className="text-lg text-ink-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                “以铜为镜，可以正衣冠；以史为镜，可以知兴替。”
              </p>
              <div className="h-1 w-20 bg-red-800 mx-auto opacity-50 mb-8"></div>
              <p className="text-ink-700 leading-8 mb-6 text-left md:text-center">
                欢迎来到我的个人空间。这里没有繁杂的信息流，只有经过沉淀的历史与书籍。
                我热爱探究中国历史的脉络，从先秦的百家争鸣到近代的百年变革。
                同时也喜爱阅读各类人文社科经典。希望在这里，能和你一起在静谧中感受时间的重量。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                <button 
                  onClick={() => setActiveTab(Category.ANCIENT_HISTORY)}
                  className="p-4 bg-ink-50 rounded-lg hover:bg-ink-100 transition-colors flex flex-col items-center gap-2 group"
                >
                  <Scroll className="text-ink-600 group-hover:text-red-800" />
                  <span className="font-serif font-bold text-ink-800">探寻古风</span>
                </button>
                 <button 
                  onClick={() => setActiveTab(Category.MODERN_HISTORY)}
                  className="p-4 bg-ink-50 rounded-lg hover:bg-ink-100 transition-colors flex flex-col items-center gap-2 group"
                >
                  <HistoryIcon className="text-ink-600 group-hover:text-red-800" />
                  <span className="font-serif font-bold text-ink-800">回顾近代</span>
                </button>
                 <button 
                  onClick={() => setActiveTab(Category.BOOKS)}
                  className="p-4 bg-ink-50 rounded-lg hover:bg-ink-100 transition-colors flex flex-col items-center gap-2 group"
                >
                  <BookOpen className="text-ink-600 group-hover:text-red-800" />
                  <span className="font-serif font-bold text-ink-800">阅览群书</span>
                </button>
              </div>
            </div>
          </div>
        );

      case Category.BOOKS:
        return (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-ink-900 mb-3">藏书阁</h2>
              <p className="text-ink-500">精选人文社科好书，分享阅读感悟</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        );

      case Category.ANCIENT_HISTORY:
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-ink-900 mb-3">中国古代史</h2>
              <p className="text-ink-500">源远流长，上下五千年</p>
            </div>
            <div className="relative">
              {/* Vertical Line (Desktop only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-ink-200 -ml-[1px]"></div>
              
              {ancientHistory.map((event, index) => (
                <HistoryCard key={event.id} event={event} isEven={index % 2 !== 0} />
              ))}
            </div>
             <div className="text-center mt-12 p-8 bg-ink-50 rounded-lg border border-ink-100">
               <p className="text-ink-600 italic font-serif">“滚滚长江东逝水，浪花淘尽英雄。”</p>
             </div>
          </div>
        );

      case Category.MODERN_HISTORY:
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-ink-900 mb-3">中国近代史</h2>
              <p className="text-ink-500">三千年未有之大变局</p>
            </div>
            <div className="relative">
               {/* Vertical Line (Desktop only) */}
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-ink-200 -ml-[1px]"></div>
               
              {modernHistory.map((event, index) => (
                <HistoryCard key={event.id} event={event} isEven={index % 2 !== 0} />
              ))}
            </div>
            <div className="text-center mt-12 p-8 bg-ink-50 rounded-lg border border-ink-100">
               <p className="text-ink-600 italic font-serif">“雄关漫道真如铁，而今迈步从头越。”</p>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink-900 font-sans selection:bg-red-100 selection:text-red-900 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-ink-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => setActiveTab(Category.HOME)}
            >
              <div className="w-8 h-8 bg-red-800 rounded-sm flex items-center justify-center text-white font-serif font-bold text-lg">史</div>
              <span className="font-serif font-bold text-xl tracking-wide text-ink-900">静读史书</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 font-medium ${
                    activeTab === item.id 
                      ? 'text-red-900 bg-red-50' 
                      : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-ink-600 hover:text-ink-900 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-ink-200 animate-slideDown">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-3 py-3 rounded-md transition-colors ${
                    activeTab === item.id 
                      ? 'text-red-900 bg-red-50 font-bold' 
                      : 'text-ink-600 hover:bg-ink-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-ink-900 text-ink-300 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl text-ink-100 mb-4">静读史书</h3>
          <p className="text-sm max-w-md mx-auto mb-8 text-ink-400">
            个人的精神角落。记录历史的痕迹，分享书籍的温度。
            <br />
            Static Personal Page Built with React & Tailwind.
          </p>
          <div className="border-t border-ink-800 pt-8 text-xs text-ink-500">
            &copy; {new Date().getFullYear()} History & Literature Space. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-red-800 text-white rounded-full shadow-lg hover:bg-red-900 transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;