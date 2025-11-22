import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import heroImage from '/mutuelle-intercommunale.jpg'
import heroBackground from '/fond0.jpg'

function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center bg-gradient-to-br from-[#1E90FF] via-blue-600 to-blue-700 text-white overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Fond MUCHRE-CI"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      {/* Effets décoratifs animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFA500]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Overlay léger */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="flex flex-col items-center text-center gap-10">
          {/* Texte */}
          <div className="space-y-8 animate-fadeIn max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/30">
              ✨ Protection santé solidaire
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Avec la MUCHRE-CI, c'est la{' '}
              <span className="text-[#FFA500] relative inline-block">
                solidarité
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#FFA500]/30 rounded-full"></span>
              </span>{' '}
              au service de tous
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-xl">
              Rejoignez la Mutuelle Chrétienne de Côte d'Ivoire et bénéficiez 
              d'une <strong>protection santé solidaire</strong> adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center">
              <Link
                to="/adhesion"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#FFA500] to-orange-500 text-white rounded-2xl font-bold text-lg hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/60 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Adhérer maintenant
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
                </span>
              </Link>
              <Link
                to="/login"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/15 backdrop-blur-md text-white rounded-2xl font-bold text-lg hover:bg-white/25 transition-all shadow-xl hover:shadow-2xl border-2 border-white/30 hover:border-white/50"
              >
                <span className="relative z-10">Se connecter</span>
              </Link>
            </div>
            
            {/* Points clés rapides */}
            {/* <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-[#FFA500] rounded-full"></div>
                <span>Adhésion simple</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-[#FFA500] rounded-full"></div>
                <span>Garanties adaptées</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-[#FFA500] rounded-full"></div>
                <span>Support 24/7</span>
              </div>
            </div> */}
          </div>

          {/* Image avec effet */}
          {/* <div className="hidden lg:block relative z-10">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FFA500]/20 to-transparent rounded-3xl blur-3xl transform rotate-6 -z-10"></div>
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Solidarité MUCHRE-CI"
                className="rounded-3xl shadow-2xl w-full h-auto border-4 border-white/30"
              />
              <div className="absolute -bottom-8 -right-8 bg-white text-[#1E90FF] p-4 rounded-3xl shadow-2xl border-4 border-[#1E90FF]/20 z-20">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-base font-semibold">Adhérents</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

