import { useEffect, useRef, useState } from "react";

const ServicesSlider = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    { name: "Gold Mining", icon: "⛏️" },
    { name: "Gold Trading", icon: "💰" },
    { name: "Investment Advisory", icon: "📊" },
    { name: "Gold Export", icon: "🌍" },
    { name: "Refinery Services", icon: "🏭" },
    { name: "Secure Storage", icon: "🔒" },
    { name: "Consultation", icon: "💼" },
    { name: "Market Analysis", icon: "📈" },
    { name: "Asset Management", icon: "💎" },
    { name: "Quality Assurance", icon: "✓" },
  ];

  // Duplicate items for seamless loop
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-8 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex animate-scroll-left">
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`flex-shrink-0 mx-4 px-6 py-4 glass-effect rounded-xl border border-gold/20 min-w-[200px] transition-all duration-700 ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{service.icon}</span>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
