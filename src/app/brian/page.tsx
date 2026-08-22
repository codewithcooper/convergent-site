import Link from "next/link";

export const metadata = { title: "Brian Cooper" };

export default function BrianPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Speaker · Author · Pastor · Creative Consultant</p>
        <h1>Brian Cooper</h1>
        <p className="lede">
          Helping people understand what matters, imagine what could be, and
          build the next faithful thing.
        </p>
      </section>
      <section className="section">
        <div className="content-grid">
          <p className="sticky-note">About Brian</p>
          <div className="prose">
            <p>
              Brian Cooper is a pastor, author, speaker, founder, and creative
              consultant whose work sits at the intersection of faith,
              leadership, communication, technology, and innovation.
            </p>
            <p>
              He is especially energized by early-stage ideas: the moment when
              someone knows there is a problem worth solving or an opportunity
              worth pursuing but has not yet figured out what the answer should
              look like.
            </p>
            <p>
              Through Convergent Studio, Brian helps ministries, leaders, and
              founders shape ideas into digital products, websites, apps,
              experiences, and practical next steps.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/speaking">
                Book Brian to speak
              </Link>
              <Link className="button secondary" href="/studio">
                Build with Brian
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
