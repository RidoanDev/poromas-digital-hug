import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Letter = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSendMessage = () => {
    const subject = "Raksha Bandhan Letter for You";
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:ridoan.zisan@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.open(mailtoLink);
  };

  const handleNextClick = () => {
    navigate('/promise');
  };

  return (
    <div className="min-h-screen bg-gradient-soft font-cute relative overflow-x-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 text-5xl opacity-20 float">💌</div>
        <div className="absolute top-60 left-10 text-4xl opacity-25 float" style={{animationDelay: '1.5s'}}>💝</div>
        <div className="absolute bottom-60 right-20 text-6xl opacity-15 float" style={{animationDelay: '0.8s'}}>🌹</div>
        <div className="absolute bottom-20 left-20 text-3xl opacity-30 float" style={{animationDelay: '2.2s'}}>💕</div>
      </div>
      {/* Letter Page */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-lg mx-auto space-y-8">
          <h2 className="text-3xl text-cute-bold text-center gradient-text mb-8 sparkle">
            A Letter for You
          </h2>

          <div className="glass-card rounded-2xl p-8 shadow-soft">
            <div className="text-handwriting text-lg leading-relaxed text-foreground space-y-4">
              <p>Dear Poroma,</p>
              <p>
                On this special day, I want you to know that you are more than just a sister to me; 
                you are my greatest inspiration.
              </p>
              <p>
                Your kindness illuminates the world around you, and your laughter fills my days with pure joy. 
                Even though we aren't connected by blood, you are the most special person in my life.
              </p>
              <p>
                No matter where our journeys take us, always remember that I'm just a call away.
              </p>
              <div className="text-right mt-6">
                <p>With all my love,</p>
                <p className="text-cute-bold gradient-text">Your Brother 🤍</p>
              </div>
            </div>
          </div>

          <div className="glass-soft rounded-2xl p-6 shadow-soft space-y-4">
            <Textarea
              placeholder="Write something for me?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px] border-soft-pink/30 focus:border-warm-peach resize-none text-handwriting text-base glass-soft"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="w-full bg-soft-pink text-foreground hover:bg-soft-pink/80 rounded-xl py-3 text-cute-bold disabled:opacity-50 transition-all duration-300 hover:scale-105"
            >
              Send 💌
            </Button>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={handleNextClick}
              className="bg-gradient-warm text-white px-8 py-4 rounded-full text-lg text-cute-bold shadow-warm hover:shadow-lg transition-all duration-300 hover:scale-105 sparkle"
            >
              Next →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Letter;