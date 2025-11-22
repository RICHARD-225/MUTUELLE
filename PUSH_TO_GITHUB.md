# 🚀 Commandes pour pousser sur GitHub

## ✅ Ce qui a été fait

- ✅ Git initialisé
- ✅ Tous les fichiers ajoutés (55 fichiers)
- ✅ Premier commit créé
- ✅ Branche renommée en "main"

## 📋 Prochaines étapes

### 1. Créer le dépôt sur GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Remplissez :
   - **Repository name** : `muchre-ci` (ou un autre nom)
   - **Description** : "Site web pour la Mutuelle Chrétienne de Côte d'Ivoire"
   - **Visibilité** : Public ou Private
   - ⚠️ **NE COCHEZ PAS** "Initialize this repository with a README"
4. Cliquez sur **"Create repository"**

### 2. Lier et pousser le code

Une fois le dépôt créé, exécutez ces commandes dans PowerShell (remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub) :

```powershell
# Aller dans le dossier du projet
cd muchre-ci-main

# Ajouter le dépôt GitHub comme remote
git remote add origin https://github.com/VOTRE_USERNAME/muchre-ci.git

# Vérifier que le remote est bien ajouté
git remote -v

# Pousser le code sur GitHub
git push -u origin main
```

### 3. Authentification GitHub

Si GitHub vous demande de vous authentifier :

**Option recommandée : Personal Access Token**

1. Allez sur GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Cliquez sur **"Generate new token (classic)"**
3. Donnez un nom (ex: "muchre-ci-project")
4. Sélectionnez la durée d'expiration
5. Cochez la permission **`repo`** (accès complet aux dépôts)
6. Cliquez sur **"Generate token"**
7. **Copiez le token** (vous ne pourrez plus le voir après)
8. Utilisez ce token comme **mot de passe** lors du `git push`

**Alternative : GitHub CLI**

```powershell
# Installer GitHub CLI (si pas déjà installé)
# Puis authentifier
gh auth login
```

## ✅ Vérification

Après le push, vérifiez sur GitHub que tous vos fichiers sont bien présents !

## 📝 Commandes utiles pour la suite

```powershell
# Voir l'état
git status

# Ajouter des modifications
git add .

# Créer un commit
git commit -m "Description des modifications"

# Pousser sur GitHub
git push

# Voir l'historique
git log --oneline
```

---

**Votre projet est maintenant prêt à être poussé sur GitHub ! 🎉**

