import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const [showDuolingo, setShowDuolingo] = useState(false);
  const [showGIS, setShowGIS] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fade in animations
    setTimeout(() => setShowDuolingo(true), 100);
    setTimeout(() => setShowGIS(true), 1100);
  }, []);

  const handleClick = () => {
    // Play intro sound when clicking to navigate
    const playIntroSound = () => {
      const audio = new Audio('/sfx/intro.mp3');
      audio.volume = 0.5; // Set volume to 50%
      audio.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    };

    playIntroSound();
    navigate('/main');
  };

  return (
    <div className="intro-container" onClick={handleClick}>
      <div className="intro-content">
        <div className="title-with-images">

          <img src="/images/players/duo-race.svg" alt="Duo" className="duo-race-image" />
          <h1 className="intro-title">
            <span className={`duolingo-text ${showDuolingo ? 'fade-in' : ''}`}>
              duolingo
            </span>
            <span className={`gis-text ${showGIS ? 'fade-in' : ''}`}>
              GIS
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
