<!-- Document Markdown du guide « Installer une IA native » — F. Henninot. Version destinée à être jointe à une IA cloud comme support de radio-guidage. -->

# Optimiser son Obsidian

Construire une mémoire long-terme structurée et la brancher à l'IA. Sortir des données dispersées, en finir avec la double saisie, retrouver une vraie continuité de travail.

**Auteur·** F. Henninot
**Public·** profs, acteurs éducatifs, particuliers organisés
**Prérequis·** Chapitres 1 à 3
**Version·** mai 2026

Parcours · Chapitre 4 sur 4
[1 · Installation](chapitre-1.md)
→
[2 · Skills](chapitre-2.md)
→
[3 · Chatbot](chapitre-3.md)
→
4 · Obsidian

**Statut** Document de travail à caractère exploratoire, sans valeur officielle. Suite des [Chapitres 1 à 3](chapitre-1.md). Obsidian doit être installé ; l'IA locale (Chapitre 1) doit être fonctionnelle. Aucune connaissance préalable d'Obsidian n'est requise — ce chapitre est aussi accessible à qui le découvre.

**Mode d'emploi de ce chapitre** Ce document est conçu pour être **lu d'abord**, puis **exécuté avec l'aide d'une IA cloud** (Claude, ChatGPT, Gemini, Mistral Le Chat). Lisez le chapitre en entier pour comprendre l'esprit. À la fin ([section 11](#radio-guidage)), vous trouverez le **radio-guidage** : un prompt à coller dans votre IA cloud habituelle, et un fichier à joindre. L'IA prend alors le relais et vous accompagne pas à pas dans l'exécution.

**⚠ N'allez pas directement à l'action.** Lisez le chapitre d'abord — la règle qui fait réussir un vault Obsidian (« partir des sorties, jamais des sources ») se comprend *avant* de construire, pas après. Le téléchargement du fichier `.md` et le prompt à coller sont rassemblés à la fin, dans la [section 11](#radio-guidage).

**Un mot vous bloque ?** Le [glossaire](glossaire.md) est en lien permanent en bas de page. **Le radio-guidage, c'est quoi au juste ?** La page [Radio-guidage](radio-guidage.html) l'explique une fois pour toutes.

**Avant tout — Obsidian n'est pas l'IA**

C'est la confusion la plus fréquente à l'arrivée sur ce chapitre. Pour éviter d'aller trop vite, posons les briques :

- **Obsidian** est une *bibliothèque locale de notes* en texte (markdown). Stocke vos cours, fiches, référentiels, comptes-rendus. **Ne « comprend » rien tout seul.**
- **L'IA locale** (Ollama + un modèle) est le *lecteur intelligent*. Elle sait comprendre, reformuler, synthétiser. **Mais elle ne lit pas vos notes automatiquement.**
- **Les plugins Obsidian** (Smart Connections, Local GPT, Copilot…) sont le *pont* entre les deux. Sans plugin correctement configuré, l'IA locale ne touchera pas à vos notes Obsidian.
- **Embeddings & RAG** sont les méthodes techniques qui permettent à l'IA de retrouver les bonnes notes dans votre vault avant de répondre. Voir glossaire pour les définitions.

**Conséquence :** ce chapitre va vous faire installer Obsidian, structurer un vault, puis brancher dessus deux ou trois plugins pour que l'IA locale puisse vous aider à exploiter vos notes. Ce n'est pas « Obsidian = IA » — c'est « Obsidian + IA = mémoire long-terme de votre travail ».

**⚠ Avertissement plugins.** Certains plugins Obsidian utilisent des API cloud externes (ChatGPT, Claude, etc.) plutôt que votre Ollama local. **Ne pas utiliser ces plugins avec des données élèves ou sensibles sans validation adaptée.** Le chapitre privilégie les plugins qui se branchent à Ollama local.

**Boussole — quelle IA pour quel usage ?** Ce chapitre est le seul à mélanger deux régimes : on continue d'apprendre l'outil avec une IA cloud, mais le travail réel sur vos notes se fait **obligatoirement en local**. Avant de plonger, repérez quel usage correspond à quoi.

| Usage | Quelle IA |
| --- | --- |
| Radio-guidage de ce chapitre (installation des plugins, première mise en place du vault) | IA CLOUD   comme aux Chapitres 1 à 3. |
| Conversion d'archives pédagogiques (anciens TP, séances, fiches au format PDF/DOCX/PPTX) | IA CLOUD   autorisée — supports pédagogiques non personnels uniquement. |
| Travail quotidien dans Obsidian (Smart Connections, Local GPT, suivi élève, exports Charlemagne) | IA LOCALE   obligatoire — données nominatives en jeu. |

**Règle pratique :** dès qu'il y a une **donnée d'élève ou personnelle** en jeu, c'est **IA locale**. Pour le reste — ancien matériel pédagogique, apprentissage de l'outil — le **cloud** est OK.

### Sommaire

1. [Pourquoi Obsidian, et pourquoi maintenant](#preambule)
2. [Le diagnostic — Obsidian sous-exploité, 90 % des cas](#diagnostic)
3. [La règle inverse — partir des sorties, jamais des sources](#regle-inverse)
4. [Architecture en couches du vault](#architecture)
5. [Brancher l'IA locale sur Obsidian](#brancher-ia)
6. [Convertir l'existant — workflow IA en lot](#conversion)
7. [**Transformer un référentiel officiel en skill**](#referentiel-skill)
8. [Le suivi élève sans double saisie — pivot CSV](#suivi-eleve)
9. [Méthodologie de mise en place](#methodologie)
10. [Pièges et anti-patterns](#pieges)
11. [**Radio-guidage — structurer son vault avec une IA cloud**](#radio-guidage)
12. [Vous êtes au bout du parcours principal](#fin-parcours)
13. [Ressources et liens](#ressources)

## 1. Pourquoi Obsidian, et pourquoi maintenant

Au Chapitre 1, l'IA locale a une mémoire **de courte durée** : à chaque conversation, elle redémarre à zéro. Les skills du [Chapitre 2](chapitre-2.md) compensent cette amnésie en injectant un contexte permanent, mais leur place est limitée — on ne met pas dix années de cours dans un `SKILL.md`.

Au Chapitre 3, on a déployé un chatbot pour les élèves, mais qui parle d'*une* matière, à un *moment* donné, sans souvenirs des séances précédentes. Le résultat est utile, mais structurellement **sans profondeur historique**.

Obsidian comble exactement ce manque. C'est un **logiciel de prise de notes en markdown** (texte simple, fichiers lisibles partout, archivables à vie), qui stocke **tout en local sur votre disque**, et qui se laisse interroger par une IA via quelques plugins gratuits. En clair : un « second cerveau » qui accumule année après année, et que l'IA peut consulter à la demande.

**Ce que vous saurez faire en sortie** Structurer un vault Obsidian en couches numérotées (00 référentiels → 90 archive), brancher votre IA locale dessus via Smart Connections et Local GPT, convertir l'existant par lots d'une vingtaine de fichiers par mois, transformer un référentiel de diplôme en skill exploitable, et piloter le suivi élève en évitant la double saisie avec Charlemagne Pro grâce à des CSV générés à la demande — tout en respectant le cadre établissement pour les données nominatives.

**Promesse concrète** Une fois Obsidian bien structuré et l'IA branchée dessus, vous pourrez dire : *« Résume-moi tout ce que j'ai noté sur la classe de 1MFER cette année »*, ou *« Sur quels chapitres de mathématiques mes 3e ont le plus achoppé sur les 5 dernières années ? »*. La réponse vient de **votre** historique, pas d'un modèle générique.

## 2. Le diagnostic — Obsidian sous-exploité, 90 % des cas

La plupart des utilisateurs d'Obsidian — y compris des enseignants impliqués — n'utilisent qu'une **fraction** du potentiel de l'outil. Les symptômes typiques :

| Symptôme | Conséquence |
| --- | --- |
| Le vault ne contient que des notes isolées, sans liens | Pas d'effet de réseau, l'IA branchée dessus voit des îlots |
| Les fichiers vraiment précieux (TP, séances, fiches) sont ailleurs (Drive, OneDrive, disque dur) | L'IA ne peut pas s'en inspirer, on perd la valeur d'archive |
| Aucune métadonnée (pas de frontmatter, pas de tags) | Impossible de filtrer, de trier, de générer des vues automatiques |
| Tout est mis dans un seul gros dossier « Notes » | Bruit dominant, signal noyé, l'IA répond mal |
| Les plugins installés ne sont pas utilisés (Dataview, Smart Connections…) | On reste à un niveau « bloc-notes numérique » qui ne justifie pas le détour |

**Cas typique vécu** Un prof a un vault Obsidian de 200 notes (référentiels, lexique, idées) qui lui sert peu, et **60 Go de TP, séances, examens, fiches** stockés ailleurs (Drive, disques externes, cloud établissement). L'IA branchée à Obsidian voit 200 notes — soit moins de 0,5 % de son patrimoine pédagogique. **L'optimisation ne consiste pas à mettre Obsidian partout, mais à choisir intelligemment ce qui mérite d'y entrer.**

## 3. La règle inverse — partir des sorties, jamais des sources

Le réflexe naturel est : « je vais migrer mes 60 Go dans Obsidian, puis je verrai ». **C'est exactement l'inverse qu'il faut faire.** Cette approche, on l'a tous essayée, elle conduit à des semaines de travail pour un vault saturé que personne n'arrive plus à exploiter.

La règle qui fonctionne : **partir des sorties souhaitées, pas des sources existantes**. On se pose une seule question : *« qu'est-ce que je voudrais que mon IA + Obsidian sache faire que mon IA seule ne sait pas faire ? »*. La réponse fait apparaître **5 à 8 « produits »**, pas plus. Pour chaque produit, on remonte aux sources qui le nourrissent : ce sont elles, et elles seules, qui méritent d'être structurées dans Obsidian.

### 3.1. Exemples de produits prioritaires côté enseignant

1. Quand je prépare une séance, qu'elle s'inspire de mes **meilleures séances passées** sur le même thème.
2. Quand je rédige un TP, qu'elle respecte la **trame de mes TP validés**.
3. Quand j'écris une appréciation, qu'elle reprenne le **registre que j'ai stabilisé**.
4. Quand je positionne un élève, qu'elle ait son **historique sous le coude**.
5. Quand je dois écrire un mail délicat, qu'elle reprenne mes **formulations habituelles**.
6. Quand je dois remonter des notes dans l'outil institutionnel (Charlemagne Pro, École Directe), qu'elle me **produise le CSV directement**.

Pour chacun, le sous-ensemble de sources réellement utile fait **5 à 20 fichiers**. Pas 6000. Le reste reste où il est — accessible, mais non indexé.

**Règle pratique** Une note qui sera **lue 100 fois** mérite la conversion soignée. Une note **jamais rouverte depuis 2019** ne la mérite pas. Le tri par usage est mille fois plus précieux que le tri exhaustif.

## 4. Architecture en couches du vault

Un vault qui tient dans la durée s'organise en **couches**, du plus permanent au plus jetable. Les couches sont numérotées pour s'afficher dans le bon ordre alphabétique, et leur granularité dit à l'IA **où aller chercher** en priorité.

```
vault/
├── 00-référentiels/ # Le canon : programmes, référentiels, normes
├── 10-trames-types/ # Les patterns à respecter : trame TP, trame séance, trame mail
├── 20-exemples-canoniques/ # 5-10 productions modèles par catégorie
├── 30-année-en-cours/ # Les séances vivantes du moment, par classe
│   ├── 1MFER/
│   ├── 2CAP/
│   └── TBPMFER/
├── 40-élèves/ # Suivi individuel — remplace les bases tierces
│   ├── _template-eleve.md
│   ├── dupont-lucas.md
│   └── martin-sarah.md
├── 50-journal/ # Journal du prof — observations, retours, idées
└── 90-archive/ # Le reste : accessible par lien, pas indexé en priorité
```

### 4.1. À quoi sert chaque couche

#### 00 — Référentiels

Programmes officiels, référentiels de diplômes, normes métier, lexique. Ce qui ne bouge pas (ou peu). L'IA y consulte le cadre quand vous lui demandez de respecter un référentiel.

#### 10 — Trames-types

Vos patterns à vous : la trame de séance que vous suivez, la trame de TP, la structure d'un mail aux parents, le format d'une appréciation. L'IA s'en inspire pour produire du « à votre manière ».

#### 20 — Exemples canoniques

5 à 10 produits réels que vous considérez comme *de bonne facture*, classés par thème. Ce sont les modèles que l'IA cherchera à imiter quand vous lui demandez une production similaire.

#### 30 — Année en cours

Les séances vivantes, par classe. Une note par séance, avec date, classe, objectif, déroulement, observations. C'est *la* couche qui prend du volume sur l'année.

#### 40 — Élèves

Une note par élève. Informations utiles (niveau, particularités, aménagements), historique des évaluations, observations en cours d'année. Source unique pour générer ensuite les CSV de remontée.

#### 50 — Journal

Un fichier par jour (ou par semaine) où vous jetez observations, idées, retours d'élèves, alertes. Le terreau d'où sortent ensuite les vraies notes structurées.

La couche **90-archive** est volontairement plate. C'est là que va tout ce qui n'a pas vocation à être indexé en priorité par l'IA, mais qu'on veut garder à portée. On peut y jeter ses anciens dossiers en vrac, sans les retravailler. Le jour où une note de la couche 90 commence à servir, on la promeut vers la couche 20 ou 30.

### 4.2. Le frontmatter YAML — indispensable

Chaque note importante commence par un en-tête YAML, qui rend le vault filtrable et indexable. Sans ça, l'IA navigue à l'aveugle.

```
---
type: seance
classe: 1MFER
date: 2026-03-14
duree: 1h30
objectif: Contrôle de la surchauffe à l'évaporateur
competences: [C2.3, C3.1]
support: banc DBK
public-specifique: [TDAH, DYS]
statut: validee
tags: [cycle-frigo, TP, première]
---

# Séance du 14 mars 2026 — surchauffe évaporateur

## Objectif
...

## Déroulement
...
```

## 5. Brancher l'IA locale sur Obsidian IA LOCALE

Sans IA, Obsidian est un (excellent) gestionnaire de notes. Avec une IA locale branchée, c'est un **assistant qui connaît votre travail**. Trois plugins se complètent — installés depuis *Settings → Community plugins* dans Obsidian.

| Plugin | Rôle | Mise en route |
| --- | --- | --- |
| Smart Connections | Indexation sémantique du vault : trouve les notes *similaires en sens*, pas juste en mots-clés. Permet la recherche « comme un humain » | Configurer un modèle d'embedding local (via Ollama). Première indexation longue (10-60 min selon la taille du vault), puis instantanée. |
| Local GPT (ou Copilot for Obsidian) | Chatbot intégré à Obsidian, qui répond en s'appuyant sur les notes ouvertes ou sélectionnées | Pointer le plugin vers `http://localhost:11434` (Ollama), choisir le modèle (Gemma 3 12B, Llama 3.1 8B…). Prêt en 2 minutes. |
| Text Generator | Génération de texte à la demande à partir de prompts personnalisés (vos propres modèles de prompts, stockés dans le vault) | Configurer le provider Ollama. Créer des templates de prompts (génération d'appréciation, de séance, etc.). |

**Le bon flux quotidien** Vous ouvrez la note d'une séance à venir. Vous lancez Local GPT, vous lui demandez *« inspire-toi de mes séances passées sur ce thème pour me proposer un plan »*. Le plugin trouve les notes similaires via Smart Connections, les passe à l'IA, l'IA propose. Vous gardez, ajustez, validez. La séance suivante est créée en quelques minutes, avec votre style.

### 5.1. Choisir le modèle pour Obsidian

Le modèle d'**embedding** (utilisé par Smart Connections) ne fait pas du texte, il fait des vecteurs. Modèles légers et rapides recommandés : `nomic-embed-text` ou `mxbai-embed-large` — à télécharger via `ollama pull`. Le modèle **de génération** (utilisé par Local GPT / Text Generator) reste celui du Chapitre 1 : Gemma 3 12B est un excellent défaut.

## 6. Convertir l'existant — workflow IA en lot IA CLOUD · supports pédagogiques

La conversion massive est **un chantier de fond, pas un week-end**. On procède par lots de 10 à 20 fichiers, ciblés sur un seul cas d'usage à la fois. L'IA fait le sale boulot, vous validez en relisant.

### 6.1. Le prompt de conversion par lot — à coller dans Claude ou ChatGPT

Pourquoi cloud et pas local ? Parce que le cloud excelle à lire des PDF complexes, des DOCX avec mise en page, des PPTX. Pour cette tâche précise — convertir des documents en markdown structuré — c'est plus efficace. **Aucune donnée d'élève dans cette conversion** : seulement des supports pédagogiques (TP, séances, fiches).

```
Tu es mon assistant de conversion d'archive pédagogique vers Obsidian.

Je vais te déposer un fichier (PDF, DOCX, PPTX, image). Pour chaque
fichier, tu produis UNE note markdown structurée selon le modèle
ci-dessous. Tu n'inventes rien : ce qui n'est pas dans le fichier
source reste vide.

MODÈLE DE NOTE
---
type: [seance / TP / cours / fiche / examen — à choisir selon contenu]
classe: [si visible — sinon vide]
date: [AAAA-MM-JJ si visible — sinon vide]
duree: [si visible]
objectif: [phrase courte si visible — sinon vide]
competences: [liste si visibles]
tags: [3 à 5 mots-clés thématiques que tu déduis]
statut: a-revoir
---

# [Titre déduit du contenu]

## Objectif
[Si présent dans le source]

## Prérequis
[Si présents]

## Déroulement
[Structure principale du document, en sections H3 si besoin]

## Productions attendues
[Si présent]

## Ressources / Annexes
[Liste]

## Notes de conversion
[Tes propres remarques : "image illisible page 3",
 "barème manquant", "à compléter manuellement",
 pour me signaler ce qui mérite vérification]

RÈGLES
- Tu structures, tu ne paraphrases pas inutilement.
- Tu mets en gras les notions-clés que tu identifies.
- Tu listes en bullet-points les énumérations.
- Si une formule mathématique est présente, tu la rends en LaTeX
  ($...$ en ligne ou $$...$$ en bloc).
- Tu réponds UNIQUEMENT avec le contenu markdown, sans préambule.

Je te dépose le premier fichier maintenant.
```

### 6.2. Le geste hebdomadaire — 30 minutes le dimanche soir

1. **Choisir 5 fichiers** dans l'archive (sur un même thème, idéalement).
2. **Déposer un à un** dans la conversation cloud avec le prompt §6.1 collé.
3. **Copier la sortie markdown**, créer un fichier `.md` dans la bonne couche du vault, coller.
4. **Relire en 2 minutes** et corriger ce qui doit l'être.
5. **Repasser le statut** du frontmatter de `a-revoir` à `validee`.

À ce rythme : 20 notes par mois, 200 par an. En deux ans, **votre patrimoine pédagogique utile est dans Obsidian**, votre IA le voit, et vous travaillez infiniment mieux. La couche 90-archive ne disparaît jamais — elle reste votre filet de sécurité.

**Rappel RGPD** Cette procédure utilise Claude/ChatGPT en cloud. Elle est **strictement réservée aux supports pédagogiques** (TP, séances, fiches). **Jamais de copies d'élèves, jamais de bulletins, jamais de listes nominatives dans cette conversation cloud.** Pour le suivi élève, on utilise exclusivement l'IA locale (§8).

## 7. Transformer un référentiel officiel en skill IA CLOUD · documents officiels publics

Les référentiels de diplômes (CAP, BAC PRO, BTS) sont des **PDF officiels de 80 à 200 pages**, denses, structurés, mais difficilement exploitables tels quels par une IA. Ils contiennent pourtant la matière la plus précieuse : codes de compétences, blocs, savoirs associés, situations professionnelles, modalités d'évaluation, coefficients. Les transformer en skill exploitable (la notion de skill est posée au [Chapitre 2](chapitre-2.md)) est **le meilleur investissement temps qu'on puisse faire** pour une discipline donnée — c'est trois heures qui économisent ensuite des dizaines d'heures de réexplications à l'IA.

### 7.1. La cible — anatomie du skill référentiel

Un skill « référentiel » bien fait, c'est un dossier de 5 à 7 fichiers markdown reliés, avec un `SKILL.md` qui sait quand mobiliser quoi :

```
skills/referentiel-bac-pro-mfer/
├── SKILL.md # Frontmatter + règles d'usage
└── references/
    ├── competences.md # Toutes les compétences (C1.1 → CN.N)
    ├── savoirs-associes.md # Les savoirs S1, S2... avec niveau taxonomique
    ├── situations-pro.md # Situations professionnelles attendues
    ├── epreuves.md # Modalités d'évaluation, coefficients
    ├── lexique-metier.md # Vocabulaire incontournable
    └── pfmp.md # Cadre des PFMP, attendus de stage
```

### 7.2. Le prompt de conversion — un seul passage par référentiel

Cette conversion se fait dans **Claude ou ChatGPT (cloud)**, pas en local — les modèles cloud lisent mieux les PDF complexes avec tableaux, et le référentiel est un document **public**, donc aucun enjeu RGPD. À coller dans une nouvelle conversation, puis déposer le PDF du référentiel.

```
Tu es mon assistant pour transformer un référentiel officiel de
diplôme en base de connaissances structurée exploitable par une IA.

Je vais te déposer le PDF du référentiel. Tu produis 6 fichiers
markdown en sortie, dans l'ordre suivant.

CONTRAINTE FONDAMENTALE
- Tu n'inventes JAMAIS un code, une compétence, un coefficient.
- Si une info manque ou est ambiguë, tu écris "à vérifier"
  et tu cites la page du PDF où on devrait trouver l'info.
- Tu cites systématiquement le numéro de page du PDF source
  pour permettre la vérification.

FICHIER 1 — competences.md
---
type: referentiel-competences
diplome: [intitulé exact]
publication: [date BO]
source: [pages du PDF où trouver les compétences]
---
Table markdown avec colonnes : Code, Libellé, Bloc, Page-source.

FICHIER 2 — savoirs-associes.md
Table : Code, Libellé, Niveau taxonomique, Compétences liées, Page-source.

FICHIER 3 — situations-pro.md
Liste des situations professionnelles attendues, regroupées par bloc.

FICHIER 4 — epreuves.md
Pour chaque épreuve : Code, Intitulé, Coefficient, Forme, Durée,
Compétences évaluées, Page-source.

FICHIER 5 — lexique-metier.md
30 à 50 termes essentiels du métier visé, avec définition courte.

FICHIER 6 — SKILL.md
Frontmatter YAML + instructions à l'IA :
"Utiliser ce référentiel dès que l'utilisateur évoque le diplôme,
un code de compétence, un savoir, une épreuve. Toujours citer
le code officiel et le coefficient si disponible. Ne jamais
inventer."

Tu produis les 6 fichiers l'un après l'autre, séparés par
"=== FICHIER N ===". Tu attends ma confirmation avant de
passer au suivant si je le demande.

Je dépose le PDF maintenant.
```

### 7.3. Validation — l'étape qu'on ne saute jamais

Une fois les 6 fichiers générés, on les colle dans `skills/referentiel-XXX/references/` et on **relit en une heure** en parallèle du PDF officiel. On corrige les erreurs (il y en a). On valide chaque ligne d'épreuves / coefficients. C'est cette relecture qui transforme une sortie IA approximative en source de vérité utilisable.

**À vérifier impérativement** Les coefficients d'épreuves, les codes de compétences, les durées d'épreuves. Une erreur sur un coefficient propagée par l'IA pendant 6 mois fait beaucoup plus de dégâts qu'une erreur dans une simple note.

### 7.4. Tester sur 3 cas concrets

Une fois validé, le skill se teste sur trois questions réelles :

1. « Quelle compétence vise un TP sur le contrôle de la surchauffe ? » → l'IA doit citer le code exact (ex. C2.3) et son libellé.
2. « Quelle est la durée et le coefficient de l'épreuve E2 ? » → réponse précise, traçable.
3. « Donne-moi les savoirs associés mobilisés en première année. » → liste correcte.

Si les trois passent, le skill est productif. Sinon, retour au fichier source à corriger.

## 8. Interopérabilité avec les outils institutionnels — suivi élève sans double saisie IA LOCALE · données nominatives

**Précaution — outils institutionnels et données d'élèves**

Ce chapitre n'a **pas vocation à proposer une connexion automatique aux logiciels institutionnels de vie scolaire** (Charlemagne Pro, École Directe, Pronote, ENT académique). Il ne s'agit pas non plus de contourner ces outils ou leurs procédures.

L'usage proposé est plus simple et plus prudent : **l'IA locale aide à préparer, nettoyer ou convertir des fichiers d'échange au format CSV/XLSX**, lorsque l'outil institutionnel propose officiellement une fonction d'import ou d'export.

Tout suivi nominatif d'élève — *a fortiori* avec des données sensibles (aménagements, santé, handicap, situations familiales) — engage votre responsabilité de traitant au sens RGPD et **doit s'inscrire dans le cadre validé par votre établissement** : information des familles, validation du chef d'établissement et du DPO académique, sécurité du poste, durée de conservation, procédure d'effacement. Les fichiers contenant des données élèves doivent être traités **exclusivement en local** ; ils ne doivent **jamais** être collés dans une IA cloud.

Le suivi des élèves est un endroit critique. Les outils institutionnels sont **imposés en sortie** mais souvent **pénibles en saisie quotidienne**. La stratégie : **tenir le suivi dans Obsidian (ou un outil local équivalent), produire des CSV conformes au moment de la remontée**.

### 8.1. La note-élève — illustration de structure, cas sensible

**Cas sensible — usage non recommandé hors cadre établissement**

Le suivi nominatif d'élève dans un vault personnel **n'est pas un usage standard** proposé par ce guide. C'est un cas particulier qui suppose obligatoirement :

- l'inscription explicite du dispositif dans le **cadre de l'établissement** (charte numérique, accord chef d'établissement) ;
- la **validation du DPO académique** ;
- l'**information écrite des familles** sur la nature, la finalité, la durée de conservation et la procédure d'effacement ;
- une **sécurité du poste** à la hauteur (chiffrement disque, session protégée, sauvegardes chiffrées) ;
- la **limitation aux seules informations strictement nécessaires** à la pratique pédagogique — pas de stockage de données médicales ou de diagnostics personnels sans cadre formel.

Les champs liés à des aménagements ou à la santé sont des **données de l'article 9 du RGPD** (catégories particulières) ; leur traitement obéit à des règles strictes. **En l'absence de ce cadre, ne pas mettre en œuvre.** Le template ci-dessous est fourni comme **illustration de structure**, à des fins de discussion et de référence — pas comme modèle à reproduire en l'état.

```
---
type: eleve
classe: [classe]
nom: [nom]
prenom: [prenom]
identifiant-interne: [code école/établissement, pas la date de naissance]
amenagements: [renseigner selon notification, ex. "tiers-temps" ; éviter les
  diagnostics médicaux nominatifs sans cadre validé]
projet-pro: [projet]
statut: actif
---

# [Prénom NOM] — [classe]

## Profil professionnel et scolaire
[Éléments factuels et utiles à votre pratique de classe.
 Éviter les jugements de valeur et les éléments médicaux non couverts
 par une notification formelle.]

## Aménagements pédagogiques actifs
- [Lister uniquement les aménagements actés par PPS / PAP / notification.]
- [Formulation orientée action : "consignes en phrases courtes",
   "pause de 5 min toutes les 25 min en TP long"...]

## Historique évaluations
| Date       | Évaluation         | Note  | Compétences          | Statut   |
|------------|--------------------|-------|----------------------|----------|
| 2026-03-14 | TP n°4             | 14/20 | C2.3 acquis, C3.1 EC | validee  |
| 2026-02-21 | Évaluation n°2     | 11/20 | C1.2 EC              | validee  |

## Observations pédagogiques
- 2026-03-10 — Difficultés sur [notion]. Prévoir remédiation.
- 2026-02-15 — Bon retour de stage.

## Plan de remédiation en cours
- [Actions concrètes prévues.]
```

### 8.2. L'export CSV vers l'outil imposé

Quand vient le moment de remonter les notes ou positionnements dans l'outil institutionnel, on demande à l'IA locale de produire **le CSV exact attendu par cet outil**. Pour ça, il faut un skill `export-charlemagne` (ou `export-ed`) qui contient les colonnes, l'ordre, le séparateur, les codes attendus.

```
---
name: export-charlemagne
description: Génère un fichier CSV pour import dans Charlemagne Pro
  à partir des notes de la couche 40-élèves. Format strict :
  encodage UTF-8, séparateur point-virgule, en-têtes fixes.
  Utiliser dès que l'utilisateur évoque "export Charlemagne",
  "CSV pour Charlemagne", "remonter les notes".
---

# Export Charlemagne Pro

## Format attendu
- Encodage : UTF-8 (avec BOM)
- Séparateur : ; (point-virgule)
- Première ligne : en-têtes EXACTS suivants :
  Nom;Prenom;Classe;DateEval;CodeEval;Note;Bareme;Commentaire

## Règles
- Une ligne par couple (élève × évaluation).
- Dates au format JJ/MM/AAAA.
- Notes en nombre décimal (12.5, pas 12,5).
- Commentaire entre guillemets si virgule ou point-virgule à l'intérieur.
- Pas de cellule vide pour les colonnes obligatoires.

## Étapes
1. Lire les fichiers de la couche 40-élèves.
2. Extraire chaque ligne "Historique évaluations" de chaque élève
   correspondant à la période demandée par l'utilisateur.
3. Composer le CSV strictement au format ci-dessus.
4. Vérifier qu'aucune cellule obligatoire n'est vide. Lister les
   éventuels manques avant de produire le CSV.
5. Sortie en bloc de code unique, sans préambule.
```

**Déterminer le format attendu** La première fois, privilégier un **fichier modèle fourni par l'outil institutionnel**, un **export officiel existant** ou la **documentation transmise par l'établissement**. L'objectif est d'identifier les colonnes attendues, leur ordre, l'encodage et le séparateur. Une fois ces informations stabilisées dans le skill, la procédure devient permanente — sauf si l'éditeur change le format, auquel cas on ajuste le skill. Toute méthode d'inspection technique de l'interface est réservée à un usage personnel avancé et ne constitue pas une procédure recommandée par ce guide.

### 8.3. Récupérer les données de l'outil institutionnel pour les ré-exploiter par l'IA

Le pivot dans l'autre sens — **du logiciel vers Obsidian** — est tout aussi important. Plutôt que ressaisir une liste de classe ou un historique de notes, on les extrait au format d'échange standard et on les structure pour que l'IA locale les exploite.

Distinguer dès le départ **deux familles d'outils**, parce qu'ils ne contiennent pas la même chose et n'appellent pas les mêmes pratiques :

| Famille | Exemples | Données typiques | Angle IA prudent |
| --- | --- | --- | --- |
| Vie scolaire | École Directe, Charlemagne Pro, Pronote, ENT académique | Notes, absences, cahier de textes, listes nominatives, communication familles | Préparation de CSV/XLSX d'import si l'établissement l'autorise. Pas d'automatisation directe. |
| Suivi de compétences | CPRO / CEPRO compétences, livret scolaire compétences, outils de référentiel | Compétences, positionnements, scénarios d'évaluation, grilles | Conversion et harmonisation de grilles, vérification des correspondances tâches/compétences. Très utile pour l'ingénierie pédagogique. |

**Sur École Directe et équivalents** Les fonctions d'import/export ne sont pas systématiquement accessibles aux enseignants — cela dépend des droits attribués par l'établissement. À vérifier avec votre référent vie scolaire avant tout projet de pivot CSV. Le guide propose des outils techniques ; leur usage suppose que l'établissement les autorise.

La plupart de ces outils ne proposent pas d'API publique. Deux voies recommandables :

1. **L'export natif** *— la bonne voie*

   La plupart des écrans proposent un bouton *Exporter* (CSV ou XLSX). À **privilégier systématiquement**. On exporte la classe, les notes, les évaluations ; le fichier obtenu est ensuite converti en markdown structuré par l'IA locale (skill `import-charlemagne` ci-après).
2. **Le copier-coller du tableau affiché** *— acceptable pour petit volume*

   Quand l'export natif manque : sélectionner le tableau à l'écran, copier (`Ctrl+C`), coller dans une note Obsidian, demander à l'IA locale de restructurer en table markdown propre. Convient pour une classe, un trimestre — pas pour une base annuelle complète.

Le skill `import-charlemagne` qui pilote la conversion :

```
---
name: import-charlemagne
description: Convertit un export Charlemagne Pro (CSV, XLSX, HTML
  ou tableau collé) en notes Obsidian structurées dans la couche
  40-élèves. Utiliser dès que l'utilisateur évoque "import
  Charlemagne", "récupérer mes données de C-Pro", "mettre à jour
  ma classe depuis Charlemagne".
---

# Import Charlemagne Pro vers Obsidian

## Quand utiliser
Toute fois que l'utilisateur dépose un export Charlemagne et
demande la mise à jour du vault.

## Détection du format
- Si CSV / XLSX : lire les en-têtes, identifier les colonnes.
- Si HTML : extraire le tableau, identifier les en-têtes.
- Si copier-coller brut : repérer la structure tabulaire.

## Étapes
1. Identifier la nature des données (liste de classe, notes,
   absences, évaluations…).
2. Pour chaque élève présent dans l'import :
   - Si le fichier 40-élèves/[nom-prenom].md existe : METTRE À JOUR
     les sections concernées sans écraser le reste.
   - Sinon : CRÉER le fichier à partir du template
     40-élèves/_template-eleve.md.
3. Sortie : la liste des fichiers créés ou mis à jour, avec un
   résumé des changements (X notes ajoutées, Y élèves nouveaux...).

## Règles
- Ne JAMAIS écraser une section "Observations" ou "Plan de
  remédiation" existante sans y ajouter, jamais y substituer.
- Préserver les aménagements et le profil — uniquement actualiser
  ce qui vient de Charlemagne (notes, absences).
- Marquer chaque ligne nouvelle avec la date d'import en commentaire.
```

**Précaution** Les exports Charlemagne contiennent des données d'élèves identifiables. **Cette conversion se fait exclusivement avec l'IA locale** (Chapitre 1). Jamais coller un export d'élèves dans Claude cloud ou ChatGPT.

### 8.4. Pivot inerWeb (ou autre outil personnel) → Charlemagne Pro

Pour qui a, comme moi, développé un outil de suivi personnel (inerWeb, base notion, fichiers Excel maison) et qui doit basculer vers l'outil institutionnel imposé, le pivot se fait **une fois**, proprement, via l'IA. Le principe : on exporte les données existantes dans un format intermédiaire (JSON ou CSV), on demande à l'IA de les remapper vers le format attendu par Charlemagne, on importe.

| Étape | Action | Outil |
| --- | --- | --- |
| 1. Exporter | Sortir toutes les données de l'outil source en JSON / CSV | L'outil source (inerWeb, Excel, base notion) |
| 2. Cartographier | Établir la table de correspondance des champs : *« mon champ `note_brute` = colonne `Note` de Charlemagne »* | Tableau papier ou Excel |
| 3. Remapper | Lancer un skill de migration qui prend l'export source et produit le CSV Charlemagne | IA locale (Gemma 3 12B suffit) |
| 4. Vérifier en échantillon | Importer dans Charlemagne 5 lignes seulement. Vérifier intégrité. Itérer si besoin sur le skill. | Charlemagne Pro (mode test si dispo) |
| 5. Importer en bloc | Quand l'échantillon valide, importer le CSV complet | Charlemagne Pro |
| 6. Archiver l'outil source | Geler l'outil source (lecture seule), conserver l'export complet en sauvegarde. Ne plus y saisir. | Disque local + sauvegarde |

**Le bénéfice du pivot propre** Le but n'est pas seulement de migrer techniquement, c'est de **tourner la page**. Tant qu'on saisit dans les deux outils en parallèle, on perd. Le pivot doit être *net* : avant la date X, on saisissait dans l'ancien ; à partir de X, on saisit dans le nouveau (ou dans Obsidian avec export CSV vers Charlemagne, méthode §8.2). Et on accepte que les données historiques restent consultables mais non vivantes.

## 9. Méthodologie de mise en place — démarrer par une seule sortie

Construire un vault Obsidian utile prend des semaines, pas un week-end. La séquence qui réussit, en quatre paliers :

1. **Semaine 1 — Une sortie, un test (3 h)**

   Choisir **une seule** sortie prioritaire (§3.1). Convertir 3 à 5 fichiers sources en notes markdown structurées. Brancher l'IA locale (Smart Connections + Local GPT). Tester : l'IA inspirée de ces 3-5 notes produit-elle quelque chose d'utile ? Si oui, on continue. Si non, on ajuste l'architecture *avant* d'investir plus.
2. **Semaines 2-4 — Couches 00, 10, 20 (~10 h total)**

   Stabiliser le canon : référentiels propres, trames-types, premiers exemples canoniques. C'est le socle qui ne bougera plus. On vise la qualité, pas la quantité.
3. **Semaines 5-12 — Couche 30 vivante (rythme courant)**

   Chaque séance préparée et donnée s'écrit en note dans 30-année-en-cours. Pas de saisie supplémentaire : c'est *là* qu'on prépare la séance, et la note *est* la prépa. Le quotidien nourrit naturellement le vault.
4. **Trimestre 2 — Couche 40-élèves et pivot CSV (5 h initial puis routinier)**

   Ouvrir une note par élève au début de la séquence. Saisir au fil de l'eau, sans double saisie. Au moment des remontées, lancer l'export CSV vers Charlemagne / ED. La routine s'installe en deux ou trois cycles.

**Indicateur de réussite** Six mois après le démarrage, vous devez pouvoir préparer une séance type en **moitié moins de temps**, avec un rendu plus cohérent et plus proche de votre style. Si ce n'est pas le cas, l'architecture est probablement encore mal calibrée — revenir au §3 et resserrer les sorties.

## 10. Pièges et anti-patterns

| Piège | Effet | Anti-pattern à éviter |
| --- | --- | --- |
| Vouloir tout migrer d'un bloc | Semaines de travail, vault saturé, abandon | « Le grand soir Obsidian » — ne jamais entreprendre. |
| Pas de frontmatter YAML | Aucune capacité de filtrage, IA aveugle | Notes en texte libre, sans métadonnée structurée. |
| Trop de tags, pas de hiérarchie | Le « tag soup » : 200 tags, aucun ne sert | Tagger à la volée sans plan. Maximum 5 tags par note, choisis dans une liste fermée. |
| Une seule couche, tout au même niveau | L'IA ne sait pas qui prioriser quand elle cherche | Tout balancer à la racine du vault « pour faire simple ». |
| Travailler dans Obsidian ET ailleurs | Double saisie, désync, démotivation | Garder Word ou Drive en parallèle. Choisir : c'est l'un OU l'autre, pas les deux. |
| Mettre des données élèves en cloud | Infraction RGPD silencieuse | Convertir une note-élève via ChatGPT cloud. **Jamais.** Pour les élèves, IA locale uniquement. |
| Pas de sauvegarde | Une corruption disque = tout perdu | Compter sur un seul disque. **Toujours** avoir un backup automatique (cloud chiffré ou disque externe). |
| Couche 90-archive sans limite | Devient un dépotoir illisible | Vider la 90 tous les 6 mois : ce qui n'a jamais été promu est probablement à supprimer. |

## 11. Radio-guidage — structurer son vault Obsidian avec une IA cloud

Vous avez lu le chapitre, vous connaissez la règle inverse et l'architecture en couches. Voici l'outil pour **construire votre vault** : un prompt à coller dans une IA cloud, qui devient votre assistant patient et vous accompagne étape par étape — du diagnostic des usages prioritaires au premier test de l'IA branchée sur vos notes.

### 11.1. Marche à suivre

1. **Téléchargez le fichier du chapitre** au format Markdown (bouton ci-dessous).
2. **Ouvrez une nouvelle conversation** avec votre IA cloud habituelle — Claude, ChatGPT, Gemini ou Mistral Le Chat, peu importe.
3. **Joignez le fichier `.md`** à la conversation.
4. **Copiez-collez le prompt ci-dessous** et envoyez-le.
5. **Suivez les questions de l'IA**, une étape à la fois. La conversation porte sur l'organisation de fichiers et l'installation de plugins — **aucune donnée d'élève n'y est échangée**.

### 11.2. Le prompt à copier

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
Structurer mon vault Obsidian avec une architecture en couches
numérotées et brancher mon IA locale dessus. À la fin de cette
session, j'aurai :
- Un vault Obsidian fonctionnel avec les couches 00 à 90 créées
  et nommées.
- Au moins une note structurée par couche (référentiel, trame-type,
  exemple canonique, séance, élève fictif ou journal).
- Smart Connections installé et indexé, Local GPT installé et
  connecté à mon Ollama local.
- Un premier test : poser une question à l'IA via Local GPT,
  vérifier qu'elle s'appuie bien sur mes notes pour répondre.

PREMIÈRE ÉTAPE OBLIGATOIRE — DIAGNOSTIC PRÉALABLE
a) Vérifie que j'ai une IA locale fonctionnelle (issu du Chapitre 1).
b) Demande-moi :
   - Ai-je déjà Obsidian installé ?
   - Quels usages prioritaires je veux servir avec cette mémoire
     long-terme ? (Préparation de séances, rédaction d'appréciations,
     suivi pédagogique, organisation personnelle, etc.)
   - Quelle quantité de matériau existant ai-je (fichiers dispersés
     sur disque, Drive, etc.) ?
c) Si je n'ai pas d'usage prioritaire identifié, NE ME LANCE PAS
   dans la création d'un vault. Demande-moi de revenir après
   réflexion sur 2 ou 3 sorties concrètes attendues.
d) NE PROPOSE JAMAIS d'inclure des données d'élèves nominatives
   sans rappel du cadre établissement.

Le suivi nominatif d'élève dans Obsidian est un cas sensible qui
nécessite un cadre établissement validé (voir §8 du document). Si
j'évoque cet usage, oriente-moi vers cette section et insiste sur
les conditions préalables.

Le document est ci-joint / ci-dessus. Commence par tes questions.
```

**Le radio-guidage en détail** Création d'un compte IA cloud, choix du modèle (Sonnet / GPT-4o / Gemini Pro / Mistral Large — pas les versions ultra-légères), les neuf règles du radio-guide expliquées, les trois phrases pour recadrer une IA qui dérape, les bonnes pratiques pendant la séance, et les trois cas où le radio-guidage par IA ne suffit pas : tout est rassemblé une fois pour toutes sur la page [**Radio-guidage**](radio-guidage.html).

## 12. Vous êtes au bout du parcours principal

Bravo. Vous avez installé une IA locale, vous savez la personnaliser avec des skills, vous l'utilisez avec vos élèves dans un cadre encadré, et vous avez maintenant une mémoire long-terme de votre travail.

Des prolongements techniques existent en brouillon dans mes notes personnelles — accès distant via VPN privé, orchestration agentique sous supervision humaine — mais ils ne font pas partie du périmètre diffusé à ce stade. Ils seront proposés à la discussion lorsqu'ils auront été éprouvés sur la durée.

Vous pouvez maintenant **transmettre ce que vous avez appris**. La méthodologie de radioguidage à une autre personne — collègue, conjoint, parent — est décrite au [Chapitre 2, §10](chapitre-2.md).

## 13. Ressources et liens

### Obsidian — base

[Obsidian — site officiel](https://obsidian.md)
[Obsidian — documentation](https://help.obsidian.md/Home)
[Obsidian — propriétés et frontmatter](https://help.obsidian.md/Editing+and+formatting/Properties)
[Obsidian — plugins communautaires](https://help.obsidian.md/Plugins/Community+plugins)

### Plugins clés

[Smart Connections — recherche sémantique](https://smartconnections.app/)
[Local GPT — chatbot intégré Ollama](https://github.com/pfrankov/obsidian-local-gpt)
[Copilot for Obsidian](https://github.com/logancyang/obsidian-copilot)
[Text Generator](https://github.com/nhaouari/obsidian-textgenerator-plugin)
[Dataview — requêtes sur frontmatter](https://github.com/blacksmithgu/obsidian-dataview)
[Templater — templates de notes](https://github.com/SilentVoid13/Templater)

### Modèles d'embedding pour Smart Connections

[nomic-embed-text (rapide, anglais et français)](https://ollama.com/library/nomic-embed-text)
[mxbai-embed-large (qualité supérieure, plus lent)](https://ollama.com/library/mxbai-embed-large)

### Markdown et formats

[Markdown — antisèche](https://www.markdownguide.org/cheat-sheet/)
[YAML — spécification du frontmatter](https://yaml.org/spec/1.2.2/)

**Les quatre chapitres du guide**

- [**Chapitre 1 — Installer une IA native**](chapitre-1.md)
- [**Chapitre 2 — Personnaliser votre IA avec des skills**](chapitre-2.md)
- [**Chapitre 3 — Transformer son IA native en assistant pédagogique**](chapitre-3.md)
- [**Chapitre 4 — Optimiser son Obsidian**](chapitre-4.md) (ce chapitre)
- [**Annexe — Radio-guidage**](radio-guidage.html) · [**Annexe — Glossaire**](glossaire.md)
