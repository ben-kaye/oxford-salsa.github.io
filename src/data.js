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
  name: "Michaelmas 2026",
  weeks: 8,
  startSunday: "2026-10-11", // ISO date of Week 1's Sunday. Subsequent weeks +7 days.
  blurb: "Same times every week of term. Drop in whenever — no partner or experience needed.",
};

export const TERM_CARD = [
  {
    id: "mon-salsa",
    dayOfWeek: 1, // 0=Sun, 1=Mon, ... 6=Sat
    day: "Mondays",
    title: "Salsa",
    style: "salsa",
    venue: "St Matthew's Church",
    address: "Marlborough Rd, Oxford, OX1 4LW",
    booking: {
      note: "Booking required — book online via Ticketscandy (no pay-at-door)",
      url: "https://ticketscandy.com/e/monday-salsa-classes-13593",
      label: "Book Monday Salsa",
    },
    classes: [
      {
        level: "Beginners 1 & 2",
        time: "19:00-20:00",
        description: "With Connal and Ciara. Fundamentals — no partner or experience needed. Timing and basic partner work.",
      },
      {
        level: "Improvers",
        time: "20:00–21:00",
        description: "With Duncan and Brianna. Refine technique. Requires 6+ weeks of Beginners.",
      },
      {
        level: "Intermediate 1",
        time: "20:00–21:00",
        description: "With Duncan and Brianna. Flow, styling and control. Runs in parallel with Improvers — teacher approval to move up.",
      },
      {
        level: "Intermediate 2",
        time: "21:00–22:00",
        description: "With Jennifer and Annan. Complex patterns and performance-quality work. Teacher approval to move up.",
      },
    ],
  },
  {
    id: "thu-bachata",
    dayOfWeek: 4,
    day: "Thursdays",
    title: "Bachata",
    style: "bachata",
    venue: "The Oxford Retreat",
    address: "Hythe Bridge St, Oxford, OX1 2EW",
    booking: {
      note: "Pay at the door — card only. With Sergio and Salomé.",
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
    address: "Hythe Bridge St, Oxford, OX1 2EW",
    booking: {
      note: "In partnership with ¡Muévete! · every Wednesday, all year round (not just term-time) with Gwyneth, Julian, Jack, and Laura · pay at the door (£4 members / £6 non-members) — card preferred, cash may be accepted",
      url: "https://muevete-oxford.co.uk",
      label: "Visit Muévete",
    },
    classes: [
      {
        level: "Beginners",
        time: "19:30–20:30",
        description: "Beginners class. Usually salsa, with bachata once a month.",
      },
      {
        level: "Improvers",
        time: "19:30–20:30",
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
    id: "fri-society-socials",
    dayOfWeek: 5,
    weeks: [2],
    day: "Fridays",
    title: "OUSS Socials",
    style: "partner",
    venue: "St Catherine's College MCR",
    // address: "40 George St, Oxford OX1 2AQ",
    booking: {
      note: "For full details, follow us on Instagram and sign up to the newsletter! Free event with pizza, an intro dance class, and games!",
      url: null,
      label: null,
    },
    classes: [
      {
        level: null,
        time: null,
        description: null,
      },
    ],
  },
  // {
  //   // Fortnightly workshop — runs only on weeks listed in `weeks`.
  //   // Omit `weeks` for events that run every week.
  //   id: "sun-cali-salsa",
  //   dayOfWeek: 0,
  //   weeks: [1, 3, 5, 7],
  //   day: "Sundays",
  //   title: "Cali Salsa",
  //   style: "workshop",
  //   venue: "Old Fire Station",
  //   address: "40 George St, Oxford OX1 2AQ",
  //   booking: {
  //     note: "Workshop with Juan · pay at the door — card only (£6 members / £9 non-members)",
  //     url: null,
  //     label: null,
  //   },
  //   classes: [
  //     {
  //       level: "Cali-style workshop",
  //       time: "15:30–17:00",
  //       description: "Cali-style salsa workshop with Juan. Doors 15:30, workshop runs to 17:00. Drop-in — all welcome, beginner-friendly.",
  //     },
  //   ],
  // },
  {
    id: "sun-bachata-solo-technique",
    dayOfWeek: 0,
    weeks: [2, 3, 4, 5],
    day: "Sundays",
    title: "Bachata Solo Technique",
    style: "workshop",
    venue: "Old Fire Station",
    address: "40 George St, Oxford, OX1 2AQ",
    booking: {
      note: "Pay at the door (£7 members / £9f non-members)",
      url: null,
      label: null,
    },
    classes: [
      {
        level: "Open Level",
        time: "15:00-16:00",
        description: "Bachata styling and body movement w/ Natasha.",
      },
    ],
  },
];

/* Style colours — used by the tiles and chips. Keep ids in sync with TERM_CARD.style. */
export const STYLES = [
  { id: "salsa", name: "LA Salsa" },
  { id: "bachata", name: "Bachata" },
  { id: "workshop", name: "Workshop" },
  { id: "partner", name: "Social dancing" },
];

/* --------------------------------------------------------------------
 * PRICING — three cards. Non-member / associate rates live in `features`.
 *
 * RATE TERMINOLOGY (for editors):
 *   - "Member rate"      → discounted class price for cardholders.
 *   - "Non-member rate"  → full price at the door, no card.
 *   - "Associate rate"   → the membership-card price for members of the
 *                          public. Equivalent to a member card (same perks
 *                          / same discounted class rate), but the
 *                          university only allows students & staff to hold
 *                          a "member" card — everyone else joins as an
 *                          associate at a slightly higher card price.
 * -------------------------------------------------------------------- */

export const PRICING = [
  {
    name: "Drop-In",
    price: "4",
    suffix: "per class · member",
    tag: null,
    features: [
      "Non-member rate £6",
      "Same-day extra class: £3 (£4 non-member)",
      "Bundle of 8 classes: £25 (£40 non-member)",
      "Card only at the door · cash may be accepted at ¡Muévete!",
    ],
    cta: "Just turn up",
    featured: false,
  },
  {
    name: "Single Term",
    price: "15",
    suffix: "Student & Staff · 8 weeks",
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
    price: "20",
    suffix: "Student & Staff · full year",
    tag: "Best value",
    features: [
      "Associate rate £45",
      "Valid 5 Oct '26 – 4 Oct '27",
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
  year: "2026 / 27",
  intro: "This year's line-up: Open Salsa, Intermediate Salsa, and Intermediate Bachata. Teams rehearse a routine across the term and perform at the Dance Club Latino (DCL) university competition, the end-of-term showcase, and the annual Salsa Ball.",
  audition: "Auditions run at the start of the academic year — next round TBA",
  teams: [
    { id: "salsa-open",  name: "Open Salsa",          style: "salsa",   captains: "TBA" },
    { id: "salsa-int",   name: "Intermediate Salsa",  style: "salsa",   captains: "Connall & Ciara" },
    { id: "bachata",     name: "Intermediate Bachata",style: "bachata", captains: "Natasha & Ysaline" },
  ],
};

/* --------------------------------------------------------------------
 * COMMITTEE
 *   - `photo`: "/assets/headshots/file.jpg" for a headshot, otherwise
 *     initials are shown.
 *   - `bio`: optional. A sentence or two shown in the pop-up card when
 *     a visitor clicks a committee member's photo or name. Safe to
 *     leave off — the pop-up will just skip that section.
 * -------------------------------------------------------------------- */

export const COMMITTEE = [
  // Executive
  {
    name: "Arina",
    role: "President",
    contact: "presidentouss1@gmail.com",
    hue: 18,
    photo: "/assets/headshots/Arina.jpg",
    bio: "I'm studying Spanish and Italian at Wadham College. I'm Russian by birth. I am looking forward to the crew dates and social dancing events.",
  },
  {
    name: "Aarohi",
    role: "Treasurer",
    contact: "treasurer.ouss@gmail.com",
    hue: 6,
    photo: "/assets/headshots/Aarohi.jpg",
    bio: "I am studying Chemistry at Queen's College. Mangoes are my favorite fruit, and I'm most looking forward to the Salsa Ball!.",
  },
  // {
  //   name: "",
  //   role: "Secretary",
  //   contact: "secretaryouss1@gmail.com",
  //   hue: 24,
  //   bio: "Handles the society's admin and paperwork, and is a good first port of call for general queries.",
  // },
  // General committee
  {
    name: "Oscar",
    role: "Social Secretary",
    contact: "OUSS Socials",
    hue: 32,
    photo: "/assets/headshots/Oscar.jpg",
    bio: "I am studying Immunology at St. Catz College. My initials are OMFG. I'm most looking forward to the DCL festival.",
  },
  {
    name: "Isabel",
    role: "Social Secretary",
    contact: "OUSS Socials",
    photo: "/assets/headshots/Isabel.png",
    hue: 12,
    bio: "I am doing my DPhil in Neuroscience at Trinity College. I can't pick my favorite dance style! And, I'm most looking forward to meeting new people and keeping on dancing.",
  },
  {
    name: "Gywneth",
    role: "Salsa Ball Manager",
    contact: "",
    hue: 8,
    photo: "/assets/headshots/Gwyneth.jpg",
    bio: "Obviously looking most forward to the Oxford Salsa and Bachata Ball. It's the highlight of the year!",
  },
  {
    name: "Bryce (he/him)",
    role: "Welfare Member",
    contact: "",
    hue: 8,
    bio: "I am doing my PhD in Maths at UCL. I love to lead and follow. I am most looking forward to all the socials and meeting everyone!",
  },
  {
    name: "Lisa (she/her)",
    role: "Welfare Member",
    contact: "",
    hue: 8,
    photo: "/assets/headshots/Lisa.jpg",
    bio: "I am doing my DPhil in Health Data Science at Reuben College. I've re-used my first salsa performance dress as a flamingo costume for halloween, and I'm looking forward to dancing with all the new society memebers!",
  },
  {
    name: "Graham",
    role: "Web Master",
    contact: "webmaster@ouss.co.uk",
    hue: 20,
    photo: "/assets/headshots/Graham.jpg",
    bio: "I am a professional working in motorsport. I've never lived more than 5 years in any one place continuously. I'm looking forward to weekly On-1 lessons to work on my salsa skill set!",
  },
  {
    name: "Natasha",
    role: "Bachata Intermediate Team Captain",
    contact: "",
    hue: 36,
    photo: "/assets/headshots/Natasha.jpg",
    bio: "I am doing my DPhil in Engineering Biology at Kellogg College. I lead and follow bachata. I'm most looking forward to kicking off training with the bachata team <3.",
  },
  {
    name: "Ysaline",
    role: "Bachata Intermediate Team Captain",
    contact: "",
    hue: 14,
    photo: "/assets/headshots/Ysaline.jpg",
    bio: "I was forced to attend a salsa class 3 years ago and now here we are! I'm looking forward to training with the team and loads of social dancing!",
  },
  {
    name: "Connall",
    role: "Salsa Intermediate Team Captain",
    contact: "",
    hue: 22,
    photo: "/assets/headshots/Connall_Ciara.jpg",
    bio: "I am doing my PhD in Maths at New College. And I'm most looking forward to team training!",
  },
  {
    name: "Ciara",
    role: "Salsa Intermediate Team Captain",
    contact: "",
    hue: 4,
    photo: "/assets/headshots/Connall_Ciara.jpg",
    bio: "I am a teacher in the area, and I'm most looking forward to team training of course!.",
  },
];

/* --------------------------------------------------------------------
 * SOCIALS — placeholder until real dates are confirmed.
 * -------------------------------------------------------------------- */

export const SOCIALS = [
  {
    when: "Sat 6 Jun 2026",
    title: "Latin BOP",
    sub: "Kellogg College presents, in collaboration with Oxford Salsa Society · beginner salsa classes, performances, social dancing · two rooms · live DJ · Kellogg College · 20:00 – 01:00",
    price: "Entry TBC",
    pattern: "diagonal",
    hue: 14,
    dark: false,
    url: null,
    closed: true,
  },
  {
    // `recurring: true` keeps this out of the Hero's "Next social" slot —
    // it's shown only as a card in the Socials section.
    recurring: true,
    when: "Muévete · Wednesday",
    title: "¡Muévete! Social",
    sub: "Our weekly social-dancing night in partnership with ¡Muévete! · The Oxford Retreat, Hythe Bridge St · class included 19:30 – 20:30 · social floor 20:45 – late · open to everyone (not club-only)",
    price: "£4 members / £6 non-members · pay at the door",
    pattern: "dots",
    hue: 200,
    dark: false,
    url: "https://muevete-oxford.co.uk",
    closed: false,
  },
  {
    when: "Sat 22nd May 2027",
    title: "Salsa & Bachata Ball 2027",
    sub: "Oxford Town Hall, St Aldate's · 13:00 – 03:00 · workshops, classes, live acts, two-room DJ, afterparty · cocktail attire recommended",
    price: "",
    pattern: "stripes",
    hue: 18,
    dark: true,
    url: "https://ticketscandy.com/e/oxford-salsa-and-bachata-ball-2026-13603",
    // Set `closed: true` once the event has passed — the card stays
    // visible as a memento and the price is replaced with "See you next year".
    closed: true,
  },
];

/* --------------------------------------------------------------------
 * FAQ — Beginner FAQ section. Each entry is one question + one answer,
 * shown in order. Add, remove or reorder freely.
 * -------------------------------------------------------------------- */

export const FAQ = [
  {
    question: "Do I need a partner or any experience to come?",
    answer: "No! We rotate partners throughout classes, so you're welcome to come on your own.",
  },
  {
    question: "What should I wear?",
    answer: "Just wear normal, comfortable clothes that you can move in - there's no need for any special dancewear.",
  },
  {
    question: "What if I've never danced before?",
    answer: `That's absolutely fine! Most of our members start as complete beginners. Just bring yourself, be ready to have fun, and we'll teach you everything you need to know.`,
  },
];

/* --------------------------------------------------------------------
 * PHOTO_GALLERY — filenames only. Every file must sit inside
 * /public/assets/photogallery/. List only the ones you want shown on
 * the site (in this order) — other photos can sit in that folder
 * unused without breaking anything.
 *
 * Example once photos are added:
 *   export const PHOTO_GALLERY = [
 *     "ball-2026-01.jpg",
 *     "showcase-2026-02.jpg",
 *     "practica-03.jpg",
 *   ];
 * -------------------------------------------------------------------- */

export const PHOTO_GALLERY = [];
