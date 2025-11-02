import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gold.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium gold investment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-dark-overlay"></div>
      </div>

      {/* Animated Gold Particles */}
      <div className="absolute inset-0 z-10 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Trusted Gold Investment Partner Since 2010</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fade-up leading-tight">
            Premium Gold Investment
            <span className="block text-gold mt-2">in the Heart of Uganda</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Secure your wealth with ethical gold mining, transparent trading, and expert investment advisory services
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-gradient-gold hover:opacity-90 text-primary font-semibold shadow-gold text-lg px-8 py-6 group"
            >
              Start Investing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
          >
            Book Consultation
          </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-gold" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">$50M+</p>
              <p className="text-sm text-gray-300">Gold Traded</p>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-sm text-gray-300">Ethical & Compliant</p>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">1000+</p>
              <p className="text-sm text-gray-300">Satisfied Investors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
