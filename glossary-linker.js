/*
 * glossary-linker.js — auto-links technical terms to the glossary
 *
 * Pour chaque chapitre du guide inerWeb HAL, ce script :
 * - Parcourt le texte courant (sauf titres, code, liens, scripts)
 * - Détecte la PREMIÈRE occurrence de chaque terme technique connu
 * - L'enveloppe d'un <a> qui pointe vers glossaire.html#anchor
 * - Évite le double-linking et préserve les liens existants
 *
 * Le style des liens créés (.glossary-link) est défini dans chaque
 * chapitre, avec un soulignement pointillé discret pour ne pas
 * concurrencer la lecture.
 *
 * Pour ajouter un terme : ajouter une entrée [terme, ancre-glossaire]
 * dans le tableau T. Les entrées sont triées par longueur décroissante
 * automatiquement, donc "Open WebUI" sera matché avant "Open".
 */
(function () {
  'use strict';

  // Liste des termes ↔ ancres glossaire.
  // Ordre indifférent : tri par longueur descendant à l'init.
  var T = [
    // Multi-mots d'abord (priorité)
    ['Open WebUI', 'open-webui'],
    ['LM Studio', 'lm-studio'],
    ['Charlemagne Pro', 'charlemagne'],
    ['Mistral Le Chat', 'mistral'],
    ['Smart Connections', 'smart-connections'],
    ['École Directe', 'ed'],
    ['IA native', 'ia-native'],
    ['IA locale', 'ia-native'],
    ['open source', 'open-source'],
    ['reverse proxy', 'reverse-proxy'],
    ['system prompt', 'system-prompt'],
    ['sous-traitant', 'sous-traitant'],

    // Logiciels et outils
    ['Ollama', 'ollama'],
    ['Docker', 'docker'],
    ['Obsidian', 'obsidian'],
    ['Whisper', 'whisper'],
    ['Piper', 'piper'],
    ['ChatGPT', 'chatgpt'],
    ['Gemini', 'gemini'],
    ['Claude', 'claude'],
    ['Mistral', 'mistral'],
    ['Llama', 'llama'],
    ['Qwen', 'qwen'],
    ['Pronote', 'pronote'],
    ['Gemma 3', 'gemma'],

    // Concepts IA
    ['hallucination', 'hallucination'],
    ['multimodal', 'multimodal'],
    ['quantification', 'quantification'],
    ['embedding', 'embedding'],
    ['agentique', 'agentique'],
    ['chatbot', 'chatbot'],
    ['modèle', 'modele'],
    ['prompt', 'prompt'],
    ['skill', 'skill'],
    ['token', 'token'],

    // Concepts techniques
    ['frontmatter', 'frontmatter'],
    ['markdown', 'markdown'],
    ['headless', 'headless'],
    ['localhost', 'localhost'],
    ['pare-feu', 'parefeu'],
    ['plugin', 'plugin'],
    ['proxy', 'proxy'],
    ['terminal', 'terminal'],
    ['cloud', 'cloud'],
    ['local', 'local'],
    ['vault', 'vault'],
    ['port', 'port'],

    // Pédagogie
    ['référentiel', 'referentiel'],
    ['AESH', 'aesh'],
    ['CPE', 'cpe'],
    ['CRCN', 'crcn'],
    ['TDAH', 'tdah'],
    ['DYS', 'dys'],
    ['PFMP', 'pfmp'],
    ['GRETA', 'greta'],
    ['CFA', 'cfa'],
    ['SEGPA', 'segpa'],
    ['RUPN', 'rupn'],
    ['ENT', 'ent'],

    // RGPD
    ['RGPD', 'rgpd'],
    ['CNIL', 'cnil'],
    ['DPO', 'dpo'],

    // Sigles techniques
    ['LLM', 'llm'],
    ['RAM', 'ram'],
    ['VRAM', 'vram'],
    ['GPU', 'gpu'],
    ['CPU', 'cpu'],
    ['API', 'api'],
    ['CLI', 'cli'],
    ['JSON', 'json'],
    ['HTML', 'html'],
    ['HTTPS', 'https'],
    ['F12', 'f12'],
    ['BOM', 'bom'],
    ['UTF-8', 'utf8'],
    ['YAML', 'yaml'],
    ['CSV', 'csv'],
    ['RAG', 'rag'],
    ['Go', 'go']
  ];

  // Tri par longueur décroissante pour que les termes longs soient prioritaires
  T.sort(function (a, b) { return b[0].length - a[0].length; });

  // Balises où on ne traite PAS le texte
  var SKIP_TAGS = {
    A: 1, CODE: 1, PRE: 1,
    H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1,
    BUTTON: 1, SCRIPT: 1, STYLE: 1, TITLE: 1,
    TEXTAREA: 1, INPUT: 1
  };

  // Termes déjà liés sur la page (chacun n'est lié qu'une fois)
  var linked = {};

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Vérifie qu'un caractère n'est pas un caractère de mot (français)
  function isWordBoundary(c) {
    if (!c) return true;
    return !/[a-zA-ZÀ-ÿ0-9_-]/.test(c);
  }

  function tryLinkTextNode(node) {
    var parent = node.parentNode;
    if (!parent) return;
    if (SKIP_TAGS[parent.tagName]) return;
    var text = node.nodeValue;
    if (!text || text.length < 2) return;

    for (var i = 0; i < T.length; i++) {
      var term = T[i][0];
      var anchor = T[i][1];
      if (linked[term]) continue;

      var re = new RegExp(escapeRegex(term), 'i');
      var m = text.match(re);
      if (!m) continue;

      var start = m.index;
      var end = start + m[0].length;
      var before = text.slice(0, start);
      var matched = text.slice(start, end);
      var after = text.slice(end);

      // Vérification de "word boundary" (manuel pour gérer les accents français)
      if (!isWordBoundary(before.charAt(before.length - 1))) continue;
      if (!isWordBoundary(after.charAt(0))) continue;

      var link = document.createElement('a');
      link.href = 'glossaire.html#' + anchor;
      link.className = 'glossary-link';
      link.title = 'Voir « ' + matched + ' » dans le glossaire';
      link.textContent = matched;

      if (before) parent.insertBefore(document.createTextNode(before), node);
      parent.insertBefore(link, node);
      var afterNode = null;
      if (after) {
        afterNode = document.createTextNode(after);
        parent.insertBefore(afterNode, node);
      }
      parent.removeChild(node);
      linked[term] = 1;

      // Continuer dans le reste du texte après le terme inséré
      if (afterNode) tryLinkTextNode(afterNode);
      return;
    }
  }

  function walk(node) {
    if (!node) return;
    if (node.nodeType === 3) { // TEXT_NODE
      tryLinkTextNode(node);
      return;
    }
    if (node.nodeType !== 1) return; // ELEMENT_NODE seulement
    if (SKIP_TAGS[node.tagName]) return;
    if (node.classList && node.classList.contains('back-btn')) return;
    if (node.classList && node.classList.contains('school-band')) return;

    // Copie des enfants car on les modifie pendant l'itération
    var kids = [];
    for (var i = 0; i < node.childNodes.length; i++) kids.push(node.childNodes[i]);
    for (var j = 0; j < kids.length; j++) walk(kids[j]);
  }

  function start() {
    walk(document.body);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
