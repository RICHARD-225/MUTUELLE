import { Calendar, User, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import communaute1 from '/communaute1.png'
import communaute2 from '/communaute2.png'

function Actualites() {
  const actualites = [
    {
      id: 1,
      titre: 'Nouvelle campagne de sensibilisation',
      date: '2024-02-15',
      auteur: 'MUCHRE-CI',
      image: communaute1,
      description: 'Découvrez notre nouvelle campagne de sensibilisation sur les avantages de la mutuelle santé.',
      categorie: 'Actualité'
    },
    {
      id: 2,
      titre: 'Formation sur les garanties',
      date: '2024-02-10',
      auteur: 'MUCHRE-CI',
      image: communaute2,
      description: 'Une session de formation est organisée pour expliquer les différentes garanties disponibles.',
      categorie: 'Formation'
    },
    {
      id: 3,
      titre: 'Assemblée générale annuelle',
      date: '2024-01-20',
      auteur: 'MUCHRE-CI',
      image: communaute1,
      description: 'L\'assemblée générale annuelle s\'est tenue avec succès. Retour sur les décisions prises.',
      categorie: 'Événement'
    }
  ]

  const categories = ['Tous', 'Actualité', 'Formation', 'Événement', 'Projet']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1E90FF] to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Actualités & Activités</h1>
          <p className="text-xl text-gray-100">Restez informé de nos dernières actualités et événements</p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {categories.map((categorie) => (
              <button
                key={categorie}
                className="px-6 py-2 rounded-full border border-gray-300 hover:bg-[#1E90FF] hover:text-white hover:border-[#1E90FF] transition-colors"
              >
                {categorie}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des actualités */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actualites.map((actualite) => (
              <article
                key={actualite.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={actualite.image}
                  alt={actualite.titre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-[#FFA500] text-white rounded-full text-xs font-medium">
                      {actualite.categorie}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(actualite.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">{actualite.titre}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{actualite.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User size={16} />
                      {actualite.auteur}
                    </div>
                    <Link
                      to={`/actualites/${actualite.id}`}
                      className="text-[#1E90FF] hover:underline flex items-center gap-1 font-medium"
                    >
                      Lire la suite
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Actualites

