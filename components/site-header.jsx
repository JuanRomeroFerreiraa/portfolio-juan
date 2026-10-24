'use client';

import { useEffect, useState } from 'react';

const links = [
  ['sobre', 'Sobre'],
  ['experiencia', 'Experiência'],
  ['skills', 'Skills'],
  ['formacao', 'Formação'],
  ['projetos', 'Projetos'],
];

export default function SiteHeader() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    const sections = document.querySelectorAll('main section[id], .hero');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="header-identity" href="#" aria-label="Juan Romero, início" onClick={() => setActive('')}>
        <span className="header-monogram" aria-hidden="true">j<span>↗</span></span>
        <span className="header-wordmark">juan romero<span className="header-specialties"><i aria-hidden="true" />WEB · IA · AUTOMAÇÕES</span></span>
      </a>
      <nav className="header-nav" aria-label="Navegação principal">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : undefined} aria-current={active === id ? 'location' : undefined} onClick={() => setActive(id)}>{label}</a>
        ))}
      </nav>
      <a className="header-cta" href="#contato">Vamos conversar <span aria-hidden="true">↗</span></a>
    </header>
  );
}
