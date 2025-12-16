// ============================================================================
// VOCABULARY DATABASE - Start with 10 words for testing
// ============================================================================

const vocabularyDatabase = [
    // Daily - Common A2-B1 Level (basic greetings removed)
    { french: "S'il vous plaît", english: ["Please"], category: "daily", difficulty: "medium" },
    { french: "Excusez-moi", english: ["Excuse me", "Sorry"], category: "daily", difficulty: "medium" },
    { french: "Bienvenue", english: ["Welcome"], category: "daily", difficulty: "medium" },
    { french: "À bientôt", english: ["See you soon"], category: "daily", difficulty: "easy" },
    { french: "Comment allez-vous?", english: ["How are you?"], category: "daily", difficulty: "easy" },
    { french: "Ça va?", english: ["How are you?", "How's it going?"], category: "daily", difficulty: "easy" },
    { french: "Bien", english: ["Well", "Good", "Fine"], category: "daily", difficulty: "easy" },
    { french: "Mal", english: ["Bad", "Badly", "Poor"], category: "daily", difficulty: "easy" },
    { french: "Jour", english: ["Day"], category: "daily", difficulty: "easy" },
    { french: "Nuit", english: ["Night"], category: "daily", difficulty: "easy" },
    { french: "Matin", english: ["Morning"], category: "daily", difficulty: "easy" },
    { french: "Après-midi", english: ["Afternoon"], category: "daily", difficulty: "medium" },
    { french: "Soir", english: ["Evening"], category: "daily", difficulty: "easy" },
    { french: "Semaine", english: ["Week"], category: "daily", difficulty: "easy" },
    { french: "Mois", english: ["Month"], category: "daily", difficulty: "easy" },
    { french: "Année", english: ["Year"], category: "daily", difficulty: "easy", difficulty: "easy" },
    { french: "Hier", english: ["Yesterday"], category: "daily", difficulty: "easy" },
    { french: "Aujourd'hui", english: ["Today"], category: "daily", difficulty: "medium" },
    { french: "Demain", english: ["Tomorrow"], category: "daily", difficulty: "easy" },
    { french: "Maison", english: ["House", "Home"], category: "daily", difficulty: "easy" },
    { french: "Bureau", english: ["Office", "Desk"], category: "daily", difficulty: "easy" },
    { french: "École", english: ["School"], category: "daily", difficulty: "easy" },
    { french: "Restaurant", english: ["Restaurant"], category: "daily", difficulty: "medium" },
    { french: "Hôtel", english: ["Hotel"], category: "daily", difficulty: "easy" },
    { french: "Gare", english: ["Train station"], category: "daily", difficulty: "medium" },
    { french: "Aéroport", english: ["Airport"], category: "daily", difficulty: "medium" },
    { french: "Rue", english: ["Street"], category: "daily", difficulty: "easy" },
    { french: "Route", english: ["Road", "Way"], category: "daily", difficulty: "easy" },
    { french: "Ville", english: ["City", "Town"], category: "daily", difficulty: "easy" },
    { french: "Pays", english: ["Country"], category: "daily", difficulty: "easy" },
    { french: "Eau", english: ["Water"], category: "daily", difficulty: "easy" },
    { french: "Pain", english: ["Bread"], category: "daily", difficulty: "easy" },
    { french: "Lait", english: ["Milk"], category: "daily", difficulty: "easy" },
    { french: "Fromage", english: ["Cheese"], category: "daily", difficulty: "medium" },
    { french: "Viande", english: ["Meat"], category: "daily", difficulty: "easy" },
    { french: "Poisson", english: ["Fish"], category: "daily", difficulty: "easy" },
    { french: "Légume", english: ["Vegetable"], category: "daily", difficulty: "medium" },
    { french: "Fruit", english: ["Fruit"], category: "daily", difficulty: "easy" },
    { french: "Café", english: ["Coffee"], category: "daily", difficulty: "easy" },
    { french: "Thé", english: ["Tea"], category: "daily", difficulty: "easy" },
    { french: "Vin", english: ["Wine"], category: "daily", difficulty: "easy" },
    { french: "Bière", english: ["Beer"], category: "daily", difficulty: "easy" },
    { french: "Assiette", english: ["Plate", "Dish"], category: "daily", difficulty: "medium" },
    { french: "Verre", english: ["Glass"], category: "daily", difficulty: "easy" },
    { french: "Cuillère", english: ["Spoon"], category: "daily", difficulty: "medium" },
    { french: "Fourchette", english: ["Fork"], category: "daily", difficulty: "medium" },
    { french: "Couteau", english: ["Knife"], category: "daily", difficulty: "easy" },
    { french: "Voiture", english: ["Car", "Vehicle"], category: "daily", difficulty: "easy" },
    { french: "Vélo", english: ["Bicycle", "Bike"], category: "daily", difficulty: "easy" },
    { french: "Bus", english: ["Bus", "Coach"], category: "daily", difficulty: "easy" },
    { french: "Train", english: ["Train"], category: "daily", difficulty: "easy" },
    { french: "Avion", english: ["Airplane", "Plane"], category: "daily", difficulty: "easy" },
    { french: "Bateau", english: ["Boat", "Ship"], category: "daily", difficulty: "easy" },
    { french: "Taxi", english: ["Taxi"], category: "daily", difficulty: "easy" },
    { french: "Chat", english: ["Cat"], category: "daily", difficulty: "easy" },
    { french: "Chien", english: ["Dog"], category: "daily", difficulty: "easy" },
    { french: "Oiseau", english: ["Bird"], category: "daily", difficulty: "easy" },
    { french: "Arbre", english: ["Tree"], category: "daily", difficulty: "easy" },
    { french: "Fleur", english: ["Flower"], category: "daily", difficulty: "easy" },
    { french: "Montagne", english: ["Mountain"], category: "daily", difficulty: "medium" },
    { french: "Fleuve", english: ["River"], category: "daily", difficulty: "easy" },
    { french: "Mer", english: ["Sea"], category: "daily", difficulty: "easy" },
    { french: "Plage", english: ["Beach"], category: "daily", difficulty: "easy" },
    { french: "Soleil", english: ["Sun", "Sunshine"], category: "daily", difficulty: "easy" },
    { french: "Lune", english: ["Moon"], category: "daily", difficulty: "easy" },
    { french: "Étoile", english: ["Star"], category: "daily", difficulty: "easy" },
    { french: "Pluie", english: ["Rain"], category: "daily", difficulty: "easy" },
    { french: "Neige", english: ["Snow"], category: "daily", difficulty: "easy" },
    { french: "Vent", english: ["Wind"], category: "daily", difficulty: "easy" },
    { french: "Orage", english: ["Storm", "Thunderstorm"], category: "daily", difficulty: "easy" },
    { french: "Chaud", english: ["Hot", "Warm"], category: "daily", difficulty: "easy" },
    { french: "Froid", english: ["Cold"], category: "daily", difficulty: "easy" },
    { french: "Humide", english: ["Wet", "Damp"], category: "daily", difficulty: "easy" },
    { french: "Sec", english: ["Dry"], category: "daily", difficulty: "easy" },
    { french: "Grand", english: ["Big", "Large"], category: "daily", difficulty: "easy" },
    { french: "Petit", english: ["Small", "Little"], category: "daily", difficulty: "easy" },
    { french: "Long", english: ["Long"], category: "daily", difficulty: "easy" },
    { french: "Court", english: ["Short"], category: "daily", difficulty: "easy" },
    { french: "Épais", english: ["Thick"], category: "daily", difficulty: "easy" },
    { french: "Mince", english: ["Thin"], category: "daily", difficulty: "easy" },
    { french: "Lourd", english: ["Heavy"], category: "daily", difficulty: "easy" },
    { french: "Léger", english: ["Light"], category: "daily", difficulty: "easy" },
    { french: "Fort", english: ["Strong"], category: "daily", difficulty: "easy" },
    { french: "Faible", english: ["Weak"], category: "daily", difficulty: "easy" },
    { french: "Rapide", english: ["Fast", "Quick"], category: "daily", difficulty: "easy" },
    { french: "Lent", english: ["Slow"], category: "daily", difficulty: "easy" },
    { french: "Cher", english: ["Expensive"], category: "daily", difficulty: "easy" },
    { french: "Bon marché", english: ["Cheap"], category: "daily", difficulty: "medium" },
    { french: "Nouveau", english: ["New"], category: "daily", difficulty: "easy" },
    { french: "Vieux", english: ["Old"], category: "daily", difficulty: "easy" },
    { french: "Jeune", english: ["Young"], category: "daily", difficulty: "easy" },
    { french: "Beau", english: ["Beautiful", "Pretty"], category: "daily", difficulty: "easy" },
    { french: "Laid", english: ["Ugly"], category: "daily", difficulty: "easy" },
    { french: "Propre", english: ["Clean"], category: "daily", difficulty: "easy" },
    { french: "Sale", english: ["Dirty", "Filthy"], category: "daily", difficulty: "easy" },
    { french: "Heureux", english: ["Happy", "Glad"], category: "daily", difficulty: "easy" },
    { french: "Triste", english: ["Sad"], category: "daily", difficulty: "easy" },
    { french: "En colère", english: ["Angry"], category: "daily", difficulty: "medium" },
    { french: "Fatigué", english: ["Tired", "Weary"], category: "daily", difficulty: "easy" },
    { french: "Endormi", english: ["Sleepy"], category: "daily", difficulty: "medium" },
    { french: "Éveillé", english: ["Awake"], category: "daily", difficulty: "easy" },
    { french: "Malade", english: ["Sick", "Ill"], category: "daily", difficulty: "easy" },
    { french: "Sain", english: ["Healthy"], category: "daily", difficulty: "easy" },
    { french: "Pain d'épice", english: ["Gingerbread"], category: "daily", difficulty: "hard" },
    { french: "Chocolat", english: ["Chocolate"], category: "daily", difficulty: "medium" },
    { french: "Sucre", english: ["Sugar"], category: "daily", difficulty: "easy" },
    { french: "Sel", english: ["Salt"], category: "daily", difficulty: "easy" },
    { french: "Poivre", english: ["Pepper"], category: "daily", difficulty: "easy" },
    { french: "Huile", english: ["Oil"], category: "daily", difficulty: "easy" },
    { french: "Beurre", english: ["Butter"], category: "daily", difficulty: "easy" },
    { french: "Oeuf", english: ["Egg"], category: "daily", difficulty: "easy" },
    { french: "Farine", english: ["Flour"], category: "daily", difficulty: "easy" },

    // Business & Management
    { french: "Travailler", english: ["Work", "To work"], category: "business", difficulty: "medium" },
    { french: "Réunion", english: ["Meeting"], category: "business", difficulty: "medium" },
    { french: "Projet", english: ["Project"], category: "business", difficulty: "medium" },
    { french: "Gestionnaire", english: ["Manager"], category: "business", difficulty: "hard" },
    { french: "Équipe", english: ["Team"], category: "business", difficulty: "easy" },
    { french: "Entreprise", english: ["Company", "Business"], category: "business", difficulty: "hard" },
    { french: "Employé", english: ["Employee"], category: "business", difficulty: "medium" },
    { french: "Employeur", english: ["Employer"], category: "business", difficulty: "medium" },
    { french: "Patron", english: ["Boss", "Manager"], category: "business", difficulty: "easy" },
    { french: "Directeur", english: ["Director", "Manager"], category: "business", difficulty: "medium" },
    { french: "Président", english: ["President", "CEO"], category: "business", difficulty: "medium" },
    { french: "Vice-président", english: ["Vice president"], category: "business", difficulty: "hard" },
    { french: "Secrétaire", english: ["Secretary"], category: "business", difficulty: "medium" },
    { french: "Comptable", english: ["Accountant"], category: "business", difficulty: "medium" },
    { french: "Ingénieur", english: ["Engineer"], category: "business", difficulty: "medium" },
    { french: "Architecte", english: ["Architect"], category: "business", difficulty: "medium" },
    { french: "Développeur", english: ["Developer"], category: "business", difficulty: "hard" },
    { french: "Programmeur", english: ["Programmer"], category: "business", difficulty: "hard" },
    { french: "Chercheur", english: ["Researcher"], category: "business", difficulty: "medium" },
    { french: "Consultant", english: ["Consultant"], category: "business", difficulty: "medium" },
    { french: "Vente", english: ["Sales", "Sale"], category: "business", difficulty: "easy" },
    { french: "Vendeur", english: ["Salesman", "Seller"], category: "business", difficulty: "easy" },
    { french: "Achat", english: ["Purchase", "Buying"], category: "business", difficulty: "easy" },
    { french: "Acheteur", english: ["Buyer"], category: "business", difficulty: "medium" },
    { french: "Marchandise", english: ["Goods", "Merchandise"], category: "business", difficulty: "hard" },
    { french: "Produit", english: ["Product"], category: "business", difficulty: "medium" },
    { french: "Service", english: ["Service"], category: "business", difficulty: "easy" },
    { french: "Client", english: ["Customer", "Client"], category: "business", difficulty: "easy" },
    { french: "Fournisseur", english: ["Supplier"], category: "business", difficulty: "hard" },
    { french: "Prix", english: ["Price", "Cost"], category: "business", difficulty: "easy" },
    { french: "Facteur", english: ["Invoice", "Factor"], category: "business", difficulty: "medium" },
    { french: "Devis", english: ["Quote", "Estimate"], category: "business", difficulty: "easy" },
    { french: "Contrat", english: ["Contract"], category: "business", difficulty: "medium" },
    { french: "Accord", english: ["Agreement", "Deal"], category: "business", difficulty: "easy" },
    { french: "Négociation", english: ["Negotiation"], category: "business", difficulty: "hard" },
    { french: "Délai", english: ["Deadline", "Delay"], category: "business", difficulty: "easy" },
    { french: "Livraison", english: ["Delivery"], category: "business", difficulty: "medium" },
    { french: "Expédition", english: ["Shipment"], category: "business", difficulty: "medium" },
    { french: "Transport", english: ["Transport", "Transportation"], category: "business", difficulty: "medium" },
    { french: "Logistique", english: ["Logistics"], category: "business", difficulty: "hard" },
    { french: "Entrepôt", english: ["Warehouse"], category: "business", difficulty: "medium" },
    { french: "Stock", english: ["Stock", "Inventory"], category: "business", difficulty: "easy" },
    { french: "Bilan", english: ["Balance sheet"], category: "business", difficulty: "hard" },
    { french: "Budget", english: ["Budget"], category: "business", difficulty: "easy" },
    { french: "Revenu", english: ["Revenue", "Income"], category: "business", difficulty: "easy" },
    { french: "Dépense", english: ["Expense"], category: "business", difficulty: "medium" },
    { french: "Bénéfice", english: ["Profit"], category: "business", difficulty: "medium" },
    { french: "Perte", english: ["Loss"], category: "business", difficulty: "easy" },
    { french: "Investissement", english: ["Investment"], category: "business", difficulty: "hard" },
    { french: "Emprunt", english: ["Loan", "Borrowing"], category: "business", difficulty: "medium" },
    { french: "Prêt", english: ["Loan"], category: "business", difficulty: "easy" },
    { french: "Intérêt", english: ["Interest"], category: "business", difficulty: "medium" },
    { french: "Banque", english: ["Bank"], category: "business", difficulty: "easy" },
    { french: "Compte", english: ["Account"], category: "business", difficulty: "easy" },
    { french: "Paiement", english: ["Payment"], category: "business", difficulty: "medium" },
    { french: "Salaire", english: ["Salary", "Wage"], category: "business", difficulty: "easy" },
    { french: "Bonus", english: ["Bonus"], category: "business", difficulty: "easy" },
    { french: "Promotion", english: ["Promotion"], category: "business", difficulty: "medium" },
    { french: "Congé", english: ["Leave", "Time off"], category: "business", difficulty: "easy" },
    { french: "Vacances", english: ["Vacation", "Holiday"], category: "business", difficulty: "medium" },
    { french: "Démission", english: ["Resignation"], category: "business", difficulty: "hard" },
    { french: "Licenciement", english: ["Dismissal", "Layoff"], category: "business", difficulty: "hard" },
    { french: "Embauche", english: ["Hiring"], category: "business", difficulty: "medium" },
    { french: "Candidat", english: ["Candidate"], category: "business", difficulty: "medium" },
    { french: "CV", english: ["Resume", "CV"], category: "business", difficulty: "easy" },
    { french: "Entretien", english: ["Interview"], category: "business", difficulty: "medium" },
    { french: "Appel d'offres", english: ["Call for bids", "Tender"], category: "business", difficulty: "hard" },
    { french: "Marché", english: ["Market"], category: "business", difficulty: "easy" },
    { french: "Stratégie", english: ["Strategy"], category: "business", difficulty: "medium" },
    { french: "Objectif", english: ["Objective", "Goal"], category: "business", difficulty: "medium" },
    { french: "Plan", english: ["Plan"], category: "business", difficulty: "easy" },
    { french: "Exécution", english: ["Execution", "Implementation"], category: "business", difficulty: "hard" },
    { french: "Contrôle qualité", english: ["Quality control"], category: "business", difficulty: "hard" },
    { french: "Production", english: ["Production"], category: "business", difficulty: "medium" },
    { french: "Fabrication", english: ["Manufacturing"], category: "business", difficulty: "hard" },
    { french: "Amélioration", english: ["Improvement"], category: "business", difficulty: "hard" },
    { french: "Efficacité", english: ["Efficiency"], category: "business", difficulty: "hard" },
    { french: "Productivité", english: ["Productivity"], category: "business", difficulty: "hard" },
    { french: "Risque", english: ["Risk"], category: "business", difficulty: "easy" },
    { french: "Assurance", english: ["Insurance"], category: "business", difficulty: "medium" },
    { french: "Impôt", english: ["Tax"], category: "business", difficulty: "easy" },
    { french: "Douane", english: ["Customs"], category: "business", difficulty: "easy" },
    { french: "Conformité", english: ["Compliance"], category: "business", difficulty: "hard" },
    { french: "Légalement", english: ["Legally"], category: "business", difficulty: "medium" },
    { french: "Légal", english: ["Legal"], category: "business", difficulty: "easy" },
    { french: "Illégal", english: ["Illegal"], category: "business", difficulty: "medium" },
    { french: "Responsabilité", english: ["Responsibility"], category: "business", difficulty: "hard" },
    { french: "Compétence", english: ["Competence", "Skill"], category: "business", difficulty: "medium" },
    { french: "Formation", english: ["Training"], category: "business", difficulty: "medium" },
    { french: "Développement", english: ["Development"], category: "business", difficulty: "hard" },
    { french: "Innovation", english: ["Innovation"], category: "business", difficulty: "medium" },
    { french: "Technologie", english: ["Technology"], category: "business", difficulty: "hard" },
    { french: "Numérique", english: ["Digital"], category: "business", difficulty: "medium" },
    { french: "Informatique", english: ["IT", "Computing"], category: "business", difficulty: "hard" },
    { french: "Logiciel", english: ["Software"], category: "business", difficulty: "medium" },
    { french: "Matériel", english: ["Hardware"], category: "business", difficulty: "medium" },
    { french: "Réseau", english: ["Network"], category: "business", difficulty: "easy" },
    { french: "Serveur", english: ["Server"], category: "business", difficulty: "medium" },
    { french: "Base de données", english: ["Database"], category: "business", difficulty: "hard" },
    { french: "Cyber-sécurité", english: ["Cybersecurity"], category: "business", difficulty: "hard" },
    { french: "Communication", english: ["Communication"], category: "business", difficulty: "hard" },
    { french: "Rapport", english: ["Report"], category: "business", difficulty: "easy" },
    { french: "Documentation", english: ["Documentation"], category: "business", difficulty: "hard" },
    { french: "Archivage", english: ["Archival", "Filing"], category: "business", difficulty: "medium" },
    { french: "Mémorandum", english: ["Memo"], category: "business", difficulty: "medium" },
    { french: "Email", english: ["Email"], category: "business", difficulty: "easy" },
    { french: "Présentation", english: ["Presentation"], category: "business", difficulty: "hard" },
    { french: "Affiche", english: ["Poster"], category: "business", difficulty: "easy" },
    { french: "Brochure", english: ["Brochure"], category: "business", difficulty: "medium" },
    { french: "Marketing", english: ["Marketing"], category: "business", difficulty: "medium" },
    { french: "Publicité", english: ["Advertising"], category: "business", difficulty: "hard" },
    { french: "Marque", english: ["Brand"], category: "business", difficulty: "easy" },
    { french: "Logo", english: ["Logo"], category: "business", difficulty: "easy" },
    { french: "Clientèle", english: ["Customer base"], category: "business", difficulty: "hard" },
    { french: "Fidélité", english: ["Loyalty"], category: "business", difficulty: "medium" },
    { french: "Partenariat", english: ["Partnership"], category: "business", difficulty: "hard" },
    
    // Finance & Accounting
    { french: "Facture", english: ["Invoice", "Bill"], category: "business", difficulty: "medium" },
    { french: "Reçu", english: ["Receipt"], category: "business", difficulty: "easy" },
    { french: "Comptabilité", english: ["Accounting"], category: "business", difficulty: "hard" },
    { french: "Grand livre", english: ["Ledger"], category: "business", difficulty: "hard" },
    { french: "Bilan comptable", english: ["Balance sheet"], category: "business", difficulty: "hard" },
    { french: "Flux de trésorerie", english: ["Cash flow"], category: "business", difficulty: "hard" },
    { french: "Actifs", english: ["Assets"], category: "business", difficulty: "hard" },
    { french: "Passifs", english: ["Liabilities"], category: "business", difficulty: "hard" },
    { french: "Capitaux propres", english: ["Equity"], category: "business", difficulty: "hard" },
    { french: "Dividende", english: ["Dividend"], category: "business", difficulty: "hard" },
    { french: "Audit", english: ["Audit"], category: "business", difficulty: "medium" },
    { french: "Exercice fiscal", english: ["Fiscal year"], category: "business", difficulty: "hard" },
    { french: "Crédit", english: ["Credit"], category: "business", difficulty: "easy" },
    { french: "Débit", english: ["Debit"], category: "business", difficulty: "medium" },
    { french: "Chiffre d'affaires", english: ["Turnover", "Revenue"], category: "business", difficulty: "medium" },
    { french: "Marge bénéficiaire", english: ["Profit margin"], category: "business", difficulty: "hard" },
    { french: "Coût", english: ["Cost"], category: "business", difficulty: "easy" },
    { french: "Frais généraux", english: ["Overhead costs"], category: "business", difficulty: "hard" },
    { french: "Amortissement", english: ["Depreciation"], category: "business", difficulty: "hard" },
    { french: "Taux d'intérêt", english: ["Interest rate"], category: "business", difficulty: "medium" },
    
    // Sales & Marketing
    { french: "Commande", english: ["Order"], category: "business", difficulty: "easy" },
    { french: "Remise", english: ["Discount"], category: "business", difficulty: "medium" },
    { french: "Offre spéciale", english: ["Special offer", "Promotion"], category: "business", difficulty: "medium" },
    { french: "Campagne", english: ["Campaign"], category: "business", difficulty: "medium" },
    { french: "Public cible", english: ["Target audience"], category: "business", difficulty: "hard" },
    { french: "Prospect", english: ["Lead", "Prospect"], category: "business", difficulty: "hard" },
    { french: "Concurrent", english: ["Competitor"], category: "business", difficulty: "medium" },
    { french: "Concurrence", english: ["Competition"], category: "business", difficulty: "medium" },
    { french: "Part de marché", english: ["Market share"], category: "business", difficulty: "hard" },
    { french: "Annonce", english: ["Advertisement", "Ad"], category: "business", difficulty: "easy" },
    { french: "Slogan", english: ["Slogan", "Tagline"], category: "business", difficulty: "easy" },
    { french: "Vente au détail", english: ["Retail"], category: "business", difficulty: "medium" },
    { french: "Vente en gros", english: ["Wholesale"], category: "business", difficulty: "hard" },
    { french: "Point de vente", english: ["Point of sale", "Sales outlet"], category: "business", difficulty: "medium" },
    { french: "Catalogue", english: ["Catalog"], category: "business", difficulty: "easy" },
    { french: "Échantillon", english: ["Sample"], category: "business", difficulty: "easy" },
    { french: "Démonstration", english: ["Demonstration", "Demo"], category: "business", difficulty: "medium" },
    { french: "Retour sur investissement", english: ["Return on investment", "ROI"], category: "business", difficulty: "hard" },
    
    // HR & Management
    { french: "Recrutement", english: ["Recruitment", "Hiring"], category: "business", difficulty: "medium" },
    { french: "Recruter", english: ["Recruit", "Hire"], category: "business", difficulty: "medium" },
    { french: "Licencier", english: ["Fire", "Dismiss"], category: "business", difficulty: "medium" },
    { french: "Avantages sociaux", english: ["Benefits", "Employee benefits"], category: "business", difficulty: "hard" },
    { french: "Évaluation de performance", english: ["Performance review", "Performance evaluation"], category: "business", difficulty: "hard" },
    { french: "Augmentation", english: ["Raise", "Pay increase"], category: "business", difficulty: "easy" },
    { french: "Rémunération", english: ["Compensation", "Remuneration"], category: "business", difficulty: "hard" },
    { french: "Démissionner", english: ["Resign", "Quit"], category: "business", difficulty: "medium" },
    { french: "Congé maladie", english: ["Sick leave"], category: "business", difficulty: "medium" },
    { french: "Congé de maternité", english: ["Maternity leave"], category: "business", difficulty: "medium" },
    { french: "Contrat de travail", english: ["Employment contract"], category: "business", difficulty: "medium" },
    { french: "Période d'essai", english: ["Probation period", "Trial period"], category: "business", difficulty: "hard" },
    { french: "Retraite", english: ["Retirement"], category: "business", difficulty: "easy" },
    { french: "Cadre", english: ["Executive", "Manager"], category: "business", difficulty: "medium" },
    { french: "Stagiaire", english: ["Intern", "Trainee"], category: "business", difficulty: "easy" },
    { french: "Apprenti", english: ["Apprentice"], category: "business", difficulty: "medium" },
    { french: "Temps plein", english: ["Full-time"], category: "business", difficulty: "easy" },
    { french: "Temps partiel", english: ["Part-time"], category: "business", difficulty: "easy" },
    { french: "Heures supplémentaires", english: ["Overtime"], category: "business", difficulty: "medium" },
    
    // Operations & Organization
    { french: "Société", english: ["Company", "Corporation"], category: "business", difficulty: "easy" },
    { french: "Firme", english: ["Firm"], category: "business", difficulty: "medium" },
    { french: "Organisation", english: ["Organization"], category: "business", difficulty: "medium" },
    { french: "Département", english: ["Department"], category: "business", difficulty: "easy" },
    { french: "Succursale", english: ["Branch"], category: "business", difficulty: "medium" },
    { french: "Siège social", english: ["Headquarters"], category: "business", difficulty: "medium" },
    { french: "Filiale", english: ["Subsidiary"], category: "business", difficulty: "hard" },
    { french: "Usine", english: ["Factory", "Plant"], category: "business", difficulty: "easy" },
    { french: "Chaîne d'approvisionnement", english: ["Supply chain"], category: "business", difficulty: "hard" },
    { french: "Distributeur", english: ["Distributor"], category: "business", difficulty: "medium" },
    { french: "Détaillant", english: ["Retailer"], category: "business", difficulty: "medium" },
    { french: "Grossiste", english: ["Wholesaler"], category: "business", difficulty: "hard" },
    { french: "Procédure", english: ["Procedure", "Process"], category: "business", difficulty: "medium" },
    { french: "Politique", english: ["Policy"], category: "business", difficulty: "medium" },
    { french: "Directive", english: ["Directive", "Guideline"], category: "business", difficulty: "medium" },
    
    // Legal & Compliance
    { french: "Règlement", english: ["Regulation"], category: "business", difficulty: "medium" },
    { french: "Permis", english: ["Permit", "License"], category: "business", difficulty: "easy" },
    { french: "Licence", english: ["License"], category: "business", difficulty: "medium" },
    { french: "Clause", english: ["Clause"], category: "business", difficulty: "hard" },
    { french: "Conditions générales", english: ["Terms and conditions"], category: "business", difficulty: "medium" },
    { french: "Responsabilité civile", english: ["Liability"], category: "business", difficulty: "hard" },
    { french: "Procès", english: ["Lawsuit", "Trial"], category: "business", difficulty: "medium" },
    { french: "Avocat", english: ["Lawyer", "Attorney"], category: "business", difficulty: "easy" },
    { french: "Droit d'auteur", english: ["Copyright"], category: "business", difficulty: "medium" },
    { french: "Marque déposée", english: ["Trademark"], category: "business", difficulty: "hard" },
    { french: "Brevet", english: ["Patent"], category: "business", difficulty: "hard" },
    { french: "Propriété intellectuelle", english: ["Intellectual property"], category: "business", difficulty: "hard" },
    { french: "Confidentialité", english: ["Confidentiality"], category: "business", difficulty: "medium" },
    { french: "Accord de non-divulgation", english: ["Non-disclosure agreement", "NDA"], category: "business", difficulty: "hard" },
    
    // Strategy & Growth
    { french: "Expansion", english: ["Expansion"], category: "business", difficulty: "medium" },
    { french: "Croissance", english: ["Growth"], category: "business", difficulty: "medium" },
    { french: "Fusion", english: ["Merger"], category: "business", difficulty: "hard" },
    { french: "Acquisition", english: ["Acquisition"], category: "business", difficulty: "hard" },
    { french: "Coentreprise", english: ["Joint venture"], category: "business", difficulty: "hard" },
    { french: "Avantage concurrentiel", english: ["Competitive advantage"], category: "business", difficulty: "hard" },
    { french: "Analyse de marché", english: ["Market analysis"], category: "business", difficulty: "hard" },
    { french: "Étude de marché", english: ["Market research"], category: "business", difficulty: "medium" },
    { french: "Lancement", english: ["Launch"], category: "business", difficulty: "easy" },
    { french: "Restructuration", english: ["Restructuring"], category: "business", difficulty: "hard" },
    { french: "Diversification", english: ["Diversification"], category: "business", difficulty: "hard" },
    { french: "Rationalisation", english: ["Streamlining"], category: "business", difficulty: "hard" },

    // Mining & Engineering
    { french: "Charbon", english: ["Coal"], category: "mining", difficulty: "easy" },
    { french: "Mine", english: ["Mine"], category: "mining", difficulty: "easy" },
    { french: "Extracteur", english: ["Extraction", "Extractor"], category: "mining", difficulty: "hard" },
    { french: "Mineur", english: ["Miner"], category: "mining", difficulty: "easy" },
    { french: "Exploitation minière", english: ["Mining", "Mine operation"], category: "mining", difficulty: "hard" },
    { french: "Minerai", english: ["Ore"], category: "mining", difficulty: "medium" },
    { french: "Cuivre", english: ["Copper"], category: "mining", difficulty: "easy" },
    { french: "Or", english: ["Gold"], category: "mining", difficulty: "easy" },
    { french: "Argent", english: ["Silver"], category: "mining", difficulty: "easy" },
    { french: "Fer", english: ["Iron"], category: "mining", difficulty: "easy" },
    { french: "Étain", english: ["Tin"], category: "mining", difficulty: "easy" },
    { french: "Zinc", english: ["Zinc"], category: "mining", difficulty: "easy" },
    { french: "Plomb", english: ["Lead"], category: "mining", difficulty: "easy" },
    { french: "Aluminium", english: ["Aluminum"], category: "mining", difficulty: "medium" },
    { french: "Nickel", english: ["Nickel"], category: "mining", difficulty: "easy" },
    { french: "Cobalt", english: ["Cobalt"], category: "mining", difficulty: "easy" },
    { french: "Lithium", english: ["Lithium"], category: "mining", difficulty: "medium" },
    { french: "Diamant", english: ["Diamond"], category: "mining", difficulty: "medium" },
    { french: "Gemme", english: ["Gemstone"], category: "mining", difficulty: "easy" },
    { french: "Pierre", english: ["Stone"], category: "mining", difficulty: "easy" },
    { french: "Roche", english: ["Rock"], category: "mining" },
    { french: "Granit", english: ["Granite"], category: "mining" },
    { french: "Calcaire", english: ["Limestone"], category: "mining" },
    { french: "Marbre", english: ["Marble"], category: "mining" },
    { french: "Gisement", english: ["Deposit", "Seam"], category: "mining" },
    { french: "Veine", english: ["Vein"], category: "mining" },
    { french: "Filon", english: ["Lode", "Vein"], category: "mining" },
    { french: "Cavité", english: ["Cavity"], category: "mining" },
    { french: "Galerie", english: ["Gallery", "Tunnel"], category: "mining" },
    { french: "Puits", english: ["Shaft", "Well"], category: "mining" },
    { french: "Forage", english: ["Drilling", "Borehole"], category: "mining" },
    { french: "Excavation", english: ["Excavation"], category: "mining" },
    { french: "Démolition", english: ["Demolition", "Blasting"], category: "mining" },
    { french: "Dynamite", english: ["Dynamite"], category: "mining" },
    { french: "Explosif", english: ["Explosive"], category: "mining" },
    { french: "Détonateur", english: ["Detonator"], category: "mining" },
    { french: "Sécurité", english: ["Safety"], category: "mining" },
    { french: "Sécurité du travail", english: ["Occupational safety", "Workplace safety"], category: "mining" },
    { french: "Équipement de protection", english: ["Protective equipment", "PPE"], category: "mining" },
    { french: "Casque", english: ["Helmet"], category: "mining" },
    { french: "Gilet de sécurité", english: ["Safety vest"], category: "mining" },
    { french: "Gants", english: ["Gloves"], category: "mining" },
    { french: "Bottes", english: ["Boots"], category: "mining" },
    { french: "Masque", english: ["Mask"], category: "mining" },
    { french: "Lunettes", english: ["Glasses", "Goggles"], category: "mining" },
    { french: "Bouchons d'oreille", english: ["Earplugs"], category: "mining" },
    { french: "Harnais", english: ["Harness"], category: "mining" },
    { french: "Corde", english: ["Rope", "Cable"], category: "mining" },
    { french: "Chaîne", english: ["Chain"], category: "mining" },
    { french: "Véhicule", english: ["Vehicle"], category: "mining" },
    { french: "Camion", english: ["Truck"], category: "mining" },
    { french: "Excavatrices", english: ["Excavator", "Digger"], category: "mining" },
    { french: "Chargeuse", english: ["Loader"], category: "mining" },
    { french: "Bulldozer", english: ["Bulldozer"], category: "mining" },
    { french: "Pelleteuse", english: ["Shovel", "Excavator"], category: "mining" },
    { french: "Perceuse", english: ["Drill"], category: "mining" },
    { french: "Compresseur", english: ["Compressor"], category: "mining" },
    { french: "Pompe", english: ["Pump"], category: "mining" },
    { french: "Ventilateur", english: ["Fan", "Blower"], category: "mining" },
    { french: "Tuyau", english: ["Pipe", "Hose"], category: "mining" },
    { french: "Convoyeur", english: ["Conveyor"], category: "mining" },
    { french: "Broyeur", english: ["Crusher"], category: "mining" },
    { french: "Criblage", english: ["Screening", "Sieving"], category: "mining" },
    { french: "Crible", english: ["Screen", "Sieve"], category: "mining" },
    { french: "Flottation", english: ["Flotation"], category: "mining" },
    { french: "Lixiviation", english: ["Leaching"], category: "mining" },
    { french: "Traitement", english: ["Treatment", "Processing"], category: "mining" },
    { french: "Concentration", english: ["Concentration"], category: "mining" },
    { french: "Fusion", english: ["Smelting"], category: "mining" },
    { french: "Raffinage", english: ["Refining"], category: "mining" },
    { french: "Fonderie", english: ["Foundry", "Smelting plant"], category: "mining" },
    { french: "Lingot", english: ["Ingot"], category: "mining" },
    { french: "Lingotière", english: ["Ingot mold"], category: "mining" },
    { french: "Moule", english: ["Mold"], category: "mining" },
    { french: "Coulée", english: ["Casting"], category: "mining" },
    { french: "Laitier", english: ["Slag"], category: "mining" },
    { french: "Résidu", english: ["Waste", "Residue"], category: "mining" },
    { french: "Stériles", english: ["Waste rock"], category: "mining" },
    { french: "Parc à résidus", english: ["Tailings pond"], category: "mining" },
    { french: "Environnement", english: ["Environment"], category: "mining" },
    { french: "Environnemental", english: ["Environmental"], category: "mining" },
    { french: "Pollution", english: ["Pollution"], category: "mining" },
    { french: "Écologie", english: ["Ecology"], category: "mining" },
    { french: "Écologique", english: ["Ecological", "Environmental"], category: "mining" },
    { french: "Durabilité", english: ["Sustainability"], category: "mining" },
    { french: "Durable", english: ["Sustainable"], category: "mining" },
    { french: "Recyclage", english: ["Recycling"], category: "mining" },
    { french: "Réutilisation", english: ["Reuse"], category: "mining" },
    { french: "Rendement", english: ["Efficiency", "Yield"], category: "mining" },
    { french: "Production minière", english: ["Mine production"], category: "mining" },
    { french: "Productivité", english: ["Productivity"], category: "mining" },
    { french: "Coût", english: ["Cost"], category: "mining" },
    { french: "Profit", english: ["Profit"], category: "mining" },
    { french: "Rentabilité", english: ["Profitability"], category: "mining" },
    { french: "Génie minier", english: ["Mining engineering"], category: "mining" },
    { french: "Génie civil", english: ["Civil engineering"], category: "mining" },
    { french: "Ingénieur minier", english: ["Mining engineer"], category: "mining" },
    { french: "Géologue", english: ["Geologist"], category: "mining" },
    { french: "Géologie", english: ["Geology"], category: "mining" },
    { french: "Géochimie", english: ["Geochemistry"], category: "mining" },
    { french: "Minéralogie", english: ["Mineralogy"], category: "mining" },
    { french: "Minéral", english: ["Mineral"], category: "mining" },
    { french: "Sondage", english: ["Survey", "Drilling"], category: "mining" },
    { french: "Cartographie", english: ["Mapping"], category: "mining" },
    { french: "Levé géophysique", english: ["Geophysical survey"], category: "mining" },
    { french: "Sismique", english: ["Seismic"], category: "mining" },
    { french: "Magnétique", english: ["Magnetic"], category: "mining" },
    { french: "Gravimétrique", english: ["Gravimetric"], category: "mining" },
    { french: "Ressources", english: ["Resources"], category: "mining" },
    { french: "Réserves", english: ["Reserves"], category: "mining" },
    { french: "Teneur", english: ["Grade"], category: "mining" },
    { french: "Tonnage", english: ["Tonnage"], category: "mining" },
    { french: "Faisabilité", english: ["Feasibility"], category: "mining" },
    { french: "Étude de faisabilité", english: ["Feasibility study"], category: "mining" },
    { french: "Investissement", english: ["Investment"], category: "mining" },
    { french: "Capital", english: ["Capital"], category: "mining" },
    { french: "Financement", english: ["Financing"], category: "mining" },
    { french: "Permis", english: ["Permit"], category: "mining" },
    { french: "Licence", english: ["License"], category: "mining" },
    { french: "Concession", english: ["Concession"], category: "mining" },
    { french: "Droit minier", english: ["Mining rights"], category: "mining" },
    { french: "Royalties", english: ["Royalties"], category: "mining" },
    { french: "Impôt minier", english: ["Mining tax"], category: "mining" },
    { french: "Communauté", english: ["Community"], category: "mining" },
    { french: "Stakeholder", english: ["Stakeholder"], category: "mining" },
    { french: "Consultation", english: ["Consultation"], category: "mining" },
    { french: "Accord communautaire", english: ["Community agreement"], category: "mining" },

    // Mining Operations - Essential Terms
    { french: "Mine souterraine", english: ["Underground mining"], category: "mining", difficulty: "medium" },
    { french: "Mine à ciel ouvert", english: ["Open-pit mining"], category: "mining", difficulty: "medium" },
    { french: "Mine de surface", english: ["Surface mining"], category: "mining", difficulty: "medium" },
    { french: "Carrière", english: ["Quarry"], category: "mining", difficulty: "easy" },
    { french: "Extraction", english: ["Extraction"], category: "mining", difficulty: "easy" },
    { french: "Creusement", english: ["Digging"], category: "mining", difficulty: "easy" },
    { french: "Minage", english: ["Blasting"], category: "mining", difficulty: "medium" },
    { french: "Forage", english: ["Drilling"], category: "mining", difficulty: "medium" },
    { french: "Tunnelier", english: ["Tunneling"], category: "mining", difficulty: "hard" },
    { french: "Puits de mine", english: ["Mine shaft"], category: "mining", difficulty: "medium" },
    { french: "Fosse", english: ["Pit"], category: "mining", difficulty: "easy" },
    { french: "Couche", english: ["Seam"], category: "mining", difficulty: "medium" },
    { french: "Corps minéralisé", english: ["Ore body"], category: "mining", difficulty: "hard" },
    { french: "Gisement minier", english: ["Mineral deposit"], category: "mining", difficulty: "medium" },

    // Materials & Geology
    { french: "Minerai de fer", english: ["Iron ore"], category: "mining", difficulty: "easy" },
    { french: "Bauxite", english: ["Bauxite"], category: "mining", difficulty: "medium" },
    { french: "Métaux précieux", english: ["Precious metals"], category: "mining", difficulty: "medium" },
    { french: "Métaux de base", english: ["Base metals"], category: "mining", difficulty: "medium" },
    { french: "Mort-terrain", english: ["Overburden"], category: "mining", difficulty: "hard" },
    { french: "Résidus miniers", english: ["Tailings"], category: "mining", difficulty: "hard" },
    { french: "Roche stérile", english: ["Waste rock"], category: "mining", difficulty: "medium" },
    { french: "Gangue", english: ["Gangue"], category: "mining", difficulty: "hard" },
    { french: "Teneur en minerai", english: ["Ore grade"], category: "mining", difficulty: "hard" },
    { french: "Concentration minérale", english: ["Mineral concentration"], category: "mining", difficulty: "hard" },

    // Equipment & Machinery
    { french: "Excavateur", english: ["Excavator"], category: "mining", difficulty: "easy" },
    { french: "Foreuse", english: ["Drill rig"], category: "mining", difficulty: "medium" },
    { french: "Camion benne", english: ["Dump truck"], category: "mining", difficulty: "easy" },
    { french: "Chargeuse sur pneus", english: ["Wheel loader"], category: "mining", difficulty: "medium" },
    { french: "Bouteur", english: ["Bulldozer"], category: "mining", difficulty: "easy" },
    { french: "Concasseur", english: ["Crusher"], category: "mining", difficulty: "medium" },
    { french: "Bande transporteuse", english: ["Conveyor belt"], category: "mining", difficulty: "medium" },
    { french: "Treuil", english: ["Hoist", "Winch"], category: "mining", difficulty: "medium" },
    { french: "Marteau piqueur", english: ["Jackhammer"], category: "mining", difficulty: "medium" },
    { french: "Broyeur à boulets", english: ["Grinding mill"], category: "mining", difficulty: "hard" },
    { french: "Machine de forage", english: ["Drilling machine"], category: "mining", difficulty: "medium" },
    { french: "Pelle mécanique", english: ["Power shovel"], category: "mining", difficulty: "medium" },

    // Safety & Environment
    { french: "Casque de sécurité", english: ["Hard hat"], category: "mining", difficulty: "easy" },
    { french: "Lunettes de protection", english: ["Safety goggles"], category: "mining", difficulty: "medium" },
    { french: "Respirateur", english: ["Respirator"], category: "mining", difficulty: "medium" },
    { french: "Masque à gaz", english: ["Gas mask"], category: "mining", difficulty: "medium" },
    { french: "Ventilation minière", english: ["Mine ventilation"], category: "mining", difficulty: "medium" },
    { french: "Méthane", english: ["Methane"], category: "mining", difficulty: "medium" },
    { french: "Monoxyde de carbone", english: ["Carbon monoxide"], category: "mining", difficulty: "hard" },
    { french: "Contrôle des poussières", english: ["Dust control"], category: "mining", difficulty: "medium" },
    { french: "Traitement des eaux", english: ["Water treatment"], category: "mining", difficulty: "medium" },
    { french: "Impact environnemental", english: ["Environmental impact"], category: "mining", difficulty: "medium" },
    { french: "Réhabilitation", english: ["Reclamation", "Rehabilitation"], category: "mining", difficulty: "hard" },
    { french: "Contamination", english: ["Contamination"], category: "mining", difficulty: "medium" },
    { french: "Drainage acide", english: ["Acid drainage"], category: "mining", difficulty: "hard" },
    { french: "Gaz toxiques", english: ["Toxic gases"], category: "mining", difficulty: "medium" },

    // Processes
    { french: "Concassage", english: ["Crushing"], category: "mining", difficulty: "medium" },
    { french: "Broyage", english: ["Grinding"], category: "mining", difficulty: "medium" },
    { french: "Mouture", english: ["Milling"], category: "mining", difficulty: "hard" },
    { french: "Criblage minier", english: ["Screening"], category: "mining", difficulty: "medium" },
    { french: "Séparation", english: ["Separating", "Separation"], category: "mining", difficulty: "easy" },
    { french: "Flottation minérale", english: ["Mineral flotation"], category: "mining", difficulty: "hard" },
    { french: "Lixiviation chimique", english: ["Chemical leaching"], category: "mining", difficulty: "hard" },
    { french: "Fusion métallurgique", english: ["Metallurgical smelting"], category: "mining", difficulty: "hard" },
    { french: "Raffinage des métaux", english: ["Metal refining"], category: "mining", difficulty: "hard" },
    { french: "Usine de traitement", english: ["Processing plant"], category: "mining", difficulty: "medium" },
    { french: "Récupération minérale", english: ["Mineral recovery"], category: "mining", difficulty: "hard" },
    { french: "Rendement d'extraction", english: ["Extraction yield"], category: "mining", difficulty: "hard" },
    { french: "Métallurgie", english: ["Metallurgy"], category: "mining", difficulty: "hard" },
    { french: "Concentration du minerai", english: ["Ore concentration"], category: "mining", difficulty: "hard" },

    // Management & Operations
    { french: "Plan minier", english: ["Mine plan"], category: "mining", difficulty: "medium" },
    { french: "Étude de préfaisabilité", english: ["Pre-feasibility study"], category: "mining", difficulty: "hard" },
    { french: "Exploration minière", english: ["Mining exploration"], category: "mining", difficulty: "medium" },
    { french: "Levé géologique", english: ["Geological survey"], category: "mining", difficulty: "medium" },
    { french: "Ingénieur des mines", english: ["Mining engineer"], category: "mining", difficulty: "medium" },
    { french: "Contremaître", english: ["Foreman"], category: "mining", difficulty: "medium" },
    { french: "Équipe minière", english: ["Mining crew"], category: "mining", difficulty: "easy" },
    { french: "Poste de travail", english: ["Work shift"], category: "mining", difficulty: "easy" },
    { french: "Objectif de production", english: ["Production target"], category: "mining", difficulty: "medium" },
    { french: "Tonnage journalier", english: ["Daily tonnage"], category: "mining", difficulty: "medium" },
    { french: "Rendement de production", english: ["Production output"], category: "mining", difficulty: "medium" },
    { french: "Exploitation à ciel ouvert", english: ["Open-cast mining"], category: "mining", difficulty: "hard" },
    { french: "Carrière de pierre", english: ["Stone quarry"], category: "mining", difficulty: "medium" },

    // Additional Technical Terms
    { french: "Minerai brut", english: ["Raw ore"], category: "mining", difficulty: "medium" },
    { french: "Minerai enrichi", english: ["Enriched ore"], category: "mining", difficulty: "hard" },
    { french: "Teneur de coupure", english: ["Cut-off grade"], category: "mining", difficulty: "hard" },
    { french: "Réserves prouvées", english: ["Proven reserves"], category: "mining", difficulty: "hard" },
    { french: "Réserves probables", english: ["Probable reserves"], category: "mining", difficulty: "hard" },
    { french: "Soutènement", english: ["Ground support"], category: "mining", difficulty: "hard" },
    { french: "Abattage", english: ["Extraction", "Mining"], category: "mining", difficulty: "medium" },
    { french: "Remblayage", english: ["Backfilling"], category: "mining", difficulty: "hard" },
    { french: "Galerie d'accès", english: ["Access tunnel"], category: "mining", difficulty: "medium" },
    { french: "Cheminée d'aérage", english: ["Ventilation shaft"], category: "mining", difficulty: "hard" },
    { french: "Boulonnage", english: ["Rock bolting"], category: "mining", difficulty: "hard" },
    { french: "Foration", english: ["Rock drilling"], category: "mining", difficulty: "medium" },
    { french: "Tir de mines", english: ["Blasting operation"], category: "mining", difficulty: "medium" },
    { french: "Charge explosive", english: ["Explosive charge"], category: "mining", difficulty: "medium" },
    { french: "Amorce", english: ["Primer", "Detonator"], category: "mining", difficulty: "hard" },

    // General English - Common expressions
    { french: "Pourquoi", english: ["Why"], category: "general" },
    { french: "Parce que", english: ["Because"], category: "general" },
    { french: "Quand", english: ["When"], category: "general" },
    { french: "Où", english: ["Where"], category: "general" },
    { french: "Qui", english: ["Who"], category: "general" },
    { french: "Quoi", english: ["What"], category: "general" },
    { french: "Comment", english: ["How"], category: "general" },
    { french: "Combien", english: ["How much", "How many"], category: "general" },
    { french: "Quel", english: ["Which", "What"], category: "general" },
    { french: "À", english: ["At", "To"], category: "general" },
    { french: "De", english: ["Of", "From"], category: "general" },
    { french: "Avec", english: ["With"], category: "general" },
    { french: "Sans", english: ["Without"], category: "general" },
    { french: "Pour", english: ["For"], category: "general" },
    { french: "Contre", english: ["Against"], category: "general" },
    { french: "Entre", english: ["Between", "Among"], category: "general" },
    { french: "Avant", english: ["Before"], category: "general" },
    { french: "Après", english: ["After"], category: "general" },
    { french: "Pendant", english: ["During"], category: "general" },
    { french: "Depuis", english: ["Since"], category: "general" },
    { french: "Jusque", english: ["Until"], category: "general" },
    { french: "Vers", english: ["Towards", "Around"], category: "general" },
    { french: "À travers", english: ["Through"], category: "general" },
    { french: "Sous", english: ["Under"], category: "general" },
    { french: "Sur", english: ["On", "Above"], category: "general" },
    { french: "Près de", english: ["Near", "Close to"], category: "general" },
    { french: "Loin de", english: ["Far from"], category: "general" },
    { french: "Et", english: ["And"], category: "general" },
    { french: "Ou", english: ["Or"], category: "general" },
    { french: "Mais", english: ["But"], category: "general" },
    { french: "Cependant", english: ["However"], category: "general" },
    { french: "Bien que", english: ["Although", "Though"], category: "general" },
    { french: "Ainsi que", english: ["As well as"], category: "general" },
    { french: "Donc", english: ["So", "Therefore"], category: "general" },
    { french: "Puis", english: ["Then"], category: "general" },
    { french: "Enfin", english: ["Finally"], category: "general" },
    { french: "D'abord", english: ["First"], category: "general" },
    { french: "Encore", english: ["Again", "Still"], category: "general" },
    { french: "Déjà", english: ["Already"], category: "general" },
    { french: "Seulement", english: ["Only"], category: "general" },
    { french: "Aussi", english: ["Also", "Too"], category: "general" },
    { french: "Très", english: ["Very"], category: "general" },
    { french: "Peu", english: ["Little"], category: "general" },
    { french: "Beaucoup", english: ["A lot", "Much"], category: "general" },
    { french: "Assez", english: ["Enough"], category: "general" },
    { french: "Trop", english: ["Too much"], category: "general" },

    // Technology & IT
    { french: "Ordinateur", english: ["Computer"], category: "tech" },
    { french: "Écran", english: ["Screen", "Monitor"], category: "tech" },
    { french: "Clavier", english: ["Keyboard"], category: "tech" },
    { french: "Souris", english: ["Mouse"], category: "tech" },
    { french: "Imprimante", english: ["Printer"], category: "tech" },
    { french: "Scanner", english: ["Scanner"], category: "tech" },
    { french: "Caméra", english: ["Camera"], category: "tech" },
    { french: "Microphone", english: ["Microphone"], category: "tech" },
    { french: "Haut-parleur", english: ["Speaker"], category: "tech" },
    { french: "Batterie", english: ["Battery"], category: "tech" },
    { french: "Chargeur", english: ["Charger"], category: "tech" },
    { french: "Câble", english: ["Cable"], category: "tech" },
    { french: "Adaptateur", english: ["Adapter"], category: "tech" },
    { french: "Connecteur", english: ["Connector"], category: "tech" },
    { french: "Port", english: ["Port"], category: "tech" },
    { french: "USB", english: ["USB"], category: "tech" },
    { french: "WiFi", english: ["WiFi"], category: "tech" },
    { french: "Bluetooth", english: ["Bluetooth"], category: "tech" },
    { french: "Internet", english: ["Internet"], category: "tech" },
    { french: "Navigateur Web", english: ["Web browser"], category: "tech" },
    { french: "Site Web", english: ["Website"], category: "tech" },
    { french: "Application", english: ["Application", "App"], category: "tech" },
    { french: "Télécharger", english: ["Download"], category: "tech" },
    { french: "Envoyer", english: ["Upload", "Send"], category: "tech" },
    { french: "Installer", english: ["Install"], category: "tech" },
    { french: "Désinstaller", english: ["Uninstall"], category: "tech" },
    { french: "Mettre à jour", english: ["Update"], category: "tech" },
    { french: "Mot de passe", english: ["Password"], category: "tech" },
    { french: "Utilisateur", english: ["User"], category: "tech" },
    { french: "Compte", english: ["Account"], category: "tech" },
    { french: "Connexion", english: ["Login"], category: "tech" },
    { french: "Déconnexion", english: ["Logout"], category: "tech" },
    { french: "Fichier", english: ["File"], category: "tech" },
    { french: "Dossier", english: ["Folder"], category: "tech" },
    { french: "Copier", english: ["Copy"], category: "tech" },
    { french: "Coller", english: ["Paste"], category: "tech" },
    { french: "Couper", english: ["Cut"], category: "tech" },
    { french: "Supprimer", english: ["Delete"], category: "tech" },
    { french: "Sauvegarder", english: ["Save"], category: "tech" },
    { french: "Exporter", english: ["Export"], category: "tech" },
    { french: "Importer", english: ["Import"], category: "tech" },
    { french: "Partager", english: ["Share"], category: "tech" },
    { french: "Lien", english: ["Link"], category: "tech" },
    { french: "Téléphone mobile", english: ["Mobile phone", "Smartphone"], category: "tech" },
    { french: "Tablette", english: ["Tablet"], category: "tech" },
    { french: "Écran tactile", english: ["Touchscreen"], category: "tech" },
    { french: "Capteur", english: ["Sensor"], category: "tech" },

    // Hardware
    { french: "Ordinateur portable", english: ["Laptop", "Notebook"], category: "tech", difficulty: "easy" },
    { french: "Ordinateur de bureau", english: ["Desktop computer"], category: "tech", difficulty: "easy" },
    { french: "Serveur", english: ["Server"], category: "tech", difficulty: "medium" },
    { french: "Processeur", english: ["Processor", "CPU"], category: "tech", difficulty: "medium" },
    { french: "Mémoire vive", english: ["RAM", "Memory"], category: "tech", difficulty: "medium" },
    { french: "Disque dur", english: ["Hard drive", "Hard disk"], category: "tech", difficulty: "medium" },
    { french: "SSD", english: ["SSD", "Solid-state drive"], category: "tech", difficulty: "medium" },
    { french: "Carte mère", english: ["Motherboard"], category: "tech", difficulty: "hard" },
    { french: "Carte graphique", english: ["Graphics card", "GPU"], category: "tech", difficulty: "medium" },
    { french: "Moniteur", english: ["Monitor", "Display"], category: "tech", difficulty: "easy" },
    { french: "Écouteurs", english: ["Headphones", "Earphones"], category: "tech", difficulty: "easy" },
    { french: "Webcam", english: ["Webcam"], category: "tech", difficulty: "easy" },
    { french: "Disque externe", english: ["External drive"], category: "tech", difficulty: "medium" },
    { french: "Clé USB", english: ["USB drive", "Flash drive"], category: "tech", difficulty: "easy" },
    { french: "Carte mémoire", english: ["Memory card"], category: "tech", difficulty: "easy" },

    // Software & Operating Systems
    { french: "Logiciel", english: ["Software"], category: "tech", difficulty: "easy" },
    { french: "Programme", english: ["Program"], category: "tech", difficulty: "easy" },
    { french: "Système d'exploitation", english: ["Operating system"], category: "tech", difficulty: "medium" },
    { french: "Windows", english: ["Windows"], category: "tech", difficulty: "easy" },
    { french: "Linux", english: ["Linux"], category: "tech", difficulty: "medium" },
    { french: "Mac OS", english: ["Mac OS", "macOS"], category: "tech", difficulty: "easy" },
    { french: "Base de données", english: ["Database"], category: "tech", difficulty: "medium" },
    { french: "Algorithme", english: ["Algorithm"], category: "tech", difficulty: "hard" },
    { french: "Code", english: ["Code"], category: "tech", difficulty: "easy" },
    { french: "Programmation", english: ["Programming"], category: "tech", difficulty: "medium" },
    { french: "Bug", english: ["Bug", "Error"], category: "tech", difficulty: "easy" },
    { french: "Correctif", english: ["Patch", "Fix"], category: "tech", difficulty: "medium" },
    { french: "Mise à niveau", english: ["Upgrade"], category: "tech", difficulty: "medium" },
    { french: "Interface", english: ["Interface"], category: "tech", difficulty: "medium" },
    { french: "Menu", english: ["Menu"], category: "tech", difficulty: "easy" },
    { french: "Icône", english: ["Icon"], category: "tech", difficulty: "easy" },
    { french: "Fenêtre", english: ["Window"], category: "tech", difficulty: "easy" },

    // Internet & Networking
    { french: "Réseau", english: ["Network"], category: "tech", difficulty: "medium" },
    { french: "Routeur", english: ["Router"], category: "tech", difficulty: "medium" },
    { french: "Modem", english: ["Modem"], category: "tech", difficulty: "medium" },
    { french: "Bande passante", english: ["Bandwidth"], category: "tech", difficulty: "hard" },
    { french: "En ligne", english: ["Online"], category: "tech", difficulty: "easy" },
    { french: "Hors ligne", english: ["Offline"], category: "tech", difficulty: "easy" },
    { french: "Cloud", english: ["Cloud", "Cloud computing"], category: "tech", difficulty: "medium" },
    { french: "Page Web", english: ["Web page", "Webpage"], category: "tech", difficulty: "easy" },
    { french: "Navigateur", english: ["Browser", "Web browser"], category: "tech", difficulty: "easy" },
    { french: "Moteur de recherche", english: ["Search engine"], category: "tech", difficulty: "medium" },
    { french: "URL", english: ["URL", "Web address"], category: "tech", difficulty: "medium" },
    { french: "Courriel", english: ["Email", "E-mail"], category: "tech", difficulty: "easy" },
    { french: "Pièce jointe", english: ["Attachment"], category: "tech", difficulty: "easy" },
    { french: "Boîte de réception", english: ["Inbox"], category: "tech", difficulty: "medium" },
    { french: "Envoyer un e-mail", english: ["Send an email"], category: "tech", difficulty: "easy" },
    { french: "Streaming", english: ["Streaming"], category: "tech", difficulty: "easy" },
    { french: "Podcasts", english: ["Podcast"], category: "tech", difficulty: "easy" },
    { french: "Domaine", english: ["Domain"], category: "tech", difficulty: "medium" },
    { french: "Hébergement", english: ["Hosting"], category: "tech", difficulty: "medium" },

    // Security & Privacy
    { french: "Sécurité", english: ["Security"], category: "tech", difficulty: "medium" },
    { french: "Cryptage", english: ["Encryption"], category: "tech", difficulty: "hard" },
    { french: "Pare-feu", english: ["Firewall"], category: "tech", difficulty: "hard" },
    { french: "Virus", english: ["Virus"], category: "tech", difficulty: "easy" },
    { french: "Malware", english: ["Malware"], category: "tech", difficulty: "medium" },
    { french: "Logiciel antivirus", english: ["Antivirus", "Antivirus software"], category: "tech", difficulty: "medium" },
    { french: "Pirate informatique", english: ["Hacker"], category: "tech", difficulty: "medium" },
    { french: "Cyberattaque", english: ["Cyberattack", "Cyber attack"], category: "tech", difficulty: "hard" },
    { french: "Hameçonnage", english: ["Phishing"], category: "tech", difficulty: "hard" },
    { french: "Pourriel", english: ["Spam"], category: "tech", difficulty: "medium" },
    { french: "Sauvegarde", english: ["Backup"], category: "tech", difficulty: "medium" },
    { french: "Authentification", english: ["Authentication"], category: "tech", difficulty: "hard" },
    { french: "Vie privée", english: ["Privacy"], category: "tech", difficulty: "medium" },
    { french: "Données personnelles", english: ["Personal data"], category: "tech", difficulty: "medium" },
    { french: "Sécurisé", english: ["Secure", "Safe"], category: "tech", difficulty: "medium" },

    // Data & Storage
    { french: "Données", english: ["Data"], category: "tech", difficulty: "easy" },
    { french: "Stockage", english: ["Storage"], category: "tech", difficulty: "medium" },
    { french: "Stockage cloud", english: ["Cloud storage"], category: "tech", difficulty: "medium" },
    { french: "Mégadonnées", english: ["Big data"], category: "tech", difficulty: "hard" },
    { french: "Analytique", english: ["Analytics"], category: "tech", difficulty: "hard" },
    { french: "Traitement", english: ["Processing"], category: "tech", difficulty: "medium" },
    { french: "Archivage", english: ["Archive", "Archiving"], category: "tech", difficulty: "medium" },
    { french: "Récupération", english: ["Recovery"], category: "tech", difficulty: "medium" },
    { french: "Synchronisation", english: ["Sync", "Synchronization"], category: "tech", difficulty: "medium" },
    { french: "Compression", english: ["Compression"], category: "tech", difficulty: "medium" },

    // Development & Programming
    { french: "Développeur", english: ["Developer"], category: "tech", difficulty: "medium" },
    { french: "Programmeur", english: ["Programmer"], category: "tech", difficulty: "medium" },
    { french: "Codage", english: ["Coding"], category: "tech", difficulty: "medium" },
    { french: "Débogage", english: ["Debugging"], category: "tech", difficulty: "hard" },
    { french: "Test", english: ["Testing", "Test"], category: "tech", difficulty: "medium" },
    { french: "Déploiement", english: ["Deployment"], category: "tech", difficulty: "hard" },
    { french: "Version", english: ["Version"], category: "tech", difficulty: "medium" },
    { french: "Dépôt", english: ["Repository", "Repo"], category: "tech", difficulty: "hard" },
    { french: "Git", english: ["Git"], category: "tech", difficulty: "hard" },
    { french: "API", english: ["API", "Application Programming Interface"], category: "tech", difficulty: "hard" },
    { french: "Framework", english: ["Framework"], category: "tech", difficulty: "hard" },
    { french: "Bibliothèque", english: ["Library"], category: "tech", difficulty: "hard" },
    { french: "Front-end", english: ["Front-end", "Frontend"], category: "tech", difficulty: "hard" },
    { french: "Back-end", english: ["Back-end", "Backend"], category: "tech", difficulty: "hard" },
    { french: "Full-stack", english: ["Full-stack"], category: "tech", difficulty: "hard" },
    { french: "Langage de programmation", english: ["Programming language"], category: "tech", difficulty: "medium" },
    { french: "Script", english: ["Script"], category: "tech", difficulty: "medium" },

    // Modern Technology
    { french: "Intelligence artificielle", english: ["Artificial intelligence", "AI"], category: "tech", difficulty: "medium" },
    { french: "IA", english: ["AI"], category: "tech", difficulty: "medium" },
    { french: "Apprentissage automatique", english: ["Machine learning"], category: "tech", difficulty: "hard" },
    { french: "Automatisation", english: ["Automation"], category: "tech", difficulty: "medium" },
    { french: "Robot", english: ["Robot"], category: "tech", difficulty: "easy" },
    { french: "Robotique", english: ["Robotics"], category: "tech", difficulty: "medium" },
    { french: "Drone", english: ["Drone"], category: "tech", difficulty: "easy" },
    { french: "Internet des objets", english: ["IoT", "Internet of Things"], category: "tech", difficulty: "hard" },
    { french: "IdO", english: ["IoT"], category: "tech", difficulty: "hard" },
    { french: "Chaîne de blocs", english: ["Blockchain"], category: "tech", difficulty: "hard" },
    { french: "Cryptomonnaie", english: ["Cryptocurrency"], category: "tech", difficulty: "hard" },
    { french: "Bitcoin", english: ["Bitcoin"], category: "tech", difficulty: "medium" },
    { french: "Réalité virtuelle", english: ["Virtual reality", "VR"], category: "tech", difficulty: "medium" },
    { french: "RV", english: ["VR"], category: "tech", difficulty: "medium" },
    { french: "Réalité augmentée", english: ["Augmented reality", "AR"], category: "tech", difficulty: "hard" },
    { french: "RA", english: ["AR"], category: "tech", difficulty: "hard" },
    { french: "Impression 3D", english: ["3D printing"], category: "tech", difficulty: "medium" },
    { french: "Imprimante 3D", english: ["3D printer"], category: "tech", difficulty: "medium" },
    { french: "Assistant vocal", english: ["Voice assistant"], category: "tech", difficulty: "medium" },
    { french: "Reconnaissance vocale", english: ["Voice recognition", "Speech recognition"], category: "tech", difficulty: "hard" },

    // Communication & Collaboration
    { french: "Appel vidéo", english: ["Video call"], category: "tech", difficulty: "easy" },
    { french: "Conférence téléphonique", english: ["Conference call"], category: "tech", difficulty: "medium" },
    { french: "Visioconférence", english: ["Video conference", "Video conferencing"], category: "tech", difficulty: "medium" },
    { french: "Zoom", english: ["Zoom"], category: "tech", difficulty: "easy" },
    { french: "Teams", english: ["Teams"], category: "tech", difficulty: "easy" },
    { french: "Chat", english: ["Chat"], category: "tech", difficulty: "easy" },
    { french: "Messagerie instantanée", english: ["Instant messaging"], category: "tech", difficulty: "medium" },
    { french: "Réseaux sociaux", english: ["Social media"], category: "tech", difficulty: "easy" },
    { french: "Plateforme", english: ["Platform"], category: "tech", difficulty: "medium" },
    { french: "Publication", english: ["Post"], category: "tech", difficulty: "easy" },
    { french: "Partage d'écran", english: ["Screen sharing"], category: "tech", difficulty: "medium" },
    { french: "Notification", english: ["Notification"], category: "tech", difficulty: "easy" },
    { french: "Abonnement", english: ["Subscription"], category: "tech", difficulty: "medium" },

    // Travel
    { french: "Voyage", english: ["Trip", "Travel"], category: "travel" },
    { french: "Voyager", english: ["Travel", "To travel"], category: "travel" },
    { french: "Destination", english: ["Destination"], category: "travel" },
    { french: "Itinéraire", english: ["Itinerary", "Route"], category: "travel" },
    { french: "Billet", english: ["Ticket"], category: "travel" },
    { french: "Réservation", english: ["Reservation", "Booking"], category: "travel" },
    { french: "Réserver", english: ["Book"], category: "travel" },
    { french: "Carte d'embarquement", english: ["Boarding pass"], category: "travel" },
    { french: "Passeport", english: ["Passport"], category: "travel" },
    { french: "Visa", english: ["Visa"], category: "travel" },
    { french: "Douane", english: ["Customs"], category: "travel" },
    { french: "Bagage", english: ["Luggage", "Baggage"], category: "travel" },
    { french: "Valise", english: ["Suitcase"], category: "travel" },
    { french: "Sac à dos", english: ["Backpack"], category: "travel" },
    { french: "Touriste", english: ["Tourist"], category: "travel" },
    { french: "Guide touristique", english: ["Tour guide"], category: "travel" },
    { french: "Musée", english: ["Museum"], category: "travel" },
    { french: "Monument", english: ["Monument"], category: "travel" },
    { french: "Château", english: ["Castle"], category: "travel" },
    { french: "Cathédrale", english: ["Cathedral"], category: "travel" },
    { french: "Temple", english: ["Temple"], category: "travel" },
    { french: "Parc", english: ["Park"], category: "travel" },
    { french: "Jardin", english: ["Garden"], category: "travel" },
    { french: "Fontaine", english: ["Fountain"], category: "travel" },
    { french: "Pont", english: ["Bridge"], category: "travel" },
    { french: "Île", english: ["Island"], category: "travel" },
    { french: "Lac", english: ["Lake"], category: "travel" },
    { french: "Vallée", english: ["Valley"], category: "travel" },
    { french: "Forêt", english: ["Forest"], category: "travel" },
    { french: "Désert", english: ["Desert"], category: "travel" },
    { french: "Chambre d'hôtel", english: ["Hotel room"], category: "travel" },
    { french: "Suite", english: ["Suite"], category: "travel" },
    { french: "Clé", english: ["Key"], category: "travel" },
    { french: "Service de chambre", english: ["Room service"], category: "travel" },
    { french: "Ascenseur", english: ["Elevator"], category: "travel" },
    { french: "Escalier", english: ["Stairs"], category: "travel" },
    { french: "Toilettes", english: ["Restroom", "Bathroom"], category: "travel" },
    { french: "Douche", english: ["Shower"], category: "travel" },
    { french: "Baignoire", english: ["Bathtub"], category: "travel" },
    { french: "Serviette", english: ["Towel"], category: "travel" },
    { french: "Savon", english: ["Soap"], category: "travel" },
    { french: "Shampooing", english: ["Shampoo"], category: "travel" },
    { french: "Dentifrice", english: ["Toothpaste"], category: "travel" },
    { french: "Brosse à dents", english: ["Toothbrush"], category: "travel" },
    { french: "Peigne", english: ["Comb"], category: "travel" },
    { french: "Sèche-cheveux", english: ["Hair dryer"], category: "travel" },

    // Transportation
    { french: "Vol", english: ["Flight"], category: "travel", difficulty: "easy" },
    { french: "Terminal", english: ["Terminal"], category: "travel", difficulty: "medium" },
    { french: "Porte d'embarquement", english: ["Gate"], category: "travel", difficulty: "medium" },
    { french: "Enregistrement", english: ["Check-in"], category: "travel", difficulty: "medium" },
    { french: "Bagage à main", english: ["Carry-on"], category: "travel", difficulty: "medium" },
    { french: "Départ", english: ["Departure"], category: "travel", difficulty: "medium" },
    { french: "Arrivée", english: ["Arrival"], category: "travel", difficulty: "medium" },
    { french: "Retard", english: ["Delay"], category: "travel", difficulty: "easy" },
    { french: "Annulé", english: ["Cancelled"], category: "travel", difficulty: "easy" },
    { french: "Chemin de fer", english: ["Railway"], category: "travel", difficulty: "medium" },
    { french: "Quai", english: ["Platform"], category: "travel", difficulty: "medium" },
    { french: "Place", english: ["Seat"], category: "travel", difficulty: "easy" },
    { french: "Autocar", english: ["Coach"], category: "travel", difficulty: "medium" },
    { french: "Location de voiture", english: ["Car rental"], category: "travel", difficulty: "medium" },
    { french: "Conducteur", english: ["Driver"], category: "travel", difficulty: "easy" },
    { french: "Chauffeur", english: ["Chauffeur", "Driver"], category: "travel", difficulty: "medium" },
    { french: "Embarquement", english: ["Boarding"], category: "travel", difficulty: "medium" },
    { french: "Débarquement", english: ["Disembarkation"], category: "travel", difficulty: "hard" },
    { french: "Correspondance", english: ["Connection", "Transfer"], category: "travel", difficulty: "medium" },
    { french: "Contrôle de sécurité", english: ["Security check"], category: "travel", difficulty: "medium" },
    { french: "Comptoir d'enregistrement", english: ["Check-in counter"], category: "travel", difficulty: "medium" },
    { french: "Tapis roulant", english: ["Baggage carousel"], category: "travel", difficulty: "hard" },
    { french: "Navette", english: ["Shuttle"], category: "travel", difficulty: "medium" },
    { french: "Métro", english: ["Subway", "Metro"], category: "travel", difficulty: "easy" },
    { french: "Tramway", english: ["Tram", "Streetcar"], category: "travel", difficulty: "medium" },

    // Accommodation
    { french: "Motel", english: ["Motel"], category: "travel", difficulty: "easy" },
    { french: "Auberge de jeunesse", english: ["Hostel"], category: "travel", difficulty: "medium" },
    { french: "Chambre et petit déjeuner", english: ["Bed and Breakfast", "B&B"], category: "travel", difficulty: "medium" },
    { french: "Chambre simple", english: ["Single room"], category: "travel", difficulty: "medium" },
    { french: "Chambre double", english: ["Double room"], category: "travel", difficulty: "medium" },
    { french: "Chambre twin", english: ["Twin room"], category: "travel", difficulty: "medium" },
    { french: "Réception", english: ["Reception", "Front desk"], category: "travel", difficulty: "easy" },
    { french: "Carte magnétique", english: ["Key card"], category: "travel", difficulty: "medium" },
    { french: "Hall", english: ["Lobby"], category: "travel", difficulty: "easy" },
    { french: "Petit déjeuner", english: ["Breakfast"], category: "travel", difficulty: "easy" },
    { french: "Wi-Fi", english: ["Wi-Fi"], category: "travel", difficulty: "easy" },
    { french: "Arrivée", english: ["Check-in"], category: "travel", difficulty: "medium" },
    { french: "Départ de l'hôtel", english: ["Check-out"], category: "travel", difficulty: "medium" },
    { french: "Pension complète", english: ["Full board"], category: "travel", difficulty: "hard" },
    { french: "Demi-pension", english: ["Half board"], category: "travel", difficulty: "hard" },
    { french: "Auberge", english: ["Inn"], category: "travel", difficulty: "medium" },
    { french: "Appartement", english: ["Apartment"], category: "travel", difficulty: "easy" },
    { french: "Gîte", english: ["Cottage", "Holiday home"], category: "travel", difficulty: "hard" },
    { french: "Confirmation de réservation", english: ["Booking confirmation"], category: "travel", difficulty: "medium" },

    // Directions & Navigation
    { french: "Direction", english: ["Direction"], category: "travel", difficulty: "easy" },
    { french: "Carte", english: ["Map"], category: "travel", difficulty: "easy" },
    { french: "GPS", english: ["GPS"], category: "travel", difficulty: "easy" },
    { french: "Emplacement", english: ["Location"], category: "travel", difficulty: "easy" },
    { french: "Adresse", english: ["Address"], category: "travel", difficulty: "easy" },
    { french: "Avenue", english: ["Avenue"], category: "travel", difficulty: "easy" },
    { french: "Tourner", english: ["Turn"], category: "travel", difficulty: "easy" },
    { french: "Gauche", english: ["Left"], category: "travel", difficulty: "easy" },
    { french: "Droite", english: ["Right"], category: "travel", difficulty: "easy" },
    { french: "Tout droit", english: ["Straight ahead"], category: "travel", difficulty: "easy" },
    { french: "Nord", english: ["North"], category: "travel", difficulty: "easy" },
    { french: "Sud", english: ["South"], category: "travel", difficulty: "easy" },
    { french: "Est", english: ["East"], category: "travel", difficulty: "easy" },
    { french: "Ouest", english: ["West"], category: "travel", difficulty: "easy" },
    { french: "Coin", english: ["Corner"], category: "travel", difficulty: "easy" },
    { french: "Intersection", english: ["Intersection"], category: "travel", difficulty: "medium" },
    { french: "Rond-point", english: ["Roundabout"], category: "travel", difficulty: "hard" },
    { french: "Feu de circulation", english: ["Traffic light"], category: "travel", difficulty: "medium" },
    { french: "Panneau", english: ["Sign"], category: "travel", difficulty: "easy" },
    { french: "Itinéraire bis", english: ["Alternative route"], category: "travel", difficulty: "medium" },
    { french: "Distance", english: ["Distance"], category: "travel", difficulty: "easy" },
    { french: "Proche", english: ["Near", "Close"], category: "travel", difficulty: "easy" },
    { french: "Loin", english: ["Far"], category: "travel", difficulty: "easy" },
    { french: "En face de", english: ["Opposite", "Across from"], category: "travel", difficulty: "medium" },
    { french: "À côté de", english: ["Next to", "Beside"], category: "travel", difficulty: "easy" },

    // Tourist Attractions & Places
    { french: "Attraction touristique", english: ["Tourist attraction"], category: "travel", difficulty: "medium" },
    { french: "Point de repère", english: ["Landmark"], category: "travel", difficulty: "medium" },
    { french: "Galerie d'art", english: ["Art gallery", "Gallery"], category: "travel", difficulty: "medium" },
    { french: "Église", english: ["Church"], category: "travel", difficulty: "easy" },
    { french: "Palais", english: ["Palace"], category: "travel", difficulty: "medium" },
    { french: "Centre-ville", english: ["City center", "Downtown"], category: "travel", difficulty: "easy" },
    { french: "Quartier", english: ["Neighborhood", "District"], category: "travel", difficulty: "medium" },
    { french: "Vieille ville", english: ["Old town"], category: "travel", difficulty: "medium" },
    { french: "Place publique", english: ["Square", "Plaza"], category: "travel", difficulty: "medium" },
    { french: "Marché", english: ["Market"], category: "travel", difficulty: "easy" },
    { french: "Belvédère", english: ["Viewpoint"], category: "travel", difficulty: "hard" },
    { french: "Site historique", english: ["Historic site"], category: "travel", difficulty: "medium" },
    { french: "Ruines", english: ["Ruins"], category: "travel", difficulty: "medium" },

    // Activities & Entertainment
    { french: "Tourisme", english: ["Sightseeing", "Tourism"], category: "travel", difficulty: "easy" },
    { french: "Visite", english: ["Tour", "Visit"], category: "travel", difficulty: "easy" },
    { french: "Visite guidée", english: ["Guided tour"], category: "travel", difficulty: "medium" },
    { french: "Excursion", english: ["Excursion"], category: "travel", difficulty: "hard" },
    { french: "Visiter", english: ["Visit", "To visit"], category: "travel", difficulty: "easy" },
    { french: "Explorer", english: ["Explore", "To explore"], category: "travel", difficulty: "easy" },
    { french: "Randonnée", english: ["Hike", "Hiking"], category: "travel", difficulty: "medium" },
    { french: "Marcher", english: ["Walk", "To walk"], category: "travel", difficulty: "easy" },
    { french: "Faire les courses", english: ["Shopping"], category: "travel", difficulty: "easy" },
    { french: "Bar", english: ["Bar"], category: "travel", difficulty: "easy" },
    { french: "Divertissement", english: ["Entertainment"], category: "travel", difficulty: "medium" },
    { french: "Spectacle", english: ["Show"], category: "travel", difficulty: "easy" },
    { french: "Concert", english: ["Concert"], category: "travel", difficulty: "easy" },
    { french: "Théâtre", english: ["Theatre"], category: "travel", difficulty: "easy" },
    { french: "Cinéma", english: ["Cinema"], category: "travel", difficulty: "easy" },
    { french: "Festival", english: ["Festival"], category: "travel", difficulty: "easy" },
    { french: "Événement", english: ["Event"], category: "travel", difficulty: "easy" },
    { french: "Croisière", english: ["Cruise"], category: "travel", difficulty: "medium" },

    // Booking & Documents
    { french: "Carte d'identité", english: ["ID card"], category: "travel", difficulty: "medium" },
    { french: "Confirmation", english: ["Confirmation"], category: "travel", difficulty: "easy" },
    { french: "Assurance voyage", english: ["Travel insurance"], category: "travel", difficulty: "hard" },
    { french: "Change de devises", english: ["Currency exchange"], category: "travel", difficulty: "hard" },
    { french: "Immigration", english: ["Immigration"], category: "travel", difficulty: "medium" },
    { french: "Frontière", english: ["Border"], category: "travel", difficulty: "medium" },
    { french: "Formulaire", english: ["Form"], category: "travel", difficulty: "easy" },
    { french: "Déclaration", english: ["Declaration"], category: "travel", difficulty: "medium" },
    { french: "Certificat", english: ["Certificate"], category: "travel", difficulty: "medium" },
    { french: "Permis de conduire", english: ["Driver's license"], category: "travel", difficulty: "medium" },
    { french: "Reçu", english: ["Receipt"], category: "travel", difficulty: "easy" },
    { french: "Facture", english: ["Invoice", "Bill"], category: "travel", difficulty: "medium" },

    // Emergencies & Problems
    { french: "Aide", english: ["Help"], category: "travel", difficulty: "easy" },
    { french: "Urgence", english: ["Emergency"], category: "travel", difficulty: "easy" },
    { french: "Police", english: ["Police"], category: "travel", difficulty: "easy" },
    { french: "Hôpital", english: ["Hospital"], category: "travel", difficulty: "easy" },
    { french: "Médecin", english: ["Doctor"], category: "travel", difficulty: "easy" },
    { french: "Pharmacie", english: ["Pharmacy"], category: "travel", difficulty: "easy" },
    { french: "Perdu", english: ["Lost"], category: "travel", difficulty: "easy" },
    { french: "Volé", english: ["Stolen"], category: "travel", difficulty: "easy" },
    { french: "Problème", english: ["Problem"], category: "travel", difficulty: "easy" },
    { french: "Accident", english: ["Accident"], category: "travel", difficulty: "easy" },
    { french: "Malade", english: ["Sick", "Ill"], category: "travel", difficulty: "easy" },
    { french: "Blessé", english: ["Injured"], category: "travel", difficulty: "easy" },
    { french: "Danger", english: ["Danger"], category: "travel", difficulty: "easy" },
    { french: "Sûr", english: ["Safe"], category: "travel", difficulty: "easy" },
    { french: "Poste de police", english: ["Police station"], category: "travel", difficulty: "medium" },
    { french: "Ambassade", english: ["Embassy"], category: "travel", difficulty: "medium" },
    { french: "Consulat", english: ["Consulate"], category: "travel", difficulty: "hard" },

    // Economy & Finance
    { french: "Économie", english: ["Economy"], category: "economy" },
    { french: "Économique", english: ["Economic"], category: "economy" },
    { french: "Marché financier", english: ["Financial market"], category: "economy" },
    { french: "Bourse", english: ["Stock exchange"], category: "economy" },
    { french: "Action", english: ["Stock", "Share"], category: "economy" },
    { french: "Obligation", english: ["Bond"], category: "economy" },
    { french: "Dividende", english: ["Dividend"], category: "economy" },
    { french: "Rendement", english: ["Return"], category: "economy" },
    { french: "Portefeuille", english: ["Portfolio"], category: "economy" },
    { french: "Investisseur", english: ["Investor"], category: "economy" },
    { french: "Inflation", english: ["Inflation"], category: "economy" },
    { french: "Récession", english: ["Recession"], category: "economy" },
    { french: "Croissance", english: ["Growth"], category: "economy" },
    { french: "PIB", english: ["GDP"], category: "economy" },
    { french: "Chômage", english: ["Unemployment"], category: "economy" },
    { french: "Salaire minimum", english: ["Minimum wage"], category: "economy" },
    { french: "Retraite", english: ["Retirement", "Pension"], category: "economy" },
    { french: "Assurance santé", english: ["Health insurance"], category: "economy" },
    { french: "Crédit", english: ["Credit", "Loan"], category: "economy" },
    { french: "Hypothèque", english: ["Mortgage"], category: "economy" },
    { french: "Intérêt", english: ["Interest"], category: "economy" },
    { french: "Taux d'intérêt", english: ["Interest rate"], category: "economy" },
    { french: "Monnaie", english: ["Currency"], category: "economy" },
    { french: "Échange", english: ["Exchange"], category: "economy" },
    { french: "Taux de change", english: ["Exchange rate"], category: "economy" },
    { french: "Euro", english: ["Euro"], category: "economy" },
    { french: "Dollar", english: ["Dollar"], category: "economy" },
    { french: "Livre sterling", english: ["British pound"], category: "economy" },
    { french: "Pièce de monnaie", english: ["Coin"], category: "economy" },
    { french: "Billet", english: ["Banknote", "Bill"], category: "economy" },
    { french: "Facturation", english: ["Billing"], category: "economy" },
    { french: "Reçu", english: ["Receipt"], category: "economy" },
    { french: "Facture", english: ["Invoice"], category: "economy" },
    { french: "Achat", english: ["Purchase"], category: "economy" },
    { french: "Vente", english: ["Sale"], category: "economy" },
    { french: "Remise", english: ["Discount"], category: "economy" },
    { french: "Promotion", english: ["Sale", "Promotion"], category: "economy" },
    { french: "Solde", english: ["Balance"], category: "economy" },
    { french: "Dépôt", english: ["Deposit"], category: "economy" },
    { french: "Retrait", english: ["Withdrawal"], category: "economy" },
    { french: "Transfert", english: ["Transfer"], category: "economy" },
    { french: "Transaction", english: ["Transaction"], category: "economy" },
    { french: "Paiement", english: ["Payment"], category: "economy" },
    { french: "Carte de crédit", english: ["Credit card"], category: "economy" },
    { french: "Carte de débit", english: ["Debit card"], category: "economy" },
    { french: "Chèque", english: ["Check", "Cheque"], category: "economy" },
    { french: "Virement bancaire", english: ["Bank transfer"], category: "economy" },
    
    // Basic Economics - Easy
    { french: "Offre", english: ["Supply"], category: "economy", difficulty: "easy" },
    { french: "Demande", english: ["Demand"], category: "economy", difficulty: "easy" },
    { french: "Prix", english: ["Price"], category: "economy", difficulty: "easy" },
    { french: "Valeur", english: ["Value"], category: "economy", difficulty: "easy" },
    { french: "Commerce", english: ["Commerce", "Trade"], category: "economy", difficulty: "easy" },
    { french: "Biens", english: ["Goods"], category: "economy", difficulty: "easy" },
    { french: "Services", english: ["Services"], category: "economy", difficulty: "easy" },
    { french: "Consommateur", english: ["Consumer"], category: "economy", difficulty: "easy" },
    { french: "Producteur", english: ["Producer"], category: "economy", difficulty: "easy" },
    { french: "Vendeur", english: ["Seller"], category: "economy", difficulty: "easy" },
    { french: "Acheteur", english: ["Buyer"], category: "economy", difficulty: "easy" },
    { french: "Argent", english: ["Money"], category: "economy", difficulty: "easy" },
    { french: "Espèces", english: ["Cash"], category: "economy", difficulty: "easy" },
    { french: "Banque", english: ["Bank"], category: "economy", difficulty: "easy" },
    { french: "Compte", english: ["Account"], category: "economy", difficulty: "easy" },
    { french: "Épargne", english: ["Savings"], category: "economy", difficulty: "easy" },
    { french: "Dette", english: ["Debt"], category: "economy", difficulty: "easy" },
    { french: "Impôt", english: ["Tax"], category: "economy", difficulty: "easy" },
    { french: "Taxe", english: ["Tax"], category: "economy", difficulty: "easy" },
    
    // Money & Banking - Medium
    { french: "Opérations bancaires", english: ["Banking"], category: "economy", difficulty: "medium" },
    { french: "Prêt", english: ["Loan"], category: "economy", difficulty: "easy" },
    { french: "Principal", english: ["Principal"], category: "economy", difficulty: "medium" },
    { french: "Capital", english: ["Capital"], category: "economy", difficulty: "medium" },
    { french: "Liquidité", english: ["Liquidity"], category: "economy", difficulty: "hard" },
    { french: "Actif", english: ["Asset"], category: "economy", difficulty: "medium" },
    { french: "Actifs", english: ["Assets"], category: "economy", difficulty: "medium" },
    { french: "Passif", english: ["Liability"], category: "economy", difficulty: "medium" },
    { french: "Passifs", english: ["Liabilities"], category: "economy", difficulty: "medium" },
    
    // Markets & Trading - Medium to Hard
    { french: "Titre", english: ["Security", "Securities"], category: "economy", difficulty: "medium" },
    { french: "Titres", english: ["Securities"], category: "economy", difficulty: "medium" },
    { french: "Investissement", english: ["Investment"], category: "economy", difficulty: "medium" },
    { french: "Courtier", english: ["Broker"], category: "economy", difficulty: "medium" },
    { french: "Négociant", english: ["Trader"], category: "economy", difficulty: "medium" },
    { french: "Marché boursier", english: ["Stock market"], category: "economy", difficulty: "medium" },
    { french: "Marchandise", english: ["Commodity"], category: "economy", difficulty: "medium" },
    { french: "Contrats à terme", english: ["Futures"], category: "economy", difficulty: "hard" },
    { french: "Options", english: ["Options"], category: "economy", difficulty: "hard" },
    { french: "Plus-values", english: ["Capital gains"], category: "economy", difficulty: "medium" },
    { french: "Dérivés", english: ["Derivatives"], category: "economy", difficulty: "hard" },
    
    // Economic Indicators - Medium to Hard
    { french: "Produit intérieur brut", english: ["Gross Domestic Product", "GDP"], category: "economy", difficulty: "medium" },
    { french: "Déflation", english: ["Deflation"], category: "economy", difficulty: "medium" },
    { french: "Taux de chômage", english: ["Unemployment rate"], category: "economy", difficulty: "medium" },
    { french: "Taux de croissance", english: ["Growth rate"], category: "economy", difficulty: "medium" },
    { french: "Dépression", english: ["Depression"], category: "economy", difficulty: "medium" },
    { french: "Reprise", english: ["Recovery"], category: "economy", difficulty: "medium" },
    { french: "Boom", english: ["Boom"], category: "economy", difficulty: "easy" },
    { french: "Effondrement", english: ["Bust", "Crash"], category: "economy", difficulty: "medium" },
    { french: "Cycle économique", english: ["Economic cycle", "Business cycle"], category: "economy", difficulty: "hard" },
    { french: "Conjoncture", english: ["Economic situation", "Economic climate"], category: "economy", difficulty: "hard" },
    
    // Government & Policy - Medium to Hard
    { french: "Imposition", english: ["Taxation"], category: "economy", difficulty: "medium" },
    { french: "Politique budgétaire", english: ["Fiscal policy"], category: "economy", difficulty: "hard" },
    { french: "Politique monétaire", english: ["Monetary policy"], category: "economy", difficulty: "hard" },
    { french: "Réglementation", english: ["Regulation"], category: "economy", difficulty: "medium" },
    { french: "Banque centrale", english: ["Central bank"], category: "economy", difficulty: "medium" },
    { french: "Réserve fédérale", english: ["Federal Reserve"], category: "economy", difficulty: "medium" },
    { french: "Masse monétaire", english: ["Money supply"], category: "economy", difficulty: "hard" },
    { french: "Déficit budgétaire", english: ["Budget deficit"], category: "economy", difficulty: "medium" },
    { french: "Dette publique", english: ["National debt", "Public debt"], category: "economy", difficulty: "medium" },
    { french: "Subvention", english: ["Subsidy"], category: "economy", difficulty: "medium" },
    { french: "Droit de douane", english: ["Tariff", "Customs duty"], category: "economy", difficulty: "medium" },
    { french: "Assouplissement quantitatif", english: ["Quantitative easing"], category: "economy", difficulty: "hard" },
    
    // Business Finance - Medium
    { french: "Revenu", english: ["Revenue", "Income"], category: "economy", difficulty: "medium" },
    { french: "Chiffre d'affaires", english: ["Turnover", "Revenue"], category: "economy", difficulty: "medium" },
    { french: "Profit", english: ["Profit"], category: "economy", difficulty: "easy" },
    { french: "Bénéfice", english: ["Profit", "Earnings"], category: "economy", difficulty: "medium" },
    { french: "Perte", english: ["Loss"], category: "economy", difficulty: "easy" },
    { french: "Résultat", english: ["Earnings", "Result"], category: "economy", difficulty: "medium" },
    { french: "Flux de trésorerie", english: ["Cash flow"], category: "economy", difficulty: "medium" },
    { french: "Bilan", english: ["Balance sheet"], category: "economy", difficulty: "medium" },
    { french: "Compte de résultat", english: ["Income statement"], category: "economy", difficulty: "hard" },
    { french: "Fonds propres", english: ["Equity"], category: "economy", difficulty: "medium" },
    { french: "Actionnaire", english: ["Shareholder"], category: "economy", difficulty: "medium" },
    { french: "Partie prenante", english: ["Stakeholder"], category: "economy", difficulty: "medium" },
    { french: "Dividendes", english: ["Dividends"], category: "economy", difficulty: "medium" },
    
    // Trade & Globalization - Medium
    { french: "Importation", english: ["Import"], category: "economy", difficulty: "medium" },
    { french: "Exportation", english: ["Export"], category: "economy", difficulty: "medium" },
    { french: "Balance commerciale", english: ["Trade balance"], category: "economy", difficulty: "medium" },
    { french: "Déficit commercial", english: ["Trade deficit"], category: "economy", difficulty: "medium" },
    { french: "Excédent commercial", english: ["Trade surplus"], category: "economy", difficulty: "medium" },
    { french: "Libre-échange", english: ["Free trade"], category: "economy", difficulty: "medium" },
    { french: "Protectionnisme", english: ["Protectionism"], category: "economy", difficulty: "hard" },
    { french: "Tarif douanier", english: ["Tariff"], category: "economy", difficulty: "medium" },
    { french: "Quota", english: ["Quota"], category: "economy", difficulty: "medium" },
    { french: "Embargo", english: ["Embargo"], category: "economy", difficulty: "medium" },
    { french: "Mondialisation", english: ["Globalization"], category: "economy", difficulty: "medium" },
    { french: "Multinationale", english: ["Multinational"], category: "economy", difficulty: "medium" },
    { french: "Délocalisation", english: ["Offshore", "Offshoring"], category: "economy", difficulty: "medium" },
    { french: "Externalisation", english: ["Outsourcing"], category: "economy", difficulty: "medium" },
    
    // Labor & Employment - Easy to Medium
    { french: "Travail", english: ["Labor", "Work"], category: "economy", difficulty: "easy" },
    { french: "Main-d'œuvre", english: ["Workforce", "Labor force"], category: "economy", difficulty: "medium" },
    { french: "Emploi", english: ["Employment", "Job"], category: "economy", difficulty: "easy" },
    { french: "Salaire", english: ["Wage", "Salary"], category: "economy", difficulty: "easy" },
    { french: "Syndicat", english: ["Union", "Trade union"], category: "economy", difficulty: "medium" },
    { french: "Grève", english: ["Strike"], category: "economy", difficulty: "medium" },
    { french: "Productivité", english: ["Productivity"], category: "economy", difficulty: "medium" },
    { french: "Coût de la main-d'œuvre", english: ["Labor cost"], category: "economy", difficulty: "medium" },
    
    // Additional Economic Terms - Medium to Hard
    { french: "Microéconomie", english: ["Microeconomics"], category: "economy", difficulty: "hard" },
    { french: "Macroéconomie", english: ["Macroeconomics"], category: "economy", difficulty: "hard" },
    { french: "Offre et demande", english: ["Supply and demand"], category: "economy", difficulty: "medium" },
    { french: "Élasticité", english: ["Elasticity"], category: "economy", difficulty: "hard" },
    { french: "Monopole", english: ["Monopoly"], category: "economy", difficulty: "medium" },
    { french: "Concurrence", english: ["Competition"], category: "economy", difficulty: "medium" },
    { french: "Marché libre", english: ["Free market"], category: "economy", difficulty: "medium" },
    { french: "Capitalisme", english: ["Capitalism"], category: "economy", difficulty: "medium" },
    { french: "Entreprise", english: ["Business", "Company", "Enterprise"], category: "economy", difficulty: "easy" },
    { french: "Entrepreneur", english: ["Entrepreneur"], category: "economy", difficulty: "medium" },
    { french: "Startup", english: ["Startup"], category: "economy", difficulty: "easy" },
    { french: "Budget", english: ["Budget"], category: "economy", difficulty: "easy" },
    { french: "Dépense", english: ["Expense", "Expenditure"], category: "economy", difficulty: "easy" },
    { french: "Coût", english: ["Cost"], category: "economy", difficulty: "easy" },
    { french: "Bénéfice net", english: ["Net profit"], category: "economy", difficulty: "medium" },
    { french: "Bénéfice brut", english: ["Gross profit"], category: "economy", difficulty: "medium" },
    { french: "Amortissement", english: ["Depreciation"], category: "economy", difficulty: "hard" },
    { french: "Auditeur", english: ["Auditor"], category: "economy", difficulty: "medium" },
    { french: "Comptable", english: ["Accountant"], category: "economy", difficulty: "medium" },
    { french: "Comptabilité", english: ["Accounting"], category: "economy", difficulty: "medium" },
    { french: "Faillite", english: ["Bankruptcy"], category: "economy", difficulty: "medium" },
    { french: "Fusion", english: ["Merger"], category: "economy", difficulty: "medium" },
    { french: "Acquisition", english: ["Acquisition"], category: "economy", difficulty: "medium" },
    { french: "Coentreprise", english: ["Joint venture"], category: "economy", difficulty: "hard" },
    { french: "Valorisation", english: ["Valuation"], category: "economy", difficulty: "hard" },
    { french: "Capitalisation boursière", english: ["Market capitalization"], category: "economy", difficulty: "hard" },
    { french: "Solvabilité", english: ["Solvency"], category: "economy", difficulty: "hard" },
    { french: "Crédit-bail", english: ["Leasing"], category: "economy", difficulty: "medium" },
    { french: "Financement", english: ["Financing"], category: "economy", difficulty: "medium" },
    { french: "Levée de fonds", english: ["Fundraising"], category: "economy", difficulty: "medium" },
    { french: "Capital-risque", english: ["Venture capital"], category: "economy", difficulty: "hard" },
    { french: "Indice", english: ["Index"], category: "economy", difficulty: "medium" },
    { french: "Volatilité", english: ["Volatility"], category: "economy", difficulty: "hard" },
    { french: "Risque", english: ["Risk"], category: "economy", difficulty: "easy" },
    { french: "Hedge fund", english: ["Hedge fund"], category: "economy", difficulty: "hard" },
    { french: "Fonds commun de placement", english: ["Mutual fund"], category: "economy", difficulty: "medium" },
    { french: "Gestionnaire de fonds", english: ["Fund manager"], category: "economy", difficulty: "medium" },

    // Meetings & Discussions
    { french: "Réunion", english: ["Meeting"], category: "meetings", difficulty: "easy" },
    { french: "Conférence", english: ["Conference"], category: "meetings", difficulty: "easy" },
    { french: "Séminaire", english: ["Seminar"], category: "meetings", difficulty: "medium" },
    { french: "Atelier", english: ["Workshop"], category: "meetings", difficulty: "medium" },
    { french: "Débat", english: ["Debate"], category: "meetings", difficulty: "medium" },
    { french: "Discuter", english: ["Discuss", "To discuss"], category: "meetings", difficulty: "easy" },
    { french: "Discussion", english: ["Discussion"], category: "meetings", difficulty: "easy" },
    { french: "Parler", english: ["Speak", "To speak"], category: "meetings", difficulty: "easy" },
    { french: "Écouter", english: ["Listen", "To listen"], category: "meetings", difficulty: "easy" },
    { french: "Question", english: ["Question"], category: "meetings", difficulty: "easy" },
    { french: "Poser une question", english: ["Ask a question"], category: "meetings", difficulty: "easy" },
    { french: "Réponse", english: ["Answer"], category: "meetings", difficulty: "easy" },
    { french: "Répondre", english: ["Answer", "To answer"], category: "meetings", difficulty: "easy" },
    { french: "Point de vue", english: ["Point of view"], category: "meetings", difficulty: "medium" },
    { french: "Opinion", english: ["Opinion"], category: "meetings", difficulty: "easy" },
    { french: "Accord", english: ["Agreement"], category: "meetings", difficulty: "easy" },
    { french: "Désaccord", english: ["Disagreement"], category: "meetings", difficulty: "easy" },
    { french: "Consensus", english: ["Consensus"], category: "meetings", difficulty: "hard" },
    { french: "Décision", english: ["Decision"], category: "meetings", difficulty: "easy" },
    { french: "Résolution", english: ["Resolution"], category: "meetings", difficulty: "medium" },
    { french: "Proposition", english: ["Proposal"], category: "meetings", difficulty: "medium" },
    { french: "Suggérer", english: ["Suggest", "To suggest"], category: "meetings", difficulty: "easy" },
    { french: "Suggestion", english: ["Suggestion"], category: "meetings", difficulty: "easy" },
    { french: "Améliorer", english: ["Improve", "To improve"], category: "meetings", difficulty: "easy" },
    { french: "Critique", english: ["Criticism", "Feedback"], category: "meetings", difficulty: "medium" },
    { french: "Critiquer", english: ["Criticize"], category: "meetings", difficulty: "medium" },
    { french: "Compliment", english: ["Compliment"], category: "meetings", difficulty: "easy" },
    { french: "Complimenter", english: ["Compliment"], category: "meetings", difficulty: "easy" },
    { french: "Félicitations", english: ["Congratulations"], category: "meetings", difficulty: "easy" },
    { french: "Présentation", english: ["Presentation"], category: "meetings", difficulty: "easy" },
    { french: "Présenter", english: ["Present"], category: "meetings", difficulty: "easy" },
    { french: "Diaporama", english: ["Slideshow"], category: "meetings", difficulty: "medium" },
    { french: "Diapositive", english: ["Slide"], category: "meetings", difficulty: "easy" },
    { french: "Tableau blanc", english: ["Whiteboard"], category: "meetings", difficulty: "medium" },
    { french: "Marqueur", english: ["Marker"], category: "meetings", difficulty: "easy" },
    { french: "Projecteur", english: ["Projector"], category: "meetings", difficulty: "easy" },
    { french: "Enregistrement", english: ["Recording"], category: "meetings", difficulty: "easy" },
    { french: "Retransmission", english: ["Broadcast"], category: "meetings", difficulty: "medium" },
    { french: "Vidéoconférence", english: ["Video conference"], category: "meetings", difficulty: "medium" },
    { french: "Appel téléphonique", english: ["Phone call"], category: "meetings", difficulty: "easy" },
    { french: "Conférence téléphonique", english: ["Conference call"], category: "meetings", difficulty: "medium" },
    { french: "Minute", english: ["Minute", "Second"], category: "meetings", difficulty: "easy" },
    { french: "Agenda", english: ["Agenda"], category: "meetings", difficulty: "easy" },
    { french: "Ordre du jour", english: ["Agenda", "Order of business"], category: "meetings", difficulty: "medium" },
    { french: "Point à l'ordre du jour", english: ["Agenda item"], category: "meetings", difficulty: "medium" },
    { french: "Procès-verbal", english: ["Minutes"], category: "meetings", difficulty: "hard" },
    
    // Project Management - Time & Schedule
    { french: "Date limite", english: ["Deadline"], category: "meetings", difficulty: "medium" },
    { french: "Emploi du temps", english: ["Schedule"], category: "meetings", difficulty: "medium" },
    { french: "Calendrier du projet", english: ["Timeline", "Project timeline"], category: "meetings", difficulty: "medium" },
    { french: "Retard", english: ["Delay"], category: "meetings", difficulty: "easy" },
    { french: "Progrès", english: ["Progress"], category: "meetings", difficulty: "easy" },
    { french: "Étape importante", english: ["Milestone"], category: "meetings", difficulty: "medium" },
    { french: "Urgent", english: ["Urgent"], category: "meetings", difficulty: "easy" },
    { french: "Dès que possible", english: ["ASAP", "As soon as possible"], category: "meetings", difficulty: "easy" },
    { french: "Suivi", english: ["Follow-up"], category: "meetings", difficulty: "medium" },
    { french: "Reporter", english: ["Postpone", "Delay"], category: "meetings", difficulty: "medium" },
    { french: "Reprogrammer", english: ["Reschedule"], category: "meetings", difficulty: "medium" },
    { french: "Mise à jour", english: ["Update"], category: "meetings", difficulty: "easy" },
    { french: "Mise à jour du statut", english: ["Status update"], category: "meetings", difficulty: "medium" },
    { french: "En cours", english: ["In progress", "Ongoing"], category: "meetings", difficulty: "easy" },
    { french: "Terminé", english: ["Completed", "Finished"], category: "meetings", difficulty: "easy" },
    { french: "En attente", english: ["Pending", "On hold"], category: "meetings", difficulty: "medium" },
    
    // Project Management - Budget & Resources
    { french: "Budget", english: ["Budget"], category: "meetings", difficulty: "easy" },
    { french: "Investissement", english: ["Investment"], category: "meetings", difficulty: "medium" },
    { french: "Ressource", english: ["Resource"], category: "meetings", difficulty: "medium" },
    { french: "Coût", english: ["Cost"], category: "meetings", difficulty: "easy" },
    { french: "Estimation", english: ["Estimate"], category: "meetings", difficulty: "medium" },
    { french: "Dépense", english: ["Expense"], category: "meetings", difficulty: "medium" },
    { french: "Allocation", english: ["Allocation"], category: "meetings", difficulty: "hard" },
    { french: "Charge de travail", english: ["Workload"], category: "meetings", difficulty: "medium" },
    { french: "Capacité", english: ["Capacity"], category: "meetings", difficulty: "medium" },
    
    // Project Management - Planning & Strategy
    { french: "Plan", english: ["Plan"], category: "meetings", difficulty: "easy" },
    { french: "Stratégie", english: ["Strategy"], category: "meetings", difficulty: "medium" },
    { french: "But", english: ["Goal", "Aim"], category: "meetings", difficulty: "easy" },
    { french: "Objectif", english: ["Objective", "Goal"], category: "meetings", difficulty: "easy" },
    { french: "Portée", english: ["Scope"], category: "meetings", difficulty: "medium" },
    { french: "Étendue", english: ["Scope", "Extent"], category: "meetings", difficulty: "medium" },
    { french: "Priorité", english: ["Priority"], category: "meetings", difficulty: "easy" },
    { french: "Rapport", english: ["Report"], category: "meetings", difficulty: "easy" },
    { french: "Retour", english: ["Feedback"], category: "meetings", difficulty: "easy" },
    { french: "Commentaire", english: ["Comment", "Feedback"], category: "meetings", difficulty: "easy" },
    { french: "Plan d'action", english: ["Action plan"], category: "meetings", difficulty: "medium" },
    { french: "Initiative", english: ["Initiative"], category: "meetings", difficulty: "medium" },
    { french: "Approche", english: ["Approach"], category: "meetings", difficulty: "easy" },
    { french: "Méthodologie", english: ["Methodology"], category: "meetings", difficulty: "hard" },
    
    // Project Management - People & Roles
    { french: "Client", english: ["Client", "Customer"], category: "meetings", difficulty: "easy" },
    { french: "Partie prenante", english: ["Stakeholder"], category: "meetings", difficulty: "medium" },
    { french: "Équipe", english: ["Team"], category: "meetings", difficulty: "easy" },
    { french: "Collègue", english: ["Colleague"], category: "meetings", difficulty: "easy" },
    { french: "Responsable", english: ["Manager", "Person in charge"], category: "meetings", difficulty: "easy" },
    { french: "Manager", english: ["Manager"], category: "meetings", difficulty: "easy" },
    { french: "Chef de projet", english: ["Project manager"], category: "meetings", difficulty: "medium" },
    { french: "Participant", english: ["Participant", "Attendee"], category: "meetings", difficulty: "easy" },
    { french: "Participant à la réunion", english: ["Attendee", "Meeting participant"], category: "meetings", difficulty: "medium" },
    { french: "Président", english: ["Chair", "Chairperson"], category: "meetings", difficulty: "medium" },
    { french: "Animateur", english: ["Facilitator", "Moderator"], category: "meetings", difficulty: "medium" },
    { french: "Collaborateur", english: ["Collaborator", "Co-worker"], category: "meetings", difficulty: "medium" },
    { french: "Partenaire", english: ["Partner"], category: "meetings", difficulty: "easy" },
    
    // Project Management - Tasks & Deliverables
    { french: "Tâche", english: ["Task"], category: "meetings", difficulty: "easy" },
    { french: "Action à faire", english: ["Action item"], category: "meetings", difficulty: "medium" },
    { french: "Livrable", english: ["Deliverable"], category: "meetings", difficulty: "medium" },
    { french: "Mission", english: ["Assignment", "Mission"], category: "meetings", difficulty: "easy" },
    { french: "Responsabilité", english: ["Responsibility"], category: "meetings", difficulty: "medium" },
    { french: "Rôle", english: ["Role"], category: "meetings", difficulty: "easy" },
    { french: "Fonction", english: ["Function", "Role"], category: "meetings", difficulty: "medium" },
    { french: "Exigence", english: ["Requirement"], category: "meetings", difficulty: "medium" },
    { french: "Spécification", english: ["Specification"], category: "meetings", difficulty: "hard" },
    
    // Project Management - Issues & Solutions
    { french: "Problème", english: ["Issue", "Problem"], category: "meetings", difficulty: "easy" },
    { french: "Risque", english: ["Risk"], category: "meetings", difficulty: "medium" },
    { french: "Défi", english: ["Challenge"], category: "meetings", difficulty: "easy" },
    { french: "Solution", english: ["Solution"], category: "meetings", difficulty: "easy" },
    { french: "Contrainte", english: ["Constraint"], category: "meetings", difficulty: "medium" },
    { french: "Obstacle", english: ["Obstacle", "Barrier"], category: "meetings", difficulty: "medium" },
    { french: "Goulot d'étranglement", english: ["Bottleneck"], category: "meetings", difficulty: "hard" },
    { french: "Dépendance", english: ["Dependency"], category: "meetings", difficulty: "hard" },
    { french: "Chemin critique", english: ["Critical path"], category: "meetings", difficulty: "hard" },
    { french: "Résoudre", english: ["Resolve", "Solve"], category: "meetings", difficulty: "easy" },
    { french: "Traiter", english: ["Address", "Handle"], category: "meetings", difficulty: "medium" },
    
    // Project Management - Approval & Results
    { french: "Approbation", english: ["Approval"], category: "meetings", difficulty: "medium" },
    { french: "Approuver", english: ["Approve"], category: "meetings", difficulty: "easy" },
    { french: "Rejeter", english: ["Reject"], category: "meetings", difficulty: "easy" },
    { french: "Résultat", english: ["Outcome", "Result"], category: "meetings", difficulty: "easy" },
    { french: "Réalisation", english: ["Achievement", "Accomplishment"], category: "meetings", difficulty: "medium" },
    { french: "Réussite", english: ["Success"], category: "meetings", difficulty: "easy" },
    { french: "Succès", english: ["Success"], category: "meetings", difficulty: "easy" },
    { french: "Échec", english: ["Failure"], category: "meetings", difficulty: "easy" },
    { french: "Performance", english: ["Performance"], category: "meetings", difficulty: "easy" },
    { french: "Efficacité", english: ["Efficiency"], category: "meetings", difficulty: "medium" },
    { french: "Qualité", english: ["Quality"], category: "meetings", difficulty: "easy" },
    
    // Meeting Management
    { french: "Lever la séance", english: ["Adjourn"], category: "meetings", difficulty: "hard" },
    { french: "Ajourner", english: ["Adjourn", "Postpone"], category: "meetings", difficulty: "hard" },
    { french: "Vote", english: ["Vote"], category: "meetings", difficulty: "easy" },
    { french: "Voter", english: ["Vote", "To vote"], category: "meetings", difficulty: "easy" },
    { french: "Compte rendu", english: ["Minutes", "Report"], category: "meetings", difficulty: "medium" },
    { french: "Secrétaire", english: ["Secretary", "Note-taker"], category: "meetings", difficulty: "easy" },
    { french: "Convoquer", english: ["Summon", "Call", "Convene"], category: "meetings", difficulty: "medium" },
    { french: "Annuler", english: ["Cancel"], category: "meetings", difficulty: "easy" },
    { french: "Confirmer", english: ["Confirm"], category: "meetings", difficulty: "easy" },
    { french: "Disponibilité", english: ["Availability"], category: "meetings", difficulty: "medium" },
    { french: "Absent", english: ["Absent"], category: "meetings", difficulty: "easy" },
    { french: "Présent", english: ["Present"], category: "meetings", difficulty: "easy" },
    { french: "Invitation", english: ["Invitation"], category: "meetings", difficulty: "easy" },
    { french: "Inviter", english: ["Invite"], category: "meetings", difficulty: "easy" },

    // Small Talk
    { french: "Quoi de neuf?", english: ["What's new?"], category: "smalltalk" },
    { french: "Ça va bien", english: ["I'm fine"], category: "smalltalk" },
    { french: "Pas mal", english: ["Not bad"], category: "smalltalk" },
    { french: "Très bien", english: ["Very well"], category: "smalltalk" },
    { french: "Enchanté", english: ["Pleased to meet you"], category: "smalltalk" },
    { french: "Ravi de vous rencontrer", english: ["Happy to meet you"], category: "smalltalk" },
    { french: "À votre avis", english: ["In your opinion"], category: "smalltalk" },
    { french: "Que pensez-vous?", english: ["What do you think?"], category: "smalltalk" },
    { french: "Je pense que", english: ["I think that"], category: "smalltalk" },
    { french: "À mon avis", english: ["In my opinion"], category: "smalltalk" },
    { french: "Il me semble", english: ["It seems to me"], category: "smalltalk" },
    { french: "Vraiment?", english: ["Really?"], category: "smalltalk" },
    { french: "C'est vrai", english: ["That's true"], category: "smalltalk" },
    { french: "Exactement", english: ["Exactly"], category: "smalltalk" },
    { french: "Sans doute", english: ["No doubt"], category: "smalltalk" },
    { french: "Probablement", english: ["Probably"], category: "smalltalk" },
    { french: "Peut-être", english: ["Maybe", "Perhaps"], category: "smalltalk" },
    { french: "Je ne suis pas sûr", english: ["I'm not sure"], category: "smalltalk" },
    { french: "Aucune idée", english: ["No idea"], category: "smalltalk" },
    { french: "Comment s'appelle?", english: ["What is your name?"], category: "smalltalk" },
    { french: "Je m'appelle", english: ["My name is"], category: "smalltalk" },
    { french: "D'où venez-vous?", english: ["Where are you from?"], category: "smalltalk" },
    { french: "Je viens de", english: ["I come from"], category: "smalltalk" },
    { french: "Que faites-vous?", english: ["What do you do?"], category: "smalltalk" },
    { french: "Je suis", english: ["I am"], category: "smalltalk" },
    { french: "Vous travaillez dans?", english: ["Do you work in?"], category: "smalltalk" },
    { french: "Combien de temps?", english: ["How long?"], category: "smalltalk" },
    { french: "C'est intéressant", english: ["That's interesting"], category: "smalltalk" },
    { french: "C'est ennuyant", english: ["That's boring"], category: "smalltalk" },
    { french: "C'est fascinant", english: ["That's fascinating"], category: "smalltalk" },
    { french: "J'adore", english: ["I love"], category: "smalltalk" },
    { french: "J'aime bien", english: ["I like"], category: "smalltalk" },
    { french: "Je n'aime pas", english: ["I don't like"], category: "smalltalk" },
    { french: "Je déteste", english: ["I hate"], category: "smalltalk" },
    { french: "Vous avez raison", english: ["You're right"], category: "smalltalk" },
    { french: "Vous avez tort", english: ["You're wrong"], category: "smalltalk" },
    { french: "À vous de jouer", english: ["Your turn"], category: "smalltalk" },
    { french: "Je comprends", english: ["I understand"], category: "smalltalk" },
    { french: "Je ne comprends pas", english: ["I don't understand"], category: "smalltalk" },
    { french: "Pouvez-vous répéter?", english: ["Can you repeat?"], category: "smalltalk" },
    { french: "Parlez plus lentement", english: ["Speak more slowly"], category: "smalltalk" },
    { french: "Que signifie?", english: ["What does it mean?"], category: "smalltalk" },
    { french: "Comment dit-on?", english: ["How do you say?"], category: "smalltalk" },
    { french: "Puis-je vous aider?", english: ["Can I help you?"], category: "smalltalk" },
    { french: "Avez-vous besoin d'aide?", english: ["Do you need help?"], category: "smalltalk" },
    
    // Greetings & Introductions
    { french: "Comment allez-vous?", english: ["How are you doing?"], category: "smalltalk", difficulty: "easy" },
    { french: "Quoi de neuf?", english: ["What's up?"], category: "smalltalk", difficulty: "easy" },
    { french: "Ravi de vous rencontrer", english: ["Nice to meet you"], category: "smalltalk", difficulty: "easy" },
    { french: "Enchanté de vous rencontrer", english: ["Pleased to meet you"], category: "smalltalk", difficulty: "medium" },
    { french: "Ça fait longtemps", english: ["Long time no see"], category: "smalltalk", difficulty: "medium" },
    { french: "Comment ça va?", english: ["How's it going?"], category: "smalltalk", difficulty: "easy" },
    { french: "Qu'est-ce que tu deviens?", english: ["What have you been up to?"], category: "smalltalk", difficulty: "medium" },
    { french: "Beau temps aujourd'hui", english: ["Nice weather today"], category: "smalltalk", difficulty: "easy" },
    { french: "Je suis [nom]", english: ["I'm [name]"], category: "smalltalk", difficulty: "easy" },
    { french: "D'où êtes-vous?", english: ["Where are you from?"], category: "smalltalk", difficulty: "easy" },
    { french: "Que faites-vous dans la vie?", english: ["What do you do?"], category: "smalltalk", difficulty: "medium" },
    
    // Weather
    { french: "Temps", english: ["Weather"], category: "smalltalk", difficulty: "easy" },
    { french: "Ensoleillé", english: ["Sunny"], category: "smalltalk", difficulty: "easy" },
    { french: "Nuageux", english: ["Cloudy"], category: "smalltalk", difficulty: "medium" },
    { french: "Pluvieux", english: ["Rainy"], category: "smalltalk", difficulty: "medium" },
    { french: "Enneigé", english: ["Snowy"], category: "smalltalk", difficulty: "medium" },
    { french: "Venteux", english: ["Windy"], category: "smalltalk", difficulty: "medium" },
    { french: "Chaud", english: ["Hot"], category: "smalltalk", difficulty: "easy" },
    { french: "Tiède", english: ["Warm"], category: "smalltalk", difficulty: "medium" },
    { french: "Froid", english: ["Cold"], category: "smalltalk", difficulty: "easy" },
    { french: "Frais", english: ["Chilly", "Cool"], category: "smalltalk", difficulty: "medium" },
    { french: "Glacial", english: ["Freezing"], category: "smalltalk", difficulty: "medium" },
    { french: "Température", english: ["Temperature"], category: "smalltalk", difficulty: "medium" },
    { french: "Prévisions", english: ["Forecast"], category: "smalltalk", difficulty: "hard" },
    { french: "Tempête", english: ["Storm"], category: "smalltalk", difficulty: "medium" },
    { french: "Belle journée", english: ["Beautiful day"], category: "smalltalk", difficulty: "easy" },
    { french: "Mauvais temps", english: ["Terrible weather"], category: "smalltalk", difficulty: "easy" },
    
    // Hobbies & Interests
    { french: "Passe-temps", english: ["Hobby"], category: "smalltalk", difficulty: "medium" },
    { french: "Intérêt", english: ["Interest"], category: "smalltalk", difficulty: "medium" },
    { french: "Temps libre", english: ["Free time"], category: "smalltalk", difficulty: "medium" },
    { french: "Loisir", english: ["Leisure"], category: "smalltalk", difficulty: "medium" },
    { french: "Apprécier", english: ["Enjoy"], category: "smalltalk", difficulty: "medium" },
    { french: "Aimer", english: ["Like"], category: "smalltalk", difficulty: "easy" },
    { french: "Adorer", english: ["Love"], category: "smalltalk", difficulty: "easy" },
    { french: "Détester", english: ["Hate"], category: "smalltalk", difficulty: "easy" },
    { french: "Préférer", english: ["Prefer"], category: "smalltalk", difficulty: "medium" },
    { french: "Lecture", english: ["Reading"], category: "smalltalk", difficulty: "medium" },
    { french: "Sport", english: ["Sports"], category: "smalltalk", difficulty: "easy" },
    { french: "Musique", english: ["Music"], category: "smalltalk", difficulty: "easy" },
    { french: "Films", english: ["Movies"], category: "smalltalk", difficulty: "easy" },
    { french: "Émissions de télévision", english: ["TV shows"], category: "smalltalk", difficulty: "medium" },
    { french: "Voyage", english: ["Travel"], category: "smalltalk", difficulty: "medium" },
    { french: "Cuisine", english: ["Cooking"], category: "smalltalk", difficulty: "medium" },
    { french: "Jeux vidéo", english: ["Gaming"], category: "smalltalk", difficulty: "medium" },
    { french: "Photographie", english: ["Photography"], category: "smalltalk", difficulty: "hard" },
    { french: "Peinture", english: ["Painting"], category: "smalltalk", difficulty: "medium" },
    { french: "Exercice", english: ["Exercise"], category: "smalltalk", difficulty: "medium" },
    { french: "Fitness", english: ["Fitness"], category: "smalltalk", difficulty: "medium" },
    
    // Family & Personal
    { french: "Famille", english: ["Family"], category: "smalltalk", difficulty: "easy" },
    { french: "Parents", english: ["Parents"], category: "smalltalk", difficulty: "easy" },
    { french: "Mère", english: ["Mother"], category: "smalltalk", difficulty: "easy" },
    { french: "Père", english: ["Father"], category: "smalltalk", difficulty: "easy" },
    { french: "Frère", english: ["Brother"], category: "smalltalk", difficulty: "easy" },
    { french: "Sœur", english: ["Sister"], category: "smalltalk", difficulty: "easy" },
    { french: "Enfants", english: ["Children"], category: "smalltalk", difficulty: "easy" },
    { french: "Gosses", english: ["Kids"], category: "smalltalk", difficulty: "easy" },
    { french: "Fils", english: ["Son"], category: "smalltalk", difficulty: "easy" },
    { french: "Fille", english: ["Daughter"], category: "smalltalk", difficulty: "easy" },
    { french: "Marié", english: ["Married"], category: "smalltalk", difficulty: "easy" },
    { french: "Célibataire", english: ["Single"], category: "smalltalk", difficulty: "medium" },
    { french: "Partenaire", english: ["Partner"], category: "smalltalk", difficulty: "medium" },
    { french: "Conjoint", english: ["Spouse"], category: "smalltalk", difficulty: "hard" },
    { french: "Animal de compagnie", english: ["Pet"], category: "smalltalk", difficulty: "medium" },
    { french: "Chien", english: ["Dog"], category: "smalltalk", difficulty: "easy" },
    { french: "Chat", english: ["Cat"], category: "smalltalk", difficulty: "easy" },
    
    // Work & Studies
    { french: "Emploi", english: ["Job"], category: "smalltalk", difficulty: "easy" },
    { french: "Travail", english: ["Work"], category: "smalltalk", difficulty: "easy" },
    { french: "Carrière", english: ["Career"], category: "smalltalk", difficulty: "medium" },
    { french: "Étudier", english: ["Study"], category: "smalltalk", difficulty: "easy" },
    { french: "Étudiant", english: ["Student"], category: "smalltalk", difficulty: "easy" },
    { french: "École", english: ["School"], category: "smalltalk", difficulty: "easy" },
    { french: "Université", english: ["University"], category: "smalltalk", difficulty: "medium" },
    { french: "Spécialisation", english: ["Major"], category: "smalltalk", difficulty: "hard" },
    { french: "Diplôme", english: ["Degree"], category: "smalltalk", difficulty: "medium" },
    { french: "Occupé", english: ["Busy"], category: "smalltalk", difficulty: "easy" },
    { french: "Stressant", english: ["Stressful"], category: "smalltalk", difficulty: "medium" },
    { french: "Intéressant", english: ["Interesting"], category: "smalltalk", difficulty: "easy" },
    { french: "Ennuyeux", english: ["Boring"], category: "smalltalk", difficulty: "easy" },
    
    // Food & Drink
    { french: "Déjeuner", english: ["Lunch"], category: "smalltalk", difficulty: "easy" },
    { french: "Dîner", english: ["Dinner"], category: "smalltalk", difficulty: "easy" },
    { french: "Petit déjeuner", english: ["Breakfast"], category: "smalltalk", difficulty: "medium" },
    { french: "Collation", english: ["Snack"], category: "smalltalk", difficulty: "medium" },
    { french: "Café", english: ["Coffee"], category: "smalltalk", difficulty: "easy" },
    { french: "Thé", english: ["Tea"], category: "smalltalk", difficulty: "easy" },
    { french: "Boisson", english: ["Drink"], category: "smalltalk", difficulty: "easy" },
    { french: "Assoiffé", english: ["Thirsty"], category: "smalltalk", difficulty: "medium" },
    { french: "Affamé", english: ["Hungry"], category: "smalltalk", difficulty: "medium" },
    { french: "Délicieux", english: ["Delicious"], category: "smalltalk", difficulty: "medium" },
    { french: "Savoureux", english: ["Tasty"], category: "smalltalk", difficulty: "medium" },
    { french: "Restaurant", english: ["Restaurant"], category: "smalltalk", difficulty: "easy" },
    { french: "Cuisine", english: ["Cuisine"], category: "smalltalk", difficulty: "medium" },
    { french: "Plat préféré", english: ["Favorite food"], category: "smalltalk", difficulty: "medium" },
    
    // Opinions & Feelings
    { french: "Penser", english: ["Think"], category: "smalltalk", difficulty: "easy" },
    { french: "Croire", english: ["Believe"], category: "smalltalk", difficulty: "medium" },
    { french: "Opinion", english: ["Opinion"], category: "smalltalk", difficulty: "medium" },
    { french: "Ressentir", english: ["Feel"], category: "smalltalk", difficulty: "medium" },
    { french: "Heureux", english: ["Happy"], category: "smalltalk", difficulty: "easy" },
    { french: "Triste", english: ["Sad"], category: "smalltalk", difficulty: "easy" },
    { french: "Fatigué", english: ["Tired"], category: "smalltalk", difficulty: "easy" },
    { french: "Excité", english: ["Excited"], category: "smalltalk", difficulty: "medium" },
    { french: "Ennuyé", english: ["Bored"], category: "smalltalk", difficulty: "easy" },
    { french: "Incroyable", english: ["Amazing"], category: "smalltalk", difficulty: "medium" },
    { french: "Terrible", english: ["Terrible"], category: "smalltalk", difficulty: "easy" },
    { french: "Sympa", english: ["Nice"], category: "smalltalk", difficulty: "easy" },
    { french: "Bon", english: ["Good"], category: "smalltalk", difficulty: "easy" },
    { french: "Mauvais", english: ["Bad"], category: "smalltalk", difficulty: "easy" },
    { french: "Super", english: ["Great"], category: "smalltalk", difficulty: "easy" },
    { french: "Merveilleux", english: ["Wonderful"], category: "smalltalk", difficulty: "medium" },
    
    // Social Expressions
    { french: "Au fait", english: ["By the way"], category: "smalltalk", difficulty: "hard" },
    { french: "Tu sais", english: ["You know"], category: "smalltalk", difficulty: "hard" },
    { french: "Je veux dire", english: ["I mean"], category: "smalltalk", difficulty: "hard" },
    { french: "En fait", english: ["Actually"], category: "smalltalk", difficulty: "hard" },
    { french: "Vraiment?", english: ["Really?"], category: "smalltalk", difficulty: "easy" },
    { french: "Sérieusement?", english: ["Seriously?"], category: "smalltalk", difficulty: "medium" },
    { french: "C'est intéressant", english: ["That's interesting"], category: "smalltalk", difficulty: "medium" },
    { french: "C'est cool", english: ["That's cool"], category: "smalltalk", difficulty: "easy" },
    { french: "C'est génial", english: ["That's great"], category: "smalltalk", difficulty: "easy" },
    { french: "Je suis d'accord", english: ["I agree"], category: "smalltalk", difficulty: "medium" },
    { french: "Je ne suis pas d'accord", english: ["I disagree"], category: "smalltalk", difficulty: "medium" },
    { french: "Moi aussi", english: ["Me too"], category: "smalltalk", difficulty: "easy" },
    { french: "Moi non plus", english: ["Me neither"], category: "smalltalk", difficulty: "hard" },
    { french: "Pareil", english: ["Same here"], category: "smalltalk", difficulty: "hard" },
    
    // Plans & Invitations
    { french: "Projets", english: ["Plans"], category: "smalltalk", difficulty: "medium" },
    { french: "Week-end", english: ["Weekend"], category: "smalltalk", difficulty: "easy" },
    { french: "Libre", english: ["Free"], category: "smalltalk", difficulty: "easy" },
    { french: "Occupé", english: ["Busy"], category: "smalltalk", difficulty: "easy" },
    { french: "Disponible", english: ["Available"], category: "smalltalk", difficulty: "medium" },
    { french: "Peut-être", english: ["Maybe"], category: "smalltalk", difficulty: "easy" },
    { french: "Voulez-vous?", english: ["Would you like to?"], category: "smalltalk", difficulty: "medium" },
    { french: "Tu veux?", english: ["Want to?"], category: "smalltalk", difficulty: "easy" },
    { french: "Allons-y", english: ["Let's"], category: "smalltalk", difficulty: "easy" },
    { french: "Que dirais-tu de?", english: ["How about?"], category: "smalltalk", difficulty: "medium" },
    { french: "Ça me va", english: ["Sounds good"], category: "smalltalk", difficulty: "medium" },
    { french: "J'adorerais", english: ["I'd love to"], category: "smalltalk", difficulty: "medium" },
    { french: "Désolé, je ne peux pas", english: ["Sorry I can't"], category: "smalltalk", difficulty: "medium" },
    { french: "Une autre fois", english: ["Another time"], category: "smalltalk", difficulty: "medium" },

    // Presentations & Public Speaking
    // Presentation Structure
    { french: "Audience", english: ["Audience"], category: "presentations", difficulty: "medium" },
    { french: "Orateur", english: ["Speaker"], category: "presentations", difficulty: "medium" },
    { french: "Conférencier", english: ["Lecturer"], category: "presentations", difficulty: "medium" },
    { french: "Titre", english: ["Title"], category: "presentations", difficulty: "easy" },
    { french: "Introduction", english: ["Introduction"], category: "presentations", difficulty: "easy" },
    { french: "Conclusion", english: ["Conclusion"], category: "presentations", difficulty: "easy" },
    { french: "Résumé", english: ["Summary"], category: "presentations", difficulty: "medium" },
    { french: "Ouverture", english: ["Opening"], category: "presentations", difficulty: "easy" },
    { french: "Clôture", english: ["Closing"], category: "presentations", difficulty: "medium" },
    { french: "Corps", english: ["Body"], category: "presentations", difficulty: "easy" },
    { french: "Points principaux", english: ["Main points"], category: "presentations", difficulty: "medium" },
    { french: "Plan", english: ["Outline"], category: "presentations", difficulty: "medium" },
    { french: "Vue d'ensemble", english: ["Overview"], category: "presentations", difficulty: "medium" },
    { french: "Ordre du jour", english: ["Agenda"], category: "presentations", difficulty: "medium" },
    { french: "Sujet", english: ["Topic", "Subject"], category: "presentations", difficulty: "easy" },
    { french: "Thème", english: ["Theme"], category: "presentations", difficulty: "medium" },
    
    // Content & Organization
    { french: "Point clé", english: ["Key point"], category: "presentations", difficulty: "medium" },
    { french: "Idée principale", english: ["Main idea"], category: "presentations", difficulty: "medium" },
    { french: "Argument", english: ["Argument"], category: "presentations", difficulty: "medium" },
    { french: "Preuve", english: ["Evidence"], category: "presentations", difficulty: "medium" },
    { french: "Détail", english: ["Detail"], category: "presentations", difficulty: "easy" },
    { french: "Exemple", english: ["Example"], category: "presentations", difficulty: "easy" },
    { french: "Cas d'étude", english: ["Case study"], category: "presentations", difficulty: "hard" },
    { french: "Statistiques", english: ["Statistics"], category: "presentations", difficulty: "medium" },
    { french: "Données", english: ["Data"], category: "presentations", difficulty: "medium" },
    { french: "Faits", english: ["Facts"], category: "presentations", difficulty: "easy" },
    { french: "Référence", english: ["Reference"], category: "presentations", difficulty: "medium" },
    { french: "Source", english: ["Source"], category: "presentations", difficulty: "medium" },
    { french: "Citation", english: ["Quote", "Citation"], category: "presentations", difficulty: "medium" },
    { french: "Démonstration", english: ["Demo", "Demonstration"], category: "presentations", difficulty: "medium" },
    { french: "Témoignage", english: ["Testimonial"], category: "presentations", difficulty: "hard" },
    
    // Delivery & Speaking
    { french: "Présenter", english: ["Present", "Deliver"], category: "presentations", difficulty: "easy" },
    { french: "Parler", english: ["Speak"], category: "presentations", difficulty: "easy" },
    { french: "Voix", english: ["Voice"], category: "presentations", difficulty: "easy" },
    { french: "Ton", english: ["Tone"], category: "presentations", difficulty: "medium" },
    { french: "Débit", english: ["Pace"], category: "presentations", difficulty: "medium" },
    { french: "Rythme", english: ["Rhythm"], category: "presentations", difficulty: "medium" },
    { french: "Pause", english: ["Pause"], category: "presentations", difficulty: "easy" },
    { french: "Emphase", english: ["Emphasis"], category: "presentations", difficulty: "hard" },
    { french: "Volume", english: ["Volume"], category: "presentations", difficulty: "easy" },
    { french: "Prononciation", english: ["Pronunciation"], category: "presentations", difficulty: "medium" },
    { french: "Articulation", english: ["Articulation"], category: "presentations", difficulty: "hard" },
    { french: "Clarté", english: ["Clarity"], category: "presentations", difficulty: "medium" },
    { french: "Aisance", english: ["Fluency"], category: "presentations", difficulty: "medium" },
    { french: "Confiance", english: ["Confidence"], category: "presentations", difficulty: "medium" },
    { french: "Contact visuel", english: ["Eye contact"], category: "presentations", difficulty: "medium" },
    { french: "Langage corporel", english: ["Body language"], category: "presentations", difficulty: "medium" },
    { french: "Geste", english: ["Gesture"], category: "presentations", difficulty: "easy" },
    { french: "Posture", english: ["Posture", "Stance"], category: "presentations", difficulty: "medium" },
    { french: "Intonation", english: ["Intonation"], category: "presentations", difficulty: "hard" },
    { french: "Accent", english: ["Accent"], category: "presentations", difficulty: "medium" },
    { french: "Discours", english: ["Speech", "Lecture"], category: "presentations", difficulty: "medium" },
    
    // Visual Aids
    { french: "Diapositive", english: ["Slide"], category: "presentations", difficulty: "easy" },
    { french: "PowerPoint", english: ["PowerPoint"], category: "presentations", difficulty: "easy" },
    { french: "Projecteur", english: ["Projector"], category: "presentations", difficulty: "medium" },
    { french: "Écran", english: ["Screen"], category: "presentations", difficulty: "easy" },
    { french: "Document distribué", english: ["Handout"], category: "presentations", difficulty: "medium" },
    { french: "Aide visuelle", english: ["Visual aid"], category: "presentations", difficulty: "medium" },
    { french: "Graphique", english: ["Chart", "Graph"], category: "presentations", difficulty: "medium" },
    { french: "Tableau", english: ["Table"], category: "presentations", difficulty: "easy" },
    { french: "Diagramme", english: ["Diagram"], category: "presentations", difficulty: "medium" },
    { french: "Image", english: ["Image"], category: "presentations", difficulty: "easy" },
    { french: "Photo", english: ["Photo"], category: "presentations", difficulty: "easy" },
    { french: "Vidéo", english: ["Video"], category: "presentations", difficulty: "easy" },
    { french: "Animation", english: ["Animation"], category: "presentations", difficulty: "medium" },
    { french: "Puce", english: ["Bullet point"], category: "presentations", difficulty: "medium" },
    { french: "Transition", english: ["Transition"], category: "presentations", difficulty: "medium" },
    { french: "Son", english: ["Sound"], category: "presentations", difficulty: "easy" },
    { french: "Audio", english: ["Audio"], category: "presentations", difficulty: "easy" },
    { french: "Musique de fond", english: ["Background music"], category: "presentations", difficulty: "hard" },
    
    // Audience Engagement
    { french: "Auditeurs", english: ["Listeners"], category: "presentations", difficulty: "medium" },
    { french: "Participants", english: ["Attendees"], category: "presentations", difficulty: "medium" },
    { french: "Question", english: ["Question"], category: "presentations", difficulty: "easy" },
    { french: "Réponse", english: ["Answer"], category: "presentations", difficulty: "easy" },
    { french: "Session de questions-réponses", english: ["Q&A session"], category: "presentations", difficulty: "medium" },
    { french: "Discussion", english: ["Discussion"], category: "presentations", difficulty: "medium" },
    { french: "Interaction", english: ["Interaction"], category: "presentations", difficulty: "medium" },
    { french: "Engagement", english: ["Engagement"], category: "presentations", difficulty: "hard" },
    { french: "Attention", english: ["Attention"], category: "presentations", difficulty: "easy" },
    { french: "Intérêt", english: ["Interest"], category: "presentations", difficulty: "easy" },
    { french: "Retour d'information", english: ["Feedback"], category: "presentations", difficulty: "medium" },
    { french: "Réaction", english: ["Response", "Reaction"], category: "presentations", difficulty: "medium" },
    { french: "Des commentaires?", english: ["Any comments?"], category: "presentations", difficulty: "medium" },
    { french: "Applaudissements", english: ["Applause"], category: "presentations", difficulty: "medium" },
    { french: "Évaluation", english: ["Evaluation"], category: "presentations", difficulty: "medium" },
    { french: "Classement", english: ["Rating"], category: "presentations", difficulty: "medium" },
    
    // Technical
    { french: "Microphone", english: ["Microphone", "Mic"], category: "presentations", difficulty: "easy" },
    { french: "Micro", english: ["Mic"], category: "presentations", difficulty: "easy" },
    { french: "Télécommande", english: ["Clicker", "Remote"], category: "presentations", difficulty: "medium" },
    { french: "Pointeur laser", english: ["Laser pointer"], category: "presentations", difficulty: "hard" },
    { french: "Problème technique", english: ["Technical issue"], category: "presentations", difficulty: "medium" },
    { french: "Connexion", english: ["Connection"], category: "presentations", difficulty: "easy" },
    
    // Professional Skills
    { french: "Répéter", english: ["Rehearse"], category: "presentations", difficulty: "medium" },
    { french: "Pratiquer", english: ["Practice"], category: "presentations", difficulty: "easy" },
    { french: "Préparer", english: ["Prepare"], category: "presentations", difficulty: "easy" },
    { french: "Script", english: ["Script"], category: "presentations", difficulty: "medium" },
    { french: "Notes", english: ["Notes"], category: "presentations", difficulty: "easy" },
    { french: "Fiches", english: ["Cue cards"], category: "presentations", difficulty: "hard" },
    { french: "Timing", english: ["Timing"], category: "presentations", difficulty: "medium" },
    { french: "Gestion du temps", english: ["Time management"], category: "presentations", difficulty: "medium" },
    { french: "Professionnalisme", english: ["Professionalism"], category: "presentations", difficulty: "hard" },
    { french: "Répétition", english: ["Rehearsal"], category: "presentations", difficulty: "medium" },
    { french: "Préparation", english: ["Preparation"], category: "presentations", difficulty: "medium" },
    { french: "Compétence", english: ["Skill"], category: "presentations", difficulty: "medium" },
    
    // Challenges
    { french: "Nerveux", english: ["Nervous"], category: "presentations", difficulty: "easy" },
    { french: "Anxiété", english: ["Anxiety"], category: "presentations", difficulty: "medium" },
    { french: "Trac", english: ["Stage fright"], category: "presentations", difficulty: "hard" },
    { french: "Stress", english: ["Stress"], category: "presentations", difficulty: "easy" },
    { french: "Relaxer", english: ["Relax"], category: "presentations", difficulty: "easy" },
    { french: "Respirer", english: ["Breathe"], category: "presentations", difficulty: "easy" },
    { french: "Calme", english: ["Calm"], category: "presentations", difficulty: "easy" },
    { french: "Confiant", english: ["Confident"], category: "presentations", difficulty: "medium" },
    { french: "À l'aise", english: ["Comfortable"], category: "presentations", difficulty: "medium" },
    { french: "Erreur", english: ["Mistake"], category: "presentations", difficulty: "easy" },
    { french: "Oublier", english: ["Forget"], category: "presentations", difficulty: "easy" },
    { french: "Trou de mémoire", english: ["Blank"], category: "presentations", difficulty: "medium" },
    { french: "Improviser", english: ["Improvise"], category: "presentations", difficulty: "hard" },
    { french: "Respiration", english: ["Breathing"], category: "presentations", difficulty: "medium" },
    
    // Common Expressions
    { french: "Permettez-moi de commencer", english: ["Let me start"], category: "presentations", difficulty: "medium" },
    { french: "Tout d'abord", english: ["First of all"], category: "presentations", difficulty: "easy" },
    { french: "Comme vous pouvez voir", english: ["As you can see"], category: "presentations", difficulty: "medium" },
    { french: "Par exemple", english: ["For example"], category: "presentations", difficulty: "easy" },
    { french: "En conclusion", english: ["In conclusion"], category: "presentations", difficulty: "medium" },
    { french: "Pour résumer", english: ["To sum up"], category: "presentations", difficulty: "medium" },
    { french: "Des questions?", english: ["Any questions?"], category: "presentations", difficulty: "easy" },
    { french: "Merci pour votre attention", english: ["Thank you for your attention"], category: "presentations", difficulty: "medium" },
    { french: "Passons à", english: ["Moving on"], category: "presentations", difficulty: "medium" },
    { french: "D'autre part", english: ["On the other hand"], category: "presentations", difficulty: "medium" },

    // Engineering
    { french: "Ingénierie", english: ["Engineering"], category: "engineering" },
    { french: "Ingénieur", english: ["Engineer"], category: "engineering" },
    { french: "Structure", english: ["Structure"], category: "engineering" },
    { french: "Infrastructure", english: ["Infrastructure"], category: "engineering" },
    { french: "Design", english: ["Design"], category: "engineering" },
    { french: "Conception", english: ["Design", "Conception"], category: "engineering" },
    { french: "Construction", english: ["Construction"], category: "engineering" },
    { french: "Matériau", english: ["Material"], category: "engineering" },
    { french: "Acier", english: ["Steel"], category: "engineering" },
    { french: "Béton", english: ["Concrete"], category: "engineering" },
    { french: "Brique", english: ["Brick"], category: "engineering" },
    { french: "Bois", english: ["Wood"], category: "engineering" },
    { french: "Verre", english: ["Glass"], category: "engineering" },
    { french: "Plastique", english: ["Plastic"], category: "engineering" },
    { french: "Composite", english: ["Composite"], category: "engineering" },
    { french: "Fondation", english: ["Foundation"], category: "engineering" },
    { french: "Mur", english: ["Wall"], category: "engineering" },
    { french: "Toit", english: ["Roof"], category: "engineering" },
    { french: "Fenêtre", english: ["Window"], category: "engineering" },
    { french: "Porte", english: ["Door"], category: "engineering" },
    { french: "Machine", english: ["Machine"], category: "engineering" },
    { french: "Moteur", english: ["Engine", "Motor"], category: "engineering" },
    { french: "Turbine", english: ["Turbine"], category: "engineering" },
    { french: "Électricité", english: ["Electricity"], category: "engineering" },
    { french: "Tension", english: ["Voltage"], category: "engineering" },
    { french: "Courant", english: ["Current"], category: "engineering" },
    { french: "Puissance", english: ["Power"], category: "engineering" },
    { french: "Circuit", english: ["Circuit"], category: "engineering" },
    { french: "Relais", english: ["Relay"], category: "engineering" },
    { french: "Interrupteur", english: ["Switch"], category: "engineering" },
    { french: "Capteur", english: ["Sensor"], category: "engineering" },
    { french: "Jauge", english: ["Gauge"], category: "engineering" },
    { french: "Manomètre", english: ["Pressure gauge"], category: "engineering" },
    { french: "Thermomètre", english: ["Thermometer"], category: "engineering" },
    { french: "Calibrage", english: ["Calibration"], category: "engineering" },
    { french: "Maintenance", english: ["Maintenance"], category: "engineering" },
    { french: "Réparation", english: ["Repair"], category: "engineering" },
    { french: "Entretien", english: ["Maintenance"], category: "engineering" },
    { french: "Inspection", english: ["Inspection"], category: "engineering" },
    { french: "Test", english: ["Test"], category: "engineering" },
    { french: "Essai", english: ["Trial", "Test"], category: "engineering" },
    { french: "Performance", english: ["Performance"], category: "engineering" },
    { french: "Spécification", english: ["Specification"], category: "engineering" },
    { french: "Tolérance", english: ["Tolerance"], category: "engineering" },
    { french: "Précision", english: ["Precision"], category: "engineering" },
    { french: "Qualité", english: ["Quality"], category: "engineering" },
    { french: "Défaut", english: ["Defect"], category: "engineering" },
    { french: "Fiabilité", english: ["Reliability"], category: "engineering" },
    { french: "Sécurité", english: ["Safety"], category: "engineering" },
    { french: "Risque", english: ["Risk"], category: "engineering" },
    { french: "Norme", english: ["Standard"], category: "engineering" },
    { french: "Certification", english: ["Certification"], category: "engineering" },
    { french: "Conformité", english: ["Compliance"], category: "engineering" },
    { french: "Prototypage", english: ["Prototyping"], category: "engineering" },
    { french: "Prototype", english: ["Prototype"], category: "engineering" },
    { french: "Production", english: ["Production"], category: "engineering" },
    { french: "Chaîne d'assemblage", english: ["Assembly line"], category: "engineering" },
    { french: "Équipement", english: ["Equipment"], category: "engineering" },
    
    // Structures & Construction
    { french: "Plan", english: ["Blueprint", "Plan", "Drawing"], category: "engineering", difficulty: "easy" },
    { french: "Dessin", english: ["Drawing", "Sketch"], category: "engineering", difficulty: "easy" },
    { french: "Coupe transversale", english: ["Cross-section"], category: "engineering", difficulty: "medium" },
    { french: "Élévation", english: ["Elevation"], category: "engineering", difficulty: "medium" },
    { french: "Disposition", english: ["Layout"], category: "engineering", difficulty: "easy" },
    { french: "Charpente", english: ["Framework"], category: "engineering", difficulty: "medium" },
    { french: "Poutre", english: ["Beam"], category: "engineering", difficulty: "medium" },
    { french: "Colonne", english: ["Column"], category: "engineering", difficulty: "medium" },
    { french: "Ferme", english: ["Truss"], category: "engineering", difficulty: "hard" },
    { french: "Arc", english: ["Arch"], category: "engineering", difficulty: "easy" },
    { french: "Support", english: ["Support"], category: "engineering", difficulty: "easy" },
    { french: "Palier", english: ["Bearing", "Landing"], category: "engineering", difficulty: "medium" },
    { french: "Porteur", english: ["Load-bearing"], category: "engineering", difficulty: "medium" },
    { french: "Semelle", english: ["Footing"], category: "engineering", difficulty: "medium" },
    { french: "Renforcement", english: ["Reinforcement"], category: "engineering", difficulty: "medium" },
    { french: "Armature", english: ["Rebar", "Reinforcement"], category: "engineering", difficulty: "hard" },
    
    // Materials & Properties
    { french: "Résistance", english: ["Strength"], category: "engineering", difficulty: "medium" },
    { french: "Durabilité", english: ["Durability"], category: "engineering", difficulty: "medium" },
    { french: "Flexibilité", english: ["Flexibility"], category: "engineering", difficulty: "medium" },
    { french: "Rigidité", english: ["Rigidity"], category: "engineering", difficulty: "medium" },
    { french: "Élasticité", english: ["Elasticity"], category: "engineering", difficulty: "hard" },
    { french: "Contrainte", english: ["Stress"], category: "engineering", difficulty: "medium" },
    { french: "Déformation", english: ["Strain"], category: "engineering", difficulty: "hard" },
    { french: "Compression", english: ["Compression"], category: "engineering", difficulty: "medium" },
    { french: "Traction", english: ["Tension"], category: "engineering", difficulty: "medium" },
    { french: "Cisaillement", english: ["Shear"], category: "engineering", difficulty: "hard" },
    { french: "Flexion", english: ["Bending"], category: "engineering", difficulty: "medium" },
    { french: "Torsion", english: ["Torsion"], category: "engineering", difficulty: "hard" },
    { french: "Fatigue", english: ["Fatigue"], category: "engineering", difficulty: "medium" },
    { french: "Fracture", english: ["Fracture"], category: "engineering", difficulty: "medium" },
    { french: "Corrosion", english: ["Corrosion"], category: "engineering", difficulty: "medium" },
    { french: "Altération", english: ["Weathering"], category: "engineering", difficulty: "medium" },
    
    // Mechanical
    { french: "Engrenage", english: ["Gear"], category: "engineering", difficulty: "medium" },
    { french: "Arbre", english: ["Shaft"], category: "engineering", difficulty: "medium" },
    { french: "Roulement", english: ["Bearing"], category: "engineering", difficulty: "medium" },
    { french: "Bague", english: ["Bushing"], category: "engineering", difficulty: "hard" },
    { french: "Ressort", english: ["Spring"], category: "engineering", difficulty: "easy" },
    { french: "Levier", english: ["Lever"], category: "engineering", difficulty: "easy" },
    { french: "Poulie", english: ["Pulley"], category: "engineering", difficulty: "medium" },
    { french: "Came", english: ["Cam"], category: "engineering", difficulty: "hard" },
    { french: "Courroie", english: ["Belt"], category: "engineering", difficulty: "medium" },
    { french: "Chaîne", english: ["Chain"], category: "engineering", difficulty: "easy" },
    { french: "Accouplement", english: ["Coupling"], category: "engineering", difficulty: "hard" },
    { french: "Joint", english: ["Joint"], category: "engineering", difficulty: "easy" },
    { french: "Vanne", english: ["Valve"], category: "engineering", difficulty: "medium" },
    { french: "Pompe", english: ["Pump"], category: "engineering", difficulty: "easy" },
    { french: "Compresseur", english: ["Compressor"], category: "engineering", difficulty: "medium" },
    { french: "Piston", english: ["Piston"], category: "engineering", difficulty: "medium" },
    { french: "Cylindre", english: ["Cylinder"], category: "engineering", difficulty: "easy" },
    
    // Electrical
    { french: "Fil", english: ["Wire"], category: "engineering", difficulty: "easy" },
    { french: "Câble", english: ["Cable"], category: "engineering", difficulty: "easy" },
    { french: "Conducteur", english: ["Conductor"], category: "engineering", difficulty: "medium" },
    { french: "Isolation", english: ["Insulation"], category: "engineering", difficulty: "medium" },
    { french: "Résistance", english: ["Resistor"], category: "engineering", difficulty: "medium" },
    { french: "Condensateur", english: ["Capacitor"], category: "engineering", difficulty: "hard" },
    { french: "Transformateur", english: ["Transformer"], category: "engineering", difficulty: "medium" },
    { french: "Générateur", english: ["Generator"], category: "engineering", difficulty: "medium" },
    { french: "Batterie", english: ["Battery"], category: "engineering", difficulty: "easy" },
    { french: "Fusible", english: ["Fuse"], category: "engineering", difficulty: "medium" },
    { french: "Disjoncteur", english: ["Breaker", "Circuit breaker"], category: "engineering", difficulty: "medium" },
    { french: "Terre", english: ["Ground", "Earth"], category: "engineering", difficulty: "easy" },
    { french: "Phase", english: ["Phase"], category: "engineering", difficulty: "medium" },
    { french: "Fréquence", english: ["Frequency"], category: "engineering", difficulty: "medium" },
    { french: "Ampère", english: ["Ampere", "Amp"], category: "engineering", difficulty: "easy" },
    { french: "Volt", english: ["Volt"], category: "engineering", difficulty: "easy" },
    { french: "Watt", english: ["Watt"], category: "engineering", difficulty: "easy" },
    { french: "Ohm", english: ["Ohm"], category: "engineering", difficulty: "easy" },
    
    // Processes
    { french: "Soudage", english: ["Welding"], category: "engineering", difficulty: "medium" },
    { french: "Brasage tendre", english: ["Soldering"], category: "engineering", difficulty: "hard" },
    { french: "Brasage", english: ["Brazing"], category: "engineering", difficulty: "hard" },
    { french: "Découpe", english: ["Cutting"], category: "engineering", difficulty: "easy" },
    { french: "Usinage", english: ["Machining"], category: "engineering", difficulty: "medium" },
    { french: "Tournage", english: ["Turning"], category: "engineering", difficulty: "medium" },
    { french: "Fraisage", english: ["Milling"], category: "engineering", difficulty: "hard" },
    { french: "Meulage", english: ["Grinding"], category: "engineering", difficulty: "medium" },
    { french: "Perçage", english: ["Drilling"], category: "engineering", difficulty: "easy" },
    { french: "Alésage", english: ["Boring"], category: "engineering", difficulty: "hard" },
    { french: "Assemblage", english: ["Assembly"], category: "engineering", difficulty: "medium" },
    { french: "Installation", english: ["Installation"], category: "engineering", difficulty: "easy" },
    { french: "Mise en service", english: ["Commissioning"], category: "engineering", difficulty: "hard" },
    
    // Measurements
    { french: "Dimension", english: ["Dimension"], category: "engineering", difficulty: "easy" },
    { french: "Tolérance", english: ["Tolerance"], category: "engineering", difficulty: "medium" },
    { french: "Jeu", english: ["Clearance"], category: "engineering", difficulty: "medium" },
    { french: "Ajustement", english: ["Fit"], category: "engineering", difficulty: "medium" },
    { french: "Alignement", english: ["Alignment"], category: "engineering", difficulty: "medium" },
    { french: "Niveau", english: ["Level"], category: "engineering", difficulty: "easy" },
    { french: "Aplomb", english: ["Plumb"], category: "engineering", difficulty: "hard" },
    { french: "Mesure", english: ["Measurement"], category: "engineering", difficulty: "easy" },
    { french: "Échelle", english: ["Scale"], category: "engineering", difficulty: "easy" },
    { french: "Unité", english: ["Unit"], category: "engineering", difficulty: "easy" },
    { french: "Métrique", english: ["Metric"], category: "engineering", difficulty: "easy" },
    { french: "Impérial", english: ["Imperial"], category: "engineering", difficulty: "easy" },
    
    // Quality & Testing
    { french: "Essai de charge", english: ["Load test"], category: "engineering", difficulty: "medium" },
    { french: "Test de contrainte", english: ["Stress test"], category: "engineering", difficulty: "medium" },
    { french: "Schéma", english: ["Schematic", "Diagram"], category: "engineering", difficulty: "medium" },
    { french: "Diagramme", english: ["Diagram"], category: "engineering", difficulty: "easy" },
];

// ============================================================================
// APPLICATION STATE
// ============================================================================

let appState = {
    currentIndex: 0,
    score: 0,
    totalAttempts: 0,
    vocabulary: [...vocabularyDatabase],
    answered: {},
    revealed: {},
    mode: "fr-en", // or "en-fr"
    category: "all",
    difficulty: "easy", // easy | medium | hard
    contentType: "words", // words | expressions
};

// ============================================================================
// DOM ELEMENTS
// ============================================================================

const elements = {
    frenchWord: document.getElementById("frenchWord"),
    englishInput: document.getElementById("englishInput"),
    speakBtn: document.getElementById("speakBtn"),
    revealBtn: document.getElementById("revealBtn"),
    reviseAllBtn: document.getElementById("reviseAllBtn"),
    nextBtn: document.getElementById("nextBtn"),
    prevBtn: document.getElementById("prevBtn"),
    resetBtn: document.getElementById("resetBtn"),
    shuffleBtn: document.getElementById("shuffleBtn"),
    answerSection: document.getElementById("answerSection"),
    correctAnswers: document.getElementById("correctAnswers"),
    feedback: document.getElementById("feedback"),
    hintText: document.getElementById("hintText"),
    currentWordDisplay: document.getElementById("currentWord"),
    totalWordsDisplay: document.getElementById("totalWords"),
    scoreDisplay: document.getElementById("score"),
    progressBar: document.getElementById("progressBar"),
};

// ============================================================================
// REVISE ALL FUNCTION
// ============================================================================

let isRevising = false;

async function reviseAllWords() {
    if (isRevising) return;
    
    isRevising = true;
    const originalIndex = appState.currentIndex;
    const vocab = appState.vocabulary;
    
    // Disable controls during revision
    elements.englishInput.disabled = true;
    elements.revealBtn.disabled = true;
    elements.nextBtn.disabled = true;
    elements.prevBtn.disabled = true;
    elements.resetBtn.disabled = true;
    elements.shuffleBtn.disabled = true;
    elements.reviseAllBtn.disabled = true;
    if (elements.speakBtn) elements.speakBtn.disabled = true;
    
    // Show message
    showFeedback(true, "🔄 Starting revision mode... Press ESC to stop.");
    
    // Add ESC listener to stop revision
    let stopRevision = false;
    const escListener = (e) => {
        if (e.key === "Escape") {
            stopRevision = true;
            showFeedback(false, "❌ Revision stopped.");
        }
    };
    document.addEventListener("keydown", escListener);
    
    try {
        for (let i = 0; i < vocab.length && !stopRevision; i++) {
            appState.currentIndex = i;
            const word = vocab[i];
            const isFREn = appState.mode === "fr-en";
            
            // Show the prompt
            displayWord();
            await sleep(1500);
            
            if (stopRevision) break;
            
            // Show the answer
            const answers = isFREn ? word.english : [word.french];
            displayCorrectAnswers(answers);
            elements.answerSection.classList.remove("hidden");
            showFeedback(true, `✅ ${answers.join(" / ")}`);
            
            // Speak the answer
            if ('speechSynthesis' in window) {
                const textToSpeak = answers[0];
                const lang = isFREn ? 'en-US' : 'fr-FR';
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = lang;
                utterance.rate = 0.9;
                
                // Try to select a matching voice
                const voices = speechSynthesis.getVoices();
                const preferredVoice = voices.find(v => v.lang.startsWith(isFREn ? 'en' : 'fr'));
                if (preferredVoice) utterance.voice = preferredVoice;
                
                speechSynthesis.speak(utterance);
            }
            
            await sleep(3000);
            
            if (stopRevision) break;
            
            // Hide answer for next word
            elements.answerSection.classList.add("hidden");
            clearFeedback();
        }
        
        if (!stopRevision) {
            showFeedback(true, "✨ Revision complete! All words reviewed.");
        }
    } finally {
        // Cleanup
        document.removeEventListener("keydown", escListener);
        isRevising = false;
        
        // Restore controls
        elements.englishInput.disabled = false;
        elements.revealBtn.disabled = false;
        elements.nextBtn.disabled = false;
        elements.prevBtn.disabled = false;
        elements.resetBtn.disabled = false;
        elements.shuffleBtn.disabled = false;
        elements.reviseAllBtn.disabled = false;
        if (elements.speakBtn) elements.speakBtn.disabled = false;
        
        // Return to original position
        appState.currentIndex = originalIndex;
        displayWord();
        elements.answerSection.classList.add("hidden");
        
        setTimeout(() => {
            clearFeedback();
        }, 3000);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
    attachEventListeners();
});

function initializeApp() {
    loadState();
    applyCategory(appState.category || "all");
    appState.totalAttempts = appState.vocabulary.length;
    updateModeUI();
    displayWord();
    updateStats();
    updateProgressBar();
}

function attachEventListeners() {
    // Enter on keydown (more reliable than keypress)
    elements.englishInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            checkAnswer();
        }
    });

    elements.englishInput.addEventListener("input", clearFeedback);

    elements.revealBtn.addEventListener("click", revealAnswer);
    if (elements.speakBtn) {
        elements.speakBtn.addEventListener("click", speakCurrent);
    }
    elements.nextBtn.addEventListener("click", nextWord);
    elements.prevBtn.addEventListener("click", previousWord);
    elements.resetBtn.addEventListener("click", resetTrainer);
    elements.shuffleBtn.addEventListener("click", shuffleVocabulary);
    if (elements.reviseAllBtn) {
        elements.reviseAllBtn.addEventListener("click", reviseAllWords);
    }

    // Category filtering
    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", filterByCategory);
    });

    // Mode toggle
    document.querySelectorAll(".mode-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".mode-btn").forEach((b) => b.classList.remove("active"));
            const mode = e.currentTarget.dataset.mode;
            e.currentTarget.classList.add("active");
            appState.mode = mode;
            saveState();
            displayWord();
        });
    });

    // Difficulty toggle
    document.querySelectorAll(".difficulty-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".difficulty-btn").forEach((b) => b.classList.remove("active"));
            const diff = e.currentTarget.dataset.difficulty;
            e.currentTarget.classList.add("active");
            appState.difficulty = diff;
            // re-apply filtering chain
            applyCategory(appState.category);
            appState.currentIndex = 0;
            displayWord();
            saveState();
        });
    });

    // Content toggle
    document.querySelectorAll(".content-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".content-btn").forEach((b) => b.classList.remove("active"));
            const content = e.currentTarget.dataset.content;
            e.currentTarget.classList.add("active");
            appState.contentType = content;
            applyCategory(appState.category);
            appState.currentIndex = 0;
            displayWord();
            saveState();
        });
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" && !elements.englishInput.disabled) {
            nextWord();
        } else if (e.key === "ArrowLeft" && !elements.englishInput.disabled) {
            previousWord();
        }
    });
}

// ============================================================================
// DISPLAY FUNCTIONS
// ============================================================================

function displayWord() {
    const word = appState.vocabulary[appState.currentIndex];
    const isFREn = appState.mode === "fr-en";
    elements.frenchWord.textContent = isFREn ? word.french : word.english[0];
    elements.englishInput.value = "";
    elements.englishInput.placeholder = isFREn ? "Your answer..." : "Votre réponse...";
    elements.englishInput.focus();
    // Dynamic labels
    const promptLabel = document.getElementById("promptLabel");
    const inputLabel = document.getElementById("inputLabel");
    if (promptLabel && inputLabel) {
        const isExpr = appState.contentType === "expressions";
        promptLabel.textContent = isFREn
            ? isExpr ? "French Expression" : "French Word"
            : isExpr ? "English Expression" : "English Word";
        inputLabel.textContent = isFREn
            ? (isExpr ? "Type the English expression" : "Type the English translation")
            : (isExpr ? "Tapez l'expression en français" : "Tapez la traduction en français");
    }
    hideAnswer();
    clearFeedback();
    updateStats();
    updateButtonStates();
    updateProgressBar();
}

// ============================================================================
// VOICE: speechSynthesis with basic fallback
// ============================================================================

function speakCurrent() {
    const word = appState.vocabulary[appState.currentIndex];
    const isFREn = appState.mode === "fr-en";
    const text = isFREn ? (Array.isArray(word.english) ? word.english[0] : word.english) : word.french;
    const lang = isFREn ? "en-US" : "fr-FR";

    if (window.speechSynthesis) {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = lang;
        // try pick a matching voice if available
        const voices = window.speechSynthesis.getVoices();
        const match = voices.find((v) => v.lang.toLowerCase().startsWith(lang.toLowerCase()));
        if (match) utter.voice = match;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
    } else {
        showFeedback(false, "🔇 Speech not supported in this browser.");
    }
}

function hideAnswer() {
    elements.answerSection.classList.add("hidden");
    elements.correctAnswers.innerHTML = "";
    appState.revealed[appState.currentIndex] = false;
    if (elements.revealBtn) elements.revealBtn.style.opacity = "1";
}

function revealAnswer() {
    const word = appState.vocabulary[appState.currentIndex];
    const isFREn = appState.mode === "fr-en";
    if (elements.answerSection.classList.contains("hidden")) {
        elements.answerSection.classList.remove("hidden");
        displayCorrectAnswers(isFREn ? word.english : [word.french]);
        appState.revealed[appState.currentIndex] = true;
        elements.revealBtn.style.opacity = "0.6";
    } else {
        hideAnswer();
        elements.revealBtn.style.opacity = "1";
    }
}

function displayCorrectAnswers(answers) {
    elements.correctAnswers.innerHTML = answers
        .map((ans) => `<div class="answer-badge">${ans}</div>`)
        .join("");
}

function clearFeedback() {
    elements.feedback.classList.remove("show", "correct", "incorrect");
    elements.feedback.textContent = "";
}

function showFeedback(isCorrect, message) {
    elements.feedback.classList.add("show");
    elements.feedback.classList.add(isCorrect ? "correct" : "incorrect");
    elements.feedback.textContent = message;
}

// ============================================================================
// ANSWER CHECKING (Active Recall)
// ============================================================================

function normalizeText(s) {
    return s
        .toString()
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // strip accents
        .replace(/[^a-z0-9'\-\s]/g, "") // remove symbols except common word chars
        .replace(/\s+/g, " ");
}

function checkAnswer() {
    const idx = appState.currentIndex;
    const word = appState.vocabulary[idx];
    const userAnswerRaw = elements.englishInput.value;
    const userAnswer = normalizeText(userAnswerRaw);

    if (!userAnswer) {
        showFeedback(false, "Please enter an answer!");
        return;
    }

    const isFREn = appState.mode === "fr-en";
    const correctList = isFREn ? word.english : [word.french];
    const normalizedAnswers = correctList.map((a) => normalizeText(a));

    // exact match on normalized answers
    const isCorrect = normalizedAnswers.includes(userAnswer);

    const alreadyCorrect = Boolean(appState.answered[idx]?.correct);
    if (isCorrect) {
        if (!alreadyCorrect) {
            appState.score++;
        }
        showFeedback(true, alreadyCorrect ? "✅ Already correct for this item." : "✨ Excellent! You got it right!");
    } else {
        const solution = isFREn ? word.english.join(" / ") : word.french;
        showFeedback(false, `❌ Not quite. The answer is: ${solution}`);
        displayCorrectAnswers(isFREn ? word.english : [word.french]);
        elements.answerSection.classList.remove("hidden");
    }

    appState.answered[idx] = {
        correct: isCorrect || alreadyCorrect,
        userAnswer: userAnswerRaw,
        timestamp: new Date(),
        modeTried: appState.mode,
    };

    saveState();
    updateStats();
    disableInputTemporarily();
}

function disableInputTemporarily() {
    elements.englishInput.disabled = true;
    setTimeout(() => {
        elements.englishInput.disabled = false;
        elements.englishInput.focus();
    }, 1500);
}

// ============================================================================
// NAVIGATION
// ============================================================================

function nextWord() {
    if (appState.currentIndex < appState.vocabulary.length - 1) {
        appState.currentIndex++;
        displayWord();
    } else {
        showSessionComplete();
    }
}

function previousWord() {
    if (appState.currentIndex > 0) {
        appState.currentIndex--;
        displayWord();
    }
}

function updateButtonStates() {
    elements.prevBtn.disabled = appState.currentIndex === 0;
    elements.nextBtn.textContent =
        appState.currentIndex === appState.vocabulary.length - 1
            ? "🏁 Finish"
            : "Next →";
}

// ============================================================================
// STATISTICS AND PROGRESS
// ============================================================================

function updateStats() {
    elements.currentWordDisplay.textContent = appState.currentIndex + 1;
    elements.totalWordsDisplay.textContent = appState.vocabulary.length;
    elements.scoreDisplay.textContent = appState.score;
}

function updateProgressBar() {
    const progress =
        ((appState.currentIndex + 1) / appState.vocabulary.length) * 100;
    elements.progressBar.style.width = progress + "%";
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function saveState() {
    try {
        const state = {
            currentIndex: appState.currentIndex,
            score: appState.score,
            category: appState.category,
            mode: appState.mode,
            difficulty: appState.difficulty,
            contentType: appState.contentType,
        };
        localStorage.setItem("vocab_trainer_state", JSON.stringify(state));
    } catch (e) {}
}

function loadState() {
    try {
        const raw = localStorage.getItem("vocab_trainer_state");
        if (!raw) return;
        const state = JSON.parse(raw);
        if (state) {
            appState.currentIndex = state.currentIndex || 0;
            appState.score = state.score || 0;
            appState.category = state.category || "all";
            appState.mode = state.mode || "fr-en";
            appState.difficulty = state.difficulty || "easy";
            appState.contentType = state.contentType || "words";
        }
        // reflect mode buttons
        updateModeUI();
        // reflect category button active state
        document
            .querySelectorAll(".filter-btn")
            .forEach((b) => b.classList.toggle("active", b.dataset.category === appState.category || (appState.category === "all" && b.dataset.category === "all")));
        // reflect difficulty and content buttons
        document.querySelectorAll(".difficulty-btn").forEach((b) => b.classList.toggle("active", b.dataset.difficulty === appState.difficulty));
        document.querySelectorAll(".content-btn").forEach((b) => b.classList.toggle("active", b.dataset.content === appState.contentType));
    } catch (e) {}
}

function updateModeUI() {
    document
        .querySelectorAll(".mode-btn")
        .forEach((b) => b.classList.toggle("active", b.dataset.mode === appState.mode));
}

function resetTrainer() {
    if (confirm("Are you sure you want to reset your progress?")) {
        appState.currentIndex = 0;
        appState.score = 0;
        appState.answered = {};
        appState.revealed = {};
        displayWord();
        saveState();
    }
}

function shuffleVocabulary() {
    // Fisher-Yates shuffle algorithm
    for (let i = appState.vocabulary.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [appState.vocabulary[i], appState.vocabulary[j]] = [
            appState.vocabulary[j],
            appState.vocabulary[i],
        ];
    }
    appState.currentIndex = 0;
    appState.answered = {};
    appState.revealed = {};
    displayWord();
    showFeedback(true, "🔀 Vocabulary shuffled! Starting fresh...");
    saveState();
}

function showSessionComplete() {
    const scorePercentage = Math.round(
        (appState.score / appState.vocabulary.length) * 100
    );
    const message =
        scorePercentage >= 80
            ? `🎉 Amazing! You scored ${scorePercentage}%!`
            : scorePercentage >= 60
            ? `👍 Good job! You scored ${scorePercentage}%!`
            : `💪 Keep practicing! You scored ${scorePercentage}%!`;

    alert(
        `Session Complete!\n\n${message}\n\nScore: ${appState.score}/${appState.vocabulary.length}`
    );

    resetTrainer();
}

// ============================================================================
// CATEGORY FILTERING
// ============================================================================

function applyCategory(category) {
    let base = appState.contentType === "expressions" ? expressionsDatabase : vocabularyDatabase;
    appState.category = category;
    // filter by category
    base = category === "all" ? [...base] : base.filter((w) => w.category === category);

    elements.hintText.textContent = "";

    // Prefer explicit difficulty tag; fallback to heuristic if missing
    function difficultyOf(w) {
        if (w.difficulty) return w.difficulty;
        const text = Array.isArray(w.english) ? (w.english[0] || "") : (w.english || "");
        const len = text.length;
        if (len <= 6) return "easy";
        if (len <= 14) return "medium";
        return "hard";
    }
    const byDifficulty = base.filter((w) => difficultyOf(w) === appState.difficulty);
    appState.vocabulary = byDifficulty.length ? byDifficulty : base;
}

// ============================================================================
// EXPRESSIONS DATASET (initial scaffold)
// ============================================================================
const expressionsDatabase = [
    // Greetings & Politeness (Easy)
    { french: "Bonjour", english: ["Hello"], category: "smalltalk", difficulty: "easy" },
    { french: "Bonsoir", english: ["Good evening"], category: "smalltalk", difficulty: "easy" },
    { french: "Bonne nuit", english: ["Good night"], category: "smalltalk", difficulty: "easy" },
    { french: "Salut", english: ["Hi", "Hey"], category: "smalltalk", difficulty: "easy" },
    { french: "Comment ça va ?", english: ["How are you?"], category: "smalltalk", difficulty: "easy" },
    { french: "Ça va bien, merci", english: ["I'm fine, thanks"], category: "smalltalk", difficulty: "easy" },
    { french: "Merci beaucoup", english: ["Thank you very much"], category: "smalltalk", difficulty: "easy" },
    { french: "De rien", english: ["You're welcome"], category: "smalltalk", difficulty: "easy" },
    { french: "Enchanté(e)", english: ["Nice to meet you"], category: "smalltalk", difficulty: "easy" },
    { french: "À plus tard", english: ["See you later"], category: "smalltalk", difficulty: "easy" },
    { french: "À bientôt", english: ["See you soon"], category: "smalltalk", difficulty: "easy" },
    { french: "Bonne journée", english: ["Have a nice day"], category: "smalltalk", difficulty: "easy" },

    // Travel (Easy/Medium)
    { french: "Où se trouve la gare ?", english: ["Where is the train station?"], category: "travel", difficulty: "easy" },
    { french: "Combien ça coûte ?", english: ["How much does it cost?"], category: "travel", difficulty: "easy" },
    { french: "Je voudrais réserver", english: ["I'd like to book"], category: "travel", difficulty: "medium" },
    { french: "J'ai une réservation", english: ["I have a reservation"], category: "travel", difficulty: "medium" },
    { french: "À quelle heure part-il ?", english: ["What time does it leave?"], category: "travel", difficulty: "medium" },
    { french: "Je suis perdu(e)", english: ["I'm lost"], category: "travel", difficulty: "easy" },
    { french: "Pouvez-vous m'aider ?", english: ["Can you help me?"], category: "travel", difficulty: "easy" },
    { french: "Je cherche...", english: ["I'm looking for..."], category: "travel", difficulty: "easy" },

    // Meetings & Collaboration (Medium)
    { french: "Puis-je vous aider ?", english: ["May I help you?"], category: "meetings", difficulty: "medium" },
    { french: "Je suis d'accord", english: ["I agree"], category: "meetings", difficulty: "medium" },
    { french: "Je ne suis pas d'accord", english: ["I disagree"], category: "meetings", difficulty: "medium" },
    { french: "C'est une bonne idée", english: ["That's a good idea"], category: "meetings", difficulty: "medium" },
    { french: "Qu'en pensez-vous ?", english: ["What do you think?"], category: "meetings", difficulty: "medium" },
    { french: "Ça me convient", english: ["That works for me"], category: "meetings", difficulty: "medium" },
    { french: "Allons droit au but", english: ["Let's get straight to the point"], category: "meetings", difficulty: "medium" },
    { french: "Avons-nous un consensus ?", english: ["Do we have a consensus?"], category: "meetings", difficulty: "medium" },
    { french: "Passons à l'ordre du jour", english: ["Let's move on to the agenda"], category: "meetings", difficulty: "medium" },
    { french: "Pouvez-vous clarifier ?", english: ["Could you clarify?"], category: "meetings", difficulty: "medium" },

    // Business & Management (Medium/Hard)
    { french: "Je vous tiendrai informé", english: ["I'll keep you posted"], category: "business", difficulty: "medium" },
    { french: "Nous respecterons les délais", english: ["We'll meet the deadline"], category: "business", difficulty: "medium" },
    { french: "C'est hors budget", english: ["It's over budget"], category: "business", difficulty: "medium" },
    { french: "C'est dans le périmètre", english: ["It's within scope"], category: "business", difficulty: "hard" },
    { french: "Hors du périmètre", english: ["Out of scope"], category: "business", difficulty: "hard" },
    { french: "Analyse des risques", english: ["Risk analysis"], category: "business", difficulty: "hard" },
    { french: "Plan d'atténuation", english: ["Mitigation plan"], category: "business", difficulty: "hard" },
    { french: "Étude de faisabilité", english: ["Feasibility study"], category: "business", difficulty: "hard" },
    { french: "Mise en œuvre", english: ["Implementation"], category: "business", difficulty: "hard" },

    // Tech (Medium)
    { french: "Ça fonctionne comme prévu", english: ["It works as expected"], category: "tech", difficulty: "medium" },
    { french: "Pouvez-vous reproduire le bug ?", english: ["Can you reproduce the bug?"], category: "tech", difficulty: "medium" },
    { french: "Corriger le bug", english: ["Fix the bug"], category: "tech", difficulty: "medium" },
    { french: "Publier une mise à jour", english: ["Release an update"], category: "tech", difficulty: "medium" },
    { french: "Tester la fonctionnalité", english: ["Test the feature"], category: "tech", difficulty: "medium" },

    // Small Talk & Idioms (Hard)
    { french: "Pour faire court", english: ["To cut a long story short"], category: "smalltalk", difficulty: "hard" },
    { french: "C'est du gâteau", english: ["It's a piece of cake"], category: "smalltalk", difficulty: "hard" },
    { french: "Être au courant", english: ["To be in the loop"], category: "smalltalk", difficulty: "hard" },
    { french: "Jouer franc-jeu", english: ["To play it straight"], category: "smalltalk", difficulty: "hard" },
    { french: "Mettre les points sur les i", english: ["To dot the i's and cross the t's"], category: "smalltalk", difficulty: "hard" },

    // General Connectors (Medium)
    { french: "À titre de précaution", english: ["As a precaution"], category: "general", difficulty: "medium" },
    { french: "Au cas où", english: ["Just in case"], category: "general", difficulty: "medium" },
    { french: "Par conséquent", english: ["Consequently"], category: "general", difficulty: "hard" },
    { french: "En revanche", english: ["On the other hand"], category: "general", difficulty: "hard" },
    { french: "Dans l'ensemble", english: ["Overall"], category: "general", difficulty: "medium" },

    // Clarifications & Requests (Easy/Medium)
    { french: "Pouvez-vous répéter ?", english: ["Could you repeat?"], category: "meetings", difficulty: "easy" },
    { french: "Parlez plus lentement, s'il vous plaît", english: ["Please speak more slowly"], category: "meetings", difficulty: "easy" },
    { french: "Pourriez-vous préciser ?", english: ["Could you be more specific?"], category: "meetings", difficulty: "medium" },

    // Travel practical
    { french: "Je voudrais payer en espèces", english: ["I'd like to pay in cash"], category: "travel", difficulty: "medium" },
    { french: "Acceptez-vous les cartes ?", english: ["Do you accept cards?"], category: "travel", difficulty: "medium" },
    { french: "J'ai besoin d'un reçu", english: ["I need a receipt"], category: "travel", difficulty: "medium" },

    // Scheduling
    { french: "Fixons un rendez-vous", english: ["Let's schedule a meeting"], category: "meetings", difficulty: "medium" },
    { french: "Quelle heure vous convient ?", english: ["What time works for you?"], category: "meetings", difficulty: "medium" },
    { french: "Je suis disponible demain", english: ["I'm available tomorrow"], category: "meetings", difficulty: "easy" },

    // Apologies & Thanks
    { french: "Je suis désolé(e)", english: ["I'm sorry"], category: "smalltalk", difficulty: "easy" },
    { french: "Merci pour votre aide", english: ["Thank you for your help"], category: "smalltalk", difficulty: "easy" },
    { french: "Je vous en prie", english: ["Don't mention it"], category: "smalltalk", difficulty: "medium" },

    // Confirmations
    { french: "C'est confirmé", english: ["It's confirmed"], category: "business", difficulty: "easy" },
    { french: "Nous sommes d'accord", english: ["We are on the same page"], category: "meetings", difficulty: "hard" },
    { french: "C'est réglé", english: ["It's settled"], category: "business", difficulty: "medium" },

    // Presentations
    { french: "Passons à la diapositive suivante", english: ["Let's move to the next slide"], category: "presentations", difficulty: "medium" },
    { french: "Comme vous pouvez le voir", english: ["As you can see"], category: "presentations", difficulty: "medium" },
    { french: "En résumé", english: ["To sum up"], category: "presentations", difficulty: "medium" },
    { french: "Pour conclure", english: ["To conclude"], category: "presentations", difficulty: "medium" },
    { french: "Permettez-moi d'ajouter", english: ["Allow me to add"], category: "presentations", difficulty: "medium" },
    { french: "Passons maintenant à", english: ["Let's now move on to"], category: "presentations", difficulty: "medium" },

    // Hard connectors & idioms
    { french: "C'est hors de ma portée", english: ["It's beyond my reach"], category: "general", difficulty: "hard" },
    { french: "Cela va sans dire", english: ["It goes without saying"], category: "general", difficulty: "hard" },
    { french: "À toutes fins utiles", english: ["For all intents and purposes"], category: "general", difficulty: "hard" },

    // More Business & Management
    { french: "Gérer les priorités", english: ["Manage priorities"], category: "business", difficulty: "medium" },
    { french: "Respecter un échéancier", english: ["Meet a schedule"], category: "business", difficulty: "medium" },
    { french: "Atteindre les objectifs", english: ["Achieve the goals"], category: "business", difficulty: "medium" },
    { french: "Suivi du projet", english: ["Project tracking"], category: "business", difficulty: "medium" },
    { french: "Point d'étape", english: ["Milestone"], category: "business", difficulty: "hard" },
    { french: "Retour sur investissement", english: ["Return on investment"], category: "business", difficulty: "hard" },
    { french: "Valeur ajoutée", english: ["Added value"], category: "business", difficulty: "hard" },
    { french: "Meilleure pratique", english: ["Best practice"], category: "business", difficulty: "medium" },
    { french: "À court terme", english: ["Short-term"], category: "business", difficulty: "easy" },
    { french: "À long terme", english: ["Long-term"], category: "business", difficulty: "easy" },

    // More Tech expressions
    { french: "Mettre à jour le système", english: ["Update the system"], category: "tech", difficulty: "medium" },
    { french: "Sauvegarder les données", english: ["Back up the data"], category: "tech", difficulty: "medium" },
    { french: "Restaurer à partir d'une sauvegarde", english: ["Restore from a backup"], category: "tech", difficulty: "hard" },
    { french: "Le système est en panne", english: ["The system is down"], category: "tech", difficulty: "easy" },
    { french: "Redémarrer le serveur", english: ["Restart the server"], category: "tech", difficulty: "medium" },
    { french: "Optimiser les performances", english: ["Optimize performance"], category: "tech", difficulty: "hard" },
    { french: "Déployer une nouvelle version", english: ["Deploy a new version"], category: "tech", difficulty: "hard" },
    { french: "Corriger une erreur", english: ["Fix an error"], category: "tech", difficulty: "medium" },

    // Mining & Engineering expressions
    { french: "Respecter les normes de sécurité", english: ["Comply with safety standards"], category: "mining", difficulty: "hard" },
    { french: "Inspection de routine", english: ["Routine inspection"], category: "engineering", difficulty: "medium" },
    { french: "Arrêt d'urgence", english: ["Emergency shutdown"], category: "engineering", difficulty: "medium" },
    { french: "Mise en marche", english: ["Start-up"], category: "engineering", difficulty: "medium" },
    { french: "Procédure de sécurité", english: ["Safety procedure"], category: "mining", difficulty: "medium" },
    { french: "Équipement de protection", english: ["Protection equipment"], category: "mining", difficulty: "medium" },
    { french: "Zone à risque", english: ["Hazard zone"], category: "mining", difficulty: "hard" },
    { french: "Contrôle de qualité", english: ["Quality control"], category: "engineering", difficulty: "medium" },

    // Daily life & general expressions
    { french: "C'est à vous de décider", english: ["It's up to you"], category: "general", difficulty: "medium" },
    { french: "Ça dépend", english: ["It depends"], category: "general", difficulty: "easy" },
    { french: "Prenez votre temps", english: ["Take your time"], category: "general", difficulty: "easy" },
    { french: "Dépêchez-vous", english: ["Hurry up"], category: "general", difficulty: "easy" },
    { french: "Pas de problème", english: ["No problem"], category: "general", difficulty: "easy" },
    { french: "Bien sûr", english: ["Of course"], category: "general", difficulty: "easy" },
    { french: "Sans aucun doute", english: ["Without a doubt"], category: "general", difficulty: "medium" },
    { french: "Je n'en suis pas sûr(e)", english: ["I'm not sure about it"], category: "general", difficulty: "easy" },
    { french: "Si je ne me trompe pas", english: ["If I'm not mistaken"], category: "general", difficulty: "medium" },
    { french: "Autant que je sache", english: ["As far as I know"], category: "general", difficulty: "medium" },

    // Travel & directions
    { french: "Tournez à gauche", english: ["Turn left"], category: "travel", difficulty: "easy" },
    { french: "Tournez à droite", english: ["Turn right"], category: "travel", difficulty: "easy" },
    { french: "Allez tout droit", english: ["Go straight ahead"], category: "travel", difficulty: "easy" },
    { french: "C'est à quelle distance ?", english: ["How far is it?"], category: "travel", difficulty: "easy" },
    { french: "À pied ou en voiture ?", english: ["On foot or by car?"], category: "travel", difficulty: "easy" },
    { french: "Où puis-je prendre le bus ?", english: ["Where can I catch the bus?"], category: "travel", difficulty: "easy" },
    { french: "Quel est le chemin le plus court ?", english: ["What's the shortest way?"], category: "travel", difficulty: "medium" },

    // Meetings & collaboration extended
    { french: "Revenons au sujet", english: ["Let's get back on topic"], category: "meetings", difficulty: "medium" },
    { french: "Avez-vous des questions ?", english: ["Do you have any questions?"], category: "meetings", difficulty: "easy" },
    { french: "Je voudrais proposer", english: ["I'd like to suggest"], category: "meetings", difficulty: "medium" },
    { french: "Pouvons-nous reporter ?", english: ["Can we postpone?"], category: "meetings", difficulty: "medium" },
    { french: "Passons au vote", english: ["Let's vote on it"], category: "meetings", difficulty: "medium" },
    { french: "Levée de séance", english: ["Meeting adjourned"], category: "meetings", difficulty: "hard" },
    { french: "Ordre du jour", english: ["Agenda"], category: "meetings", difficulty: "medium" },
    { french: "Procès-verbal", english: ["Minutes"], category: "meetings", difficulty: "hard" },

    // Economy & finance expressions
    { french: "Taux de change", english: ["Exchange rate"], category: "economy", difficulty: "medium" },
    { french: "Taux d'intérêt", english: ["Interest rate"], category: "economy", difficulty: "medium" },
    { french: "Fluctuation du marché", english: ["Market fluctuation"], category: "economy", difficulty: "hard" },
    { french: "Cours de la bourse", english: ["Stock price"], category: "economy", difficulty: "hard" },
    { french: "Investissement rentable", english: ["Profitable investment"], category: "economy", difficulty: "hard" },
    { french: "Bilan financier", english: ["Financial statement"], category: "economy", difficulty: "hard" },
    { french: "Chiffre d'affaires", english: ["Revenue", "Turnover"], category: "economy", difficulty: "hard" },

    // Small talk extended
    { french: "Comment allez-vous ?", english: ["How are you doing?"], category: "smalltalk", difficulty: "easy" },
    { french: "Quoi de neuf ?", english: ["What's new?"], category: "smalltalk", difficulty: "easy" },
    { french: "Rien de spécial", english: ["Nothing special"], category: "smalltalk", difficulty: "easy" },
    { french: "Ça pourrait être pire", english: ["It could be worse"], category: "smalltalk", difficulty: "medium" },
    { french: "Tant mieux", english: ["So much the better"], category: "smalltalk", difficulty: "medium" },
    { french: "Tant pis", english: ["Too bad"], category: "smalltalk", difficulty: "medium" },
    { french: "C'est dommage", english: ["That's a shame"], category: "smalltalk", difficulty: "easy" },
    { french: "Félicitations", english: ["Congratulations"], category: "smalltalk", difficulty: "easy" },
    { french: "Bon courage", english: ["Good luck", "Hang in there"], category: "smalltalk", difficulty: "easy" },
    { french: "Profitez-en bien", english: ["Enjoy it"], category: "smalltalk", difficulty: "easy" },

    // More business idioms
    { french: "Coûte que coûte", english: ["At all costs"], category: "business", difficulty: "hard" },
    { french: "Dans les temps", english: ["On time"], category: "business", difficulty: "medium" },
    { french: "En retard", english: ["Behind schedule"], category: "business", difficulty: "easy" },
    { french: "En avance", english: ["Ahead of schedule"], category: "business", difficulty: "medium" },
    { french: "Passer à l'action", english: ["Take action"], category: "business", difficulty: "medium" },
    { french: "Prendre une décision", english: ["Make a decision"], category: "business", difficulty: "easy" },
    { french: "Tenir ses engagements", english: ["Keep one's commitments"], category: "business", difficulty: "hard" },

    // Additional general connectors
    { french: "D'une part... d'autre part", english: ["On one hand... on the other hand"], category: "general", difficulty: "hard" },
    { french: "Tout d'abord", english: ["First of all"], category: "general", difficulty: "medium" },
    { french: "Ensuite", english: ["Then", "Next"], category: "general", difficulty: "easy" },
    { french: "Enfin", english: ["Finally"], category: "general", difficulty: "easy" },
    { french: "En conclusion", english: ["In conclusion"], category: "general", difficulty: "medium" },
    { french: "Par ailleurs", english: ["Moreover", "Besides"], category: "general", difficulty: "hard" },
    { french: "Néanmoins", english: ["Nevertheless"], category: "general", difficulty: "hard" },
    { french: "Toutefois", english: ["However"], category: "general", difficulty: "hard" },
    { french: "En effet", english: ["Indeed"], category: "general", difficulty: "medium" },
    { french: "C'est-à-dire", english: ["That is to say"], category: "general", difficulty: "medium" },

    // Questions & clarifications
    { french: "Que voulez-vous dire ?", english: ["What do you mean?"], category: "meetings", difficulty: "easy" },
    { french: "Pouvez-vous expliquer ?", english: ["Can you explain?"], category: "meetings", difficulty: "easy" },
    { french: "Je ne comprends pas", english: ["I don't understand"], category: "general", difficulty: "easy" },
    { french: "Comment dit-on... en anglais ?", english: ["How do you say... in English?"], category: "general", difficulty: "easy" },
    { french: "Pouvez-vous épeler ?", english: ["Can you spell it?"], category: "general", difficulty: "easy" },

    // High-value Meetings expressions
    { french: "Merci d'être présents", english: ["Thank you for joining"], category: "meetings", difficulty: "easy" },
    { french: "Commençons par un rapide tour de table", english: ["Let's start with a quick roundtable"], category: "meetings", difficulty: "medium" },
    { french: "Nous commençons à l'heure", english: ["We're starting on time"], category: "meetings", difficulty: "easy" },
    { french: "Avant de commencer, un rappel logistique", english: ["Before we start, a quick logistical note"], category: "meetings", difficulty: "medium" },
    { french: "Puis-je intervenir un instant ?", english: ["May I jump in for a moment?"], category: "meetings", difficulty: "medium" },
    { french: "Désolé d'interrompre, mais...", english: ["Sorry to interrupt, but..."], category: "meetings", difficulty: "medium" },
    { french: "Laissez-moi clarifier ce point", english: ["Let me clarify that point"], category: "meetings", difficulty: "medium" },
    { french: "Pourrions-nous recentrer la discussion ?", english: ["Could we refocus the discussion?"], category: "meetings", difficulty: "medium" },
    { french: "Je propose que nous priorisions", english: ["I suggest we prioritize"], category: "meetings", difficulty: "medium" },
    { french: "Sommes-nous tous d'accord ?", english: ["Do we all agree?"], category: "meetings", difficulty: "easy" },
    { french: "Je partage cet avis", english: ["I share that view"], category: "meetings", difficulty: "easy" },
    { french: "Je ne partage pas cet avis", english: ["I don't share that view"], category: "meetings", difficulty: "medium" },
    { french: "Pourriez-vous développer ?", english: ["Could you elaborate?"], category: "meetings", difficulty: "medium" },
    { french: "Si je comprends bien, vous dites que...", english: ["If I understand correctly, you are saying that..."], category: "meetings", difficulty: "medium" },
    { french: "Résumons ce qui a été dit", english: ["Let's summarize what was said"], category: "meetings", difficulty: "medium" },
    { french: "En résumé, nous avons décidé de...", english: ["To sum up, we decided to..."], category: "meetings", difficulty: "medium" },
    { french: "Qui prend la responsabilité ?", english: ["Who is taking ownership?"], category: "meetings", difficulty: "medium" },
    { french: "Ajoutons cela au procès-verbal", english: ["Let's add that to the minutes"], category: "meetings", difficulty: "hard" },
    { french: "Nous manquons de temps", english: ["We're short on time"], category: "meetings", difficulty: "easy" },
    { french: "Il nous reste cinq minutes", english: ["We have five minutes left"], category: "meetings", difficulty: "easy" },
    { french: "Nous reportons ce point à la prochaine réunion", english: ["We'll defer this item to the next meeting"], category: "meetings", difficulty: "medium" },
    { french: "Clôturons cette réunion", english: ["Let's close this meeting"], category: "meetings", difficulty: "easy" },
    { french: "Merci pour vos contributions", english: ["Thank you for your input"], category: "meetings", difficulty: "easy" },
    { french: "Envoyons un compte rendu d'ici demain", english: ["Let's send minutes by tomorrow"], category: "meetings", difficulty: "medium" },
    { french: "Planifions un suivi", english: ["Let's schedule a follow-up"], category: "meetings", difficulty: "medium" },
    { french: "Pouvez-vous partager l'écran ?", english: ["Can you share your screen?"], category: "meetings", difficulty: "easy" },
    { french: "Le micro est coupé", english: ["Your mic is muted"], category: "meetings", difficulty: "easy" },
    { french: "Nous attendons encore quelques participants", english: ["We're waiting for a few more participants"], category: "meetings", difficulty: "easy" },
    { french: "Pourriez-vous donner un exemple concret ?", english: ["Could you give a concrete example?"], category: "meetings", difficulty: "medium" },
    { french: "Qui est responsable de la prochaine étape ?", english: ["Who owns the next step?"], category: "meetings", difficulty: "medium" },

    // High-value Business expressions
    { french: "Nous devons renégocier les termes", english: ["We need to renegotiate the terms"], category: "business", difficulty: "medium" },
    { french: "Cette proposition dépasse le budget", english: ["This proposal exceeds the budget"], category: "business", difficulty: "medium" },
    { french: "Pouvez-vous améliorer votre offre ?", english: ["Can you improve your offer?"], category: "business", difficulty: "medium" },
    { french: "Nous visons une réduction de coût de 10%", english: ["We're aiming for a 10% cost reduction"], category: "business", difficulty: "hard" },
    { french: "Nous avons besoin d'une marge de sécurité", english: ["We need a safety margin"], category: "business", difficulty: "medium" },
    { french: "Quel est le retour sur investissement attendu ?", english: ["What is the expected return on investment?"], category: "business", difficulty: "hard" },
    { french: "Le périmètre doit rester inchangé", english: ["The scope must remain unchanged"], category: "business", difficulty: "hard" },
    { french: "Ajoutons ce point hors périmètre", english: ["Let's mark this item out of scope"], category: "business", difficulty: "medium" },
    { french: "Nous devons gérer les risques identifiés", english: ["We need to manage the identified risks"], category: "business", difficulty: "hard" },
    { french: "Quel est le plan de contingence ?", english: ["What is the contingency plan?"], category: "business", difficulty: "hard" },
    { french: "L'échéancier est-il réaliste ?", english: ["Is the timeline realistic?"], category: "business", difficulty: "medium" },
    { french: "Nous devons valider la capacité de production", english: ["We need to validate production capacity"], category: "business", difficulty: "hard" },
    { french: "Quel est le coût total de possession ?", english: ["What is the total cost of ownership?"], category: "business", difficulty: "hard" },
    { french: "Exigeons des garanties de service", english: ["We should require service guarantees"], category: "business", difficulty: "hard" },
    { french: "Prévoir une clause de pénalité", english: ["Include a penalty clause"], category: "business", difficulty: "hard" },
    { french: "Ce point est non négociable", english: ["This item is non-negotiable"], category: "business", difficulty: "medium" },
    { french: "Nous cherchons un accord gagnant-gagnant", english: ["We're looking for a win-win agreement"], category: "business", difficulty: "medium" },
    { french: "Pouvons-nous formaliser l'entente par écrit ?", english: ["Can we formalize the agreement in writing?"], category: "business", difficulty: "medium" },
    { french: "Qui valide le budget final ?", english: ["Who approves the final budget?"], category: "business", difficulty: "medium" },
    { french: "Cette décision impacte le cash-flow", english: ["This decision impacts cash flow"], category: "business", difficulty: "hard" },
    { french: "La trésorerie est serrée ce mois-ci", english: ["Cash is tight this month"], category: "business", difficulty: "medium" },
    { french: "Nous devons prioriser les livrables critiques", english: ["We must prioritize critical deliverables"], category: "business", difficulty: "hard" },
    { french: "Qui est le sponsor du projet ?", english: ["Who is the project sponsor?"], category: "business", difficulty: "medium" },
    { french: "Les parties prenantes doivent être alignées", english: ["Stakeholders need to be aligned"], category: "business", difficulty: "medium" },
    { french: "Passons en revue les hypothèses financières", english: ["Let's review the financial assumptions"], category: "business", difficulty: "hard" },
    { french: "Validons les coûts récurrents", english: ["Let's validate the recurring costs"], category: "business", difficulty: "medium" },
    { french: "Calculons le seuil de rentabilité", english: ["Let's calculate the break-even point"], category: "business", difficulty: "hard" },
    { french: "Réévaluons le risque fournisseur", english: ["Let's reassess the supplier risk"], category: "business", difficulty: "hard" },
    { french: "Préparons un plan de communication", english: ["Let's prepare a communication plan"], category: "business", difficulty: "medium" },
    { french: "Organisons une réunion de négociation finale", english: ["Let's arrange a final negotiation meeting"], category: "business", difficulty: "medium" },

    // High-value Mining expressions
    { french: "Inspection préalable du site", english: ["Pre-worksite inspection"], category: "mining", difficulty: "medium" },
    { french: "Test d'alarme gaz", english: ["Gas alarm test"], category: "mining", difficulty: "hard" },
    { french: "Vérification des ventilations", english: ["Ventilation check"], category: "mining", difficulty: "medium" },
    { french: "Briefing sécurité obligatoire", english: ["Mandatory safety briefing"], category: "mining", difficulty: "medium" },
    { french: "Port des équipements de protection", english: ["Wear protective equipment"], category: "mining", difficulty: "easy" },
    { french: "Présence de poussières inflammables", english: ["Presence of combustible dust"], category: "mining", difficulty: "hard" },
    { french: "Rédiger le rapport d'incident", english: ["Draft the incident report"], category: "mining", difficulty: "medium" },
    { french: "Le front de taille est instable", english: ["The working face is unstable"], category: "mining", difficulty: "hard" },
    { french: "Surveillance des vibrations", english: ["Vibration monitoring"], category: "mining", difficulty: "hard" },
    { french: "Contrôle des explosifs", english: ["Explosives inspection"], category: "mining", difficulty: "hard" },
    { french: "L'évacuation d'urgence est déclenchée", english: ["Emergency evacuation is triggered"], category: "mining", difficulty: "hard" },
    { french: "Station de refuge la plus proche", english: ["Nearest refuge station"], category: "mining", difficulty: "medium" },
    { french: "Rapport quotidien d'avancement", english: ["Daily progress report"], category: "mining", difficulty: "medium" },
    { french: "Mesure des teneurs", english: ["Grade measurement"], category: "mining", difficulty: "medium" },
    { french: "Contrôle de la nappe phréatique", english: ["Groundwater control"], category: "mining", difficulty: "hard" },
    { french: "Zone interdite d'accès", english: ["Restricted area"], category: "mining", difficulty: "easy" },
    { french: "Gardez une distance de sécurité", english: ["Keep a safe distance"], category: "mining", difficulty: "easy" },
    { french: "Signaler toute anomalie immédiatement", english: ["Report any anomaly immediately"], category: "mining", difficulty: "medium" },
    { french: "Le plan d'aérage doit être mis à jour", english: ["The ventilation plan must be updated"], category: "mining", difficulty: "hard" },
    { french: "Vérifier le soutènement", english: ["Check the ground support"], category: "mining", difficulty: "medium" },
    { french: "Procédure de foration sécurisée", english: ["Safe drilling procedure"], category: "mining", difficulty: "hard" },
    { french: "Plan de tir validé", english: ["Approved blasting plan"], category: "mining", difficulty: "hard" },
    { french: "Risque de chutes de blocs", english: ["Risk of falling rocks"], category: "mining", difficulty: "hard" },
    { french: "Maintenance préventive des convoyeurs", english: ["Preventive maintenance on conveyors"], category: "mining", difficulty: "hard" },
    { french: "Lubrification des treuils", english: ["Hoist lubrication"], category: "mining", difficulty: "medium" },
    { french: "Contrôle des niveaux d'huile", english: ["Oil level check"], category: "mining", difficulty: "easy" },
    { french: "Mesure du bruit ambiant", english: ["Ambient noise measurement"], category: "mining", difficulty: "medium" },
    { french: "Rapport de fin de poste", english: ["End-of-shift report"], category: "mining", difficulty: "medium" },
    { french: "Préparer la prise de poste", english: ["Prepare the shift handover"], category: "mining", difficulty: "medium" },
    { french: "Vérifier les extincteurs", english: ["Check the fire extinguishers"], category: "mining", difficulty: "easy" },

    // High-value Engineering expressions
    { french: "Revue de conception", english: ["Design review"], category: "engineering", difficulty: "medium" },
    { french: "Vérification des plans", english: ["Checking the drawings"], category: "engineering", difficulty: "medium" },
    { french: "Calcul de charge admissible", english: ["Allowable load calculation"], category: "engineering", difficulty: "hard" },
    { french: "Test de charge statique", english: ["Static load test"], category: "engineering", difficulty: "hard" },
    { french: "Validation des spécifications", english: ["Validation of specifications"], category: "engineering", difficulty: "medium" },
    { french: "Rapport de non-conformité", english: ["Nonconformity report"], category: "engineering", difficulty: "hard" },
    { french: "Analyse des causes racines", english: ["Root cause analysis"], category: "engineering", difficulty: "hard" },
    { french: "Mise à jour du plan d'action", english: ["Action plan update"], category: "engineering", difficulty: "medium" },
    { french: "Demande de changement technique", english: ["Engineering change request"], category: "engineering", difficulty: "hard" },
    { french: "Validation des tolérances", english: ["Tolerance validation"], category: "engineering", difficulty: "hard" },
    { french: "Documenter le protocole d'essai", english: ["Document the test protocol"], category: "engineering", difficulty: "medium" },
    { french: "Procédure de mise en service", english: ["Commissioning procedure"], category: "engineering", difficulty: "medium" },
    { french: "Plan de maintenance préventive", english: ["Preventive maintenance plan"], category: "engineering", difficulty: "medium" },
    { french: "Contrôle dimensionnel", english: ["Dimensional inspection"], category: "engineering", difficulty: "medium" },
    { french: "Validation du prototype", english: ["Prototype validation"], category: "engineering", difficulty: "medium" },
    { french: "Essais de fatigue", english: ["Fatigue testing"], category: "engineering", difficulty: "hard" },
    { french: "Vérification des couples de serrage", english: ["Torque verification"], category: "engineering", difficulty: "medium" },
    { french: "Matrice des risques techniques", english: ["Technical risk matrix"], category: "engineering", difficulty: "hard" },
    { french: "Rapport d'avancement hebdomadaire", english: ["Weekly progress report"], category: "engineering", difficulty: "medium" },
    { french: "Synchroniser avec le bureau d'études", english: ["Sync with the design office"], category: "engineering", difficulty: "medium" },
    { french: "Validation électrique", english: ["Electrical validation"], category: "engineering", difficulty: "hard" },
    { french: "Essais de compatibilité", english: ["Compatibility testing"], category: "engineering", difficulty: "medium" },
    { french: "Gestion de configuration", english: ["Configuration management"], category: "engineering", difficulty: "hard" },
    { french: "Traçabilité des modifications", english: ["Traceability of changes"], category: "engineering", difficulty: "hard" },
    { french: "Acceptation utilisateur", english: ["User acceptance"], category: "engineering", difficulty: "medium" },
    { french: "Revue de sécurité machine", english: ["Machine safety review"], category: "engineering", difficulty: "hard" },
    { french: "Homologation requise", english: ["Approval required"], category: "engineering", difficulty: "medium" },
    { french: "Conformité aux normes CE", english: ["Compliance with CE standards"], category: "engineering", difficulty: "hard" },
    { french: "Clôture technique du projet", english: ["Technical closure of the project"], category: "engineering", difficulty: "medium" },

    // High-value Economy expressions
    { french: "Rapport trimestriel", english: ["Quarterly report"], category: "economy", difficulty: "medium" },
    { french: "Prévision de croissance", english: ["Growth forecast"], category: "economy", difficulty: "medium" },
    { french: "L'inflation est-elle sous contrôle ?", english: ["Is inflation under control?"], category: "economy", difficulty: "medium" },
    { french: "Indice des prix à la consommation", english: ["Consumer price index"], category: "economy", difficulty: "hard" },
    { french: "Balance commerciale excédentaire", english: ["Trade surplus"], category: "economy", difficulty: "hard" },
    { french: "La dette publique augmente", english: ["Public debt is rising"], category: "economy", difficulty: "medium" },
    { french: "Le PIB stagne", english: ["GDP is flat"], category: "economy", difficulty: "medium" },
    { french: "Taux d'emploi élevé", english: ["High employment rate"], category: "economy", difficulty: "medium" },
    { french: "Indicateurs avancés", english: ["Leading indicators"], category: "economy", difficulty: "hard" },
    { french: "Surplus budgétaire", english: ["Budget surplus"], category: "economy", difficulty: "medium" },
    { french: "Déficit budgétaire", english: ["Budget deficit"], category: "economy", difficulty: "medium" },
    { french: "Politique monétaire restrictive", english: ["Tight monetary policy"], category: "economy", difficulty: "hard" },
    { french: "Taux directeur relevé", english: ["Policy rate increased"], category: "economy", difficulty: "medium" },
    { french: "Réduction du quantitative easing", english: ["Tapering quantitative easing"], category: "economy", difficulty: "hard" },
    { french: "Risque de récession", english: ["Risk of recession"], category: "economy", difficulty: "medium" },
    { french: "Volatilité du marché", english: ["Market volatility"], category: "economy", difficulty: "medium" },
    { french: "Indice de confiance des consommateurs", english: ["Consumer confidence index"], category: "economy", difficulty: "hard" },
    { french: "Stabiliser la devise", english: ["Stabilize the currency"], category: "economy", difficulty: "hard" },
    { french: "Flux de capitaux", english: ["Capital flows"], category: "economy", difficulty: "hard" },
    { french: "Révision des perspectives", english: ["Outlook revision"], category: "economy", difficulty: "medium" },
    { french: "Rapport de solvabilité", english: ["Solvency report"], category: "economy", difficulty: "hard" },
    { french: "Ratio dette/PIB", english: ["Debt-to-GDP ratio"], category: "economy", difficulty: "hard" },
    { french: "Notation de crédit dégradée", english: ["Downgraded credit rating"], category: "economy", difficulty: "hard" },
    { french: "Émission d'obligations", english: ["Bond issuance"], category: "economy", difficulty: "medium" },
    { french: "Écart de taux obligataire", english: ["Bond yield spread"], category: "economy", difficulty: "hard" },
    { french: "Comptes nationaux", english: ["National accounts"], category: "economy", difficulty: "medium" },
    { french: "Ralentissement économique", english: ["Economic slowdown"], category: "economy", difficulty: "medium" },
    { french: "Diversification du portefeuille", english: ["Portfolio diversification"], category: "economy", difficulty: "hard" },
    { french: "Couverture contre l'inflation", english: ["Inflation hedge"], category: "economy", difficulty: "hard" },
    { french: "Exportations en hausse", english: ["Exports are increasing"], category: "economy", difficulty: "medium" },

    // High-value Tech expressions
    { french: "Incident en production", english: ["Production incident"], category: "tech", difficulty: "medium" },
    { french: "Post-mortem à rédiger", english: ["Postmortem to write"], category: "tech", difficulty: "hard" },
    { french: "Dégradation des performances", english: ["Performance degradation"], category: "tech", difficulty: "medium" },
    { french: "Relancer le service", english: ["Restart the service"], category: "tech", difficulty: "easy" },
    { french: "Mise en pause du déploiement", english: ["Deployment freeze"], category: "tech", difficulty: "medium" },
    { french: "Revenir à la version précédente", english: ["Roll back to the previous version"], category: "tech", difficulty: "medium" },
    { french: "Journaliser l'erreur", english: ["Log the error"], category: "tech", difficulty: "easy" },
    { french: "Mettre en place des alertes", english: ["Set up alerts"], category: "tech", difficulty: "medium" },
    { french: "Rapport de disponibilité", english: ["Availability report"], category: "tech", difficulty: "medium" },
    { french: "Indicateur SLO dépassé", english: ["SLO breached"], category: "tech", difficulty: "hard" },
    { french: "Demander une revue de code", english: ["Request a code review"], category: "tech", difficulty: "easy" },
    { french: "Fusionner la pull request", english: ["Merge the pull request"], category: "tech", difficulty: "medium" },
    { french: "Rebase nécessaire", english: ["Rebase needed"], category: "tech", difficulty: "medium" },
    { french: "Exécuter la suite de tests", english: ["Run the test suite"], category: "tech", difficulty: "easy" },
    { french: "Pipeline CI en échec", english: ["CI pipeline failed"], category: "tech", difficulty: "medium" },
    { french: "Corriger la dette technique", english: ["Address technical debt"], category: "tech", difficulty: "hard" },
    { french: "Sécuriser les accès", english: ["Secure the access"], category: "tech", difficulty: "medium" },
    { french: "Rotation des clés", english: ["Key rotation"], category: "tech", difficulty: "hard" },
    { french: "Chiffrement des données", english: ["Data encryption"], category: "tech", difficulty: "medium" },
    { french: "Mettre à jour la documentation", english: ["Update the documentation"], category: "tech", difficulty: "easy" },
    { french: "Vérifier les sauvegardes", english: ["Check the backups"], category: "tech", difficulty: "easy" },
    { french: "Test de restauration", english: ["Restore test"], category: "tech", difficulty: "medium" },
    { french: "Vérification des dépendances", english: ["Dependency check"], category: "tech", difficulty: "medium" },
    { french: "Scanner les vulnérabilités", english: ["Scan for vulnerabilities"], category: "tech", difficulty: "medium" },
    { french: "Isoler l'incident", english: ["Isolate the incident"], category: "tech", difficulty: "hard" },
    { french: "Communiquer l'état du service", english: ["Communicate service status"], category: "tech", difficulty: "medium" },
    { french: "Activer le mode maintenance", english: ["Enable maintenance mode"], category: "tech", difficulty: "easy" },
    { french: "Plan de reprise après sinistre", english: ["Disaster recovery plan"], category: "tech", difficulty: "hard" },
    { french: "Revue d'architecture", english: ["Architecture review"], category: "tech", difficulty: "hard" },
    { french: "Mise à l'échelle automatique", english: ["Auto-scaling"], category: "tech", difficulty: "medium" },

    // High-value Travel expressions
    { french: "Je voudrais une chambre double", english: ["I'd like a double room"], category: "travel", difficulty: "medium" },
    { french: "Avez-vous des disponibilités ce soir ?", english: ["Do you have availability tonight?"], category: "travel", difficulty: "medium" },
    { french: "Le petit déjeuner est-il compris ?", english: ["Is breakfast included?"], category: "travel", difficulty: "medium" },
    { french: "Je voudrais annuler ma réservation", english: ["I would like to cancel my booking"], category: "travel", difficulty: "medium" },
    { french: "Puis-je modifier la date du vol ?", english: ["Can I change the flight date?"], category: "travel", difficulty: "medium" },
    { french: "Puis-je avoir une carte de la ville ?", english: ["May I have a city map?"], category: "travel", difficulty: "easy" },
    { french: "Combien de temps jusqu'à l'aéroport ?", english: ["How long to the airport?"], category: "travel", difficulty: "medium" },
    { french: "Ce taxi est-il officiel ?", english: ["Is this taxi licensed?"], category: "travel", difficulty: "medium" },
    { french: "Où puis-je acheter un ticket ?", english: ["Where can I buy a ticket?"], category: "travel", difficulty: "easy" },
    { french: "Le train est-il direct ?", english: ["Is the train direct?"], category: "travel", difficulty: "easy" },
    { french: "Quelle est la porte d'embarquement ?", english: ["What is the boarding gate?"], category: "travel", difficulty: "medium" },
    { french: "Mon bagage est perdu", english: ["My luggage is lost"], category: "travel", difficulty: "medium" },
    { french: "Comment faire une réclamation ?", english: ["How do I file a claim?"], category: "travel", difficulty: "medium" },
    { french: "Où est le comptoir d'information ?", english: ["Where is the information desk?"], category: "travel", difficulty: "easy" },
    { french: "Y a-t-il un guichet automatique ?", english: ["Is there an ATM?"], category: "travel", difficulty: "easy" },
    { french: "Acceptez-vous les cartes internationales ?", english: ["Do you accept international cards?"], category: "travel", difficulty: "medium" },
    { french: "Où se trouve l'arrêt suivant ?", english: ["Where is the next stop?"], category: "travel", difficulty: "easy" },
    { french: "Je voudrais un reçu détaillé", english: ["I'd like an itemized receipt"], category: "travel", difficulty: "medium" },
    { french: "Y a-t-il du wifi gratuit ?", english: ["Is there free Wi-Fi?"], category: "travel", difficulty: "easy" },
    { french: "Pouvez-vous appeler un taxi ?", english: ["Can you call a taxi?"], category: "travel", difficulty: "easy" },
    { french: "La chambre est bruyante", english: ["The room is noisy"], category: "travel", difficulty: "easy" },
    { french: "La climatisation ne fonctionne pas", english: ["The air conditioning doesn't work"], category: "travel", difficulty: "medium" },
    { french: "Puis-je obtenir des serviettes propres ?", english: ["May I get clean towels?"], category: "travel", difficulty: "easy" },
    { french: "Quel est le meilleur itinéraire sans péage ?", english: ["What's the best toll-free route?"], category: "travel", difficulty: "medium" },
    { french: "Est-ce sûr de marcher ici ?", english: ["Is it safe to walk here?"], category: "travel", difficulty: "easy" },
    { french: "Je dois attraper une correspondance", english: ["I need to catch a connection"], category: "travel", difficulty: "medium" },
    { french: "Le vol est-il retardé ?", english: ["Is the flight delayed?"], category: "travel", difficulty: "medium" },
    { french: "L'assurance voyage couvre-t-elle ceci ?", english: ["Does travel insurance cover this?"], category: "travel", difficulty: "hard" },
    { french: "Pouvez-vous garder mes bagages ?", english: ["Can you store my luggage?"], category: "travel", difficulty: "easy" },
    { french: "Je suis allergique à...", english: ["I am allergic to..."], category: "travel", difficulty: "easy" },

    // High-value Presentations expressions
    { french: "Bonjour à toutes et à tous", english: ["Good morning everyone"], category: "presentations", difficulty: "easy" },
    { french: "Merci d'être présents aujourd'hui", english: ["Thank you for being here today"], category: "presentations", difficulty: "easy" },
    { french: "Je vais commencer par le contexte", english: ["I'll start with the context"], category: "presentations", difficulty: "medium" },
    { french: "Voici la structure de ma présentation", english: ["Here's the outline of my talk"], category: "presentations", difficulty: "medium" },
    { french: "Passons directement au sujet", english: ["Let's jump straight to the topic"], category: "presentations", difficulty: "medium" },
    { french: "Comme indiqué sur cette diapo", english: ["As shown on this slide"], category: "presentations", difficulty: "medium" },
    { french: "Gardons les questions pour la fin", english: ["Let's keep questions for the end"], category: "presentations", difficulty: "medium" },
    { french: "N'hésitez pas à m'interrompre si nécessaire", english: ["Feel free to interrupt me if needed"], category: "presentations", difficulty: "medium" },
    { french: "Pour illustrer ce point", english: ["To illustrate this point"], category: "presentations", difficulty: "medium" },
    { french: "Cet exemple montre que", english: ["This example shows that"], category: "presentations", difficulty: "medium" },
    { french: "En termes simples", english: ["In simple terms"], category: "presentations", difficulty: "easy" },
    { french: "Transition vers la section suivante", english: ["Transition to the next section"], category: "presentations", difficulty: "medium" },
    { french: "Avant de continuer, un bref rappel", english: ["Before we continue, a quick reminder"], category: "presentations", difficulty: "medium" },
    { french: "Résumons cette section", english: ["Let's summarize this section"], category: "presentations", difficulty: "medium" },
    { french: "Les trois points clés sont", english: ["The three key points are"], category: "presentations", difficulty: "medium" },
    { french: "En résumé, retenez que", english: ["To sum up, remember that"], category: "presentations", difficulty: "medium" },
    { french: "Passons à la démonstration", english: ["Let's move to the demo"], category: "presentations", difficulty: "medium" },
    { french: "Si l'on regarde ce graphique", english: ["If we look at this chart"], category: "presentations", difficulty: "medium" },
    { french: "Pour répondre à cette question", english: ["To answer that question"], category: "presentations", difficulty: "medium" },
    { french: "Cela répond-il à votre préoccupation ?", english: ["Does that address your concern?"], category: "presentations", difficulty: "medium" },
    { french: "Merci pour votre question", english: ["Thank you for your question"], category: "presentations", difficulty: "easy" },
    { french: "Je reviendrai sur ce point plus tard", english: ["I'll come back to that later"], category: "presentations", difficulty: "medium" },
    { french: "Nous arrivons à la fin", english: ["We're coming to the end"], category: "presentations", difficulty: "easy" },
    { french: "Merci de votre attention", english: ["Thank you for your attention"], category: "presentations", difficulty: "easy" },
    { french: "Y a-t-il d'autres questions ?", english: ["Any other questions?"], category: "presentations", difficulty: "easy" },
    { french: "Pour conclure, je retiens...", english: ["To conclude, my takeaway is..."], category: "presentations", difficulty: "medium" },
    { french: "Voici les prochaines étapes", english: ["Here are the next steps"], category: "presentations", difficulty: "medium" },
    { french: "Vous pouvez me contacter après", english: ["You can reach me afterwards"], category: "presentations", difficulty: "easy" },
    { french: "Distribuons les documents", english: ["Let's hand out the documents"], category: "presentations", difficulty: "easy" },
    { french: "Le temps est compté, allons à l'essentiel", english: ["Time is short, let's focus on the essentials"], category: "presentations", difficulty: "medium" },

    // High-value Smalltalk expressions
    { french: "Je me permets de vous demander", english: ["May I ask you"], category: "smalltalk", difficulty: "medium" },
    { french: "Ça fait longtemps qu'on ne s'est pas vu", english: ["It's been a long time since we last met"], category: "smalltalk", difficulty: "easy" },
    { french: "Quel temps fait-il chez vous ?", english: ["How's the weather where you are?"], category: "smalltalk", difficulty: "easy" },
    { french: "Vous êtes d'ici ?", english: ["Are you from around here?"], category: "smalltalk", difficulty: "easy" },
    { french: "Faites comme chez vous", english: ["Make yourself at home"], category: "smalltalk", difficulty: "easy" },
    { french: "Je vous en prie, après vous", english: ["Please, after you"], category: "smalltalk", difficulty: "easy" },
    { french: "Puis-je vous offrir un café ?", english: ["May I offer you a coffee?"], category: "smalltalk", difficulty: "easy" },
    { french: "C'est une bonne surprise", english: ["That's a nice surprise"], category: "smalltalk", difficulty: "easy" },
    { french: "Ça me dépasse", english: ["It beats me"], category: "smalltalk", difficulty: "medium" },
    { french: "Croisons les doigts", english: ["Fingers crossed"], category: "smalltalk", difficulty: "easy" },
    { french: "On se tient au courant", english: ["We'll keep in touch"], category: "smalltalk", difficulty: "easy" },
    { french: "On remet ça quand ?", english: ["When shall we do this again?"], category: "smalltalk", difficulty: "medium" },
    { french: "Ça tombe bien", english: ["That works out well"], category: "smalltalk", difficulty: "easy" },
    { french: "Ça ne me dit rien", english: ["It doesn't appeal to me"], category: "smalltalk", difficulty: "medium" },
    { french: "Ce n'est pas ma tasse de thé", english: ["It's not my cup of tea"], category: "smalltalk", difficulty: "medium" },
    { french: "Ça marche pour moi", english: ["That works for me"], category: "smalltalk", difficulty: "easy" },
    { french: "C'est noté", english: ["Noted"], category: "smalltalk", difficulty: "easy" },
    { french: "On fait comme ça", english: ["Let's do it that way"], category: "smalltalk", difficulty: "easy" },
    { french: "J'apprécie le geste", english: ["I appreciate the gesture"], category: "smalltalk", difficulty: "medium" },
    { french: "Désolé pour le dérangement", english: ["Sorry for the inconvenience"], category: "smalltalk", difficulty: "easy" },
    { french: "Merci de votre patience", english: ["Thanks for your patience"], category: "smalltalk", difficulty: "easy" },
    { french: "Je suis tout ouïe", english: ["I'm all ears"], category: "smalltalk", difficulty: "easy" },
    { french: "Je n'ai pas tout suivi", english: ["I didn't catch everything"], category: "smalltalk", difficulty: "medium" },
    { french: "Pour être honnête", english: ["To be honest"], category: "smalltalk", difficulty: "easy" },
    { french: "Entre nous", english: ["Between us"], category: "smalltalk", difficulty: "medium" },
    { french: "Si ça ne vous dérange pas", english: ["If you don't mind"], category: "smalltalk", difficulty: "easy" },
    { french: "Avec plaisir", english: ["With pleasure"], category: "smalltalk", difficulty: "easy" },
    { french: "Je suis partant", english: ["I'm in"], category: "smalltalk", difficulty: "easy" },
    { french: "Je ne suis pas certain", english: ["I'm not sure"], category: "smalltalk", difficulty: "easy" },
    { french: "C'est une bonne question", english: ["That's a good question"], category: "smalltalk", difficulty: "easy" },

    // High-value Daily expressions
    { french: "Peux-tu baisser le volume ?", english: ["Can you turn the volume down?"], category: "daily", difficulty: "easy" },
    { french: "J'arrive tout de suite", english: ["I'll be right there"], category: "daily", difficulty: "easy" },
    { french: "Je reviens dans cinq minutes", english: ["I'll be back in five minutes"], category: "daily", difficulty: "easy" },
    { french: "Tu peux m'attendre ?", english: ["Can you wait for me?"], category: "daily", difficulty: "easy" },
    { french: "On y va ?", english: ["Shall we go?"], category: "daily", difficulty: "easy" },
    { french: "Je suis pressé", english: ["I'm in a hurry"], category: "daily", difficulty: "easy" },
    { french: "Pas le temps aujourd'hui", english: ["No time today"], category: "daily", difficulty: "easy" },
    { french: "Ce n'est pas urgent", english: ["It's not urgent"], category: "daily", difficulty: "easy" },
    { french: "On se retrouve où ?", english: ["Where do we meet?"], category: "daily", difficulty: "easy" },
    { french: "Envoie-moi l'adresse", english: ["Send me the address"], category: "daily", difficulty: "easy" },
    { french: "Mets-le dans le calendrier", english: ["Put it on the calendar"], category: "daily", difficulty: "easy" },
    { french: "Je vais faire les courses", english: ["I'm going grocery shopping"], category: "daily", difficulty: "easy" },
    { french: "Tu as besoin de quelque chose ?", english: ["Do you need anything?"], category: "daily", difficulty: "easy" },
    { french: "On fait un point ce soir", english: ["Let's touch base tonight"], category: "daily", difficulty: "medium" },
    { french: "Ça me convient", english: ["That works for me"], category: "daily", difficulty: "easy" },
    { french: "Ça ne me convient pas", english: ["That doesn't work for me"], category: "daily", difficulty: "easy" },
    { french: "Je suis d'accord", english: ["I agree"], category: "daily", difficulty: "easy" },
    { french: "Je ne peux pas aujourd'hui", english: ["I can't today"], category: "daily", difficulty: "easy" },
    { french: "Peut-on déplacer ça ?", english: ["Can we move this?"], category: "daily", difficulty: "medium" },
    { french: "Rappelle-moi plus tard", english: ["Call me back later"], category: "daily", difficulty: "easy" },
    { french: "Je te tiens au courant", english: ["I'll keep you posted"], category: "daily", difficulty: "easy" },
    { french: "Ça roule", english: ["Sounds good"], category: "daily", difficulty: "easy" },
    { french: "C'est réglé", english: ["It's sorted"], category: "daily", difficulty: "easy" },
    { french: "Pas de souci", english: ["No worries"], category: "daily", difficulty: "easy" },
    { french: "Prévenez-moi à l'avance", english: ["Let me know in advance"], category: "daily", difficulty: "medium" },
    { french: "Merci d'avoir prévenu", english: ["Thanks for the heads-up"], category: "daily", difficulty: "easy" },
    { french: "Je m'en occupe", english: ["I'll take care of it"], category: "daily", difficulty: "easy" },
    { french: "Fais-moi signe", english: ["Let me know"], category: "daily", difficulty: "easy" },
    { french: "Tout est prêt", english: ["Everything is ready"], category: "daily", difficulty: "easy" },
    { french: "Il manque quelque chose", english: ["Something is missing"], category: "daily", difficulty: "easy" },

    // High-value General connectors
    { french: "En d'autres termes", english: ["In other words"], category: "general", difficulty: "medium" },
    { french: "Pour être précis", english: ["To be precise"], category: "general", difficulty: "medium" },
    { french: "À ce stade", english: ["At this stage"], category: "general", difficulty: "medium" },
    { french: "À première vue", english: ["At first glance"], category: "general", difficulty: "medium" },
    { french: "Par souci de clarté", english: ["For the sake of clarity"], category: "general", difficulty: "hard" },
    { french: "À titre d'exemple", english: ["As an example"], category: "general", difficulty: "medium" },
    { french: "Dans ce contexte", english: ["In this context"], category: "general", difficulty: "medium" },
    { french: "Dans la foulée", english: ["Right afterward"], category: "general", difficulty: "medium" },
    { french: "À ce propos", english: ["On that note"], category: "general", difficulty: "medium" },
    { french: "Quoi qu'il en soit", english: ["Be that as it may"], category: "general", difficulty: "hard" },
    { french: "Cela dit", english: ["That being said"], category: "general", difficulty: "medium" },
    { french: "En attendant", english: ["In the meantime"], category: "general", difficulty: "easy" },
    { french: "D'ici là", english: ["By then"], category: "general", difficulty: "easy" },
    { french: "En parallèle", english: ["In parallel"], category: "general", difficulty: "medium" },
    { french: "Par la suite", english: ["Subsequently"], category: "general", difficulty: "medium" },
    { french: "À l'inverse", english: ["Conversely"], category: "general", difficulty: "medium" },
    { french: "A fortiori", english: ["All the more so"], category: "general", difficulty: "hard" },
    { french: "À brève échéance", english: ["In the short term"], category: "general", difficulty: "hard" },
    { french: "À moyen terme", english: ["In the medium term"], category: "general", difficulty: "medium" },
    { french: "Sur le long terme", english: ["Over the long term"], category: "general", difficulty: "medium" },
    { french: "De manière générale", english: ["Generally speaking"], category: "general", difficulty: "medium" },
    { french: "Dans l'immédiat", english: ["For now"], category: "general", difficulty: "easy" },
    { french: "À ce jour", english: ["As of today"], category: "general", difficulty: "medium" },
    { french: "Pour l'instant", english: ["For the moment"], category: "general", difficulty: "easy" },
    { french: "Le cas échéant", english: ["If applicable"], category: "general", difficulty: "hard" },
    { french: "En conséquence", english: ["Consequently"], category: "general", difficulty: "hard" },
    { french: "Sauf indication contraire", english: ["Unless stated otherwise"], category: "general", difficulty: "medium" },
    { french: "À titre exceptionnel", english: ["As an exception"], category: "general", difficulty: "medium" },
    { french: "Dans une moindre mesure", english: ["To a lesser extent"], category: "general", difficulty: "hard" },
    { french: "En fin de compte", english: ["Ultimately"], category: "general", difficulty: "medium" },
];

function filterByCategory(e) {
    const category = e.target.dataset.category;
    // Update active button
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    // Apply and reset
    applyCategory(category);
    appState.currentIndex = 0;
    appState.score = 0;
    appState.answered = {};
    appState.revealed = {};
    displayWord();
    showFeedback(true, `📚 Showing ${appState.vocabulary.length} words in this category!`);
    saveState();
}

// ============================================================================
// HINT SYSTEM (Optional - can be expanded later)
// ============================================================================

function generateHint(word) {
    // Simple hint: shows first letter and length
    const englishWords = word.english;
    const hint = englishWords
        .map((w) => w.charAt(0) + "".padEnd(w.length - 2, "_") + w.charAt(w.length - 1))
        .join(" / ");
    return `Hint: ${hint}`;
}
