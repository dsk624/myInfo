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

  const handleNavClick = (id: Category) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case Category.HOME:
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn px-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-14 shadow-lg border border-white/50 text-center mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>
              
              <div className="w-36 h-36 mx-auto bg-ink-200 rounded-full mb-8 overflow-hidden border-4 border-white shadow-xl relative group">
                 <img 
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy"
                 />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink-900 mb-5 tracking-tight">静读史书</h1>
              <p className="text-xl text-ink-600 mb-10 max-w-2xl mx-auto leading-relaxed italic font-serif">
                “以铜为镜，可以正衣冠；以史为镜，可以知兴替。”
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div 
                  onClick={() => setActiveTab(Category.BOOKS)}
                  className="p-6 bg-white rounded-xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-ink-100 group">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                    <BookOpen className="text-red-800" size={20} />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2 text-lg">精选书单</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">收录经典著作，涵盖历史、哲学、科幻与文学。</p>
                </div>
                <div 
                   onClick={() => setActiveTab(Category.ANCIENT_HISTORY)}
                   className="p-6 bg-white rounded-xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-ink-100 group">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                    <Scroll className="text-amber-800" size={20} />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2 text-lg">古代历史</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">梳理中华五千年脉络，从先秦礼乐到明清余晖。</p>
                </div>
                <div 
                   onClick={() => setActiveTab(Category.MODERN_HISTORY)}
                   className="p-6 bg-white rounded-xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-ink-100 group">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
                    <HistoryIcon className="text-slate-800" size={20} />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2 text-lg">近代沧桑</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">回顾百年屈辱与抗争，见证民族复兴的伟大征程。</p>
                </div>
              </div>
            </div>

            <div className="text-center text-ink-400 text-sm pb-8">
               <p>© 2024 静读史书 Personal Space</p>
            </div>
          </div>
        );

      case Category.BOOKS:
        return (
          <div className="max-w-7xl mx-auto px-4 animate-fadeIn">
            <div className="text-center mb-16">
              <span className="text-red-800 font-bold tracking-widest text-xs uppercase mb-2 block">Library</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-900 mb-4">藏书阁</h2>
              <div className="w-16 h-1 bg-red-800 mx-auto rounded-full opacity-20"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {featuredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        );

      case Category.ANCIENT_HISTORY:
      case Category.MODERN_HISTORY:
        const data = activeTab === Category.ANCIENT_HISTORY ? ancientHistory : modernHistory;
        const title = activeTab === Category.ANCIENT_HISTORY ? '中国古代史' : '中国近代史';
        const subtitle = activeTab === Category.ANCIENT_HISTORY ? '五千年风云变幻，文明源远流长' : '百年沧桑巨变，民族复兴之路';

        return (
          <div className="max-w-6xl mx-auto px-4 animate-fadeIn">
            <div className="text-center mb-20">
              <span className="text-red-800 font-bold tracking-widest text-xs uppercase mb-2 block">Timeline</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-900 mb-4">{title}</h2>
              <p className="text-ink-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
            </div>
            
            <div className="relative">
              {/* Central Vertical Line (Desktop Only) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-ink-200 to-transparent h-full hidden md:block rounded-full"></div>

              {/* Mobile Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ink-100 via-ink-200 to-transparent block md:hidden rounded-full"></div>

              <div className="space-y-12 md:space-y-0">
                {data.map((event, index) => (
                  <HistoryCard 
                    key={event.id} 
                    event={event} 
                    isEven={index % 2 !== 0} // 0=Left, 1=Right, 2=Left...
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-20 pb-16">
               <div className="inline-flex items-center gap-4 text-ink-300 text-sm">
                  <span className="h-[1px] w-12 bg-ink-200"></span>
                  <span>鉴往知来</span>
                  <span className="h-[1px] w-12 bg-ink-200"></span>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink-800 selection:bg-red-100 selection:text-red-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick(Category.HOME)}>
              <span className="text-xl font-serif font-bold text-ink-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-800 text-white rounded flex items-center justify-center font-serif text-lg shadow-md group-hover:bg-red-700 transition-colors">史</span>
                <span className="group-hover:text-red-900 transition-colors">静读史书</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${activeTab === item.id 
                      ? 'text-red-800 bg-red-50 shadow-sm' 
                      : 'text-ink-600 hover:text-ink-900 hover:bg-white hover:shadow-sm'
                    }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-ink-600 hover:text-ink-900 hover:bg-ink-50 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-ink-100 animate-slideDown shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-xl text-base font-medium transition-colors
                    ${activeTab === item.id 
                      ? 'text-red-800 bg-red-50' 
                      : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                    }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-8 md:pt-16 pb-12 min-h-[calc(100vh-4rem)]">
        {renderContent()}
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-red-800 text-white shadow-xl shadow-red-900/20 transition-all duration-500 z-40 hover:bg-red-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;