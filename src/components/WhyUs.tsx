import { Shield, Eye, Award, FileCheck, Lock, Clock } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Trust & Credibility",
      description: "14+ years of proven track record with zero defaults and complete investor satisfaction"
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Every transaction documented, verified, and accessible with complete audit trails"
    },
    {
      icon: Award,
      title: "99.99% Purity",
      description: "Certified gold quality with international standards and third-party verification"
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Full compliance with Ugandan and international mining and trading regulations"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "State-of-the-art vaults and insurance coverage for complete peace of mind"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick transactions, instant verification, and efficient service delivery"
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            The Gold Standard in Investment Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            We set ourselves apart through unwavering commitment to quality, transparency, and investor success
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all duration-300">
                <reason.icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="glass-effect rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
            Certified & Trusted By Leading Organizations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: "ISO 9001", subtitle: "Quality Management" },
              { name: "ISO 14001", subtitle: "Environmental" },
              { name: "LBMA", subtitle: "London Bullion Market" },
              { name: "Uganda Chamber", subtitle: "Mining Association" }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Award className="w-10 h-10 text-gold" />
                </div>
                <p className="font-semibold text-foreground text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
