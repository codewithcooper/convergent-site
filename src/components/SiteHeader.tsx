import Link from "next/link";

const links = [
  ["Brian", "/brian"],
  ["Bethany", "/bethany"],
  ["Studio", "/studio"],
  ["Speaking", "/speaking"],
  ["Book", "/book"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand ep-brand" href="/" aria-label="Convergent home">
        <span className="ep-brand-word">CONVERGENT</span>
        <span className="ep-brand-sub">Brian + Bethany Cooper</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/contact">
        Start a conversation
      </Link>
    </header>
  );
}
