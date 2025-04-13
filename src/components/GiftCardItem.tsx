import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GiftCardProps {
  title: string;
  price: number;
  discount?: number;
  description: string;
  imageUrl: string;
  onBuy: () => void;
}

const GiftCardItem = ({
  title,
  price,
  discount,
  description,
  imageUrl,
  onBuy
}: GiftCardProps) => {
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  return (
    <Card className="overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {discount && (
            <Badge variant="secondary" className="bg-blue-100">-{discount}%</Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{discountedPrice} ₽</span>
          {discount && (
            <span className="text-sm text-muted-foreground line-through">{price} ₽</span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onBuy} className="w-full">Купить</Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCardItem;
