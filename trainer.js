// ============================================================================
// VOCABULARY DATABASE - Start with 10 words for testing
// ============================================================================

const vocabularyDatabase = [
    // Daily - Common A2-B1 Level
    { french: "Bonjour", english: ["Hello", "Good morning"], category: "daily" },
    { french: "Merci", english: ["Thank you", "Thanks"], category: "daily" },
    { french: "S'il vous plaît", english: ["Please"], category: "daily" },
    { french: "Au revoir", english: ["Goodbye", "Bye"], category: "daily" },
    { french: "Oui", english: ["Yes"], category: "daily" },
    { french: "Non", english: ["No"], category: "daily" },
    { french: "Excusez-moi", english: ["Excuse me", "Sorry"], category: "daily" },
    { french: "De rien", english: ["You're welcome"], category: "daily" },
    { french: "Bienvenue", english: ["Welcome"], category: "daily" },
    { french: "À bientôt", english: ["See you soon"], category: "daily" },
    { french: "Comment allez-vous?", english: ["How are you?"], category: "daily" },
    { french: "Ça va?", english: ["How are you?", "How's it going?"], category: "daily" },
    { french: "Bien", english: ["Well", "Good", "Fine"], category: "daily" },
    { french: "Mal", english: ["Bad", "Badly", "Poor"], category: "daily" },
    { french: "Jour", english: ["Day"], category: "daily" },
    { french: "Nuit", english: ["Night"], category: "daily" },
    { french: "Matin", english: ["Morning"], category: "daily" },
    { french: "Après-midi", english: ["Afternoon"], category: "daily" },
    { french: "Soir", english: ["Evening"], category: "daily" },
    { french: "Semaine", english: ["Week"], category: "daily" },
    { french: "Mois", english: ["Month"], category: "daily" },
    { french: "Année", english: ["Year"], category: "daily" },
    { french: "Hier", english: ["Yesterday"], category: "daily" },
    { french: "Aujourd'hui", english: ["Today"], category: "daily" },
    { french: "Demain", english: ["Tomorrow"], category: "daily" },
    { french: "Maison", english: ["House", "Home"], category: "daily" },
    { french: "Bureau", english: ["Office", "Desk"], category: "daily" },
    { french: "École", english: ["School"], category: "daily" },
    { french: "Restaurant", english: ["Restaurant"], category: "daily" },
    { french: "Hôtel", english: ["Hotel"], category: "daily" },
    { french: "Gare", english: ["Train station"], category: "daily" },
    { french: "Aéroport", english: ["Airport"], category: "daily" },
    { french: "Rue", english: ["Street"], category: "daily" },
    { french: "Route", english: ["Road", "Way"], category: "daily" },
    { french: "Ville", english: ["City", "Town"], category: "daily" },
    { french: "Pays", english: ["Country"], category: "daily" },
    { french: "Eau", english: ["Water"], category: "daily" },
    { french: "Pain", english: ["Bread"], category: "daily" },
    { french: "Lait", english: ["Milk"], category: "daily" },
    { french: "Fromage", english: ["Cheese"], category: "daily" },
    { french: "Viande", english: ["Meat"], category: "daily" },
    { french: "Poisson", english: ["Fish"], category: "daily" },
    { french: "Légume", english: ["Vegetable"], category: "daily" },
    { french: "Fruit", english: ["Fruit"], category: "daily" },
    { french: "Café", english: ["Coffee"], category: "daily" },
    { french: "Thé", english: ["Tea"], category: "daily" },
    { french: "Vin", english: ["Wine"], category: "daily" },
    { french: "Bière", english: ["Beer"], category: "daily" },
    { french: "Assiette", english: ["Plate", "Dish"], category: "daily" },
    { french: "Verre", english: ["Glass"], category: "daily" },
    { french: "Cuillère", english: ["Spoon"], category: "daily" },
    { french: "Fourchette", english: ["Fork"], category: "daily" },
    { french: "Couteau", english: ["Knife"], category: "daily" },
    { french: "Voiture", english: ["Car", "Vehicle"], category: "daily" },
    { french: "Vélo", english: ["Bicycle", "Bike"], category: "daily" },
    { french: "Bus", english: ["Bus", "Coach"], category: "daily" },
    { french: "Train", english: ["Train"], category: "daily" },
    { french: "Avion", english: ["Airplane", "Plane"], category: "daily" },
    { french: "Bateau", english: ["Boat", "Ship"], category: "daily" },
    { french: "Taxi", english: ["Taxi"], category: "daily" },
    { french: "Chat", english: ["Cat"], category: "daily" },
    { french: "Chien", english: ["Dog"], category: "daily" },
    { french: "Oiseau", english: ["Bird"], category: "daily" },
    { french: "Arbre", english: ["Tree"], category: "daily" },
    { french: "Fleur", english: ["Flower"], category: "daily" },
    { french: "Montagne", english: ["Mountain"], category: "daily" },
    { french: "Fleuve", english: ["River"], category: "daily" },
    { french: "Mer", english: ["Sea"], category: "daily" },
    { french: "Plage", english: ["Beach"], category: "daily" },
    { french: "Soleil", english: ["Sun", "Sunshine"], category: "daily" },
    { french: "Lune", english: ["Moon"], category: "daily" },
    { french: "Étoile", english: ["Star"], category: "daily" },
    { french: "Pluie", english: ["Rain"], category: "daily" },
    { french: "Neige", english: ["Snow"], category: "daily" },
    { french: "Vent", english: ["Wind"], category: "daily" },
    { french: "Orage", english: ["Storm", "Thunderstorm"], category: "daily" },
    { french: "Chaud", english: ["Hot", "Warm"], category: "daily" },
    { french: "Froid", english: ["Cold"], category: "daily" },
    { french: "Humide", english: ["Wet", "Damp"], category: "daily" },
    { french: "Sec", english: ["Dry"], category: "daily" },
    { french: "Grand", english: ["Big", "Large"], category: "daily" },
    { french: "Petit", english: ["Small", "Little"], category: "daily" },
    { french: "Long", english: ["Long"], category: "daily" },
    { french: "Court", english: ["Short"], category: "daily" },
    { french: "Épais", english: ["Thick"], category: "daily" },
    { french: "Mince", english: ["Thin"], category: "daily" },
    { french: "Lourd", english: ["Heavy"], category: "daily" },
    { french: "Léger", english: ["Light"], category: "daily" },
    { french: "Fort", english: ["Strong"], category: "daily" },
    { french: "Faible", english: ["Weak"], category: "daily" },
    { french: "Rapide", english: ["Fast", "Quick"], category: "daily" },
    { french: "Lent", english: ["Slow"], category: "daily" },
    { french: "Cher", english: ["Expensive"], category: "daily" },
    { french: "Bon marché", english: ["Cheap"], category: "daily" },
    { french: "Nouveau", english: ["New"], category: "daily" },
    { french: "Vieux", english: ["Old"], category: "daily" },
    { french: "Jeune", english: ["Young"], category: "daily" },
    { french: "Beau", english: ["Beautiful", "Pretty"], category: "daily" },
    { french: "Laid", english: ["Ugly"], category: "daily" },
    { french: "Propre", english: ["Clean"], category: "daily" },
    { french: "Sale", english: ["Dirty", "Filthy"], category: "daily" },
    { french: "Heureux", english: ["Happy", "Glad"], category: "daily" },
    { french: "Triste", english: ["Sad"], category: "daily" },
    { french: "En colère", english: ["Angry"], category: "daily" },
    { french: "Fatigué", english: ["Tired", "Weary"], category: "daily" },
    { french: "Endormi", english: ["Sleepy"], category: "daily" },
    { french: "Éveillé", english: ["Awake"], category: "daily" },
    { french: "Malade", english: ["Sick", "Ill"], category: "daily" },
    { french: "Sain", english: ["Healthy"], category: "daily" },
    { french: "Pain d'épice", english: ["Gingerbread"], category: "daily" },
    { french: "Chocolat", english: ["Chocolate"], category: "daily" },
    { french: "Sucre", english: ["Sugar"], category: "daily" },
    { french: "Sel", english: ["Salt"], category: "daily" },
    { french: "Poivre", english: ["Pepper"], category: "daily" },
    { french: "Huile", english: ["Oil"], category: "daily" },
    { french: "Beurre", english: ["Butter"], category: "daily" },
    { french: "Oeuf", english: ["Egg"], category: "daily" },
    { french: "Farine", english: ["Flour"], category: "daily" },

    // Business & Management
    { french: "Travailler", english: ["Work", "To work"], category: "business" },
    { french: "Réunion", english: ["Meeting"], category: "business" },
    { french: "Projet", english: ["Project"], category: "business" },
    { french: "Gestionnaire", english: ["Manager"], category: "business" },
    { french: "Équipe", english: ["Team"], category: "business" },
    { french: "Entreprise", english: ["Company", "Business"], category: "business" },
    { french: "Employé", english: ["Employee"], category: "business" },
    { french: "Employeur", english: ["Employer"], category: "business" },
    { french: "Patron", english: ["Boss", "Manager"], category: "business" },
    { french: "Directeur", english: ["Director", "Manager"], category: "business" },
    { french: "Président", english: ["President", "CEO"], category: "business" },
    { french: "Vice-président", english: ["Vice president"], category: "business" },
    { french: "Secrétaire", english: ["Secretary"], category: "business" },
    { french: "Comptable", english: ["Accountant"], category: "business" },
    { french: "Ingénieur", english: ["Engineer"], category: "business" },
    { french: "Architecte", english: ["Architect"], category: "business" },
    { french: "Développeur", english: ["Developer"], category: "business" },
    { french: "Programmeur", english: ["Programmer"], category: "business" },
    { french: "Chercheur", english: ["Researcher"], category: "business" },
    { french: "Consultant", english: ["Consultant"], category: "business" },
    { french: "Vente", english: ["Sales", "Sale"], category: "business" },
    { french: "Vendeur", english: ["Salesman", "Seller"], category: "business" },
    { french: "Achat", english: ["Purchase", "Buying"], category: "business" },
    { french: "Acheteur", english: ["Buyer"], category: "business" },
    { french: "Marchandise", english: ["Goods", "Merchandise"], category: "business" },
    { french: "Produit", english: ["Product"], category: "business" },
    { french: "Service", english: ["Service"], category: "business" },
    { french: "Client", english: ["Customer", "Client"], category: "business" },
    { french: "Fournisseur", english: ["Supplier"], category: "business" },
    { french: "Prix", english: ["Price", "Cost"], category: "business" },
    { french: "Facteur", english: ["Invoice", "Factor"], category: "business" },
    { french: "Devis", english: ["Quote", "Estimate"], category: "business" },
    { french: "Contrat", english: ["Contract"], category: "business" },
    { french: "Accord", english: ["Agreement", "Deal"], category: "business" },
    { french: "Négociation", english: ["Negotiation"], category: "business" },
    { french: "Délai", english: ["Deadline", "Delay"], category: "business" },
    { french: "Livraison", english: ["Delivery"], category: "business" },
    { french: "Expédition", english: ["Shipment"], category: "business" },
    { french: "Transport", english: ["Transport", "Transportation"], category: "business" },
    { french: "Logistique", english: ["Logistics"], category: "business" },
    { french: "Entrepôt", english: ["Warehouse"], category: "business" },
    { french: "Stock", english: ["Stock", "Inventory"], category: "business" },
    { french: "Bilan", english: ["Balance sheet"], category: "business" },
    { french: "Budget", english: ["Budget"], category: "business" },
    { french: "Revenu", english: ["Revenue", "Income"], category: "business" },
    { french: "Dépense", english: ["Expense"], category: "business" },
    { french: "Bénéfice", english: ["Profit"], category: "business" },
    { french: "Perte", english: ["Loss"], category: "business" },
    { french: "Investissement", english: ["Investment"], category: "business" },
    { french: "Emprunt", english: ["Loan", "Borrowing"], category: "business" },
    { french: "Prêt", english: ["Loan"], category: "business" },
    { french: "Intérêt", english: ["Interest"], category: "business" },
    { french: "Banque", english: ["Bank"], category: "business" },
    { french: "Compte", english: ["Account"], category: "business" },
    { french: "Paiement", english: ["Payment"], category: "business" },
    { french: "Salaire", english: ["Salary", "Wage"], category: "business" },
    { french: "Bonus", english: ["Bonus"], category: "business" },
    { french: "Promotion", english: ["Promotion"], category: "business" },
    { french: "Congé", english: ["Leave", "Time off"], category: "business" },
    { french: "Vacances", english: ["Vacation", "Holiday"], category: "business" },
    { french: "Démission", english: ["Resignation"], category: "business" },
    { french: "Licenciement", english: ["Dismissal", "Layoff"], category: "business" },
    { french: "Embauche", english: ["Hiring"], category: "business" },
    { french: "Candidat", english: ["Candidate"], category: "business" },
    { french: "CV", english: ["Resume", "CV"], category: "business" },
    { french: "Entretien", english: ["Interview"], category: "business" },
    { french: "Appel d'offres", english: ["Call for bids", "Tender"], category: "business" },
    { french: "Marché", english: ["Market"], category: "business" },
    { french: "Stratégie", english: ["Strategy"], category: "business" },
    { french: "Objectif", english: ["Objective", "Goal"], category: "business" },
    { french: "Plan", english: ["Plan"], category: "business" },
    { french: "Exécution", english: ["Execution", "Implementation"], category: "business" },
    { french: "Contrôle qualité", english: ["Quality control"], category: "business" },
    { french: "Production", english: ["Production"], category: "business" },
    { french: "Fabrication", english: ["Manufacturing"], category: "business" },
    { french: "Amélioration", english: ["Improvement"], category: "business" },
    { french: "Efficacité", english: ["Efficiency"], category: "business" },
    { french: "Productivité", english: ["Productivity"], category: "business" },
    { french: "Risque", english: ["Risk"], category: "business" },
    { french: "Assurance", english: ["Insurance"], category: "business" },
    { french: "Impôt", english: ["Tax"], category: "business" },
    { french: "Douane", english: ["Customs"], category: "business" },
    { french: "Conformité", english: ["Compliance"], category: "business" },
    { french: "Légalement", english: ["Legally"], category: "business" },
    { french: "Légal", english: ["Legal"], category: "business" },
    { french: "Illégal", english: ["Illegal"], category: "business" },
    { french: "Responsabilité", english: ["Responsibility"], category: "business" },
    { french: "Compétence", english: ["Competence", "Skill"], category: "business" },
    { french: "Formation", english: ["Training"], category: "business" },
    { french: "Développement", english: ["Development"], category: "business" },
    { french: "Innovation", english: ["Innovation"], category: "business" },
    { french: "Technologie", english: ["Technology"], category: "business" },
    { french: "Numérique", english: ["Digital"], category: "business" },
    { french: "Informatique", english: ["IT", "Computing"], category: "business" },
    { french: "Logiciel", english: ["Software"], category: "business" },
    { french: "Matériel", english: ["Hardware"], category: "business" },
    { french: "Réseau", english: ["Network"], category: "business" },
    { french: "Serveur", english: ["Server"], category: "business" },
    { french: "Base de données", english: ["Database"], category: "business" },
    { french: "Cyber-sécurité", english: ["Cybersecurity"], category: "business" },
    { french: "Communication", english: ["Communication"], category: "business" },
    { french: "Rapport", english: ["Report"], category: "business" },
    { french: "Documentation", english: ["Documentation"], category: "business" },
    { french: "Archivage", english: ["Archival", "Filing"], category: "business" },
    { french: "Mémorandum", english: ["Memo"], category: "business" },
    { french: "Email", english: ["Email"], category: "business" },
    { french: "Présentation", english: ["Presentation"], category: "business" },
    { french: "Affiche", english: ["Poster"], category: "business" },
    { french: "Brochure", english: ["Brochure"], category: "business" },
    { french: "Marketing", english: ["Marketing"], category: "business" },
    { french: "Publicité", english: ["Advertising"], category: "business" },
    { french: "Marque", english: ["Brand"], category: "business" },
    { french: "Logo", english: ["Logo"], category: "business" },
    { french: "Clientèle", english: ["Customer base"], category: "business" },
    { french: "Fidélité", english: ["Loyalty"], category: "business" },
    { french: "Partenariat", english: ["Partnership"], category: "business" },

    // Mining & Engineering
    { french: "Charbon", english: ["Coal"], category: "mining" },
    { french: "Mine", english: ["Mine"], category: "mining" },
    { french: "Extracteur", english: ["Extraction", "Extractor"], category: "mining" },
    { french: "Mineur", english: ["Miner"], category: "mining" },
    { french: "Exploitation minière", english: ["Mining", "Mine operation"], category: "mining" },
    { french: "Minerai", english: ["Ore"], category: "mining" },
    { french: "Cuivre", english: ["Copper"], category: "mining" },
    { french: "Or", english: ["Gold"], category: "mining" },
    { french: "Argent", english: ["Silver"], category: "mining" },
    { french: "Fer", english: ["Iron"], category: "mining" },
    { french: "Étain", english: ["Tin"], category: "mining" },
    { french: "Zinc", english: ["Zinc"], category: "mining" },
    { french: "Plomb", english: ["Lead"], category: "mining" },
    { french: "Aluminium", english: ["Aluminum"], category: "mining" },
    { french: "Nickel", english: ["Nickel"], category: "mining" },
    { french: "Cobalt", english: ["Cobalt"], category: "mining" },
    { french: "Lithium", english: ["Lithium"], category: "mining" },
    { french: "Diamant", english: ["Diamond"], category: "mining" },
    { french: "Gemme", english: ["Gemstone"], category: "mining" },
    { french: "Pierre", english: ["Stone"], category: "mining" },
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

    // Meetings & Discussions
    { french: "Réunion", english: ["Meeting"], category: "meetings" },
    { french: "Conférence", english: ["Conference"], category: "meetings" },
    { french: "Séminaire", english: ["Seminar"], category: "meetings" },
    { french: "Atelier", english: ["Workshop"], category: "meetings" },
    { french: "Débat", english: ["Debate"], category: "meetings" },
    { french: "Discuter", english: ["Discuss", "To discuss"], category: "meetings" },
    { french: "Discussion", english: ["Discussion"], category: "meetings" },
    { french: "Parler", english: ["Speak", "To speak"], category: "meetings" },
    { french: "Écouter", english: ["Listen", "To listen"], category: "meetings" },
    { french: "Question", english: ["Question"], category: "meetings" },
    { french: "Poser une question", english: ["Ask a question"], category: "meetings" },
    { french: "Réponse", english: ["Answer"], category: "meetings" },
    { french: "Répondre", english: ["Answer", "To answer"], category: "meetings" },
    { french: "Point de vue", english: ["Point of view"], category: "meetings" },
    { french: "Opinion", english: ["Opinion"], category: "meetings" },
    { french: "Accord", english: ["Agreement"], category: "meetings" },
    { french: "Désaccord", english: ["Disagreement"], category: "meetings" },
    { french: "Consensus", english: ["Consensus"], category: "meetings" },
    { french: "Décision", english: ["Decision"], category: "meetings" },
    { french: "Résolution", english: ["Resolution"], category: "meetings" },
    { french: "Proposition", english: ["Proposal"], category: "meetings" },
    { french: "Suggérer", english: ["Suggest", "To suggest"], category: "meetings" },
    { french: "Suggestion", english: ["Suggestion"], category: "meetings" },
    { french: "Améliorer", english: ["Improve", "To improve"], category: "meetings" },
    { french: "Critique", english: ["Criticism", "Feedback"], category: "meetings" },
    { french: "Critiquer", english: ["Criticize"], category: "meetings" },
    { french: "Compliment", english: ["Compliment"], category: "meetings" },
    { french: "Complimenter", english: ["Compliment"], category: "meetings" },
    { french: "Félicitations", english: ["Congratulations"], category: "meetings" },
    { french: "Présentation", english: ["Presentation"], category: "meetings" },
    { french: "Présenter", english: ["Present"], category: "meetings" },
    { french: "Diaporama", english: ["Slideshow"], category: "meetings" },
    { french: "Diapositive", english: ["Slide"], category: "meetings" },
    { french: "Tableau blanc", english: ["Whiteboard"], category: "meetings" },
    { french: "Marqueur", english: ["Marker"], category: "meetings" },
    { french: "Projecteur", english: ["Projector"], category: "meetings" },
    { french: "Enregistrement", english: ["Recording"], category: "meetings" },
    { french: "Retransmission", english: ["Broadcast"], category: "meetings" },
    { french: "Vidéoconférence", english: ["Video conference"], category: "meetings" },
    { french: "Appel téléphonique", english: ["Phone call"], category: "meetings" },
    { french: "Conférence téléphonique", english: ["Conference call"], category: "meetings" },
    { french: "Minute", english: ["Minute", "Second"], category: "meetings" },
    { french: "Agenda", english: ["Agenda"], category: "meetings" },
    { french: "Point à l'ordre du jour", english: ["Agenda item"], category: "meetings" },
    { french: "Procès-verbal", english: ["Minutes"], category: "meetings" },

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

    // Presentations & Public Speaking
    { french: "Audience", english: ["Audience"], category: "presentations" },
    { french: "Orateur", english: ["Speaker"], category: "presentations" },
    { french: "Conférencier", english: ["Lecturer"], category: "presentations" },
    { french: "Titre", english: ["Title"], category: "presentations" },
    { french: "Introduction", english: ["Introduction"], category: "presentations" },
    { french: "Conclusion", english: ["Conclusion"], category: "presentations" },
    { french: "Résumé", english: ["Summary"], category: "presentations" },
    { french: "Point clé", english: ["Key point"], category: "presentations" },
    { french: "Détail", english: ["Detail"], category: "presentations" },
    { french: "Exemple", english: ["Example"], category: "presentations" },
    { french: "Cas d'étude", english: ["Case study"], category: "presentations" },
    { french: "Démonstration", english: ["Demo", "Demonstration"], category: "presentations" },
    { french: "Témoignage", english: ["Testimonial"], category: "presentations" },
    { french: "Graphique", english: ["Chart", "Graph"], category: "presentations" },
    { french: "Tableau", english: ["Table"], category: "presentations" },
    { french: "Diagramme", english: ["Diagram"], category: "presentations" },
    { french: "Image", english: ["Image"], category: "presentations" },
    { french: "Vidéo", english: ["Video"], category: "presentations" },
    { french: "Son", english: ["Sound"], category: "presentations" },
    { french: "Musique de fond", english: ["Background music"], category: "presentations" },
    { french: "Animation", english: ["Animation"], category: "presentations" },
    { french: "Transition", english: ["Transition"], category: "presentations" },
    { french: "Discours", english: ["Speech", "Lecture"], category: "presentations" },
    { french: "Débit", english: ["Pace"], category: "presentations" },
    { french: "Intonation", english: ["Intonation"], category: "presentations" },
    { french: "Accent", english: ["Accent"], category: "presentations" },
    { french: "Prononciation", english: ["Pronunciation"], category: "presentations" },
    { french: "Geste", english: ["Gesture"], category: "presentations" },
    { french: "Contact visuel", english: ["Eye contact"], category: "presentations" },
    { french: "Posture", english: ["Posture", "Stance"], category: "presentations" },
    { french: "Applaudissements", english: ["Applause"], category: "presentations" },
    { french: "Questions et réponses", english: ["Q&A"], category: "presentations" },
    { french: "Des commentaires?", english: ["Any comments?"], category: "presentations" },
    { french: "Retour d'information", english: ["Feedback"], category: "presentations" },
    { french: "Évaluation", english: ["Evaluation"], category: "presentations" },
    { french: "Classement", english: ["Rating"], category: "presentations" },
    { french: "Compétence", english: ["Skill"], category: "presentations" },
    { french: "Confiance", english: ["Confidence"], category: "presentations" },
    { french: "Anxiété", english: ["Anxiety"], category: "presentations" },
    { french: "Trac", english: ["Stage fright"], category: "presentations" },
    { french: "Relaxer", english: ["Relax"], category: "presentations" },
    { french: "Respiration", english: ["Breathing"], category: "presentations" },
    { french: "Préparation", english: ["Preparation"], category: "presentations" },
    { french: "Répétition", english: ["Rehearsal"], category: "presentations" },

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
