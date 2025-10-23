import { Link } from 'react-router-dom';
import { Youtube, Shield, Star, ArrowRight, Heart } from 'lucide-react';
import { products } from '../data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16">

        <header className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-5 py-2 bg-white rounded-full shadow-lg border border-slate-200">
            <Youtube className="w-5 h-5 text-red-600" />
            <span className="text-sm font-semibold text-slate-700">From LongevityBite</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Your Health,
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Elevated
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover premium, science-backed supplements
            <span className="block mt-2">trusted by thousands for vibrant aging and optimal wellness</span>
          </p>

          <div className="flex items-center justify-center gap-2 mt-8 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-slate-600 font-medium">Trusted by 50,000+ customers</span>
          </div>
        </header>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-12 border border-blue-100 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Transparency First</h3>
              <p className="text-slate-700 leading-relaxed">
                This page contains affiliate links. When you purchase through our recommendations,
                we may earn a commission at no extra cost to you. We only feature products we genuinely
                believe can support your health journey.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:scale-[1.02]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{product.icon}</div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${product.gradient} bg-opacity-10 rounded-full`}>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h2>

                <p className={`text-base font-semibold mb-3 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                  {product.tagline}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Learn More</span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 sm:p-16 text-center shadow-2xl mb-12 max-w-4xl mx-auto">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Get daily health insights, longevity tips, and science-backed wellness strategies
            delivered through our YouTube channel
          </p>
          <a
            href="https://www.youtube.com/@longevitybite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Youtube className="w-6 h-6" />
            Subscribe to LongevityBite
          </a>
        </div>

        <footer className="text-center pt-12 border-t border-slate-200">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-sm text-slate-500 leading-relaxed">
              <strong className="text-slate-700">Medical Disclaimer:</strong> These statements have not been evaluated
              by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent
              any disease. Individual results may vary. Consult your healthcare provider before starting any new
              supplement regimen, especially if you have a medical condition or take medications.
            </p>
            <p className="text-xs text-slate-400">
              © 2025 LongevityBite. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
