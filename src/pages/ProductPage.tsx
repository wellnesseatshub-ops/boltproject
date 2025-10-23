import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Star, ExternalLink, Heart } from 'lucide-react';
import { products } from '../data/products';

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-12">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to All Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-slate-100 rounded-full mb-4">
                <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="text-7xl">{product.icon}</div>
                <div className="flex-1">
                  <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
                    {product.name}
                  </h1>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-slate-600 font-medium text-sm">
                  Trusted by thousands
                </span>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {product.price && (
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-6">
                  <p className="text-emerald-800 font-semibold">{product.price}</p>
                </div>
              )}

              {product.guarantee && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <p className="text-blue-800 font-semibold">{product.guarantee}</p>
                  </div>
                </div>
              )}

              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full bg-gradient-to-r ${product.gradient} text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 text-center text-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] group/btn mb-4`}
              >
                <span className="flex items-center justify-center gap-3">
                  Get {product.name} Now
                  <ExternalLink className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </a>

              <p className="text-center text-sm text-slate-500">
                Clicking above will take you to the official product website
              </p>
            </div>
          </div>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${product.gradient}`} />
                Key Benefits
              </h2>
              <div className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center mt-0.5`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${product.gradient}`} />
                Features & Highlights
              </h2>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient} mt-2 flex-shrink-0`} />
                    <p className="text-slate-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Perfect For:</h3>
              <p className="text-slate-700 leading-relaxed">
                {product.targetAudience}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12 border border-blue-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 mb-3 text-xl">Important Information</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Affiliate Disclosure:</strong> This page contains affiliate links. When you purchase through our recommendations,
                we may earn a commission at no extra cost to you. We only recommend products we genuinely believe can support your health journey.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>Medical Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration.
                This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
                Consult your healthcare provider before starting any new supplement regimen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 sm:p-12 text-center shadow-2xl mb-12">
          <Heart className="w-14 h-14 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Discover More Health Solutions
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our complete collection of premium supplements and join thousands
            on their journey to better health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Products
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
            <a
              href="https://www.youtube.com/@longevitybite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>

        <footer className="text-center pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-400">
            © 2025 LongevityBite. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
