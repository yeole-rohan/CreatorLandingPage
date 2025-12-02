import { Button } from "./ui/button";
import { Sparkles, Palette, FileText, TrendingUp, Image, RefreshCw } from "lucide-react";

const highlights = [
  { icon: Palette, text: "Auto-generated hero banner" },
  { icon: Palette, text: "Brand colors matched to your style" },
  { icon: FileText, text: "Copy written for your niche (fitness, art, education, etc.)" },
  { icon: TrendingUp, text: "Smart layout for increasing conversions" },
  { icon: Image, text: "Option to upload images to influence the design" },
  { icon: RefreshCw, text: "Your page updates as your content grows" }
];

export function AILandingPages() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-amber-300" />
            <span className="text-sm">Creator Feedback Driven</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            AI-Designed Landing Pages That Convert 2–4× Better
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Creators said they needed personalized landing pages.
            So we built an AI system that designs, writes, and customizes your landing page just for your personal brand.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur p-4 rounded-lg border border-white/10">
                <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
                <p className="text-gray-200 mt-1">{highlight.text}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Generate My Landing Page
          </Button>
        </div>
      </div>
    </section>
  );
}
