# Guide pour mettre le projet sur Git et GitHub

## ✅ Vérifications préalables

- ✅ Git est installé (version 2.49.0)
- ✅ Le projet n'est pas encore un dépôt Git
- ✅ Le fichier `.gitignore` est présent et correct
- ✅ Le `README.md` est présent

## 📋 Étapes pour mettre le projet sur GitHub

### 1. Initialiser Git dans le projet

Ouvrez PowerShell dans le dossier du projet (`muchre-ci-main`) et exécutez :

```powershell
# Se placer dans le dossier du projet
cd muchre-ci-main

# Initialiser Git
git init

# Vérifier que Git est bien initialisé
git status
```

### 2. Configurer Git (si pas déjà fait)

```powershell
# Configurer votre nom (remplacez par votre nom)
git config --global user.name "Votre Nom"

# Configurer votre email (remplacez par votre email GitHub)
git config --global user.email "votre.email@example.com"
```

### 3. Ajouter tous les fichiers au dépôt

```powershell
# Ajouter tous les fichiers (sauf ceux dans .gitignore)
git add .

# Vérifier les fichiers ajoutés
git status
```

### 4. Créer le premier commit

```powershell
# Créer le commit initial
git commit -m "Initial commit - MUCHRE-CI project"
```

### 5. Créer un dépôt sur GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Connectez-vous à votre compte
3. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
4. Remplissez les informations :
   - **Repository name** : `muchre-ci` (ou le nom que vous voulez)
   - **Description** : "Site web pour la Mutuelle Chrétienne de Côte d'Ivoire"
   - **Visibilité** : Public ou Private (selon votre choix)
   - ⚠️ **NE COCHEZ PAS** "Initialize this repository with a README" (on a déjà un README)
5. Cliquez sur **"Create repository"**

### 6. Lier le dépôt local à GitHub

GitHub vous donnera des commandes. Utilisez celles-ci (remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub) :

```powershell
# Ajouter le dépôt distant GitHub
git remote add origin https://github.com/VOTRE_USERNAME/muchre-ci.git

# Vérifier que le remote est bien ajouté
git remote -v
```

### 7. Pousser le code sur GitHub

```powershell
# Renommer la branche principale en "main" (si nécessaire)
git branch -M main

# Pousser le code sur GitHub
git push -u origin main
```

Si GitHub vous demande de vous authentifier :
- **Option 1** : Utilisez un Personal Access Token (recommandé)
  - Allez dans GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Créez un nouveau token avec les permissions `repo`
  - Utilisez ce token comme mot de passe lors du `git push`

- **Option 2** : Utilisez GitHub CLI (`gh auth login`)

## 🔒 Sécurité - Fichiers à ne PAS commiter

Le fichier `.gitignore` est déjà configuré pour exclure :
- `node_modules/` ✅
- `.env` et fichiers de configuration sensibles ✅
- Fichiers de build (`dist/`) ✅
- Fichiers d'éditeur (`.vscode/`, `.idea/`) ✅

⚠️ **IMPORTANT** : Vérifiez qu'il n'y a pas de fichiers `.env` avec vos clés Firebase dans le projet avant de pousser !

## 📝 Commandes Git utiles pour la suite

```powershell
# Voir l'état des fichiers
git status

# Ajouter des fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des modifications"

# Pousser les modifications sur GitHub
git push

# Voir l'historique des commits
git log

# Créer une nouvelle branche
git checkout -b nom-de-la-branche

# Revenir sur la branche main
git checkout main
```

## 🎯 Prochaines étapes recommandées

1. ✅ Créer le dépôt GitHub
2. ✅ Pousser le code initial
3. 🔄 Configurer les branches de protection (optionnel)
4. 🔄 Configurer GitHub Actions pour CI/CD (optionnel)
5. 🔄 Ajouter des collaborateurs (si nécessaire)

---

**Besoin d'aide ?** Consultez la [documentation GitHub](https://docs.github.com/fr/get-started)

