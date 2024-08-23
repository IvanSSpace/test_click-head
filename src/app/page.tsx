// import Card from "@/components/Card";
import Card1 from "@/components/Card1";
import Image from "next/image";

const cardData = [
  {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "price": 9.99
  },
  {
    "id": 2,
    "title": "Eyeshadow Palette with Mirror",
    "price": 19.99
  },
  {
    "id": 3,
    "title": "Powder Canister",
    "price": 14.99
  },
  {
    "id": 4,
    "title": "Red Lipstick",
    "price": 12.99
  },
  {
    "id": 5,
    "title": "Red Nail Polish",
    "price": 8.99
  },
  {
    "id": 6,
    "title": "Calvin Klein CK One",
    "price": 49.99
  },
  {
    "id": 7,
    "title": "Chanel Coco Noir Eau De",
    "price": 129.99
  },
  {
    "id": 8,
    "title": "Dior J'adore",
    "price": 89.99
  },
  {
    "id": 9,
    "title": "Dolce Shine Eau de",
    "price": 69.99
  },
  {
    "id": 10,
    "title": "Gucci Bloom Eau de",
    "price": 79.99
  },
  {
    "id": 11,
    "title": "Annibale Colombo Bed",
    "price": 1899.99
  },
  {
    "id": 12,
    "title": "Annibale Colombo Sofa",
    "price": 2499.99
  },
  {
    "id": 13,
    "title": "Bedside Table African Cherry",
    "price": 299.99
  },
  {
    "id": 14,
    "title": "Knoll Saarinen Executive Conference Chair",
    "price": 499.99
  },
  {
    "id": 15,
    "title": "Wooden Bathroom Sink With Mirror",
    "price": 799.99
  },
  {
    "id": 16,
    "title": "Apple",
    "price": 1.99
  },
  {
    "id": 17,
    "title": "Beef Steak",
    "price": 12.99
  },
  {
    "id": 18,
    "title": "Cat Food",
    "price": 8.99
  },
  {
    "id": 19,
    "title": "Chicken Meat",
    "price": 9.99
  },
  {
    "id": 20,
    "title": "Cooking Oil",
    "price": 4.99
  },
  {
    "id": 21,
    "title": "Cucumber",
    "price": 1.49
  },
  {
    "id": 22,
    "title": "Dog Food",
    "price": 10.99
  },
  {
    "id": 23,
    "title": "Eggs",
    "price": 2.99
  },
  {
    "id": 24,
    "title": "Fish Steak",
    "price": 14.99
  },
  {
    "id": 25,
    "title": "Green Bell Pepper",
    "price": 1.29
  },
  {
    "id": 26,
    "title": "Green Chili Pepper",
    "price": 0.99
  },
  {
    "id": 27,
    "title": "Honey Jar",
    "price": 6.99
  },
  {
    "id": 28,
    "title": "Ice Cream",
    "price": 5.49
  },
  {
    "id": 29,
    "title": "Juice",
    "price": 3.99
  },
  {
    "id": 30,
    "title": "Kiwi",
    "price": 2.49
  }
]

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 super-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 mb-32">
          {cardData.map((card) => (
            <Card1 key={card.id} title={card.title} price={card.price} />
          ))}
        </div>
      </div>


    </main>
  );
}
