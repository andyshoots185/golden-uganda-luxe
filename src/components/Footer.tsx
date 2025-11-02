import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Why Choose Us", href: "#why-us" },
      { name: "Gallery", href: "#gallery" }
    ],
    services: [
      { name: "Gold Buying", href: "#services" },
      { name: "Gold Selling", href: "#services" },
      { name: "Mining Operations", href: "#services" },
      { name: "Investment Advisory", href: "#services" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Compliance", href: "#" },
      { name: "Certifications", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold">
                <span className="text-2xl font-bold text-primary font-serif">H</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">HRH Gold Invest Ltd</h3>
                <p className="text-sm text-primary-foreground/70">Premium Investment</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Uganda's premier gold investment, mining, and trading company. Committed to transparency, ethical practices, and investor success since 2010.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+256709948920" className="flex items-center space-x-3 text-primary-foreground/80 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+256 709 948920</span>
              </a>
              <a href="mailto:info@hrhgoldinvest.com" className="flex items-center space-x-3 text-primary-foreground/80 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@hrhgoldinvest.com</span>
              </a>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} HRH Gold Invest Ltd. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gradient-gold flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
