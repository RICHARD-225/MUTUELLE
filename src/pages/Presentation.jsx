import { Download, Users, Target, Heart, FileText, Eye, Award, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import communaute1 from '/communaute1.png'
import communaute2 from '/communaute2.png'

function Presentation() {
  const bureauExecutif = [
    { nom: 'Jean KOUASSI', role: 'Président', photo: communaute1, bio: 'Expert en gestion avec plus de 15 ans d\'expérience' },
    { nom: 'Marie DIALLO', role: 'Vice-Présidente', photo: communaute2, bio: 'Spécialiste en santé publique et solidarité' },
    { nom: 'Pierre YAO', role: 'Secrétaire Général', photo: communaute1, bio: 'Passionné par l\'organisation et la coordination' },
    { nom: 'Sophie TRAORE', role: 'Trésorière', photo: communaute2, bio: 'Comptable certifiée avec expertise en finances associatives' }
  ]

  const valeurs = [
    {
      icon: Heart,
      title: 'Solidarité',
      description: 'Nous croyons en la force de l\'entraide et de la solidarité entre les membres.'
    },
    {
      icon: Users,
      title: 'Transparence',
      description: 'Une gestion transparente et responsable de nos ressources pour le bien de tous.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Un engagement constant pour offrir un service de qualité à nos adhérents.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#1E90FF] to-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Présentation</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl">
            Découvrez qui nous sommes, nos valeurs et notre engagement envers la solidarité
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Notre histoire</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E90FF] to-[#FFA500] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  La <strong className="text-gray-800">Mutuelle Chrétienne de Côte d'Ivoire (MUCHRE-CI)</strong> a été créée avec pour mission 
                  d'offrir une protection santé solidaire et accessible à tous les chrétiens de Côte d'Ivoire.
                </p>
                <p>
                  Fondée sur les valeurs chrétiennes de <strong className="text-gray-800">solidarité</strong>, d'<strong className="text-gray-800">entraide</strong> et de <strong className="text-gray-800">bienveillance</strong>, 
                  la MUCHRE-CI accompagne ses adhérents dans leurs besoins de santé avec des garanties 
                  adaptées et un service de qualité.
                </p>
                <p>
                  Depuis notre création, nous avons accompagné des <strong className="text-[#1E90FF]">milliers de familles</strong> et continuons 
                  à grandir grâce à l'engagement de nos membres et de notre équipe.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={communaute1} 
                  alt="Communauté MUCHRE-CI" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FFA500] text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#1E90FF] rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Notre Mission</h3>
              <p className="text-gray-600">
                Offrir une protection santé solidaire et accessible, en accompagnant nos adhérents 
                dans tous leurs besoins de santé avec des garanties adaptées et un service de qualité.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Notre Vision</h3>
              <p className="text-gray-600">
                Devenir la référence en matière de mutuelle de santé chrétienne en Côte d'Ivoire, 
                en touchant le plus grand nombre de familles et en renforçant la solidarité communautaire.
              </p>
            </div>
          </div>

          {/* Valeurs */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Nos Valeurs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valeurs.map((valeur, index) => {
                const IconComponent = valeur.icon
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all hover:shadow-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">{valeur.title}</h4>
                    <p className="text-gray-600">{valeur.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bureau exécutif */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Bureau Exécutif</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rencontrez les membres de notre équipe dirigeante, dévoués à servir notre communauté
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E90FF] to-[#FFA500] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {bureauExecutif.map((membre, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={membre.photo}
                    alt={membre.nom}
                    className="w-full h-64 object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{membre.nom}</h3>
                  <p className="text-[#1E90FF] font-medium mb-3">{membre.role}</p>
                  <p className="text-sm text-gray-600">{membre.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs et Engagements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Nos Objectifs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E90FF] to-[#FFA500] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Accompagnement</h3>
              <p className="text-gray-600">
                Accompagner chaque adhérent dans ses démarches de santé avec bienveillance et professionnalisme
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFA500] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Qualité</h3>
              <p className="text-gray-600">
                Offrir un service de qualité avec des garanties adaptées et des remboursements rapides
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E90FF] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Solidarité</h3>
              <p className="text-gray-600">
                Renforcer les liens de solidarité au sein de notre communauté chrétienne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Règlement */}
      <section className="py-20 bg-gradient-to-br from-[#1E90FF] to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Règlement Intérieur</h2>
            <p className="text-gray-100 mb-8 text-lg">
              Téléchargez le règlement intérieur de la MUCHRE-CI pour connaître tous les détails 
              de notre fonctionnement et de nos conditions.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFA500] text-white rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
              <Download size={20} />
              Télécharger le PDF
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Prêt à nous rejoindre ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez la MUCHRE-CI et bénéficiez d'une protection santé solidaire adaptée à vos besoins.
          </p>
          <Link
            to="/adhesion"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E90FF] text-white rounded-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Adhérer maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Presentation

