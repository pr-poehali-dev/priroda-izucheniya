import GiftCardItem from "./GiftCardItem";
import { toast } from "@/components/ui/use-toast";

const giftCards = [
  {
    id: 1,
    title: "Apple Gift Card 1000₽",
    price: 1000,
    description: "Идеальный подарок для любителей продукции Apple",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Apple Gift Card 3000₽",
    price: 3000,
    discount: 5,
    description: "Пополните счет вашего Apple ID со скидкой",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Apple Gift Card 5000₽",
    price: 5000,
    discount: 10,
    description: "Максимальная выгода для ценителей Apple",
    imageUrl: "/placeholder.svg",
  }
];

const GiftCardsGrid = () => {
  const handleBuy = (id: number) => {
    toast({
      title: "Товар добавлен в корзину",
      description: `Вы добавили карту №${id} в корзину`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {giftCards.map((card) => (
        <GiftCardItem
          key={card.id}
          title={card.title}
          price={card.price}
          discount={card.discount}
          description={card.description}
          imageUrl={card.imageUrl}
          onBuy={() => handleBuy(card.id)}
        />
      ))}
    </div>
  );
};

export default GiftCardsGrid;
