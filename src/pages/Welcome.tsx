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
    <div className="min-h-screen bg-gradient-soft font-poppins relative overflow-x-hidden">
      {/* Envelope Modal */}
      {showEnvelope && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            className="animate-envelope-pop cursor-pointer"
            onClick={handleEnvelopeClick}
          >
            <div className="bg-white p-8 rounded-3xl shadow-warm text-center transform hover:scale-105 transition-transform">
              <Mail className="w-16 h-16 text-warm-peach mx-auto mb-4 animate-float" />
              <p className="text-lg font-handwriting text-foreground mb-2">You have a letter! 💌</p>
              <p className="text-sm text-muted-foreground">Tap to open</p>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Page */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground font-poppins">
              Happy Raksha Bandhan, 
              <span className="block text-warm-peach mt-2">Poroma 💖</span>
            </h1>
            <p className="text-lg text-muted-foreground font-handwriting">
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

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <p className="text-base text-foreground font-handwriting leading-relaxed">
              "Scroll through each step slowly. I have something special for you."
            </p>
          </div>

          <Button 
            onClick={handleNextClick}
            className="bg-gradient-warm text-white px-8 py-4 rounded-full text-lg font-medium shadow-warm hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Next →
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Welcome;