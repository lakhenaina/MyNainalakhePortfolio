const items = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },

  { id: "contact", label: "Contact" },
];

export default function Navbar({ activePage, onChangePage }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {items.map((it) => (
          <li className="navbar-item" key={it.id}>
            <button
              className={`navbar-link ${activePage === it.id ? "active" : ""}`}
              data-nav-link
              type="button"
              onClick={() => onChangePage(it.id)}
            >
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}