import { Link } from "react-router-dom";
import { categories } from "../data/dishesData";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      {/* Main Menus Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col items-center justify-center text-center">
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Menus
          </h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/category/${cat.slug}`}
                  className="text-sm hover:text-amber-400 transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="border-t border-stone-800 px-6 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-stone-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}