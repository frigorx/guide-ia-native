<!-- Document Markdown du guide « Installer une IA native » — F. Henninot. Version destinée à être jointe à une IA cloud comme support de radio-guidage. -->

# Personnaliser votre IA avec des skills

Le concept qui transforme une IA générique en collègue de discipline. Un savoir-faire capturé une fois, exploitable mille fois, partageable par simple copie de dossier.

**Auteur·** F. Henninot
**Public·** enseignants & particuliers, sans prérequis technique
**Prérequis·** Chapitre 1 (IA native installée)
**Version·** mai 2026

**Statut** Document de travail à caractère exploratoire, sans valeur officielle. Suite du [Chapitre 1](chapitre-1.md) : l'IA locale doit être installée et fonctionnelle pour exécuter ce chapitre.

**Mode d'emploi de ce chapitre** Ce document est conçu pour être **lu d'abord**, puis **exécuté avec l'aide d'une IA cloud** (Claude, ChatGPT, Gemini, Mistral Le Chat). Lisez le chapitre en entier pour comprendre l'esprit. À la fin ([section 11](#radio-guidage)), vous trouverez le **radio-guidage** : un prompt à coller dans votre IA cloud habituelle, et un fichier à joindre. L'IA prend alors le relais et vous accompagne pas à pas dans l'exécution.

**⚠ N'allez pas directement à l'action.** Lisez le chapitre d'abord — c'est en comprenant *ce qu'est* un skill et *pourquoi* il change tout que vous écrirez le vôtre correctement. Le téléchargement du fichier `.md` et le prompt à coller sont rassemblés à la fin, dans la [section 11](#radio-guidage).

**Un mot vous bloque ?** Le [glossaire](glossaire.md) est en lien permanent en bas de page. **Le radio-guidage, c'est quoi au juste ?** La page [Radio-guidage](radio-guidage.html) l'explique une fois pour toutes.

### Sommaire

1. [Préambule — pourquoi un chapitre dédié aux skills](#preambule)
2. [Qu'est-ce qu'un skill, simplement ?](#quoi)
3. [Anatomie d'un skill](#anatomie)
4. [Exemple A — skill enseignant](#exemple-a)
5. [Exemple B — skill particulier](#exemple-b)
6. [Pourquoi ça change tout](#pourquoi)
7. [Anatomie de la description — le bon déclenchement](#description)
8. [Construire son écosystème de skills](#ecosysteme)
9. [Bibliothèque de prompts — exemples](#prompts)
10. [Radioguider une autre personne — la méthode](#radioguider)
11. [**Radio-guidage — écrire son premier skill avec une IA cloud**](#radio-guidage)
12. [Vous savez créer des skills. Et maintenant ?](#et-maintenant)
13. [Ressources et liens](#ressources)

## 1. Préambule — pourquoi un chapitre dédié aux skills

Au [Chapitre 1](chapitre-1.md), vous avez installé une IA locale. Elle fonctionne, elle parle, elle raisonne. Mais elle est encore **générique** : elle ne connaît rien de vous, de votre métier, de vos contraintes. Vous lui réexpliquez tout à chaque conversation.

La grille de lecture en 4 briques du Chapitre 1 le disait : interface, moteur, modèle… et **skills**. Les trois premières briques sont standard, identiques pour tout le monde. La quatrième fait toute la différence. **Un modèle moyen avec d'excellents skills bat un modèle excellent sans contexte.** Ce chapitre est entièrement consacré à cette quatrième brique.

**Ce que vous saurez faire en sortie** Écrire un skill à partir d'une tâche que vous faites chaque semaine, le faire mobiliser automatiquement par votre IA locale, le tester et l'ajuster — puis construire, par accumulation, un véritable écosystème de skills qui couvre vos tâches récurrentes. Le tout transférable à un collègue par simple copie de dossier.

**Aucun prérequis technique nouveau** Un skill, c'est un fichier texte. Si vous savez écrire dans un traitement de texte et copier un dossier, vous savez écrire un skill. La seule exigence : avoir une IA locale fonctionnelle (Chapitre 1).

## 2. Qu'est-ce qu'un skill, simplement ?

**Précision de vocabulaire** Dans ce guide, le mot **« skill »** est utilisé au sens large : un ensemble d'instructions, de documents et de règles qui spécialisent l'IA pour un usage métier. Le terme vient à l'origine d'Anthropic (Claude), mais le concept est universel. Selon l'outil utilisé, on parlera aussi de *system prompt*, *modèle personnalisé*, *Modelfile* (Ollama), *workspace* ou *base documentaire (RAG)* — c'est la même idée.

Un **skill** (« compétence », « savoir-faire ») est un **dossier** qui contient un fichier texte décrivant à l'IA : *quand* elle doit s'en servir, *comment* elle doit s'en servir, et *avec quoi*. Une fois ce dossier déposé au bon endroit, l'IA le mobilise automatiquement dès qu'elle reconnaît un déclencheur. Vous n'avez plus à tout réexpliquer à chaque conversation.

**Analogie** Un skill, c'est **la fiche de poste** qu'on remet à un nouveau collaborateur. Ce nouveau collaborateur, ici, c'est l'IA. Vous l'écrivez une fois, elle s'en sert mille fois, et vous pouvez la transmettre à quelqu'un d'autre par simple copie du dossier.

## 3. Anatomie d'un skill

mon-skill/
├── SKILL.md # Le fichier principal — instructions à l'IA
├── references/ # (optionnel) docs que l'IA peut consulter
│ └── bareme.md
└── assets/ # (optionnel) modèles, gabarits
└── modele.docx

Le fichier `SKILL.md` commence par un en-tête (« frontmatter ») YAML, puis des instructions en français courant. Voici deux exemples concrets — un côté enseignant, un côté particulier — pour montrer que **le format est exactement le même**, seul le contenu change.

## 4. Exemple A — skill enseignant

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

## 5. Exemple B — skill particulier

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

## 6. Pourquoi ça change tout

Sans skill, à chaque session je dois **tout réexpliquer** au modèle : qui je suis, quel format je veux, quelles sont mes contraintes. C'est fatigant, la qualité dépend de ma vigilance, et un détail oublié donne un résultat à côté.

Avec un skill correctement écrit, l'IA **se déclenche d'elle-même** dès qu'elle reconnaît un déclencheur dans ma demande. Le skill devient une *extension cognitive* : un savoir-faire capturé une fois, exploitable mille fois, partageable par simple copie de dossier.

## 7. Anatomie de la description — le bon déclenchement

Le champ `description` du frontmatter est **capital**. C'est lui qui décide si l'IA mobilise le skill ou non. Il doit énumérer explicitement les formulations utilisateur qui doivent déclencher le skill. Exemple :

```
description: Rédige un support de cours complet au format établissement
  (template 9 sections, 1500 mots min). Utiliser dès que l'utilisateur
  évoque "rédiger un cours", "préparer une fiche d'exercice", "construire
  une séance", "préparer un TP", même sans mentionner explicitement le skill.
```

## 8. Construire son écosystème de skills

On n'a pas *un* skill, on en a une demi-douzaine qui couvrent les tâches récurrentes. Voici deux écosystèmes types — un côté enseignant, un côté particulier — qui servent de modèles.

### 8.1. Écosystème type enseignant

| Skill | Rôle | Déclencheurs typiques |
| --- | --- | --- |
| contexte-classe | Cadre permanent : niveaux enseignés, public, charte graphique, contraintes pédagogiques | chargé en arrière-plan |
| appreciation-bulletin | Rédaction d'appréciations équilibrées à partir de notes et observations | « appréciation », « bulletin », « synthèse trimestrielle » |
| redaction-cours | Production d'un support de cours au format établissement | « rédige une fiche », « prépare une séance » |
| differenciation | 3 versions calibrées d'un exercice (consolidation / standard / approfondissement) | « différencier », « 3 niveaux » |
| mail-parents | Reformulation d'un mail à un parent dans un ton mesuré, professionnel | « mail aux parents », « répondre poliment » |
| cahier-de-texte | Récit de séance → fiche prête à coller dans l'ENT | « cahier de texte », « ce que j'ai fait en classe » |

### 8.2. Écosystème type particulier

| Skill | Rôle | Déclencheurs typiques |
| --- | --- | --- |
| contexte-famille | Profil famille permanent : composition, allergies, contraintes, budget | chargé en arrière-plan |
| menus-semaine | 7 dîners équilibrés + liste de courses regroupée par rayon | « menus », « liste de courses », « planning repas » |
| courriers-admin | Lettres administratives (résiliation, réclamation, demande) au format normalisé | « écris une lettre à », « rédige un courrier » |
| budget-mensuel | Catégorisation et synthèse à partir d'un relevé bancaire (en local, jamais cloud) | « mes dépenses », « catégoriser » |
| recettes-de-saison | Idées de recettes adaptées aux légumes de saison et au temps disponible | « quoi cuisiner », « recette rapide » |
| vacances-organisation | Planification d'un séjour : checklist, itinéraire, valise | « préparer un voyage », « checklist vacances » |

### 8.3. Méthode de construction — la même pour tous

L'écosystème se construit **par accumulation**, jamais d'un bloc :

1. Repérer une tâche que je fais **plus d'une fois par semaine**.
2. La faire une fois *avec* l'IA, en notant ce que je dois lui réexpliquer à chaque session.
3. Capturer ces explications dans un `SKILL.md` brouillon.
4. Tester sur 2 à 3 cas réels. Ajuster.
5. Geler la version, la nommer, la verser dans le dossier `skills/`.

## 9. Bibliothèque de prompts — exemples

Six exemples — trois côté enseignant, trois côté particulier — à copier-coller, ajuster, observer. **Ces prompts fonctionnent même sans skill installé** : ils servent de modèles pour comprendre comment formuler une demande efficace, et de point de départ pour rédiger le skill correspondant.

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

## 10. Radioguider une autre personne — la méthode

Le but de ce guide n'est pas de produire un expert en IA, c'est de permettre à toute personne — collègue, conjoint, parent — d'**atteindre l'autonomie opérationnelle** en quelques heures. La séquence proposée tient en quatre demi-journées étalées sur deux semaines.

1. **J1 — Cadrage et installation radioguidée (2 h)**

   Lecture rapide des sections 1 à 3 du [Chapitre 1](chapitre-1.md) (le « pourquoi »). Ouverture de [claude.ai](https://claude.ai) ou ChatGPT. Téléchargement du fichier du Chapitre 1, puis copier-coller du **prompt du radio-guidage (Chapitre 1, §8)**. Suivre les questions/étapes, envoyer des captures d'écran en cas de blocage. Sortie : Ollama installé, un modèle téléchargé, premier dialogue qui répond. Objectif : *« ça parle »*.
2. **J2 — Premier usage utile (2 h)**

   Un cas réel choisi par la personne : reformuler un mail délicat, préparer un planning, expliquer une notion, organiser une checklist. On constate la valeur de l'outil *avant* d'écrire le moindre skill.
3. **J3 — Écriture du premier skill (3 h)**

   Choisir **une seule tâche** récurrente. Rédiger un `SKILL.md` minimal (frontmatter + 30 lignes), inspiré des exemples ([§4](#exemple-a) et [§5](#exemple-b)). Tester sur 3 cas. C'est la marche la plus exigeante. Le mentor doit être disponible.
4. **J4 — Autonomie et écosystème (2 h)**

   La personne a un skill qui marche. Elle en écrit un deuxième seule. Elle connaît la procédure et sait où trouver les ressources. Le radioguidage est terminé.

**Indicateur de réussite** Au bout de ces quatre étapes, la personne doit être capable de produire **de mémoire** un skill nouveau pour une tâche qu'elle choisit elle-même. Si ce n'est pas le cas, on reprend J3 sur un cas plus simple.

## 11. Radio-guidage — écrire son premier skill avec une IA cloud

Vous avez lu le chapitre, vous comprenez ce qu'est un skill et pourquoi il change tout. Voici l'outil pour **écrire le vôtre** : un prompt à coller dans une IA cloud, qui devient votre assistant patient et vous accompagne étape par étape — du choix de la tâche au skill testé et ajusté.

### 11.1. Marche à suivre

1. **Téléchargez le fichier du chapitre** au format Markdown (bouton ci-dessous).
2. **Ouvrez une nouvelle conversation** avec votre IA cloud habituelle — Claude, ChatGPT, Gemini ou Mistral Le Chat, peu importe.
3. **Joignez le fichier `.md`** à la conversation.
4. **Copiez-collez le prompt ci-dessous** et envoyez-le.
5. **Suivez les questions de l'IA**, une étape à la fois. Le skill que vous écrivez ne contient pas de données personnelles — c'est un fichier d'instructions.

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
Écrire mon premier skill personnel et le tester avec succès. À la
fin de cette session, j'aurai :
- Un dossier `mon-premier-skill/` avec un fichier `SKILL.md`
  contenant un frontmatter YAML (name, description) et des
  instructions claires en français.
- Le skill mobilisé automatiquement par mon IA locale dès que je
  formule une demande qui correspond à sa description.
- Trois tests réussis sur trois cas concrets de mon choix.

PREMIÈRE ÉTAPE OBLIGATOIRE — DIAGNOSTIC PRÉALABLE
a) Vérifie que j'ai bien une IA locale fonctionnelle (issue du
   Chapitre 1). Si non, oriente-moi vers le Chapitre 1.
b) Demande-moi quelle tâche récurrente je fais plus d'une fois
   par semaine et que je voudrais déléguer à l'IA. Exemples
   typiques : rédiger une appréciation de bulletin, préparer un
   menu de la semaine, structurer un mail à un parent, reformuler
   une consigne.
c) À partir de ma réponse, aide-moi à formuler le skill : choix
   du nom, rédaction de la description (déclencheurs),
   structuration des règles, format de sortie attendu.
d) Accompagne-moi dans le test sur 3 cas réels et l'ajustement du
   skill jusqu'à ce qu'il produise un résultat satisfaisant.

Ne PROPOSE PAS d'écrire un skill avant d'avoir validé que l'IA
locale tourne et identifié une tâche concrète à automatiser.

Le document est ci-joint / ci-dessus. Commence par tes questions.
```

**Le radio-guidage en détail** Création d'un compte IA cloud, choix du modèle (Sonnet / GPT-4o / Gemini Pro / Mistral Large — pas les versions ultra-légères), les neuf règles du radio-guide expliquées, les trois phrases pour recadrer une IA qui dérape, les bonnes pratiques pendant la séance, et les trois cas où le radio-guidage par IA ne suffit pas : tout est rassemblé une fois pour toutes sur la page [**Radio-guidage**](radio-guidage.html).

## 12. Vous savez créer des skills. Et maintenant ?

Vous avez compris le concept de skill, écrit votre premier skill, structuré un écosystème. Votre IA personnelle est maintenant calibrée sur votre travail.

Le **Chapitre 3** explore une autre dimension : utiliser cette IA non plus seulement pour *vous*, mais comme **assistant pédagogique pour vos élèves**. C'est un saut de nature, pas juste de degré — on passe d'un usage privé à un usage public, d'une responsabilité technique à une responsabilité éducative.

## 13. Ressources et liens

### Skills — documentation

[Anthropic — Skills documentation](https://docs.anthropic.com/en/docs/build-with-claude/skills)
[GitHub anthropics/skills — exemples](https://github.com/anthropics/skills)
[Open WebUI — modèles personnalisés](https://docs.openwebui.com/features/workspace/models)
[Ollama — Modelfile (équivalent skill)](https://github.com/ollama/ollama/blob/main/docs/modelfile.md)

### Markdown et YAML — pour écrire ses skills

[Markdown — antisèche](https://www.markdownguide.org/cheat-sheet/)
[YAML — spécification du frontmatter](https://yaml.org/spec/1.2.2/)

**Suite du guide**

- [**Chapitre 1 — Installer une IA native**](chapitre-1.md) : le prérequis de ce chapitre.
- [**Chapitre 3 — Transformer son IA native en assistant pédagogique**](chapitre-3.md) : system prompt, couplage skill matière, multi-postes, charte d'usage, scénario de séance, évaluation.
- [**Chapitre 4 — Optimiser son Obsidian**](chapitre-4.md) : architecture du vault, branchement IA, conversion de l'existant, suivi élève sans double saisie.
- [**Annexe — Radio-guidage**](radio-guidage.html) : la méthode commune à tous les chapitres, expliquée une fois pour toutes.
