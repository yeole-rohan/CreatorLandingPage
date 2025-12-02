import { Button } from "./ui/button";
import { UserPlus, Upload, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Store",
    description: "Login → Add name → Pick your niche."
  },
  {
    number: "02",
    icon: Upload,
    title: "Add Your Products",
    description: "Upload photos, PDFs, videos, or variants."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live & Get Paid",
    description: "Share your link anywhere → Get instant orders."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Sell in 3 Simple Steps</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-100 z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white mb-6 shadow-lg">
                    <Icon className="h-10 w-10" />
                  </div>
                  
                  <div className="absolute top-0 right-0 text-6xl text-blue-50">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Launch Your Store Today
          </Button>
        </div>
      </div>
    </section>
  );
}
