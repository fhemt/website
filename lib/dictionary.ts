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

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { howItWorks: string; subjects: string; faq: string; download: string };
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
    terms: { title: string; body: string[] };
    privacy: { title: string; body: string[] };
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
    lastUpdated: "Dernière mise à jour : en cours de rédaction",
    terms: {
      title: "Conditions d'utilisation",
      body: [
        "Cette page présentera les conditions d'utilisation de Fhemt une fois notre équipe juridique les aura finalisées : ce que couvre l'abonnement, les règles d'usage du contenu pédagogique, la résiliation, et les responsabilités de chaque partie.",
        "En attendant la version définitive, toute question peut être adressée à contact@fhemt.ma.",
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      body: [
        "Cette page détaillera précisément quelles données Fhemt collecte (compte, progression d'apprentissage, paiement), comment elles sont stockées et protégées, et les droits dont tu disposes sur tes données, une fois la version définitive validée par notre équipe juridique.",
        "En attendant, toute question peut être adressée à contact@fhemt.ma.",
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
    lastUpdated: "آخر تحديث: كتب دابا",
    terms: {
      title: "شروط الاستخدام",
      body: [
        "هاد الصفحة غادي تبين شروط استخدام فهمت من بعد ما الفريق القانوني ديالنا يكمل صياغتها: أشنو كيغطي الاشتراك، قواعد استعمال المحتوى التعليمي، إلغاء الاشتراك، ومسؤولية كل طرف.",
        "فانتظار النسخة النهائية، أي سؤال تقدر تصيفطو لـ contact@fhemt.ma.",
      ],
    },
    privacy: {
      title: "سياسة الخصوصية",
      body: [
        "هاد الصفحة غادي تفصل بالضبط أشنو من معلومات كيجمع فهمت (الحساب، التقدم فالتعلم، الخلاص)، كيفاش كيتخزنو ويتحاميو، والحقوق اللي عندك على المعلومات ديالك، من بعد ما الفريق القانوني ديالنا يصادق على النسخة النهائية.",
        "فانتظار هادشي، أي سؤال تقدر تصيفطو لـ contact@fhemt.ma.",
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
};

export const dictionaries: Record<Locale, Dictionary> = { fr, ar };

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

export function getDictionary(locale: string): Dictionary {
  return isLocale(locale) ? dictionaries[locale] : dictionaries[DEFAULT_LOCALE];
}
