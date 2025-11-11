import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const contactInfo = [{
    icon: Phone,
    title: "Phone",
    content: "+256 709 948920",
    link: "tel:+256709948920"
  }, {
    icon: Mail,
    title: "Email",
    content: "info@hrhgoldinvest.com",
    link: "mailto:info@hrhgoldinvest.com"
  }, {
    icon: MapPin,
    title: "Location",
    content: "Kampala, Uganda",
    link: "#"
  }, {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 9AM-6PM",
    link: "#"
  }];
  return <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Start Your Investment Journey Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach out to our team for consultation, inquiries, or investment opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => <Card key={index} className="border-border/50 hover:border-gold/30 hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{info.title}</p>
                      <a href={info.link} className="text-muted-foreground hover:text-gold transition-colors">
                        {info.content}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>)}

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-gold border-0 shadow-gold">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  Quick Response on WhatsApp
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  Get instant answers to your questions
                </p>
                <Button variant="secondary" onClick={() => window.open('https://wa.me/256709948920', '_blank')} className="w-full text-white bg-stone-900 hover:bg-stone-800">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-border/50 shadow-elegant animate-fade-in">
            <CardContent className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input required value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="John Doe" className="border-border focus:border-gold" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input required type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder="john@example.com" className="border-border focus:border-gold" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} placeholder="+256 XXX XXX XXX" className="border-border focus:border-gold" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea required value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Tell us about your investment goals..." rows={6} className="border-border focus:border-gold resize-none" />
                </div>

                <Button type="submit" className="w-full bg-gradient-gold hover:opacity-90 text-primary font-semibold shadow-gold text-lg py-6 group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;