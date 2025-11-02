import { CheckCircle2, Users, Globe, Trophy } from "lucide-react";
import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "14+ Years Experience",
      description: "Leading Uganda's gold investment sector since 2010"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International compliance and ethical mining practices"
    },
    {
      icon: Trophy,
      title: "Award-Winning",
      description: "Recognized for excellence in precious metals trading"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={consultationImage}
                alt="Gold investment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-elegant border border-border max-w-xs">
              <p className="text-4xl font-bold text-gold mb-1">99.99%</p>
              <p className="text-sm text-muted-foreground">Pure Gold Quality Assurance</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-up">
            <div className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
              About HRH Gold Invest Ltd
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              Uganda's Premier Gold Investment Partner
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2010, HRH Gold Invest Ltd has established itself as Uganda's most trusted name in gold investment, mining, and trading. We combine local expertise with international standards to deliver unparalleled value to our investors.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to transparency, ethical mining practices, and investor satisfaction has made us the preferred choice for individuals and institutions seeking secure gold investments in East Africa.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-xl mb-3">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Values List */}
            <div className="space-y-3">
              {[
                "ISO-certified mining operations",
                "Full regulatory compliance and transparency",
                "Expert advisory and wealth management",
                "Secure storage and logistics"
              ].map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
