import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar ${open ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <a
            href="/assets/images/owner.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/bitmoji.png"
              alt="Naina Lakhe"
              width="80"
              style={{ cursor: "pointer" }}
            />
          </a>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Naina Lakhe">
            Naina Lakhe
          </h1>

          <p className="title">Web developer</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:nainalakhebiz@gmail.com" className="contact-link">
                nainalakhebiz@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:9849647693" className="contact-link">
                9849647693
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2005-02-19">Feb 19,2005</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Taulachhen-9, Bhaktapur</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.instagram.com/_nainalakhe.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/naina-lakhe-3baa74398/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/lakhenaina"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}