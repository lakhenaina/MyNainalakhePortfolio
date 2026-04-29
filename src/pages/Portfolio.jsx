import { useState } from "react";

const projects = [
  { 
    title: "Finance Tracker", 
    subtitle: "React + Vite + Tailwind",
    img: "/assets/images/projects/finance-tracker.png",
    live: "https://your-finance-tracker-link.com",
    github: "https://github.com/lakhenaina/PersonalFinanceTracker/tree/main/%40latest"
  },
  { 
    title: "Pet Order", 
    subtitle: "HTML + CSS + JS + PHP",
    img: "/assets/images/projects/petorder.png",
    live: "https://your-petorder-link.com",
    github: "https://github.com/lakhenaina/Pet-Ordering-System"
  },
  { 
    title: "Cake Bliss", 
    subtitle: "HTML + CSS + JS + NODEJS",
    img: "/assets/images/projects/cakebliss.png",
    live: "https://your-cakebliss-link.com",
    github: "https://github.com/lakhenaina/CompleteProjectWithAlgo_CakeBliss"
  },
  { 
    title: "Task Management App", 
    subtitle: "React + Vite + Tailwind",
    img: "/assets/images/projects/task-manager.png",
    live: "https://your-task-manager-link.com",
    github: "https://github.com/lakhenaina/React-Task-Management-App/tree/main/task-manager"
  },
  { 
    title: " My Portfolio", 
    subtitle: "React + Vite + Tailwind",
    img: "/assets/images/projects/portfolio.png",
    live: "https://your-portfolio-link.com",
    github: "https://github.com/lakhenaina/MyNainalakhePortfolio"
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
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div
                    className="project-item-icon-box"
                    style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <ion-icon name="eye-outline"></ion-icon>
                    <ion-icon
                      name="logo-github"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(p.github, "_blank");
                      }}
                      style={{ cursor: "pointer" }}
                    ></ion-icon>
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