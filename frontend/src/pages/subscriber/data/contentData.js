const contentData = [
  // Education Sector
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    body: "Closures are functions that retain access to their scope...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567901",
    publish_date: "2025-02-15T10:30:00Z", 
    tags: ["Education", "JavaScript", "Programming"],
    status: "published"
  },
  {
    id: 2,
    title: "How to Prepare for Competitive Exams",
    body: "Exam preparation strategies for students...",
    type: "guide",
    author_id: "65d4f1a7c2b9f31234567902",
    publish_date: "2025-02-10T12:00:00Z",
    tags: ["Education", "Exams", "Study Tips"],
    status: "published"
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    body: "Introduction to supervised and unsupervised learning...",
    type: "guide",
    author_id: "65d4f1a7c2b9f31234567903",
    publish_date: "2025-01-30T09:10:00Z",
    tags: ["Education", "AI", "Machine Learning"],
    status: "published"
  },
  {
    id: 4,
    title: "The Future of Quantum Computing",
    body: "Exploring the impact of quantum computers on industries...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567910",
    publish_date: "2025-03-01T11:45:00Z",
    tags: ["Education", "Quantum Computing", "Technology"],
    status: "published"
  },
  {
    id: 5,
    title: "How to Build a Personal Brand as a Student",
    body: "Practical steps for students to build a strong online presence...",
    type: "guide",
    author_id: "65d4f1a7c2b9f31234567911",
    publish_date: "2025-03-05T10:00:00Z",
    tags: ["Education", "Career", "Personal Branding"],
    status: "published"
  },

  // Entertainment Sector
  {
    id: 6,
    title: "Top 10 Must-Watch Movies of 2025",
    body: "A list of the best movies releasing this year...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567904",
    publish_date: "2025-02-18T10:30:00Z",
    tags: ["Entertainment", "Movies", "Hollywood"],
    status: "published"
  },
  {
    id: 7,
    title: "Evolution of Gaming: Past to Present",
    body: "A journey through the history of video games...",
    type: "video",
    author_id: "65d4f1a7c2b9f31234567905",
    publish_date: "2025-02-10T12:00:00Z",
    tags: ["Entertainment", "Gaming", "History"],
    status: "published"
  },
  {
    id: 8,
    title: "Behind the Scenes of a Blockbuster Movie",
    body: "An exclusive look at the production of a major Hollywood film...",
    type: "video",
    author_id: "65d4f1a7c2b9f31234567912",
    publish_date: "2025-02-25T14:30:00Z",
    tags: ["Entertainment", "Movies", "Hollywood"],
    status: "published"
  },
  {
    id: 9,
    title: "The Rise of Indie Music in 2025",
    body: "Why independent artists are taking over the music industry...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567913",
    publish_date: "2025-02-28T16:15:00Z",
    tags: ["Entertainment", "Music", "Indie Artists"],
    status: "published"
  },

  // News Sector
  {
    id: 10,
    title: "Global Economy Trends in 2025",
    body: "Analyzing economic changes and challenges...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567906",
    publish_date: "2025-02-15T10:30:00Z",
    tags: ["News", "Economy", "World"],
    status: "published"
  },
  {
    id: 11,
    title: "AI Regulations: What’s Changing?",
    body: "Governments are implementing new AI policies...",
    type: "guide",
    author_id: "65d4f1a7c2b9f31234567907",
    publish_date: "2025-02-08T15:45:00Z",
    tags: ["News", "AI", "Regulations"],
    status: "published"
  },
  {
    id: 12,
    title: "SpaceX’s Latest Mission to Mars",
    body: "Details on the newest Mars exploration mission...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567914",
    publish_date: "2025-03-10T08:45:00Z",
    tags: ["News", "Space", "Mars"],
    status: "published"
  },
  {
    id: 13,
    title: "Electric Vehicles: Are They the Future?",
    body: "The shift towards sustainable transportation...",
    type: "guide",
    author_id: "65d4f1a7c2b9f31234567915",
    publish_date: "2025-03-07T12:30:00Z",
    tags: ["News", "Technology", "Electric Cars"],
    status: "published"
  },
  {
    id: 14,
    title: "Climate Change: What’s Next for the Planet?",
    body: "An analysis of new environmental policies...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567916",
    publish_date: "2025-03-15T09:00:00Z",
    tags: ["News", "Climate Change", "Environment"],
    status: "published"
  },

  // Health Sector
  {
    id: 15,
    title: "Mental Health Tips for a Balanced Life",
    body: "Simple strategies to improve mental well-being...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567908",
    publish_date: "2025-02-22T09:00:00Z",
    tags: ["Health", "Wellness", "Mental Health"],
    status: "published"
  },
  {
    id: 16,
    title: "Benefits of Daily Exercise",
    body: "Regular physical activity boosts immunity and energy...",
    type: "video",
    author_id: "65d4f1a7c2b9f31234567909",
    publish_date: "2025-02-18T13:15:00Z",
    tags: ["Health", "Fitness", "Exercise"],
    status: "published"
  },
  {
    id: 17,
    title: "The Science Behind Healthy Eating",
    body: "Understanding how nutrition affects overall well-being...",
    type: "guide",
    author_id: "65d4f1a7c2b9f31234567917",
    publish_date: "2025-03-02T10:30:00Z",
    tags: ["Health", "Nutrition", "Wellness"],
    status: "published"
  },
  {
    id: 18,
    title: "Yoga for Stress Relief",
    body: "Simple yoga routines to reduce stress and anxiety...",
    type: "video",
    author_id: "65d4f1a7c2b9f31234567918",
    publish_date: "2025-03-06T15:00:00Z",
    tags: ["Health", "Yoga", "Stress Management"],
    status: "published"
  },
  {
    id: 19,
    title: "How Sleep Affects Your Brain",
    body: "The importance of sleep for cognitive functions...",
    type: "article",
    author_id: "65d4f1a7c2b9f31234567919",
    publish_date: "2025-03-08T21:00:00Z",
    tags: ["Health", "Sleep", "Cognitive Health"],
    status: "published"
  },
  {
    id: 20,
    title: "The Future of Personalized Medicine",
    body: "How AI is shaping individualized healthcare...",
    type: "guide",
    author_id: "65d4f1a7c2b9f31234567920",
    publish_date: "2025-03-12T11:20:00Z",
    tags: ["Health", "Medicine", "AI"],
    status: "published"
  }
];

export default contentData;