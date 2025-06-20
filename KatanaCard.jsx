import React from 'react';

const KatanaCard = ({ katana, onFullView, onZoroAttack }) => {
  const [isRotating, setIsRotating] = React.useState(false);
  const [rotationY, setRotationY] = React.useState(0);
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!isRotating || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const rotateY = ((x / rect.width) - 0.5) * 360; // Full 360° rotation
    
    setRotationY(rotateY);
  };

  const handleMouseEnter = () => {
    setIsRotating(true);
  };

  const handleMouseLeave = () => {
    setIsRotating(false);
    setRotationY(0);
  };

  const handleZoroAttackClick = (e) => {
    e.stopPropagation();
    if (onZoroAttack) {
      onZoroAttack();
    }
  };

  return (
    <div 
      ref={cardRef}
      className="katana-card relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onFullView(katana)}
      style={{
        transform: `perspective(1000px) rotateY(${rotationY}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={katana.image} 
          alt={katana.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          style={{
            transform: `rotateY(${rotationY * 0.1}deg)` // Subtle image rotation
          }}
        />
        
        {/* Lighting effect overlay for lighting katanas */}
        {katana.isLighting && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent lightning-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
        
        {/* Rotation indicator */}
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Move mouse to rotate
        </div>
      </div>
      
      <div className="p-4 relative" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="anime-title text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {katana.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{katana.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="tech-font text-xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
            ${katana.price}
          </span>
          <div className="flex gap-2">
            {katana.type === 'onepiece' && (
              <button 
                className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-xs hover:bg-primary/80 transition-all duration-300 transform hover:scale-105 glow-green"
                onClick={handleZoroAttackClick}
              >
                ⚔️ Zoro Attack
              </button>
            )}
            <button className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-xs hover:bg-accent/80 transition-all duration-300 transform hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Stock indicator */}
        <div className="mt-2 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${katana.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-xs text-muted-foreground">
            {katana.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
      
      {/* Lightning indicator for lighting katanas */}
      {katana.isLighting && (
        <div className="absolute top-2 right-2 lightning-effect">
          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
            ⚡
          </div>
        </div>
      )}
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{
             boxShadow: katana.type === 'onepiece' ? '0 0 30px rgba(26, 95, 63, 0.4)' :
                       katana.isLighting ? '0 0 30px rgba(59, 130, 246, 0.4)' :
                       '0 0 30px rgba(212, 175, 55, 0.4)'
           }}>
      </div>
    </div>
  );
};

export default KatanaCard;

