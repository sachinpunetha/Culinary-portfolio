import { useParams, Link, Navigate } from "react-router-dom";
import { getCategoryBySlug, categories } from "../data/dishesData";
import DishCard from "../components/DishCard";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  // 404 redirect if slug doesn't exist
  if (!category) {
    return <Navigate to="/" replace />;
  }

  // Sibling categories (the other two)
  const siblings = categories.filter((c) => c.id !== category.id);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* ── Category Hero ── */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${category.imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-stone-400 text-xs mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-amber-400">{category.name}</span>
          </nav>

          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">
            {category.dishes.length} Signature Dishes
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-3">
            {category.name}
          </h1>
          <p className="text-stone-300 text-lg max-w-xl leading-relaxed">
            {category.tagline}
          </p>
        </div>
      </section>

      {/* ── Description Strip ── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-stone-500 max-w-xl text-sm leading-relaxed">
            {category.description}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-stone-400 uppercase tracking-widest">Jump to:</span>
            {siblings.map((sib) => (
              <Link
                key={sib.id}
                to={`/category/${sib.slug}`}
                className="text-xs font-semibold text-stone-600 hover:text-amber-600 border border-stone-200 hover:border-amber-300 px-3 py-1.5 rounded-full transition-all duration-200"
              >
                {sib.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dishes Grid ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl font-bold text-stone-900">
            The{" "}
            <span className="text-amber-500">{category.name}</span>{" "}
            Menu
          </h2>
          <p className="text-sm text-stone-400">
            {category.dishes.length} dishes
          </p>
        </div>

        {category.dishes.length === 0 ? (
          <div className="text-center py-24 text-stone-400">
            <span className="text-5xl block mb-4">🍽️</span>
            <p className="text-lg font-medium text-stone-600">Menu coming soon</p>
            <p className="text-sm mt-1">Check back for new additions.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {category.dishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        )}
      </section>

      {/* ── Other Categories ── */}
      <section className="bg-white border-t border-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-stone-800 mb-8">
            Explore Other Cuisines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siblings.map((sib) => (
              <Link
                key={sib.id}
                to={`/category/${sib.slug}`}
                className="group relative rounded-2xl overflow-hidden h-44 block"
              >
                <img
                  src={sib.imageUrl}
                  alt={sib.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=60";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-amber-400 text-xs uppercase tracking-widest mb-0.5">
                      {sib.dishes.length} dishes
                    </p>
                    <h3 className="text-white text-xl font-bold">{sib.name}</h3>
                  </div>
                  <svg
                    className="w-5 h-5 text-white ml-auto transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
