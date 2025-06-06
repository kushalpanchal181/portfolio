import { useState, useEffect } from "react";
import { MdWork } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "internships", label: "Internships", icon: <MdWork size={18} /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram size={18} /> },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
        }`}
        style={{ height: 64 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-indigo-600" : "text-white"
            }`}
          >
            KushalP
          </a>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-10 font-medium ${
              scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
            }`}
          >
            {navLinks.map(({ id, label, icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex items-center gap-1 hover:text-indigo-600 transition"
                >
                  {icon && <span>{icon}</span>}
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none transition-colors duration-300 ${
              scrolled
                ? "text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800"
                : "text-white hover:bg-indigo-700"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-6 space-y-5 font-semibold text-gray-700 dark:text-gray-300">
            {navLinks.map(({ id, label, icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-lg hover:text-indigo-600 transition"
              >
                {icon && <span>{icon}</span>}
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Add padding to top of main content to prevent hiding behind fixed navbar */}
      <style>{`
        body, #root, .app-main-content {
          padding-top: 0px; /* same as navbar height */
        }
      `}</style>
    </>
  );
}
