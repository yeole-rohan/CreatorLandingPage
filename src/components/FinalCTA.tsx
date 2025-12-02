import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl lg:text-5xl mb-8">
          Start Your Creator Store in 2 Minutes
        </h2>
        
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
          Get Early Access (Free)
        </Button>
        
        <p className="text-blue-100 mt-8">
          Built for Indian creators. No coding. No inventory. No stress.
        </p>
      </div>
    </section>
  );
}
