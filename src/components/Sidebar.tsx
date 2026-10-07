import "./Sidebar.css";
import {
  LayoutDashboard,
  Phone,
  CalendarDays,
  MessageSquare,
  Settings,
  Bot,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Bot size={22} />
        <span>Bonnie</span>
      </div>

      <nav className="nav">
        <a className="nav-item active">
          <LayoutDashboard size={18} />
          <span>Overview</span>
        </a>

        <a className="nav-item">
          <Phone size={18} />
          <span>Calls</span>
        </a>

        <a className="nav-item">
          <CalendarDays size={18} />
          <span>Reservations</span>
        </a>

        <a className="nav-item">
          <MessageSquare size={18} />
          <span>Messages</span>
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a className="nav-item">
          <Settings size={18} />
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
}