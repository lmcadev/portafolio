import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, ArrowDown, GitFork, BriefcaseBusiness, Code2, Layers, Terminal, Menu, X, Box, Cpu, GraduationCap, Globe2 } from 'lucide-react';
import { developerData } from '@/data/developerData';

const navigation = [['proyectos', 'Proyectos'], ['sobre-mi', 'Sobre mí'], ['experiencia', 'Experiencia']];
const ExternalLink = ({ href, children, ...props }) => <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
const SectionHeading = ({ number, eyebrow, title, children }) => <div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {eyebrow}</p><h2>{title}</h2></div>{children}</div>;

const english = {
  'Proyectos': 'Projects', 'Sobre mí': 'About', 'Experiencia': 'Experience', 'Hablemos': 'Let’s talk',
  'Saltar al contenido': 'Skip to content', 'SOFTWARE CON PROPÓSITO': 'SOFTWARE WITH PURPOSE',
  'Hola, soy Luis Miguel Castañeda.': 'Hi, I’m Luis Miguel Castañeda.', 'Ingeniero de': 'Software', 'software.': 'engineer.',
  'Conecto ideas, código y mundo real. Desarrollo aplicaciones y sistemas que simplifican procesos y resuelven problemas de negocio.': 'I connect ideas, code, and the real world. I build applications and systems that simplify processes and solve business challenges.',
  'Explorar proyectos': 'Explore projects', 'Trabajemos juntos': 'Let’s work together', 'MI CAJA DE HERRAMIENTAS': 'MY TOOLBOX',
  'DEL CÓDIGO AL MUNDO REAL': 'FROM CODE TO THE REAL WORLD', 'Proyectos seleccionados.': 'Selected projects.',
  'Productos, automatización e ideas': 'Products, automation, and ideas', 'convertidas en software.': 'turned into software.',
  'Todos': 'All', 'EN FOCO': 'FEATURED', 'Explorar el proyecto': 'View case study', 'Más código e ideas en GitHub': 'More code and ideas on GitHub',
  'LA PERSONA DETRÁS DEL CÓDIGO': 'THE PERSON BEHIND THE CODE', 'Ingeniería con contexto.': 'Engineering with context.',
  'Entender el problema es el primer paso para escribir una buena solución.': 'Understanding the problem is the first step toward writing a good solution.',
  'Mi trayectoria en investigación, desarrollo e industria aporta una perspectiva práctica: conectar la tecnología con los procesos y las personas que la utilizan.': 'My background in research, development, and industry brings a practical perspective: connecting technology with the processes and people who use it.',
  'Conversemos sobre tu idea': 'Let’s discuss your idea', 'UNA TRAYECTORIA EN CONSTRUCCIÓN': 'A CAREER IN THE MAKING', 'Experiencia que conecta.': 'Experience that connects.',
  'FORMACIÓN ACADÉMICA': 'ACADEMIC BACKGROUND', 'APRENDIZAJE CONTINUO': 'CONTINUOUS LEARNING', 'La curiosidad también es parte del trabajo.': 'Curiosity is part of the job, too.',
  'Ver más formación': 'See more training', 'EL SIGUIENTE PROYECTO EMPIEZA CON UNA CONVERSACIÓN': 'THE NEXT PROJECT STARTS WITH A CONVERSATION',
  '¿Construimos': 'Shall we build', 'algo juntos?': 'something together?', 'Volver arriba ↑': 'Back to top ↑',
  'Proyecto privado': 'Private project', 'Caso de estudio disponible bajo solicitud.': 'Case study available on request.',
  'Soy ingeniero de software con enfoque en desarrollo backend y aplicaciones full stack. Trabajo con Java, Spring Boot, Node.js y React para transformar necesidades de negocio en soluciones claras y mantenibles. Me interesan las arquitecturas de software, la automatización y la entrega continua; disfruto aprender, colaborar y llevar las ideas desde el diseño hasta el despliegue.': 'I am a software engineer focused on backend development and full-stack applications. I work with Java, Spring Boot, Node.js, and React to turn business needs into clear, maintainable solutions. I am interested in software architecture, automation, and continuous delivery; I enjoy learning, collaborating, and taking ideas from design to deployment.',
  'Backend & arquitectura': 'Backend & architecture', 'Frontend & experiencia': 'Frontend & experience', 'Datos & persistencia': 'Data & persistence', 'DevOps & calidad': 'DevOps & quality', 'Pruebas unitarias': 'Unit testing',
  'Líder de proyectos de investigación y desarrollo': 'Research & development project lead', 'Septiembre 2017 - Presente': 'September 2017 - Present',
  'Liderazgo de proyectos de I+D en tecnología láser industrial. Diseño de cadenas de producción, coordinación de equipos multidisciplinarios y desarrollo de software interno y plataformas de comercio electrónico.': 'Leading R&D projects in industrial laser technology. Designing production lines, coordinating multidisciplinary teams, and developing internal software and e-commerce platforms.',
  'Gerente General': 'General Manager', 'Enero 2016 - Septiembre 2017': 'January 2016 - September 2017',
  'Gestión de proyectos a medida, negociación con clientes y coordinación de importaciones y proveedores internacionales. Supervisión de equipos y procesos de calidad.': 'Managing custom projects, client negotiations, imports, and international suppliers. Supervising teams and quality processes.',
  'Desarrollador web': 'Web developer', 'Enero 2011 - Enero 2016': 'January 2011 - January 2016',
  'Desarrollo y mantenimiento de CMS y comercio electrónico. Creación de software de gestión interna, administración de bases de datos y elaboración de reportes.': 'Developing and maintaining CMS and e-commerce solutions. Building internal management software, administering databases, and producing reports.',
  'Ingeniería de Software': 'Software Engineering', 'Ingeniería de Sistemas': 'Systems Engineering', 'Estudios parciales': 'Partial studies', 'Diplomado en Ciencias de la Computación': 'Diploma in Computer Science', 'Formación complementaria': 'Continuing education',
  '// Construir con intención.': '// Build with intention.', 'Resolver problemas': 'Solve problems', 'Aprender y construir': 'Learn and build',
  'Interfaz': 'Interface', 'Experiencias claras': 'Clear experiences', 'Lógica y datos': 'Logic and data', 'Despliegue': 'Deploy', 'Entrega continua': 'Continuous delivery',
  'idea → código → solución': 'idea → code → solution', 'Diseño. Desarrollo. Evolución.': 'Design. Development. Evolution.', 'Visitar Auto3Draw': 'Visit Auto3Draw',
};

const projectEnglish = {
  Auto3Draw: ['Web CAD/CAM · 3D design & manufacturing', 'A parametric design web platform for 3D signage and NeonFlex. It brings together 2D drawing, vectorization, browser-based 3D modeling, and manufacturing-ready exports.'],
  ProductApp: ['Production management', 'A cross-platform app for small manufacturers. It organizes work orders, assigns tasks, and tracks stages such as design, laser cutting, assembly, and quality control.'],
  MenuGram: ['Restaurant technology', 'A digital menu and restaurant order-management system that connects menu discovery with real-time orders to streamline service operations.'],
  Cotiz: ['AI-assisted quotations', 'A software proposal that automates business quotations and uses artificial intelligence to generate unique designs.'],
  'Chiller F18': ['Software & industry', 'Control software for an F18 industrial chiller used with 500 W to 2000 W fiber lasers, connecting software, electronics, and industrial needs.'],
};

function FuturisticBackground() {
  return <div className="future-background" aria-hidden="true"><div className="orbit-field"><span className="orbit-ring ring-one" /><span className="orbit-ring ring-two" /><span className="orbit-ring ring-three" />{Array.from({ length: 8 }, (_, index) => <i className="orbit-node" key={`node-${index}`} />)}</div><div className="data-streams">{Array.from({ length: 7 }, (_, index) => <i key={`stream-${index}`} />)}</div><div className="particle-field">{Array.from({ length: 18 }, (_, index) => <i key={`particle-${index}`} />)}</div></div>;
}

function ProjectSlideshow({ project }) {
  const images = project.images || [project.image];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (images.length < 2) return undefined;
    const interval = window.setInterval(() => setActiveSlide(current => (current + 1) % images.length), 5000);
    return () => window.clearInterval(interval);
  }, [images.length]);

  return <div className="project-slideshow" aria-label={`Galería de ${project.title}`}>
    {images.map((image, index) => <img key={image} className={`auto3draw-screenshot ${index === activeSlide ? 'active' : ''}`} src={image} alt={`Vista ${index + 1} de ${project.title}`} loading={index === 0 ? 'eager' : 'lazy'} width="900" height="560" />)}
    <div className="slideshow-controls" role="tablist" aria-label={`Vistas de ${project.title}`}>{images.map((image, index) => <button key={image} type="button" role="tab" aria-selected={index === activeSlide} aria-label={`Ver imagen ${index + 1}`} onClick={() => setActiveSlide(index)} />)}</div>
  </div>;
}

function ProjectVisual({ project }) {
  if (project.images?.length) return <ProjectSlideshow project={project} />;
  if (project.image) {
    const image = <img className={project.title === 'Auto3Draw' ? 'auto3draw-screenshot' : ''} src={project.image} alt={`Vista de ${project.title}`} loading="lazy" width="900" height="560" />;
    return image;
  }
  if (project.title === 'Auto3Draw') return <div className="blueprint" aria-hidden="true"><span className="blueprint-label">AUTO3DRAW / PARAMETRIC ENGINE</span><div className="wire-cube"><div /><div /><div /></div><span className="blueprint-coordinates">X — Y — Z</span><span className="visual-caption">Diseño → geometría → fabricación.</span></div>;
  return <div className="ai-visual" aria-hidden="true"><span className="blueprint-label">COTIZ / INTELIGENCIA ARTIFICIAL</span><div className="quote-sheet"><span>Propuesta de proyecto</span><strong>De la idea<br />a la cotización<span>✦</span></strong><i /><i /><i /></div></div>;
}

function ProjectAccess({ project, tr }) {
  if (project.title === 'Auto3Draw') return <a className="project-access public-access" href={project.link} target="_blank" rel="noopener noreferrer"><span><strong>{tr('Visitar Auto3Draw')}</strong>auto3draw.app</span><ArrowUpRight size={17} /></a>;
  return <p className="project-access"><span><strong>{tr('Proyecto privado')}</strong>{tr('Caso de estudio disponible bajo solicitud.')}</span></p>;
}

export default function ResumePage() {
  const { personal, about, skills, experience, education, course, portfolio } = developerData;
  const detectedLanguage = typeof navigator !== 'undefined' && !navigator.language.toLowerCase().startsWith('es') ? 'en' : 'es';
  const [language, setLanguage] = useState(detectedLanguage);
  const [filter, setFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const tr = (value) => language === 'en' ? english[value] || value : value;
  const categories = ['Todos', ...new Set(portfolio.map(project => project.category))];
  const visibleProjects = portfolio.filter(project => filter === 'Todos' || project.category === filter);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  useEffect(() => { setFilter('Todos'); }, [language]);
  return <>
    <Helmet><title>{`${personal.name} | ${language === 'en' ? 'Software engineer' : personal.title}`}</title><meta name="description" content={tr('Conecto ideas, código y mundo real. Desarrollo aplicaciones y sistemas que simplifican procesos y resuelven problemas de negocio.')} /></Helmet>
    <FuturisticBackground />
    <a className="skip-link" href="#contenido">{tr('Saltar al contenido')}</a>
    <header className="site-header"><div className="shell header-inner">
      <a href="#inicio" className="brand" aria-label="LMCA dev, inicio">lmca<span>dev</span><b>.</b></a>
      <div className="header-actions"><button className="language-toggle" onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}><Globe2 size={15} /> {language === 'es' ? 'EN' : 'ES'}</button><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
      <nav id="navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Primary navigation">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{tr(label)}</a>)}<a className="nav-contact" href="#contacto" onClick={() => setMenuOpen(false)}>{tr('Hablemos')} <ArrowUpRight size={16} /></a></nav>
    </div></header>
    <main id="contenido">
      <section className="shell hero" id="inicio"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> {tr('SOFTWARE CON PROPÓSITO')}</p><p className="hero-name">{tr('Hola, soy Luis Miguel Castañeda.')}</p><h1>{tr('Ingeniero de')}<br /><span>{tr('software.')}</span></h1><p className="hero-description">{tr('Conecto ideas, código y mundo real. Desarrollo aplicaciones y sistemas que simplifican procesos y resuelven problemas de negocio.')}</p><div className="hero-actions"><a className="button primary" href="#proyectos">{tr('Explorar proyectos')} <ArrowDown size={17} /></a><a className="text-link" href={`mailto:${personal.email}`}>{tr('Trabajemos juntos')} <ArrowUpRight size={17} /></a></div><div className="hero-social"><ExternalLink href={personal.github}><GitFork size={17} /> GitHub <ArrowUpRight size={13} /></ExternalLink><ExternalLink href={personal.linkedin}><BriefcaseBusiness size={17} /> LinkedIn <ArrowUpRight size={13} /></ExternalLink><span>Backend · Full stack · DevOps</span></div></div>
      <div className="engineering-visual" aria-label="Software engineering workflow"><div className="visual-toolbar"><span><i /><i /><i /></span><span>engineering.workspace</span><Code2 size={16} /></div><div className="workspace-body"><p className="code-comment">{tr('// Construir con intención.')}</p><div className="code-line"><span>const</span> engineer = {'{'}</div><div className="code-property">name: <em>'Luis Miguel'</em>,</div><div className="code-property">focus: <em>'{tr('Resolver problemas')}'</em>,</div><div className="code-property">mindset: <em>'{tr('Aprender y construir')}'</em></div><div className="code-line">{'};'}</div><div className="architecture"><div><Layers size={24} /><span>{tr('Interfaz')}</span><small>{tr('Experiencias claras')}</small></div><span className="connector">↓</span><div><Terminal size={24} /><span>Backend</span><small>{tr('Lógica y datos')}</small></div><span className="connector">↓</span><div><Box size={24} /><span>{tr('Despliegue')}</span><small>{tr('Entrega continua')}</small></div></div><p className="terminal-line"><span>❯</span> {tr('idea → código → solución')}<span className="cursor">_</span></p></div><div className="visual-bottom"><span className="status-dot" /> {tr('Diseño. Desarrollo. Evolución.')}<span>01 — ∞</span></div></div>
      </section>
      <div className="stack-strip"><div className="shell"><span>{tr('MI CAJA DE HERRAMIENTAS')}</span>{['Java & Spring Boot', 'React', 'Node.js', 'SQL', 'Docker', 'CI/CD'].map(item => <span key={item}>{item}</span>)}</div></div>
      <section className="shell section" id="proyectos"><SectionHeading number="01" eyebrow={tr('DEL CÓDIGO AL MUNDO REAL')} title={tr('Proyectos seleccionados.')}><p>{tr('Productos, automatización e ideas')}<br />{tr('convertidas en software.')}</p></SectionHeading><div className="project-filters" role="group" aria-label="Filter projects">{categories.map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{tr(category)}{category === 'Todos' && <span>{portfolio.length.toString().padStart(2, '0')}</span>}</button>)}</div><p className="sr-only" aria-live="polite">{visibleProjects.length} projects</p>
      <div className="project-grid">{visibleProjects.map(project => { const localized = projectEnglish[project.title]; const subtitle = language === 'en' && localized ? localized[0] : project.subtitle || project.category; const description = language === 'en' && localized ? localized[1] : project.description; return <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}><div className={`project-image visual-${project.category.toLowerCase().replaceAll(' ', '-')}`}><ProjectVisual project={project} /><span className="project-label">{project.featured ? tr('EN FOCO') : project.category}</span></div><div className="project-content"><p className="project-category">{subtitle}</p><div className="project-title"><h3>{project.title}</h3></div><p className="project-description">{description}</p>{project.tags.length > 0 && <ul className="tags" aria-label={`Technologies used in ${project.title}`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}{project.details && <details className="project-details"><summary>{tr('Explorar el proyecto')} <span>+</span></summary><div>{project.details.map(detail => <div key={detail.title}><h4>{detail.title}</h4><p>{detail.description}</p></div>)}</div></details>}<ProjectAccess project={project} tr={tr} /></div></article>; })}</div><ExternalLink className="text-link more-projects" href={personal.github}>{tr('Más código e ideas en GitHub')} <GitFork size={18} /><ArrowUpRight size={16} /></ExternalLink></section>
      <section className="about-section" id="sobre-mi"><div className="shell section"><SectionHeading number="02" eyebrow={tr('LA PERSONA DETRÁS DEL CÓDIGO')} title={tr('Ingeniería con contexto.')} /><div className="about-grid"><div className="about-copy"><p className="large-copy">{tr('Entender el problema es el primer paso para escribir una buena solución.')}</p><p>{tr(about)}</p><p>{tr('Mi trayectoria en investigación, desarrollo e industria aporta una perspectiva práctica: conectar la tecnología con los procesos y las personas que la utilizan.')}</p><a className="text-link" href={`mailto:${personal.email}`}>{tr('Conversemos sobre tu idea')} <ArrowUpRight size={17} /></a></div><div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill.category}><span className="skill-number">0{index + 1}</span><div><h3>{tr(skill.category)}</h3><p>{skill.items.map(tr).join(' · ')}</p></div></div>)}</div></div></div></section>
      <section className="shell section" id="experiencia"><SectionHeading number="03" eyebrow={tr('UNA TRAYECTORIA EN CONSTRUCCIÓN')} title={tr('Experiencia que conecta.')} /><div className="experience-list">{experience.map((job, index) => <article className="experience-row" key={job.company}><div className="experience-period"><span className="timeline-dot" />{tr(job.period)}</div><div><p className="company">{job.company}</p><h3>{tr(job.title)}</h3><p>{tr(job.description)}</p></div><span className="experience-index">0{index + 1}</span></article>)}</div><div className="education-layout"><div><p className="eyebrow"><GraduationCap size={17} /> {tr('FORMACIÓN ACADÉMICA')}</p>{education.map(item => <div className="education-item" key={item.institution}><h3>{tr(item.degree)}</h3><p>{item.institution}</p><span>{tr(item.period)}</span></div>)}</div><div><p className="eyebrow"><Cpu size={17} /> {tr('APRENDIZAJE CONTINUO')}</p><p className="learning-intro">{tr('La curiosidad también es parte del trabajo.')}</p><div className="course-list">{course.slice(0, 4).map(item => <div key={item.degree}><span>{tr(item.degree)}</span><small>{tr(item.institution)} · {item.period}</small></div>)}</div><details className="more-courses"><summary>{tr('Ver más formación')}</summary><div className="course-list">{course.slice(4).map(item => <div key={item.degree}><span>{tr(item.degree)}</span><small>{tr(item.institution)} · {item.period}</small></div>)}</div></details></div></div></section>
      <section className="contact-section" id="contacto"><div className="shell contact-inner"><p className="eyebrow">{tr('EL SIGUIENTE PROYECTO EMPIEZA CON UNA CONVERSACIÓN')}</p><h2>{tr('¿Construimos')}<br /><span>{tr('algo juntos?')}</span></h2><a className="contact-email" href={`mailto:${personal.email}`}>{personal.email}<ArrowUpRight /></a><div className="contact-social"><ExternalLink href={personal.github}>GitHub <ArrowUpRight size={16} /></ExternalLink><ExternalLink href={personal.linkedin}>LinkedIn <ArrowUpRight size={16} /></ExternalLink></div></div></section>
    </main><footer className="shell footer"><a href="#inicio" className="brand">lmca<span>dev</span><b>.</b></a><p>© {new Date().getFullYear()} {personal.name}</p><a href="#inicio">{tr('Volver arriba ↑')}</a></footer>
  </>;
}
