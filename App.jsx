import React, { useState } from 'react';
import './App.css';

// Components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import KatanaCard from './components/KatanaCard';
import FigureCard from './components/FigureCard';
import FullViewModal from './components/FullViewModal';
import ZoroCharacter from './components/ZoroCharacter';

// Data
import { katanas, figures } from './data/products';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedKatana, setSelectedKatana] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoroSwinging, setIsZoroSwinging] = useState(false);

  // Filter products based on active tab
  const getFilteredKatanas = () => {
    if (activeTab === 'all') {
      return katanas;
    }
    return katanas.filter(katana => katana.category === activeTab);
  };

  const handleKatanaFullView = (katana) => {
    setSelectedKatana(katana);
    setIsModalOpen(true);
  };

  const handleZoroAttack = () => {
    setIsZoroSwinging(true);
  };

  const handleZoroAnimationEnd = () => {
    setIsZoroSwinging(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab !== 'figures' ? (
          /* Katana Section */
          <section>
            <div className="text-center mb-12">
              <h2 className="anime-title text-4xl font-bold text-foreground mb-4">
                {activeTab === 'all' ? 'All Katanas' : 
                 activeTab === 'wado' ? 'Wado Ichimonji Collection' :
                 activeTab === 'sandai' ? 'Sandai Kitetsu Collection' :
                 activeTab === 'shusui' ? 'Shusui Collection' :
                 activeTab === 'enma' ? 'Enma Collection' : 'Katana Collection'}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover authentic replicas of Zoro's legendary swords, each crafted with meticulous attention to detail
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredKatanas().map((katana) => (
                <KatanaCard 
                  key={katana.id} 
                  katana={katana} 
                  onFullView={handleKatanaFullView}
                  onZoroAttack={handleZoroAttack}
                />
              ))}
            </div>
          </section>
        ) : (
          /* Figures Section */
          <section>
            <div className="text-center mb-12">
              <h2 className="anime-title text-4xl font-bold text-foreground mb-4">
                Anime Figures Collection
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Premium collectible figures from your favorite anime series
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {figures.map((figure) => (
                <FigureCard key={figure.id} figure={figure} />
              ))}
            </div>
          </section>
        )}
        
        {/* Featured Section */}
        <section className="mt-20 py-16 bg-card rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="anime-title text-3xl font-bold text-foreground mb-4">
              Why Choose Zoro's Emporium?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
                <span className="text-2xl">⚔️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Replicas</h3>
              <p className="text-muted-foreground">Meticulously crafted to match the original designs from the anime</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 glow-gold">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Only the finest materials and craftsmanship for true collectors</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 glow-red">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">Worldwide delivery with secure packaging and tracking</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="anime-title text-2xl font-bold text-primary mb-4">Zoro's Katana Emporium</h3>
            <p className="text-muted-foreground mb-4">Master the way of the sword with authentic anime collectibles</p>
            <p className="text-sm text-muted-foreground">© 2024 Zoro's Emporium. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Modal */}
      <FullViewModal 
        katana={selectedKatana}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      {/* Zoro Character Animation */}
      <ZoroCharacter 
        isSwinging={isZoroSwinging}
        onAnimationEnd={handleZoroAnimationEnd}
      />
    </div>
  );
}

export default App;

