import { Bell, AlertCircle, CheckCircle, Info } from 'lucide-react'

const iconMap = {
  info: Info,
  warning: AlertCircle,
  success: CheckCircle,
  default: Bell
}

function NotificationBadge({ type = 'default', message, onClose }) {
  const Icon = iconMap[type]
  const colors = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    warning: 'bg-orange-50 text-orange-800 border-orange-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    default: 'bg-gray-50 text-gray-800 border-gray-200'
  }

  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg border ${colors[type]} mb-4`}>
      <Icon size={20} />
      <p className="flex-1 text-sm font-medium">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Fermer"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default NotificationBadge

