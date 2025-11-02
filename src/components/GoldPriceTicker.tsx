import { TrendingUp, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

const GoldPriceTicker = () => {
  const [price, setPrice] = useState(2045.32);
  const [change, setChange] = useState(12.45);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = (Math.random() - 0.5) * 5;
      setPrice((prev) => parseFloat((prev + randomChange).toFixed(2)));
      setChange(parseFloat(Math.abs(randomChange).toFixed(2)));
      setIsIncreasing(randomChange > 0);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground py-3 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="font-medium">Live Gold Price (USD/oz):</span>
            <span className="text-gold font-bold text-lg">${price.toLocaleString()}</span>
          </div>
          <div className={`flex items-center space-x-1 ${isIncreasing ? "text-green-500" : "text-red-500"}`}>
            {isIncreasing ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="font-medium">
              {isIncreasing ? "+" : "-"}${change} ({((change / price) * 100).toFixed(2)}%)
            </span>
          </div>
          <div className="hidden md:block text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldPriceTicker;
