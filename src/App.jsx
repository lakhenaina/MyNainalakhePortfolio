import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Portfolio from "./pages/Portfolio.jsx";

import Contact from "./pages/Contact.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("about");

  const pages = useMemo(
    () => [
      { id: "about", Comp: About },
      { id: "resume", Comp: Resume },
      { id: "portfolio", Comp: Portfolio },
    
      { id: "contact", Comp: Contact },
    ],
    []
  );

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar
          activePage={activePage}
          onChangePage={(p) => {
            setActivePage(p);
            window.scrollTo(0, 0);
          }}
        />
        {pages.map(({ id, Comp }) => (
          <Comp key={id} active={activePage === id} />
        ))}
      </div>
    </main>
  );
}