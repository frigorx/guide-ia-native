# Guide « Installer une IA native »

**Installer et utiliser une intelligence artificielle locale sur son ordinateur — un guide pour enseignants et particuliers soucieux de leurs données.**

🔗 **Version en ligne :** https://frigorx.github.io/guide-ia-native/

📖 **À lire avant de commencer :** [présentation du guide](https://frigorx.github.io/guide-ia-native/presentation.html) — cadre, posture et mode d'emploi.

---

## Statut

Document de travail à caractère **exploratoire**, sans valeur officielle. Ni préconisation institutionnelle, ni guide académique validé — un cadre de discussion fondé sur une expérimentation réelle, avec ses limites et ses garde-fous.

**Auteur ·** F. Henninot — **Version ·** mai 2026

## Principe directeur

Ce guide n'est **pas un manuel à exécuter seul**. Il est conçu pour être **donné à une IA cloud** (Claude, ChatGPT, Gemini, Mistral Le Chat) qui devient votre **radio-guide d'installation**. Chaque chapitre contient en tête un prompt de radio-guidage à copier-coller : l'IA cloud lit le document à votre place et vous accompagne pas à pas, accepte vos captures d'écran, diagnostique vos erreurs.

Chaque chapitre et le glossaire proposent un **bouton de téléchargement au format Markdown (`.md`)** : c'est le fichier à joindre à votre conversation avec l'IA — un texte léger, économe en tokens et mieux structuré pour elle qu'un PDF.

## Contenu

| Fichier | Rôle |
|---|---|
| `presentation.html` | **À lire avant de commencer** — cadre, statut exploratoire, principe directeur (donner le guide à une IA cloud), choix de l'IA cloud, parcours de lecture, cadrage RGPD. |
| `index.html` | **Chapitre 1** — Installation d'une IA native (Ollama / LM Studio / Claude cadré), choix du modèle selon le matériel, premiers prompts, écriture de *skills*. |
| `chapitre-2.html` | **Chapitre 2** — Transformation en assistant pédagogique encadré : *system prompt*, couplage référentiel matière, multi-postes, charte d'usage, évaluation. |
| `chapitre-3.html` | **Chapitre 3** — Organisation d'une mémoire de travail : vault Obsidian en couches, branchement de l'IA locale, référentiel transformé en skill, interopérabilité prudente par CSV/XLSX. |
| `glossaire.html` | **Annexe** — glossaire d'environ 80 entrées, accessible aux non-techniciens. Liens automatiques depuis chaque chapitre. |
| `glossary-linker.js` | Script d'auto-liaison des termes techniques vers le glossaire. |
| `chapitre-1.md` · `chapitre-2.md` · `chapitre-3.md` · `glossaire.md` | **Versions Markdown** — les fichiers à joindre à votre IA cloud (texte léger, économe en tokens). Téléchargeables depuis chaque page du guide. |

**Le Chapitre 1 se suffit à lui-même** : pour juste installer une IA et l'utiliser, il suffit largement.

## Cadre RGPD

Une IA cloud est utilisée **uniquement pour la configuration** (installation, skills, débogage) — jamais pour traiter des données d'élèves, de famille ou tout contenu personnel identifiable. Tout usage impliquant des élèves ou des outils institutionnels nécessite un **cadre établissement** : accord du chef d'établissement, validation du référent numérique, charte d'usage, information des familles.

## Lire ou imprimer

- **En ligne :** ouvrir https://frigorx.github.io/guide-ia-native/
- **À donner à une IA :** télécharger le `.md` depuis chaque chapitre (bouton dédié).
- **Hors ligne :** télécharger les fichiers `.html` et les ouvrir dans un navigateur.
- **En PDF :** ouvrir un chapitre dans le navigateur puis `Ctrl + P` → « Enregistrer au format PDF » → format A4.

## Contact

Tout retour, signalement de coquille ou désaccord argumenté est bienvenu : **fr.henninot@gmail.com**

---

*Des prolongements techniques (accès distant par VPN privé, orchestration agentique) existent en brouillon mais ne font pas partie de ce dépôt — ils seront publiés lorsqu'ils auront été éprouvés.*
