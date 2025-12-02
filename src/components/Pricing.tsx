import { Button } from "./ui/button";
import { Check } from "lucide-react";

const teaserPoints = [
  "Zero setup fees",
  "Creator-first commission model",
  "Optional subscription with lower fees",
  "No hidden charges"
];

export function Pricing() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl text-gray-900 mb-4">Simple & Transparent Pricing — Coming Soon</h2>
        <p className="text-xl text-gray-600 mb-12">
          We're in early access. Pricing will be simple, creator-friendly, and designed for long-term growth.
        </p>
        
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {teaserPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Join Early Access
          </Button>
        </div>
      </div>
    </section>
  );
}
