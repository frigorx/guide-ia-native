<!-- Document Markdown du guide « Installer une IA native » — F. Henninot. Version destinée à être jointe à une IA cloud comme support de radio-guidage. -->

# Transformer son IA native en assistant pédagogique

Cadrer, coupler à un skill matière, déployer en classe, évaluer. Pour enseignants, CPE, AESH et formateurs.

**Auteur·** F. Henninot
**Public·** profs, CPE, AESH, formateurs
**Prérequis·** avoir terminé le Chapitre 1
**Version·** mai 2026

**Statut** Document de travail à caractère exploratoire, sans valeur officielle. Ne se substitue ni aux préconisations académiques ni au cadre fixé par chaque établissement. Suite directe du [Chapitre 1 — installation de l'IA native](chapitre-1.md) : la maîtrise des notions de modèle, de skill et d'interface y est supposée acquise.

**Mode d'emploi du guide — à lire en premier** Ce chapitre est conçu pour être **donné à une IA cloud** (Claude, ChatGPT, Gemini, Mistral Le Chat — celle que vous utilisez déjà). Vous le lui transmettez en pièce jointe ou par copier-coller, et vous lui demandez de devenir **votre assistant de mise en œuvre**. Pas besoin de tout faire seul·e : l'IA générale lit ce document à votre place et vous radio-guide pas à pas, accepte vos captures d'écran, diagnostique vos erreurs. Le prompt ci-dessous active ce mode. **Pas encore d'IA cloud ?** Voir l'encart juste après. **Un mot vous bloque ?** Le [glossaire](glossaire.md) donne la définition accessible de tous les termes techniques.

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

1. [Changement de nature — du prof-utilisateur à l'élève-utilisateur](#preambule)
2. [Les enjeux propres au tutorat IA](#enjeux)
3. [Architecture d'un chatbot pédagogique](#architecture)
4. [Le system prompt — l'art du cadrage](#system-prompt)
5. [Coupler avec un skill matière](#couplage-skill)
6. [L'IA qui parle et qui écoute — la voix](#voix)
7. [Configuration multi-postes — 1 PC pour toute la salle](#multipostes)
8. [Charte d'usage élève — modèle prêt à imprimer](#charte)
9. [Scénario d'une séance type](#seance)
10. [Évaluation et progression](#evaluation)
11. [Pièges et garde-fous](#pieges)
12. [Ressources et liens](#ressources)

## 1. Changement de nature — du prof-utilisateur à l'élève-utilisateur

Au Chapitre 1, l'IA est un assistant *du prof*. Le prof prompte, le prof contrôle, le prof valide. L'élève ne sait même pas que l'IA existe. C'est l'usage le plus simple, le plus sûr, et c'est celui qui rapporte le plus de gain de temps direct.

Le Chapitre 2 propose un saut : l'IA devient un assistant *de l'élève*. L'élève prompte, l'IA répond, le prof cadre. **La nature de l'outil change radicalement** : on passe d'un usage privé à un usage public, d'un acte productif à un acte éducatif, d'une responsabilité technique à une responsabilité pédagogique.

**À qui s'adresse ce chapitre** Enseignants toutes disciplines, mais aussi CPE (entretiens d'écoute, prévention), AESH (adaptation aux profils DYS/TDAH, médiation cognitive), formateurs (CFA, GRETA, formation continue), parents-coéducateurs. La mécanique est la même ; seuls le cadrage et les contenus varient.

Ce chapitre suppose acquis l'écosystème du Chapitre 1 : Ollama installé, Open WebUI accessible, au moins un modèle téléchargé, premiers skills créés. Tout ce qui suit se construit **dans Open WebUI**, sans installation supplémentaire.

## 2. Les enjeux propres au tutorat IA

Trois enjeux deviennent vitaux dès qu'un élève dialogue directement avec l'IA. Les nommer dès le départ, sinon le projet déraille en silence.

### 2.1. L'hallucination devient un ennemi pédagogique

Quand l'IA invente une réponse pour le prof, le prof la repère et l'écarte. Quand l'IA invente une réponse pour l'élève, l'élève la prend pour argent comptant et l'apprend. **C'est une dégradation de l'enseignement**, pas un simple bug technique. La règle absolue à inscrire dans le system prompt : *en cas de doute, l'IA dit « je ne suis pas certain·e, vérifie avec ton professeur »*. Jamais d'invention plausible.

### 2.2. La posture pédagogique inverse l'instinct du modèle

Les IA conversationnelles sont entraînées à **donner la réponse**, vite et bien. C'est exactement le contraire de la posture d'un tuteur : un bon tuteur fait *chercher*, pose des questions, laisse l'élève achopper, ne sauve la situation qu'en dernier recours. Le system prompt doit **contre-balancer l'instinct du modèle** en explicitant la posture socratique. Si on ne le fait pas, l'IA balance la solution à la première question, et tout le travail cognitif de l'élève est court-circuité.

### 2.3. RGPD côté élève — la conservation des logs

Open WebUI enregistre par défaut **toutes les conversations** sur le disque du poste enseignant. Ces conversations contiennent des productions d'élèves, des hésitations, parfois des éléments personnels qu'ils ont confiés. Tant que tout reste local, il n'y a pas de transfert hors UE — donc pas de problème côté RGPD article 28. Mais **la conservation et la durée de stockage deviennent votre responsabilité**. À cadrer dans la charte numérique de l'établissement : qui peut accéder, combien de temps on conserve, comment l'élève peut demander l'effacement.

**Trois questions à se poser avant de déployer**

1. Mon system prompt interdit-il *explicitement* l'invention et la réponse directe ?
2. Ai-je informé l'élève (et selon l'âge ses responsables légaux) que ses échanges sont conservés localement ?
3. Ai-je une durée de conservation et une procédure d'effacement écrites ?

## 3. Architecture d'un chatbot pédagogique

Un chatbot pédagogique, c'est quatre briques empilées. Chacune se règle indépendamment, ce qui rend le résultat ajustable au cas par cas.

Modèle (Gemma 3, Llama, Mistral…) → System prompt (La posture, les règles, le ton) → Skill matière (Référentiel, barème, exemples) → Interface (Texte, voix, multi-postes)

Dans Open WebUI, ces quatre éléments se combinent dans un objet appelé **« Model »** (modèle personnalisé). Pour le créer : *Workspace → Models → + Create new model*. Vous donnez un nom (« M. Frigori — tuteur CAP IFCA », « La prof de français — relecture », « Tuteur de révision SEGPA »…), une icône, un modèle de base, un system prompt, et vous attachez un ou plusieurs skills. Les élèves sélectionnent ce model dans le menu déroulant. **Aucune programmation** : tout passe par des champs texte dans l'interface.

**Le levier essentiel** 90 % de la qualité d'un chatbot pédagogique se joue dans le **system prompt**. Un excellent system prompt sur un modèle moyen bat largement un mauvais system prompt sur un modèle excellent. C'est l'endroit où l'enseignant injecte sa pédagogie.

## 4. Le system prompt — l'art du cadrage

### 4.1. Les sept règles d'or

Un system prompt pédagogique solide tient en sept règles. Elles sont à adapter à la matière, mais elles structurent tous les bons cadrages :

1. **Identité claire.** « Tu es [rôle] pour des [public] en [niveau]. »
2. **Posture socratique.** « Tu ne donnes JAMAIS la réponse directement. Tu poses une question qui guide. »
3. **Tolérance à l'erreur.** « Quand l'élève se trompe, tu valorises l'essai avant de réorienter. »
4. **Niveau de langue cadré.** « Phrases courtes. Vocabulaire accessible. Tu vouvoies / tu tutoies. »
5. **Interdiction d'inventer.** « Si tu n'es pas certain·e d'une valeur, d'une règle, d'une norme : tu dis « à vérifier avec votre professeur ». Jamais d'invention. »
6. **Cadre du sujet.** « Tu réponds uniquement aux questions liées à [matière]. Pour le reste, tu rediriges. »
7. **Sortie de cadre.** « Si l'élève évoque un mal-être, une situation personnelle préoccupante, tu sors du jeu de rôle, tu invites à en parler à un adulte de confiance, et tu rappelles que tu n'es pas un humain. »

### 4.2. Anatomie d'un system prompt commenté

Exemple complet pour un tuteur de révision transversal. À adapter par n'importe quel enseignant à sa discipline.

```
Tu es un tuteur de révision pour des élèves de 3e en mathématiques.

POSTURE
- Tu ne donnes JAMAIS la réponse directement à un exercice.
- Tu poses une question qui aide l'élève à avancer d'UN pas.
- Tu attends la réponse de l'élève avant de poursuivre.
- Si l'élève se trompe : tu valorises ce qui est correct dans son
  raisonnement avant de pointer ce qui ne va pas.
- Si l'élève bloque vraiment après 2 tentatives : tu redonnes UN
  indice supplémentaire, pas la solution complète.

NIVEAU DE LANGUE
- Tu vouvoies systématiquement.
- Phrases courtes. Une idée par phrase.
- Vocabulaire de 3e. Pas d'acronyme sans explication.
- Tu peux écrire des formules mathématiques simples.

INTERDICTION D'INVENTER
- Si tu n'es pas certain·e d'un théorème, d'une formule, d'une règle :
  tu écris "à vérifier dans votre manuel ou avec votre professeur".
- Jamais une valeur, une date, une référence inventée.

CADRE DU SUJET
- Tu réponds uniquement aux questions de mathématiques niveau 3e.
- Pour les autres matières : "ce n'est pas mon domaine, demande à
  ton tuteur de [matière]".

SORTIE DU JEU DE RÔLE
- Si l'élève évoque un mal-être, une situation difficile, du
  harcèlement : tu sors immédiatement du rôle de tuteur, tu dis
  "ce que tu me dis est important, parles-en à un adulte en qui
  tu as confiance (CPE, infirmière scolaire, parent)" et tu
  rappelles que tu es un programme, pas un humain.

DÉMARRAGE
Quand l'élève arrive, salue-le. Demande-lui sur quel chapitre il
veut travailler. Ne commence pas tant qu'il n'a pas répondu.
```

**Adapter selon le rôle** Pour un **AESH**, ajouter une consigne d'adaptation cognitive (« phrases de 12 mots maximum, une consigne à la fois, pas de double tâche »). Pour un **CPE** sur un module d'écoute, supprimer la posture socratique mathématique et la remplacer par une posture d'écoute active. Pour un **formateur en CFA**, raccrocher au métier et au geste professionnel plutôt qu'au seul savoir académique.

## 5. Coupler avec un skill matière

Le system prompt fixe la *posture*. Le skill apporte le *contenu* : référentiel précis de la matière, barème de l'enseignant, exemples canoniques de productions attendues, lexique métier. C'est l'addition des deux qui rend le tuteur crédible.

Concrètement, dans Open WebUI : créer un model personnalisé, coller le system prompt dans le champ « System », puis dans « Knowledge » attacher les documents qui constituent le skill (référentiel.md, barème.md, exemples.md). À chaque question de l'élève, l'IA consulte automatiquement ces documents avant de répondre. **Les hallucinations chutent drastiquement** dès qu'un skill bien fait est connecté.

| Tuteur cible | Skill à attacher (exemple) |
| --- | --- |
| Tuteur maths 3e | Programme officiel cycle 4, formulaire de référence, 10 exercices types corrigés avec commentaires |
| Tuteur français 2de | Programme 2de, fiches méthode (commentaire, dissertation), 5 textes étudiés en classe |
| Tuteur révision CAP IFCA | Référentiel CAP IFCA, lexique métier, schémas de cycle frigorifique annotés |
| Module d'écoute CPE | Charte d'écoute active, protocole de signalement, ressources externes (3018, 3020…) |
| Compagnon AESH | Adaptations cognitives par profil (TDAH, DYS, TSA), reformulations types, signaux d'alerte |

## 6. L'IA qui parle et qui écoute — la voix

Open WebUI sait depuis 2024 transformer la voix de l'élève en texte (entrée micro) et lire ses réponses à voix haute (sortie audio). C'est un atout majeur pour les élèves **DYS** (qui parlent normalement mais peinent à l'écrit) et pour les **jeunes élèves de CAP** souvent plus à l'aise à l'oral.

Pour activer, dans Open WebUI : *Settings → Audio*. Choisir un moteur de reconnaissance vocale (Whisper en local, gratuit) et un moteur de synthèse vocale (les voix natives du navigateur fonctionnent, ou Piper pour plus de qualité). Une icône micro apparaît dans la zone de saisie de chaque conversation.

**À savoir** Whisper en local demande un peu de puissance — sur un PC modeste, comptez 5 à 10 secondes pour transcrire une phrase. Sur Mac Apple Silicon ou PC avec carte graphique, c'est quasi instantané. Pour la sortie voix, les voix natives du navigateur sont gratuites et suffisantes pour démarrer. La qualité « professionnelle » (Piper et équivalents) demande quelques minutes de configuration supplémentaire — à voir avec votre référent numérique si besoin.

## 7. Configuration multi-postes — 1 PC pour toute la salle

**Expérimentation encadrée — pas un déploiement ordinaire**

Cette configuration ne doit **pas être mise en œuvre seul·e** dans une salle de classe. Elle nécessite, dans cet ordre :

1. l'accord explicite du **chef d'établissement** ;
2. la validation du **référent numérique d'établissement (RUPN)** sur l'ouverture du port côté réseau pédagogique ;
3. l'avis du **DPO académique** si des données nominatives d'élèves transitent ;
4. une **charte d'usage écrite** intégrée au règlement intérieur ou aux pratiques de classe ;
5. l'**information écrite des familles** sur l'usage de l'outil et la conservation des traces.

À défaut de ce cadre, l'usage doit rester **strictement personnel à l'enseignant**, sans connexion d'élèves. La section ci-après décrit la procédure technique uniquement à des fins d'expérimentation encadrée et de préparation pédagogique.

L'IA est installée sur un seul poste (votre poste enseignant ou un PC dédié à la salle). Les postes élèves y accèdent **par le navigateur**, via le réseau pédagogique local. Aucun logiciel à installer côté élève.

1. **Identifier l'adresse IP du poste enseignant.**

   Sur Windows : touche Windows + R, taper `cmd`, Entrée, puis `ipconfig`. Repérer l'adresse IPv4 (format `192.168.x.x` ou `10.x.x.x`). Sur Mac : Préférences Système → Réseau, l'adresse est visible sous le Wi-Fi ou Ethernet actif.
2. **Vérifier que Open WebUI écoute sur le réseau, pas seulement en local.**

   Par défaut Docker ouvre le port sur toutes les interfaces (`0.0.0.0:3000`). C'est ce qu'on veut. Le pare-feu Windows peut demander une autorisation au premier accès : autoriser sur le profil « Réseau privé » uniquement.
3. **Tester depuis un poste élève.**

   Ouvrir le navigateur du poste élève. Saisir `http://[adresse-IP-prof]:3000` (par exemple `http://192.168.1.42:3000`). L'interface Open WebUI s'affiche. L'élève se crée un compte local ou utilise un compte partagé que vous avez préparé.
4. **Cadrer avec le référent numérique de l'établissement.**

   L'ouverture d'un port sur le réseau pédagogique nécessite l'accord du **référent numérique d'établissement (RUPN)**. Question à anticiper : le filtrage réseau de l'académie peut bloquer les connexions HTTP non chiffrées (port 3000). Solutions possibles : activer HTTPS via reverse proxy, utiliser un réseau Wi-Fi pédagogique dédié, ou installer une instance par salle.
5. **Estimer la charge.**

   Un PC bien équipé (32 Go RAM + GPU NVIDIA RTX 3060 ou Mac M2/M3) tient sans problème **10 à 15 élèves simultanés** sur un modèle Gemma 3 12B. Au-delà, prévoir une seconde machine ou un modèle plus léger.

**Point de vigilance RGPD** Dans une configuration multi-postes, les conversations de **tous les élèves** sont enregistrées sur le PC enseignant. À cadrer obligatoirement dans la charte numérique de l'établissement. Privilégier des comptes nominatifs (et non un compte commun) pour la traçabilité.

## 8. Charte d'usage élève — modèle prêt à imprimer

Document à distribuer à chaque élève avant la première utilisation. À adapter au niveau et à la matière. Le faire signer par l'élève et, pour les mineurs, par le responsable légal. Le conserver avec les pièces administratives de la classe.

#### Charte d'usage — assistant IA en classe

*Établissement / Classe / Année — à compléter*

#### Ce que l'assistant IA fait

- Il m'aide à comprendre une notion en posant des questions.
- Il me donne des indices pour avancer sur un exercice.
- Il me dit quand je suis sur la bonne piste, quand je me trompe.
- Il sait que je suis en classe de [niveau], en [matière].

#### Ce que l'assistant IA NE fait PAS

- Il **ne me donne pas les réponses** directement.
- Il ne remplace pas mon professeur.
- Il peut se tromper — je vérifie toujours dans mon cours.
- Il n'est pas un ami, ni un confident : c'est un programme.

#### Mes engagements

- Je l'utilise **quand le professeur me dit de l'utiliser**, pas en dehors.
- Je **vérifie** les informations qu'il me donne avant de les recopier.
- Je **signale** à mon professeur toute réponse qui me paraît bizarre ou fausse.
- Je ne lui confie pas de **données personnelles** sur moi, ma famille ou mes camarades.
- Je traite l'assistant avec **respect** — pas d'insulte, pas de provocation.

#### Conservation des échanges

Mes conversations sont enregistrées sur l'ordinateur du professeur, sans jamais sortir de l'établissement. Elles sont conservées **[X semaines / mois]**, puis supprimées. Je peux demander à mon professeur de supprimer un échange à tout moment.

Date :
Élève — Nom et signature :

Date :
Responsable légal — Nom et signature (mineurs) :

## 9. Scénario d'une séance type — 55 minutes

Première utilisation d'un chatbot pédagogique en classe entière. Modèle générique transposable à toutes les matières. **Objectif** : que l'élève sorte avec une idée claire de ce que l'IA peut et ne peut pas faire *pour son apprentissage*.

0 – 10 min

**Phase 1 — Cadrage**. Le prof rappelle la charte. Distribue les codes d'accès. Demande aux élèves de se connecter et de choisir le model dédié dans le menu. Aucun échange avec l'IA pour l'instant — la machine s'allume, c'est tout.

10 – 15 min

**Phase 2 — Démonstration au tableau**. Le prof projette son écran et fait **deux dialogues** avec l'IA : un qui marche bien (l'élève simulé bloque, l'IA aide intelligemment), un qui dérape (l'IA dit une bêtise, on la corrige). On nomme ce qui s'est passé.

15 – 35 min

**Phase 3 — Travail individuel ou en binôme**. Sur un exercice précis, l'élève peut consulter l'IA comme tuteur. Consigne : *« vous notez à chaque fois que l'IA vous a vraiment aidé, et à chaque fois qu'elle s'est trompée ou que vous avez douté »*. Le prof circule, observe, ne réintervient pas sauf cas bloquant.

35 – 50 min

**Phase 4 — Mise en commun et retour critique**. Tour de table : *« qu'est-ce que l'IA a bien fait ? mal fait ? avez-vous vérifié une de ses réponses ? est-ce qu'elle vous a donné directement la solution malgré la consigne ? »*. On capitalise les bons et les mauvais usages sur un paperboard / au tableau.

50 – 55 min

**Phase 5 — Synthèse et règle de classe**. À partir des observations des élèves, on co-construit une **règle d'usage spécifique à la classe** qui complète la charte (ex. : « on note dans le cahier les indices reçus de l'IA, comme on noterait l'aide d'un camarade »).

**Effet attendu** L'élève sort de la séance avec deux choses : **une compétence d'usage** (savoir solliciter l'IA utilement) et **une compétence critique** (savoir douter d'une réponse, vérifier, signaler). C'est la base de toutes les séances suivantes.

## 10. Évaluation et progression de l'élève

L'usage de l'IA devient progressivement **une compétence évaluable en soi**, transversale aux disciplines. Une grille de progression à quatre niveaux fonctionne dans la durée :

| Niveau | Indicateur | Observable concret |
| --- | --- | --- |
| N1 — Utilisation cadrée | L'élève sait utiliser l'IA *quand le prof le demande*, sur une tâche prescrite | Sollicite l'IA uniquement dans le cadre de l'exercice, respecte la charte |
| N2 — Utilisation autonome | L'élève sait *identifier* quand l'IA peut l'aider et quand elle ne peut pas | « Là c'est une question de cours, je vais voir l'IA. Là c'est une opinion à donner, l'IA ne sert pas. » |
| N3 — Utilisation critique | L'élève sait *juger* une réponse de l'IA, la vérifier, la nuancer | « L'IA m'a dit X, j'ai vérifié dans le cours, ce n'est pas exact. » |
| N4 — Utilisation experte | L'élève sait *cadrer* l'IA (reformuler la consigne) et *tirer profit* du dialogue itératif | « Je lui ai redemandé en précisant le niveau, j'ai obtenu une explication plus utile. » |

Ces quatre niveaux peuvent être positionnés sur le bulletin (compétence transversale « usage du numérique éducatif »), ou faire l'objet d'une fiche autonome qu'on partage avec l'équipe pédagogique. **La trace des échanges** (que l'élève peut exporter depuis Open WebUI) sert d'élément d'évaluation : un dialogue où l'élève a su rebondir, vérifier, reformuler, c'est un indicateur clair de niveau N3-N4.

**Articulation avec les attendus officiels** Cette grille s'articule avec le **CRCN** (Cadre de Référence des Compétences Numériques) sur les domaines « Information et données » et « Création de contenus », et avec les **compétences transversales** du socle commun. À documenter dans le projet pédagogique de la discipline ou du niveau.

## 11. Pièges et garde-fous

| Piège | Effet | Garde-fou |
| --- | --- | --- |
| L'IA donne la solution malgré la consigne | L'élève recopie sans apprendre | Renforcer la règle 2 du system prompt. Tester avec 5 prompts d'élèves avant déploiement. |
| L'élève vit l'IA comme un confident | Confidences sensibles, dérive émotionnelle | Règle 7 du system prompt (sortie de rôle). Rappels en séance. Vigilance prof. |
| L'élève harcèle l'IA | Provocations, insultes, jeu de défi | L'IA reste polie mais n'entre pas dans le jeu. Le system prompt précise « si on m'insulte, je rappelle la charte et je propose de revenir au sujet ». |
| Inégalité d'accès | Certains élèves très à l'aise prennent l'IA pour faire le travail | Travail en binôme imposé sur les premières séances. Trace des échanges relue par le prof. |
| Saturation du PC | Lenteur insupportable en multi-postes | Plafonner à 10 élèves simultanés. Modèle plus léger en cas de besoin. Plan B papier prêt. |
| Le prof ne vérifie pas les logs | Dérives invisibles | Routine de fin de séance : 5 min pour scanner 3 conversations au hasard. |
| Conservation indéfinie des logs | Risque RGPD différé | Effacement programmé toutes les [X semaines]. À écrire dans la charte de l'établissement. |

## 12. Ressources et liens

### Documentation Open WebUI

[Open WebUI — créer un modèle personnalisé](https://docs.openwebui.com/features/workspace/models)
[Open WebUI — Knowledge (attacher des fichiers)](https://docs.openwebui.com/features/workspace/knowledge)
[Open WebUI — configuration réseau / multi-postes](https://docs.openwebui.com/getting-started/advanced-topics/network-diagram)
[Open WebUI — synthèse et reconnaissance vocales](https://docs.openwebui.com/tutorials/text-to-speech)

### Reconnaissance et synthèse vocale

[Whisper — reconnaissance vocale open source (OpenAI)](https://github.com/openai/whisper)
[Piper — synthèse vocale légère et locale](https://github.com/rhasspy/piper)

### Cadre institutionnel et pédagogique

[Eduscol — CRCN, cadre de référence des compétences numériques](https://eduscol.education.fr/3776/le-crcn-cadre-de-reference-des-competences-numeriques)
[MEN — cadre d'usage de l'IA en éducation](https://www.education.gouv.fr/cadre-d-usage-de-l-intelligence-artificielle-en-education-422171)
[CNIL — Intelligence artificielle](https://www.cnil.fr/fr/intelligence-artificielle)
[MEN — protection des données personnelles](https://www.education.gouv.fr/la-protection-des-donnees-personnelles-12598)

### Ressources pour profils spécifiques

[MEN — scolarisation handicap (AESH)](https://www.education.gouv.fr/scolarisation-des-eleves-en-situation-de-handicap-1219)
[3018 — violences numériques (ressource élèves)](https://www.3018.fr/)
[3020 — non au harcèlement](https://www.3020.fr/)

**Suite du guide** [**Chapitre 3 — Optimiser son Obsidian**](chapitre-3.md) : construire une mémoire long-terme, brancher l'IA dessus, transformer un référentiel en skill, gérer le suivi élève sans double saisie et piloter le pivot CSV avec Charlemagne Pro.
