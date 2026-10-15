// Add verified resume details here. Empty fields are intentionally hidden.
export const profile = {
  name: 'Anita Vaghani',
  role: 'Frontend Developer | React.js, Next.js & React Native',
  email: 'vaghanianita918@gmail.com', // Add your email here — used for the contact mailto link
  github: 'https://github.com/anita025',
  linkedin: 'https://www.linkedin.com/in/anita-vaghani-46b3b9259/',
  resumeUrl: '/public/Anita Vaghani_Frontend Developer.pdf', // CV file in public/Anita_Vaghani_CV.pdf
  experience: [], // { role, company, period, description }
  education: [], // { degree, institution, period }
};

export const projects = [
  {
    id: 'bhakti',
    number: '01',
    type: 'web',
    name: 'Bhajan Sarita',
    category: 'Full stack website & app',
    headline: 'Devotional content, built for discoverability.',
    description: 'A full stack devotional platform built with Next.js and Node.js, with SEO implemented across 300+ dynamic pages and an Expo React Native app.',
    details: 'Bhajan Sarita is a devotional content platform I built across the full stack. The frontend is a Next.js website with dynamic bhajan pages and search. The backend runs on Node.js and MongoDB. I implemented SEO across 300+ dynamic pages — metadata, readable slugs, a sitemap, robots.txt, and social sharing cards. An Expo React Native app accompanies the website. The frontend is deployed on Vercel and the backend on Railway.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Expo', 'SEO'],
    url: 'https://www.bhajansarita.com/',
  },
  {
    id: 'huisinfo',
    number: '02',
    type: 'web',
    name: 'Huisinfo',
    category: 'House maintenance management',
    headline: 'Repair requests, tracked and resolved.',
    description: 'A house-maintenance management application with repair-request creation, status tracking, and role-based actions.',
    details: 'Huisinfo is a property maintenance management application. I built reusable UI components and integrated REST APIs to support repair-request creation, status tracking, and role-based user actions. The interface is built with React.js, TypeScript, and Material UI. Access requires a login — a demo account is needed to explore the full application.',
    tags: ['React.js', 'TypeScript', 'Material UI', 'REST APIs'],
    url: 'https://dev.huisinfo.nl',
    loginRequired: true,
    image: '/images/huisinfo.png',
  },
  {
    id: 'oryenza',
    number: '03',
    name: 'Oryenza',
    type: 'web',
    category: 'Next.js website',
    headline: 'From an idea to a live website.',
    description: 'A recruitment website built with Next.js, styled, and deployed live on Vercel.',
    details: 'I built Oryenza using Next.js and published it on Vercel. This project reflects my focus on web development — from building the interface to bringing it live. Explore the finished experience using the link below.',
    tags: ['Next.js', 'Vercel', 'Web development'],
    url: 'https://oryenza.vercel.app/',
  },
  {
    id: 'networth',
    number: '04',
    type: 'android',
    name: 'NetWorthApp',
    category: 'Finance application',
    headline: 'Every asset. One clear view.',
    description: 'A single place to see total wealth, explore assets, and keep financial information organized.',
    details: 'The app brings total assets, gains, and recent holdings into one dashboard. Asset categories and filtering help make a diverse financial picture easier to navigate.',
    tags: ['Dashboard', 'Asset management', 'Mobile app'],
    image: '/images/networth.png',
  },
  {
    id: 'conctscan',
    number: '05',
    type: 'android',
    name: 'ConctScan',
    category: 'Productivity application',
    headline: 'Small cards. Better connections.',
    description: 'Scan, save, and organize business cards. Keep your next connection just a tap away.',
    details: 'ConctScan brings scanned business cards into a searchable library with favorites, groups, and sorting. Contact information stays together in an interface designed around quick access.',
    tags: ['Card scanning', 'Contact organization', 'Mobile app'],
    image: '/images/conctscan.png',
  },
].sort((a, b) => Number(a.number) - Number(b.number));

export const skills = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Mobile', items: ['React Native', 'Expo'] },
  { category: 'UI & State', items: ['Redux', 'Material UI', 'Ant Design'] },
  { category: 'Backend & APIs', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] },
  { category: 'Tools & Deployment', items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Railway'] },
  { category: 'SEO', items: ['Metadata', 'Sitemap', 'robots.txt', 'Dynamic page SEO'] },
];
