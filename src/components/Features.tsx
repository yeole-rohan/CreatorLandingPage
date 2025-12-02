import { ShoppingCart, FileImage, Truck, CreditCard, FileText, LayoutDashboard } from "lucide-react";

const features = [
  { 
    icon: ShoppingCart, 
    title: "Unlimited Products", 
    description: "Digital, physical, services—anything you want." 
  },
  { 
    icon: FileImage, 
    title: "Auto-Optimized Product Pages", 
    description: "AI formats descriptions, titles & pricing to increase conversions." 
  },
  { 
    icon: Truck, 
    title: "Shipping Tools", 
    description: "Auto-generated shipping updates + tracking." 
  },
  { 
    icon: CreditCard, 
    title: "Secure Payments", 
    description: "UPI, Cards, Wallets, PayPal (global), payouts to your bank." 
  },
  { 
    icon: FileText, 
    title: "Refund & Policy Pages", 
    description: "Instantly generated. Zero legal writing needed." 
  },
  { 
    icon: LayoutDashboard, 
    title: "Creator Dashboard", 
    description: "Track sales, orders, downloads, revenue & customer insights." 
  }
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Everything You Need to Sell, Built-In.</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
