import { useState, useEffect } from 'react'
import { Upload, Check, Shield, Users, FileText, CreditCard, UserCheck, Mail, Phone, MapPin, Briefcase, Calendar, Clock, Globe, IdCard, Heart, ExternalLink, X, Plus, Lock } from 'lucide-react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import logo from '/logo.png'
import backgroundImage from '/con1.jpg'

const emptyAyantDroit = () => ({
  lien: '',
  nomPrenoms: '',
  dateNaissance: '',
  lieuResidence: ''
})

function FormAdhesion() {
  const [step, setStep] = useState(1)
  const [mobileSubStep, setMobileSubStep] = useState(1) // 1 = Informations civiles, 2 = Coordonnées
  const [mobileSubStep3, setMobileSubStep3] = useState(1) // 1 = Ayants droit, 2 = Paiement
  const [formData, setFormData] = useState(() => ({
    nom: '',
    prenom: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dateNaissance: '',
    lieuNaissance: '',
    nationalite: '',
    numeroCNI: '',
    profession: '',
    situationMatrimoniale: '',
    lieuHabitation: '',
    cni: null,
    photo: null,
    montant: '',
    methodePaiement: '',
    confirmEngagement: false,
    ayantsDroit: [emptyAyantDroit()]
  }))

  const [errors, setErrors] = useState({})
  const [showEngagementModal, setShowEngagementModal] = useState(false)

  // Réinitialiser mobileSubStep quand on change de step
  useEffect(() => {
    if (step !== 1) {
      setMobileSubStep(1)
    }
    if (step !== 3) {
      setMobileSubStep3(1)
    }
  }, [step])

  const labelRequired = 'text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-2 sm:mb-3 flex items-center gap-1 sm:gap-1.5'
  const labelDefault = 'text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-2 sm:mb-3'
  const inputBase =
    'w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 border border-gray-200 rounded-lg sm:rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-[#1E90FF] focus:ring-offset-1 sm:focus:ring-offset-2 focus:border-[#1E90FF] focus:bg-white focus:shadow-lg text-gray-900 placeholder:text-gray-400 hover:border-gray-300 text-sm sm:text-base'
  const errorText = 'text-xs sm:text-sm text-red-500 mt-1.5 sm:mt-2 flex items-center gap-1 sm:gap-1.5'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e, field) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }))
    }
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleAyantDroitChange = (index, field, value) => {
    const updated = formData.ayantsDroit.map((ayant, i) => (i === index ? { ...ayant, [field]: value } : ayant))
    setFormData((prev) => ({ ...prev, ayantsDroit: updated }))
  }

  const handleResetAyantDroit = (index) => {
    const updated = formData.ayantsDroit.map((ayant, i) => (i === index ? emptyAyantDroit() : ayant))
    setFormData((prev) => ({ ...prev, ayantsDroit: updated }))
  }

  const handleAddAyantDroit = () => {
    if (formData.ayantsDroit.length < 3) {
      setFormData((prev) => ({
        ...prev,
        ayantsDroit: [...prev.ayantsDroit, emptyAyantDroit()]
      }))
    }
  }

  const handlePrintClauses = () => {
    window.print()
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.nom) newErrors.nom = 'Le nom est requis'
    if (!formData.prenom) newErrors.prenom = 'Le prénom est requis'
    if (!formData.email) newErrors.email = "L'email est requis"
    if (!formData.phone) newErrors.phone = 'Le téléphone est requis'
    if (!formData.password) newErrors.password = 'Le mot de passe est requis'
    if (formData.password && formData.password.length < 6) newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères'
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Veuillez confirmer votre mot de passe'
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas'
    }
    if (!formData.nationalite) newErrors.nationalite = 'La nationalité est requise'
    if (!formData.numeroCNI) newErrors.numeroCNI = 'Le numéro de CNI est requis'
    if (!formData.profession) newErrors.profession = 'La fonction est requise'
    if (!formData.situationMatrimoniale) newErrors.situationMatrimoniale = 'La situation matrimoniale est requise'
    if (!formData.lieuHabitation) newErrors.lieuHabitation = "Le lieu d'habitation est requis"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.cni) newErrors.cni = 'La CNI est requise'
    if (!formData.photo) newErrors.photo = 'La photo est requise'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors = {}
    if (!formData.methodePaiement) newErrors.methodePaiement = 'Sélectionnez une méthode de paiement'
    if (!formData.confirmEngagement) newErrors.confirmEngagement = 'Vous devez accepter les clauses'
    setErrors((prev) => ({ ...prev, ...newErrors }))
    return Object.keys(newErrors).length === 0
  }

  const getCurrentDateFormatted = () => {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const getCurrentTimeFormatted = () => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}h${minutes}min`
  }

  const generateDossierNumber = () => {
    const date = new Date()
    const year = date.getFullYear()
    const random = Math.floor(Math.random() * 900) + 100
    return `${random}/MCCI`
  }

  const handlePrint = () => {
    window.print()
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep3()) return
    // TODO: Intégrer avec Firebase
    console.log('Données du formulaire:', formData)
    alert('Formulaire soumis avec succès! (À intégrer avec Firebase)')
  }


  const stepsList = [
    { id: 1, title: 'Tête de liste', subtitle: 'Fiche & informations civiles' },
    { id: 2, title: 'Documents requis', subtitle: "CNI et photo d'identité" },
    { id: 3, title: 'Engagement & paiement', subtitle: 'Clauses et signature' }
  ]

  return (
    <div className="min-h-screen pt-8 pb-4 sm:pt-12 sm:pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-12 relative overflow-hidden flex items-center justify-center">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>
      </div>
      
      {/* Effets de fond décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>
      
        <div className="max-w-6xl w-full mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-0 relative z-10 my-auto">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            {/* Logo avec dégradé */}
            <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E90FF] via-[#4169E1] to-indigo-600 rounded-full blur-lg opacity-60"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 md:p-3 rounded-full shadow-2xl border-2 border-white/50">
                  <img src={logo} alt="MUCHRE-CI Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain" style={{ filter: 'drop-shadow(0 0 8px rgba(30, 144, 255, 0.5))' }} />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 bg-gradient-to-r from-[#1E90FF] via-[#4169E1] to-indigo-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full shadow-2xl mb-3 sm:mb-4 md:mb-6 uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[9px] sm:text-[10px] md:text-xs font-bold backdrop-blur-sm">
              <Shield size={12} className="sm:w-[14px] sm:h-[14px] md:w-[18px] md:h-[18px] animate-pulse" />
              MUCHRE-CI
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 drop-shadow-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(59, 130, 246, 0.6), 0 0 40px rgba(99, 102, 241, 0.4)' }}>
              Fiche d'inscription & d'engagement
            </h1>
            <p className="text-white max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg font-semibold drop-shadow-lg px-2 sm:px-3" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
              Complétez votre dossier en suivant les étapes successives. Les champs marqués d'un
              <span className="text-yellow-300 font-bold mx-1 drop-shadow-lg">*</span> sont obligatoires.
            </p>
          </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 shadow-xl p-4 sm:p-5 md:p-6 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col sticky top-4 sm:top-6 md:top-8">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 font-bold mb-4 sm:mb-6">Progression</p>
            <div className="relative flex-1 flex flex-col">
              {/* Barre de progression verticale - étendue sur toute la hauteur */}
              <div className="absolute left-4 sm:left-5 md:left-6 top-0 bottom-0 w-0.5 sm:w-1 bg-gray-200 rounded-full">
                <div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-500 via-[#1E90FF] to-[#1E90FF] rounded-full transition-all duration-500 ease-out"
                  style={{
                    height: step === 1 ? '0%' : step === 2 ? '50%' : '100%'
                  }}
                ></div>
              </div>

              <ol className="space-y-6 sm:space-y-8 md:space-y-12 relative flex-1 flex flex-col justify-between">
                {stepsList.map((item, index) => {
                  const isActive = step === item.id
                  const isDone = step > item.id
                  const isPending = step < item.id
                  return (
                    <li key={item.id} className="relative flex-shrink-0">
                      <div
                        className={`w-full flex items-start gap-4 rounded-2xl border-2 px-5 py-5 transition-all duration-300 ${
                          isActive
                            ? 'border-[#1E90FF] bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg'
                            : isDone
                            ? 'border-green-200 bg-green-50/50'
                            : 'border-gray-200 bg-white/50 opacity-60'
                        }`}
                      >
                        <div className="relative z-10">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                              isDone
                                ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
                                : isActive
                                  ? 'bg-gradient-to-br from-[#1E90FF] to-[#4169E1] text-white shadow-lg ring-4 ring-blue-200'
                                  : 'bg-gray-100 text-gray-400'
                            }`}
                          >
                            {isDone ? <Check size={20} className="animate-bounce" /> : item.id}
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className={`text-sm font-bold ${isActive ? 'text-[#1E90FF]' : isDone ? 'text-green-700' : 'text-gray-600'}`}>
                            {item.title}
                          </p>
                          <p className={`text-xs mt-0.5 ${isActive ? 'text-blue-600' : isDone ? 'text-green-600' : 'text-gray-500'}`}>
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>

            <div className="mt-auto p-5 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border border-blue-100/50 backdrop-blur-sm text-sm text-gray-700 shadow-inner">
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Les informations saisies doivent correspondre exactement aux pièces jointes. Utilisez un navigateur récent pour
                  garantir l'expérience optimale.
                </p>
          </div>
            </div>
          </aside>

          {/* Barre de progression mobile */}
          <div className="lg:hidden mb-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-4 text-center">Progression</p>
            <div className="relative">
              {/* Barre de progression horizontale */}
              <div className="h-1 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-green-500 via-[#1E90FF] to-[#1E90FF] rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: step === 1 ? '33%' : step === 2 ? '66%' : '100%'
                  }}
                ></div>
              </div>
              <div className="flex justify-between mt-3">
                {stepsList.map((item) => {
                  const isActive = step === item.id
                  const isDone = step > item.id
                  return (
                    <div key={item.id} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                          isDone
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
                            : isActive
                              ? 'bg-gradient-to-br from-[#1E90FF] to-[#4169E1] text-white shadow-lg ring-2 ring-blue-200'
                              : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {isDone ? <Check size={14} /> : item.id}
                      </div>
                      <p className={`text-[10px] mt-1 text-center font-semibold ${isActive ? 'text-[#1E90FF]' : isDone ? 'text-green-700' : 'text-gray-500'}`}>
                        {item.title}
                      </p>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {step === 1 && (
              <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fadeIn">
                {/* Section 1 - Informations civiles - Visible sur desktop ou mobile si mobileSubStep === 1 */}
                <div className={`rounded-2xl sm:rounded-3xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-4 sm:mb-6 md:mb-8 ${mobileSubStep === 2 ? 'lg:block hidden' : ''}`}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-gray-50 to-blue-50/50 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-200/50">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#1E90FF] to-indigo-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0">
                      01
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex items-center gap-1.5 sm:gap-2">
                        <IdCard size={18} className="sm:w-5 sm:h-5 text-[#1E90FF] flex-shrink-0" />
                        <span className="truncate">Informations civiles</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 line-clamp-2">Identité complète telle qu'indiquée sur votre CNI.</p>
                    </div>
            </div>
                  <div className={`p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 md:space-y-8 ${mobileSubStep === 2 ? 'lg:block hidden' : ''}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              <div>
                        <label className={labelRequired}>
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                          className={`${inputBase} ${errors.nom ? 'border-red-500 ring-red-100' : ''}`}
                />
                        {errors.nom && <p className={errorText}>{errors.nom}</p>}
              </div>
              <div>
                        <label className={labelRequired}>
                          Prénoms <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                          className={`${inputBase} ${errors.prenom ? 'border-red-500 ring-red-100' : ''}`}
                />
                        {errors.prenom && <p className={errorText}>{errors.prenom}</p>}
              </div>
              <div>
                        <label className={labelDefault}>Date de naissance</label>
                <input
                  type="date"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                          className={inputBase}
                />
              </div>
              <div>
                        <label className={labelDefault}>Lieu de naissance</label>
                <input
                  type="text"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleChange}
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className={labelRequired}>
                          Nationalité <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nationalite"
                          value={formData.nationalite}
                          onChange={handleChange}
                          className={`${inputBase} ${errors.nationalite ? 'border-red-500 ring-red-100' : ''}`}
                        />
                        {errors.nationalite && <p className={errorText}>{errors.nationalite}</p>}
                      </div>
                      <div>
                        <label className={labelRequired}>
                          N° CNI / Passeport <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="numeroCNI"
                          value={formData.numeroCNI}
                          onChange={handleChange}
                          className={`${inputBase} ${errors.numeroCNI ? 'border-red-500 ring-red-100' : ''}`}
                        />
                        {errors.numeroCNI && <p className={errorText}>{errors.numeroCNI}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Séparateur visuel - Visible seulement sur desktop */}
                <div className="hidden lg:flex my-6 sm:my-8 md:my-12 items-center justify-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
                  <div className="mx-3 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#1E90FF] to-indigo-600 shadow-lg"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"></div>
              </div>

                {/* Section 2 - Coordonnées - Visible sur desktop ou mobile si mobileSubStep === 2 */}
                <div className={`rounded-2xl sm:rounded-3xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-4 sm:mb-6 md:mb-8 ${mobileSubStep === 1 ? 'lg:block hidden' : ''}`}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-gray-50 to-blue-50/50 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-200/50">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#1E90FF] to-indigo-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0">
                      02
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex items-center gap-1.5 sm:gap-2">
                        <Mail size={18} className="sm:w-5 sm:h-5 text-[#1E90FF] flex-shrink-0" />
                        <span className="truncate">Coordonnées & statut</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Assurez-vous que les informations correspondent à vos justificatifs.</p>
                    </div>
                  </div>
                  <div className={`p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 md:space-y-8 ${mobileSubStep === 1 ? 'lg:block hidden' : ''}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                      <div>
                        <label className={labelRequired}>
                          Lieu d'habitation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lieuHabitation"
                          value={formData.lieuHabitation}
                          onChange={handleChange}
                          className={`${inputBase} ${errors.lieuHabitation ? 'border-red-500 ring-red-100' : ''}`}
                        />
                        {errors.lieuHabitation && <p className={errorText}>{errors.lieuHabitation}</p>}
                      </div>
              <div>
                        <label className={labelRequired}>
                          Fonction / Profession <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                          className={`${inputBase} ${errors.profession ? 'border-red-500 ring-red-100' : ''}`}
                />
                        {errors.profession && <p className={errorText}>{errors.profession}</p>}
                      </div>
              </div>

              <div>
                      <label className={labelRequired}>
                        Situation matrimoniale <span className="text-red-500">*</span>
                </label>
                <select
                        name="situationMatrimoniale"
                        value={formData.situationMatrimoniale}
                  onChange={handleChange}
                        className={`${inputBase} ${errors.situationMatrimoniale ? 'border-red-500 ring-red-100' : ''}`}
                >
                        <option value="">Sélectionner</option>
                        <option value="celibataire">Célibataire</option>
                        <option value="marie">Marié(e)</option>
                        <option value="veuf">Veuf/Veuve</option>
                        <option value="divorce">Divorcé(e)</option>
                </select>
                      {errors.situationMatrimoniale && <p className={errorText}>{errors.situationMatrimoniale}</p>}
            </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pt-3 sm:pt-4 border-t border-gray-200/50">
                      <div>
                        <label className={labelRequired}>
                          Adresse email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`${inputBase} ${errors.email ? 'border-red-500 ring-red-100' : ''}`}
                        />
                        {errors.email && <p className={errorText}>{errors.email}</p>}
                      </div>
                      <div>
                        <label className={labelRequired}>
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="07 XX XX XX XX"
                          className={`${inputBase} ${errors.phone ? 'border-red-500 ring-red-100' : ''}`}
                        />
                        {errors.phone && <p className={errorText}>{errors.phone}</p>}
                      </div>
                      <div>
                        <label className={labelRequired}>
                          Mot de passe <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Minimum 6 caractères"
                            className={`${inputBase} ${errors.password ? 'border-red-500 ring-red-100' : ''} pr-12`}
                          />
                          <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        {errors.password && <p className={errorText}>{errors.password}</p>}
                      </div>
            <div>
                        <label className={labelRequired}>
                          Confirmer le mot de passe <span className="text-red-500">*</span>
              </label>
                        <div className="relative">
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                onChange={handleChange}
                            placeholder="Répétez le mot de passe"
                            className={`${inputBase} ${errors.confirmPassword ? 'border-red-500 ring-red-100' : ''} pr-12`}
                          />
                          <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        {errors.confirmPassword && <p className={errorText}>{errors.confirmPassword}</p>}
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-gray-500">Ce mot de passe vous permettra de vous connecter à votre espace membre.</p>
                    </div>
                  </div>
            </div>

                {/* Boutons de navigation - Desktop: affiche les deux sections + bouton final */}
                <div className="hidden lg:flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 mt-4 sm:mt-6 md:mt-8">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 bg-white/60 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-200/50 shadow-sm">
                    <Shield className="text-[#1E90FF] flex-shrink-0" size={18} />
                    <span className="font-medium text-[11px] sm:text-xs md:text-sm">Vos données sont protégées et vérifiées par le secrétariat national de la MUCHRE-CI.</span>
                  </div>
                  <ButtonPrimary type="button" onClick={handleNext} className="w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                    Continuer vers les documents
              </ButtonPrimary>
            </div>

                {/* Boutons de navigation mobile - Section 1 */}
                {mobileSubStep === 1 && (
                  <div className="lg:hidden flex flex-col gap-3 pt-4 mt-4">
                    <ButtonPrimary 
                      type="button" 
                      onClick={() => {
                        // Valider les champs de la section 1 avant de continuer
                        const section1Errors = {}
                        if (!formData.nom) section1Errors.nom = 'Le nom est requis'
                        if (!formData.prenom) section1Errors.prenom = 'Le prénom est requis'
                        if (!formData.nationalite) section1Errors.nationalite = 'La nationalité est requise'
                        if (!formData.numeroCNI) section1Errors.numeroCNI = 'Le numéro de CNI est requis'
                        
                        if (Object.keys(section1Errors).length === 0) {
                          setMobileSubStep(2)
                        } else {
                          setErrors((prev) => ({ ...prev, ...section1Errors }))
                        }
                      }} 
                      className="w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                    >
                      Suivant
                    </ButtonPrimary>
                  </div>
                )}

                {/* Boutons de navigation mobile - Section 2 */}
                {mobileSubStep === 2 && (
                  <div className="lg:hidden flex flex-col gap-3 pt-4 mt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-200/50 shadow-sm mb-2">
                      <Shield className="text-[#1E90FF] flex-shrink-0" size={16} />
                      <span className="font-medium text-[11px]">Vos données sont protégées et vérifiées par le secrétariat national de la MUCHRE-CI.</span>
                    </div>
                    <div className="flex gap-3">
                      <ButtonSecondary 
                        type="button" 
                        onClick={() => setMobileSubStep(1)} 
                        className="flex-1 text-sm"
                      >
                        Retour
                      </ButtonSecondary>
                      <ButtonPrimary 
                        type="button" 
                        onClick={handleNext} 
                        className="flex-1 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        Continuer vers les documents
                      </ButtonPrimary>
                    </div>
                  </div>
                )}
          </div>
        )}

        {step === 2 && (
              <div className="space-y-8 animate-fadeIn">
                <div className="rounded-3xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-8">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-gray-50 to-blue-50/50 px-6 md:px-8 py-5 md:py-6 border-b border-gray-200/50">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E90FF] to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                      03
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                        <Upload size={20} className="text-[#1E90FF] flex-shrink-0" />
                        Justificatifs officiels
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">Les fichiers doivent être lisibles, au format PDF ou image (max 5 Mo).</p>
                    </div>
            </div>
            
                  <div className="p-8 md:p-10 space-y-8">
              <div>
                      <label className={labelRequired}>
                        Carte Nationale d'Identité (Recto/Verso) <span className="text-red-500">*</span>
                </label>
                      <div className="mt-3">
                        <div
                          className={`flex flex-col md:flex-row items-center gap-6 border-2 border-dashed rounded-2xl px-10 py-12 text-center transition-all duration-300 transform ${
                  formData.cni 
                              ? 'border-[#1E90FF] bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg scale-[1.02]'
                              : 'border-gray-300 hover:border-[#1E90FF] hover:bg-blue-50/30 hover:scale-[1.02] hover:shadow-md'
                          }`}
                        >
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange(e, 'cni')}
                    className="hidden"
                    id="cni-upload"
                  />
                        <label htmlFor="cni-upload" className="flex flex-col items-center gap-3 cursor-pointer flex-1">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${formData.cni ? 'bg-[#1E90FF]/10' : 'bg-gray-100'}`}>
                            <Upload size={24} className={formData.cni ? 'text-[#1E90FF]' : 'text-gray-400'} />
                    </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {formData.cni ? formData.cni.name : 'Cliquez pour importer votre CNI'}
                    </p>
                            <p className="text-xs text-gray-500">PDF, JPG, PNG – 5 Mo max</p>
                          </div>
                  </label>
                </div>
                      </div>
                      {errors.cni && <p className={errorText}>{errors.cni}</p>}
              </div>

              <div>
                      <label className={labelRequired}>
                        Photo d'identité récente <span className="text-red-500">*</span>
                </label>
                      <div className="mt-3">
                        <div
                          className={`flex flex-col md:flex-row items-center gap-6 border-2 border-dashed rounded-2xl px-10 py-12 text-center transition-all duration-300 transform ${
                  formData.photo 
                              ? 'border-[#1E90FF] bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg scale-[1.02]'
                              : 'border-gray-300 hover:border-[#1E90FF] hover:bg-blue-50/30 hover:scale-[1.02] hover:shadow-md'
                          }`}
                        >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'photo')}
                    className="hidden"
                    id="photo-upload"
                  />
                        <label htmlFor="photo-upload" className="flex flex-col items-center gap-3 cursor-pointer flex-1">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${formData.photo ? 'bg-[#1E90FF]/10' : 'bg-gray-100'}`}>
                            <Upload size={24} className={formData.photo ? 'text-[#1E90FF]' : 'text-gray-400'} />
                    </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {formData.photo ? formData.photo.name : 'Déposez ou sélectionnez votre photo'}
                    </p>
                            <p className="text-xs text-gray-500">Format JPG/PNG uniquement – 5 Mo max</p>
                          </div>
                  </label>
                </div>
                      </div>
                      {errors.photo && <p className={errorText}>{errors.photo}</p>}
                    </div>
              </div>
            </div>

                <div className="flex flex-col md:flex-row justify-between gap-6 pt-8 mt-8">
                  <ButtonSecondary type="button" onClick={() => setStep(1)}>
                    Retour
              </ButtonSecondary>
                  <ButtonPrimary type="button" onClick={handleNext} className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Étape suivante
              </ButtonPrimary>
            </div>
          </div>
        )}

        {step === 3 && (
              <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fadeIn">
                {/* Section Engagement - Visible sur desktop ou mobile si mobileSubStep3 === 2 */}
                <div className={`rounded-2xl sm:rounded-3xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-4 sm:mb-6 md:mb-8 ${mobileSubStep3 === 1 ? 'lg:block hidden' : ''}`}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-gray-50 to-blue-50/50 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-200/50">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#1E90FF] to-indigo-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0">
                      04
            </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex items-center gap-1.5 sm:gap-2">
                        <FileText size={18} className="sm:w-5 sm:h-5 text-[#1E90FF] flex-shrink-0" />
                        <span className="truncate">Engagement du mutualiste</span>
              </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Confirmez votre engagement.</p>
                    </div>
                  </div>
                  <div className={`p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 ${mobileSubStep3 === 1 ? 'lg:block hidden' : ''}`}>
                    <div className="mb-6 p-5 rounded-xl bg-blue-50/50 border border-blue-200/50">
                      <button
                        type="button"
                        onClick={() => setShowEngagementModal(true)}
                        className="flex items-center gap-2 text-[#1E90FF] hover:text-blue-700 font-semibold transition-colors duration-300 group w-full text-left"
                      >
                        <FileText size={18} className="group-hover:scale-110 transition-transform" />
                        <span>Consulter le contenu complet de l'engagement</span>
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform ml-auto" />
                      </button>
                    </div>
                    <label className="flex items-start gap-5 p-6 rounded-2xl border-2 border-gray-200 hover:border-[#1E90FF] transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-blue-50/30">
                      <input
                        type="checkbox"
                        name="confirmEngagement"
                        checked={formData.confirmEngagement}
                        onChange={handleCheckboxChange}
                        className="mt-1 w-6 h-6 rounded border-gray-300 text-[#1E90FF] focus:ring-2 focus:ring-[#1E90FF] focus:ring-offset-2 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="text-base font-semibold text-gray-900 block">
                          Je confirme avoir lu et accepté les clauses essentielles de la MUCHRE-CI.
                        </span>
                        <span className="text-red-500 font-bold text-sm mt-2 block">* Obligatoire</span>
                      </div>
                    </label>
                    {errors.confirmEngagement && (
                      <p className={`${errorText} mt-4`}>{errors.confirmEngagement}</p>
                    )}
                  </div>
                </div>

                {/* Séparateur visuel - Visible seulement sur desktop entre Engagement et Ayants droit */}
                <div className="hidden lg:flex my-6 sm:my-8 md:my-12 items-center justify-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
                  <div className="mx-3 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#1E90FF] to-indigo-600 shadow-lg"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"></div>
                </div>

                {/* Séparateur visuel - Visible seulement sur desktop entre Ayants droit et Paiement */}
                <div className="hidden lg:flex my-6 sm:my-8 md:my-12 items-center justify-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
                  <div className="mx-3 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#1E90FF] to-indigo-600 shadow-lg"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"></div>
                </div>

                {/* Section Ayants droit - Visible sur desktop ou mobile si mobileSubStep3 === 1 */}
                <div className={`rounded-2xl sm:rounded-3xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-4 sm:mb-6 md:mb-8 ${mobileSubStep3 === 2 ? 'lg:block hidden' : ''}`}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-gray-50 to-blue-50/50 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-200/50">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#1E90FF] to-indigo-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0">
                      05
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex items-center gap-1.5 sm:gap-2">
                        <Users size={18} className="sm:w-5 sm:h-5 text-[#1E90FF] flex-shrink-0" />
                        <span className="truncate">Ayants droit (optionnel)</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Renseignez jusqu'à trois personnes rattachées à votre dossier (optionnel).</p>
                    </div>
                  </div>
                  <div className={`p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 ${mobileSubStep3 === 2 ? 'lg:block hidden' : ''}`}>
                    {formData.ayantsDroit.map((ayant, index) => (
                      <div key={index} className="border border-gray-200/50 rounded-2xl p-6 md:p-8 space-y-6 bg-gradient-to-br from-white to-gray-50/50 shadow-md hover:shadow-lg transition-all duration-300 mb-6">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-lg text-gray-800">Ayant droit {index + 1}</p>
                          {index === 0 && formData.ayantsDroit.length < 3 && (
                            <button
                              type="button"
                              onClick={handleAddAyantDroit}
                              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1E90FF] to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                            >
                              <Plus size={18} />
                              <span>Ajouter un autre ayant-droit</span>
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
                          <div>
                            <label className={labelDefault}>Filiation</label>
                            <input
                              type="text"
                              value={ayant.lien}
                              onChange={(e) => handleAyantDroitChange(index, 'lien', e.target.value)}
                              placeholder="Conjoint, enfant..."
                              className={inputBase}
                            />
                          </div>
                          <div>
                            <label className={labelDefault}>Nom & prénoms</label>
                            <input
                              type="text"
                              value={ayant.nomPrenoms}
                              onChange={(e) => handleAyantDroitChange(index, 'nomPrenoms', e.target.value)}
                              className={inputBase}
                            />
                          </div>
                          <div>
                            <label className={labelDefault}>Date de naissance</label>
                            <input
                              type="date"
                              value={ayant.dateNaissance}
                              onChange={(e) => handleAyantDroitChange(index, 'dateNaissance', e.target.value)}
                              className={inputBase}
                            />
                          </div>
                          <div>
                            <label className={labelDefault}>Lieu de résidence</label>
                            <input
                              type="text"
                              value={ayant.lieuResidence}
                              onChange={(e) => handleAyantDroitChange(index, 'lieuResidence', e.target.value)}
                              className={inputBase}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Paiement - Visible sur desktop ou mobile si mobileSubStep3 === 2 */}
                <div className={`rounded-2xl sm:rounded-3xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-4 sm:mb-6 md:mb-8 ${mobileSubStep3 === 1 ? 'lg:block hidden' : ''}`}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-gray-50 to-blue-50/50 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-200/50">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#1E90FF] to-indigo-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0">
                      06
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex items-center gap-1.5 sm:gap-2">
                        <CreditCard size={18} className="sm:w-5 sm:h-5 text-[#1E90FF] flex-shrink-0" />
                        <span className="truncate">Paiement</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Sélectionnez votre méthode de paiement pour finaliser votre adhésion.</p>
                    </div>
                  </div>
                  <div className={`p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 ${mobileSubStep3 === 1 ? 'lg:block hidden' : ''}`}>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50/30 border-2 border-green-200/50 shadow-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-gray-600 font-bold mb-2">Montant à payer</p>
                          <p className="text-3xl font-extrabold text-green-700">15 000 FCFA</p>
                          <p className="text-sm text-gray-600 mt-2">Frais d'adhésion à la MUCHRE-CI</p>
                </div>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                          <CreditCard size={32} className="text-white" />
                </div>
              </div>
            </div>

            <div>
                      <label className={labelRequired}>
                        Méthode de paiement <span className="text-red-500">*</span>
              </label>
              <select
                name="methodePaiement"
                value={formData.methodePaiement}
                onChange={handleChange}
                        className={`${inputBase} ${errors.methodePaiement ? 'border-red-500 ring-red-100' : ''}`}
              >
                <option value="">Sélectionner une méthode</option>
                <option value="mobile-money">Mobile Money</option>
                <option value="virement">Virement bancaire</option>
                <option value="especes">Espèces</option>
              </select>
                      {errors.methodePaiement && <p className={errorText}>{errors.methodePaiement}</p>}
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-200/50 rounded-2xl p-5 text-sm text-gray-700 shadow-inner">
                      <div className="flex items-start gap-3">
                        <Phone size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="font-medium">
                          Une notification SMS vous sera envoyée dès la validation de votre dossier et la confirmation du paiement.
                        </p>
                      </div>
                    </div>
                  </div>
            </div>

                {/* Boutons de navigation - Desktop: affiche les deux sections + bouton final */}
                <div className="hidden lg:flex flex-col md:flex-row justify-between gap-6 pt-8 border-t border-gray-200/50 mt-8">
                  <ButtonSecondary type="button" onClick={() => setStep(2)}>
                    Retour
              </ButtonSecondary>
                  <ButtonPrimary type="submit" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Procéder au paiement
              </ButtonPrimary>
            </div>

                {/* Boutons de navigation mobile - Section Ayants droit */}
                {mobileSubStep3 === 1 && (
                  <div className="lg:hidden flex flex-col gap-3 pt-4 mt-4">
                    <ButtonPrimary 
                      type="button" 
                      onClick={() => setMobileSubStep3(2)} 
                      className="w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                    >
                      Suivant
                    </ButtonPrimary>
                  </div>
                )}

                {/* Boutons de navigation mobile - Section Paiement */}
                {mobileSubStep3 === 2 && (
                  <div className="lg:hidden flex flex-col gap-3 pt-4 mt-4">
                    <div className="flex gap-3">
                      <ButtonSecondary 
                        type="button" 
                        onClick={() => setMobileSubStep3(1)} 
                        className="flex-1 text-sm"
                      >
                        Retour
                      </ButtonSecondary>
                      <ButtonPrimary 
                        type="submit" 
                        className="flex-1 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        Procéder au paiement
                      </ButtonPrimary>
                    </div>
                  </div>
                )}
          </div>
        )}
      </form>
        </div>
      </div>

      {/* Modal d'engagement */}
      {showEngagementModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-fadeIn">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 via-[#1E90FF] to-indigo-600 px-6 py-4 border-b border-blue-400/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText size={24} className="text-white" />
                <h2 className="text-2xl font-extrabold text-white">Engagement du mutualiste</h2>
              </div>
              <button
                type="button"
                onClick={() => setShowEngagementModal(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p className="text-base">
                  Je m'engage à contribuer avec loyauté à la promotion de l'œuvre de Dieu au sein de la mutuelle. Je m'abstiendrai de tout acte ou propos pouvant nuire à la dignité, à l'éthique ou à l'image de la MUCHRE-CI. Je m'engage également à respecter scrupuleusement les instances dirigeantes ainsi que les décisions des organes de gouvernance de la mutuelle.
                </p>
                <p className="text-base">
                  Je soussigné(e), <span className="font-semibold text-gray-900">{formData.nom} {formData.prenom}</span>, pleinement conscient(e) et sain(e) d'esprit, déclare avoir pris connaissance des statuts et du règlement intérieur de la Mutuelle Chrétienne de Côte d'Ivoire (MUCHRE-CI), les avoir compris et les accepter sans réserve.
                </p>
                <p className="text-base">
                  Je m'engage à œuvrer activement pour l'intérêt collectif des membres mutualistes. Par ailleurs, je m'engage à rembourser l'intégralité des frais d'assistance perçus si je quitte volontairement la mutuelle après avoir bénéficié d'une prestation, sauf en cas de décès.
                </p>
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                  <p className="text-sm font-semibold text-yellow-800">
                    <strong>NB :</strong> L'accès aux prestations de la mutuelle est effectif six (06) mois après la date d'adhésion.
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowEngagementModal(false)}
                  className="px-6 py-3 bg-gradient-to-r from-[#1E90FF] to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  J'ai compris
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Document d'impression - caché à l'écran, visible à l'impression */}
      <div className="hidden print:block print:fixed print:inset-0 print:bg-white print:p-8 print:z-50">
        <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-document, .print-document * {
              visibility: visible;
            }
            .print-document {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              page-break-after: avoid;
            }
            .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(-45deg);
              opacity: 0.08;
              z-index: 0;
              pointer-events: none;
            }
            .print-content {
              position: relative;
              z-index: 1;
            }
            @page {
              size: A4;
              margin: 0.8cm;
            }
            .print-document > * {
              page-break-inside: avoid;
            }
          }
        `}</style>
        <div className="print-document max-w-4xl mx-auto text-gray-900 text-center relative">
          {/* Logo en filigrane */}
          <div className="watermark">
            <img src={logo} alt="MUCHRE-CI Logo" className="h-96 w-auto" />
          </div>

          {/* Contenu */}
          <div className="print-content">
            {/* Message de succès */}
            <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Check size={20} className="text-green-600" />
                <h3 className="text-base font-bold text-green-800">ADHÉSION ENREGISTRÉE AVEC SUCCÈS</h3>
              </div>
              <p className="text-xs text-green-700">Votre demande d'adhésion à la MUCHRE-CI a été enregistrée avec succès.</p>
            </div>

            {/* En-tête avec logo */}
            <div className="flex flex-col items-center justify-center mb-5 pb-3 border-b-3 border-blue-600">
              <div className="mb-2">
                <img src={logo} alt="MUCHRE-CI Logo" className="h-16 w-auto mx-auto" />
              </div>
              <div>
                <h1 className="text-2xl font-bold uppercase mb-1 text-blue-700">FICHE D'INSCRIPTION ET D'ENGAGEMENT</h1>
                <p className="text-sm font-semibold text-gray-700">Mutuelle Chrétienne de Côte d'Ivoire</p>
              </div>
            </div>

            {/* TÊTE DE LISTE */}
            <div className="mb-4">
              <h2 className="text-xl font-bold uppercase mb-3 pb-2 border-b-2 border-blue-500 text-blue-700 text-center">TÊTE DE LISTE</h2>
              <div className="space-y-2 text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 max-w-3xl mx-auto text-left">
                <p className="font-semibold text-gray-800">
                  <span className="text-blue-700">N°</span> <span className="text-gray-900">{generateDossierNumber()}</span> du <span className="text-gray-900">{getCurrentDateFormatted()}</span> à <span className="text-gray-900">{getCurrentTimeFormatted()}</span>
                </p>
                <p>
                  <span className="font-bold text-blue-700">NOM ET PRÉNOMS:</span> <span className="text-gray-900">{formData.nom || '________________'} {formData.prenom || '________________'}</span>
                </p>
                <p>
                  <span className="font-bold text-blue-700">DATE ET LIEU DE NAISSANCE:</span> <span className="text-gray-900">{formData.dateNaissance || '____'} {formData.lieuNaissance || '________________'}</span>
                </p>
                <p>
                  <span className="font-bold text-blue-700">NATIONALITÉ:</span> <span className="text-gray-900">{formData.nationalite || '________________'}</span> <span className="font-bold text-blue-700">N° CNI:</span> <span className="text-gray-900">{formData.numeroCNI || '________________'}</span>
                </p>
                <p>
                  <span className="font-bold text-blue-700">FONCTION:</span> <span className="text-gray-900">{formData.profession || '________________'}</span> <span className="font-bold text-blue-700">CEL:</span> <span className="text-gray-900">{formData.phone || '________________'}</span>
                </p>
                <p>
                  <span className="font-bold text-blue-700">SITUATION MATRIMONIALE:</span> <span className="text-gray-900">{formData.situationMatrimoniale || '________________'}</span>
                </p>
                <p>
                  <span className="font-bold text-blue-700">LIEU D'HABITATION DU MUTUALISTE:</span> <span className="text-gray-900">{formData.lieuHabitation || '________________'}</span>
                </p>
                <p className="pt-2 border-t border-blue-200">
                  <span className="font-bold text-green-700">MONTANT PAYÉ À L'INSCRIPTION:</span> <span className="text-xl font-extrabold text-green-800">15 000 FCFA</span>
                </p>
              </div>
            </div>

            {/* ENGAGEMENT DU MUTUALISTE */}
            <div className="mb-4">
              <h2 className="text-xl font-bold uppercase mb-3 pb-2 border-b-2 border-indigo-500 text-indigo-700 text-center">ENGAGEMENT DU MUTUALISTE</h2>
              <div className="space-y-2 text-xs leading-relaxed bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 max-w-3xl mx-auto">
                <p className="text-gray-800">
                  Je m'engage à contribuer avec loyauté à la promotion de l'œuvre de Dieu au sein de la mutuelle. Je m'abstiendrai de tout acte ou propos pouvant nuire à la dignité, à l'éthique ou à l'image de la MUCHRE-CI. Je m'engage également à respecter scrupuleusement les instances dirigeantes ainsi que les décisions des organes de gouvernance de la mutuelle.
                </p>
                <p className="text-gray-800">
                  Je soussigné(e), <span className="font-bold underline text-indigo-800">{formData.nom || '________________'} {formData.prenom || '________________'}</span>, pleinement conscient(e) et sain(e) d'esprit, déclare avoir pris connaissance des statuts et du règlement intérieur de la Mutuelle Chrétienne de Côte d'Ivoire (MUCHRE-CI), les avoir compris et les accepter sans réserve.
                </p>
                <p className="text-gray-800">
                  Je m'engage à œuvrer activement pour l'intérêt collectif des membres mutualistes. Par ailleurs, je m'engage à rembourser l'intégralité des frais d'assistance perçus si je quitte volontairement la mutuelle après avoir bénéficié d'une prestation, sauf en cas de décès.
                </p>
                <div className="mt-3 p-2 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
                  <p className="text-xs font-bold text-yellow-900">
                    <strong className="text-yellow-800">NB :</strong> L'accès aux prestations de la mutuelle est effectif six (06) mois après la date d'adhésion.
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau des ayants droit - affiché seulement s'il y en a */}
            {formData.ayantsDroit && formData.ayantsDroit.some(ayant => ayant.nomPrenoms || ayant.lien || ayant.dateNaissance || ayant.lieuResidence) && (
              <div className="mb-4">
                <h2 className="text-xl font-bold uppercase mb-3 pb-2 border-b-2 border-purple-500 text-purple-700 text-center">AYANTS DROIT</h2>
                <div className="flex justify-center">
                  <table className="w-full max-w-4xl border-collapse border-2 border-purple-600 text-xs shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                        <th className="border-2 border-purple-700 px-2 py-2 text-left font-bold">AYANT DROIT</th>
                        <th className="border-2 border-purple-700 px-2 py-2 text-left font-bold">FILIATION</th>
                        <th className="border-2 border-purple-700 px-2 py-2 text-left font-bold">NOM ET PRENOMS</th>
                        <th className="border-2 border-purple-700 px-2 py-2 text-left font-bold">DATE DE NAISSANCE</th>
                        <th className="border-2 border-purple-700 px-2 py-2 text-left font-bold">LIEU DE RÉSIDENCE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.ayantsDroit.map((ayant, index) => {
                        if (!ayant.nomPrenoms && !ayant.lien && !ayant.dateNaissance && !ayant.lieuResidence) return null
                        return (
                          <tr key={index} className={index % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
                            <td className="border-2 border-purple-300 px-2 py-2 font-bold text-purple-700">{index === 0 ? '1er' : index === 1 ? '2ème' : '3ème'}</td>
                            <td className="border-2 border-purple-300 px-2 py-2 text-gray-800">{ayant.lien || ''}</td>
                            <td className="border-2 border-purple-300 px-2 py-2 text-gray-800 font-semibold">{ayant.nomPrenoms || ''}</td>
                            <td className="border-2 border-purple-300 px-2 py-2 text-gray-800">{ayant.dateNaissance || ''}</td>
                            <td className="border-2 border-purple-300 px-2 py-2 text-gray-800">{ayant.lieuResidence || ''}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Date et lieu */}
            <div className="mt-4 text-sm text-center">
              <p className="text-gray-700 font-semibold">
                Fait , le {getCurrentDateFormatted()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAdhesion
