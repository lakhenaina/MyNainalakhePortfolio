import { useState } from "react";


export default function About({ active }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (t) => {
    setSelected(t);
    setModalOpen(true);
  };

  return (
    <article className={`about ${active ? "active" : ""}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
       I'm an aspiring frontend developer focused on building modern,
          user‑focused web applications with React. I enjoy turning ideas into
          clean, responsive interfaces and continuously improving my skills
          through real projects.
        </p>

        <h4>
     I'm actively looking for opportunities to apply my skills, learn from real-world projects, and grow as a developer. Available to join immediately!
        </h4>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Web development"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>

              <p className="service-item-text">
                Creating modern React applications with clean, reusable components.
              </p>
            </div>
          </li>

       

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Frontend Integration icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend Integration</h4>

              <p className="service-item-text">
                Connecting frontends with APIs and handling data in a user‑friendly way.
              </p>
            </div>
          </li>

             <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-app.svg"
                alt="Mobile app icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile Apps</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.


              </p>
            </div>
          </li>

       
        </ul>
      </section>



      <section className="skills">
        <h3 className="h3 clients-title">Skills</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/skills/react.png" alt="react logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/skills/javascript.png" alt="javascript logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/skills/mysql.webp" alt="mysql logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/skills/Tailwind.png" alt="tailwind logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/skills/java.png" alt="java logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/skills/node-express.png" alt="node.js logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}