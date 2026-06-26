import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

// Scroll to top on every route change
function ScrollToTop() {
  // react-router-dom v6.4+ has ScrollRestoration; this is a simple fallback
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-['Inter',sans-serif] text-stone-800 antialiased">
        <Navbar />

        {/* Push content below fixed navbar (h-16 = 64px) */}
        <div className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            {/* Catch-all → back to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
