export default function Navbar() {
  return (
    <header className="w-full py-6 px-8 flex items-center justify-between">
      <span className="font-serif font-semibold text-lg">
        Alexander Lin
      </span>

      <nav className="flex gap-8 font-sans text-sm text-gray-600">
        <a href="#" className="hover:text-gray-900 transition-colors">
          Projects
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}
