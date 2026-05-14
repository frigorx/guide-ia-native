<!-- Document Markdown du guide « Installer une IA native » — F. Henninot. Version destinée à être jointe à une IA cloud comme support de radio-guidage. -->

# Installer une IA native\* sur son ordinateur

Guide pratique d'installation, de paramétrage et d'usage — pour enseignants de toutes filières et utilisateurs particuliers soucieux de leurs données.

**Auteur·** F. Henninot
**Public·** enseignants & particuliers, sans prérequis technique
**Version·** mai 2026
**Format·** HTML interactif + e-book PDF

**\*** Une **IA native** (ou « IA locale ») est une IA installée sur votre propre ordinateur, qui fonctionne **sans connexion à Internet**. Vos données ne quittent pas votre poste. C'est l'équivalent, pour l'IA, de Word installé sur votre PC face à Google Docs en ligne.

**Statut** Document de travail à caractère exploratoire, sans valeur officielle. Ne se substitue ni aux préconisations académiques ni au cadre fixé par chaque établissement.

**Mode d'emploi du guide — à lire en premier** Ce document est conçu pour être **donné à une IA cloud** (Claude, ChatGPT, Gemini, Mistral Le Chat — celle que vous utilisez déjà). Vous le lui transmettez en pièce jointe ou par copier-coller, et vous lui demandez de devenir **votre assistant de mise en œuvre**. Pas besoin de tout faire seul·e : l'IA générale lit ce document à votre place et vous radio-guide pas à pas, accepte vos captures d'écran, diagnostique vos erreurs. Le prompt ci-dessous active ce mode. **Pas encore d'IA cloud ?** Voir l'encart juste après. **Un mot vous bloque ?** Le [glossaire](glossaire.md) donne la définition accessible de tous les termes techniques. **Vous découvrez le projet ?** La [présentation du guide](presentation.html) en pose le cadre, la posture et le mode d'emploi — utile à lire avant de se lancer.

**Oui, on utilise une IA cloud pour installer une IA locale.** C'est un échafaudage temporaire et assumé : on s'en sert le temps de comprendre et d'installer, sur des contenus techniques sans donnée personnelle. Une fois l'installation terminée, on évite de confier des données sensibles (élèves, famille, santé) au cloud — c'est précisément à ça que sert l'IA locale. Cette contradiction apparente est en réalité le bon ordre des choses.

**Pas encore d'IA cloud ? Créer un compte en 2 minutes**

Quatre services principaux. Compte gratuit, **une simple adresse mail suffit**, aucune carte bancaire pour la version gratuite. Choisissez celui que vous préférez — vous pourrez toujours en changer.

Plusieurs IA cloud peuvent servir de radio-guide. Le choix dépendra de vos habitudes, des accès disponibles et du cadre fixé par votre établissement.

- **ChatGPT** — [chat.openai.com](https://chat.openai.com). Le plus connu, très polyvalent. Éditeur : OpenAI (US).
- **Claude** — [claude.ai](https://claude.ai). Bon support des pièces jointes et des captures d'écran. Éditeur : Anthropic (US).
- **Gemini** — [gemini.google.com](https://gemini.google.com). L'IA de Google. Connexion directe via votre compte Google si vous en avez un.
- **Mistral Le Chat** — [chat.mistral.ai](https://chat.mistral.ai). Éditeur français, à privilégier pour qui souhaite un acteur européen.

**Note de l'auteur.** À titre personnel, j'ai obtenu de bons résultats avec Claude pour le radio-guidage technique. Cette préférence est à éprouver soi-même ; tous les outils listés ci-dessus sont adaptés à la tâche.

**Cadre RGPD — important.** Ces services hébergent vos conversations sur leurs serveurs (États-Unis ou UE selon l'éditeur). C'est pourquoi on les utilise **uniquement pour la configuration** (installation, écriture de skills, débogage technique). **Jamais** pour traiter des données d'élèves, de famille, de patients, de santé, ou tout contenu personnel identifiable. Une conversation d'installation parle de fichiers, de commandes, de logiciels — pas de personnes. C'est précisément l'usage à risque minimal de ces services cloud.

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

### Sommaire

1. [Préambule](#preambule)
2. [Enjeux et limites : RGPD, souveraineté, usage](#enjeu)
3. [La grille de lecture en 4 briques](#cheminement)
4. [**Méthode recommandée — se faire installer par Claude**](#claude-tutor)
5. [Comparatif des trois solutions](#comparatif)
6. [Prérequis matériels et choix du modèle](#prerequis)
7. [Voie manuelle — installation Ollama + Open WebUI](#install)
8. [Premier prompt — se familiariser](#premier)
9. [Le concept de skill — cœur de la personnalisation](#skills)
10. [Construire son écosystème pédagogique](#ecosysteme)
11. [Bibliothèque de prompts métier](#prompts)
12. [Méthodologie de radioguidage](#radioguidage)
13. [Ressources et liens](#ressources)

## 1. Préambule

**Un mot d'honnêteté avant de commencer** Cette installation **n'est pas magique**. C'est un travail accessible à qui sait utiliser une souris, un clavier, copier-coller et lire un message d'erreur — pas besoin d'être informaticien. **Mais il faut accepter que ça prenne du temps.**

J'ai mis **une journée complète** pour boucler mon propre Chapitre 1, avec quelques moments d'arrachage de cheveux. Marie-Laure, première testeuse du guide qui n'avait jamais touché à un terminal, y est arrivée sur **une grosse après-midi**. **Personne ne le fait en claquant des doigts.** Mais tout le monde y arrive avec un peu de patience et un bon radio-guidage par IA cloud.

**Conseil pratique.** Ne tentez pas de tout enchaîner en une après-midi. Mieux vaut **une heure par jour pendant une semaine**. Les utilisateurs qui ont voulu tout faire d'un bloc ont parfois abandonné. Ceux qui ont pris le temps sont allés au bout.

L'IA conversationnelle est entrée dans le quotidien — des enseignants, mais aussi des particuliers — **sans cadre clair**. ChatGPT, Claude, Gemini sont utilisés pour corriger des copies, organiser une vie de famille, gérer des données de santé, sans que personne n'ait vraiment vérifié où partent ces informations. Ce guide propose une alternative : installer une **IA native**, qui tourne directement sur votre ordinateur, **sans envoi de données à un serveur tiers**.

**Pour qui** Ce guide a été pensé d'abord pour **les enseignants — toutes filières et tous niveaux** — afin de leur permettre d'utiliser une IA tout en respectant le cadre RGPD applicable aux données d'élèves. Il fonctionne aussi tel quel pour **tout particulier** qui souhaite installer une IA sur son PC personnel. Aucun prérequis de développeur. Si vous savez installer un logiciel et copier une commande, vous pouvez aller au bout.

**L'expérience qui a motivé ce guide** Notre première installation d'Ollama + Open WebUI, **même avec l'aide d'une IA conversationnelle pour nous guider**, nous a pris une journée. Sans ce radioguidage, c'est inaccessible à un utilisateur non technique. C'est ce qui valide la [méthode recommandée (§4)](#claude-tutor) : on ne donne pas une procédure papier, on donne un **prompt à coller dans Claude ou ChatGPT** qui prendra le relais et expliquera, étape par étape, en s'adaptant à la configuration du poste.

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

**Le point clé** Les trois premières briques sont standard. La quatrième — les **skills** — fait toute la différence. Un modèle moyen avec d'excellents skills bat un modèle excellent sans contexte.

## 4. Méthode recommandée — se faire installer par Claude

**Pour installer une IA, le plus efficace est d'utiliser une IA.** L'expérience nous a montré qu'un enseignant qui suit un tutoriel papier décroche à la première erreur inattendue. À l'inverse, un enseignant qui dialogue avec Claude (ou ChatGPT) pour s'installer Ollama avance à son rythme, montre ses écrans, fait diagnostiquer ses erreurs et arrive au bout. La méthode est **radioguidée par un assistant patient, gratuit, accessible depuis un navigateur**.

**Marche à suivre**

1. Se connecter à un assistant IA cloud que vous avez déjà : [Claude](https://claude.ai), [ChatGPT](https://chat.openai.com) ou [Gemini](https://gemini.google.com). Compte gratuit suffisant.
2. Ouvrir une **nouvelle conversation**.
3. Copier-coller **intégralement** le prompt ci-dessous, et envoyer.
4. Répondre aux questions que l'IA pose. Suivre une étape à la fois. Envoyer des captures d'écran en cas de blocage.

**Aucune donnée d'élève n'est échangée à ce stade.** La conversation porte uniquement sur l'installation logicielle de votre poste — donc aucun problème RGPD.

### 4.1. Le prompt à copier-coller

```
Tu es mon assistant pour installer une IA locale sur ma machine.
Je ne suis PAS développeur ni informaticien. Je suis un utilisateur normal
(enseignant, particulier, professionnel d'une autre filière...).

Règles de la séance — non négociables :

1. UNE étape à la fois. Tu ne donnes JAMAIS plus d'une action par message.
   Tu attends ma confirmation avant la suivante.

2. Vocabulaire accessible. Aucun acronyme sans explication. Si tu écris
   "CLI", "PATH", "shell", "headless", tu expliques en une phrase ce que
   c'est. Tu pars du principe que je ne sais rien.

3. Tu acceptes mes captures d'écran. Si je bloque, je t'envoie une image
   de mon écran. Tu analyses ce que tu vois et tu m'orientes.

4. Tu diagnostiques les erreurs. Si une commande échoue, je colle le
   message d'erreur. Tu m'expliques ce qu'il signifie en français
   courant, puis tu proposes la correction.

5. Tu confirmes l'étape avant d'avancer. Tu attends que je dise "ok"
   ou "fait" ou "ça marche" avant de passer à la suite.

6. Si je décroche, on ralentit. Tu n'enchaînes pas. Tu poses une
   question pour comprendre où je suis.

Objectif final : installer Ollama + Open WebUI sur ma machine,
télécharger un modèle francophone adapté à mon matériel
(par défaut Llama 3.1 8B ou Mistral 7B ; Gemma 3 12B uniquement
si je dispose d'un GPU dédié ou d'un Mac Apple Silicon),
et faire un premier test de dialogue qui fonctionne.

Commence par me demander, dans CE message uniquement :
 - Mon système d'exploitation (Windows / macOS / Linux) et sa version
 - La quantité de RAM de ma machine
 - Si je suis administrateur du poste (oui / non / je ne sais pas)
 - Si Docker est déjà installé (oui / non / je ne sais pas)
 - Mon niveau d'aisance avec le terminal (jamais / un peu / à l'aise)

À partir de mes réponses, tu construis la procédure adaptée à MA
configuration. Tu ne supposes rien. Si une étape échoue ou n'aboutit
pas, on s'arrête, on diagnostique ensemble, puis on reprend.

C'est parti.
```

### 4.2. Pourquoi ça marche

Ce prompt verrouille trois choses qui font échouer les tutoriels classiques. **La cadence** : une étape à la fois empêche l'enseignant de se perdre dans une procédure de 12 étapes. **Le vocabulaire** : interdire les acronymes non expliqués force l'IA à parler simplement. **Le diagnostic** : les captures d'écran et messages d'erreur sont gérés au cas par cas, là où un PDF reste muet.

### 4.3. Bonnes pratiques pendant la séance

- **Ne JAMAIS coller de données d'élève** dans cette conversation d'installation. Le sujet est purement technique.
- **Capture d'écran > recopie** à la main. L'IA lit l'image, situe précisément la fenêtre, gagne du temps.
- **Dire « je ne comprends pas »** dès qu'un mot accroche. L'IA reformule.
- **Une session = un PC.** Si vous installez sur plusieurs postes, ouvrir un fil distinct par poste, configurations différentes.

### 4.4. Quand le radioguidage par IA ne suffit pas

Trois cas où il faut basculer sur la voie manuelle (§7) ou demander un collègue référent : (1) poste académique verrouillé sans droits administrateur, (2) blocage réseau du proxy établissement sur les ports Docker, (3) carte graphique non reconnue par Ollama. Ces trois cas demandent un arbitrage humain — l'IA donnera des pistes mais pas la décision.

## 5. Comparatif des trois solutions retenues

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

**Recommandation** Pour un débutant complet : démarrer avec **LM Studio** (installateur graphique, double-clic, prêt en 10 min) pour se familiariser. Pour qui veut le vrai système de skills et un usage classe : **Ollama + Open WebUI**, en se faisant guider par la [méthode §4](#claude-tutor) plutôt qu'en lisant la procédure §7 en autonomie. **Claude** reste pertinent en complément pour les tâches longues *sans données élèves*.

## 6. Prérequis matériels et choix du modèle

### 6.1. Configuration minimale

| Usage visé | RAM | Stockage libre | GPU | Modèle conseillé |
| --- | --- | --- | --- | --- |
| Découverte, prompts courts | 8 Go | 10 Go | Aucun (CPU) | Gemma 3 4B / Llama 3.2 3B / Phi-3 mini |
| Usage quotidien polyvalent | 16 Go | 30 Go | Optionnel (GPU intégré OK) | **Llama 3.1 8B** ou **Mistral 7B** (par défaut, légers) — *Gemma 3 12B si GPU disponible ou Mac Apple Silicon* |
| Usage avancé, skills complexes | 32 Go | 80 Go | Recommandé (NVIDIA 8+ Go VRAM) | Gemma 3 27B / Llama 3.1 70B (quantifié) / Qwen 2.5 32B |

**Note matériel** Un Mac Apple Silicon (M1 et au-delà) est **excellent** pour l'IA locale grâce à sa mémoire unifiée. Un PC Windows avec carte graphique NVIDIA récente (RTX 3060+) est l'autre cible idéale. Un PC sans GPU dédié fonctionnera, en plus lent, sur des modèles 3 à 8 milliards de paramètres.

### 6.2. Choisir son modèle

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

## 7. Voie manuelle — Installation Ollama + Open WebUI

Procédure de référence pour qui préfère le pas-à-pas écrit, ou pour les cas où la [méthode §4](#claude-tutor) bute sur un blocage technique. La procédure LM Studio est plus simple (installateur graphique sur [lmstudio.ai](https://lmstudio.ai), double-clic, prêt).

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

   Sur le réseau pédagogique de l'établissement, l'IA installée sur un seul PC peut servir plusieurs postes élèves via le port 3000. À configurer en concertation avec le référent numérique d'établissement. *Procédure détaillée en Chapitre 2 §7.*

**Point de vigilance** L'installation de Docker requiert les **droits administrateur**. Sur un poste académique verrouillé, en parler en amont au RUPN / référent informatique. À défaut, LM Studio s'installe en mode utilisateur sans droits étendus.

## 8. Premier prompt — se familiariser

Avant de parler de skills, on prend la main avec quelques dialogues simples. L'idée est de mesurer **ce que sait faire le modèle de base** sans aide, pour mieux apprécier ensuite ce qu'un skill lui apportera.

**Test 1 — connaissance factuelle**

*« Qu'est-ce que le RGPD et à qui s'applique-t-il ? Réponds en 4 phrases. »*

On vérifie si le modèle reste précis ou s'il s'égare. Un modèle correct cite Règlement UE 2016/679, l'applicabilité aux organisations traitant des données de résidents UE, les droits des personnes.

**Test 2 — adaptation de niveau**

*« Explique le fonctionnement d'un cycle frigorifique à un enfant de 10 ans, en trois phrases courtes. »* *(ou, côté particulier : « Explique-moi le crédit d'impôt comme à quelqu'un qui n'y connaît rien. »)*

On évalue la capacité du modèle à **tenir un niveau de langue**. Sans contexte, il a tendance à être trop abstrait ou trop technique. C'est exactement ce qu'un skill « public débutant » corrige.

**Test 3 — production utile**

*« Rédige un mail poli pour annuler un rendez-vous prévu demain, en invoquant un imprévu professionnel, sans donner de détails. »*

Tâche utile et neutre côté données. On observe le ton, la longueur, la justesse du français.

## 9. Le concept de skill — cœur de la personnalisation

### 9.1. Qu'est-ce qu'un skill, simplement ?

**Précision de vocabulaire** Dans ce guide, le mot **« skill »** est utilisé au sens large : un ensemble d'instructions, de documents et de règles qui spécialisent l'IA pour un usage métier. Le terme vient à l'origine d'Anthropic (Claude), mais le concept est universel. Selon l'outil utilisé, on parlera aussi de *system prompt*, *modèle personnalisé*, *Modelfile* (Ollama), *workspace* ou *base documentaire (RAG)* — c'est la même idée.

Un **skill** (« compétence », « savoir-faire ») est un **dossier** qui contient un fichier texte décrivant à l'IA : *quand* elle doit s'en servir, *comment* elle doit s'en servir, et *avec quoi*. Une fois ce dossier déposé au bon endroit, l'IA le mobilise automatiquement dès qu'elle reconnaît un déclencheur. Vous n'avez plus à tout réexpliquer à chaque conversation.

**Analogie** Un skill, c'est **la fiche de poste** qu'on remet à un nouveau collaborateur. Ce nouveau collaborateur, ici, c'est l'IA. Vous l'écrivez une fois, elle s'en sert mille fois, et vous pouvez la transmettre à quelqu'un d'autre par simple copie du dossier.

### 9.2. Anatomie d'un skill

mon-skill/
├── SKILL.md # Le fichier principal — instructions à l'IA
├── references/ # (optionnel) docs que l'IA peut consulter
│ └── bareme.md
└── assets/ # (optionnel) modèles, gabarits
└── modele.docx

Le fichier `SKILL.md` commence par un en-tête (« frontmatter ») YAML, puis des instructions en français courant. Voici deux exemples concrets — un côté enseignant, un côté particulier — pour montrer que **le format est exactement le même**, seul le contenu change.

### 9.3. Exemple A — skill enseignant

*Rédiger automatiquement une appréciation de bulletin trimestriel à partir de quelques notes et observations.*

```
---
name: appreciation-bulletin
description: À partir de notes brutes, observations et postures observées en
  classe, rédige une appréciation de bulletin équilibrée, formulée à la
  troisième personne, sans jugement personnel, en 2 à 4 phrases. Utiliser
  dès que l'utilisateur évoque "appréciation", "bulletin", "synthèse
  trimestrielle", "commentaire de notes".
---

# Appréciation de bulletin — protocole personnel

## Quand utiliser ce skill
Dès que l'utilisateur fournit un nom d'élève, des notes ou des
observations, et demande une appréciation à coller dans un bulletin.

## Règles de rédaction
- 2 à 4 phrases maximum.
- Toujours commencer par un constat factuel (jamais un jugement).
- Citer un point d'effort observé, puis un axe de progrès concret.
- Aucun nom propre dans la formulation (sauf prénom si demandé).
- Vocabulaire bienveillant mais honnête. Pas de "doit faire plus
  d'efforts" sec — préférer "gagnerait à mobiliser davantage...".

## Étapes
1. Lire les notes et observations fournies.
2. Identifier UN point fort réel et UN axe de progrès concret.
3. Composer 3 phrases : constat / point fort / axe de progrès.
4. Relire pour bannir tout jugement de valeur sur la personne.
```

### 9.4. Exemple B — skill particulier

*Proposer chaque dimanche des menus de la semaine adaptés aux contraintes de la famille.*

```
---
name: menus-famille-semaine
description: Propose 7 dîners équilibrés pour la semaine, adaptés aux
  contraintes alimentaires de la famille (allergies, goûts, budget),
  avec liste de courses regroupée par rayon. Utiliser dès que l'utilisateur
  évoque "menus de la semaine", "que cuisiner", "liste de courses",
  "planning repas".
---

# Menus de la semaine — protocole famille

## Profil famille (à adapter)
- 2 adultes, 2 enfants (8 et 11 ans).
- Allergie aux fruits à coque.
- Pas de porc.
- Budget course raisonnable (autour de 100 €/semaine).
- Le mercredi midi, repas plus simple (enfants à la maison).

## Quand utiliser ce skill
Toute demande de planification des repas de la semaine ou de
préparation de liste de courses.

## Règles de proposition
- Toujours 7 dîners (lundi à dimanche).
- Au moins 2 repas végétariens dans la semaine.
- 1 plat "facile" le vendredi soir (jour fatigué).
- Privilégier les légumes de saison.
- Aucun ingrédient interdit ne doit apparaître.

## Format de sortie
Un tableau Jour / Plat / Temps de préparation, puis une liste
de courses regroupée par rayon (frais, sec, légumes, boucherie).
```

### 9.5. Pourquoi ça change tout

Sans skill, à chaque session je dois **tout réexpliquer** au modèle : qui je suis, quel format je veux, quelles sont mes contraintes. C'est fatigant, la qualité dépend de ma vigilance, et un détail oublié donne un résultat à côté.

Avec un skill correctement écrit, l'IA **se déclenche d'elle-même** dès qu'elle reconnaît un déclencheur dans ma demande. Le skill devient une *extension cognitive* : un savoir-faire capturé une fois, exploitable mille fois, partageable par simple copie de dossier.

### 9.6. Anatomie de la description — le bon déclenchement

Le champ `description` du frontmatter est **capital**. C'est lui qui décide si l'IA mobilise le skill ou non. Il doit énumérer explicitement les formulations utilisateur qui doivent déclencher le skill. Exemple :

```
description: Rédige un support de cours complet au format établissement
  (template 9 sections, 1500 mots min). Utiliser dès que l'utilisateur
  évoque "rédiger un cours", "préparer une fiche d'exercice", "construire
  une séance", "préparer un TP", même sans mentionner explicitement le skill.
```

## 10. Construire son écosystème de skills

On n'a pas *un* skill, on en a une demi-douzaine qui couvrent les tâches récurrentes. Voici deux écosystèmes types — un côté enseignant, un côté particulier — qui servent de modèles.

### 10.1. Écosystème type enseignant

| Skill | Rôle | Déclencheurs typiques |
| --- | --- | --- |
| contexte-classe | Cadre permanent : niveaux enseignés, public, charte graphique, contraintes pédagogiques | chargé en arrière-plan |
| appreciation-bulletin | Rédaction d'appréciations équilibrées à partir de notes et observations | « appréciation », « bulletin », « synthèse trimestrielle » |
| redaction-cours | Production d'un support de cours au format établissement | « rédige une fiche », « prépare une séance » |
| differenciation | 3 versions calibrées d'un exercice (consolidation / standard / approfondissement) | « différencier », « 3 niveaux » |
| mail-parents | Reformulation d'un mail à un parent dans un ton mesuré, professionnel | « mail aux parents », « répondre poliment » |
| cahier-de-texte | Récit de séance → fiche prête à coller dans l'ENT | « cahier de texte », « ce que j'ai fait en classe » |

### 10.2. Écosystème type particulier

| Skill | Rôle | Déclencheurs typiques |
| --- | --- | --- |
| contexte-famille | Profil famille permanent : composition, allergies, contraintes, budget | chargé en arrière-plan |
| menus-semaine | 7 dîners équilibrés + liste de courses regroupée par rayon | « menus », « liste de courses », « planning repas » |
| courriers-admin | Lettres administratives (résiliation, réclamation, demande) au format normalisé | « écris une lettre à », « rédige un courrier » |
| budget-mensuel | Catégorisation et synthèse à partir d'un relevé bancaire (en local, jamais cloud) | « mes dépenses », « catégoriser » |
| recettes-de-saison | Idées de recettes adaptées aux légumes de saison et au temps disponible | « quoi cuisiner », « recette rapide » |
| vacances-organisation | Planification d'un séjour : checklist, itinéraire, valise | « préparer un voyage », « checklist vacances » |

### 10.3. Méthode de construction — la même pour tous

L'écosystème se construit **par accumulation**, jamais d'un bloc :

1. Repérer une tâche que je fais **plus d'une fois par semaine**.
2. La faire une fois *avec* l'IA, en notant ce que je dois lui réexpliquer à chaque session.
3. Capturer ces explications dans un `SKILL.md` brouillon.
4. Tester sur 2 à 3 cas réels. Ajuster.
5. Geler la version, la nommer, la verser dans le dossier `skills/`.

## 11. Bibliothèque de prompts — exemples

Six exemples — trois côté enseignant, trois côté particulier — à copier-coller, ajuster, observer. **Ces prompts fonctionnent même sans skill installé** : ils servent de modèles pour comprendre comment formuler une demande efficace.

### Côté enseignant

#### Rédiger une appréciation

Synthèse de bulletin équilibrée.

Rédige une appréciation de bulletin pour un élève de 3e en mathématiques. Notes : 12, 9, 14, 11. Observations : participe à l'oral, manque de rigueur à l'écrit, progrès en géométrie. 3 phrases max, ton bienveillant et factuel.

#### Différencier un exercice

3 versions calibrées.

Voici un exercice de [discipline] : [coller l'énoncé]. Produis 3 versions : consolidation (élève fragile), standard (cœur de classe), approfondissement (élève autonome). Même objectif d'apprentissage, niveaux d'aide différents.

#### Reformuler un mail aux parents

Ton mesuré, professionnel.

Reformule ce mail à un parent dans un ton calme, factuel, sans accusation, en proposant un rendez-vous. Texte initial : [coller]. Objectif : obtenir un échange constructif, pas envenimer.

### Côté particulier

#### Menus de la semaine

7 dîners + liste de courses.

Propose 7 dîners pour la semaine. Famille de 4 (2 adultes, 2 enfants de 8 et 11 ans). Pas de fruits à coque (allergie). Budget course raisonnable. Au moins 2 repas végé. Présente : tableau jour/plat, puis liste de courses par rayon.

#### Lettre de résiliation

Courrier administratif normalisé.

Rédige une lettre de résiliation de contrat d'assurance habitation, échéance dans 2 mois, motif : déménagement. Ton formel mais courtois. Avec bloc adresse et formule de politesse standard. Format A4 prêt à imprimer.

#### Préparer un voyage

Checklist + valise + itinéraire.

Je pars 5 jours à Lisbonne en mai avec mon conjoint. Aide-moi à préparer : checklist administrative (documents, billets), liste valise saison, idées d'itinéraire jour par jour avec un musée et une promenade à pied chaque jour.

## 12. Radioguider une autre personne — la méthode

Le but de ce guide n'est pas de produire un expert en IA, c'est de permettre à toute personne — collègue, conjoint, parent — d'**atteindre l'autonomie opérationnelle** en quelques heures. La séquence proposée tient en quatre demi-journées étalées sur deux semaines.

1. **J1 — Cadrage et installation radioguidée (2 h)**

   Lecture rapide des sections 1 à 3 (le « pourquoi »). Ouverture de [claude.ai](https://claude.ai) ou ChatGPT. Copier-coller du **méga-prompt §4**. Suivre les questions/étapes, envoyer des captures d'écran en cas de blocage. Sortie : Ollama installé, un modèle téléchargé, premier dialogue qui répond. Objectif : *« ça parle »*.
2. **J2 — Premier usage utile (2 h)**

   Un cas réel choisi par la personne : reformuler un mail délicat, préparer un planning, expliquer une notion, organiser une checklist. On constate la valeur de l'outil *avant* d'écrire le moindre skill.
3. **J3 — Écriture du premier skill (3 h)**

   Choisir **une seule tâche** récurrente. Rédiger un `SKILL.md` minimal (frontmatter + 30 lignes), inspiré des exemples §9.3 / §9.4. Tester sur 3 cas. C'est la marche la plus exigeante. Le mentor doit être disponible.
4. **J4 — Autonomie et écosystème (2 h)**

   La personne a un skill qui marche. Elle en écrit un deuxième seule. Elle connaît la procédure et sait où trouver les ressources. Le radioguidage est terminé.

**Indicateur de réussite** Au bout de ces quatre étapes, la personne doit être capable de produire **de mémoire** un skill nouveau pour une tâche qu'elle choisit elle-même. Si ce n'est pas le cas, on reprend J3 sur un cas plus simple.

## 13. Ressources et liens

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

### Skills — documentation

[Anthropic — Skills documentation](https://docs.anthropic.com/en/docs/build-with-claude/skills)
[GitHub anthropics/skills — exemples](https://github.com/anthropics/skills)
[Open WebUI — modèles personnalisés](https://docs.openwebui.com/features/workspace/models)
[Ollama — Modelfile (équivalent skill)](https://github.com/ollama/ollama/blob/main/docs/modelfile.md)

### Cadre RGPD et institutionnel

[CNIL — Intelligence artificielle](https://www.cnil.fr/fr/intelligence-artificielle)
[Eduscol — cadre juridique du numérique](https://eduscol.education.fr/2900/cadre-juridique)
[MEN — cadre d'usage de l'IA en éducation](https://www.education.gouv.fr/cadre-d-usage-de-l-intelligence-artificielle-en-education-422171)
[RGPD article 28 — sous-traitance](https://gdpr-info.eu/art-28-gdpr/)

**Version vivante** Ce guide est versionné. La version HTML interactive est publiée sur GitHub Pages (URL communiquée séparément). Les retours, corrections et ajouts sont les bienvenus.

**Suite du guide**

- [**Chapitre 2 — Transformer son IA native en assistant pédagogique pour les élèves**](chapitre-2.md) : system prompt, couplage skill matière, multi-postes, charte d'usage, scénario de séance, évaluation.
- [**Chapitre 3 — Optimiser son Obsidian**](chapitre-3.md) : architecture du vault, branchement IA, conversion de l'existant, transformation d'un référentiel en skill, suivi élève sans double saisie, pivot CSV avec Charlemagne Pro.
