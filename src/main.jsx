import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const assetUrl = path => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    number: '01',
    title: 'PaperForge',
    type: 'AI writing assistant',
    image: assetUrl('images/paperForge.png'),
    description: 'An academic writing assistant that turns uploaded sources into structured, referenced assignments instead of unsupported text.',
    stack: ['Python', 'RAG', 'LangChain', 'ChromaDB', 'Streamlit'],
    details: ['Accepts one or multiple documents', 'Retrieves relevant source passages', 'Supports multiple referencing styles'],
    href: 'https://github.com/Danya128/PaperForge'
  },
  {
    number: '02',
    title: 'GazeFix',
    type: 'Computer vision prototype',
    image: assetUrl('images/gazeFix.png'),
    description: 'A real-time gaze correction prototype that combines landmark detection, head-pose estimation, regression, and local eye-region warping.',
    stack: ['Python', 'MediaPipe', 'OpenCV', 'NumPy', 'scikit-learn'],
    details: ['Calibrates target iris positions', 'Predicts gaze from head pose', 'Compares original and corrected frames'],
    href: 'https://github.com/Danya128/GazeFix'
  }
];

const certificates = [
  { title: 'Data Analytics Essentials', issuer: 'Cisco Networking Academy', file: 'DataAnalyticsEssentialsUpdate20260518-31-x4u0ss copy.pdf', preview: 'DataAnalyticsEssentialsUpdate20260518-31-x4u0ss copy.pdf.png' },
  { title: 'NVIDIA Learning Certificate', issuer: 'NVIDIA', file: 'My Learning _ NVIDIA copy.pdf', preview: 'My Learning _ NVIDIA copy.pdf.png' },
  { title: 'Udemy', issuer: 'Udemy', file: 'UC-4921b3be-d863-49fb-9832-d74baa1ae414 copy.pdf', preview: 'UC-4921b3be-d863-49fb-9832-d74baa1ae414 copy.pdf.png' },
  { title: 'Udemy', issuer: 'Udemy', file: 'UC-87a4928e-7865-4c5e-bd31-50e8de672953 copy.pdf', preview: 'UC-87a4928e-7865-4c5e-bd31-50e8de672953 copy.pdf.png' },
  { title: 'Udemy', issuer: 'Udemy', file: 'UC-945a80a3-3101-4879-b764-e23e062e66f0 copy.pdf', preview: 'UC-945a80a3-3101-4879-b764-e23e062e66f0 copy.pdf.png' },
  { title: 'Udemy', issuer: 'Udemy', file: 'UC-9cb49da5-eac1-4fd5-a790-f7d35775e226 copy.pdf', preview: 'UC-9cb49da5-eac1-4fd5-a790-f7d35775e226 copy.pdf.png' },
  { title: 'Udemy', issuer: 'Udemy', file: 'UC-e26feaf7-9253-4759-ae05-1b5eb2c279c4 copy.pdf', preview: 'UC-e26feaf7-9253-4759-ae05-1b5eb2c279c4 copy.pdf.png' }
];

const skills = [
  ['Languages', 'Python', 'C', 'JavaScript', 'SQL'],
  ['Web & systems', 'HTML', 'CSS', 'Docker'],
  ['Data & AI', 'LangChain', 'OpenCV', 'NumPy', 'pandas']
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <a className="wordmark" href="#top" onClick={close}><span>DO</span><b>Daniil Oliinyk</b></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span><i /></button>
    <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'}>
      <a href="#work" onClick={close}>Work</a><a href="#about" onClick={close}>About</a><a href="#certificates" onClick={close}>Certificates</a>
      <a className="nav-contact" href="#contact" onClick={close}>Let's talk <Arrow /></a>
    </nav>
  </header>;
}

function ProjectCard({ project }) {
  return <article className="project-card reveal">
    <a className="project-row" href={project.href} target="_blank" rel="noreferrer">
      <span className="project-row-copy"><span className="project-row-title">{project.title}</span><span className="project-row-description">{project.description}</span><span className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</span></span><span className="project-row-type">{project.type}</span><span className="project-logo"><img src={project.image} alt={`${project.title} logo`} /></span><span className="project-arrow" aria-hidden="true">↗</span>
    </a>
  </article>;
}

function ProjectList() {
  return <div className="projects-list">{projects.map(project => <ProjectCard key={project.title} project={project} />)}</div>;
}

function CertificateGallery({ onOpen }) {
  return <div className="certificate-gallery">{certificates.map(certificate => <button className="certificate-card reveal" type="button" onClick={() => onOpen(certificate)} key={certificate.file}><img src={assetUrl(`Certs/previews/${encodeURIComponent(certificate.preview)}`)} alt={`${certificate.title} preview`} /><span className="certificate-meta"><span className="certificate-title">{certificate.title}</span><span className="certificate-issuer">{certificate.issuer}</span><span className="certificate-open">View certificate <Arrow /></span></span></button>)}</div>;
}

function ContactVisual() {
  return <div className="contact-visual"><div className="contact-visual-label">DATA / AI / SYSTEMS</div><div className="field-visual" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="contact-visual-line" /><p>Ready for the next<br /><em>real-world challenge</em></p></div>;
}

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeFocus, setActiveFocus] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { document.body.style.overflow = selectedCertificate ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selectedCertificate]);

  return <>
    <Header />
    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy"><p className="kicker">Portfolio / Data science <span>×</span> artificial intelligence</p><h1>Daniil<br /><em>Oliinyk</em></h1><p className="hero-role">BSc Data Science and Artificial Intelligence student at Technological University Dublin</p><div className="hero-actions"><a className="button button-primary" href="#work">View my projects <Arrow /></a></div></div>
        <div className="hero-aside" aria-hidden="true"><div className="signal-orbit"><span /><span /><span /></div><span className="scroll-note">Scroll to explore <i>↓</i></span></div>
        <div className="home-about" id="about"><div className="about-lead"><p className="section-label">01 / About me</p><p className="home-about-title">Practical projects<br /><em>Curious systems</em></p><div className="home-skills"><div className="focus-switcher"><p className="section-label">What I work with</p><div className="focus-tabs">{skills.map(([label], index) => <button className={activeFocus === index ? 'focus-tab is-active' : 'focus-tab'} key={label} type="button" onClick={() => setActiveFocus(index)}>{label}</button>)}</div><div className="focus-items">{skills[activeFocus].slice(1).map(item => <span key={item}>{item}</span>)}</div></div></div></div><div className="home-about-copy"><p>Hi! I’m Daniil, a second year Data Science & Artificial Intelligence student at Technological University Dublin. I’m interested in how AI, data, and software can be used to solve real-world problems, and I enjoy learning by building practical applications and exploring how systems work behind the scenes.</p><p>I’m particularly interested in Computer Vision, Machine Learning, and applied AI, while also developing my broader software engineering skills. Outside university, I spend time working on personal projects, learning new technologies, and improving my technical knowledge beyond coursework.</p><p>I’m currently focused on growing as an engineer and preparing for future internship opportunities where I can contribute to real projects, learn from experienced developers, and gain practical industry experience.</p></div></div>
      </section>

      <section className="work section-shell" id="work"><div className="section-heading"><div><p className="section-label">02 / Selected work</p><h2>Projects I’ve<br /><em>built</em></h2></div></div><ProjectList /></section>

      <section className="certificates section-shell" id="certificates"><div className="section-heading"><div><p className="section-label">03 / Certificates</p><h2>Learning that<br /><em>keeps moving</em></h2></div></div><CertificateGallery onOpen={setSelectedCertificate} /></section>

      <section className="contact section-shell" id="contact"><div className="contact-inner"><div><p className="section-label">04 / Contact</p><h2>Let’s build<br /><em>something useful</em></h2><p className="contact-copy">I’m open to internship opportunities, project conversations, and practical technical challenges</p><div className="contact-actions"><a className="button button-primary" href="mailto:oleynukd@gmail.com">oleynukd@gmail.com <Arrow /></a><a className="button button-quiet" href="https://www.linkedin.com/in/daniil-oliinyk-362b0938a/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a className="button button-quiet" href="https://github.com/Danya128" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div><ContactVisual /></div></section>
    </main>
    <footer className="site-footer section-shell"><span>© {new Date().getFullYear()} Daniil Oliinyk</span><span>Data Science & AI / TU Dublin</span><a href="#top">Back to top ↑</a></footer>
    {selectedCertificate && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedCertificate(null)}><div className="certificate-modal" role="dialog" aria-modal="true" aria-label={selectedCertificate.title} onClick={event => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate">×</button><img src={assetUrl(`Certs/previews/${encodeURIComponent(selectedCertificate.preview)}`)} alt="" /><p className="section-label">{selectedCertificate.issuer}</p><h2>{selectedCertificate.title}</h2><a className="button button-primary" href={assetUrl(`Certs/${encodeURIComponent(selectedCertificate.file)}`)} target="_blank" rel="noreferrer">Open original PDF <Arrow /></a></div></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
