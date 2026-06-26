// ============================================================
// dishesData.js — Your Pastry Portfolio with local images
// Images live in:
//   src/data/Entremets & Gateaux/
//   src/data/Tarts & Pies/
//   src/data/Preplated classical deserts/
// ============================================================

// ── Petit images ──
import cacaoPod     from "./Petit/Cacao_Pod.jpeg";
import petitFours   from "./Petit/Petit_Fours.jpeg";
import fingerPetit  from "./Petit/Finger_Petit.jpeg";

// ── Entremets & Gâteaux images ──
import blackForest        from "./entremet and gateaux/Black_Forest_Gateaux.jpeg";
import guanaja            from "./entremet and gateaux/Guanaja_Chocolate_Cake.jpeg";
import hazelnutMilkChoc   from "./entremet and gateaux/Hazelnut_Milk_Chocolate_Entremet.jpeg";
import mangoCoconut       from "./entremet and gateaux/Mango_coconut_chia_entremet.jpeg";


// ── Tarts & Pies images ──
import lemonMeringue      from "./tart and pie/Lemon_meringue_Tar.jpeg";
import banoffeePie        from "./tart and pie/Banoffee_Pie.jpeg";
import applePie           from "./tart and pie/Apple_Pie.jpeg";


// ── Pre-plated Desserts images ──
import tiramishu           from "./Preplated classical deserts/Tiramishu.jpeg";
import basqueCheesecake   from "./Preplated classical deserts/Basque_Cheesecake.jpeg";
import tresLeches         from "./Preplated classical deserts/Tres_Leches.jpeg";
import sacherTorte        from "./Preplated classical deserts/Sacher_Torte.jpeg";
// ============================================================

export const categories = [
  {
    id: "entremets-gateaux",
    slug: "entremets-gateaux",
    name: "Entremets & Gâteaux",
    tagline: "Architecture you can taste",
    description:
      "Multi-layered French entremets and gâteaux — mirror-glazed, mousse-filled masterworks built for both the eye and the palate.",
    imageUrl: blackForest,
    accentColor: "#7C3AED",
    dishes: [
      {
        id: "eg-01",
        name: "Black Forest Gâteaux",
        description:
          "A timeless German classic — layers of light chocolate génoise soaked in Kirsch syrup, sandwiched with whipped Chantilly cream and Morello cherries, finished with dark chocolate shavings and a cherry crown.",
        ingredients: ["Chocolate génoise", "Chantilly cream", "Morello cherries", "Kirsch syrup", "Dark chocolate shavings"],
        price: "—",
        imageUrl: blackForest,
        tags: ["Classic", "Chocolate"],
      },
      {
        id: "eg-02",
        name: "Guanaja Chocolate Cake",
        description:
          "An intense single-origin chocolate experience using Valrhona Guanaja 70%. Dense, fudgy layers of chocolate sponge alternating with a silky Guanaja ganache and a bitter cocoa glaze — bold and unapologetically dark.",
        ingredients: ["Valrhona Guanaja 70%", "Chocolate sponge", "Dark ganache", "Cocoa glaze", "Fleur de sel"],
        price: "—",
        imageUrl: guanaja,
        tags: ["Chocolate", "Signature"],
      },
      {
        id: "eg-03",
        name: "Hazelnut Milk Chocolate Entremet",
        description:
          "A refined entremet of feuilletine crunch, hazelnut praline cream, and airy milk chocolate mousse, set over a gianduja insert and finished with a velvet cocoa spray.",
        ingredients: ["Hazelnut praline", "Milk chocolate mousse", "Feuilletine crunch", "Gianduja insert", "Velvet cocoa spray"],
        price: "—",
        imageUrl: hazelnutMilkChoc,
        tags: ["Entremet", "Hazelnut"],
      },
      {
        id: "eg-04",
        name: "Mango Coconut Chia Entremet",
        description:
          "A tropical layered entremet with a chia coconut panna cotta base, mango passion fruit mousse, and a vibrant mango mirror glaze. Light, refreshing, and visually stunning.",
        ingredients: ["Mango mousse", "Coconut chia panna cotta", "Passion fruit gelée", "Mango mirror glaze"],
        price: "—",
        imageUrl: mangoCoconut,
        tags: ["Entremet", "Tropical"],
      },
      
    ],
  },
  {
    id: "tarts-pies",
    slug: "tarts-pies",
    name: "Tarts & Pies",
    tagline: "Perfection in every shell",
    description:
      "Crisp pâte sucrée and buttery shortcrust, filled with seasonal fruits, rich creams, and bold chocolates. Simple forms. Exceptional flavour.",
    imageUrl: lemonMeringue,
    accentColor: "#B45309",
    dishes: [
      {
        id: "tp-01",
        name: "Lemon Meringue Tart",
        description:
          "Sharp, silky lemon curd in a crisp buttery pâte sucrée shell, crowned with towering peaks of torched Italian meringue. The perfect balance of bright citrus acidity and cloud-soft sweetness.",
        ingredients: ["Lemon curd", "Pâte sucrée", "Italian meringue", "Lemon zest", "Butter"],
        price: "—",
        imageUrl: lemonMeringue,
        tags: ["Citrus", "Classic"],
      },
      {
        id: "tp-02",
        name: "Banoffee Pie",
        description:
          "A beloved British classic — buttery digestive biscuit base layered with slow-cooked toffee caramel, sliced fresh bananas, and a generous cloud of freshly whipped cream, finished with dark chocolate curls.",
        ingredients: ["Digestive biscuit base", "Toffee caramel", "Fresh banana", "Whipped cream", "Chocolate curls"],
        price: "—",
        imageUrl: banoffeePie,
        tags: ["No-Bake", "Classic"],
      },
      {
        id: "tp-03",
        name: "Apple Pie",
        description:
          "Double-crusted shortcrust pastry encasing a spiced filling of Bramley apples with cinnamon, nutmeg, and brown sugar. Baked until golden and flaky, served warm with vanilla custard.",
        ingredients: ["Bramley apples", "Shortcrust pastry", "Cinnamon", "Nutmeg", "Brown sugar"],
        price: "—",
        imageUrl: applePie,
        tags: ["Fruit", "Warm"],
      },
      
    ],
  },
  {
    id: "preplated-desserts",
    slug: "preplated-desserts",
    name: "Pre-plated Classical Desserts",
    tagline: "Theatre on a plate",
    description:
      "Individual plated desserts composed for fine dining service — classical technique expressed in precise garnish, sauce work, and elegant restraint.",
    imageUrl: tiramishu,
    accentColor: "#065F46",
    dishes: [
      {
        id: "pd-01",
        name: "Tiramishu",
        description:
          "The Italian masterpiece — Savoiardi biscuits soaked in strong espresso and Marsala, layered with a rich Mascarpone and egg cream, dusted generously with bitter Dutch-process cocoa. Set overnight for depth.",
        ingredients: ["Savoiardi biscuits", "Espresso", "Marsala wine", "Mascarpone", "Egg yolks", "Dutch cocoa"],
        price: "—",
        imageUrl: tiramishu,
        tags: ["Italian", "Classic"],
      },
      {
        id: "pd-02",
        name: "Basque Cheesecake",
        description:
          "San Sebastián's iconic burnt cheesecake — deliberately scorched on the outside, custard-soft and barely set within. Made with full-fat cream cheese, heavy cream, and vanilla, baked at high heat for a caramelised top.",
        ingredients: ["Cream cheese", "Heavy cream", "Eggs", "Vanilla", "Caster sugar"],
        price: "—",
        imageUrl: basqueCheesecake,
        tags: ["Cheesecake", "Burnt"],
      },
      {
        id: "eg-05",
        name: "Tres Leches",
        description:
          "A Latin-American celebration cake — ultra-light vanilla sponge soaked in a trio of whole milk, evaporated milk, and sweetened condensed milk, topped with soft whipped cream and a dusting of cinnamon.",
        ingredients: ["Vanilla sponge", "Whole milk", "Evaporated milk", "Condensed milk", "Whipped cream", "Cinnamon"],
        price: "—",
        imageUrl: tresLeches,
        tags: ["Soaked Cake", "Classic"],
      },
      {
        id: "tp-04",
        name: "Sacher Torte",
        description:
          "Vienna's most famous cake — two layers of dense chocolate sponge sandwiched with apricot jam, enrobed in a glossy dark chocolate fondant glaze. Served with unsweetened whipped cream.",
        ingredients: ["Chocolate sponge", "Apricot jam", "Dark chocolate fondant glaze", "Whipped cream"],
        price: "—",
        imageUrl: sacherTorte,
        tags: ["Chocolate", "Viennese"],
      },
    ],
  },
 
  {
    id: "petit",
    slug: "petit",
    name: "Petit",
    tagline: "Small bites, grand intention",
    description:
      "Delicate one-bite confections and miniature pastries — each a tiny jewel of technique, flavour, and artistry, served to close a fine meal or gifted as an edible keepsake.",
    imageUrl: petitFours,
    accentColor: "#BE185D",
    dishes: [
    
      {
        id: "pt-02",
        name: "Cacao Pod Petit",
        description:
          "A sculpted chocolate shell in the form of a cacao pod, moulded from tempered Valrhona dark chocolate and filled with a silky ganache centre. A showpiece that celebrates chocolate from bean to bite.",
        ingredients: ["Valrhona dark chocolate", "Dark ganache", "Cocoa butter", "Gold lustre dust"],
        price: "—",
        imageUrl: cacaoPod,
        tags: ["Chocolate", "Sculpted"],
      },
      {
        id: "pt-03",
        name: "Petit Fours Glacés",
        description:
          "Classic fondant-glazed petit fours — delicate squares of génoise layered with jam and marzipan, enrobed in a smooth pastel fondant glaze and finished with a crystallised flower or piped chocolate motif.",
        ingredients: ["Génoise", "Marzipan", "Apricot jam", "Fondant glaze", "Crystallised flowers"],
        price: "—",
        imageUrl: petitFours,
        tags: ["Classic", "Glazed"],
      },
      {
        id: "pt-04",
        name: "Finger Petit",
        description:
          "Elegant finger-shaped petits in the éclair tradition — choux fingers piped with flavoured diplomat creams (vanilla, pistachio, raspberry), glazed with coloured fondant and crowned with a fine garnish.",
        ingredients: ["Choux pastry", "Diplomat cream", "Fondant glaze", "Pistachio", "Raspberry"],
        price: "—",
        imageUrl: fingerPetit,
        tags: ["Choux", "Assorted"],
      },
    ],
  },
];

// Helper: look up a single category by its URL slug
export const getCategoryBySlug = (slug) =>
  categories.find((cat) => cat.slug === slug) || null;
