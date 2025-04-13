import GiftCardsGrid from "@/components/GiftCardsGrid";
import Header from "@/components/Header";

const AppleGiftCardsPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Apple Gift Cards</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Покупайте подарочные карты Apple для игр, приложений, подписок и многого другого. 
            Быстрая доставка по электронной почте.
          </p>
        </div>
        
        <GiftCardsGrid />
        
        <div className="mt-12 bg-secondary p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Как использовать карту</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span>1️⃣</span>
              <span>Выберите и оплатите карту</span>
            </li>
            <li className="flex items-start gap-2">
              <span>2️⃣</span>
              <span>Получите код на электронную почту</span>
            </li>
            <li className="flex items-start gap-2">
              <span>3️⃣</span>
              <span>Активируйте код в App Store или iTunes</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppleGiftCardsPage;
