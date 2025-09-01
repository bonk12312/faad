import React, { useState } from 'react';
import { X, Twitter } from 'lucide-react';

const TypewriterText = ({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showCursor, setShowCursor] = React.useState(false);

  React.useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const startTimer = setTimeout(() => {
        setShowCursor(true);
      }, delay);
      return () => clearTimeout(startTimer);
    } else if (currentIndex === 0) {
      setShowCursor(true);
    }
  }, [delay, currentIndex]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 500);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed, showCursor]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

function App() {
  const [showStory, setShowStory] = useState(false);

  const orbs = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    animationDelay: Math.random() * 3,
    animationDuration: Math.random() * 3 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* X Logo Button - Top Right */}
      <a
        href="https://x.com/i/communities/1962619465847447869"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-6 z-20 bg-white text-black hover:bg-gray-200 p-3 transition-all duration-300 group"
      >
        <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </a>

      {/* Animated Orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-white opacity-60 animate-float"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            boxShadow: `0 0 ${orb.size * 3}px rgba(255, 255, 255, 0.8), 0 0 ${orb.size * 6}px rgba(255, 255, 255, 0.4)`,
            animationDelay: `${orb.animationDelay}s`,
            animationDuration: `${orb.animationDuration}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center z-10">
        <div className="mb-6">
          <img 
            src="/Untitled design - 2025-09-01T234623.244.png" 
            alt="Modern Dishwasher Design" 
            className="mx-auto max-w-xs md:max-w-sm opacity-80 filter brightness-110"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light text-white mb-3 tracking-wide">
          <TypewriterText text="Modern Dishwasher" delay={500} speed={80} />
        </h1>
        <div className="text-2xl md:text-4xl text-white mb-4 tracking-wider opacity-80">
          <TypewriterText text="$WOMAN" delay={2500} speed={120} />
        </div>
        
        <div className="text-lg md:text-xl text-white mb-8 tracking-wide opacity-70 italic">
          <TypewriterText text="I'm here for the dishes" delay={4000} speed={60} />
        </div>
        
        <button
          onClick={() => setShowStory(true)}
         className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 transition-all duration-300 text-sm uppercase tracking-wider backdrop-blur-sm bg-white/10 hover:bg-white transform hover:scale-105"
        >
          Learn More About Dishwashers
        </button>
      </div>


      {/* Story Modal */}
      {showStory && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-none p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto border-2 border-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-mono text-white uppercase tracking-wider">The Great Dishwasher Chronicles</h2>
              <button
                onClick={() => setShowStory(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="text-white space-y-6 text-base leading-relaxed">
              <div className="text-2xl font-bold mb-4">
                <TypewriterText text="📖 A Brief History of Kitchen Automation" delay={500} speed={60} />
              </div>
              
              <div className="text-lg">
                <TypewriterText 
                  text="Once upon a time, in the mystical era of the 1950s, society had a revolutionary idea..." 
                  delay={3000} 
                  speed={40} 
                />
              </div>
              
              <div className="text-lg">
                <TypewriterText 
                  text="What if we assigned kitchen duties based on... *checks notes*... chromosomes? 🧬" 
                  delay={8000} 
                  speed={45} 
                />
              </div>
              
              <div className="text-lg">
                <TypewriterText 
                  text="Brilliant! Because clearly, the Y chromosome comes with a built-in allergy to soap and water. 🧽" 
                  delay={13000} 
                  speed={40} 
                />
              </div>
              
              <div className="text-lg">
                <TypewriterText 
                  text="But then... PLOT TWIST! 🌟" 
                  delay={18000} 
                  speed={80} 
                />
              </div>
              
              <div className="text-lg">
                <TypewriterText 
                  text="Scientists discovered that dishwashing abilities are actually distributed randomly across all humans, regardless of gender! Revolutionary research! 🔬" 
                  delay={20000} 
                  speed={35} 
                />
              </div>
              
              <div className="text-lg">
                <TypewriterText 
                  text="In 2025, we've upgraded to Dishwasher OS 2.0: 'Whoever cooks, the other cleans' or 'Take turns like civilized humans.' 🤝" 
                  delay={26000} 
                  speed={40} 
                />
              </div>
              
              <div className="text-lg font-bold">
                <TypewriterText 
                  text="The End. 🎭" 
                  delay={32000} 
                  speed={100} 
                />
              </div>
              
              <div className="text-sm opacity-60 italic mt-8">
                <TypewriterText 
                  text="*This story is a work of satirical fiction. Any resemblance to outdated social norms is purely intentional." 
                  delay={34000} 
                  speed={30} 
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;