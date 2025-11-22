import { useState } from 'react'
import { Users, CreditCard, FileText, TrendingUp, Download, Search } from 'lucide-react'
import DashboardCard from '../components/DashboardCard'
import ButtonPrimary from '../components/ButtonPrimary'

function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const adherents = [
    { id: 1, nom: 'KOUASSI', prenom: 'Jean', email: 'jean@example.com', date: '2023-01-15', formule: 'Individuel' },
    { id: 2, nom: 'DIALLO', prenom: 'Marie', email: 'marie@example.com', date: '2023-02-20', formule: 'Couple' },
    { id: 3, nom: 'YAO', prenom: 'Pierre', email: 'pierre@example.com', date: '2023-03-10', formule: 'Famille' }
  ]

  const paiements = [
    { id: 1, adherent: 'Jean KOUASSI', montant: 5000, date: '2024-01-15', statut: 'Payé' },
    { id: 2, adherent: 'Marie DIALLO', montant: 5000, date: '2024-02-15', statut: 'En attente' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Espace Administrateur</h1>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Adhérents"
            value="1,234"
            subtitle="+12% ce mois"
            icon={Users}
          />
          <DashboardCard
            title="Paiements"
            value="6,170,000"
            subtitle="FCFA ce mois"
            icon={CreditCard}
          />
          <DashboardCard
            title="Prestations"
            value="45"
            subtitle="Ce mois"
            icon={FileText}
          />
          <DashboardCard
            title="Taux de croissance"
            value="+15%"
            subtitle="Cette année"
            icon={TrendingUp}
          />
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {['dashboard', 'adherents', 'paiements', 'prestations', 'rapports'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-[#1E90FF] text-[#1E90FF]'
                      : 'border-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Gestion Adhérents */}
            {activeTab === 'adherents' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Gestion des Adhérents</h2>
                  <div className="flex gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Rechercher..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                      />
                    </div>
                    <ButtonPrimary>
                      <Download className="mr-2" size={20} />
                      Exporter CSV
                    </ButtonPrimary>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nom</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Formule</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {adherents.map((adherent) => (
                        <tr key={adherent.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-600">{adherent.id}</td>
                          <td className="px-4 py-3 text-sm font-medium text-gray-800">
                            {adherent.nom} {adherent.prenom}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">{adherent.email}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{adherent.date}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{adherent.formule}</td>
                          <td className="px-4 py-3">
                            <button className="text-[#1E90FF] hover:underline text-sm mr-4">
                              Voir
                            </button>
                            <button className="text-red-600 hover:underline text-sm">
                              Supprimer
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Gestion Paiements */}
            {activeTab === 'paiements' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Gestion des Paiements</h2>
                  <ButtonPrimary>
                    <Download className="mr-2" size={20} />
                    Exporter PDF
                  </ButtonPrimary>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Adhérent</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Montant</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Statut</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {paiements.map((paiement) => (
                        <tr key={paiement.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-600">{paiement.id}</td>
                          <td className="px-4 py-3 text-sm font-medium text-gray-800">{paiement.adherent}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-gray-800">
                            {paiement.montant.toLocaleString()} FCFA
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">{paiement.date}</td>
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
                              Voir détails
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Autres onglets */}
            {activeTab === 'dashboard' && (
              <div className="text-center py-12">
                <p className="text-gray-600">Vue d'ensemble du tableau de bord</p>
              </div>
            )}

            {activeTab === 'prestations' && (
              <div className="text-center py-12">
                <p className="text-gray-600">Gestion des prestations</p>
              </div>
            )}

            {activeTab === 'rapports' && (
              <div className="text-center py-12">
                <p className="text-gray-600">Rapports et statistiques</p>
                <ButtonPrimary className="mt-4">
                  <Download className="mr-2" size={20} />
                  Générer rapport
                </ButtonPrimary>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin

