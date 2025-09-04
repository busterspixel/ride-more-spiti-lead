import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import heroBg from '@/assets/hero-bg.jpg';

const MotovlogLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(var(--gradient-hero)), url(${heroBg})`
        }}
      >
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              <span className="block text-primary">Ride More,</span>
              <span className="block">Worry Less</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Honest motovlogs, real adventures, aur authentic riding experiences. 
              <span className="text-primary font-semibold"> Join the brotherhood!</span>
            </p>

            {/* Email Form Card */}
            <Card className="max-w-md mx-auto p-6 bg-card/90 backdrop-blur-sm border-border shadow-[var(--shadow-card)]">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Get Your FREE Handbook
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      "Ladakh & Spiti Biker's Handbook" - Complete guide with routes, tips & hidden gems!
                    </p>
                  </div>
                  
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-[var(--shadow-glow)] transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                  >
                    Download FREE Handbook 🏍️
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Shabash Biker! 
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check your email for the handbook. Now you're ready for epic adventures!
                  </p>
                  <Button 
                    onClick={resetForm}
                    variant="outline"
                    className="text-sm border-border text-foreground hover:bg-secondary"
                  >
                    Share with Friends
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why <span className="text-primary">Real Riders</span> Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center bg-card border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Honest Reviews</h3>
              <p className="text-muted-foreground">
                No bakwas, no sponsorship influence. Real experiences, real problems, real solutions.
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Epic Routes</h3>
              <p className="text-muted-foreground">
                Hidden gems aur off-beat destinations. Ladakh se Spiti tak, har route covered hai.
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Rider Community</h3>
              <p className="text-muted-foreground">
                Join thousands of riders. Share experiences, plan trips, make lifelong friends.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready for Your Next <span className="text-primary">Adventure</span>?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Don't just dream about epic rides. Get the insider knowledge that makes every journey unforgettable.
          </p>
          
          {!isSubmitted && (
            <Card className="max-w-md mx-auto p-6 bg-card border-border shadow-[var(--shadow-card)]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email for the handbook"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  Get FREE Handbook Now! 🏍️
                </Button>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary text-center">
        <p className="text-muted-foreground">
          Made with ❤️ for the riding community | Ride Safe, Ride Smart
        </p>
      </footer>
    </div>
  );
};

export default MotovlogLanding;