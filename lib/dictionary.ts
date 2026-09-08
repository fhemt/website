export type Locale = "fr" | "ar";

export const LOCALES: Locale[] = ["fr", "ar"];
export const DEFAULT_LOCALE: Locale = "fr";

interface FeatureItem {
  title: string;
  description: string;
}

interface StepItem {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface LegalSection {
  heading: string;
  body: string[];
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { howItWorks: string; subjects: string; faq: string; download: string; abonnement: string };
  hero: {
    title1: string;
    titleAccent: string;
    subtitle: string;
    availability: string;
    chapterDone: string;
    xpEarned: string;
  };
  problem: { title1: string; titleAccent: string; body1: string; body2: string };
  content: { heading: string; body: string };
  features: {
    heading1: string;
    headingAccent: string;
    subheading: string;
    subjects: string[];
    subjectsMore: string;
    items: FeatureItem[];
  };
  howItWorks: { heading: string; steps: StepItem[] };
  community: { heading: string; body1: string; body2: string };
  faq: { heading: string; items: FaqItem[] };
  finalCta: { heading: string; subheading: string };
  footer: { tagline: string; columns: FooterColumn[]; copyright: string; madeIn: string };
  download: { appStoreCaption: string; playCaption: string };
  legal: {
    lastUpdated: string;
    terms: { title: string; sections: LegalSection[] };
    privacy: { title: string; sections: LegalSection[] };
  };
  founder: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    name: string;
    role: string;
    linkedinLabel: string;
    paragraphs: string[];
  };
  premium: {
    login: {
      metaTitle: string;
      title: string;
      subtitle: string;
      emailLabel: string;
      passwordLabel: string;
      submit: string;
      errorInvalidCredentials: string;
      errorGeneric: string;
      errorMissingFields: string;
    };
    panel: {
      metaTitle: string;
      greeting: string;
      alreadyPremiumBadge: string;
      logout: string;
      ribTitle: string;
      ribIntro: string;
      ribBank: string;
      ribHolder: string;
      ribNumber: string;
      priceLabel: string;
      promoCodeLabel: string;
      promoCodePlaceholder: string;
      promoCodeApply: string;
      promoCodeApplied: string;
      promoCodeInvalid: string;
      proofTitle: string;
      proofIntro: string;
      proofLabel: string;
      submit: string;
      submitPending: string;
      submitError: string;
      alreadyPendingNotice: string;
      historyTitle: string;
      historyEmpty: string;
      statusPending: string;
      statusApproved: string;
      statusRejected: string;
      amountLabel: string;
      submittedOnLabel: string;
      rejectionReasonLabel: string;
    };
  };
}

const fr: Dictionary = {
  meta: {
    title: "Fhemt, le soutien scolaire à la maison",
    description:
      "Fhemt reprend tes cours de collège et de lycée en leçons courtes, expliquées en français et en darija, avec des exercices corrigés pour réussir tes examens. Disponible sur iOS et Android.",
  },
  nav: {
    howItWorks: "Comment ça marche",
    subjects: "Matières",
    faq: "FAQ",
    download: "Télécharger",
    abonnement: "Abonnement",
  },
  hero: {
    title1: "Apprends à la maison, ",
    titleAccent: "sans prof particulier.",
    subtitle:
      "Fhemt reprend tes cours de collège et de lycée en leçons courtes et guidées, expliquées en français et en darija pour que tu comprennes vraiment. Avec plein d'exercices corrigés pour arriver prêt le jour de l'examen.",
    availability: "Disponible sur iOS et Android, accessible sur n'importe quel téléphone.",
    chapterDone: "Chapitre 3 terminé",
    xpEarned: "+40 XP gagnés",
  },
  problem: {
    title1: "Après les cours, ",
    titleAccent: "qui réexplique à la maison ?",
    body1:
      "Tout le monde n'a pas un prof particulier sous la main pour revoir un cours de maths ou de SVT le soir. C'est le rôle que joue la méthode Fhemt : des leçons courtes et guidées, que tu peux reprendre seul autant de fois qu'il le faut.",
    body2:
      "Et pour que ça reste clair, chaque leçon existe aussi en darija. De quoi comprendre le fond, pas juste retenir des mots en français.",
  },
  content: {
    heading: "Écrit à la main, pas généré à la chaîne",
    body: "Chaque exercice reprend le style des vrais contrôles marocains, écrit par une équipe qui connaît le programme, pas par un algorithme. Le résultat : un contenu qui ressemble à ce que tu vois vraiment en classe.",
  },
  features: {
    heading1: "Pensé pour comment les collégiens apprennent ",
    headingAccent: "vraiment",
    subheading:
      "Pas une bibliothèque de PDF de plus. Une app construite autour du programme marocain, du diagnostic de niveau jusqu'à l'examen blanc.",
    subjects: ["Mathématiques", "Physique-Chimie", "SVT"],
    subjectsMore: "et d'autres matières à venir",
    items: [
      {
        title: "Chaque leçon, en français et en darija",
        description:
          "Bascule d'une langue à l'autre en un geste. Utile le temps de bien saisir une notion, puis tu repasses au français pour l'examen.",
      },
      {
        title: "Plein d'exercices, avec correction détaillée",
        description:
          "Pas juste la bonne réponse : chaque correction explique le raisonnement, étape par étape. De quoi arriver à l'examen prêt, et rendre tes parents aussi fiers que toi.",
      },
      {
        title: "Un suivi qui montre les vrais progrès",
        description:
          "Niveaux, XP et pourcentage de complétion par cours. De quoi voir concrètement le chemin parcouru depuis le premier chapitre.",
      },
      {
        title: "Des leçons courtes, avec la méthode Fhemt",
        description:
          "Un système de vies rechargeables et de petits objectifs à la fois, pensé pour donner envie de revenir chaque jour plutôt que d'abandonner après un échec.",
      },
    ],
  },
  howItWorks: {
    heading: "Comment ça marche",
    steps: [
      {
        title: "Dis-nous où t'en es",
        description:
          "Un petit test de niveau au départ. S'il montre que tu maîtrises déjà un chapitre, il se débloque direct, pas besoin de le refaire.",
      },
      {
        title: "Avance leçon par leçon",
        description:
          "Chaque leçon se termine par un quiz. Tu dois le réussir pour débloquer la suivante, donc rien n'est jamais suivi à moitié.",
      },
      {
        title: "Entraîne-toi jusqu'à l'examen",
        description:
          "Exercices corrigés en détail, puis examens blancs une fois le cours terminé, dans les conditions du vrai contrôle.",
      },
    ],
  },
  community: {
    heading: "Conçu au Maroc, pour les élèves marocains",
    body1:
      "Le programme, les exemples, la façon d'expliquer un exercice : tout est pensé pour coller à ce qui se passe réellement en classe ici, pas à un programme importé et traduit à la va-vite.",
    body2:
      "Et le contenu continue de s'enrichir avec des profs marocains qui relisent et valident chaque cours avant qu'il n'arrive dans l'app.",
  },
  faq: {
    heading: "Questions fréquentes",
    items: [
      {
        question: "Fhemt, c'est pour quel niveau ?",
        answer:
          "Le collège marocain (1ère, 2ème et 3ème année) et le lycée. Les matières disponibles aujourd'hui sont les mathématiques, la physique-chimie et la SVT, et d'autres arrivent avec le temps.",
      },
      {
        question: "C'est vraiment gratuit ?",
        answer:
          "Oui. Tous les cours, les leçons et les quiz de fin de leçon sont gratuits. Premium débloque la collection complète d'exercices, les corrections détaillées et les examens blancs.",
      },
      {
        question: "Je peux tout suivre en darija ?",
        answer:
          "Chaque leçon existe en français et en darija, et tu bascules de l'une à l'autre en un geste. L'idée n'est pas de remplacer le français, mais de t'aider à vraiment comprendre avant l'examen qui, lui, reste en français.",
      },
      {
        question: "Qui écrit les cours ?",
        answer:
          "Une équipe qui construit le contenu en s'appuyant sur le programme officiel marocain, avec des enseignants qui relisent et valident chaque leçon avant sa mise en ligne.",
      },
      {
        question: "Est-ce que ça remplace un prof particulier ?",
        answer:
          "Fhemt ne remplace pas l'enseignant en classe, mais il joue le rôle du soutien à la maison : des explications claires, des exercices corrigés et un rythme adapté à chaque élève, sans avoir à payer des heures de cours particuliers.",
      },
    ],
  },
  finalCta: {
    heading: "Prêt à comprendre tes cours ?",
    subheading: "Télécharge Fhemt et commence dès aujourd'hui, à ton rythme.",
  },
  footer: {
    tagline: "L'application qui explique les cours du collège marocain en français et en darija.",
    columns: [
      {
        title: "Produit",
        links: [
          { href: "#comment-ca-marche", label: "Comment ça marche" },
          { href: "#matieres", label: "Matières" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { href: "/mot-du-fondateur", label: "Le mot du fondateur" },
          { href: "mailto:contact@fhemt.ma", label: "Nous contacter" },
        ],
      },
      {
        title: "Légal",
        links: [
          { href: "/conditions-utilisation", label: "Conditions d'utilisation" },
          { href: "/confidentialite", label: "Politique de confidentialité" },
        ],
      },
    ],
    copyright: "Tous droits réservés.",
    madeIn: "Fait avec soin au Maroc.",
  },
  download: {
    appStoreCaption: "Télécharger sur",
    playCaption: "Disponible sur",
  },
  legal: {
    lastUpdated: "Dernière mise à jour : 8 septembre 2026",
    terms: {
      title: "Conditions d'utilisation",
      sections: [
        {
          heading: "Acceptation des conditions",
          body: [
            "En créant un compte ou en utilisant l'application ou le site Fhemt, tu acceptes ces conditions d'utilisation. Si tu es mineur, assure-toi d'avoir l'accord d'un parent ou tuteur avant de créer un compte.",
          ],
        },
        {
          heading: "Le service Fhemt",
          body: [
            "Fhemt propose des leçons, exercices et examens blancs pour les élèves de collège et de lycée au Maroc, en français et en darija. Une partie du contenu est accessible gratuitement ; le reste nécessite un compte Premium.",
          ],
        },
        {
          heading: "Ton compte",
          body: [
            "Tu es responsable de garder ton mot de passe confidentiel et de toute activité effectuée depuis ton compte. Préviens-nous immédiatement à contact@fhemt.ma si tu penses que quelqu'un d'autre y a accès.",
          ],
        },
        {
          heading: "Premium et paiement",
          body: [
            "L'accès Premium coûte 199 DH (ou un tarif réduit avec un code promo valide), payable par virement bancaire. Une fois ta preuve de paiement vérifiée par notre équipe, ton accès Premium est activé et reste valable tant que ton compte existe — ce n'est pas un abonnement avec prélèvement automatique.",
            "Comme le paiement se fait par virement direct et non par une plateforme de paiement en ligne, les remboursements se font au cas par cas : contacte-nous à contact@fhemt.ma si tu penses avoir droit à un remboursement.",
          ],
        },
        {
          heading: "Contenu pédagogique",
          body: [
            "Les leçons, exercices, examens et tout le contenu de Fhemt appartiennent à Fhemt. Tu peux les utiliser pour ton propre apprentissage, mais pas les copier, les redistribuer ni les utiliser à des fins commerciales sans notre accord.",
          ],
        },
        {
          heading: "Usage autorisé",
          body: [
            "Tu t'engages à utiliser Fhemt normalement, sans essayer de contourner les limites de l'app (comme la batterie quotidienne), de partager ton compte, ou d'utiliser l'app d'une manière qui pourrait nuire au service ou aux autres élèves.",
          ],
        },
        {
          heading: "Résiliation",
          body: [
            "Tu peux arrêter d'utiliser Fhemt et supprimer ton compte à tout moment en nous écrivant à contact@fhemt.ma. Nous nous réservons le droit de suspendre un compte qui ne respecte pas ces conditions.",
          ],
        },
        {
          heading: "Limitation de responsabilité",
          body: [
            "Fhemt est un outil d'aide à l'apprentissage, pas un substitut à l'enseignement scolaire officiel. Nous faisons de notre mieux pour que le contenu soit juste et à jour, mais nous ne pouvons pas garantir un résultat scolaire précis.",
          ],
        },
        {
          heading: "Modifications de ces conditions",
          body: [
            "Nous pouvons mettre à jour ces conditions de temps en temps. La date en haut de cette page indique la dernière mise à jour. Continuer à utiliser Fhemt après une mise à jour vaut acceptation des nouvelles conditions.",
          ],
        },
        {
          heading: "Droit applicable",
          body: ["Ces conditions sont régies par le droit marocain."],
        },
        {
          heading: "Contact",
          body: ["Pour toute question sur ces conditions, écris-nous à contact@fhemt.ma."],
        },
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      sections: [
        {
          heading: "Qui nous sommes",
          body: [
            "Fhemt est une plateforme d'apprentissage en ligne pour les élèves de collège et de lycée au Maroc. Cette politique explique quelles données nous collectons quand tu utilises l'application ou le site fhemt.ma, pourquoi, et comment les gérer. Pour toute question, écris-nous à contact@fhemt.ma.",
          ],
        },
        {
          heading: "Les données que nous collectons",
          body: [
            "Données de compte : ton prénom, ton nom, ton adresse email, ton mot de passe (jamais stocké en clair, uniquement sous forme hachée), ta ville et ton niveau scolaire (collège ou lycée, et année).",
            "Progression d'apprentissage : les leçons et exercices que tu as terminés, tes résultats de quiz, ton XP, et ta « batterie » (le système qui limite le nombre de tentatives par jour).",
            "Paiement Premium : si tu passes Premium par virement bancaire, on te demande une preuve de virement (capture d'écran ou PDF), le montant payé, et éventuellement un code d'affiliation. On ne collecte et on ne voit jamais tes coordonnées bancaires ou ton numéro de carte — seulement le justificatif que tu envoies toi-même.",
            "Notifications : si tu actives les notifications, on garde un jeton technique (push token) lié à ton appareil pour pouvoir t'envoyer des rappels.",
            "Informations techniques : le type d'appareil, le système (iOS/Android) et un identifiant d'appareil, pour faire fonctionner les notifications et pour le support technique.",
          ],
        },
        {
          heading: "Pourquoi nous utilisons ces données",
          body: [
            "Créer et gérer ton compte, te reconnecter en toute sécurité avec un code de vérification envoyé par email.",
            "Faire fonctionner l'app : sauvegarder ta progression, débloquer les leçons suivantes, calculer ton XP.",
            "Vérifier et activer ton accès Premium quand tu envoies une preuve de paiement.",
            "T'envoyer des notifications si tu les as activées, par exemple des rappels de leçon.",
            "Répondre à tes messages quand tu nous contactes.",
            "Nous n'utilisons jamais tes données pour de la publicité ciblée, et nous ne les vendons à personne.",
          ],
        },
        {
          heading: "Le paiement Premium",
          body: [
            "Fhemt Premium se paie aujourd'hui par virement bancaire direct : tu envoies une preuve de paiement, et notre équipe vérifie et active ton accès manuellement. Fhemt ne traite et ne stocke aucune donnée de carte bancaire — le paiement se fait entre toi et ta banque. Une fois ton compte passé en Premium, l'accès reste actif tant que ton compte existe ; il n'y a pas de prélèvement automatique récurrent.",
          ],
        },
        {
          heading: "Où sont hébergées tes données",
          body: [
            "Tes données sont hébergées sur des serveurs Microsoft Azure, situés en Espagne. Les emails que Fhemt t'envoie (codes de vérification, confirmations) passent par Resend, notre prestataire d'envoi d'emails. Les notifications passent par le service technique d'Expo, l'outil que nous utilisons pour construire l'application.",
          ],
        },
        {
          heading: "Durée de conservation",
          body: [
            "Nous gardons tes données tant que ton compte reste actif. Si tu supprimes ton compte ou nous demandes de le faire, nous effaçons tes données personnelles dans un délai raisonnable, sauf ce que la loi nous oblige à garder — par exemple les justificatifs de paiement, pour des raisons comptables.",
          ],
        },
        {
          heading: "Tes droits",
          body: [
            "Tu peux à tout moment nous demander d'accéder à tes données, de les corriger, ou de les supprimer. Il te suffit d'écrire à contact@fhemt.ma depuis l'adresse email de ton compte.",
          ],
        },
        {
          heading: "Utilisation par des mineurs",
          body: [
            "Fhemt s'adresse à des élèves de collège et de lycée, dont beaucoup sont mineurs. Si tu as moins de 18 ans, nous te recommandons de créer ton compte avec l'accord d'un parent ou tuteur, qui peut nous contacter à tout moment à contact@fhemt.ma pour toute question sur les données de son enfant.",
          ],
        },
        {
          heading: "Sécurité",
          body: [
            "Nous protégeons tes données avec des connexions chiffrées (HTTPS) et un mot de passe qui n'est jamais stocké en clair. Aucun système n'est parfaitement inviolable, mais nous faisons de notre mieux pour protéger ton compte.",
          ],
        },
        {
          heading: "Modifications de cette politique",
          body: [
            "Nous pouvons mettre à jour cette politique de temps en temps, par exemple si nous ajoutons une nouvelle fonctionnalité. La date en haut de cette page indique la dernière mise à jour.",
          ],
        },
        {
          heading: "Contact",
          body: ["Pour toute question sur cette politique ou sur tes données, écris-nous à contact@fhemt.ma."],
        },
      ],
    },
  },
  founder: {
    metaTitle: "Le mot du fondateur — Dia Eddine El Keantaoui",
    metaDescription:
      "Pourquoi Dia Eddine El Keantaoui a créé Fhemt : le poids des cours particuliers pour les familles marocaines, et l'envie de donner aux élèves la même expérience d'apprentissage claire qui l'a marqué en apprenant à coder.",
    eyebrow: "Le mot du fondateur",
    name: "Dia Eddine El Keantaoui",
    role: "Fondateur de Fhemt",
    linkedinLabel: "Voir le profil LinkedIn",
    paragraphs: [
      "Aujourd'hui, FHEMT est officiellement en ligne.",
      "Mais avant de parler de la plateforme, j'aimerais raconter pourquoi je l'ai créée.",
      "Au Maroc, beaucoup d'élèves rencontrent aujourd'hui un problème assez simple à expliquer, mais beaucoup plus difficile à résoudre.",
      "Ils ont souvent un téléphone, mais pas forcément un ordinateur.",
      "Ils ont leurs cours, leurs livres, leurs exercices… mais lorsqu'ils ne comprennent pas quelque chose, ils se retrouvent parfois seuls face à leur écran.",
      "Alors les parents cherchent une solution.",
      "Après les frais de scolarité, les inscriptions, les livres et toutes les autres dépenses liées à l'éducation, une nouvelle question arrive :",
      "« Est-ce qu'on doit encore payer des cours supplémentaires ? »",
      "Puis viennent les calculs.",
      "Une matière.\nPuis une deuxième.\nPuis une troisième.",
      "Et rapidement, le budget augmente.",
      "Pour les parents, c'est une dépense importante. Pour l'élève, c'est parfois plusieurs heures supplémentaires par semaine. Et malgré tout cela, rien ne garantit que l'expérience d'apprentissage sera réellement meilleure.",
      "Pourtant, nous avons déjà des solutions EdTech au Maroc.",
      "Mais en tant qu'ingénieur logiciel, j'ai souvent eu l'impression de retrouver la même expérience :",
      "Des PDF.\nDes exercices.\nDes corrections.\nDes pages et des pages de contenu.",
      "Et parfois, pour trouver simplement ce dont on a besoin, on a l'impression de marcher dans les petites rues de la médina sans savoir exactement où aller.",
      "On avance, on cherche, on se perd.",
      "Et c'est justement là que je me suis souvenu de la manière dont j'ai appris à développer.",
      "Quand j'ai commencé à apprendre l'informatique, il y avait une plateforme qui m'a énormément marqué : Le Site du Zéro, devenu ensuite OpenClassrooms.",
      "Ce que j'aimais, ce n'était pas simplement le contenu.",
      "C'était la façon dont on me l'expliquait.",
      "J'avais l'impression que quelqu'un était réellement en train de m'accompagner.",
      "Les concepts étaient divisés en petites parties. On avançait étape par étape. On pouvait prendre son temps. On ne recevait pas 300 pages d'un coup en se demandant par où commencer.",
      "Même lorsqu'un sujet semblait compliqué, il devenait progressivement compréhensible.",
      "Et je me suis posé une question :",
      "Pourquoi ne pas offrir cette même expérience aux élèves marocains ?",
      "Pas simplement mettre des cours sur Internet.",
      "Mais repenser complètement l'expérience d'apprentissage.",
      "Créer une plateforme pensée pour les élèves marocains, adaptée à leur programme, accessible depuis leur téléphone, structurée pour qu'ils puissent avancer étape par étape et suffisamment simple pour qu'ils puissent apprendre sans se sentir constamment dépassés.",
      "C'est l'idée derrière FHEMT.",
      "Un nom qui signifie littéralement « comprendre ».",
      "Parce qu'au fond, apprendre ne devrait pas simplement consister à mémoriser.",
      "Il faut comprendre.",
      "Aujourd'hui, FHEMT commence son chemin.",
      "Nous avons beaucoup de choses à construire, beaucoup de matières à ajouter, beaucoup d'améliorations à apporter et surtout beaucoup à apprendre de nos utilisateurs.",
      "Mais l'objectif reste simple :",
      "Rendre une expérience d'apprentissage de qualité accessible à un prix que les familles peuvent réellement se permettre.",
      "Une expérience qui donne à l'élève l'envie d'apprendre plutôt que la peur de ne pas comprendre.",
      "Une expérience qui transforme une matière compliquée en petites étapes accessibles.",
      "Une expérience qui permet à un élève de prendre son téléphone, ouvrir FHEMT et simplement se demander :",
      "« Qu'est-ce que je vais comprendre aujourd'hui ? »",
      "Je ne sais pas encore jusqu'où FHEMT ira.",
      "Mais je sais pourquoi nous avons commencé.",
      "Et je sais que nous avons énormément de chemin à parcourir.",
      "Aujourd'hui, nous ouvrons la première page.",
      "Demain, nous voulons écrire toute une histoire.",
      "Bienvenue dans l'aventure FHEMT.",
      "Parce que l'éducation ne devrait pas être un labyrinthe.",
      "Elle devrait être un chemin.",
      "Et chaque chemin commence par une chose :",
      "Comprendre.",
    ],
  },
  premium: {
    login: {
      metaTitle: "Mon abonnement — Fhemt",
      title: "Mon abonnement",
      subtitle: "Connecte-toi avec ton compte Fhemt pour gérer ton abonnement Premium.",
      emailLabel: "Email",
      passwordLabel: "Mot de passe",
      submit: "Continuer",
      errorInvalidCredentials: "Email ou mot de passe incorrect.",
      errorGeneric: "Une erreur est survenue. Réessaie.",
      errorMissingFields: "Entre ton email et ton mot de passe.",
    },
    panel: {
      metaTitle: "Mon abonnement — Fhemt",
      greeting: "Bonjour",
      alreadyPremiumBadge: "Tu es déjà Premium ✓",
      logout: "Se déconnecter",
      ribTitle: "Coordonnées bancaires",
      ribIntro: "Fais un virement vers ce compte, puis envoie-nous la preuve de paiement ci-dessous.",
      ribBank: "Banque",
      ribHolder: "Titulaire",
      ribNumber: "RIB",
      priceLabel: "Prix Premium",
      promoCodeLabel: "Code promo (optionnel)",
      promoCodePlaceholder: "Code promo",
      promoCodeApply: "Appliquer",
      promoCodeApplied: "Code appliqué",
      promoCodeInvalid: "Code promo invalide.",
      proofTitle: "Envoyer ma preuve de paiement",
      proofIntro: "Une fois le virement fait, envoie une capture d'écran ou un PDF du reçu. On vérifie sous 48h ouvrées.",
      proofLabel: "Preuve de paiement",
      submit: "Envoyer",
      submitPending: "Envoi...",
      submitError: "Impossible d'envoyer ta preuve. Réessaie.",
      alreadyPendingNotice: "Ta dernière demande est en cours de vérification — inutile d'en renvoyer une autre.",
      historyTitle: "Historique",
      historyEmpty: "Aucune demande pour l'instant.",
      statusPending: "En vérification",
      statusApproved: "Approuvé",
      statusRejected: "Refusé",
      amountLabel: "Montant",
      submittedOnLabel: "Envoyé le",
      rejectionReasonLabel: "Motif",
    },
  },
};

const ar: Dictionary = {
  meta: {
    title: "فهمت، الدعم المدرسي فالدار",
    description:
      "فهمت كيرجع ليك دروس الإعدادي والثانوي فدروس قصار، مشروحين بالفرنسية والدارجة، مع تمارين مصححة باش تنجح فالامتحانات ديالك. متوفر على iOS و Android.",
  },
  nav: {
    howItWorks: "كيفاش خدامة",
    subjects: "المواد",
    faq: "الأسئلة الشائعة",
    download: "حمّل التطبيق",
    abonnement: "الاشتراك",
  },
  hero: {
    title1: "تعلم فالدار، ",
    titleAccent: "بلا أستاذ خصوصي.",
    subtitle:
      "فهمت كيرجع ليك دروس الإعدادي والثانوي فدروس قصار وموجهة، مشروحين بالفرنسية والدارجة باش تفهم بصح. مع بزاف ديال التمارين المصححة باش توصل مستعد نهار الامتحان.",
    availability: "متوفر على iOS و Android، خدام على أي تيليفون.",
    chapterDone: "كملتي الفصل 3",
    xpEarned: "+40 XP ربحتيهم",
  },
  problem: {
    title1: "من بعد القسم، ",
    titleAccent: "شكون اللي غيعاود يشرح فالدار؟",
    body1:
      "ماشي كلشي عندو أستاذ خصوصي جاهز باش يعاود ليه درس ديال الرياضيات ولا علوم الحياة والأرض فالليل. هادشي هو الدور اللي كتلعبو طريقة فهمت: دروس قصار وموجهة، تقدر تعاودها بوحدك قد ما خاصك.",
    body2:
      "وباش يبقى الفهم واضح، كل درس كاين بالدارجة زعما. باش تفهم الجوهر، ماشي غير تحفظ الكلمات بالفرنسية.",
  },
  content: {
    heading: "مكتوب بليد، ماشي مولد بالجملة",
    body: "كل تمرين كيتبع ستيل الامتحانات الحقيقية المغربية، مكتوب من طرف فريق كيعرف البرنامج، ماشي من طرف خوارزمية. النتيجة: محتوى كيشبه بصح اللي كتشوفو فالقسم.",
  },
  features: {
    heading1: "متصور على حساب الطريقة اللي بيها كيتعلمو التلاميذ ",
    headingAccent: "بصح",
    subheading:
      "ماشي مكتبة PDF أخرى. تطبيق مبني على البرنامج المغربي، من تشخيص المستوى حتى الامتحان الأبيض.",
    subjects: ["الرياضيات", "الفيزياء والكيمياء", "علوم الحياة والأرض"],
    subjectsMore: "ومواد أخرى جايين",
    items: [
      {
        title: "كل درس، بالفرنسية والدارجة",
        description:
          "بدل من لغة للغة بحركة وحدة. مفيدة الوقت اللي كتفهم فيه الفكرة مزيان، من بعد ترجع للفرنسية للامتحان.",
      },
      {
        title: "بزاف ديال التمارين، مع تصحيح مفصل",
        description:
          "ماشي غير الجواب الصحيح: كل تصحيح كيشرح الطريقة ديال التفكير، خطوة بخطوة. باش توصل للامتحان مستعد، وتفرح والديك بيك.",
      },
      {
        title: "متابعة كتبين التقدم الحقيقي",
        description:
          "مستويات، XP، ونسبة الإنجاز لكل كورس. باش تشوف بالعين المسار اللي قطعتي من أول فصل.",
      },
      {
        title: "دروس قصار، بطريقة فهمت",
        description:
          "نظام ديال الأرواح اللي كتشحن وأهداف صغار وحدة بوحدة، متصور باش يعطيك الرغبة ترجع كل نهار عوض ما تقاطع من بعد أي غلطة.",
      },
    ],
  },
  howItWorks: {
    heading: "كيفاش خدامة",
    steps: [
      {
        title: "قول لينا فين وصلتي",
        description:
          "اختبار صغير ديال المستوى فالبداية. إلا بان بيك تحكم ديجا فشي فصل، كيتحل مباشرة، ماخاصكش تعاودو.",
      },
      {
        title: "تقدم درس بدرس",
        description:
          "كل درس كيسالي بكويز. خاصك تنجح فيه باش تحل اللي بعدو، إذن حتى حاجة ماكتبقاش نصف متعلمة.",
      },
      {
        title: "تمرن حتى للامتحان",
        description:
          "تمارين مصححة بالتفصيل، من بعد امتحانات بيضاء من بعد ما يسالي الكورس، فظروف بحال الامتحان الحقيقي.",
      },
    ],
  },
  community: {
    heading: "مصمم فالمغرب، للتلاميذ المغاربة",
    body1:
      "البرنامج، الأمثلة، الطريقة اللي بيها كنشرحو التمرين: كلشي متصور باش يوافق اللي كيوقع بصح فالقسم هنا، ماشي برنامج مجلوب من بره ومترجم بالزربة.",
    body2:
      "والمحتوى كيكبر ديما مع أساتذة مغاربة كيقراو ويوافقو على كل كورس قبل ما يدخل للتطبيق.",
  },
  faq: {
    heading: "الأسئلة الشائعة",
    items: [
      {
        question: "فهمت، لأي مستوى؟",
        answer:
          "الإعدادي المغربي (الأولى، الثانية والثالثة) والثانوي. المواد المتوفرة دابا هوما الرياضيات، الفيزياء والكيمياء، وعلوم الحياة والأرض، ومواد أخرى غادي يجيو مع الوقت.",
      },
      {
        question: "واش بصح مجاني؟",
        answer:
          "أيه. جميع الكورسات، الدروس، والكويزات ديال آخر كل درس مجانيين. بريميوم كيحل المجموعة الكاملة ديال التمارين، التصحيحات المفصلة، والامتحانات البيضاء.",
      },
      {
        question: "نقدر نتبع كلشي بالدارجة؟",
        answer:
          "كل درس كاين بالفرنسية والدارجة، وتقدر تبدل من وحدة للخرى بحركة وحدة. الفكرة ماشي باش نبدلو الفرنسية، ولكن باش نعاونوك تفهم بصح قبل الامتحان اللي كيبقى بالفرنسية.",
      },
      {
        question: "شكون كيكتب الدروس؟",
        answer:
          "فريق كيبني المحتوى بالاعتماد على البرنامج الرسمي المغربي، مع أساتذة كيقراو ويوافقو على كل درس قبل ما يتنشر.",
      },
      {
        question: "واش كيعوض الأستاذ الخصوصي؟",
        answer:
          "فهمت ماكيعوضش الأستاذ فالقسم، ولكن كيلعب دور الدعم فالدار: شروحات واضحة، تمارين مصححة، وريتم يناسب كل تلميذ، بلا ما تخلص ساعات ديال الدروس الخصوصية.",
      },
    ],
  },
  finalCta: {
    heading: "واجد تفهم دروسك؟",
    subheading: "حمّل فهمت وبدا من اليوم، بالريتم ديالك.",
  },
  footer: {
    tagline: "التطبيق اللي كيشرح دروس الإعدادي المغربي بالفرنسية والدارجة.",
    columns: [
      {
        title: "المنتج",
        links: [
          { href: "#comment-ca-marche", label: "كيفاش خدامة" },
          { href: "#matieres", label: "المواد" },
          { href: "#faq", label: "الأسئلة الشائعة" },
        ],
      },
      {
        title: "الشركة",
        links: [
          { href: "/mot-du-fondateur", label: "الكلمة ديال المؤسس" },
          { href: "mailto:contact@fhemt.ma", label: "تواصل معانا" },
        ],
      },
      {
        title: "قانوني",
        links: [
          { href: "/conditions-utilisation", label: "شروط الاستخدام" },
          { href: "/confidentialite", label: "سياسة الخصوصية" },
        ],
      },
    ],
    copyright: "جميع الحقوق محفوظة.",
    madeIn: "مصنوع بعناية فالمغرب.",
  },
  download: {
    appStoreCaption: "حمّل من",
    playCaption: "متوفر على",
  },
  legal: {
    lastUpdated: "آخر تحديث: 8 شتنبر 2026",
    terms: {
      title: "شروط الاستخدام",
      sections: [
        {
          heading: "الموافقة على الشروط",
          body: [
            "منين كتخلق حساب ولا كتستعمل التطبيق ولا الموقع ديال فهمت، كتوافق على هاد الشروط. إلا كنتي قاصر، تأكد أنك عندك موافقة الوالدين ولا الوصي قبل ما تخلق الحساب.",
          ],
        },
        {
          heading: "الخدمة ديال فهمت",
          body: [
            "فهمت كتقترح دروس، تمارين، وامتحانات بيضاء لتلاميذ الإعدادي والثانوي فالمغرب، بالفرنسية والدارجة. جزء من المحتوى متاح مجانًا؛ الباقي كيتطلب حساب بريميوم.",
          ],
        },
        {
          heading: "الحساب ديالك",
          body: [
            "نتا مسؤول على حفظ الباسوورد ديالك سري وعلى كل نشاط كيتدار من الحساب ديالك. خبرنا فالحين فـ contact@fhemt.ma إلا فكرتي بلي شي واحد آخر عندو أكسيس ليه.",
          ],
        },
        {
          heading: "البريميوم والخلاص",
          body: [
            "الأكسيس البريميوم كيتخلص بـ199 درهم (ولا ثمن مخفض إلا استعملتي كود بروموسيون صالح)، بالفيرمو البنكي. منين يتحقق الفريق ديالنا من دليل الخلاص ديالك، كيتفعّل الأكسيس البريميوم ديالك وكيبقى صالح طول ما الحساب ديالك موجود — ماشي اشتراك بخصم أوطوماتيكي.",
            "حيت الخلاص كيدير بالفيرمو المباشر (ماشي عبر منصة خلاص إلكترونية)، الاسترجاع كيدار حالة بحالة: تواصل معانا فـ contact@fhemt.ma إلا كنتي كتفكر بلي عندك الحق فاسترجاع.",
          ],
        },
        {
          heading: "المحتوى التعليمي",
          body: [
            "الدروس، التمارين، الامتحانات وكل محتوى فهمت ملك ديال فهمت. تقدر تستعملهم للتعلم ديالك، ولكن ماشي تنسخهم، توزعهم، ولا تستعملهم لأغراض تجارية بلا الموافقة ديالنا.",
          ],
        },
        {
          heading: "الاستعمال المسموح",
          body: [
            "كتلتزم تستعمل فهمت بطريقة عادية، بلا ما تحاول تتحايل على الحدود ديال التطبيق (بحال البطارية اليومية)، تشارك الحساب ديالك، ولا تستعمل التطبيق بطريقة يمكن تضر بالخدمة ولا بالتلاميذ الآخرين.",
          ],
        },
        {
          heading: "إنهاء الحساب",
          body: [
            "تقدر توقف استعمال فهمت وتحيد الحساب ديالك فأي وقت بالكتابة لينا فـ contact@fhemt.ma. عندنا الحق نوقفو حساب ما كيحترمش هاد الشروط.",
          ],
        },
        {
          heading: "تحديد المسؤولية",
          body: [
            "فهمت أداة كتعاونك فالتعلم، ماشي بديل على التعليم المدرسي الرسمي. كندارو جهدنا باش يكون المحتوى صحيح ومحدث، ولكن ما نقدروش نضمنو نتيجة دراسية محددة.",
          ],
        },
        {
          heading: "تغييرات هاد الشروط",
          body: [
            "نقدرو نحدثو هاد الشروط من وقت لآخر. التاريخ فوق هاد الصفحة كيبين آخر تحديث. إلا كملتي تستعمل فهمت من بعد تحديث، هاد شي كيعني أنك موافق على الشروط الجديدة.",
          ],
        },
        {
          heading: "القانون المطبق",
          body: ["هاد الشروط كتخضع للقانون المغربي."],
        },
        {
          heading: "تواصل معانا",
          body: ["لأي سؤال على هاد الشروط، كتب لينا فـ contact@fhemt.ma."],
        },
      ],
    },
    privacy: {
      title: "سياسة الخصوصية",
      sections: [
        {
          heading: "شكون حنا",
          body: [
            "فهمت هي منصة للتعلم عبر الانترنت مخصصة لتلاميذ الإعدادي والثانوي فالمغرب. هاد السياسة كتشرح أشنو من معلومات كنجمعو منين كتستعمل التطبيق ولا الموقع fhemt.ma، علاش، وكيفاش تقدر تتحكم فيها. أي سؤال، كتب لينا فـ contact@fhemt.ma.",
          ],
        },
        {
          heading: "المعلومات اللي كنجمعو",
          body: [
            "معلومات الحساب: سميتك، اسمك العائلي، الإيميل ديالك، الباسوورد (اللي عمرو ما كيتخزن بصيغة واضحة، غير مشفر)، المدينة ديالك والمستوى الدراسي (إعدادي ولا ثانوي، والسنة).",
            "التقدم فالتعلم: الدروس والتمارين اللي سالتيها، النتائج ديال الكويزات، الـXP، و«البطارية» (النظام اللي كيحدد عدد المحاولات فالنهار).",
            "خلاص البريميوم: إلا بغيتي تولي بريميوم بالفيرمو البنكي، كنطلبو منك دليل الفيرمو (تصويرة ولا PDF)، المبلغ اللي خلصتي، وربما كود ديال الأفيلياسيون. عمرنا ما كنجمعو ولا كنشوفو معلومات الكارط البنكي ديالك — غير الوثيقة اللي كتصيفط بنفسك.",
            "الإشعارات: إلا فعّلتي الإشعارات، كنحتفظو بتوكن تقني مرتبط بالجهاز ديالك باش نقدرو نصيفطو ليك تذكيرات.",
            "معلومات تقنية: نوع الجهاز، النظام (iOS/Android) ومعرّف الجهاز، باش تخدم الإشعارات ونقدرو نعاونوك تقنيًا.",
          ],
        },
        {
          heading: "علاش كنستعملو هاد المعلومات",
          body: [
            "باش نخلقو ونديرو الحساب ديالك، ونخليوك تدخل بأمان بكود تحقق كيتصيفط بالإيميل.",
            "باش يخدم التطبيق: نحفظو التقدم ديالك، نفتحو ليك الدروس اللي كتجي، نحسبو الـXP.",
            "باش نتحققو ونفعلو الأكسيس البريميوم منين كتصيفط دليل الخلاص.",
            "باش نصيفطو ليك إشعارات إلا فعّلتيهم، مثلا تذكيرات بالدروس.",
            "باش نجاوبوك منين كتكتب لينا.",
            "عمرنا ما كنستعملو المعلومات ديالك للإشهار المستهدف، وعمرنا ما كنبيعوها لحتى واحد.",
          ],
        },
        {
          heading: "خلاص البريميوم",
          body: [
            "فهمت بريميوم كيتخلص دابا بالفيرمو البنكي المباشر: كتصيفط دليل الخلاص، والفريق ديالنا كيتحقق ويفعّل الأكسيس ديالك يدويًا. فهمت عمرها ما كتعالج ولا كتخزن معلومات الكارط البنكي — الخلاص كيدار بيناتك وبين البنك ديالك. منين يولي الحساب ديالك بريميوم، الأكسيس كيبقى فعّال طول ما الحساب ديالك موجود؛ ماكاينش خصم أوطوماتيكي متكرر.",
          ],
        },
        {
          heading: "فين مخزنة المعلومات ديالك",
          body: [
            "المعلومات ديالك مخزنة فسيرفورات Microsoft Azure، الكاينين فإسبانيا. الإيميلات اللي كتصيفط ليك فهمت (كودات التحقق، التأكيدات) كتعدي عبر Resend، المزود ديالنا ديال الإيميلات. الإشعارات كتعدي عبر الخدمة التقنية ديال Expo، الأداة اللي كنستعملو باش نبنيو التطبيق.",
          ],
        },
        {
          heading: "مدة الاحتفاظ",
          body: [
            "كنحتفظو بالمعلومات ديالك طول ما الحساب ديالك فعّال. إلا حيتي الحساب ديالك ولا طلبتي منا نحيوه، كنمسحو المعلومات الشخصية ديالك فأجل معقول، إلا ما كانش شي حاجة القانون كيجبرنا نحتفظو بيها — مثلا وثائق الخلاص، لأسباب محاسباتية.",
          ],
        },
        {
          heading: "الحقوق ديالك",
          body: [
            "تقدر فأي وقت تطلب منا الوصول للمعلومات ديالك، تصحيحها، ولا حذفها. غير كتب لينا فـ contact@fhemt.ma من الإيميل ديال الحساب ديالك.",
          ],
        },
        {
          heading: "الاستعمال من طرف القاصرين",
          body: [
            "فهمت موجهة لتلاميذ الإعدادي والثانوي، وبزاف منهم قاصرين. إلا عندك أقل من 18 عام، كننصحوك تخلق الحساب بموافقة الوالدين ولا الوصي، اللي يقدر يتواصل معانا فأي وقت فـ contact@fhemt.ma لأي سؤال على معلومات ولدو.",
          ],
        },
        {
          heading: "الأمان",
          body: [
            "كنحميو المعلومات ديالك بروابط مشفرة (HTTPS) وباسوورد اللي عمرو ما كيتخزن بصيغة واضحة. ماكاين حتى نظام كامل الأمان مية فالمية، ولكن كندارو جهدنا باش نحميو الحساب ديالك.",
          ],
        },
        {
          heading: "تغييرات هاد السياسة",
          body: [
            "نقدرو نحدثو هاد السياسة من وقت لآخر، مثلا إلا زدنا خاصية جديدة. التاريخ فوق هاد الصفحة كيبين آخر تحديث.",
          ],
        },
        {
          heading: "تواصل معانا",
          body: ["لأي سؤال على هاد السياسة ولا على المعلومات ديالك، كتب لينا فـ contact@fhemt.ma."],
        },
      ],
    },
  },
  founder: {
    metaTitle: "الكلمة ديال المؤسس — Dia Eddine El Keantaoui",
    metaDescription:
      "علاش Dia Eddine El Keantaoui خلق فهمت: التكلفة ديال دروس الدعم على العائلات المغربية، والرغبة فأنو يعطي للتلاميذ نفس التجربة الواضحة ديال التعلم اللي أثرات فيه ملي كان كيتعلم البرمجة.",
    eyebrow: "الكلمة ديال المؤسس",
    name: "Dia Eddine El Keantaoui",
    role: "المؤسس ديال فهمت",
    linkedinLabel: "شوف البروفايل ديالي على LinkedIn",
    paragraphs: [
      "اليوم، فهمت رسميا أونلاين.",
      "ولكن قبل ما نهضر على المنصة، بغيت نحكي ليكم علاش خلقتها.",
      "فالمغرب، بزاف ديال التلاميذ عندهم مشكل سهل نشرحوه، ولكن صعيب بزاف نحلوه.",
      "غالبا عندهم تيليفون، ولكن ماشي بالضرورة عندهم أورديناتور.",
      "عندهم الدروس ديالهم، الكتب، التمارين... ولكن ملي مايفهموش شي حاجة، كيلقاو روحهم وحدهم قدام الشاشة.",
      "إذن الوالدين كيقلبو على حل.",
      "من بعد مصاريف التمدرس، التسجيلات، الكتب، وكلشي المصاريف اللي مرتبطة بالتعليم، كيطرح سؤال جديد:",
      "«واش خاصنا نخلصو حتى دروس الدعم؟»",
      "من بعد كتبدا الحسبة.",
      "مادة.\nمن بعد جوج.\nمن بعد تلاتة.",
      "وبسرعة، الميزانية كتزيد.",
      "بالنسبة للوالدين، مصروف كبير. بالنسبة للتلميذ، ساعات زايدة فالسيمانة. ورغم هادشي كامل، والو ماكيضمن أن التجربة ديال التعلم غادي تكون بصح أحسن.",
      "ومع ذلك، عندنا ديجا حلول EdTech فالمغرب.",
      "ولكن كمهندس معلوماتي، غالبا كان عندي الإحساس أني كنلقى نفس التجربة:",
      "PDF.\nتمارين.\nتصحيحات.\nصفحات ووراها صفحات ديال المحتوى.",
      "وبعض المرات، باش تلقى غير اللي محتاجو، كيبان ليك بلي كتمشي فالأزقة الصغار ديال المدينة القديمة بلا ماتعرف فين غادي.",
      "كتقدم، كتقلب، وكتضيع.",
      "وهنا بالضبط تفكرت الطريقة اللي بيها تعلمت البرمجة.",
      "ملي بديت نتعلم الإعلاميات، كانت كاينة منصة أثرات فيا بزاف: Le Site du Zéro، اللي ولات من بعد OpenClassrooms.",
      "اللي كنت كنبغيه، ماشي غير المحتوى.",
      "كانت الطريقة اللي بيها كيشرحوه ليا.",
      "كان عندي الإحساس أن شي واحد كيرافقني بصح.",
      "المفاهيم كانت مقسمة لأجزاء صغار. كتقدم خطوة بخطوة. تقدر تاخد الوقت ديالك. ماكنتيش كتوصلك 300 صفحة دفعة وحدة وأنت كتسقسي روحك منين تبدا.",
      "حتى ملي شي موضوع كيبان صعيب، كان كيولي مفهوم شوية بشوية.",
      "وسقسيت روحي سؤال:",
      "علاش ماغاديش نعطي نفس التجربة للتلاميذ المغاربة؟",
      "ماشي غير نحطو الدروس فالانترنت.",
      "ولكن نعاودو نبنيو من جديد التجربة ديال التعلم بالكامل.",
      "نخلقو منصة متصورة للتلاميذ المغاربة، متلائمة مع البرنامج ديالهم، خدامة من التيليفون ديالهم، مبنية باش يقدرو يتقدمو خطوة بخطوة وسهلة بزاف باش يتعلمو بلا مايحسو ديما بلي فايتهم الموضوع.",
      "هادي هي الفكرة اللي وراء فهمت.",
      "إسم كيعني بالضبط «تفهم».",
      "لأنو فالأصل، التعلم ماخاصوش يكون غير الحفظ.",
      "خاصك تفهم.",
      "اليوم، فهمت كتبدا الطريق ديالها.",
      "عندنا بزاف ديال الحوايج نبنيوهم، بزاف ديال المواد نزيدوهم، بزاف ديال التحسينات نديروهم، وقبل كلشي بزاف نتعلمو من المستخدمين ديالنا.",
      "ولكن الهدف بقا بسيط:",
      "نخليو تجربة ديال التعلم ذات جودة، بثمن اللي العائلات تقدر بصح تحمل.",
      "تجربة كتعطي للتلميذ الرغبة فالتعلم عوض الخوف من مافهمش.",
      "تجربة كتبدل مادة صعيبة لخطوات صغار وسهلة.",
      "تجربة كتخلي التلميذ ياخد التيليفون ديالو، يحل فهمت، وغير يسقسي روحو:",
      "«أشنو غادي نفهم اليوم؟»",
      "مازال ماعرفش فين غادي توصل فهمت.",
      "ولكن كنعرف علاش بدينا.",
      "وكنعرف أن باقي عندنا طريق طويل بزاف.",
      "اليوم، كنحلو الصفحة الأولى.",
      "غدا، بغينا نكتبو قصة كاملة.",
      "مرحبا بيكم فمغامرة فهمت.",
      "لأن التعليم ماخاصوش يكون متاهة.",
      "خاصو يكون طريق.",
      "وكل طريق كيبدا بحاجة وحدة:",
      "تفهم.",
    ],
  },
  premium: {
    login: {
      metaTitle: "الاشتراك ديالي — فهمت",
      title: "الاشتراك ديالي",
      subtitle: "دخل بالحساب ديالك ديال فهمت باش تدير الاشتراك البريميوم ديالك.",
      emailLabel: "الإيميل",
      passwordLabel: "الباسوورد",
      submit: "كمل",
      errorInvalidCredentials: "الإيميل ولا الباسوورد ماشي صحيحين.",
      errorGeneric: "وقع مشكل. عاود المحاولة.",
      errorMissingFields: "دخل الإيميل والباسوورد ديالك.",
    },
    panel: {
      metaTitle: "الاشتراك ديالي — فهمت",
      greeting: "أهلا",
      alreadyPremiumBadge: "نتا ديجا بريميوم ✓",
      logout: "خروج",
      ribTitle: "المعلومات البنكية",
      ribIntro: "دير الفيرمو لهاد الحساب، من بعد صيفط لينا دليل الخلاص تحت.",
      ribBank: "البنك",
      ribHolder: "صاحب الحساب",
      ribNumber: "RIB",
      priceLabel: "ثمن البريميوم",
      promoCodeLabel: "كود برومو (اختياري)",
      promoCodePlaceholder: "كود برومو",
      promoCodeApply: "طبق",
      promoCodeApplied: "الكود تطبق",
      promoCodeInvalid: "كود البرومو ماشي صحيح.",
      proofTitle: "صيفط دليل الخلاص",
      proofIntro: "من بعد ما دار الفيرمو، صيفط تصويرة ولا PDF ديال الوصل. كنتحققو فظرف 48 ساعة ديال الخدمة.",
      proofLabel: "دليل الخلاص",
      submit: "صيفط",
      submitPending: "كيتصيفط...",
      submitError: "ما قدرناش نصيفطو دليل الخلاص. عاود المحاولة.",
      alreadyPendingNotice: "الطلب الأخير ديالك مازال كيتحقق فيه — ماخصكش تصيفط واحد آخر.",
      historyTitle: "التاريخ",
      historyEmpty: "ماكاين حتى طلب دابا.",
      statusPending: "كيتحقق فيه",
      statusApproved: "تقبل",
      statusRejected: "ترفض",
      amountLabel: "المبلغ",
      submittedOnLabel: "تصيفط فـ",
      rejectionReasonLabel: "السبب",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, ar };

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

export function getDictionary(locale: string): Dictionary {
  return isLocale(locale) ? dictionaries[locale] : dictionaries[DEFAULT_LOCALE];
}
