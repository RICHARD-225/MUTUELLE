import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import logo from '/logo.png'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4 group">
              <img src={logo} alt="MUCHRE-CI Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#1E90FF] via-[#4f9bff] to-[#FFA500] text-transparent bg-clip-text group-hover:via-[#6aa6ff] group-hover:to-[#ffb347] transition-colors">
                MUCHRE-CI
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              La Mutuelle Chrétienne de Côte d'Ivoire. Avec la MUCHRE-CI, 
              c'est la solidarité au service de tous.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#1E90FF] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1E90FF] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1E90FF] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/presentation" className="text-gray-400 hover:text-white transition-colors">
                  Présentation
                </Link>
              </li>
              <li>
                <Link to="/adhesion" className="text-gray-400 hover:text-white transition-colors">
                  Adhésion
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-gray-400 hover:text-white transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">+225 XX XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">contact@muchre-ci.ci</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MUCHRE-CI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
