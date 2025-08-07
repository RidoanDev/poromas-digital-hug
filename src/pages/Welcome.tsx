import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';
import poromaImage from "@/assets/poroma-image.png";

const Welcome = () => {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = () => {
    setShowEnvelope(true);
  };

  const handleEnvelopeClick = () => {
    setShowEnvelope(false);
    navigate('/letter');
  };

  return (
    <div className="min-h-screen bg-gradient-soft font-cute relative overflow-x-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 float">🌸</div>
        <div className="absolute top-40 right-20 text-4xl opacity-30 float" style={{animationDelay: '1s'}}>💖</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-25 float" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-35 float" style={{animationDelay: '0.5s'}}>🎀</div>
      </div>
      {/* Envelope Modal */}
      {showEnvelope && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div 
              className="animate-envelope-pop cursor-pointer"
              onClick={handleEnvelopeClick}
            >
              <div className="glass-card p-8 rounded-3xl shadow-warm text-center transform hover:scale-105 transition-all duration-300">
                <Mail className="w-16 h-16 text-warm-peach mx-auto mb-4 animate-float" />
                <p className="text-lg text-handwriting text-foreground mb-2 sparkle">You have a letter! 💌</p>
                <p className="text-sm text-cute text-muted-foreground">Tap to open</p>
              </div>
            </div>
        </div>
      )}

      {/* Welcome Page */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl text-cute-bold text-foreground">
              Happy Raksha Bandhan, 
              <span className="block gradient-text mt-2 text-dancing text-5xl">Poroma 💖</span>
            </h1>
            <p className="text-lg text-cute text-muted-foreground sparkle">
              Here's a little surprise made with love…
            </p>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-soft">
            <img 
              src={poromaImage} 
              alt="For my dear sister Poroma"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="glass-soft rounded-2xl p-6 shadow-soft">
            <p className="text-base text-cute text-foreground leading-relaxed">
              "Scroll through each step slowly. I have something special for you."
            </p>
          </div>

          <Button 
            onClick={handleNextClick}
            className="bg-gradient-warm text-white px-8 py-4 rounded-full text-lg text-cute-bold shadow-warm hover:shadow-lg transition-all duration-300 hover:scale-105 sparkle"
          >
            Next →
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Welcome;