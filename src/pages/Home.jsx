import { Link } from "react-router-dom";
import { categories } from "../data/dishesData";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=90')",
          }}
        />
        {/* Overlay: gradient from dark bottom to semi-dark top */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/50 to-stone-900/40" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-[0.3em] mb-5">
            Chef's Signature Collection
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Where Every Plate
            <br />
            <span className="text-amber-400">Tells a Story</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Explore the Menus
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
           
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Intro Strip ── */}
      <section className="bg-amber-50 border-y border-amber-100 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🌿", label: "Seasonal Ingredients", sub: "Sourced fresh, every day" },
              { icon: "👨‍🍳", label: "Chef-Crafted Recipes", sub: "Technique meets tradition" },
              { icon: "🌍", label: "Global Inspirations", sub: "Different cuisines, one vision" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-semibold text-stone-800">{item.label}</p>
                <p className="text-sm text-stone-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Cards ── */}
      <section id="categories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">
              The Collection
            </p>
           
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=60";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                    {cat.dishes.length} Dishes
                  </p>
                  <h3 className="text-white text-2xl font-bold leading-tight mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {cat.description}
                  </p>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="inline-flex items-center gap-2 bg-white text-stone-900 text-sm font-semibold px-5 py-2.5 rounded-full w-fit hover:bg-amber-500 hover:text-white transition-all duration-200"
                  >
                    View Menu
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="relative py-24 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-stone-900/75" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Taste the full menu
          </h2>
          <p className="text-stone-300 mb-8 leading-relaxed">
            From Entremets & Gâteaux to ceremonial Pre-plated Classical Desserts — browse every
            dish, ingredient, and story in the collection.
          </p>
          <Link
            to={`/category/${categories[0].slug}`}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30 text-sm tracking-wide"
          >
            Start with Italian
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
