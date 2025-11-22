import { Heart, Users, Shield, Handshake } from 'lucide-react'

const icons = {
  heart: Heart,
  users: Users,
  shield: Shield,
  handshake: Handshake
}

function CardMission({ icon, title, description }) {
  const IconComponent = icons[icon] || Heart

  return (
    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-[#1E90FF]/30 relative overflow-hidden flex flex-col items-center text-center">
      {/* Effet de fond au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1E90FF] via-[#4f9bff] to-[#FFA500] rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl border border-white/20">
          <IconComponent className="text-white drop-shadow-lg" size={36} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#1E90FF] transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
      </div>
    </div>
  )
}

export default CardMission

