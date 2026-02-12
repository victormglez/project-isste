import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#611232] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src="/images/logoGobMX.png" alt="Gob MX" className="h-10" />

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:underline">
              Trámites
            </a>

            <a href="#" className="hover:underline">
              Gobierno
            </a>

            <button className="text-xl">🔍</button>
          </div>

          {/* Mobile button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4 items-center">
            <a href="#" onClick={() => setIsOpen(false)}>
              Trámites
            </a>

            <a href="#" onClick={() => setIsOpen(false)}>
              Gobierno
            </a>

            <a href="#" onClick={() => setIsOpen(false)}>
              Buscar
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
