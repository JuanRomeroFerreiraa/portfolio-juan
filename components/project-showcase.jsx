import SocialIcon from './social-icon';
import { AnimatedSection } from './motion';

export default function ProjectShowcase() {
  return (
    <AnimatedSection className="section projects" id="projetos">
      <div className="section-heading">
        <div className="section-label">05 / PROJETOS & CÓDIGO</div>
        <h2>Aprendizado que vira<br /><span className="muted">projeto na prática.</span></h2>
      </div>
      <div className="project-grid">
        <article className="project-card project-with-video">
          <span className="project-status">PROJETO DE TCC · AUTORAL</span>
          <h3 id="valorant-stats-title">Valorant Stats</h3>
          <p>Projeto que criei para meu TCC, inspirado na plataforma Valorant Tracker. Uma aplicação voltada ao universo de Valorant, apresentada neste breve clipe de navegação.</p>
          <figure className="project-demo">
            <video controls playsInline preload="metadata" width="1904" height="900" aria-labelledby="valorant-stats-title" aria-describedby="valorant-stats-caption">
              <source src="/videos/valorant-stats.mp4" type="video/mp4" />
              Seu navegador não reproduz este vídeo. <a href="/videos/valorant-stats.mp4">Abrir demonstração do Valorant Stats</a>.
            </video>
            <figcaption id="valorant-stats-caption">Demonstração do projeto · 15 segundos. Use os controles para reproduzir ou ampliar.</figcaption>
          </figure>
          <div className="tags"><span>TCC</span><span>Projeto autoral</span><span>Desenvolvimento web</span></div>
        </article>
        <article className="project-card project-with-video">
          <span className="project-status">EXPERIÊNCIA PROFISSIONAL · OI</span>
          <h3 id="homepage-oi-title">Homepage da Oi</h3>
          <p>Durante minha atuação na Oi, ajudei a construir a página inicial da empresa, contribuindo tanto no front-end quanto no back-end. Este clipe apresenta parte do trabalho realizado em equipe.</p>
          <figure className="project-demo">
            <video controls playsInline preload="metadata" width="1908" height="910" aria-labelledby="homepage-oi-title" aria-describedby="homepage-oi-caption">
              <source src="/videos/homepage-oi.mp4" type="video/mp4" />
              Seu navegador não reproduz este vídeo. <a href="/videos/homepage-oi.mp4">Abrir demonstração da homepage da Oi</a>.
            </video>
            <figcaption id="homepage-oi-caption">Demonstração da página · 18 segundos. Use os controles para reproduzir ou ampliar.</figcaption>
          </figure>
          <div className="tags"><span>Front-end</span><span>Back-end</span><span>Trabalho em equipe</span></div>
        </article>
        <article className="project-card">
          <span className="project-status">REPOSITÓRIO PÚBLICO</span>
          <h3>Api-Angular</h3>
          <p>Projeto de desenvolvimento web disponível no meu GitHub, com código em HTML, TypeScript, JavaScript e SCSS. Uma parte da minha trajetória de aprendizado na prática.</p>
          <div className="tags"><span>HTML</span><span>TypeScript</span><span>JavaScript</span><span>SCSS</span></div>
          <a className="text-link" href="https://github.com/JuanRomeroFerreiraa/Api-Angular" target="_blank" rel="noopener noreferrer"><SocialIcon platform="github" />Explorar repositório <span aria-hidden="true">↗</span></a>
        </article>
        <article className="project-card">
          <span className="project-status">EM DESENVOLVIMENTO</span>
          <h3>Portfólio pessoal</h3>
          <p>Este site reúne minha trajetória, experiências e conhecimentos. Construído com Next.js, React e Framer Motion, com layout responsivo e animações que respeitam a preferência por movimento reduzido.</p>
          <div className="tags"><span>Next.js</span><span>React</span><span>Framer Motion</span><span>CSS</span></div>
        </article>
      </div>
      <div className="professional-links" aria-label="Perfis profissionais">
        <a className="text-link" href="https://github.com/JuanRomeroFerreiraa" target="_blank" rel="noopener noreferrer"><SocialIcon platform="github" />Mais código no GitHub <span aria-hidden="true">↗</span></a>
        <a className="text-link" href="https://www.linkedin.com/in/juan-romero-ferreira/" target="_blank" rel="noopener noreferrer"><SocialIcon platform="linkedin" />Minha trajetória no LinkedIn <span aria-hidden="true">↗</span></a>
      </div>
    </AnimatedSection>
  );
}
