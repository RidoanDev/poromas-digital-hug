import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart, Check, Home } from 'lucide-react';
import rakhiImage from "@/assets/rakhi-illustration.png";

const Promise = () => {
  const navigate = useNavigate();

  const promises = [
    "I promise to protect you — always",
    "I promise to listen, not just hear",
    "I promise to walk beside you in every storm",
    "I promise to cheer you on in all your wins",
    "I promise to always be your safe space"
  ];

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-soft font-cute relative overflow-x-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 float">🤝</div>
        <div className="absolute top-40 right-10 text-4xl opacity-25 float" style={{animationDelay: '1s'}}>💞</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-15 float" style={{animationDelay: '2s'}}>🌟</div>
        <div className="absolute bottom-20 right-20 text-3xl opacity-30 float" style={{animationDelay: '0.5s'}}>🎋</div>
      </div>
      {/* Promise Page */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-lg mx-auto space-y-8 text-center">
          {/* Rakhi illustration */}
          <div className="w-full rounded-2xl overflow-hidden shadow-soft">
            <img 
              src={rakhiImage} 
              alt="Brother and sister rakhi illustration"
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-3xl text-cute-bold gradient-text sparkle">
            My Promises to You 💞
          </h2>

          <div className="glass-card rounded-2xl p-6 shadow-soft space-y-4">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start space-x-3 text-left">
                <Check className="w-5 h-5 text-warm-peach mt-1 flex-shrink-0" />
                <p className="text-base text-foreground text-cute leading-relaxed">
                  {promise}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-soft rounded-2xl p-6 shadow-soft">
            <p className="text-lg text-handwriting text-foreground leading-relaxed mb-4">
              "No matter what happens in life, you'll always have me as your brother."
            </p>
            <p className="text-base text-dancing gradient-text text-xl">
              — Your Brother 💖
            </p>
          </div>

          {/* Back to Home Button */}
          <Button 
            onClick={handleBackToHome}
            className="bg-lavender text-foreground hover:bg-lavender/80 px-8 py-4 rounded-full text-lg text-cute-bold shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto sparkle"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Promise;