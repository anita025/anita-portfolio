// Add verified resume details here. Empty fields are intentionally hidden.
export const profile = {
  name: 'Anita Vaghani',
  role: 'Web Developer | Next.js & React.js',
  email: '',
  github: 'https://github.com/anita025',
  linkedin: 'https://www.linkedin.com/in/anita-vaghani-46b3b9259/',
  resumeUrl: '', // Put your CV in public/resume.pdf and set this to '/resume.pdf'.
  experience: [], // { role, company, period, description }
  education: [], // { degree, institution, period }
};

export const projects = [
 { id: 'oryenza', number: '01', name: 'Oryenza', type: 'web', category: 'Next.js website', headline: 'From an idea to a live website.', description: 'A website I built with Next.js and deployed on Vercel. Explore my web development work live.', details: 'I built Oryenza using Next.js and published it on Vercel. This project reflects my focus on web development, from building the website to bringing it online. Explore the finished experience using the live link below.', tags: ['Next.js', 'Web development', 'Vercel'], url: 'https://oryenza.vercel.app/' },
  {
    id: 'networth', number: '03', type: 'android', name: 'NetWorthApp', category: 'Finance application',
    headline: 'Every asset. One clear view.',
    description: 'A single place to see total wealth, explore assets, and keep financial information organized.',
    details: 'The app brings total assets, gains, and recent holdings into one dashboard. Asset categories and filtering help make a diverse financial picture easier to navigate.',
    tags: ['Dashboard', 'Asset management', 'Mobile app'], image: '/images/networth.png',
  },
  {
    id: 'conctscan', number: '04', type: 'android', name: 'ConctScan', category: 'Productivity application',
    headline: 'Small cards. Better connections.',
    description: 'Scan, save, and organize business cards. Keep your next connection just a tap away.',
    details: 'ConctScan brings scanned business cards into a searchable library with favorites, groups, and sorting. Contact information stays together in an interface designed around quick access.',
    tags: ['Card scanning', 'Contact organization', 'Mobile app'], image: '/images/conctscan.png',
  },
  {
    id: 'bhakti', number: '02', type: 'web', name: 'Bhajan Sarita', category: 'Full stack website & SEO',
    headline: 'Devotional content, connected through the web.',
    description: 'A devotional web project combining full stack development with SEO work, bringing Bhajan Sarita to life online.',
    details: 'I worked on Bhajan Sarita across full stack web development and SEO. The project brings together my work with Next.js and Node.js, connecting the website experience with its server-side functionality. Alongside development, I worked on search engine optimization to help people discover its content.',
    tags: ['Next.js', 'Node.js', 'SEO'], url: 'https://www.bhajansarita.com/',
  },
].sort((a,b) => Number(a.number) - Number(b.number));
