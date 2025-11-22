import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/presentation', label: 'Présentation' },
    { path: '/adhesion', label: 'Adhésion' },
    { path: '/actualites', label: 'Actualités' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="MUCHRE-CI Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold hidden sm:block bg-gradient-to-r from-[#1E90FF] via-[#4f9bff] to-[#FFA500] text-transparent bg-clip-text group-hover:via-[#6aa6ff] group-hover:to-[#ffb347] transition-colors">
              MUCHRE-CI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#1E90FF] bg-blue-50'
                    : 'text-gray-700 hover:text-[#1E90FF] hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="px-4 py-2 bg-[#1E90FF] text-white rounded-md hover:bg-blue-600 transition-colors font-medium"
            >
              Se connecter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-[#1E90FF] bg-blue-50'
                    : 'text-gray-700 hover:text-[#1E90FF] hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-4 py-2 bg-[#1E90FF] text-white rounded-md text-center font-medium"
            >
              Se connecter
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

