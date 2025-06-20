import React from 'react';

const FigureCard = ({ figure }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="figure-card relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group float-animation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={figure.image} 
          alt={figure.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          style={{
            filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)'
          }}
        />
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Series badge with animation */}
        <div className="absolute top-3 left-3 transform transition-all duration-300 group-hover:scale-110">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            figure.series === 'Naruto' ? 'bg-orange-500 text-white' :
            figure.series === 'One Piece' ? 'bg-blue-500 text-white' :
            figure.series === 'Demon Slayer' ? 'bg-red-500 text-white' :
            figure.series === 'Bleach' ? 'bg-purple-500 text-white' :
            'bg-primary text-primary-foreground'
          }`}>
            {figure.series}
          </span>
        </div>
        
        {/* Limited edition indicator */}
        {figure.isLimited && (
          <div className="absolute top-3 right-3 animate-pulse">
            <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold">
              LIMITED
            </span>
          </div>
        )}
        
        {/* Hover action overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="px-6 py-2 bg-white/90 text-black rounded-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
            Quick View
          </button>
        </div>
      </div>
      
      <div className="p-4 relative">
        <div className="flex items-center gap-2 mb-3">
          {/* Stock indicator with pulse animation */}
          <div className={`w-3 h-3 rounded-full ${
            figure.inStock ? 'bg-green-500 animate-pulse' : 'bg-red-500'
          }`}></div>
          <span className="text-xs text-muted-foreground">
            {figure.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <h3 className="anime-title text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {figure.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
          {figure.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="tech-font text-xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
            ${figure.price}
          </span>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Add to Cart
          </button>
        </div>
        
        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/50 transition-all duration-300"></div>
      </div>
      
      {/* Glow effect based on series */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: 
            figure.series === 'Naruto' ? '0 0 30px rgba(249, 115, 22, 0.4)' :
            figure.series === 'One Piece' ? '0 0 30px rgba(59, 130, 246, 0.4)' :
            figure.series === 'Demon Slayer' ? '0 0 30px rgba(239, 68, 68, 0.4)' :
            figure.series === 'Bleach' ? '0 0 30px rgba(147, 51, 234, 0.4)' :
            '0 0 30px rgba(26, 95, 63, 0.4)'
        }}
      >
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${
              isHovered ? 'animate-bounce' : ''
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${80 - i * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FigureCard;

