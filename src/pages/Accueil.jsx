import HeroSection from '../components/HeroSection'
import CardMission from '../components/CardMission'
import Services from '../components/Services'
import { Users, MessageSquare, Award, TrendingUp, Calendar, CheckCircle2, ChevronDown, ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import cond1 from '/cond1.jpg'
import cond2 from '/cond2.jpg'
import cond3 from '/cond3.jpg'


function Accueil() {
  const [openFaq, setOpenFaq] = useState(null)

  const missions = [
    {
      icon: 'heart',
      title: 'Solidarité',
      description: 'Nous croyons en la force de la solidarité pour accompagner chacun dans ses besoins de santé.'
    },
    {
      icon: 'users',
      title: 'Entraide',
      description: 'Un réseau d\'entraide qui vous soutient dans les moments difficiles avec bienveillance.'
    },
    {
      icon: 'shield',
      title: 'Protection',
      description: 'Des garanties adaptées pour protéger votre santé et celle de vos proches.'
    },
    {
      icon: 'handshake',
      title: 'Engagement',
      description: 'Un engagement fort envers nos adhérents pour un service de qualité et accessible.'
    }
  ]

  const temoignages = [
    {
      nom: 'Marie K.',
      role: 'Adhérente depuis 2020',
      texte: 'La MUCHRE-CI m\'a accompagnée dans des moments difficiles. Je recommande vivement !'
    },
    {
      nom: 'Jean B.',
      role: 'Adhérent depuis 2019',
      texte: 'Un service client réactif et une vraie solidarité. Merci pour tout.'
    },
    {
      nom: 'Sophie T.',
      role: 'Adhérente depuis 2021',
      texte: 'Les garanties sont adaptées à mes besoins et les cotisations raisonnables.'
    }
  ]

  const statistiques = [
    { nombre: '450+', label: 'Adhérents actifs', icon: Users },
    { nombre: '2+', label: 'Années d\'expérience', icon: Calendar },
    { nombre: '98%', label: 'Satisfaction client', icon: TrendingUp },
    { nombre: '24/24', label: 'Support disponible', icon: CheckCircle2 }
  ]

  const faqs = [
    {
      question: 'Comment adhérer à la MUCHRE-CI ?',
      reponse: 'Pour adhérer, il suffit de remplir le formulaire d\'adhésion en ligne, fournir les documents requis (CNI, photo) et payer la cotisation d\'adhésion. Le processus est simple et rapide.'
    },
    {
      question: 'Quels sont les avantages de la mutuelle ?',
      reponse: 'La MUCHRE-CI offre une protection santé solidaire avec des garanties adaptées, un réseau d\'entraide, un accompagnement personnalisé et des cotisations raisonnables.'
    },
    {
      question: 'Comment fonctionne le remboursement ?',
      reponse: 'Après une consultation ou un soin médical, vous pouvez faire une demande de remboursement via votre espace adhérent. Les remboursements sont traités rapidement selon votre garantie.'
    },
    {
      question: 'Puis-je adhérer avec ma famille ?',
      reponse: 'Oui, vous pouvez adhérer seul(e) ou avec votre conjoint(e) et vos enfants. Des formules familiales sont disponibles avec des tarifs avantageux.'
    },
    {
      question: 'Quels documents sont nécessaires ?',
      reponse: 'Vous devez fournir une copie de votre CNI (Carte Nationale d\'Identité), une photo d\'identité récente, et remplir le formulaire d\'adhésion avec vos informations personnelles.'
    }
  ]

  return (
    <div className="page-fade-in">
      <HeroSection />

      {/* Statistiques */}
      <section className="flex justify-center items-center py-16 bg-gradient-to-br from-[#1E90FF] via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center">
            <div className="text-center mb-16"><br />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos chiffres en bref</h2> 
              <div className="w-32 h-1.5 bg-[#FFA500] mx-auto rounded-full mb-2"></div>
              <br />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-5xl mx-auto place-items-center">
              {statistiques.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div 
                    key={index} 
                    className="text-center transform hover:scale-110 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:shadow-2xl"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-white/20 rounded-full p-4 transform hover:rotate-12 transition-transform">
                        <IconComponent size={32} />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                      {stat.nombre}
                    </div>
                    <div className="text-gray-200 text-sm md:text-base font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-32 bg-gradient-to-br from-[#1E90FF] via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
          <br />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos chiffres en bref</h2>
            <br />
            <div className="w-32 h-1.5 bg-[#FFA500] mx-auto rounded-full mb-2"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-5xl mx-auto place-items-center">
            {statistiques.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={index} 
                  className="text-center transform hover:scale-110 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:shadow-2xl"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/20 rounded-full p-4 transform hover:rotate-12 transition-transform">
                      <IconComponent size={32} />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                    {stat.nombre}
                  </div>
                  <div className="text-gray-200 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
        <br />
      </section> */}
      <br />

      {/* Nos missions */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Nos <span className="text-[#1E90FF]">missions</span>
            </h2>
            <br />
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#1E90FF] to-[#FFA500] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La MUCHRE-CI s'engage à offrir une protection santé solidaire et accessible à tous.
            </p>
          </div>
          <div className="flex justify-center" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl w-full place-items-center">
              {missions.map((mission, index) => (
                <CardMission key={index} {...mission} />
              ))}
            </div>
          </div>
        </div>
        <br />
      </section>

      {/* Nos conditions */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E90FF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  Conditions d'<span className="text-[#1E90FF]">adhésion</span>
                </h2>
                <br />
                <div className="w-32 h-1.5 bg-gradient-to-r from-[#1E90FF] to-[#FFA500] mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Rejoignez-nous en <span className="text-[#1E90FF] font-semibold">quelques étapes simples</span> et profitez d'une communauté solidaire.
              </p>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform shadow-lg">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700 text-lg pt-1">Être de confession chrétienne ou partager nos valeurs</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform shadow-lg">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700 text-lg pt-1">Résider en Côte d'Ivoire</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform shadow-lg">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700 text-lg pt-1">Fournir les documents requis (CNI, photo)</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform shadow-lg">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700 text-lg pt-1">Payer la cotisation d'adhésion</span>
                </li>
              </ul>
              <br />
              <Link
                to="/adhesion"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FFA500] to-orange-500 text-white rounded-2xl font-bold text-lg hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/60 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Adhérer maintenant
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
                </span>
              </Link>
            </div>
            <div className="relative z-10 max-w-xl">
              <div className="grid grid-cols-3 gap-5">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <img src={cond1} alt="Communauté" className="rounded-2xl shadow-2xl w-full h-72 object-cover border-4 border-white" />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300 mt-12">
                  <img src={cond2} alt="Communauté" className="rounded-2xl shadow-2xl w-full h-72 object-cover border-4 border-white" />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300 mt-12">
                  <img src={cond3} alt="Communauté" className="rounded-2xl shadow-2xl w-full h-72 object-cover border-4 border-white" />
                </div>
              </div>
              {/* <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border-4 border-[#1E90FF]/20 z-20">
                <div className="text-4xl font-bold text-[#1E90FF]">10+</div>
                <div className="text-base font-semibold text-gray-600">Années d'expérience</div>
              </div> */}
            </div>
          </div>
        </div>
        <br />
      </section>

      {/* Témoignages */}
      <section className="py-32 bg-gradient-to-br from-[#1E90FF] via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
            <br />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ce que disent nos adhérents</h2>
            <br />
            <div className="w-32 h-1.5 bg-[#FFA500] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-200 text-xl">Découvrez les témoignages de ceux qui nous font confiance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto place-items-center">
            {temoignages.map((temoignage, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <Quote className="text-[#FFA500] mb-4" size={32} />
                <p className="text-gray-100 text-lg leading-relaxed mb-6 italic">"{temoignage.texte}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFA500] to-orange-500 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{temoignage.nom}</h4>
                    <p className="text-sm text-gray-300">{temoignage.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </section>
      <br />
      {/* Services */}
      <Services />

      {/* FAQ */}
      <br />
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Questions <span className="text-[#1E90FF]">fréquentes</span>
            </h2> 
            <br />
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#1E90FF] to-[#FFA500] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions les plus courantes.
            </p>
          </div>
          <div className="max-w-3xl  mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden transition-all hover:border-[#1E90FF]/50 hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all"
                >
                  <span className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`text-[#1E90FF] transition-all flex-shrink-0 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button> 
                {openFaq === index && (
                  <div className="px-6 py-5 text-gray-700 border-t border-gray-100 bg-gradient-to-br from-blue-50/50 to-transparent animate-fadeIn leading-relaxed">
                    {faq.reponse}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <br />
      </section>

      {/* Contact rapide */}
      
      <section className="py-32 bg-gradient-to-br from-[#1E90FF] via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
          <br />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Besoin d'aide ?</h2>
           <br />
          <p className="text-xl text-gray-100 mb-16 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
          <br />
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/contact"
              className="group relative px-12 py-5 bg-white text-[#1E90FF] rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#1E90FF]/0 via-[#1E90FF]/10 to-[#1E90FF]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative z-10 flex items-center gap-3">
                <MessageSquare size={24} />
                Nous contacter
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </span>
            </Link>
            <Link
              to="/adhesion"
              className="group relative px-12 py-5 bg-gradient-to-r from-[#FFA500] to-orange-500 text-white rounded-2xl font-bold text-lg hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/60 inline-flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative z-10 flex items-center gap-3">
                <Award size={24} />
                Devenir adhérent
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accueil

