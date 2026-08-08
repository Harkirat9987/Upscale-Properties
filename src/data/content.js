// Real copy gathered from the reference site (form.ancorathemes.com), adapted for this rebuild.

export const NAV = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Pages",
    children: [
      { label: "About Us", to: "/about-us" },
      { label: "Our Team", to: "/our-team" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQs", to: "/faqs" },
      { label: "Contact Us", to: "/contact-us" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Services — 1", to: "/services-1" },
      { label: "Services — 2", to: "/services-2" },
    ],
  },
  {
    label: "Portfolio",
    children: [
      { label: "Our Work — 1", to: "/our-work-1" },
      { label: "Our Work — 2", to: "/our-work-2" },
      { label: "Our Work — 3", to: "/our-work-3" },
      { label: "Gallery", to: "/gallery" },
      { label: "Single Project", to: "/single-project" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "Blog — Standard", to: "/blog-standard" },
      { label: "Blog — Grid", to: "/blog-grid" },
    ],
  },
  {
    label: "Shop",
    children: [
      { label: "Product List", to: "/shop" },
      { label: "Cart", to: "/cart" },
      { label: "Checkout", to: "/checkout" },
      { label: "My Account", to: "/my-account" },
    ],
  },
];

export const FOOTER = {
  tagline:
    "Form is an innovative design studio creating inspiring, functional, and sustainable spaces through architecture and interiors that enhance everyday life.",
  address: "245 West 29th Street, Suite 1201, New York, NY 10001",
  email: "hello@form-studio.com",
  phone: "555-123-4567",
  links: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Portfolio", to: "/our-work-1" },
    { label: "Services", to: "/services-1" },
    { label: "Contact Us", to: "/contact-us" },
  ],
  socials: [
    { label: "Facebook", to: "https://www.facebook.com/" },
    { label: "Behance", to: "https://www.behance.net/" },
    { label: "Instagram", to: "https://www.instagram.com/" },
    { label: "Dribbble", to: "https://dribbble.com/" },
  ],
};

export const HOME = {
  hero: {
    title: "Architecture brand\nfor modern cities",
    body: "We design spaces that seamlessly blend beauty, function, and care for the planet—crafted around your vision and needs.",
    cta: { label: "Get Started", to: "/about-us" },
    stat: { to: 4, suffix: "k+", label: "Great design unites people and places" },
  },
  intro: {
    title: "Discover thoughtful spaces made for daily living and work needs with design solutions that fit every unique project vision",
  },
  stack: [
    {
      no: "01",
      title: "Architectural design",
      body: "We provide design services for residential, commercial, and institutional projects. Our team guides clients from concept through construction, ensuring each space is functional, aesthetically pleasing, and responsible.",
    },
    {
      no: "02",
      title: "Interior design",
      body: "Our interior design services create functional interiors tailored to each client’s lifestyle or brand. We manage space planning, materials, furnishings, and lighting, ensuring a cohesive, personalized result.",
    },
    {
      no: "03",
      title: "Eco consulting",
      body: "We offer consulting on sustainable design, helping clients reduce environmental impact and achieve LEED or WELL certifications. Our team evaluates energy, materials, and indoor quality to create healthier, greener spaces.",
    },
  ],
  stats: [
    { to: 13, suffix: "+", label: "Years of experience" },
    { to: 45, suffix: "", label: "Completed works" },
  ],
  tabs: [
    "Architectural design solutions",
    "Interior design expertise",
    "Sustainable design insight",
    "Commercial interior design",
    "Lighting design solutions",
  ],
  team: {
    title: "Meet the Form team",
    heading: "Get to know our studio’s leaders visionaries",
    members: [
      { name: "David Chen", role: "Principal Architect" },
      { name: "Elena Martinez", role: "Design Lead" },
      { name: "John Singh", role: "Interior Stylist" },
    ],
  },
  achievements: {
    title: "Recognizing our achievements",
    heading: "Our studio’s honors and achievements",
    groups: [
      { year: "2025", label: "Form’s accolades", items: ["AIA emerging firm award", "Sustainability awards"] },
      { year: "2024", label: "Interior design award", items: ["Project of the year", "Innovation honors"] },
      { year: "2023", label: "GreenLeaf prize", items: ["Merit distinction", "Global design award"] },
    ],
  },
  cta: {
    title: "Let us create inspiring spaces. Our experts can start your project this week",
    body: "We design inviting spaces and innovative forms that enrich lives, support growth, and foster strong connections.",
    link: { label: "View Details", to: "/our-work-1" },
  },
};

export const ABOUT = {
  overline: "Spaces shaped with purpose",
  title: "About Us",
  intro: {
    overline: "Spaces shaped with purpose",
    heading: "We design & enrich living spaces",
    paragraphs: [
      "Form is a bold architecture and interior design studio reimagining how people live, work, and creatively connect with their spaces, inspiring joy, comfort, and meaningful experiences every day.",
      "Our tailored design process brings each client's vision to life. Through deep collaboration, thoughtful research, and innovative strategies, we craft spaces that seamlessly marry beauty, efficiency, sustainability, comfort, functionality, and timeless elegance for lasting impact.",
      "We champion creativity, teamwork, and integrity, making sure each design reflects our passion for quality, innovation, and attentive client care. Since 2015, Form has grown as a trusted, award-winning design studio, delivering memorable and inspiring spaces for clients across the globe.",
    ],
  },
  stats: {
    heading: "Design in numbers",
    subheading: "We create spaces that last, blending art and function for unique results across every project.",
    items: [
      { to: 98, suffix: "%", label: "Returning partners" },
      { to: 84, suffix: "+", label: "Clients supported" },
      { to: 13, suffix: "", label: "Time in practice" },
      { to: 157, suffix: "+", label: "Spaces completed" },
      { to: 47, suffix: "", label: "Finished designs" },
      { to: 12, suffix: "", label: "Honors earned" },
    ],
  },
  featured: [
    { title: "Modern entry stairs", tag: "Exterior Design" },
    { title: "Poolside evening retreat", tag: "Outdoor Living" },
    { title: "Charming red house", tag: "Residential Architecture" },
  ],
  expertise: {
    heading: "Our expertise",
    subheading: "We design & shape spaces for life",
    items: [
      { title: "Architectural design", body: "We provide design services for residential, commercial, and institutional projects, ensuring quality, creativity, and lasting value." },
      { title: "Interior design", body: "Our interior design services create functional interiors tailored to each client's lifestyle or brand, blending comfort, style, and innovation." },
      { title: "Eco consulting", body: "We offer consulting on sustainable design, helping clients reduce environmental impact and achieve LEED or WELL certifications." },
    ],
  },
  blogTeaser: {
    heading: "Inspired interior spaces",
    subheading: "We envision & design",
    posts: [
      { category: "Design Inspiration", title: "How architectural details shape the feel of a home", date: "Sep 10, 2025", comments: 3 },
      { category: "Residential Design", title: "Open-plan living rooms that foster connection and flow", date: "Sep 10, 2025", comments: 0 },
      { category: "Commercial Spaces", title: "Sustainable materials that elevate home interiors", date: "Sep 10, 2025", comments: 0 },
      { category: "Project Showcase", title: "Maximizing comfort and style with minimalist interiors", date: "Sep 10, 2025", comments: 0 },
    ],
  },
};

export const TEAM_PAGE = {
  overline: "Shaping spaces with vision",
  title: "Our Team",
  intro: {
    heading: "Elevate spaces with our design",
    body: "Form is an architecture and interior design studio reimagining environments with innovative, sustainable, and client-focused solutions.",
    cta: { label: "Our Projects", to: "/our-work-1" },
  },
  grid: {
    heading: "Discover the brilliant minds behind Form shaping forward spaces with purpose and for design",
    body: "Our team thoughtfully blends design skill, vision, and care to deliver beautiful, functional, and inspiring spaces that enrich lives, reflect values, embrace creativity, and stand the test of time, exceeding expectations consistently.",
    members: [
      { name: "David Chen", role: "Principal Architect" },
      { name: "Elena Martinez", role: "Design Lead" },
      { name: "John Singh", role: "Interior Stylist" },
      { name: "Rachel Grant", role: "Project Manager" },
    ],
  },
  awards: {
    heading: "Celebrating design vision",
    subheading: "Honors for our team",
    items: [
      { award: "Best residential design", category: "Interior design", project: "Oakwood villa", year: "2025" },
      { award: "Innovative office space", category: "Architecture", project: "Skyline towers", year: "2024" },
      { award: "Furniture design award", category: "Product design", project: "Crystal heights", year: "2023" },
      { award: "Interior design innovation", category: "Green building", project: "Greenleaf apartments", year: "2022" },
    ],
  },
};

export const TESTIMONIALS = {
  overline: "Stories that shape our design journey",
  title: "Voices from our valued clients",
  items: [
    { name: "Jordan Smith", location: "Brooklyn, NY", quote: "Form's team exceeded our hopes, giving us a space that feels bold and warm. Their attention to detail and care for our needs made the process smooth and rewarding." },
    { name: "Samantha Lee", location: "Boston, MA", quote: "Working with Form was pure joy. Their design brought out the best in our brand and gave our team an inspiring space to create and grow together every day." },
    { name: "Lucas Green", location: "Chicago, IL", quote: "Form's vision and skill made our new office a true home for our staff. We loved how every detail reflected our story and values in such a unique way." },
    { name: "Marcus Jones", location: "Miami, FL", quote: "The team at Form took time to listen and amazed us with a design that's smart, green, and truly us. The process was seamless, the result stunning." },
    { name: "William Scott", location: "Dallas, TX", quote: "We can't thank Form enough for turning our ideas into a reality. Their blend of beauty and function made our house feel like a true sanctuary at last." },
    { name: "Rachel Kim", location: "Minneapolis, MN", quote: "Form's dedication and vision transformed our workspace. Every step was thoughtful, and the final space supports our team in ways we never expected." },
    { name: "David Martinez", location: "New York, NY", quote: "Form's vision for design gave us a space that is both elegant and thoughtful. Every step felt smooth, and the end result leaves a lasting impact on our team and work style." },
    { name: "Olivia Carter", location: "Denver, CO", quote: "We trusted Form with our new office design and it was a joy to see the space take shape. Their creative ideas and attention to detail truly set them apart from other studios." },
    { name: "James White", location: "Portland, OR", quote: "Form brought a fresh view to our project. The team's focus on green design made our space healthier and more vibrant, all while keeping our goals at the center of every choice." },
  ],
};

export const PRICING = {
  overline: "Flexible Pricing",
  title: "Choose the ideal plan for your needs",
  plans: {
    monthly: [
      { name: "Starter", price: 25, period: "per month", features: ["Initial project review", "Custom mood boards", "Basic floor layouts", "Email support only"] },
      { name: "Professional", price: 50, period: "per month", featured: true, features: ["Detailed space survey", "Full design boards", "3D model renders", "Phone and email help"] },
      { name: "Advanced", price: 75, period: "per month", features: ["On-site project lead", "Custom material sets", "Detailed build plans", "Priority client care"] },
    ],
    yearly: [
      { name: "Starter", price: 100, period: "per year", features: ["Initial project review", "Custom mood boards", "Basic floor layouts", "Email support only"] },
      { name: "Professional", price: 150, period: "per year", featured: true, features: ["Detailed space survey", "Full design boards", "3D model renders", "Phone and email help"] },
      { name: "Advanced", price: 200, period: "per year", features: ["On-site project lead", "Custom material sets", "Detailed build plans", "Priority client care"] },
    ],
  },
  faqs: [
    { q: "What services does Form offer?", a: "Form delivers architecture, interior design, and sustainability consulting for homes, offices, and hotels. Our studio blends style and function at every stage." },
    { q: "How can I get in touch with Form?", a: "You can reach Form by email or call 555-123-4567. Our office is open for visits at 245 West 29th Street in New York City." },
    { q: "What drives our approach to design?", a: "We are inspired by our clients' lives, the context of each site, and our passion for sustainable, thoughtful design that shapes spaces for people." },
  ],
  cta: "Let's bring your vision to life.",
};

export const FAQS = {
  overline: "Looking for answers?",
  title: "Frequently asked questions",
  subtitle: "Form guides you through every design step, blending creativity, expertise, and close client support from start to finish with clarity and vision.",
  items: [
    { q: "How do I start working with Form?", a: "Contact us by email or through our site. We'll set up a call to learn about your vision and explain our design process." },
    { q: "Can we meet virtually with your team?", a: "Absolutely! We hold online meetings so you can collaborate with us easily, no matter where you are located." },
    { q: "Which sectors does Form focus on most?", a: "We specialize in residential, commercial, and hospitality spaces, customizing each design to fit your project needs." },
    { q: "Do you partner with new ventures or startups?", a: "We enjoy working with startups! Our team helps launch new brands and spaces, supporting growth from day one." },
  ],
};

export const SERVICES_1 = {
  overline: "What we do",
  title: "Services — 1",
  hero: {
    heading: "Designing creative, meaningful, vibrant spaces that inspire and enrich every moment of daily life",
    body: "Form delivers tailored architecture and interiors, blending creativity, function, and eco-friendly choices to create unique, beautiful, and inspiring spaces that fully reflect your vision and values.",
  },
  features: [
    { title: "Design plans", body: "Detailed architectural plans guiding every interior and structure choice" },
    { title: "Solid partnerships", body: "Building trust through design, creating architectural spaces" },
    { title: "Safety standards", body: "Prioritizing safety with protective measures and reliable procedures" },
  ],
  blocks: [
    { tag: "Creative spaces", title: "Transforming spaces with creative vision", body: "Form blends vision and detail to make every space unique. Our team creates places where people can thrive and connect." },
    { tag: "Timeless design", title: "Elevating spaces with design", body: "At Form, we build for people and the planet. Our work combines sustainability and timeless beauty." },
    { tag: "Innovative design", title: "Inventing new ways to shape the future", body: "We value teamwork and creative minds. Our designers work with clients to create spaces that feel fresh and lasting." },
  ],
  contact: {
    overline: "Common questions",
    heading: "Have inquiries? Reach out to us!",
    body: "Our team welcomes your questions or project ideas. Please connect with us and we'll reply soon.",
  },
};

export const SERVICES_2 = {
  overline: "Elevate spaces with our design",
  title: "Services — 2",
  hero: {
    heading: "Shaping spaces with vision",
    subheading: "Elevate spaces with our design",
    body: "Form is an architecture and interior design studio reimagining environments with innovative, sustainable, and client-focused solutions.",
    cta: { label: "Our Projects", to: "/our-work-1" },
  },
  mission: {
    heading: "Shaping inspired, meaningful spaces requires a clear vision for all people, purpose, and the built world",
    body: "Form delivers tailored architecture and interiors that seamlessly blend style, function, and sustainability, bringing each client's unique vision to life through innovative, thoughtful, and collaborative creative design and expert care.",
  },
  grid: ["Holistic architecture", "Signature interiors", "Sustainable solutions", "Eco-first design"],
  process: {
    heading: "We create inspired spaces",
    subheading: "Tailored for your vision",
    steps: [
      { no: "01", title: "Design mastery", body: "At Form, we shape dreams into real places. Our expert group fuses craft and care, making each design fit the client's needs. We love details, strive for beauty, and value green choices in all we do, creating inspiring, functional, and timeless spaces." },
      { no: "02", title: "Innovative approach", body: "Form offers a range of expert services to craft unique, lasting environments. Our skilled team listens first, then blends new ideas with care to make spaces that feel special and work well, balancing creativity, function, sustainability, and client vision perfectly." },
    ],
  },
  faqs: {
    heading: "Frequently asked questions",
    subheading: "Common Questions",
    intro: "Find answers to the most common queries about our process, philosophy, and services at Form. We aim to make every step clear.",
    items: [
      { q: "Which fields does Form specialize in?", a: "Form works in residential, commercial, and hospitality sectors, crafting spaces that are both functional and visually appealing. Each project is unique." },
      { q: "What design services can I request?", a: "We offer architectural design, interior solutions, and expert sustainability consulting for new builds or renovations, tailored for each client's needs." },
      { q: "How does Form define project success?", a: "Success means meeting your vision, timeline, and budget, while ensuring every space is sustainable and uplifting. Client satisfaction guides our work." },
      { q: "What's the process for getting a quote?", a: "Contact us by email or phone with basic project details. We'll reach out for a chat, then send a custom quote for your review." },
    ],
  },
  cta: "Have questions? Get in touch!",
};

export const PORTFOLIO = {
  ourWork1: {
    overline: "Signature projects",
    title: "Transforming your space",
    subtitle: "Form crafts spaces that reflect your needs and values, blending smart design with lasting impact. We make each project unique.",
    items: [
      { title: "Minimal concrete kitchen", tag: "Interior Design" },
      { title: "Poolside evening retreat", tag: "Outdoor Living" },
      { title: "Modern entry stairs", tag: "Exterior Design" },
      { title: "Charming red house", tag: "Residential Architecture" },
    ],
  },
  ourWork2: {
    overline: "Our Works",
    title: "Innovation shapes every new space",
    items: [
      { title: "Minimal concrete kitchen", tag: "Interior Design" },
      { title: "Modern entry stairs", tag: "Exterior Design" },
      { title: "Poolside evening retreat", tag: "Outdoor Living" },
      { title: "Charming red house", tag: "Residential Architecture" },
      { title: "Spiral garden stairs", tag: "Landscape Design" },
      { title: "Cozy lounge lighting", tag: "Interior Decor" },
      { title: "Sleek bathroom minimal", tag: "Interior Design" },
      { title: "Geometric outdoor steps", tag: "Landscape Architecture" },
      { title: "Contemporary wooden balcony", tag: "Modern Architecture" },
    ],
  },
  ourWork3: {
    overline: "Signature projects",
    title: "Transforming your space",
    subtitle: "Form crafts spaces that reflect your needs and values, blending smart design with lasting impact. We make each project unique.",
    items: [
      { title: "Modern kitchen", tag: "Interior Design", body: "Green marble island blends luxury with minimalism in contemporary kitchen" },
      { title: "Elegant entrance", tag: "Exterior Architecture", body: "Sleek exterior lighting highlights modern architecture with inviting pathway" },
      { title: "Luxury poolside", tag: "Outdoor Living", body: "Lush greenery surrounds serene poolside retreat with elegant evening ambiance" },
      { title: "Suburban home", tag: "Residential Architecture", body: "Charming red house features timeless classic design with lush green lawn" },
      { title: "Minimalist kitchen", tag: "Interior Design", body: "Soft lighting enhances clean lines of refined modern minimalist kitchen" },
    ],
  },
  gallery: {
    overline: "Browse our work",
    title: "A closer look at our finished spaces",
    subtitle: "A curated set of interiors and structures completed by the Form studio across residential, commercial, and hospitality projects.",
    items: [
      { title: "Minimal concrete kitchen", tag: "Interior Design" },
      { title: "Modern entry stairs", tag: "Exterior Design" },
      { title: "Poolside evening retreat", tag: "Outdoor Living" },
      { title: "Charming red house", tag: "Residential Architecture" },
      { title: "Spiral garden stairs", tag: "Landscape Design" },
      { title: "Cozy lounge lighting", tag: "Interior Decor" },
      { title: "Sleek bathroom minimal", tag: "Interior Design" },
      { title: "Geometric outdoor steps", tag: "Landscape Architecture" },
      { title: "Contemporary wooden balcony", tag: "Modern Architecture" },
    ],
  },
  singleProject: {
    overline: "Portfolio showcase",
    title: "Arbor Studio",
    client: "Arbor Studio",
    focus: "Living, wellness",
    services: "Interiors, planning, vision, design, consulting",
    intro: "Form delivered inspired design for this project, fusing client goals with refined form and comfort. Our team shaped environments that connect people, function, and style with lasting impact.",
    body: "We partnered with Arbor Studio to create inviting spaces that celebrate both nature and modern life.",
    sectionHeading: "We craft spaces with intention and care",
    blocks: [
      { no: "01", title: "Transforming spaces with creative vision", body: "Form blends vision and detail to make every space unique and thoughtful. Our team is driven by a passion to create places where people can thrive, connect, and grow together." },
      { no: "02", title: "Elevating spaces with thoughtful design", body: "At Form, we believe in building for people and the planet. Our work brings together sustainable ideas and timeless beauty, creating places that last for years." },
      { no: "03", title: "Inventing new ways to shape the future", body: "We value close teamwork and open creative minds. Our designers and architects work hand in hand with clients to achieve spaces that feel both fresh and lasting." },
    ],
  },
};

export const BLOG_CATEGORIES = ["Commercial Spaces", "Design Inspiration", "Project Showcase", "Residential Design", "Sustainability"];

export const BLOG_POSTS = [
  {
    slug: "how-architectural-details-shape-the-feel-of-a-home",
    title: "How architectural details shape the feel of a home",
    category: "Design Inspiration",
    date: "Sep 10, 2025",
    comments: 3,
    author: "Jenna Hayes",
    tags: ["Luxury Interiors", "Modern Design", "Workspace Ideas"],
    excerpt: "Maecenas facilisis egestas lacus, eu pulvinar nunc varius dapibus. Nunc velit nulla, vestibulum vitae volutpat sed, ultrices id nisi. Fusce id tristique ipsum. Nunc tincidunt…",
    sidebar: true,
    body: [
      { type: "p", text: "Maecenas facilisis egestas lacus, eu pulvinar nunc varius dapibus. Nunc velit nulla, vestibulum vitae volutpat sed, ultrices id nisi. Fusce id tristique ipsum. Nunc tincidunt mi in dui tincidunt, at maximus ipsum consequat. Cras nec dolor feugiat, ultrices leo nec, posuere tortor. Pellentesque commodo tortor eget rutrum eleifend." },
      { type: "h3", text: "Sed facilisis leo id sodales" },
      { type: "p", text: "Maecenas facilisis egestas lacus, eu pulvinar nunc varius dapibus. Nunc velit nulla, vestibulum vitae volutpat sed, ultrices id nisi. Fusce id tristique ipsum. Nunc tincidunt mi in dui tincidunt, at maximus ipsum consequat. Cras nec dolor feugiat, ultrices leo nec, posuere tortor. Pellentesque commodo tortor eget rutrum eleifend." },
      { type: "p", text: "Donec rutrum nibh quis molestie blandit. Suspendisse id nisi at enim imperdiet convallis. Donec sodales tellus et leo sagittis, eu consectetur turpis porta. Phasellus diam quam, ullamcorper ut mattis varius, interdum vitae augue. Vestibulum pulvinar massa libero. Praesent ultrices dignissim tortor quis tincidunt. Vestibulum ac dignissim nibh." },
      { type: "quote", text: "Quisque at tortor purus. Cras ut molestie risus. Donec non tellus ut elit lacinia dapibus. Suspendisse faucibus ante dui, nec luctus est pretium et. Curabitur et orci non urna ullamcorper sollicitudin quis lacinia arcu.", attribution: "Alice Johnson" },
      { type: "h3", text: "Vivamus pharetra lacus id lectus" },
      { type: "p", text: "Sed maximus felis vel ultrices lacinia. Curabitur ac quam eu risus lobortis malesuada nec sed nisl. In neque purus, vestibulum nec neque a, sollicitudin tempor lacus. Cras scelerisque finibus augue, sit amet tempor augue cursus condimentum. Pellentesque justo erat, placerat vel pharetra vel, hendrerit eget nisl." },
    ],
  },
  {
    slug: "adaptive-reuse-projects-redefining-historical-spaces",
    title: "Adaptive reuse projects redefining historical spaces",
    category: "Sustainability",
    date: "Sep 10, 2025",
    comments: 3,
    author: "Jenna Hayes",
    tags: ["Green Building", "Minimalism", "Urban Architecture"],
    excerpt: "Maecenas facilisis egestas lacus, eu pulvinar nunc varius dapibus. Nunc velit nulla, vestibulum vitae volutpat sed, ultrices id nisi. Fusce id tristique ipsum. Nunc tincidunt…",
    sidebar: false,
    body: [
      { type: "p", text: "Maecenas facilisis egestas lacus, eu pulvinar nunc varius dapibus. Nunc velit nulla, vestibulum vitae volutpat sed, ultrices id nisi. Fusce id tristique ipsum. Nunc tincidunt mi in dui tincidunt, at maximus ipsum consequat. Cras nec dolor feugiat, ultrices leo nec, posuere tortor. Pellentesque commodo tortor eget rutrum eleifend." },
      { type: "h3", text: "Quisque at tortor purus" },
      { type: "p", text: "Maecenas facilisis egestas lacus, eu pulvinar nunc varius dapibus. Nunc velit nulla, vestibulum vitae volutpat sed, ultrices id nisi. Fusce id tristique ipsum. Nunc tincidunt mi in dui tincidunt, at maximus ipsum consequat. Cras nec dolor feugiat, ultrices leo nec, posuere tortor." },
      { type: "p", text: "Quisque metus metus, vulputate ut rutrum nec, tempus ut quam. Fusce ultricies nulla vitae odio fringilla faucibus. Phasellus id metus dui. Aliquam erat volutpat. Curabitur sit amet felis vitae nibh facilisis suscipit. Phasellus at urna non enim egestas molestie." },
      { type: "quote", text: "Maecenas facilisis egestas lacus, eu pulvinar nunc varius dapibus. Nunc velit nulla, vestibulum vitae volutpat sed, ultrices id nisi. Fusce id tristique ipsum. Nunc tincidunt mi in dui tincidunt, at maximus ipsum consequat.", attribution: "Alice Johnson" },
      { type: "h3", text: "Sed maximus felis vel" },
      { type: "p", text: "Maecenas facilisis egestas lacus, eu pulvinar nunc varius dapibus. Nunc velit nulla, vestibulum vitae volutpat sed, ultrices id nisi. Fusce id tristique ipsum. Nunc tincidunt mi in dui tincidunt, at maximus ipsum consequat. Cras nec dolor feugiat, ultrices leo nec, posuere tortor." },
    ],
  },
  {
    slug: "accent-walls-and-their-impact-on-room-aesthetics",
    title: "Accent walls and their impact on room aesthetics",
    category: "Residential Design",
    date: "Sep 10, 2025",
    comments: 0,
    author: "Jenna Hayes",
    tags: ["Modern Design"],
    excerpt: "Sed facilisis, leo id sodales malesuada, magna turpis volutpat leo, ut consectetur odio lorem sed ex. Quisque tincidunt magna et lorem maximus semper. Curabitur ultrices…",
    sidebar: true,
    body: [{ type: "p", text: "Sed facilisis, leo id sodales malesuada, magna turpis volutpat leo, ut consectetur odio lorem sed ex. Quisque tincidunt magna et lorem maximus semper. Curabitur ultrices." }],
  },
  {
    slug: "timeless-kitchen-designs-with-a-modern-twist",
    title: "Timeless kitchen designs with a modern twist",
    category: "Residential Design",
    date: "Sep 10, 2025",
    comments: 0,
    author: "Jenna Hayes",
    tags: ["Modern Design"],
    excerpt: "Sed maximus felis vel ultrices lacinia. Curabitur ac quam eu risus lobortis malesuada nec sed nisl. In neque purus, vestibulum nec neque a, sollicitudin tempor…",
    sidebar: true,
    body: [{ type: "p", text: "Sed maximus felis vel ultrices lacinia. Curabitur ac quam eu risus lobortis malesuada nec sed nisl. In neque purus, vestibulum nec neque a, sollicitudin tempor." }],
  },
  {
    slug: "luxury-bathroom-features-that-enhance-everyday-routines",
    title: "Luxury bathroom features that enhance everyday routines",
    category: "Sustainability",
    date: "Sep 10, 2025",
    comments: 0,
    author: "Jenna Hayes",
    tags: ["Green Building"],
    excerpt: "Sed maximus felis vel ultrices lacinia. Curabitur ac quam eu risus lobortis malesuada nec sed nisl. In neque purus, vestibulum nec neque a, sollicitudin tempor…",
    sidebar: true,
    body: [{ type: "p", text: "Sed maximus felis vel ultrices lacinia. Curabitur ac quam eu risus lobortis malesuada nec sed nisl. In neque purus, vestibulum nec neque a, sollicitudin tempor." }],
  },
  {
    slug: "incorporating-greenery-for-a-calming-home-environment",
    title: "Incorporating greenery for a calming home environment",
    category: "Project Showcase",
    date: "Sep 10, 2025",
    comments: 2,
    author: "Jenna Hayes",
    tags: ["Green Building"],
    excerpt: "Donec rutrum nibh quis molestie blandit. Suspendisse id nisi at enim imperdiet convallis. Donec sodales tellus et leo sagittis, eu consectetur turpis porta. Phasellus diam…",
    sidebar: true,
    body: [{ type: "p", text: "Donec rutrum nibh quis molestie blandit. Suspendisse id nisi at enim imperdiet convallis. Donec sodales tellus et leo sagittis, eu consectetur turpis porta. Phasellus diam." }],
  },
];

export const PRODUCTS = [
  { slug: "ergo-comfort-office-chair", name: "Ergo comfort office chair", price: 219, priceMax: 249, category: "Chairs", sale: false, rating: 5, sku: "SKU001", tags: ["leather", "office"], colors: ["Brown", "Black", "White"], description: "The Ergo Comfort Office Chair offers ergonomic support with cushioned seating, a contoured backrest, and an adjustable height system. Its black wheeled base ensures easy movement, while the leatherette upholstery brings a sleek and professional touch to your office. Ideal for long work hours, this chair is both functional and stylish.", reviews: [{ name: "Jenna Hayes", date: "Sep 12, 2025", rating: 5, text: "Extremely comfortable and stylish — makes long workdays much easier!" }] },
  { slug: "round-oak-dining-table", name: "Round oak dining table", price: 169, priceOriginal: 199, category: "Tables", sale: true, rating: 4 },
  { slug: "oak-arm-dining-chair", name: "Oak arm dining chair", price: 129, priceMax: 139, category: "Chairs", sale: false, rating: 5 },
  { slug: "three-drawer-oak-dresser", name: "Three-drawer oak dresser", price: 323, priceOriginal: 329, category: "Dresser", sale: true, rating: 4 },
  { slug: "modern-tan-leather-loveseat", name: "Modern tan leather loveseat", price: 739, priceMax: 799, category: "Sofas", sale: false, rating: 5 },
  { slug: "rectangular-oak-table", name: "Rectangular oak table", price: 229, category: "Tables", sale: false, rating: 4 },
  { slug: "two-door-oak-cabinet", name: "Two-door oak cabinet", price: 349, priceOriginal: 399, category: "Storage", sale: true, rating: 5 },
  { slug: "ladder-back-dining-chair", name: "Ladder back dining chair", price: 109, category: "Chairs", sale: false, rating: 4 },
  { slug: "leather-cushion-ottoman", name: "Leather cushion ottoman", price: 159, category: "Storage", sale: false, rating: 4, outOfStock: true },
  { slug: "loveseat-and-ottoman-set", name: "Loveseat and ottoman set", price: 949, category: "Sofas", sale: false, rating: 5 },
];
