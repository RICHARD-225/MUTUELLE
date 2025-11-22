# MUCHRE-CI - Mutuelle Chrétienne de Côte d'Ivoire

Site web complet pour la Mutuelle Chrétienne de Côte d'Ivoire (MUCHRE-CI).

## 🚀 Technologies

- **React 19** - Framework frontend
- **Vite** - Build tool
- **React Router** - Navigation
- **Firebase** - Backend (Auth, Firestore, Storage)
- **Tailwind CSS** - Styling
- **DaisyUI** - Composants UI
- **Lucide React** - Icônes

## 📋 Fonctionnalités

### Pages principales
- ✅ **Accueil** (`/`) - Bannière, missions, conditions, témoignages
- ✅ **Présentation** (`/presentation`) - Histoire, mission, vision, valeurs, bureau exécutif
- ✅ **Adhésion** (`/adhesion`) - Formulaire multi-étapes avec upload de documents
- ✅ **Connexion** (`/login`) - Authentification Firebase
- ✅ **Dashboard** (`/dashboard`) - Espace adhérent avec profil, paiements, prestations
- ✅ **Paiement** (`/paiement`) - Interface de paiement (Mobile Money, virement, espèces)
- ✅ **Admin** (`/admin`) - Tableau de bord administrateur
- ✅ **Actualités** (`/actualites`) - Liste des actualités et événements
- ✅ **Contact** (`/contact`) - Formulaire de contact et coordonnées

### Composants
- Navbar responsive avec menu mobile
- Footer avec liens et réseaux sociaux
- HeroSection avec call-to-action
- Cards pour missions et services
- Formulaires avec validation
- Dashboard cards pour statistiques
- Notifications badges

## 🎨 Charte graphique

- **Couleur primaire** : `#1E90FF` (Bleu)
- **Couleur secondaire** : `#FFA500` (Orange)
- **Couleur neutre** : `#FFFFFF` (Blanc)
- **Police** : Poppins (Google Fonts)

## 🔧 Installation

1. **Cloner le projet**
```bash
git clone https://github.com/RICHARD-225/MUTUELLE.git
cd MUTUELLE
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer Firebase**
   - Créez un projet Firebase sur [Firebase Console](https://console.firebase.google.com)
   - Copiez `.env.example` vers `.env`
   - Remplissez les variables d'environnement avec vos clés Firebase

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173/`

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── CardMission.jsx
│   ├── FormAdhesion.jsx
│   ├── ButtonPrimary.jsx
│   ├── ButtonSecondary.jsx
│   ├── DashboardCard.jsx
│   └── NotificationBadge.jsx
├── pages/              # Pages de l'application
│   ├── Accueil.jsx
│   ├── Presentation.jsx
│   ├── Adhesion.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Paiement.jsx
│   ├── Admin.jsx
│   ├── Actualites.jsx
│   └── Contact.jsx
├── services/           # Services Firebase
│   ├── firebase.js
│   ├── authService.js
│   ├── firestoreService.js
│   └── storageService.js
├── App.jsx             # Composant principal avec routing
└── main.jsx            # Point d'entrée
```

## 🔥 Configuration Firebase

### Collections Firestore
- `adherents` - Informations des adhérents
- `paiements` - Historique des paiements
- `prestations` - Demandes de prestations
- `documents` - Documents uploadés
- `utilisateurs` - Comptes utilisateurs
- `logs` - Journal d'audit

### Services Firebase utilisés
- **Authentication** - Email/password
- **Firestore** - Base de données
- **Storage** - Stockage de fichiers
- **Cloud Functions** - (À configurer pour emails/notifications)

## 📝 TODO / Améliorations futures

- [ ] Intégrer l'API Mobile Money
- [ ] Configurer Firebase Cloud Functions pour les emails
- [ ] Ajouter Firebase Cloud Messaging pour les notifications push
- [ ] Implémenter la génération de PDF pour les reçus
- [ ] Ajouter Google Maps dans la page Contact
- [ ] Système de recherche avancée
- [ ] Export CSV/PDF pour l'admin
- [ ] Tests unitaires et d'intégration

## 🚀 Déploiement

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Vercel
```bash
npm run build
vercel deploy
```

## 📄 Licence

Ce projet est privé et propriété de la MUCHRE-CI.

## 👥 Contribution

Pour contribuer au projet, veuillez créer une branche feature et soumettre une pull request.

---

**MUCHRE-CI** - Avec la MUCHRE-CI, c'est la solidarité au service de tous.
