// ── Personal Info ────────────────────────────
export const INFO = {
  name:     'Fadi Esper',
  role:     'Backend Developer & Software Engineer',
  bio:      "I'm an IT engineer passionate about web development and problem‑solving, always learning and building efficient solutions.",
  bioLong:  "I specialize in backend development with Django and Python, building scalable REST APIs and delivering robust software solutions. I enjoy turning complex problems into clean, maintainable code that scales.",
  email:    'fadi4programing@gmail.com',
  phone:    '+963 997 333 017',
  location: 'Tartus, Syria',
  github:   'https://github.com/fadi4programing-lab',
  linkedin: 'https://www.linkedin.com/in/fadi-isber-1474a1287',
  instagram:'https://instagram.com/fadiisb',
  cv:       '/fadi_cv.pdf',
  photo:    '/fadi.png',
}

// ── Education ────────────────────────────────
export const EDUCATION = {
  degree:    'Bachelor of IT Engineering',
  school:    'Al-Hawash Private University',
  location:  'Tartus, Syria',
  period:    '2023 – 2027',
  note:      'Expected graduation: 2027',
}

// ── Skills ───────────────────────────────────
export const SKILLS = [
  { name: 'Django & DRF',  percentage: 80, category: 'backend'  },
  { name: 'REST APIs',     percentage: 78, category: 'backend'  },
  { name: 'Git & GitHub',  percentage: 80, category: 'devops'   },
  { name: 'PostgreSQL',    percentage: 70, category: 'database' },
  { name: 'React.js',      percentage: 70, category: 'frontend' },
  { name: 'Tailwind CSS',  percentage: 68, category: 'frontend' },
  { name: 'Electron.js',   percentage: 75, category: 'frontend' },
  { name: 'Next.js',       percentage: 75, category: 'frontend' },
]

export const SKILL_CATEGORIES = {
  backend:  ['Django', 'Django REST Framework', 'REST APIs', 'Python'],
  frontend: ['React.js', 'Tailwind CSS', 'HTML / CSS', 'Next.js'],
  database: ['PostgreSQL', 'SQLite'],
  devops:   ['Docker', 'Git', 'GitHub', 'Linux'],
  tools:    ['VS Code', 'Postman', 'Electron.js'],
}

// ── Projects ─────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'Dayflow',
    tagline: 'Daily OS — Own Your Day',
    shortDesc: 'A full-stack Daily OS web app where you can manage tasks, track goals with progress metrics, schedule time blocks, take notes, and plan events on a calendar — all in a sleek dark-themed interface with email reminders and JWT authentication.',
    fullDesc: `Dayflow is a personal productivity platform I designed and built from scratch. The idea was simple — one place to own your entire day. Instead of jumping between apps, Dayflow brings tasks, goals, a schedule, notes, and a calendar together in a single cohesive interface.

The backend is powered by Django REST Framework with JWT authentication, ensuring every user's data is private and secure. The frontend is built with React.js and Tailwind CSS, featuring a clean dark UI with color-coded stats and progress tracking.

Key features include task management with priority levels, goal tracking with visual progress indicators, a weekly schedule with time blocks, a notes system, and a calendar with event planning and email reminders.`,
    tech: ['Django', 'Django REST Framework', 'React.js', 'Tailwind CSS', 'SQLite', 'JWT'],
    github: 'https://github.com/fadi4programing-lab/dayflow.git',
    live: null,
    thumbnail: '/screenshots/dayflow/dashboard.png',
    images: [
      '/screenshots/dayflow/dashboard.png',
      '/screenshots/dayflow/tasks.png',
      '/screenshots/dayflow/goals.png',
      '/screenshots/dayflow/calendar.png',
      '/screenshots/dayflow/notes.png',
      '/screenshots/dayflow/schedule.png',
      '/screenshots/dayflow/profile.png',
    ],
  },
  {
    id: 2,
    title: 'IronLog',
    tagline: 'Build. Track. Conquer.',
    shortDesc: 'A full-stack gym workout website where users can browse 1,300+ exercises, build personalized training plans, and track their fitness progress.',
    fullDesc: `IronLog is a personal gym website built for all fitness levels — from beginners to advanced athletes. The idea was simple: give every user a private, organized space to plan their training and track their progress without relying on generic apps that don't fit their goals.

Users can browse over 1,300 real exercises powered by the ExerciseDB API, filtering by muscle group and equipment. From there they can build fully custom training plans — choosing how many days per week, which exercises go in each day, and setting sets, reps, and rest time for each one.

Every plan is saved privately to their account and can be viewed or deleted at any time. The progress tracker lets users log workout sessions by date, track their body weight over time with change indicators, and record detailed body measurements. The website also supports dark and light mode and is fully responsive across all screen sizes.`,
    tech: ['Django', 'Django REST Framework', 'React.js', 'Tailwind CSS', 'SQLite', 'JWT', 'ExerciseDB API'],
    github: 'https://github.com/fadi4programing-lab/ironlog.git',
    live: null,
    thumbnail: '/screenshots/ironlog/dashboard.png',
    images: [
      '/screenshots/ironlog/landing_dark.png',
      '/screenshots/ironlog/dashboard.png',
      '/screenshots/ironlog/exercises.png',
      '/screenshots/ironlog/plans.png',
      '/screenshots/ironlog/builder.png',
      '/screenshots/ironlog/progress.png',
      '/screenshots/ironlog/login.png',
    ],
  },
  {
    id: 3,
    title: 'LetMeLearn',
    tagline: 'Learn Together, Grow Together',
    shortDesc: 'A full-stack study group platform where users can create and join groups, chat in real time, and share files with other learners.',
    fullDesc: `LetMeLearn is a full-stack web application designed to bring learners together. Users can create public or private study groups organized by category, join existing groups, and communicate through a live chat system that updates automatically without interrupting what you're typing.

Each group has a dedicated chat room where members can send text messages, share images, videos, and documents directly in the conversation. A built-in media gallery lets members browse all files ever shared in the group, filtered by type — images, videos, or documents.

Private groups are protected by a password, giving creators full control over who joins. Group creators can delete their group or remove messages, while regular members can leave at any time.`,
    tech: ['Django', 'React.js', 'Tailwind CSS', 'SQLite', 'JWT Authentication'],
    github: 'https://github.com/fadi4programing-lab/Letmelearn-.git',
    live: null,
    thumbnail: '/screenshots/letmelearn/explore.png',
    images: [
      '/screenshots/letmelearn/explore.png',
      '/screenshots/letmelearn/chat.png',
      '/screenshots/letmelearn/mygroups.png',
      '/screenshots/letmelearn/create.png',
      '/screenshots/letmelearn/login.png',
      '/screenshots/letmelearn/register.png',
    ],
  },
  {
    id: 4,
    title: 'Threadly',
    tagline: 'Shop the latest fashion trends. Works online and offline.',
    shortDesc: 'A modern full-stack clothing store with web and desktop apps. Browse products, manage your cart, leave reviews, and admin tools — all with offline support.',
    fullDesc: `Threadly is a full-stack clothing e-commerce platform built with Next.js and Electron. Customers can browse products with filters, add to cart, checkout with Cash on Delivery, track orders, save wishlists, and leave reviews. The admin panel manages products, orders, and users. The Electron desktop app wraps the web store for offline browsing with auto-sync when back online. Mobile-responsive design throughout.`,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Electron', 'IndexedDB', 'Service Worker'],
    github: 'https://github.com/fadi4programing-lab/Threadly.git',
    live: 'https://threadly-mocha.vercel.app',
    thumbnail: '/screenshots/threadly/1.png',
    images: [
      '/screenshots/threadly/1.png',
      '/screenshots/threadly/2.png',
      '/screenshots/threadly/3.png',
      '/screenshots/threadly/4.png',
      '/screenshots/threadly/5.png',
      '/screenshots/threadly/6.png',
      '/screenshots/threadly/7.png',
      '/screenshots/threadly/8.png',
      '/screenshots/threadly/9.png',
    ],
  },
]
