/**
 * ============================================================
 * DRIFTWATER ACADEMY — Site Configuration
 * ============================================================
 * Edit this file to update ALL branding, contact info, colors,
 * services, testimonials, and other placeholder content.
 * ============================================================
 */

export const siteConfig = {
  // ── Branding ──────────────────────────────────────────────
  name: "Driftwater Academy",
  tagline: "Where Confidence Meets the Water",
  description:
    "Driftwater Academy offers expert-led swim lessons for all ages in a safe, nurturing environment. Build confidence, water safety skills, and a lifelong love of swimming.",

  // ── Contact ───────────────────────────────────────────────
  phone: "(555) 123-4567",
  email: "info@driftwateracademy.com",
  address: "1234 Riverside Drive, Suite 100, Lakewood, CA 90712",

  // ── Social Links ──────────────────────────────────────────
  social: {
    facebook: "https://facebook.com/driftwateracademy",
    instagram: "https://instagram.com/driftwateracademy",
    youtube: "https://youtube.com/@driftwateracademy",
    tiktok: "https://tiktok.com/@driftwateracademy",
  },

  // ── Navigation ────────────────────────────────────────────
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/#programs" },
    { label: "About", href: "/#benefits" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],

  // ── Hero Section ──────────────────────────────────────────
  hero: {
    headline: "Give Your Child the Gift of Water Confidence",
    subheadline:
      "Expert-led swim programs for every age and skill level — from first splashes to competitive strokes.",
    primaryCTA: { label: "Enroll Today", href: "/contact" },
    secondaryCTA: { label: "Explore Programs", href: "/#programs" },
  },

  // ── Trust Strip ───────────────────────────────────────────
  trustItems: [
    {
      icon: "shield",
      title: "Safety First",
      description:
        "Every session follows strict safety protocols with certified lifeguards on deck at all times.",
    },
    {
      icon: "users",
      title: "Expert Instructors",
      description:
        "Our nationally certified instructors average 8+ years of teaching experience.",
    },
    {
      icon: "heart",
      title: "All Ages Welcome",
      description:
        "Tailored programs for infants through adults — everyone deserves water confidence.",
    },
  ],

  // ── Programs ──────────────────────────────────────────────
  programs: [
    {
      title: "Little Splashers",
      ages: "6 months – 2 years",
      description:
        "Parent-child water introduction classes focusing on comfort, bonding, and basic water awareness in a warm, playful environment.",
      icon: "baby",
    },
    {
      title: "Water Explorers",
      ages: "3 – 5 years",
      description:
        "Building independence in the water through guided play, floating basics, and beginner kick techniques.",
      icon: "star",
    },
    {
      title: "Stroke Builders",
      ages: "6 – 9 years",
      description:
        "Developing proper stroke technique, breathing patterns, and endurance across freestyle and backstroke.",
      icon: "swim",
    },
    {
      title: "Wave Riders",
      ages: "10 – 13 years",
      description:
        "Advanced stroke refinement, diving fundamentals, and introduction to competitive swimming skills.",
      icon: "trophy",
    },
    {
      title: "Adult Swimmers",
      ages: "14+ years",
      description:
        "Whether you are learning for the first time or refining technique, our adult classes meet you where you are.",
      icon: "user",
    },
    {
      title: "Private Lessons",
      ages: "All ages",
      description:
        "One-on-one instruction tailored to individual goals, pace, and comfort level for accelerated progress.",
      icon: "target",
    },
  ],

  // ── Benefits ──────────────────────────────────────────────
  benefits: [
    {
      icon: "clock",
      title: "20+ Years of Excellence",
      description: "Two decades of trusted swim education in our community.",
    },
    {
      icon: "ratio",
      title: "Small Class Sizes",
      description:
        "4:1 student-to-instructor ratio ensures personalized attention for every swimmer.",
    },
    {
      icon: "book",
      title: "Proven Curriculum",
      description:
        "Progressive skill-building program developed by aquatic education specialists.",
    },
    {
      icon: "award",
      title: "Certified Team",
      description:
        "Every instructor holds current lifeguard, CPR, and water safety certifications.",
    },
    {
      icon: "refresh",
      title: "Flexible Scheduling",
      description:
        "Makeup classes available and easy online rescheduling — life happens, we understand.",
    },
    {
      icon: "thermometer",
      title: "Warm, Clean Facility",
      description:
        "Climate-controlled pool kept at 90°F with advanced UV sanitation systems.",
    },
  ],

  // ── Stats (for mid-page CTA) ──────────────────────────────
  stats: [
    { value: "50,000+", label: "Lessons Taught" },
    { value: "5,000+", label: "Families Served" },
    { value: "98%", label: "Parent Satisfaction" },
    { value: "20+", label: "Years Experience" },
  ],

  // ── Testimonials ──────────────────────────────────────────
  testimonials: [
    {
      name: "Sarah M.",
      location: "Lakewood, CA",
      text: "My daughter was terrified of the water. After just eight weeks at Driftwater Academy, she is jumping in on her own and begging to go back. The instructors are incredibly patient and skilled.",
    },
    {
      name: "James R.",
      location: "Long Beach, CA",
      text: "We have tried three different swim schools. Driftwater is in a league of its own — the facility is spotless, the curriculum is structured, and you can see real progress every single week.",
    },
    {
      name: "Maria L.",
      location: "Cerritos, CA",
      text: "As an adult who never learned to swim, I was embarrassed to sign up. The team made me feel completely comfortable from day one. I can now swim laps confidently.",
    },
    {
      name: "David & Kim T.",
      location: "Downey, CA",
      text: "Both of our kids are enrolled and they absolutely love it. The small class sizes mean they actually get individual attention. Worth every penny.",
    },
    {
      name: "Priya K.",
      location: "Norwalk, CA",
      text: "The water safety skills my son learned here give me genuine peace of mind. Every parent should invest in proper swim education — Driftwater makes it easy and fun.",
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────
  faqs: [
    {
      question: "What age can my child start swim lessons?",
      answer:
        "We welcome little ones as young as 6 months in our parent-child Little Splashers program. Early water exposure helps build comfort and lays the foundation for future swimming skills.",
    },
    {
      question: "How warm is the pool?",
      answer:
        "Our pool is maintained at a comfortable 90°F (32°C) year-round, perfect for young swimmers and beginners who may be sensitive to cold water.",
    },
    {
      question: "What if we need to miss a class?",
      answer:
        "We offer complimentary makeup classes for any missed sessions. Simply log into your parent portal or call us to reschedule at a time that works for your family.",
    },
    {
      question: "How are instructors qualified?",
      answer:
        "All instructors hold current certifications in lifeguarding, CPR/First Aid, and water safety instruction. They also complete our proprietary 40-hour training program before teaching their first class.",
    },
    {
      question: "What should my child bring to lessons?",
      answer:
        "A well-fitting swimsuit, towel, and goggles (optional). For children under 3, swim diapers are required. We provide all other equipment including kickboards and flotation devices.",
    },
    {
      question: "Do you offer a free trial class?",
      answer:
        "Yes! We offer a complimentary introductory lesson so your family can experience our facility, meet our instructors, and see if Driftwater Academy is the right fit.",
    },
  ],

  // ── Blog Preview ──────────────────────────────────────────
  blogPosts: [
    {
      title: "When Should Your Child Start Swim Lessons?",
      excerpt:
        "The American Academy of Pediatrics recommends swim lessons starting at age 1. Learn why early water exposure matters and how to know if your child is ready.",
      slug: "#",
      category: "Water Safety",
    },
    {
      title: "5 Signs Your Child Is Ready for the Next Swim Level",
      excerpt:
        "Wondering if it is time to advance? Here are the key milestones our instructors look for before moving swimmers to the next program level.",
      slug: "#",
      category: "Progress",
    },
    {
      title: "Overcoming Water Fear: A Parent's Guide",
      excerpt:
        "It is completely normal for children to feel anxious around water. Discover proven strategies our instructors use to build comfort and trust.",
      slug: "#",
      category: "Tips",
    },
    {
      title: "The Lifelong Health Benefits of Swimming",
      excerpt:
        "Swimming is one of the best full-body exercises at any age. From cardiovascular health to mental wellness, explore why swimming is an investment in lifelong fitness.",
      slug: "#",
      category: "Health",
    },
  ],

  // ── Footer ────────────────────────────────────────────────
  footerLinks: {
    company: [
      { label: "About Us", href: "/#benefits" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    programs: [
      { label: "Little Splashers", href: "#" },
      { label: "Water Explorers", href: "#" },
      { label: "Stroke Builders", href: "#" },
      { label: "Adult Swimmers", href: "#" },
    ],
    support: [
      { label: "FAQ", href: "/#faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
} as const;
