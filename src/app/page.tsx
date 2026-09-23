import Image from "next/image";

const experience = [
  {
    label: "2026",
    title: "AI Engineer Intern",
    organisation: "StaffAny · Singapore",
    body: "Forward-deployed with F&B teams to turn labour-cost, overtime, payroll, and timesheet problems into practical AI and data workflows.",
    details: ["Built AI-assisted document pipelines", "Designed TypeScript Workspace APIs", "Enabled 30+ operators"],
  },
  {
    label: "2024–25",
    title: "Captain",
    organisation: "NUS Dragon Boat",
    body: "Set training standards and developed a competitive university crew, earning 15 podium finishes and 2 championship titles across major races.",
    details: ["Team Manager · Club Crew World Championships 2026", "40-athlete NUS contingent", "4th · 200m / 500m / 2,000m"],
  },
  {
    label: "2023",
    title: "Lieutenant, Platoon Commander",
    organisation: "Singapore Army",
    body: "Led training and events for about 250 personnel, while supporting a school-level cohesion event for 1,200 participants.",
    details: ["Military leadership", "Training & development", "Bilateral exercise"],
  },
];

const projects = [
  {
    tag: "Applied AI",
    title: "AI workflow systems",
    text: "Production-minded document processing, structured extraction, validation, and human review workflows for operational data.",
  },
  {
    tag: "Product engineering",
    title: "Dragon Boat Performance Analytics",
    text: "A full-stack training and crew-management application with multimodal input extraction and DB12/DB22 validation.",
  },
  {
    tag: "Operations",
    title: "Labour-cost intelligence",
    text: "Reusable analysis workflows and a projected-labour-cost calculator built for real F&B decision-making.",
  },
];

const skills = [
  "TypeScript",
  "Python",
  "React",
  "REST APIs",
  "AI / LLM applications",
  "OCR pipelines",
  "Structured validation",
  "SQL",
  "Quantitative finance",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Home">MZ</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Computer Engineering · NUS · Singapore</p>
          <h1>Man Zhong<br /><em>Wong</em></h1>
          <p className="intro">
            I build practical AI systems for operational problems—and lead teams through ambiguity with clarity, care, and momentum.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:wongmanzhong@gmail.com">Get in touch <span>↗</span></a>
            <a className="button button-quiet" href="/resume/Man_Zhong_Wong_Complete_Resume_2026.pdf" download>Download full résumé <span>↓</span></a>
            <a className="button button-quiet" href="#work">Explore my work <span>↓</span></a>
          </div>
        </div>
        <div className="hero-aside hero-photo" aria-label="Portrait of Man Zhong Wong">
          <Image
            src="/images/man-zhong-wong.jpg"
            alt="Man Zhong Wong at sunset"
            fill
            priority
            sizes="(max-width: 760px) calc(100vw - 32px), 360px"
          />
          <div className="photo-overlay" />
          <div className="photo-caption">
            <span>MAN ZHONG WONG</span>
            <span>SINGAPORE · 2026</span>
          </div>
        </div>
      </section>

      <section className="statement shell">
        <p className="section-label">01 / Perspective</p>
        <p className="statement-text">Technical depth is most useful when it <span>moves real work forward.</span></p>
        <p className="statement-note">My work sits at the intersection of applied AI, operational systems, and the teams who rely on them.</p>
      </section>

      <section className="work-section" id="work">
        <div className="shell">
          <div className="section-heading">
            <p className="section-label">02 / Experience</p>
            <h2>Building things that<br />people can use.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <p className="timeline-year">{item.label}</p>
                <div>
                  <p className="timeline-org">{item.organisation}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-body">{item.body}</p>
                  <ul className="detail-list">
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects shell">
        <div className="section-heading compact">
          <p className="section-label">03 / Selected work</p>
          <h2>From problem<br />to system.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.title}>
              <p className="project-number">0{index + 1}</p>
              <p className="project-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="leadership-section" id="leadership">
        <div className="shell leadership-grid">
          <div>
            <p className="section-label light">04 / Beyond engineering</p>
            <h2>Leadership is a<br /><em>practice.</em></h2>
          </div>
          <div className="leadership-copy">
            <p>
              As NUS Dragon Boat Captain and Team Manager for the IDBF Club Crew World Championships, I have learned to set standards, align people, and carry responsibility when the stakes are real.
            </p>
            <div className="achievement-row">
              <div><strong>15</strong><span>podium finishes</span></div>
              <div><strong>2</strong><span>championship titles</span></div>
              <div><strong>40</strong><span>Club Crew Worlds contingent</span></div>
            </div>
            <p className="small-copy">Also active in NUS Rowing and Canoe Sprint. NUS Rowing placed 3rd overall at the 2025 Ulsan World Class University Rowing Festival.</p>
          </div>
        </div>
      </section>

      <section className="skills shell">
        <p className="section-label">05 / Toolkit</p>
        <div className="skills-grid">
          <h2>Systems,<br />data &amp; people.</h2>
          <div className="skill-tags">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-grid">
          <div>
            <p className="section-label light">06 / Contact</p>
            <h2>Let&apos;s make<br /><em>useful things.</em></h2>
          </div>
          <div className="footer-links">
            <a href="mailto:wongmanzhong@gmail.com">wongmanzhong@gmail.com <span>↗</span></a>
            <a href="https://www.linkedin.com/in/wongmanzhong" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="https://github.com/ManZ9802" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <p>Singapore · Available for graduate roles from May 2027</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
