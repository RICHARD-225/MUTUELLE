import { useState } from 'react'
import { User, CreditCard, Bell, FileText, Upload, Calendar } from 'lucide-react'
import DashboardCard from '../components/DashboardCard'
import NotificationBadge from '../components/NotificationBadge'
import ButtonPrimary from '../components/ButtonPrimary'
import communaute1 from '/communaute1.png'

function Dashboard() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'warning', message: 'Votre cotisation du mois est en attente de paiement' },
    { id: 2, type: 'info', message: 'Nouvelle prestation disponible : Consultation médicale' }
  ])

  const paiements = [
    { id: 1, date: '2024-01-15', montant: 5000, statut: 'Payé', type: 'Cotisation mensuelle' },
    { id: 2, date: '2024-02-15', montant: 5000, statut: 'En attente', type: 'Cotisation mensuelle' }
  ]

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Mon Espace Adhérent</h1>

        {/* Profil */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={communaute1}
                alt="Photo de profil"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#1E90FF]"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-[#1E90FF] text-white rounded-full hover:bg-blue-600 transition-colors">
                <Upload size={16} />
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Jean KOUASSI</h2>
              <p className="text-gray-600 mb-4">Adhérent depuis janvier 2023</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div>
                  <span className="text-sm text-gray-500">Numéro d'adhérent</span>
                  <p className="font-semibold text-[#1E90FF]">MUCHRE-2023-001</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Formule</span>
                  <p className="font-semibold">Individuel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        {notifications.length > 0 && (
          <div className="mb-8">
            {notifications.map(notif => (
              <NotificationBadge
                key={notif.id}
                type={notif.type}
                message={notif.message}
                onClose={() => removeNotification(notif.id)}
              />
            ))}
          </div>
        )}

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard
            title="Cotisations payées"
            value="12"
            subtitle="Sur 12 mois"
            icon={CreditCard}
          />
          <DashboardCard
            title="Prestations utilisées"
            value="3"
            subtitle="Cette année"
            icon={FileText}
          />
          <DashboardCard
            title="Notifications"
            value={notifications.length}
            subtitle="Non lues"
            icon={Bell}
          />
        </div>

        {/* Historique des paiements */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <CreditCard className="text-[#1E90FF]" size={24} />
              Historique des paiements
            </h2>
            <ButtonPrimary onClick={() => window.location.href = '/paiement'}>
              Effectuer un paiement
            </ButtonPrimary>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Montant</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Statut</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paiements.map((paiement) => (
                  <tr key={paiement.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-600">{paiement.date}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{paiement.type}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-800">
                      {paiement.montant.toLocaleString()} FCFA
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        paiement.statut === 'Payé'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {paiement.statut}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-[#1E90FF] hover:underline text-sm">
                        Voir reçu
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Demande de prestation */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FileText className="text-[#1E90FF]" size={24} />
            Demande de prestation
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de prestation
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent">
                <option>Sélectionner un type</option>
                <option>Consultation médicale</option>
                <option>Hospitalisation</option>
                <option>Médicaments</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                placeholder="Décrivez votre demande..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pièces jointes
              </label>
              <input
                type="file"
                multiple
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
              />
            </div>
            <ButtonPrimary type="submit">Soumettre la demande</ButtonPrimary>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

