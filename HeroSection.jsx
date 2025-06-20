import React from 'react';
import { Sword, Star, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-zoro opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-secondary/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full float-animation"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="anime-title text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="block">Master the Way</span>
          <span className="block text-secondary brush-stroke">of the Sword</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover authentic katanas and premium anime collectibles inspired by the legendary swordsman Roronoa Zoro
        </p>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <Sword className="w-8 h-8 text-secondary mb-2" />
            <h3 className="font-semibold text-white mb-1">Premium Katanas</h3>
            <p className="text-sm text-white/80 text-center">Handcrafted replicas with authentic details</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <Star className="w-8 h-8 text-secondary mb-2" />
            <h3 className="font-semibold text-white mb-1">Anime Figures</h3>
            <p className="text-sm text-white/80 text-center">Collectible figures from top anime series</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <Shield className="w-8 h-8 text-secondary mb-2" />
            <h3 className="font-semibold text-white mb-1">Quality Guaranteed</h3>
            <p className="text-sm text-white/80 text-center">Premium materials and craftsmanship</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 glow-gold">
            Shop Katanas
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
            View Collection
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

