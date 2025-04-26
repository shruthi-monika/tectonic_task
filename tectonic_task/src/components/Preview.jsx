import React, { useEffect, useState } from 'react';
import Annotation from './Annotation';

const Preview = ({ media, onEnd }) => {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (media.type === 'image') {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onEnd();
            return 100;
          }
          return prev + 2; 
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [media, onEnd]);

  if (media.type === 'image') {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <img 
          src={media.src} 
          alt="" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          height: '5px',
          width: `${progress}%`,
          backgroundColor: 'white',
          transition: 'width 0.1s linear'
        }} />
        {media.annotations && media.annotations.map((annotation, idx) => (
          <Annotation key={idx} annotation={annotation} />
        ))}
      </div>
    );
  } else if (media.type === 'video') {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <video 
          src={media.src} 
          muted={isMuted}
          autoPlay 
          onEnded={onEnd}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <button 
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            padding: '8px'
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(!isMuted);
          }}
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Preview;
