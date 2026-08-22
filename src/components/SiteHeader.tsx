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
      <Link className="brand" href="/" aria-label="Convergent home">
        <span className="brand-mark">C</span>
        <span className="brand-copy">
          <strong>CONVERGENT</strong>
          <small>Consulting Group</small>
        </span>
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
