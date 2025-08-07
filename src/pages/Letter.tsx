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
    <div className="min-h-screen bg-gradient-soft font-poppins">
      {/* Letter Page */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-lg mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            A Letter for You
          </h2>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
            <div className="font-handwriting text-xl md:text-lg leading-relaxed text-foreground space-y-4">
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
                <p className="font-bold">Your Brother 🤍</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft space-y-4">
            <Textarea
              placeholder="Write something for me?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px] border-soft-pink/30 focus:border-warm-peach resize-none text-base"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="w-full bg-soft-pink text-foreground hover:bg-soft-pink/80 rounded-xl py-3 font-medium disabled:opacity-50"
            >
              Send 💌
            </Button>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={handleNextClick}
              className="bg-gradient-warm text-white px-8 py-4 rounded-full text-lg font-medium shadow-warm hover:shadow-lg transition-all duration-300 hover:scale-105"
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