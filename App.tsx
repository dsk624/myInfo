import React, { useState, useEffect } from 'react';
import { BookOpen, Scroll, User, History as HistoryIcon, Menu, X, ArrowUp, Github } from 'lucide-react';
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
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-ink-100 text-center mb-10">
              <div className="w-32 h-32 mx-auto bg-ink-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg relative">
                 <img src="https://picsum.photos/300/300?grayscale&blur=2" alt="Profile" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-red-900/10"></div>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink-900 mb-4">静读史书</h1>
              <p className="text-lg text-ink-600 mb-8 max-w-2xl mx-auto leading-relaxed italic font-serif">
                “以铜为镜，可以正衣冠；以史为镜，可以知兴替。”
              </p>
              <div className="h-1 w-20 bg-red-800 mx-auto mb-8 opacity-20"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div 
                  onClick={() => setActiveTab(Category.BOOKS)}
                  className="p-6 bg-ink-50 rounded-lg cursor-pointer hover:bg-ink-100 transition-colors border border-ink-100 group">
                  <BookOpen className="text-ink-500 mb-3 group-hover:text-red-800 transition-colors" />
                  <h3 className="font-bold text-ink-900 mb-2">精选书单</h3>
                  <p className="text-sm text-ink-600">收录个人阅读过的经典书籍，涵盖历史、哲学、文学等领域。</p>
                </div>
                <div 
                   onClick={() => setActiveTab(Category.ANCIENT_HISTORY)}
                   className="p-6 bg-ink-50 rounded-lg cursor-pointer hover:bg-ink-100 transition-colors border border-ink-100 group">
                  <Scroll className="text-ink-500 mb-3 group-hover:text-red-800 transition-colors" />
                  <h3 className="font-bold text-ink-900 mb-2">古代历史</h3>
                  <p className="text-sm text-ink-600">梳理中华上下五千年历史脉络，从先秦到明清的重要节点。</p>
                </div>
                <div 
                   onClick={() => setActiveTab(Category.MODERN_HISTORY)}
                   className="p-6 bg-ink-50 rounded-lg cursor-pointer hover:bg-ink-100 transition-colors border border-ink-100 group">
                  <HistoryIcon className="text-ink-500 mb-3 group-hover:text-red-800 transition-colors" />
                  <h3 className="font-bold text-ink-900 mb-2">近代沧桑</h3>
                  <p className="text-sm text-ink-600">回顾近代中国百年屈辱与抗争，探索民族复兴之路。</p>
                </div>
              </div>
            </div>

            <div className="text-center text-ink-400 text-sm mt-12 pb-8">
               <p>© 2024 静读史书 Personal Space. Built with React & Tailwind.</p>
            </div>
          </div>
        );

      case Category.BOOKS:
        return (
          <div className="max-w-6xl mx-auto px-4 animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-ink-900 mb-3">藏书阁</h2>
              <p className="text-ink-500">读万卷书，行万里路</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        const subtitle = activeTab === Category.ANCIENT_HISTORY ? '五千年风云变幻' : '百年沧桑巨变';

        return (
          <div className="max-w-5xl mx-auto px-4 animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-ink-900 mb-3">{title}</h2>
              <p className="text-ink-500">{subtitle}</p>
            </div>
            
            <div className="relative">
              {/* Central Vertical Line (Desktop Only) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-ink-200 h-full hidden md:block rounded-full"></div>

              {/* Mobile Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-ink-200 block md:hidden rounded-full"></div>

              <div className="space-y-8 md:space-y-0">
                {data.map((event, index) => (
                  <HistoryCard 
                    key={event.id} 
                    event={event} 
                    isEven={index % 2 !== 0} // 0=Left, 1=Right, 2=Left...
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-16 pb-12">
               <span className="text-ink-400 text-sm">— 历史长河，源远流长 —</span>
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
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-ink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick(Category.HOME)}>
              <span className="text-xl font-serif font-bold text-ink-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-800 text-white rounded flex items-center justify-center font-serif text-lg">史</span>
                静读史书
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${activeTab === item.id 
                      ? 'text-red-800 bg-red-50' 
                      : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
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
          <div className="md:hidden bg-white border-b border-ink-100 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full px-3 py-3 rounded-md text-base font-medium
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
      <main className="pt-8 md:pt-12 pb-12 min-h-[calc(100vh-4rem)]">
        {renderContent()}
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-red-800 text-white shadow-lg transition-all duration-300 z-40 hover:bg-red-900 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;