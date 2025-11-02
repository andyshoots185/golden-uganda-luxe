import { Coins, TrendingUp, Factory, Ship, PieChart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Coins,
      title: "Gold Buying & Selling",
      description: "Purchase and sell gold at competitive market rates with full transparency and instant verification.",
      features: ["Market-rate pricing", "Instant verification", "Secure transactions"]
    },
    {
      icon: Factory,
      title: "Mining Operations",
      description: "Ethical, sustainable gold mining operations with state-of-the-art equipment and safety standards.",
      features: ["ISO-certified", "Environmental compliance", "Safety protocols"]
    },
    {
      icon: Ship,
      title: "Gold Export Services",
      description: "Comprehensive export solutions with full regulatory compliance and international logistics.",
      features: ["Customs clearance", "Secure shipping", "Global delivery"]
    },
    {
      icon: PieChart,
      title: "Investment Advisory",
      description: "Expert guidance on gold investment strategies, portfolio diversification, and wealth preservation.",
      features: ["Market analysis", "Portfolio planning", "Risk management"]
    },
    {
      icon: TrendingUp,
      title: "Trading Platform",
      description: "Advanced trading solutions for institutional and retail investors with real-time market data.",
      features: ["Live pricing", "Secure platform", "24/7 support"]
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Personalized consultation for new and experienced investors looking to enter the gold market.",
      features: ["Expert advice", "Market insights", "Custom solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Comprehensive Gold Investment Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From mining to trading, we offer end-to-end gold investment services backed by expertise and integrity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50 hover:border-gold/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
