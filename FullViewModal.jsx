import React from 'react';
import { X } from 'lucide-react';

const FullViewModal = ({ katana, isOpen, onClose }) => {
  if (!isOpen || !katana) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={katana.image} 
              alt={katana.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="anime-title text-3xl font-bold text-foreground mb-2">{katana.name}</h2>
              <p className="text-muted-foreground">{katana.description}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Material: {katana.material || 'High-quality steel'}</li>
                  <li>• Length: {katana.length || '104cm'}</li>
                  <li>• Weight: {katana.weight || '1.2kg'}</li>
                  <li>• Origin: {katana.origin || 'Japan-inspired craftsmanship'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {katana.isLighting && (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                      ⚡ LED Lighting
                    </span>
                  )}
                  {katana.type === 'wooden' && (
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">
                      🌳 Wooden Craft
                    </span>
                  )}
                  {katana.type === 'onepiece' && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      ⚔️ One Piece Replica
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="tech-font text-3xl font-bold text-secondary">${katana.price}</span>
                <span className="text-sm text-muted-foreground">Free shipping worldwide</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors font-semibold">
                  Add to Cart
                </button>
                <button className="w-full py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullViewModal;

