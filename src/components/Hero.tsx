import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl tracking-tight text-gray-900">
              India's First Creator Store for{" "}
              <span className="text-blue-600">Digital & Physical</span> Products
            </h1>
            
            <p className="text-xl text-gray-600">
              Launch your own store in 2 minutes. Sell merch, digital downloads, workshops, 
              custom products & more — without coding or inventory.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Store (Free)
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-5 w-5" />
                View Creator Demos
              </Button>
            </div>
          </div>
          
          {/* Right Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612103147485-8c8de055942b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzdG9yZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjQ2NjY1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creator Store Mockup"
                className="w-full h-auto"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
                <p className="text-sm text-gray-600">Your custom store URL</p>
                <p className="text-blue-600">store.creator/yourname</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm">Live Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
