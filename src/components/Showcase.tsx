import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const demoStores = [
  {
    name: "Artist's Studio",
    category: "Artwork & Prints",
    image: "https://images.unsplash.com/photo-1581368163672-d717bcb4c6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBjcmVhdG9yJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NDY2NjU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Craft Corner",
    category: "Handmade Goods",
    image: "https://images.unsplash.com/photo-1743485754062-b6ad79fd3278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzY0NTg5NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Digital Creator",
    category: "Digital Products",
    image: "https://images.unsplash.com/photo-1755985022555-09c0ec136e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRvciUyMGRlc2t8ZW58MXx8fHwxNzY0NjY2NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Online Store",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1612103147485-8c8de055942b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzdG9yZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjQ2NjY1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Showcase() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Stores Created With Us</h2>
          <p className="text-xl text-gray-600">
            Beautiful, fast, and crafted to match each creator's brand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoStores.map((store, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-6">
                  <h3 className="text-white text-lg mb-1">{store.name}</h3>
                  <p className="text-white/80 text-sm">{store.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
