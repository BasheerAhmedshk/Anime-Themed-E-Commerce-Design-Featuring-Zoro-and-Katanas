import React from 'react';

const ZoroCharacter = ({ isSwinging, onAnimationEnd }) => {
  return (
    <div 
      className={`zoro-character fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none ${isSwinging ? 'zoro-swing' : 'opacity-0'}`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="relative w-32 h-32">
        {/* Zoro character silhouette */}
        <div className="w-full h-full relative">
          {/* Main body */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-green-600 to-green-800 rounded-t-full">
            {/* Arms */}
            <div className="absolute -left-2 top-4 w-6 h-2 bg-green-700 rounded-full rotate-45"></div>
            <div className="absolute -right-2 top-4 w-6 h-2 bg-green-700 rounded-full -rotate-45"></div>
          </div>
          
          {/* Head */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-b from-green-500 to-green-700 rounded-full">
            {/* Green hair */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-green-400 rounded-t-full"></div>
            {/* Bandana */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-black rounded-full"></div>
            {/* Scar */}
            <div className="absolute top-3 left-2 w-1 h-4 bg-red-500 rounded-full opacity-80"></div>
          </div>
          
          {/* Three katanas */}
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            {/* Wado Ichimonji (mouth) */}
            <div className="absolute w-20 h-1 bg-gradient-to-r from-gray-300 to-white rounded-full rotate-45 origin-left">
              <div className="absolute right-0 w-3 h-3 bg-gold rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Sandai Kitetsu (right hand) */}
            <div className="absolute w-18 h-1 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full rotate-30 origin-left top-2">
              <div className="absolute right-0 w-2 h-2 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Shusui/Enma (left hand) */}
            <div className="absolute w-18 h-1 bg-gradient-to-r from-black to-gray-600 rounded-full rotate-60 origin-left -top-2">
              <div className="absolute right-0 w-2 h-2 bg-purple-600 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          
          {/* Legs */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-3 h-8 bg-green-800 rounded-full -rotate-12 absolute -left-1"></div>
            <div className="w-3 h-8 bg-green-800 rounded-full rotate-12 absolute right-1"></div>
          </div>
        </div>
        
        {/* Slash effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main slash */}
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-white to-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-90 animate-pulse"></div>
          
          {/* Secondary slashes */}
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-30 opacity-70"></div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-60 opacity-70"></div>
        </div>
        
        {/* Energy aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-green-400/30 via-transparent to-transparent animate-ping"></div>
        
        {/* Attack name text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="anime-title text-lg font-bold text-green-400 drop-shadow-lg animate-pulse">
            三刀流 Santoryu!
          </span>
        </div>
      </div>
    </div>
  );
};

export default ZoroCharacter;

