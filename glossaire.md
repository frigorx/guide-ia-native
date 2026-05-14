<!-- Glossaire du guide « Installer une IA native » — F. Henninot. À joindre à une IA cloud comme document de référence. -->

# Glossaire du guide IA native

*Définitions accessibles aux non-techniciens des termes utilisés dans les Chapitres 1, 2 et 3. Conçu pour être donné à votre IA cloud comme référence.*

> **Comment utiliser ce glossaire** Trois façons : **(1)** chercher un mot directement avec `Ctrl + F` dans votre navigateur ; **(2)** cliquer sur une lettre dans la barre alphabétique ci-dessous ; **(3)** donner ce document à votre IA cloud en plus du chapitre en cours — elle pourra ainsi expliquer un terme à la volée, dans le contexte de votre installation.

> **Manque un terme ?** Ce glossaire est versionné. N'hésitez pas à signaler un terme manquant ou une définition à clarifier — l'objectif est qu'aucun mot du guide ne reste obscur pour qui le découvre.

## A

**Agentique** *[IA]*
Qualifie une IA qui ne se contente pas de répondre mais qui *agit* — envoie un mail, dépose un fichier, déclenche une action. Sujet du Chapitre 4 à venir.

**AESH** — Accompagnant d'Élève en Situation de Handicap *[Édu]*
Professionnel qui accompagne au quotidien un élève bénéficiant d'un PPS ou d'un PAP.

**API** — Application Programming Interface *[Technique]*
Façon dont deux logiciels se parlent. Une « clé API » permet à un programme d'utiliser un service distant (par exemple appeler ChatGPT depuis un autre logiciel).

## B

**B** — Billions (milliards de paramètres) *[IA]*
Le « 8B » dans « Llama 3.1 8B » signifie 8 milliards de paramètres. Plus le nombre est élevé, plus le modèle est intelligent — et plus il est lourd à faire tourner.

**BOM** — Byte Order Mark *[Technique]*
Marque cachée au début d'un fichier indiquant son encodage. Certains logiciels (comme Charlemagne Pro) exigent un fichier CSV avec BOM en UTF-8 pour bien lire les accents.

## C

**CFA** — Centre de Formation d'Apprentis *[Édu]*
Structure qui dispense la formation en alternance des apprentis.

**Charlemagne Pro** — C-Pro *[Logiciel]*
Logiciel de gestion administrative et pédagogique de certains établissements scolaires (suivi des notes, des absences, des compétences, communication aux familles).

**Chatbot** *[IA]*
Programme qui dialogue avec l'utilisateur sous forme de conversation. ChatGPT, Claude, Gemini sont des chatbots IA. Le Chapitre 2 explique comment en créer un dédié pour les élèves.

**ChatGPT** *[Logiciel]*
Assistant IA conversationnel édité par **OpenAI** (US). Le plus connu du grand public. Accessible sur [chat.openai.com](https://chat.openai.com).

**Claude** *[Logiciel]*
Assistant IA conversationnel édité par **Anthropic** (US). Préconisé à titre personnel par l'auteur du guide pour le radio-guidage technique. Accessible sur [claude.ai](https://claude.ai).

**CLI** — Command-Line Interface *[Technique]*
Interface en ligne de commande — on tape des instructions texte plutôt que de cliquer. Le « Terminal » sur Mac, « PowerShell » ou « cmd » sur Windows.

**Cloud** *[Technique]*
Services hébergés sur des serveurs distants, accessibles par Internet. Opposé à « local » (sur votre propre machine). ChatGPT et Claude tournent en cloud ; Ollama tourne en local.

**CNIL** — Commission Nationale de l'Informatique et des Libertés *[RGPD]*
Autorité française indépendante de protection des données personnelles. Émet des recommandations et peut sanctionner.

**CPE** — Conseiller Principal d'Éducation *[Édu]*
Personnel d'éducation chargé de la vie scolaire, du suivi des élèves, de l'animation éducative.

**CPU** — Central Processing Unit *[Technique]*
Le processeur principal de l'ordinateur. Sur un PC sans carte graphique dédiée, c'est lui qui fait tourner l'IA — plus lentement qu'un GPU.

**CRCN** — Cadre de Référence des Compétences Numériques *[Édu]*
Référentiel officiel des compétences numériques à valider tout au long de la scolarité. Utilisé dans le Chapitre 2 pour positionner l'usage de l'IA par l'élève.

**CSV** — Comma-Separated Values *[Technique]*
Format de fichier tableau texte. Chaque ligne du fichier est une ligne du tableau, les colonnes sont séparées par virgules ou points-virgules. Format d'échange universel entre Obsidian et Charlemagne Pro / École Directe.

## D

**Docker** *[Logiciel]*
Logiciel qui permet d'installer et faire tourner d'autres logiciels dans des « conteneurs » isolés. Utilisé ici pour installer Open WebUI en une commande. À télécharger sur [docker.com](https://docker.com) (Docker Desktop).

**DOCX / PPTX / XLSX** *[Technique]*
Formats Microsoft Word (DOCX), PowerPoint (PPTX), Excel (XLSX) modernes — depuis 2007. Reconnaissables au « X » final, qui signifie qu'il s'agit de fichiers XML compressés.

**DPO** — Data Protection Officer / Délégué à la Protection des Données *[RGPD]*
Personne chargée de veiller au respect du RGPD dans une organisation. Chaque académie a un DPO.

**DYS** — Troubles « DYS » *[Édu]*
Famille de troubles des apprentissages : dyslexie, dyspraxie, dysorthographie, dyscalculie, etc. Justifient des aménagements pédagogiques.

## E

**École Directe** — ED *[Logiciel]*
Outil numérique de vie scolaire largement utilisé dans les établissements privés (notes, absences, cahier de texte, communication familles).

**Embedding** *[IA]*
Représentation numérique d'un texte sous forme de vecteur de nombres. Permet à l'IA de trouver des notes « similaires en sens » — pas seulement en mots-clés. Utilisé par le plugin Smart Connections dans Obsidian.

**ENT** — Espace Numérique de Travail *[Édu]*
Plateforme institutionnelle d'un établissement, agrégeant les outils numériques (mail, agenda, ressources, vie scolaire).

## F

**F12** *[Technique]*
Touche du clavier qui ouvre les outils de développement dans la plupart des navigateurs. Permet d'inspecter le code d'une page web, de récupérer un tableau, de voir les en-têtes d'un formulaire (utile pour adapter un skill à un outil comme Charlemagne).

**Frontmatter** *[Technique]*
En-tête YAML placé en haut d'un fichier markdown. Encadré par des `---`. Contient les métadonnées (titre, classe, date, tags) qui rendent la note filtrable. Voir le Chapitre 3 §4.2.

## G

**Gemini** *[Logiciel]*
Assistant IA conversationnel édité par **Google** (US). Accessible sur [gemini.google.com](https://gemini.google.com), connexion via compte Google.

**Gemma 3** *[IA]*
Famille de modèles open weights publiée par Google DeepMind. Gemma 3 12B est aujourd'hui un des meilleurs compromis qualité/poids pour un usage local francophone. Voir Chapitre 1 §6.2.

**Go (gigaoctet)** *[Technique]*
Unité de mesure du stockage et de la mémoire. 1 Go = 1 milliard d'octets. Un modèle Llama 3.1 8B pèse environ 4,7 Go ; Gemma 3 12B pèse environ 8 Go.

**GPU** — Graphics Processing Unit *[Technique]*
Carte graphique. Initialement pour les jeux vidéo, devenue essentielle pour accélérer l'IA. Les NVIDIA RTX (3060+) sont la cible idéale ; les Mac Apple Silicon (M1+) sont excellents grâce à leur mémoire unifiée.

**GRETA** — Groupement d'Établissements *[Édu]*
Structure de l'Éducation nationale dédiée à la formation continue des adultes.

## H

**Hallucination** *[IA]*
Quand l'IA invente une information plausible mais fausse — une référence inexistante, une date inventée, une norme imaginée. Le principal défaut des LLM. À neutraliser par des règles strictes dans le system prompt (Chapitre 2 §4.1) et par l'usage de skills bien construits.

**Headless** *[Technique]*
« Sans tête », sans interface graphique. Un navigateur en mode headless tourne sans fenêtre — utile pour automatiser. Le script `generer-pdf.bat` utilise Edge en mode headless pour produire le PDF du guide.

**HTML** — HyperText Markup Language *[Technique]*
Format des pages web. Les trois chapitres de ce guide sont en HTML, ce qui leur permet d'être interactifs (liens, sommaire cliquable, boutons « copier »).

**HTTPS / HTTP** *[Technique]*
Protocoles de transport web. **HTTPS** est chiffré (le « S » pour Secure) ; **HTTP** ne l'est pas. Le proxy d'un établissement peut bloquer HTTP non chiffré sur certains ports.

## I

**IA** — Intelligence Artificielle *[IA]*
Terme générique pour les programmes qui imitent certaines fonctions cognitives humaines. Aujourd'hui, le sujet du moment est l'**IA générative**, capable de produire texte, image, son.

**IA native (ou IA locale)** *[IA]*
Au sens de ce guide : IA qui s'exécute sur la machine de l'utilisateur, sans envoi de données à un serveur tiers. Synonymes : IA locale, IA on-device, IA en local. Tout l'objet du Chapitre 1.

**IP / IPv4** — Internet Protocol *[Technique]*
Adresse numérique unique d'un appareil sur un réseau. Format `192.168.1.42` typique d'un réseau local. Permet à un poste élève de joindre l'IA installée sur le poste enseignant (Chapitre 2 §7).

## J

**JSON** — JavaScript Object Notation *[Technique]*
Format de données texte structurées, à la fois lisible par les humains et par les programmes. Utilisé pour configurer beaucoup d'outils modernes.

## L

**Llama** *[IA]*
Famille de modèles open weights publiée par **Meta** (US). Excellente en français, très polyvalente. Llama 3.1 8B est une référence en milieu de gamme.

**LLM** — Large Language Model *[IA]*
« Grand modèle de langage ». La famille des IA conversationnelles modernes : Llama, Mistral, Gemma, ChatGPT, Claude. Tous fonctionnent sur le même principe : prédire le mot suivant dans un texte.

**LM Studio** *[Logiciel]*
Application desktop tout-en-un pour faire tourner des modèles LLM en local. Plus simple à installer qu'Ollama (un seul installateur), mais moins flexible. [lmstudio.ai](https://lmstudio.ai).

**Local** *[Technique]*
Sur votre propre machine. Opposé à « cloud » (sur un serveur distant). Une IA locale tourne sans Internet une fois installée.

**Localhost** *[Technique]*
« Votre propre machine », vue depuis le réseau. `localhost:3000` signifie « accéder au service qui écoute sur le port 3000 de ma machine ». C'est ainsi qu'on ouvre Open WebUI depuis le navigateur.

## M

**Markdown** — .md *[Technique]*
Format texte enrichi très léger, lisible tel quel. Quelques caractères suffisent à produire des titres, des listes, du gras. Utilisé pour les fichiers de skills, les notes Obsidian, et le source de ce guide.

**Mistral / Mixtral** *[IA]*
Famille de modèles open weights publiée par **Mistral AI** (français). Excellente en français, choix souverain européen. Mistral 7B est une référence légère.

**Modèle (au sens IA)** *[IA]*
Le « cerveau » de l'IA, sous forme d'un gros fichier (plusieurs Go) contenant les « poids » du réseau de neurones. Exemples : Llama 3.1 8B, Gemma 3 12B, Mistral 7B.

**Multimodal** *[IA]*
Qualifie un modèle capable de traiter plusieurs types de contenu — texte, image, audio. Gemma 3 a une version multimodale qui lit les images.

## O

**Obsidian** *[Logiciel]*
Logiciel de prise de notes en markdown, **100 % local**, avec un système de plugins très riche. Devient avec une IA branchée une « mémoire long-terme » du prof. Sujet du Chapitre 3. [obsidian.md](https://obsidian.md).

**Ollama** *[Logiciel]*
Moteur open source qui fait tourner des modèles LLM en local. S'utilise en ligne de commande mais avec une syntaxe très simple. C'est le cœur de l'installation du Chapitre 1. [ollama.com](https://ollama.com).

**Open source / Open weights** *[IA]*
Logiciels (ou modèles) dont les fichiers sont publics et utilisables librement, sous licence. Llama, Mistral, Gemma, Qwen sont des modèles « open weights » — c'est ce qui rend possible l'IA native.

**Open WebUI** *[Logiciel]*
Interface web (type ChatGPT) qui se branche sur Ollama pour offrir une expérience graphique aux utilisateurs. Permet de créer des « models » personnalisés (Chapitre 2). [docs.openwebui.com](https://docs.openwebui.com).

## P

**Pare-feu** *[Technique]*
Logiciel qui filtre les connexions réseau entrantes et sortantes d'un ordinateur. Peut bloquer un service Open WebUI accessible aux postes élèves — à autoriser sur le profil « réseau privé ».

**PFMP** — Période de Formation en Milieu Professionnel *[Édu]*
Stages obligatoires des élèves en filière professionnelle (CAP, BAC PRO).

**Piper** *[Logiciel]*
Logiciel open source de synthèse vocale (texte → voix), léger, exécutable en local. Permet à un chatbot IA de parler à l'élève. Voir Chapitre 2 §6.

**Plugin** *[Technique]*
Extension d'un logiciel ajoutant des fonctionnalités. Smart Connections, Local GPT, Templater sont des plugins d'Obsidian.

**Port** *[Technique]*
Numéro identifiant un service sur une machine. Ollama écoute sur le port **11434**, Open WebUI sur le **3000**. Un proxy d'établissement peut bloquer certains ports.

**Pronote** *[Logiciel]*
Outil numérique de vie scolaire utilisé dans la majorité des établissements publics et certains privés.

**Prompt** *[IA]*
Le message qu'on envoie à l'IA, qui contient à la fois la consigne et le contexte. Un bon prompt fait 80 % de la qualité de la réponse. Voir Chapitre 1 §10 (bibliothèque de prompts).

**Proxy** *[Technique]*
Intermédiaire réseau. Dans les établissements scolaires, le proxy filtre les connexions vers Internet et peut bloquer certains ports ou certains sites. À coordonner avec le référent numérique pour l'installation.

## Q

**Quantification / Quantifié** *[IA]*
Technique de compression d'un modèle pour qu'il tienne sur du matériel modeste. Un modèle « quantifié en Q4 » pèse environ 4 fois moins qu'en pleine précision, avec une perte de qualité minime. La quantification est appliquée automatiquement par Ollama pour la plupart des modèles téléchargés.

**Qwen** *[IA]*
Famille de modèles open weights publiée par **Alibaba** (Chine). Excellente en raisonnement structuré et en code. La provenance peut soulever des questions de gouvernance institutionnelle — point de vigilance selon le contexte.

## R

**RAG** — Retrieval-Augmented Generation *[IA]*
Technique où l'IA va d'abord chercher des informations dans une base (vos notes, vos PDF, vos référentiels) *avant* de répondre. Plus précis, moins d'hallucinations. C'est ce que font Smart Connections + Local GPT dans Obsidian.

**RAM** — Random Access Memory — mémoire vive *[Technique]*
Mémoire de travail de l'ordinateur. Pour faire tourner un LLM, il faut suffisamment de RAM : **8 Go** pour un usage léger, **16 Go** pour un usage confortable, **32 Go+** pour les modèles avancés.

**Référentiel** *[Édu]*
Document officiel décrivant les compétences, savoirs, modalités d'évaluation d'un diplôme. La transformation d'un référentiel en skill est traitée au Chapitre 3 §7.

**Reverse proxy** *[Technique]*
Service qui sert d'intermédiaire entre les utilisateurs et un serveur, souvent utilisé pour ajouter HTTPS, du cache ou de la sécurité. Utile pour exposer Open WebUI en HTTPS sur le réseau pédagogique.

**RGPD** — Règlement Général sur la Protection des Données *[RGPD]*
Règlement européen 2016/679 entré en application en mai 2018. Cadre légal de la protection des données personnelles dans l'UE. [gdpr-info.eu](https://gdpr-info.eu).

**RUPN** — Référent d'Usage Pédagogique du Numérique *[Édu]*
Enseignant chargé d'accompagner l'usage pédagogique du numérique dans son établissement. Souvent synonyme de « référent numérique d'établissement ». Interlocuteur clé pour le déploiement multi-postes (Chapitre 2 §7).

## S

**SEGPA** — Section d'Enseignement Général et Professionnel Adapté *[Édu]*
Section accueillant des élèves rencontrant des difficultés scolaires graves et durables, dans le second degré.

**Skill** *[IA]*
Au sens de ce guide : dossier contenant un fichier `SKILL.md` qui décrit à l'IA *quand* et *comment* se comporter sur une tâche donnée. L'extension cognitive du prof, capturée une fois, réutilisable mille fois. Voir Chapitre 1 §9.

**Smart Connections** *[Logiciel]*
Plugin Obsidian qui indexe sémantiquement le vault et permet la recherche par *sens*, pas seulement par mots-clés. Essentiel pour brancher l'IA sur Obsidian (Chapitre 3 §5).

**Sous-traitant (au sens RGPD)** *[RGPD]*
Entité qui traite des données personnelles pour le compte d'un responsable. Une école qui utilise ChatGPT pour traiter des copies d'élèves devrait avoir signé un contrat de sous-traitance avec OpenAI. Ce qui n'est jamais le cas — d'où le risque RGPD.

**System prompt** *[IA]*
Message d'amorçage caché qui définit la posture de l'IA pour toute une conversation. Visible par l'enseignant qui le rédige, invisible pour l'élève qui dialogue avec l'IA. Voir Chapitre 2 §4.

## T

**TDAH** — Trouble du Déficit de l'Attention avec ou sans Hyperactivité *[Édu]*
Trouble neurodéveloppemental qui affecte l'attention, l'impulsivité, parfois l'activité motrice. Justifie des aménagements (consignes courtes, pauses, etc.).

**Terminal** *[Technique]*
Application qui permet de taper des commandes texte. Sur Windows : **PowerShell** ou **cmd**. Sur Mac : **Terminal**. Sur Linux : généralement **bash**.

**Token** *[IA]*
Unité élémentaire que manipule un LLM — environ 4 caractères en français. Une page de texte ≈ 500 tokens. Les modèles ont une « fenêtre de contexte » exprimée en tokens (Gemma 3 : 128 000 tokens).

## U

**UTF-8** *[Technique]*
Encodage standard des caractères, gérant les accents et caractères spéciaux du français. Beaucoup d'outils (dont Charlemagne Pro pour les imports CSV) exigent ce format, parfois avec un BOM en plus.

## V

**Vault** *[Logiciel]*
Dans Obsidian : dossier racine d'un projet, contenant toutes les notes. Synonyme de « votre base de notes ». Voir Chapitre 3 §4 pour l'architecture en couches.

**VRAM** — Video RAM — mémoire vive de la carte graphique *[Technique]*
Mémoire dédiée du GPU. 8 Go de VRAM permettent de faire tourner des modèles de taille moyenne en accélération GPU (très rapide). Au-delà de 16 Go, on accède aux modèles les plus puissants.

## W

**Whisper** *[Logiciel]*
Logiciel open source de reconnaissance vocale (voix → texte), édité initialement par OpenAI mais disponible en exécution locale. Permet à un chatbot IA d'écouter l'élève parler. Voir Chapitre 2 §6.

## Y

**YAML** — YAML Ain't Markup Language *[Technique]*
Format texte de configuration, structuré par indentation. Utilisé pour les en-têtes (frontmatter) des notes Obsidian et des fichiers SKILL.md. Très simple à lire et à écrire.
