/* Site content for the Oxford Salsa Society (OUSS).
 *
 * --------------------------------------------------------------------
 * NON-TECH EDITOR'S GUIDE
 * --------------------------------------------------------------------
 * Everything the public site shows is in this file. To edit:
 *   1. Open this file in a text editor.
 *   2. Change the text between the "double quotes".
 *   3. Save the file. The site rebuilds automatically on git push.
 *
 * Rules of thumb:
 *   - Keep the quotes and commas exactly where they are.
 *   - Times are written like "19:00–20:00" (use the en-dash – not a hyphen).
 *   - Lines starting with "//" are comments — they are ignored by the site.
 *
 * --------------------------------------------------------------------
 * TERM CARD
 * --------------------------------------------------------------------
 * TERM holds the term name + length.
 * TERM_CARD is the list of weekly events. Each entry is one evening
 * (e.g. Monday Salsa) and contains a `classes` array — one entry per
 * level. The site shows a tile per evening; clicking it opens a dialog
 * with the classes and descriptions.
 */

export const TERM = {
  name: "Trinity 2026",
  weeks: 8,
  startSunday: "2026-05-03", // ISO date of Week 1's Sunday. Subsequent weeks +7 days.
  blurb: "Same times every week of term. Drop in whenever — no partner or experience needed.",
};

export const TERM_CARD = [
  {
    id: "mon-salsa",
    dayOfWeek: 1, // 0=Sun, 1=Mon, ... 6=Sat
    day: "Mondays",
    title: "LA Salsa",
    style: "salsa",
    venue: "St Matthew's Church",
    address: "Marlborough Rd, Oxford",
    booking: {
      note: "Booking required — book online via Ticketscandy (no pay-at-door)",
      url: "https://ticketscandy.com/e/monday-salsa-classes-13593",
      label: "Book Monday Salsa",
    },
    classes: [
      {
        level: "Beginners",
        time: "18:50–19:50",
        description: "Fundamentals — no partner or experience needed. Timing and basic partner work.",
      },
      {
        level: "Improvers",
        time: "20:00–21:00",
        description: "Refine technique. Requires 6+ weeks of Beginners.",
      },
      {
        level: "Intermediate",
        time: "20:00–21:00",
        description: "Flow, styling and control. Runs in parallel with Improvers — teacher approval to move up.",
      },
      {
        level: "Advanced",
        time: "21:10–22:10",
        description: "Complex patterns and performance-quality work. Teacher approval to move up.",
      },
    ],
  },
  {
    id: "thu-bachata",
    dayOfWeek: 4,
    day: "Thursdays",
    title: "Bachata",
    style: "bachata",
    venue: "St Columba's Church",
    address: "Alfred St, Oxford OX1 4EH",
    booking: {
      note: "Pay at the door — card only",
      url: null,
      label: null,
    },
    classes: [
      {
        level: "Beginners",
        time: "19:00–20:00",
        description: "Discover the rhythm of bachata. Essential steps and partner connection.",
      },
      {
        level: "Improver / Intermediate",
        time: "20:00–21:00",
        description: "Take it to the next level with fluid moves and more intricate partner work.",
      },
      {
        level: "Advanced",
        time: "21:00–22:00",
        description: "Complex musicality, advanced body movement and dynamic partner combinations.",
      },
    ],
  },
  {
    // Partner event — runs all year, every Wednesday.
    id: "wed-muevete",
    dayOfWeek: 3,
    day: "Wednesdays",
    title: "¡Muévete!",
    style: "partner",
    venue: "The Oxford Retreat",
    address: "Hythe Bridge St, Oxford",
    booking: {
      note: "Partner event with ¡Muévete! · every Wednesday, all year round (not just term-time) · pay at the door (£5 members / £7 standard) — card preferred, cash may be accepted",
      url: "https://muevete-oxford.co.uk",
      label: "Visit Muévete",
    },
    classes: [
      {
        level: "Beginners",
        time: "19:30–20:45",
        description: "Beginners class. Usually salsa, with bachata once a month.",
      },
      {
        level: "Improvers",
        time: "19:30–20:45",
        description: "Improvers class. Usually salsa, with bachata once a month (guest teacher Sergio Fernandez).",
      },
      {
        level: "Social dancing",
        time: "20:45–00:00",
        description: "Open social dance floor — bachata, salsa, kizomba. All levels welcome.",
      },
    ],
  },
  {
    // Fortnightly workshop — runs only on weeks listed in `weeks`.
    // Omit `weeks` for events that run every week.
    id: "sun-cali-salsa",
    dayOfWeek: 0,
    weeks: [1, 3, 5, 7],
    day: "Sundays",
    title: "Cali Salsa",
    style: "workshop",
    venue: "Old Fire Station",
    address: "40 George St, Oxford OX1 2AQ",
    booking: {
      note: "Workshop with Juan · pay at the door — card only (£6 members / £9 standard)",
      url: null,
      label: null,
    },
    classes: [
      {
        level: "Cali-style workshop",
        time: "15:30–17:00",
        description: "Cali-style salsa workshop with Juan. Doors 15:30, workshop runs to 17:00. Drop-in — all welcome, beginner-friendly.",
      },
    ],
  },
];

/* Style colours — used by the tiles and chips. Keep ids in sync with TERM_CARD.style. */
export const STYLES = [
  { id: "salsa", name: "LA Salsa" },
  { id: "bachata", name: "Bachata" },
  { id: "workshop", name: "Workshop" },
  { id: "partner", name: "Partner event" },
];

/* --------------------------------------------------------------------
 * PRICING — three cards. Standard / associate rates live in `features`.
 * -------------------------------------------------------------------- */

export const PRICING = [
  {
    name: "Drop-In",
    price: "4",
    suffix: "per class · member",
    tag: null,
    features: [
      "Standard rate £7",
      "Same-day extra class: £3 (£4 standard)",
      "Bundle of 8 classes: £25 (£40 standard)",
      "Card only at the door · cash may be accepted at ¡Muévete!",
    ],
    cta: "Just turn up",
    featured: false,
  },
  {
    name: "Single Term",
    price: "15",
    suffix: "student · 8 weeks",
    tag: "Most picked",
    features: [
      "Associate rate £21",
      "Member price on every class",
      "Discounts on socials & workshops",
      "Expires end of university term",
    ],
    cta: "Become a member",
    featured: false,
  },
  {
    name: "Annual",
    price: "25",
    suffix: "student · full year",
    tag: "Best value",
    features: [
      "Associate rate £40",
      "Valid 5 Oct '25 – 4 Oct '26",
      "Member price on every class",
      "Discounts at all socials & the annual ball",
    ],
    cta: "Lock it in",
    featured: true,
  },
];

/* --------------------------------------------------------------------
 * PERFORM — society performance teams. Each team is a curated group
 * that rehearses a choreographed routine across the term, performing
 * at the end-of-term showcase and the annual ball.
 * -------------------------------------------------------------------- */

export const PERFORM = {
  year: "2025 / 26",
  intro: "This year's line-up: Open Salsa, Intermediate Salsa, Bachata, and a brand-new Heels team. Teams rehearse a routine across the term and perform at the Dance Club Latino (DCL) university competition, the end-of-term showcase, and the annual Salsa Ball.",
  audition: "Auditions run at the start of the academic year — next round TBA",
  teams: [
    { id: "salsa-open",  name: "Open Salsa",          style: "salsa",   captains: "Carlota" },
    { id: "salsa-int",   name: "Intermediate Salsa",  style: "salsa",   captains: "Brianna & Duncan" },
    { id: "bachata",     name: "Bachata",             style: "bachata", captains: "Natasha" },
    { id: "heels",       name: "Heels",               style: "heels",   captains: "TBA" },
  ],
};

/* --------------------------------------------------------------------
 * COMMITTEE — add `photo: "/assets/headshots/file.jpg"` for a headshot,
 * otherwise initials are shown.
 * -------------------------------------------------------------------- */

export const COMMITTEE = [
  // Executive
  { name: "Rosi Evans Pena", role: "President", since: "presidentouss1@gmail.com", hue: 18, photo: "/assets/headshots/president.jpg" },
  { name: "Mishaela Andrews", role: "Treasurer", since: "treasurer.ouss@gmail.com", hue: 6, photo: "/assets/headshots/treasurer.jpg" },
  { name: "Vittoria Baglieri", role: "Secretary", since: "secretaryouss1@gmail.com", hue: 24 },
  // General committee
  { name: "Lila", role: "Social Secretary", since: "Socials", hue: 32 },
  { name: "Aaliyah", role: "Social Secretary", since: "Socials", hue: 12 },
  { name: "Juan", role: "Social Secretary", since: "Socials", hue: 28 },
  { name: "Gywneth", role: "Ball President", since: "Annual Ball", hue: 8 },
  { name: "Ben Kaye", role: "Web Master", since: "webmaster@ouss.co.uk", hue: 20 },
  { name: "Natasha", role: "Bachata Intermediate", since: "Team Captain", hue: 36 },
  { name: "Carlota", role: "Salsa Improvers", since: "Team Captain", hue: 14 },
  { name: "Brianna", role: "Salsa Intermediate", since: "Team Captain", hue: 22 },
  { name: "Duncan", role: "Salsa Intermediate", since: "Team Captain", hue: 4 },
];

/* --------------------------------------------------------------------
 * SOCIALS — placeholder until real dates are confirmed.
 * -------------------------------------------------------------------- */

export const SOCIALS = [
  {
    when: "Sat 9 May 2026",
    title: "Salsa & Bachata Ball 2026",
    sub: "Oxford Town Hall, St Aldate's · 13:00 – 03:00 · workshops, classes, live acts, two-room DJ, afterparty · cocktail attire recommended",
    price: "Door tickets only · £5 off with member code",
    pattern: "stripes",
    hue: 18,
    dark: true,
    url: "https://ticketscandy.com/e/oxford-salsa-and-bachata-ball-2026-13603",
    // Set `closed: true` once the event has passed — the card stays
    // visible as a memento and the price is replaced with "See you next year".
    closed: true,
  },
];
