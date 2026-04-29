import { useState } from "react";

const projects = [
  { 
    title: "Finance Tracker", 
    subtitle: "React + Vite + Tailwind",
    img: "/assets/images/projects/finance-tracker.png" 
  },
  { 
    title: "Pet Order", 
    subtitle: "HTML + CSS + JS + PHP",
    img: "/assets/images/projects/petorder.png" 
  },
  { 
    title: "Cake Bliss", 
    subtitle: "HTML + CSS + JS + NODEJS",
    img: "/assets/images/projects/cakebliss.png" 
  },
  { 
    title: "Task Management App", 
    subtitle: "React + Vite + Tailwind",
    img: "/assets/images/projects/task-manager.png" 
  },
  { 
    title: " My Portfolio", 
    subtitle: "React + Vite + Tailwind",
    img: "/assets/images/projects/portfolio.png" 
  },
];

export default function Portfolio({ active }) {
  return (
    <article
      className={`portfolio ${active ? "active" : ""}`}
      data-page="portfolio"
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {projects.map((p) => (
            <li
              key={p.title}
              className="project-item active"
              data-filter-item
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={p.img} alt={p.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}