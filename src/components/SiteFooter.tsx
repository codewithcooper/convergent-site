import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-brand">CONVERGENT</div>
        <p>Ideas. People. Purpose. Built to move forward.</p>
      </div>
      <div className="footer-links">
        <Link href="/studio">Creative consulting</Link>
        <Link href="/speaking">Speaking</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="footer-legal">
        <p>Convergent Consulting Group LLC</p>
        <p>Fort Myers, Florida</p>
        <p>Project 3|26 is a DBA of Convergent Consulting Group LLC.</p>
      </div>
    </footer>
  );
}
