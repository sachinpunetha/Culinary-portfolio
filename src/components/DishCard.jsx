export default function DishCard({ dish }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-stone-100 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-52 bg-stone-100">
        <img
          src={dish.imageUrl}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=60";
          }}
        />
        {/* Tags overlay */}
        {dish.tags?.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-widest bg-white/90 text-stone-700 px-2 py-0.5 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* Price badge */}
        <div className="absolute bottom-3 right-3 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
          {dish.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-stone-900 font-bold text-lg leading-snug group-hover:text-amber-600 transition-colors duration-200">
          {dish.name}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 flex-1">
          {dish.description}
        </p>

        {/* Ingredients */}
        {dish.ingredients?.length > 0 && (
          <div className="pt-2 border-t border-stone-100">
            <p className="text-[11px] text-stone-400 uppercase tracking-widest font-semibold mb-1.5">
              Key Ingredients
            </p>
            <div className="flex flex-wrap gap-1.5">
              {dish.ingredients.slice(0, 4).map((ing) => (
                <span
                  key={ing}
                  className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-md font-medium"
                >
                  {ing}
                </span>
              ))}
              {dish.ingredients.length > 4 && (
                <span className="text-xs bg-stone-50 text-stone-400 border border-stone-200 px-2 py-0.5 rounded-md">
                  +{dish.ingredients.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
