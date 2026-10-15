import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, projects, skills } from './profile';
import './styles.css';
import './contact.css';

function Arrow({ diagonal = false, ...props }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  );
}

function Star({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 0 59 32 85 15 68 41 100 50 68 59 85 85 59 68 50 100 41 68 15 85 32 59 0 50 32 41 15 15 41 32Z" fill="currentColor" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function WebsiteArt({ project }) {
  if (project?.id === 'huisinfo') {
    return (
      <div className="oryenza-art oryenza-screenshot huisinfo-art">
        <div className="oryenza-browser">
          <span /><span /><span />
          <small>dev.huisinfo.nl</small>
        </div>
        <div className="huisinfo-preview">
          <LockIcon className="huisinfo-lock-icon" />
          <p className="huisinfo-label">Login required to view</p>
          <span className="huisinfo-sub">React.js · TypeScript · Material UI</span>
        </div>
      </div>
    );
  }

  const isOryenza = project?.id === 'oryenza';
  return (
    <div className="oryenza-art oryenza-screenshot">
      <div className="oryenza-browser">
        <span /><span /><span />
        <small>{isOryenza ? 'oryenza.vercel.app' : 'bhajansarita.com'}</small>
      </div>
      <img
        src={isOryenza ? '/images/oryenza.png' : '/images/bhajan-sarita.png'}
        alt={isOryenza ? 'Oryenza Talent Services website' : 'Bhajan Sarita devotional website with dynamic bhajan pages'}
        loading="lazy"
        width="1366"
        height={isOryenza ? '820' : '720'}
      />
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('All projects');
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);
  const dialog = useRef(null);

  useEffect(() => {
    if (selected && !dialog.current.open) dialog.current.showModal();
    if (!selected && dialog.current.open) dialog.current.close();
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const visibleProjects = projects.filter(p =>
    filter === 'All projects' ||
    (filter === 'Android apps' ? p.type === 'android' : p.type === 'web')
  );

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="header">
        <a href="#" className="brand" aria-label="Portfolio home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>{profile.name || 'devfolio'}<b>.</b></span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-controls="navigation"
        >
          {menu ? 'Close −' : 'Menu +'}
        </button>
        <nav id="navigation" className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">
          {[['Work', 'work'], ['Skills', 'skills'], ['About', 'about']].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>
            Let's talk <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main id="main">

        {/* ── Hero ── */}
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              {profile.role.toUpperCase()}
            </div>
            <h1>
              Web interfaces.<br />
              Built to work.<br />
              <span className="highlight">
                Made to last.
                <svg viewBox="0 0 600 20" preserveAspectRatio="none">
                  <path d="M3 14Q260-3 596 9" />
                </svg>
              </span>
            </h1>
            <p>
              I'm Anita — a frontend developer specialising in React.js, Next.js, and React Native.
              <br className="desktop-break" />
              I build web interfaces, React Native apps, and support projects with Node.js and MongoDB where the backend needs it.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button dark">View my work <Arrow diagonal /></a>
              {profile.resumeUrl
                ? <a href={profile.resumeUrl} className="text-link" target="_blank" rel="noreferrer">Download resume <Arrow diagonal /></a>
                : <a href="https://oryenza-updated.vercel.app/" target="_blank" rel="noreferrer" className="text-link">Visit Oryenza <Arrow diagonal /></a>
              }
            </div>
            <div className="hero-footnote">
              <span>FRONTEND-FOCUSED.</span>
              <span>DETAIL-DRIVEN.</span>
              <span>USER-FOCUSED.</span>
            </div>
          </div>

          <div className="hero-visual hero-web">
            <div className="visual-topline">
              <span>WEB DEVELOPMENT FIRST</span>
              <span>01 / FEATURED</span>
            </div>
            <div className="dot-field" />
            <Star className="hero-star" />
            <a
              className="hero-site-preview"
              href="https://oryenza-updated.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Explore the Oryenza website"
            >
              <div className="oryenza-art oryenza-screenshot">
                <div className="oryenza-browser">
                  <span /><span /><span />
                  <small>oryenza.vercel.app</small>
                </div>
                <img
                  src="/images/oryenza.png"
                  alt="Oryenza recruitment website built with Next.js, showing the homepage"
                  fetchPriority="high"
                  width="1366"
                  height="820"
                />
              </div>
            </a>
            <div className="hero-featured-caption">
              <div>
                <span>NEXT.JS WEBSITE</span>
                <strong>Oryenza</strong>
              </div>
              <a href="https://oryenza-updated.vercel.app/" target="_blank" rel="noreferrer" aria-label="Visit Oryenza live website">
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        {/* ── Skills strip ── */}
        <div className="skills-strip">
          <div className="wrap strip-inner">
            <span>CORE SKILLS</span>
            {['React.js', 'Next.js', 'TypeScript', 'React Native', 'Node.js', 'SEO'].map(t => (
              <React.Fragment key={t}>
                <span className="strip-star">✳</span>
                <strong>{t}</strong>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Work ── */}
        <section className="section wrap" id="work">
          <div className="section-kicker">
            <span>01 / SELECTED WORK</span>
            <span>IDEAS MADE REAL</span>
          </div>
          <div className="section-heading">
            <div>
              <h2>
                A few things<br />
                I've built<span>.</span>
              </h2>
            </div>
            <p>
              Web applications and React Native apps.<br />
              Explore my selected development work.
            </p>
          </div>
          <div className="filters" aria-label="Filter projects">
            {['All projects', 'Websites', 'Android apps'].map(f => (
              <button
                key={f}
                className={filter === f ? 'active' : ''}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f}
                {f === 'All projects' && <span>{String(projects.length).padStart(2, '0')}</span>}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map(p => (
              <article key={p.id} className={`project-card project-${p.id}`}>
                <button
                  className="project-image"
                  onClick={() => setSelected(p)}
                  aria-label={`View ${p.name} project details`}
                >
                  <span className="project-number">{p.number} /</span>
                  {p.image
                    ? <img src={p.image} alt={`${p.name} application screenshot`} loading="lazy" />
                    : <WebsiteArt project={p} />
                  }
                  <span className="project-open"><Arrow diagonal /></span>
                </button>
                <div className="project-meta">
                  <span>{p.category}</span>
                  <span>{p.type === 'web' ? 'WEB' : 'ANDROID'}</span>
                </div>
                <button className="project-title" onClick={() => setSelected(p)}>
                  {p.name}<Arrow diagonal />
                </button>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                {p.url && !p.loginRequired && (
                  <a className="project-live-link" href={p.url} target="_blank" rel="noreferrer">
                    Visit live website <Arrow diagonal />
                  </a>
                )}
                {p.loginRequired && (
                  <span className="project-login-note">
                    <LockIcon width="11" height="11" />
                    Login required to access
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── About ── */}
        <section className="about-section" id="about">
          <div className="wrap about-layout">
            <div className="about-art">
              <span className="about-art-label">THE PERSON BEHIND THE PIXELS</span>
              <div className="code-art">
                <span className="code-comment">// a little about my approach</span>
                <p><span>const</span> developer = {'{'}</p>
                <p className="indent">mindset: <em>"curious"</em>,</p>
                <p className="indent">focus: <em>"the details"</em>,</p>
                <p className="indent">purpose: <em>"build useful things"</em></p>
                <p>{'}'};</p>
                <div className="code-line" />
              </div>
              <Star className="about-star" />
              <span className="art-bottom">A HUMAN APPROACH TO DIGITAL WORK.</span>
            </div>
            <div className="about-copy">
              <div className="section-kicker">02 / A LITTLE ABOUT ME</div>
              <h2>A developer's logic.<br />A designer's eye<span>.</span></h2>
              <p>
                I'm {profile.name ? `${profile.name}, a` : 'a'} frontend developer working with React.js, Next.js, and React Native.
                I build web interfaces with clear layouts, consistent interactions, and SEO built in from the start.
              </p>
              <p>
                Web development is my primary focus. Bhajan Sarita, Huisinfo, and Oryenza each reflect a different side of that work — from full stack and SEO to component libraries and REST API integration.
                I also build React Native apps: NetWorthApp for tracking assets and ContactScan for organising business cards.
                Where a project needs it, I support the backend with Node.js and MongoDB.
              </p>
              <div className="about-principles">
                <span><b>01</b> Clarity comes first</span>
                <span><b>02</b> Details make the difference</span>
                <span><b>03</b> Always keep learning</span>
              </div>
              {profile.resumeUrl && (
                <a className="text-link" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Download my resume <Arrow diagonal />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ── Expertise ── */}
        <section className="section wrap" id="expertise">
          <div className="section-kicker">03 / WHAT I BRING</div>
          <div className="section-heading">
            <h2>Good ideas deserve<br />great execution<span>.</span></h2>
            <p>
              From the first layout to the final interaction,<br />
              I think about the whole experience.
            </p>
          </div>
          <div className="expertise-grid">
            {[
              {
                icon: '</>',
                title: 'React.js, Next.js & React Native',
                text: 'Component-based web and mobile interfaces built with React. My web work covers Next.js sites with clear layouts and consistent behaviour across screen sizes. React Native extends that same thinking to mobile.',
                tags: 'REACT.JS / NEXT.JS / REACT NATIVE / EXPO',
              },
              {
                icon: '{ }',
                title: 'TypeScript & UI libraries',
                text: 'Typed components and reusable UI built with TypeScript, Material UI, Ant Design, and Redux. I focus on interfaces that are consistent, maintainable, and well-structured — built for teams as well as users.',
                tags: 'TYPESCRIPT / MATERIAL UI / ANT DESIGN / REDUX',
              },
              {
                icon: '↗',
                title: 'SEO & backend support',
                text: 'SEO across 300+ dynamic pages on Bhajan Sarita — metadata, readable slugs, sitemap, robots.txt, and social sharing cards. Backend support with Node.js, Express.js, and MongoDB where projects need it.',
                tags: 'SEO / NODE.JS / MONGODB / VERCEL / RAILWAY',
              },
            ].map((x, i) => (
              <article className="expertise-card" key={x.title}>
                <div className="expertise-top">
                  <span className="expertise-icon">{x.icon}</span>
                  <span>0{i + 1}</span>
                </div>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
                <span className="expertise-tags">{x.tags}</span>
              </article>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="section wrap skills-section" id="skills">
          <div className="section-kicker">
            <span>04 / SKILLS & TOOLS</span>
            <span>WHAT I WORK WITH</span>
          </div>
          <div className="section-heading">
            <h2>The tools<br />behind the work<span>.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map(group => (
              <div className="skills-group" key={group.category}>
                <h3 className="skills-group-title">{group.category}</h3>
                <ul className="skills-list">
                  {group.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Resume (hidden when empty) ── */}
        {(profile.experience.length > 0 || profile.education.length > 0) && (
          <section className="wrap resume-section">
            {profile.experience.map((e, i) => (
              <article key={i}>
                <span>{e.period}</span>
                <h3>{e.role} · {e.company}</h3>
                <p>{e.description}</p>
              </article>
            ))}
            {profile.education.map((e, i) => (
              <article key={i}>
                <span>{e.period}</span>
                <h3>{e.degree}</h3>
                <p>{e.institution}</p>
              </article>
            ))}
          </section>
        )}

        {/* ── Contact ── */}
        <section className="contact-section wrap" id="contact">
          <div className="contact-panel">
            <div className="section-kicker">
              <span>OPEN TO OPPORTUNITIES</span>
              <Star />
            </div>
            <h2>Let's build<br />something <em>meaningful.</em></h2>
            <div className="contact-bottom">
              <p>
                Looking for a frontend developer with React.js, Next.js, or React Native experience?<br />
                I'm open to full-time roles and freelance projects.
              </p>
              {profile.email ? (
                <div className="contact-actions">
                  <a className="button dark" href={`mailto:${profile.email}`}>Send an email <Arrow diagonal /></a>
                  <button className="copy-email" onClick={copyEmail}>{copied ? 'Email copied!' : 'Copy email'}</button>
                  <span role="status" className="sr-only">{copied ? 'Email copied to clipboard' : ''}</span>
                </div>
              ) : (
                <a className="button dark" href={profile.linkedin} target="_blank" rel="noreferrer">
                  Connect on LinkedIn <Arrow diagonal />
                </a>
              )}
            </div>
            <div className="contact-links">
              <span>{profile.name} · {profile.role}</span>
              <div>
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
                )}
                {profile.github && (
                  <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
                )}
                {profile.resumeUrl && (
                  <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume <Arrow diagonal /></a>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="wrap footer">
        <a className="brand" href="#">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>{profile.name || 'devfolio'}<b>.</b></span>
        </a>
        <span className="footer-description">
          Frontend development · React.js · Next.js · React Native · Node.js · SEO<br />
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </span>
        <div>
          {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>}
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>}
          <a href="#">Back to top ↑</a>
        </div>
      </footer>

      <dialog
        ref={dialog}
        onCancel={() => setSelected(null)}
        onClick={e => { if (e.target === dialog.current) setSelected(null); }}
        aria-labelledby="project-dialog-title"
      >
        <button className="dialog-close" onClick={() => setSelected(null)} aria-label="Close project details">×</button>
        {selected && (
          <div className="dialog-content">
            {selected.image
              ? <img src={selected.image} alt={`${selected.name} full application preview`} />
              : <WebsiteArt project={selected} />
            }
            <div className="dialog-copy">
              <span className="section-kicker">{selected.category}</span>
              <h2 id="project-dialog-title">{selected.name}</h2>
              <h3>{selected.headline}</h3>
              <p>{selected.details}</p>
              <div className="tags">
                {selected.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              {selected.loginRequired && (
                <p className="dialog-login-note">
                  <LockIcon width="13" height="13" />
                  This application requires a login. A demo account is needed to explore it.
                </p>
              )}
              {selected.url && (
                <a href={selected.url} className="button dark" target="_blank" rel="noreferrer">
                  {selected.loginRequired ? 'Open website' : 'Visit website'} <Arrow diagonal />
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
