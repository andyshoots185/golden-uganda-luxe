import { TrendingUp, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  className?: string;
};

const GoldPriceTicker = ({ className = "" }: Props) => {
  const [price, setPrice] = useState(2045.32);
  const [change, setChange] = useState(12.45);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = (Math.random() - 0.5) * 5;
      setPrice((prev) => parseFloat((prev + randomChange).toFixed(2)));
      setChange(parseFloat(Math.abs(randomChange).toFixed(2)));
      setIsIncreasing(randomChange > 0);
      setLastUpdated(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full bg-transparent py-3 md:py-4 z-40 ${className}`}
      aria-live="polite"
      role="status"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <span className="font-medium text-muted-foreground">Live Gold Price (USD/oz):</span>
            <span className="text-gold font-semibold text-lg md:text-xl">${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>

          <div className={`flex items-center gap-2 ${isIncreasing ? "text-green-500" : "text-red-500"}`}>
            {isIncreasing ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="font-medium">
              {isIncreasing ? "+" : "-"}${change} ({((change / price) * 100).toFixed(2)}%)
            </span>
          </div>

          <div className="text-xs text-muted-foreground">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldPriceTicker;
