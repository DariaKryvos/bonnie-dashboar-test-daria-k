import "./Sidebar.css";
import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard,
  Phone,
  CalendarDays,
  MessageSquare,
  Settings,
  Bot,
  Menu,
  X,
} from "lucide-react";

const navigationItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Calls", icon: Phone },
  { label: "Reservations", icon: CalendarDays },
  { label: "Messages", icon: MessageSquare },
];

function Logo() {
  return (
    <div className="logo">
      <Bot size={22} aria-hidden="true" />
      <span>Bonnie</span>
    </div>
  );
}

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const MenuIcon = menuOpen ? X : Menu;

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 769px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="mobile-navigation">
        <Logo />
        <button
          ref={menuButton}
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="dashboard-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon size={22} aria-hidden="true" />
        </button>
      </header>
      <aside
        id="dashboard-navigation"
        className={`sidebar${menuOpen ? " sidebar-open" : ""}`}
      >
        <Logo />
        <nav className="nav" aria-label="Main navigation">
          {navigationItems.map(({ label, icon: Icon, active }) => (
            <a key={label} className={`nav-item${active ? " active" : ""}`}>
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <a className="nav-item">
            <Settings size={18} aria-hidden="true" />
            <span>Settings</span>
          </a>
        </div>
      </aside>
    </>
  );
}