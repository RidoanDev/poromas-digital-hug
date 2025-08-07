import { Heart, Star, Sparkles } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Hearts */}
      <Heart className="absolute top-20 left-10 w-6 h-6 text-soft-pink/30 animate-float" style={{ animationDelay: '0s' }} />
      <Heart className="absolute top-40 right-20 w-4 h-4 text-warm-peach/40 animate-love-bounce" style={{ animationDelay: '1s' }} />
      <Heart className="absolute bottom-32 left-1/4 w-5 h-5 text-lavender/30 animate-heart-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Stars for sparkle effect */}
      <Star className="absolute top-32 right-10 w-4 h-4 text-warm-peach/50 animate-rakhi-sparkle" style={{ animationDelay: '0.5s' }} />
      <Star className="absolute bottom-40 right-1/3 w-3 h-3 text-soft-pink/40 animate-rakhi-sparkle" style={{ animationDelay: '1.5s' }} />
      <Star className="absolute top-60 left-1/3 w-5 h-5 text-lavender/30 animate-float" style={{ animationDelay: '2.5s' }} />
      
      {/* Sparkles */}
      <Sparkles className="absolute top-1/4 left-16 w-6 h-6 text-warm-peach/30 animate-gentle-sway" style={{ animationDelay: '1s' }} />
      <Sparkles className="absolute bottom-1/3 right-16 w-4 h-4 text-soft-pink/40 animate-rakhi-sparkle" style={{ animationDelay: '3s' }} />
      <Sparkles className="absolute top-3/4 left-1/2 w-5 h-5 text-lavender/30 animate-float" style={{ animationDelay: '0.8s' }} />
      
      {/* Additional decorative elements */}
      <div className="absolute top-16 right-1/4 w-2 h-2 bg-warm-peach/30 rounded-full animate-love-bounce" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-20 left-12 w-3 h-3 bg-soft-pink/40 rounded-full animate-float" style={{ animationDelay: '1.8s' }} />
      <div className="absolute top-52 right-12 w-2 h-2 bg-lavender/30 rounded-full animate-gentle-sway" style={{ animationDelay: '3.5s' }} />
    </div>
  );
};

export default FloatingElements;