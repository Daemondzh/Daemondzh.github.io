export const site = {
  name: 'Daemond Zhang',
  title: 'Daemond Zhang — A personal website',
  description:
    'Daemond Zhang is a PhD student in physics at MIT, interested in theoretical physics, quantum gravity, holography, and related questions.',
  affiliation: 'PhD student in Physics · MIT Center for Theoretical Physics',
  location: 'Cambridge, Massachusetts',
  intro:
    'I am a physicist interested in quantum gravity, holography, entanglement, and the mathematical structures behind spacetime.',
  github: 'https://github.com/Daemondzh',
  cvUrl: '/about/#cv',
  nav: [
    { label: 'Research', href: '/research/' },
    { label: 'Writing', href: '/writing/' },
    { label: 'Visuals', href: '/videos/'},
    { label: 'About', href: '/about/' },
    { label: 'CV', href: '/about/#cv' },
  ],
};

export const research = [
  {
    number: '01',
    title: 'Quantum gravity and holography',
    description:
      'Questions about spacetime, entanglement, and holographic descriptions of gravity. Replace this sentence with your current research problem and what you are trying to understand.',
    links: [],
  },
  {
    number: '02',
    title: 'Entanglement and holography',
    description:
      'Past research at Tsinghua University on holography and entanglement. Add a more precise project description, collaborators, and links to papers or notes when appropriate.',
    links: [],
  },
  {
    number: '03',
    title: 'Gravitational path integrals and operator algebras',
    description:
      'Research experience at UC Santa Barbara exploring gravitational path integrals and operator-algebraic questions in gravity.',
    links: [],
  },
];

export const writing = [
  {
    title: 'Hello World',
    date: '2024-02-24',
    href: '/2024/02/24/hello-world/',
    description: 'The original Hexo starter post, preserved so the old URL does not break.',
  },
];

export const videos = [
  {
    title: 'A pedagogical presentation on 3d gravity',
    date: '2025',
    type: 'Talks',
    description:
      'This is a short introduction to the formulation of 3d Einstein gravity classically as Chern-Simons theory. It was intended for the final presentation of the course 8.325 in 2025, and was designed to be detailed and pedagogical.',
    watchUrl: 'https://www.bilibili.com/video/BV1PaVWzdEPM',
    embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1PaVWzdEPM',
  },

  {
    title: 'Recitations on quantum field theory',
    date: '2026',
    type: 'Pedogogy',
    description:
      'This is a collection of recitations I gave for 8.324 on various topics related to quantum field theory, as well as an incomplete presentation on CPT theorem.',
    watchUrl: 'https://www.bilibili.com/video/BV1F1eM65EPo',
    embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1F1eM65EPo',
  },

  {
    title: 'A series of lectures on classical theory of magnetism',
    date: '2025',
    type: 'Pedogogy',
    description:
      'For Mandarin speakers, here is a series of fifteen lectures where I introduced the historical attempts towards a theory of paramagnetism, diamagnetism and ferromagnetism within the framework of classical statistical mechanics. I ended at the famous Bohr-van Leeuwen theorem that renders all pre-quantum attempts obsolete.',
    watchUrl: 'https://www.bilibili.com/video/BV1qrKhz7E1G',
    embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1qrKhz7E1G',
  },

  {
    title: 'History of physics on magnetism',
    date: '2025',
    type: 'Pedogogy',
    description:
      'For Mandarin speakers, I made this video as a complement to the lectures on theory of magnetism, where I provided the historical context of those formalisms. Unlike the usual narrative of the history in popular science, I put my emphasis on the sociological background of physics research and education in late 19th century France and how physcists survived academia back then.',
    watchUrl: 'https://www.bilibili.com/video/BV1GBvKz5EZt',
    embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1GBvKz5EZt',
  }
];