<!-- Document Markdown du guide « Installer une IA native » — F. Henninot. Version destinée à être jointe à une IA cloud comme support de radio-guidage. -->

# Installer une IA native\* sur son ordinateur

Guide pratique d'installation, de paramétrage et d'usage — pour enseignants de toutes filières et utilisateurs particuliers soucieux de leurs données.

**Auteur·** F. Henninot
**Public·** enseignants & particuliers, sans prérequis technique
**Version·** mai 2026
**Format·** HTML interactif + Markdown

**\*** Une **IA native** (ou « IA locale ») est une IA installée sur votre propre ordinateur, qui fonctionne **sans connexion à Internet**. Vos données ne quittent pas votre poste. C'est l'équivalent, pour l'IA, de Word installé sur votre PC face à Google Docs en ligne.

Parcours · Chapitre 1 sur 4
1 · Installation
→
[2 · Skills](chapitre-2.md)
→
[3 · Chatbot](chapitre-3.md)
→
[4 · Obsidian](chapitre-4.md)

**Statut** Document de travail à caractère exploratoire, sans valeur officielle. Ne se substitue ni aux préconisations académiques ni au cadre fixé par chaque établissement.

**Mode d'emploi de ce chapitre** Ce document est conçu pour être **lu d'abord**, puis **exécuté avec l'aide d'une IA cloud** (Claude, ChatGPT, Gemini, Mistral Le Chat). Lisez le chapitre en entier pour comprendre l'esprit. À la fin ([section 8](#radio-guidage)), vous trouverez le **radio-guidage** : un prompt à coller dans votre IA cloud habituelle, et un fichier à joindre. L'IA prend alors le relais et vous accompagne pas à pas dans l'exécution.

**⚠ N'allez pas directement à l'action.** Lisez le chapitre d'abord — c'est le contexte (enjeux RGPD, comparatifs, prérequis, pièges) qui fait la différence entre une installation qui tient et un abandon. Le téléchargement du fichier `.md` et le prompt à coller sont rassemblés à la fin, dans la [section 8](#radio-guidage).

**Un mot vous bloque ?** Le [glossaire](glossaire.md) est en lien permanent en bas de page. **Vous découvrez le projet ?** La [présentation](presentation.html) pose le cadre et la posture. **Le radio-guidage, c'est quoi au juste ?** La page [Radio-guidage](radio-guidage.html) l'explique une fois pour toutes.

### Sommaire

1. [Préambule](#preambule)
2. [Enjeux, usages, limites](#enjeu)
3. [La grille de lecture en 4 briques](#cheminement)
4. [Comparatif des trois solutions](#comparatif)
5. [Prérequis matériels et choix du modèle](#prerequis)
6. [Voie manuelle — installation Ollama + Open WebUI](#install)
7. [Premier prompt — se familiariser](#premier)
8. [**Radio-guidage — faire installer cette IA par une IA cloud**](#radio-guidage)
9. [Vous avez installé votre IA. Et maintenant ?](#et-maintenant)
10. [Ressources et liens](#ressources)

## 1. Préambule

**Un mot d'honnêteté avant de commencer** Cette installation **n'est pas magique**. C'est un travail accessible à qui sait utiliser une souris, un clavier, copier-coller et lire un message d'erreur — pas besoin d'être informaticien. **Mais il faut accepter que ça prenne du temps.**

J'ai mis **une journée complète** pour boucler mon propre Chapitre 1, avec quelques moments d'arrachage de cheveux. Marie-Laure, première testeuse du guide qui n'avait jamais touché à un terminal, y est arrivée sur **une grosse après-midi**. **Personne ne le fait en claquant des doigts.** Mais tout le monde y arrive avec un peu de patience et un bon radio-guidage par IA cloud.

**Conseil pratique.** Ne tentez pas de tout enchaîner en une après-midi. Mieux vaut **une heure par jour pendant une semaine**. Les utilisateurs qui ont voulu tout faire d'un bloc ont parfois abandonné. Ceux qui ont pris le temps sont allés au bout.

**Ce que vous saurez faire en sortie** Installer une IA locale fonctionnelle sur votre ordinateur — Ollama + Open WebUI, ou LM Studio selon votre profil —, choisir le modèle adapté à votre matériel (Llama 3.1 8B par défaut, Gemma 3 12B si GPU dédié ou Mac Apple Silicon), faire un premier dialogue qui répond, et comprendre les forces et limites concrètes d'une IA en local : ce qu'elle fait bien, ce qu'elle ne sait pas faire, et pourquoi c'est exactement ce qu'il faut pour un usage sensible. Tout ça sans qu'aucune de vos données ne quitte votre poste.

L'IA conversationnelle est entrée dans le quotidien — des enseignants, mais aussi des particuliers — **sans cadre clair**. ChatGPT, Claude, Gemini sont utilisés pour corriger des copies, organiser une vie de famille, gérer des données de santé, sans que personne n'ait vraiment vérifié où partent ces informations. Ce guide propose une alternative : installer une **IA native**, qui tourne directement sur votre ordinateur, **sans envoi de données à un serveur tiers**.

**Pour qui** Ce guide a été pensé d'abord pour **les enseignants — toutes filières et tous niveaux** — afin de leur permettre d'utiliser une IA tout en respectant le cadre RGPD applicable aux données d'élèves. Il fonctionne aussi tel quel pour **tout particulier** qui souhaite installer une IA sur son PC personnel. Aucun prérequis de développeur. Si vous savez installer un logiciel et copier une commande, vous pouvez aller au bout.

**L'expérience qui a motivé ce guide** Notre première installation d'Ollama + Open WebUI, **même avec l'aide d'une IA conversationnelle pour nous guider**, nous a pris une journée. Sans ce radioguidage, c'est inaccessible à un utilisateur non technique. C'est ce qui valide le [radio-guidage (§8)](#radio-guidage) : on ne donne pas une procédure papier, on donne un **prompt à coller dans Claude ou ChatGPT** qui prendra le relais et expliquera, étape par étape, en s'adaptant à la configuration du poste.

## 2. Enjeux, usages, limites

### 2.1. RGPD — ce qu'on transmet sans le voir

**Côté enseignant.** Coller une copie d'élève dans ChatGPT, c'est transmettre à un sous-traitant non recensé par l'établissement : le nom de l'élève, son niveau, ses productions, parfois ses difficultés (« il est dyslexique, adapte… »). Données personnelles d'élèves mineurs, RGPD article 28. Aucun établissement n'a signé de contrat avec OpenAI ou Anthropic. **Une infraction silencieuse.**

**Côté particulier.** Demander à ChatGPT d'organiser un planning familial, de rédiger une lettre administrative, d'aider sur un problème médical, c'est lui confier des données personnelles — les siennes, celles de ses enfants, de ses proches. Ces données sont conservées, parfois utilisées pour entraîner les modèles. Là encore, le RGPD s'applique : il y a un sous-traitant, hors UE, sans contrat avec l'utilisateur final autre que des CGU qu'on n'a pas lues.

### 2.2. Souveraineté

Un service cloud peut changer ses tarifs, ses conditions, sa disponibilité, fermer un compte. Une IA native reste **disponible, gratuite, reproductible** tant que l'on conserve les fichiers du modèle. Comme conserver ses cours, ses photos ou sa comptabilité en local plutôt qu'exclusivement chez un fournisseur cloud.

### 2.3. Différence d'usage

Une IA native n'est pas un *clone moins bon* de Claude ou ChatGPT. Elle excelle sur le **fréquent, simple, sensible, hors-ligne**. Le cloud reste pertinent pour les tâches lourdes (analyse de longs documents, raisonnement complexe) **à condition de n'y mettre aucune donnée personnelle identifiable**. Les deux outils sont complémentaires, pas concurrents.

### 2.4. Les limites — à dire d'emblée, sans détour

Un guide qui ne nomme pas les limites de l'outil qu'il promeut perd sa crédibilité. Voici ce qu'une IA native **ne fait pas (encore) bien** en 2026 :

| Limite | Détail | Quand ça bloque |
| --- | --- | --- |
| Qualité brute | Un Llama 3.1 8B local n'égale pas Claude Sonnet ou GPT-4 sur le raisonnement long et nuancé. L'écart se réduit chaque trimestre mais reste réel. | Synthèse d'un dossier complexe, raisonnement juridique fin. |
| Vitesse | Sur un PC sans GPU dédié, la réponse arrive mot à mot, parfois lentement. Plusieurs secondes voire dizaines de secondes pour un texte long. | Démonstration en classe, usage rapide en réunion. |
| Connaissances datées | Le modèle ne connaît pas l'actualité postérieure à sa date d'entraînement. Aucune recherche web par défaut. | Questions sur l'actualité, données chiffrées récentes. |
| Pas d'accès internet | Le modèle ne lit pas une page web, ne consulte pas un PDF en ligne, sauf à ajouter des extensions complexes. | « Résume-moi cet article » sur une URL fraîche. |
| Hallucinations possibles | Comme tout LLM, l'IA peut inventer une référence, une date, une norme. **Sur les données chiffrées ou réglementaires, toujours vérifier.** | Citations, articles de loi, valeurs techniques. |
| Multimodalité limitée | L'analyse d'images est possible mais moins fine que sur le cloud. La parole, la vidéo restent rares en local. | Lecture d'un schéma, transcription audio. |
| Stockage et maintenance | Chaque modèle pèse de 2 à 40 Go. Les mises à jour ne se font pas seules. C'est à vous de les gérer. | Disque dur peu spacieux, peu d'envie de maintenance. |
| Pas de mémoire persistante | Sans skill, chaque conversation repart de zéro. L'IA ne se souvient pas de la précédente. | Suivi long terme d'un projet sans organisation côté utilisateur. |

**Conséquence pratique** Une IA native est un excellent outil pour les **tâches récurrentes, sensibles, et raisonnablement complexes**. Pour le reste — recherche sur l'actualité, analyse fine d'un dossier de 200 pages, dialogue ultra-naturel — le cloud (sans données personnelles dedans) garde l'avantage. **Avoir les deux est plus malin que choisir.**

## 3. La grille de lecture en 4 briques

Toute IA conversationnelle, locale ou cloud, repose sur la même architecture :

Interface (La fenêtre de chat) → Moteur (Le logiciel qui exécute le modèle (Ollama…)) → Modèle (Le fichier des « poids » (plusieurs Go)) → Skills (Les fichiers qui injectent VOTRE matière)

**Le point clé** Les trois premières briques sont standard. La quatrième — les **skills** — fait toute la différence. Un modèle moyen avec d'excellents skills bat un modèle excellent sans contexte. Ce Chapitre 1 installe les trois premières briques ; le [Chapitre 2](chapitre-2.md) est entièrement consacré à la quatrième.

## 4. Comparatif des trois solutions retenues

Trois cheminements sont possibles. Le choix dépend du profil technique, du matériel disponible et du niveau d'exigence RGPD.

| Critère | Ollama + Open WebUI | LM Studio | Claude (cloud) cadré |
| --- | --- | --- | --- |
| Nature | Moteur en ligne de commande + interface web open source | Application desktop tout-en-un avec interface graphique | Service cloud propriétaire (Anthropic) |
| Installation | Intermédiaire 2 logiciels à installer, manipulation terminal | Simple un seul installateur, double-clic | Aucune compte web, c'est tout |
| Données chez moi | Oui — 100% local | Oui — 100% local | Non — serveurs Anthropic (US/UE) |
| Risque RGPD | Risque de transfert fortement réduit Pas de transfert hors poste. Le traitement local reste à cadrer par l'établissement (finalité, information des usagers, conservation, sécurité du poste). | Risque de transfert fortement réduit Idem ci-contre. | Risque résiduel Données hébergées par Anthropic (US/UE). N'utiliser que pour la configuration et les contenus non personnels ; jamais avec des données d'élèves. |
| Qualité du raisonnement | Bonne à très bonne (Llama 3.1 70B, Qwen 2.5) | Bonne (mêmes modèles) | Excellente Claude Sonnet/Opus |
| Vitesse de réponse | Dépend du matériel — instantanée avec GPU | Idem | Très rapide, peu importe le matériel |
| Coût | 0 € | 0 € | Gratuit limité, payant au-delà (~20 €/mois) |
| Système de skills | Personnalisé via `Modelfile` et fichiers contextuels | Personnalisé via prompts système et presets | Natif et mature dossier `skills/` |
| Recommandation | **Cible principale** pour qui veut maîtriser l'outil | **Cible débutant** pour démarrer sans douleur | **Complément** pour les tâches lourdes sans données élèves |

**Recommandation** Pour un débutant complet : démarrer avec **LM Studio** (installateur graphique, double-clic, prêt en 10 min) pour se familiariser. Pour qui veut le vrai système de skills et un usage classe : **Ollama + Open WebUI**, en se faisant guider par le [radio-guidage (§8)](#radio-guidage) plutôt qu'en lisant la procédure manuelle (§6) en autonomie. **Claude** reste pertinent en complément pour les tâches longues *sans données élèves*.

## 5. Prérequis matériels et choix du modèle

### 5.1. Configuration minimale

| Usage visé | RAM | Stockage libre | GPU | Modèle conseillé |
| --- | --- | --- | --- | --- |
| Découverte, prompts courts | 8 Go | 10 Go | Aucun (CPU) | Gemma 3 4B / Llama 3.2 3B / Phi-3 mini |
| Usage quotidien polyvalent | 16 Go | 30 Go | Optionnel (GPU intégré OK) | **Llama 3.1 8B** ou **Mistral 7B** (par défaut, légers) — *Gemma 3 12B si GPU disponible ou Mac Apple Silicon* |
| Usage avancé, skills complexes | 32 Go | 80 Go | Recommandé (NVIDIA 8+ Go VRAM) | Gemma 3 27B / Llama 3.1 70B (quantifié) / Qwen 2.5 32B |

**Note matériel** Un Mac Apple Silicon (M1 et au-delà) est **excellent** pour l'IA locale grâce à sa mémoire unifiée. Un PC Windows avec carte graphique NVIDIA récente (RTX 3060+) est l'autre cible idéale. Un PC sans GPU dédié fonctionnera, en plus lent, sur des modèles 3 à 8 milliards de paramètres.

### 5.2. Choisir son modèle

L'écosystème open source évolue vite. Quelques familles à connaître, leurs forces et limites :

| Famille | Éditeur | Forces | Faiblesses / nuances |
| --- | --- | --- | --- |
| Llama 3.x | Meta (US) | Très polyvalent, excellent en français, bonne taille 8B accessible | Licence Meta avec restrictions d'usage commercial à très grande échelle |
| Mistral / Mixtral | Mistral AI (FR) | Choix souverain européen, très bon en français, léger, rapide | Sur le raisonnement complexe, derrière Llama 70B et Qwen 72B |
| Qwen 2.5 | Alibaba (CN) | Excellent en raisonnement structuré et en code, très bon en français | Provenance chinoise — point de vigilance institutionnel, à examiner selon contexte |
| Gemma 3 | Google DeepMind (US) | **Très performant en 2026** — Gemma 3 12B rivalise avec Llama 3.1 8B et le dépasse souvent ; Gemma 3 27B joue dans la cour des 70B. Multilingue solide, contexte 128K, version multimodale (vision). | Sorti récemment (printemps 2025), moins de retours communautaires français qu'avec Llama/Mistral, à éprouver soi-même. |
| Phi-3 | Microsoft (US) | Très petit (3,8B), tourne sur presque n'importe quel PC | Faible sur les tâches longues ou nuancées |
| DeepSeek | DeepSeek (CN) | Très performant en raisonnement et mathématiques | Même réserve que Qwen sur la provenance |

**Le plus performant — réponse honnête** Il n'existe pas *un* modèle le plus performant : ça dépend du matériel et de la tâche. À **matériel équivalent** et pour un **usage francophone polyvalent** début 2026 :

- **Ultra-léger** (8 Go RAM, pas de GPU) : Llama 3.2 3B ou Gemma 3 4B.
- **Milieu de gamme** (16 Go RAM, sans GPU dédié) : **commencer par Llama 3.1 8B ou Mistral 7B**. Fluides à l'inférence sur CPU, retour à votre prompt en quelques secondes. Excellent rapport qualité/temps de réponse.
- **Milieu de gamme avec GPU** (16 Go RAM + GPU 8 Go VRAM, ou Mac Apple Silicon) : **Gemma 3 12B** devient confortable et tient la comparaison avec des modèles plus gros sur la plupart des tâches.
- **Haut de gamme** (32+ Go, GPU 16+ Go VRAM) : Gemma 3 27B, Llama 3.1 70B ou Qwen 2.5 32B+, selon affinités.

**Recommandation honnête de premier choix :** testez d'abord un **modèle 7-8B** sur votre machine. Vous verrez très vite si la vitesse vous convient. Si oui, restez-y un mois — vous en saurez assez pour décider en connaissance de cause si un modèle plus gros vous apporterait quelque chose. Si non, descendre au 3B-4B et oublier le marketing des « gros modèles » qui ne tournent pas chez vous.

Le paysage évolue vite — un classement à jour se trouve sur [lmarena.ai](https://lmarena.ai) (Chatbot Arena, comparaison à l'aveugle). **Le meilleur test reste le vôtre** : téléchargez-en deux ou trois, posez-leur la même série de questions sur VOS tâches habituelles, gardez celui qui vous parle.

**Liberté de choix** Vous pouvez installer **autant de modèles que votre disque le permet** et basculer de l'un à l'autre selon la tâche. Aucun engagement, aucun verrou. La recommandation *Llama 3.1 8B / Mistral 7B* n'est qu'un point de départ : testez, comparez, gardez ce qui vous parle.

## 6. Voie manuelle — Installation Ollama + Open WebUI

Procédure de référence pour qui préfère le pas-à-pas écrit, ou pour les cas où le [radio-guidage (§8)](#radio-guidage) bute sur un blocage technique. La procédure LM Studio est plus simple (installateur graphique sur [lmstudio.ai](https://lmstudio.ai), double-clic, prêt).

1. **Télécharger Ollama.**

   Aller sur [ollama.com/download](https://ollama.com/download), choisir Windows / macOS / Linux. Installer en double-cliquant l'exécutable. Le service démarre tout seul et écoute sur `localhost:11434`.
2. **Vérifier l'installation.**

   Ouvrir un terminal (PowerShell sous Windows, Terminal sur Mac) et taper :

   ```
   ollama --version
   ```

   Si une version s'affiche, c'est bon.
3. **Télécharger un premier modèle.**

   Pour un démarrage équilibré sur 16 Go de RAM **sans GPU dédié**, partir sur **Llama 3.1 8B** ou **Mistral 7B** :

   ```
   ollama pull llama3.1:8b
   ```

   Si vous avez un GPU 8 Go VRAM ou un Mac Apple Silicon, `ollama pull gemma3:12b` est excellent. Le téléchargement prend 5 à 20 minutes selon le débit. Le modèle est ensuite réutilisable sans connexion.
4. **Premier dialogue en terminal.**

   ```
   ollama run llama3.1:8b
   >>> Bonjour. Présente-toi en deux phrases et dis-moi ce que tu sais faire.
   ```

   L'IA répond. Si oui, le moteur fonctionne. Pour quitter : `/bye`.
5. **Installer Open WebUI pour avoir une interface type ChatGPT.**

   La méthode la plus simple passe par Docker Desktop (à installer depuis [docker.com](https://docker.com) si absent), puis :

   ```
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway \
     -v open-webui:/app/backend/data --name open-webui --restart always \
     ghcr.io/open-webui/open-webui:main
   ```

   Ouvrir <http://localhost:3000> dans le navigateur. Créer un compte local (rien ne sort de la machine). L'interface détecte automatiquement les modèles Ollama installés.
6. **Partager l'IA avec d'autres postes (optionnel).**

   Sur le réseau pédagogique de l'établissement, l'IA installée sur un seul PC peut servir plusieurs postes élèves via le port 3000. À configurer en concertation avec le référent numérique d'établissement. *Procédure détaillée en [Chapitre 3](chapitre-3.md) (chatbot pédagogique).*

**Point de vigilance** L'installation de Docker requiert les **droits administrateur**. Sur un poste académique verrouillé, en parler en amont au RUPN / référent informatique. À défaut, LM Studio s'installe en mode utilisateur sans droits étendus.

## 7. Premier prompt — se familiariser

Avant de parler de skills, on prend la main avec quelques dialogues simples. L'idée est de mesurer **ce que sait faire le modèle de base** sans aide, pour mieux apprécier ensuite ce qu'un skill lui apportera — c'est précisément l'objet du [Chapitre 2](chapitre-2.md).

**Test 1 — connaissance factuelle**

*« Qu'est-ce que le RGPD et à qui s'applique-t-il ? Réponds en 4 phrases. »*

On vérifie si le modèle reste précis ou s'il s'égare. Un modèle correct cite Règlement UE 2016/679, l'applicabilité aux organisations traitant des données de résidents UE, les droits des personnes.

**Test 2 — adaptation de niveau**

*« Explique le fonctionnement d'un cycle frigorifique à un enfant de 10 ans, en trois phrases courtes. »* *(ou, côté particulier : « Explique-moi le crédit d'impôt comme à quelqu'un qui n'y connaît rien. »)*

On évalue la capacité du modèle à **tenir un niveau de langue**. Sans contexte, il a tendance à être trop abstrait ou trop technique. C'est exactement ce qu'un skill « public débutant » corrige.

**Test 3 — production utile**

*« Rédige un mail poli pour annuler un rendez-vous prévu demain, en invoquant un imprévu professionnel, sans donner de détails. »*

Tâche utile et neutre côté données. On observe le ton, la longueur, la justesse du français.

### 7.4. Cinq dialogues types — un par profil

Pour finir, cinq dialogues réalistes qui montrent **ce qu'on obtient concrètement** dans les usages du quotidien, post-installation. Un prompt court par profil, et l'esprit de la réponse à attendre.

**Enseignant·e de maths — 3ᵉ**

*« Reformule cet énoncé d'exercice sur le théorème de Thalès pour qu'il soit accessible à un élève DYS : phrases courtes, vocabulaire simple, un seul attendu par question. Énoncé original : [coller]. »*

L'IA propose une version épurée — phrases de 10-12 mots, sans double négation, chaque sous-question isolée. Vous corrigez en 30 secondes. Gain net : 10 à 15 minutes d'effort de reformulation par énoncé.

**Enseignant·e de lettres — 2ᵈᵉ**

*« Voici un paragraphe d'élève sur Rousseau : [coller]. Identifie trois forces et deux maladresses de raisonnement, sans proposer de réécriture. Je veux que l'élève corrige lui-même. »*

L'IA repère les forces (références précises, articulation des idées) et les maladresses (généralisation hâtive, transition manquante), sans prendre la place de l'élève. Vous utilisez ce diagnostic en entretien individuel, sans avoir à tout relire dans le détail.

**AESH — accompagnement individuel**

*« Cette consigne de SVT est trop dense pour Léo (TDAH, attention 5-7 min) : [coller]. Découpe-la en sous-étapes de 2 phrases maximum chacune, avec une pause-check après chaque sous-étape. »*

L'IA produit 4 à 5 sous-étapes courtes, chacune assortie d'une question-vérification (« Léo, peux-tu me dire ce que tu dois faire d'abord ? »). Vous adaptez le rythme en direct, à côté de l'élève.

**Particulier — vie courante**

*« Rédige une lettre de réclamation à mon assurance habitation, ton ferme mais courtois, 15 lignes maximum. Fait : dégât des eaux signalé le 12 mars, toujours pas d'expertise programmée. J'exige une date sous 10 jours. »*

L'IA produit une lettre prête à imprimer — bloc adresse, formule de politesse, ton mesuré, exigence claire. Vous vérifiez les dates et signez. Aucun de vos documents personnels n'a quitté votre poste.

**Formateur·trice CFA — geste métier**

*« Mes apprentis frigoristes confondent surchauffe et sous-refroidissement. Explique la différence en 4 phrases, avec une analogie concrète tirée du quotidien — pas de mathématiques. »*

L'IA propose une analogie (le café trop chaud / le café tiédi au frigo), définit chaque notion sans formule, et termine par une question de vérification. Vous l'utilisez en début de séance pour ancrer le concept avant la démonstration au banc.

**Le point commun** Cinq profils, cinq tâches différentes, **aucune donnée personnelle dans aucun prompt** — les énoncés à coller sont anonymisés ou neutralisés (Léo, pas Léo Dupont ; le paragraphe d'élève sans son nom). C'est la posture à internaliser dès le premier dialogue : l'IA locale est une *extension cognitive*, pas une base de données nominative.

## 8. Radio-guidage — faire installer cette IA par une IA cloud

Vous avez lu le chapitre, vous savez où vous allez. Voici l'outil pour **exécuter** : un prompt à coller dans une IA cloud, qui devient votre assistant patient et vous accompagne étape par étape. **Aucune donnée personnelle n'est échangée** — la conversation porte uniquement sur l'installation logicielle de votre poste, donc aucun problème RGPD.

### 8.1. Marche à suivre

1. **Téléchargez le fichier du chapitre** au format Markdown (bouton ci-dessous).
2. **Ouvrez une nouvelle conversation** avec votre IA cloud habituelle — Claude, ChatGPT, Gemini ou Mistral Le Chat, peu importe.
3. **Joignez le fichier `.md`** à la conversation.
4. **Copiez-collez le prompt ci-dessous** et envoyez-le.
5. **Suivez les questions de l'IA**, une étape à la fois. Envoyez une capture d'écran en cas de blocage.

### 8.2. Le prompt à copier

```
Tu es mon assistant de mise en œuvre pour le document que je viens
de te transmettre. Je l'ai parcouru mais je ne suis PAS développeur
ni informaticien. J'ai besoin que tu deviennes mon radio-guide.

RÈGLES NON NÉGOCIABLES
1. UNE étape à la fois. Tu ne donnes JAMAIS plus d'une action par
   message. Tu attends ma confirmation avant la suivante.
2. Vocabulaire accessible. Aucun acronyme sans explication.
3. Tu acceptes mes captures d'écran. Si je bloque, je t'envoie une
   image, tu l'analyses, tu m'orientes.
4. Tu diagnostiques les erreurs. Je colle le message, tu m'expliques
   en français courant et tu proposes la correction.
5. Si je décroche, on ralentit. Tu n'enchaînes pas.

RÈGLES ANTI-DÉRIVE — appris du terrain
6. TU ES LE RADIO-GUIDE. Ne renvoie JAMAIS l'utilisateur vers
   "une autre IA", "Claude dans un autre onglet" ou "ChatGPT".
   Tu as le rôle, tu le tiens. Si une tâche te dépasse, dis-le
   clairement et propose une alternative simple — mais ne te
   défausse pas vers toi-même.
7. TU NE VOIS PAS L'ÉCRAN sauf capture envoyée. Si l'utilisateur
   écrit du texte confus, tronqué ou hors-contexte (typique
   d'une dictée vocale ratée), NE PRÉSUME PAS de ce qu'il voit.
   Demande une capture ou une reformulation. JAMAIS d'invention
   sur l'état de son ordinateur.
8. TU NE CONNAIS PAS le métier ni le contexte de l'utilisateur
   sauf s'il te l'a dit. N'invente ni discipline enseignée, ni
   domaine professionnel, ni projet en cours. Si ce contexte
   t'aide, demande-le.
9. SI TU ES UN MODÈLE LÉGER (Haiku, GPT-mini, Gemini Flash,
   Mistral Small), reconnais-le en début de session : "Je suis
   un modèle léger. Pour un radio-guidage technique long avec
   utilisateur néophyte, un modèle plus capable (Sonnet, GPT-4o,
   Gemini Pro) serait plus fiable. Veux-tu continuer ou basculer ?"

OBJECTIF FINAL
Installer une IA locale fonctionnelle sur ma machine. Selon mes
prérequis matériels :
- Soit LM Studio (voie simple, sans terminal) avec un modèle
  3B-4B ou 7-8B adapté.
- Soit Ollama + Open WebUI (voie complète, plus puissante) avec
  Llama 3.1 8B ou Mistral 7B par défaut ; Gemma 3 12B uniquement
  si je dispose d'un GPU dédié ou d'un Mac Apple Silicon.
Et faire un premier test de dialogue qui fonctionne.

PREMIÈRE ÉTAPE OBLIGATOIRE — VÉRIFIER LA COMPATIBILITÉ MATÉRIELLE
AVANT TOUTE recommandation d'installation, tu vérifies que ma
machine peut faire tourner une IA locale décemment. Tu procèdes
ainsi :

a) Demande-moi si je sais trouver les caractéristiques de mon PC
   (RAM, processeur, carte graphique, OS, type de mémoire).
   Si non, guide-moi pas à pas pour les récupérer :
   - Windows : Démarrer → tape "dxdiag" → Entrée. Demande-moi
     de copier-coller le résultat. Ou : Paramètres → Système
     → Informations système.
   - macOS : Menu Apple → À propos de ce Mac. Demande capture
     d'écran complète.
   - Linux : commandes "uname -a", "free -h", "lscpu" dans
     un terminal, et "lspci | grep -i vga" pour la carte
     graphique. Demande-moi de coller la sortie.

b) ÉVALUE la machine à partir des informations reçues :
   - Très ancien (RAM < 8 Go, DDR2/DDR3 lent, pas de GPU,
     processeur < 8e génération Intel) : DÉCONSEILLE l'IA
     locale lourde. Propose un modèle 3B-4B très léger, OU
     suggère de continuer avec une IA cloud en cadrant le RGPD,
     OU d'attendre un renouvellement de matériel.
   - Standard (8-16 Go RAM, CPU récent, pas de GPU dédié) :
     recommande Llama 3.1 8B ou Mistral 7B (quantifiés).
     PAS de Gemma 12B, PAS de modèle 70B.
   - Confortable (16-32 Go RAM + GPU 8 Go VRAM, ou Mac Apple
     Silicon M1+) : Gemma 3 12B devient pertinent.
   - Puissant (32 Go+, GPU 16 Go+ VRAM) : modèles plus gros
     possibles.

c) Adapte aussi le choix LM Studio vs Ollama+Open WebUI selon
   mon niveau d'aisance déclaré. LM Studio si néophyte total ;
   Ollama+Open WebUI si à l'aise.

d) NE PROPOSE PAS d'étape concrète d'installation avant d'avoir
   validé ces points avec moi. C'est ton garde-fou principal :
   ne JAMAIS faire installer une IA lourde sur une machine qui
   ne suivra pas — ça se solde toujours par un abandon.

ENSUITE SEULEMENT
- Demande-moi où j'en suis dans le document (section, chantier).
- Propose la première action concrète, une seule, et attends.

Le document est ci-joint / ci-dessus. Commence par tes questions.
```

**Le radio-guidage en détail** Création d'un compte IA cloud, choix du modèle (Sonnet / GPT-4o / Gemini Pro / Mistral Large — pas les versions ultra-légères), les neuf règles du radio-guide expliquées, les trois phrases pour recadrer une IA qui dérape, les bonnes pratiques pendant la séance, et les trois cas où le radio-guidage par IA ne suffit pas : tout est rassemblé une fois pour toutes sur la page [**Radio-guidage**](radio-guidage.html).

## 9. Vous avez installé votre IA. Et maintenant ?

Si vous avez exécuté ce chapitre jusqu'au bout, vous avez maintenant une IA locale fonctionnelle sur votre machine. Bravo. Mais **ce n'est qu'une partie du voyage**.

Votre IA actuelle est *générique*. Elle parle bien, elle raisonne, elle peut vous aider sur des tâches courantes. Mais elle ne connaît rien de **vous** : pas vos référentiels, pas vos classes, pas votre style, pas vos contraintes.

Le **Chapitre 2** vous apprend à la personnaliser avec des **skills** — des fichiers texte qui transforment l'IA générique en collègue de votre discipline. C'est la marche qui rend l'outil vraiment utile en pratique. Sans skills, vous avez un assistant poli. Avec des skills, vous avez un collègue qui connaît votre métier.

## 10. Ressources et liens

### Outils — installation

[Ollama — moteur local — ollama.com](https://ollama.com)
[LM Studio — desktop tout-en-un — lmstudio.ai](https://lmstudio.ai)
[Open WebUI — interface — docs.openwebui.com](https://docs.openwebui.com)
[Docker Desktop — docker.com](https://www.docker.com/products/docker-desktop/)

### Modèles open source — pages de référence

[Llama 3.1 (Meta)](https://ollama.com/library/llama3.1)
[Mistral 7B (Mistral AI, FR)](https://ollama.com/library/mistral)
[Qwen 2.5 (Alibaba)](https://ollama.com/library/qwen2.5)
[Gemma 3 (Google DeepMind)](https://ollama.com/library/gemma3)
[Phi-3 (Microsoft)](https://ollama.com/library/phi3)
[DeepSeek (DeepSeek)](https://ollama.com/library/deepseek-r1)

### Comparer les modèles — classements à jour

[Chatbot Arena — lmarena.ai (comparaison à l'aveugle)](https://lmarena.ai)
[Hugging Face — Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)

### Cadre RGPD et institutionnel

[CNIL — Intelligence artificielle](https://www.cnil.fr/fr/intelligence-artificielle)
[Eduscol — cadre juridique du numérique](https://eduscol.education.fr/2900/cadre-juridique)
[MEN — cadre d'usage de l'IA en éducation](https://www.education.gouv.fr/cadre-d-usage-de-l-intelligence-artificielle-en-education-422171)
[RGPD article 28 — sous-traitance](https://gdpr-info.eu/art-28-gdpr/)

**Suite du guide**

- [**Chapitre 2 — Personnaliser votre IA avec des skills**](chapitre-2.md) : le concept de skill, anatomie, exemples enseignant et particulier, écosystème, bibliothèque de prompts, radioguidage à une autre personne.
- [**Chapitre 3 — Transformer son IA native en assistant pédagogique**](chapitre-3.md) : system prompt, couplage skill matière, multi-postes, charte d'usage, scénario de séance, évaluation.
- [**Chapitre 4 — Optimiser son Obsidian**](chapitre-4.md) : architecture du vault, branchement IA, conversion de l'existant, suivi élève sans double saisie, pivot CSV avec Charlemagne Pro.
- [**Annexe — Radio-guidage**](radio-guidage.html) : la méthode commune à tous les chapitres, expliquée une fois pour toutes.

**Version vivante** Ce guide est versionné. La version HTML interactive est publiée sur GitHub Pages. Les retours, corrections et ajouts sont les bienvenus : [fr.henninot@gmail.com](mailto:fr.henninot@gmail.com).
