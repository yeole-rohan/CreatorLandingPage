import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Sparkles, Brain, Package, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Sell Digital + Physical Products",
    description: "One platform to sell courses, presets, e-books, merch, prints, gifts & more.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Brain,
    title: "AI Store Builder",
    description: "Your creator identity auto-translated into a fully built storefront.",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: Package,
    title: "Done-for-You Shipping & Payments",
    description: "No logistics hassle. We handle UPI, Cards, COD support (if needed), shipping labels & tracking.",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Know exactly what's selling & where your audience buys from.",
    color: "text-orange-600",
    bg: "bg-orange-50"
  }
];

export function ValueProposition() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Made for Indian Creators. Built for Growth.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg ${value.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
