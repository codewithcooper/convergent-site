import Link from "next/link";

export const metadata = { title: "Bethany Cooper" };

export default function BethanyPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Heart Work Coach · Speaker · Leader</p>
        <h1>Bethany Cooper</h1>
        <p className="lede">
          Helping people do the inner work that creates healthier relationships,
          deeper self-awareness, and lasting growth.
        </p>
      </section>
      <section className="section">
        <div className="content-grid">
          <p className="sticky-note">About Bethany</p>
          <div className="prose">
            <p>
              Bethany Cooper is a Heart Work Coach with Last Year Single, a
              speaker, and a leader with a passion for helping people move beyond
              surface-level change.
            </p>
            <p>
              Her work focuses on the patterns, beliefs, boundaries, emotional
              habits, and choices that shape how people connect with themselves
              and with others.
            </p>
            <p>
              Bethany is available for speaking engagements, workshops,
              women&apos;s events, retreats, podcasts, and conversations centered
              on relationships and personal growth.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/speaking">
                Book Bethany to speak
              </Link>
              <Link className="button secondary" href="/contact">
                Connect with Bethany
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
