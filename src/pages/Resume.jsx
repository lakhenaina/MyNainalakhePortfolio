export default function Resume({ active }) {
  return (
    <article className={`resume ${active ? "active" : ""}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Samriddhi College, Tribhuvan University
            </h4>

            <span>2022 — Ongoing</span>

            <p className="timeline-text">
             Bachelor in Computer Application (BCA)
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Khwopa Higher Secondary School</h4>

            <span>2020 — 2022</span>

            <p className="timeline-text">
              +2 Management
            </p>
          </li>

         
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">React Projects (Self‑Learning)</h4>

            <span>2024 – Present</span>

            <p className="timeline-text">
              Built practical React applications including a Task Management App and Personal Finance Tracker to strengthen frontend skills.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Practice</h4>

            <span>Ongoing</span>

            <p className="timeline-text">
              Focused on React, JavaScript, TailwindCSS and UI design principles through online courses and tutorials.
            </p>
          </li>

         
        </ol>

     
      </section>

      <div className="resume-download-wrapper">
        <a href="/assets/resume/NainaLakhe-Resume.pdf" download className="download-cv-btn">
          <ion-icon name="document-outline"></ion-icon>
          Download CV
        </a>
      </div>

      
    </article>
  );
}