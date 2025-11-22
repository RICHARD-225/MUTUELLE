import pictoMoi from '/picto-moi.svg'
import pictoConjointMoi from '/picto-conjoint-moi.svg'
import picto3 from '/picto-3.svg'
import picto4 from '/picto-4.svg'

function Services() {
  const services = [
    {
      icon: pictoMoi,
      title: "Pour moi",
      description: "Des garanties adaptées à vos besoins personnels avec une couverture santé complète."
    },
    {
      icon: pictoConjointMoi,
      title: "Pour moi et mon conjoint",
      description: "Protection complète pour vous et votre conjoint(e) avec des tarifs avantageux."
    },
    {
      icon: picto3,
      title: "Formule famille",
      description: "Protégez toute votre famille avec une formule adaptée incluant vos enfants."
    },
    {
      icon: picto4,
      title: "Accompagnement personnalisé",
      description: "Un conseiller dédié pour vous accompagner dans vos démarches et répondre à vos questions."
    }
  ]

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">Nos formules</h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#1E90FF] to-[#FFA500] mx-auto rounded-full mb-6"></div>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-xl">
          Choisissez la formule qui correspond le mieux à vos besoins et à ceux de votre famille.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-3 border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-[#1E90FF] to-blue-600 rounded-full p-4">
                  <img src={service.icon} alt={service.title} className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


