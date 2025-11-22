import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import ButtonPrimary from '../components/ButtonPrimary'

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Intégrer avec Firebase ou service d'email
    alert('Message envoyé avec succès! (À intégrer avec Firebase)')
    setFormData({ nom: '', email: '', sujet: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1E90FF] to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-100">Nous sommes là pour répondre à toutes vos questions</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <MessageCircle className="text-[#1E90FF]" size={32} />
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                  />
                </div>
                <ButtonPrimary type="submit" className="w-full">
                  <Send className="mr-2" size={20} />
                  Envoyer le message
                </ButtonPrimary>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Nos coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        Abidjan, Côte d'Ivoire<br />
                        Cocody, Angré 7ème Tranche
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFA500] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Téléphone</h3>
                      <p className="text-gray-600">
                        +225 XX XX XX XX XX<br />
                        +225 XX XX XX XX XX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        contact@muchre-ci.ci<br />
                        info@muchre-ci.ci
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Suivez-nous</h2>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <span className="font-bold">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <span className="font-bold">t</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <span className="font-bold">i</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <span className="font-bold">w</span>
                  </a>
                </div>
              </div>

              {/* Google Map placeholder */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Carte Google Maps (à intégrer)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

