export const BOOKING_URL = "https://www.treatwell.lt/salonas/grozio-studija-ursana/";
export const BOOKITNOW_URL = "https://www.bookitnow.lt/ursana";
export const ELEKTROEPILIACIJA_URL = "https://plaukeliusalinimas.lt/";
export const INSTAGRAM_URL = "https://www.instagram.com/";
export const FACEBOOK_URL = "https://www.facebook.com/elektroepiliacija.depiliacija/";

export const GALLERY_IMAGES = [
  "https://cdn1.treatwell.net/images/view/v2.i17384929.w720.h480.xD58E39A9/", // Clean studio styling stations & mirrors
  "https://cdn1.treatwell.net/images/view/v2.i17389398.w720.h480.x6C9B42C1/", // Clean studio interior with plants & window
  "https://cdn1.treatwell.net/images/view/v2.i15344107.w720.h480.x65834E79/", // Studio entrance & reception
  "https://cdn1.treatwell.net/images/view/v2.i15344096.w720.h480.x3BBBD1FA/", // Treatment room
  "https://cdn1.treatwell.net/images/view/v2.i15336932.w720.h480.xA6ED6BC2/", // Care equipment
  "https://cdn1.treatwell.net/images/view/v2.i17389381.w720.h480.x1B22CFF0/", // Exterior entrance
];

export const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80",
];

export type ServiceItem = { name: string; price: string };
export type ServiceCategory = { key: string; label: string; items: ServiceItem[]; note?: string };

export const SERVICES: ServiceCategory[] = [
  {
    key: "veidas",
    label: "Veido procedūros",
    items: [
      { name: "Veido valymas", price: "41-49 €" },
      { name: "Ispaniškas veido plastinis masažas", price: "35 €" },
      { name: "SMAS liftingo masažas", price: "39 €" },
      { name: "BB Glow ilgalaikis tonavimas", price: "50 €" },
      { name: "CO₂ karboksiterapija", price: "36 €" },
      { name: "Mezoterapija DERMAPEN", price: "60 €" },
      { name: "Veido procedūra su hialurono putėsiais", price: "35 €" },
      { name: "CO₂ procedūra su hialurono kauke", price: "39 €" },
      { name: "Radijo bangų liftingas", price: "28-90 €" },
      { name: "Stangrinamoji veido procedūra", price: "60-150 €" },
      { name: "Kolageno lakštinė kaukė (+ nemokama diagnostika)", price: "40 €" },
      { name: "Dezinkrustacija (ionoforezė)", price: "45 €" },
      { name: "Transderminė aparatinė deguonies terapija CO₂", price: "49 €" },
      { name: "Kobido veido masažas", price: "39 €" },
      { name: "Rūgštinis regeneruojamasis veido valymas (Natinuel)", price: "55 €" },
      { name: "Rūgštinis acne pilingas (Natinuel)", price: "55 €" },
    ],
  },
  {
    key: "lazeris",
    label: "Lazerinė depiliacija",
    note: "Kokybiška, saugi ir efektyvi procedūra. Tikslią kainą lemia zona - nuo mažų zonų iki viso kūno.",
    items: [
      { name: "Plaukų šalinimas lazeriu moterims", price: "nuo 22 €" },
      { name: "Plaukų šalinimas lazeriu vyrams", price: "nuo 35 €" },
    ],
  },
  {
    key: "elektroepiliacija",
    label: "Elektroepiliacija",
    note: "Kolegės atliekama procedūra. Išsamesnė informacija svetainėje plaukeliusalinimas.lt.",
    items: [
      { name: "Elektroepiliacija (išsamiau svetainėje)", price: "plaukeliusalinimas.lt" },
    ],
  },
  {
    key: "masazai",
    label: "Masažai",
    items: [
      { name: "Nugaros masažas", price: "30 €" },
      { name: "Skulptūrinis (apimčių mažinimo) masažas", price: "35 €" },
      { name: "Anticeliulitinis masažas", price: "39 €" },
      { name: "Anticeliulitinis masažas + CELO gel įvyniojimas", price: "70 €" },
      { name: "Blefarolift masažas", price: "35 €" },
      { name: "Kobido veido masažas", price: "39 €" },
      { name: "3D Holivudo liftingo masažas", price: "59 €" },
    ],
  },
  {
    key: "antakiai",
    label: "Antakiai ir blakstienos",
    items: [
      { name: "Antakių dažymas ELAN + korekcija vašku", price: "20 €" },
      { name: "Blakstienų laminavimas IN LEI LASH (Italija)", price: "35-39 €" },
      { name: "Antakių laminavimas + keratinas + dažymas", price: "25 €" },
      { name: "Antakių ilgalaikis modeliavimas (laminavimas)", price: "25-30 €" },
    ],
  },
  {
    key: "depil",
    label: "Depiliacija",
    items: [
      { name: "Kojų depiliacija", price: "20-30 €" },
      { name: "Rankų ir pažastų depiliacija", price: "20-29 €" },
      { name: "Veido depiliacija siūlu (threading)", price: "16-23 €" },
    ],
  },
  {
    key: "galva",
    label: "Galvos odos priežiūra",
    items: [{ name: "Darsonvalizacija (nuo plaukų slinkimo)", price: "15 €" }],
  },
];

export type ReviewItem = {
  name: string;
  service: string;
  rating: number;
  text: string;
  date?: string;
};

export const REVIEWS: ReviewItem[] = [
  {
    name: "Daiva",
    service: "Veido procedūra ir odos atgaivinimas",
    rating: 5,
    text: "Nuostabi specialistė, puikiai išmano savo darbą ir odos poreikius. Po procedūros veidas tiesiog švyti, o rami atmosfera leido visiškai atsipalaiduoti. Tikrai sugrįšiu dar ne kartą!",
    date: "Prieš 2 sav.",
  },
  {
    name: "Ugnė",
    service: "Kobido veido masažas",
    rating: 5,
    text: "Meistrė darbą atliko nepaprastai kruopščiai ir švelniai. Kobido masažas buvo kažkas tobulo: visiška ramybė, atpalaiduoti veido raumenys ir matomas stangrinimo efektas iš karto po vizito.",
    date: "Prieš 1 mėn.",
  },
  {
    name: "Virginija",
    service: "Lazerinė depiliacija",
    rating: 5,
    text: "Labai patiko meistrės profesionalumas, švara ir studijos jaukumas. Procedūra atlikta greitai, kokybiškai ir visiškai be diskomforto. Nuoširdus ačiū už puikią patirtį.",
    date: "Prieš 3 sav.",
  },
  {
    name: "Beata",
    service: "Veido estetika ir regeneracija",
    rating: 5,
    text: "Lankausi šioje studijoje jau ne pirmą kartą. Kiekvienas vizitas apgalvotas iki smulkmenų: aukšta kokybė, asmeninis dėmesys ir jokio skubėjimo. Rekomenduoju visoms!",
    date: "Prieš 1 mėn.",
  },
  {
    name: "Rasa",
    service: "Atkuriamasis veido valymas",
    rating: 5,
    text: "Labai profesionali konsultacija ir itin kruopštus atlikimas. Meistrė atsakė į visus klausimus apie odos priežiūrą namuose. Rezultatas pranoko lūkesčius.",
    date: "Prieš 2 mėn.",
  },
  {
    name: "Kristina",
    service: "Masažų terapija ir relaksacija",
    rating: 5,
    text: "Rekomenduoju 100%! Šilta, privati erdvė pačiame centre, atidumas kiekvienai smulkmenai ir nuostabios meistrės rankos. Išėjau pailsėjusi ir atsigavusi.",
    date: "Prieš 2 mėn.",
  },
];
