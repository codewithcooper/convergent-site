import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Brian + Bethany Cooper</p>
          <h1>Ideas. People. Purpose.</h1>
          <p className="lede">
            Convergent is the professional home for the work of Brian and
            Bethany Cooper: speaking, coaching, writing, creative consulting,
            digital products, and ventures built to help people move forward.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/studio">
              Build something with us
            </Link>
            <Link className="button secondary" href="/speaking">
              Book us to speak
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Convergent monogram artwork">
          <p className="hero-caption">
            Convergent Consulting Group LLC · Fort Myers, Florida
          </p>
          <div className="hero-monogram">B+B</div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Two voices. Shared purpose.</p>
          <p>
            Convergent brings together complementary work centered on people,
            transformation, creativity, leadership, and the courage to build
            what does not exist yet.
          </p>
        </div>
        <div className="profile-grid">
          <article className="profile-card">
            <div>
              <p className="role">
                Speaker · Author · Pastor · Creative Consultant
              </p>
              <h2>Brian Cooper</h2>
            </div>
            <div>
              <p>
                Brian works at the intersection of faith, leadership,
                communication, technology, and creative problem solving. He
                helps people clarify ideas, build digital experiences, and turn
                possibility into something tangible.
              </p>
              <Link className="text-link" href="/brian">
                Meet Brian
              </Link>
            </div>
          </article>
          <article className="profile-card dark">
            <div>
              <p className="role">Heart Work Coach · Speaker · Leader</p>
              <h2>Bethany Cooper</h2>
            </div>
            <div>
              <p>
                Bethany helps people do the deeper work that creates healthier
                relationships, stronger self-awareness, and meaningful personal
                growth through her work as a Heart Work Coach with Last Year
                Single.
              </p>
              <Link className="text-link" href="/bethany">
                Meet Bethany
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section studio">
        <div className="studio-grid">
          <div>
            <p className="eyebrow">Convergent Studio</p>
            <h2>Bring the idea. We&apos;ll help make it real.</h2>
            <p className="lede">
              For founders, ministries, organizations, and people who know
              there is something worth building but need help turning the spark
              into a clear, useful product.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/studio">
                Explore the studio
              </Link>
            </div>
          </div>
          <div className="offer-list">
            <div className="offer">
              <span>01</span>
              <div>
                <h3>App Development</h3>
                <p>
                  From first idea to working MVP and production-ready digital
                  product.
                </p>
              </div>
            </div>
            <div className="offer">
              <span>02</span>
              <div>
                <h3>Ideation & Product Strategy</h3>
                <p>
                  Clarify the problem, audience, feature set, experience, and
                  smartest first version.
                </p>
              </div>
            </div>
            <div className="offer">
              <span>03</span>
              <div>
                <h3>Websites & Digital Experiences</h3>
                <p>
                  Premium web experiences designed around what people actually
                  need to understand and do.
                </p>
              </div>
            </div>
            <div className="offer">
              <span>04</span>
              <div>
                <h3>Ministry Innovation</h3>
                <p>
                  Creative thinking for churches and ministries building
                  programs, systems, tools, or new expressions of mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <p>
          Creativity is not decoration. It is the ability to see what could be,
          then build a path to it.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Speaking</p>
          <p>
            Brian and Bethany are available individually for churches,
            conferences, leadership gatherings, retreats, workshops, podcasts,
            and events.
          </p>
        </div>
        <div className="booking-grid">
          <article className="booking-card">
            <p className="role">Book Brian</p>
            <h3>Faith, leadership, creativity & innovation.</h3>
            <ul>
              <li>Biblical teaching and preaching</li>
              <li>Leadership and organizational vision</li>
              <li>Creativity, ideation, and innovation</li>
              <li>Building apps and digital products</li>
            </ul>
            <Link className="button" href="/speaking">
              Speaking details
            </Link>
          </article>
          <article className="booking-card">
            <p className="role">Book Bethany</p>
            <h3>Heart work, relationships & personal growth.</h3>
            <ul>
              <li>Healthy relationships</li>
              <li>Self-awareness and emotional growth</li>
              <li>Heart Work principles</li>
              <li>Women&apos;s events and workshops</li>
            </ul>
            <Link className="button" href="/speaking">
              Speaking details
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Work & Ventures</p>
          <p>
            Convergent is an operating company, not a collection of disconnected
            brands. Our projects are expressions of the same instinct: understand
            people, find the real problem, and build something useful.
          </p>
        </div>
        <article className="venture-card">
          <div className="venture-mark">3|26</div>
          <div className="venture-copy">
            <p className="eyebrow">A DBA of Convergent Consulting Group LLC</p>
            <h2>Project 3|26</h2>
            <p>
              A guided Bible study platform created by Brian Cooper to help
              people understand Scripture and live differently because of it.
              Project 3|26 combines original study content, audio, thoughtful
              technology, and AI-assisted tools into a daily journey through
              the Bible.
            </p>
            <span className="text-link">Project site link coming soon</span>
          </div>
        </article>
      </section>

      <section className="cta-panel">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let&apos;s talk about what you&apos;re trying to build.</h2>
          <p>
            An app, a website, a ministry idea, a speaking event, or an idea you
            cannot quite get out of your head. That is a good place to start.
          </p>
        </div>
        <div>
          <Link className="button" href="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
