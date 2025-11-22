import { useState } from 'react'
import { CreditCard, Download, CheckCircle } from 'lucide-react'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'

function Paiement() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    type: 'cotisation',
    montant: '',
    methode: 'mobile-money',
    numero: '',
    operateur: 'mtn'
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Intégrer avec API Mobile Money
    setStep(3)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Paiement
        </h1>

        {step === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <CreditCard className="text-[#1E90FF]" size={28} />
              Sélectionner le type de paiement
            </h2>
            <div className="space-y-4">
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#1E90FF] transition-colors">
                <input
                  type="radio"
                  name="type"
                  value="cotisation"
                  checked={formData.type === 'cotisation'}
                  onChange={handleChange}
                  className="mr-4 text-[#1E90FF]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">Cotisation mensuelle</h3>
                  <p className="text-sm text-gray-600">Paiement de votre cotisation régulière</p>
                </div>
                <span className="font-bold text-[#1E90FF]">5 000 FCFA</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#1E90FF] transition-colors">
                <input
                  type="radio"
                  name="type"
                  value="adhesion"
                  checked={formData.type === 'adhesion'}
                  onChange={handleChange}
                  className="mr-4 text-[#1E90FF]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">Frais d'adhésion</h3>
                  <p className="text-sm text-gray-600">Paiement initial pour devenir adhérent</p>
                </div>
                <span className="font-bold text-[#1E90FF]">10 000 FCFA</span>
              </label>
            </div>
            <div className="mt-6 flex justify-end">
              <ButtonPrimary onClick={() => setStep(2)}>
                Continuer
              </ButtonPrimary>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Méthode de paiement</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Méthode
                </label>
                <select
                  name="methode"
                  value={formData.methode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                >
                  <option value="mobile-money">Mobile Money</option>
                  <option value="virement">Virement bancaire</option>
                  <option value="especes">Espèces</option>
                </select>
              </div>

              {formData.methode === 'mobile-money' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Opérateur
                    </label>
                    <select
                      name="operateur"
                      value={formData.operateur}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                    >
                      <option value="mtn">MTN Mobile Money</option>
                      <option value="moov">Moov Money</option>
                      <option value="orange">Orange Money</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      name="numero"
                      value={formData.numero}
                      onChange={handleChange}
                      placeholder="07 XX XX XX XX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                      required
                    />
                  </div>
                </>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Montant à payer</span>
                  <span className="text-2xl font-bold text-[#1E90FF]">
                    {formData.type === 'cotisation' ? '5 000' : '10 000'} FCFA
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <ButtonSecondary onClick={() => setStep(1)} type="button" className="flex-1">
                  Retour
                </ButtonSecondary>
                <ButtonPrimary type="submit" className="flex-1">
                  Payer maintenant
                </ButtonPrimary>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Paiement réussi !</h2>
            <p className="text-gray-600 mb-6">
              Votre paiement a été traité avec succès. Un reçu a été généré.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonPrimary onClick={() => {/* TODO: Télécharger PDF */}}>
                <Download className="mr-2" size={20} />
                Télécharger le reçu
              </ButtonPrimary>
              <ButtonSecondary onClick={() => window.location.href = '/dashboard'}>
                Retour au tableau de bord
              </ButtonSecondary>
            </div>
          </div>
        )}

        {/* Historique des paiements */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Historique des paiements</h2>
          <div className="space-y-4">
            {[
              { date: '2024-01-15', type: 'Cotisation', montant: 5000, statut: 'Payé' },
              { date: '2024-02-15', type: 'Cotisation', montant: 5000, statut: 'En attente' }
            ].map((paiement, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">{paiement.type}</p>
                  <p className="text-sm text-gray-600">{paiement.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{paiement.montant.toLocaleString()} FCFA</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    paiement.statut === 'Payé'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {paiement.statut}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paiement

