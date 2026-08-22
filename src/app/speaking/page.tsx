import Link from "next/link";

export const metadata = { title: "Speaking" };

export default function SpeakingPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Speaking & Events</p>
        <h1>Bring the conversation into the room.</h1>
        <p className="lede">
          Brian and Bethany are available for churches, conferences, retreats,
          workshops, leadership gatherings, podcasts, and special events.
        </p>
      </section>
      <section className="section">
        <div className="booking-grid">
          <article className="booking-card">
            <p className="role">Brian Cooper</p>
            <h3>Faith. Leadership. Creativity. Innovation.</h3>
            <ul>
              <li>Biblical preaching and teaching</li>
              <li>Leadership, culture, and vision</li>
              <li>Creativity and ideation</li>
              <li>Ministry innovation</li>
              <li>Apps, AI, and digital product development</li>
            </ul>
            <Link className="button" href="/contact">
              Inquire about Brian
            </Link>
          </article>
          <article className="booking-card">
            <p className="role">Bethany Cooper</p>
            <h3>Heart Work. Relationships. Growth.</h3>
            <ul>
              <li>Healthy relationships</li>
              <li>Self-awareness</li>
              <li>Boundaries and emotional health</li>
              <li>Personal growth</li>
              <li>Women&apos;s events and workshops</li>
            </ul>
            <Link className="button" href="/contact">
              Inquire about Bethany
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
