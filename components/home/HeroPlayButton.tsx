'use client';

import { useState } from 'react';

export function HeroPlayButton() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <button 
      onClick={() => setIsPlaying(!isPlaying)}
      className="absolute bottom-8 right-8 z-10 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      {isPlaying ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <rect x="6" y="4" width="4" height="16" />
          <rect x="14" y="4" width="4" height="16" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
