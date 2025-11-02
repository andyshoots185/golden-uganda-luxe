import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Omondi",
      role: "Private Investor",
      location: "Kampala, Uganda",
      content: "HRH Gold Invest transformed my investment portfolio. Their transparency and professionalism are unmatched. I've been investing with them for 5 years and couldn't be happier.",
      rating: 5
    },
    {
      name: "Sarah Nakato",
      role: "Investment Manager",
      location: "Nairobi, Kenya",
      content: "As an investment professional, I value HRH's commitment to compliance and quality. Their gold purity certifications and ethical mining practices make them my top recommendation.",
      rating: 5
    },
    {
      name: "David Musoke",
      role: "Business Owner",
      location: "Entebbe, Uganda",
      content: "The consultation service was exceptional. They helped me understand the gold market and made my first investment seamless. Returns have exceeded my expectations.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            What Our Investors Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied investors who trust HRH Gold Invest with their wealth
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-gold/30 hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-gold/30" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-border">
                  <p className="font-semibold text-foreground mb-1">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-gold mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
