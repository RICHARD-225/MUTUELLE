function DashboardCard({ title, value, icon: Icon, subtitle, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        {Icon && (
          <div className="p-3 bg-blue-50 rounded-lg">
            <Icon className="text-[#1E90FF]" size={24} />
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  )
}

export default DashboardCard

