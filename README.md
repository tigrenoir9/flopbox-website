# FLOPBOX — site commercial V1

Site statique prêt pour GitHub Pages. Aucun paiement, aucune collecte automatique de données.

## Publication
1. Créer un dépôt public `flopbox-website` sur GitHub.
2. Ajouter `index.html`, `styles.css`, `script.js` à sa racine.
3. Dans Settings > Pages, choisir Deploy from a branch, branche `main`, dossier `/ (root)`.
4. Attendre le déploiement puis ouvrir `https://VOTRE-COMPTE.github.io/flopbox-website/`.
5. Pour `flopbox.florian-pasquier.fr`, configurer Custom domain dans Pages, puis un CNAME DNS auprès du gestionnaire du domaine. Ne pas écrire un fichier CNAME avant d'avoir configuré ce sous-domaine.

## À personnaliser AVANT publication
- Vérifier ou remplacer `contact@florian-pasquier.fr` dans index.html (deux occurrences). C'est une adresse de démonstration **non vérifiée**.
- Compléter mentions légales et politique de confidentialité, puis adapter la phrase en pied de page.
- Remplacer l'aperçu conceptuel par des captures du produit si souhaité.
- La liste d'attente utilise un `mailto:` : elle nécessite un logiciel email sur l'appareil du visiteur. Pour une vraie collecte automatisée, connecter un prestataire de formulaire et ajouter un consentement et une politique de confidentialité adaptés.
- Ne pas mettre de clés API ou secrets dans JavaScript / GitHub Pages.

## Limites
Le site ne vend rien et n'effectue aucune précommande. Les compatibilités indiquées correspondent aux travaux du prototype, pas à une certification ni à une garantie produit.


## Identité visuelle
Le site reprend les couleurs du portail FLOPBOX : fond `#0b101b`, barre latérale/entête `#111827`, cartes `#192333`, bordures `#2b3a4d`, accent vert menthe `#68e2c7`, et dégradé du logo `#4ee2c8` à `#5f98f3`.
