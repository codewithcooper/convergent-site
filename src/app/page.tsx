import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="ep-hero">
        <div className="ep-hero-copy">
          <p className="eyebrow">Convergent Consulting Group</p>
          <h1 className="ep-display">
            <span>Ideas.</span>
            <span>People.</span>
            <span>Purpose.</span>
          </h1>
          <p className="ep-intro">
            The professional home of Brian and Bethany Cooper. Speaking,
            coaching, writing, creative consulting, and building meaningful
            digital products.
          </p>
          <div className="ep-actions">
            <Link className="button" href="/brian">
              Meet Brian
            </Link>
            <Link className="button secondary" href="/bethany">
              Meet Bethany
            </Link>
            <Link className="ep-inline-link" href="/studio">
              Explore Convergent Studio
            </Link>
          </div>
        </div>
        <div className="ep-hero-image">
          <Image
            src="/images/brian-bethany.jpg"
            alt="Brian and Bethany Cooper"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
          />
          <div className="ep-photo-note">
            <span>Brian + Bethany Cooper</span>
            <span>Fort Myers, Florida</span>
          </div>
        </div>
      </section>

      <section className="ep-manifesto">
        <p className="eyebrow">Why Convergent</p>
        <p className="ep-manifesto-copy">
          Two voices. One shared instinct: help people move forward through
          truth, creativity, growth, and work worth building.
        </p>
      </section>

      <section className="ep-people">
        <article className="ep-person-row">
          <div className="ep-person-image">
            <Image
              src="/images/brian-cooper.jpg"
              alt="Brian Cooper"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className="ep-person-copy">
            <p className="eyebrow">Brian Cooper</p>
            <h2>Speaker. Author. Pastor. Creative engine.</h2>
            <p>
              Brian works at the intersection of faith, leadership,
              communication, technology, and innovation. He helps people
              clarify ideas, teach truth clearly, and build what does not yet
              exist.
            </p>
            <Link className="text-link" href="/brian">
              Meet Brian
            </Link>
          </div>
        </article>

        <article className="ep-person-row reverse">
          <div className="ep-person-image ep-bethany-image">
            <Image
              src="/images/bethany-cooper.jpg"
              alt="Bethany Cooper"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className="ep-person-copy">
            <p className="eyebrow">Bethany Cooper</p>
            <h2>Heart Work Coach. Speaker. Leader.</h2>
            <p>
              Bethany helps people pursue deeper emotional health, stronger
              relationships, and lasting personal growth through thoughtful
              coaching and Heart Work with Last Year Single.
            </p>
            <Link className="text-link" href="/bethany">
              Meet Bethany
            </Link>
          </div>
        </article>
      </section>

      <section className="ep-studio">
        <div className="ep-studio-lead">
          <p className="eyebrow">Convergent Studio</p>
          <h2>Have an idea worth building?</h2>
          <p>
            Bring the spark. We help shape the product, define the first smart
            version, and turn the idea into something people can actually use.
          </p>
          <Link className="button ep-light-button" href="/studio">
            Start a project
          </Link>
        </div>
        <div className="ep-studio-services">
          <div className="ep-feature-service">
            <span>01</span>
            <div>
              <p className="ep-service-kicker">Flagship service</p>
              <h3>App Development</h3>
              <p>
                Idea, product strategy, UX, MVP, backend, payments, deployment,
                and launch support.
              </p>
            </div>
          </div>
          <div className="ep-service-line">
            <span>02</span>
            <p>Ideation & Product Strategy</p>
          </div>
          <div className="ep-service-line">
            <span>03</span>
            <p>Websites & Digital Experiences</p>
          </div>
          <div className="ep-service-line">
            <span>04</span>
            <p>Ministry Innovation</p>
          </div>
        </div>
      </section>

      <section className="ep-featured">
        <div className="ep-featured-label">
          <p className="eyebrow">Featured work</p>
          <div className="ep-326">3|26</div>
        </div>
        <div className="ep-featured-copy">
          <p className="ep-service-kicker">
            A DBA of Convergent Consulting Group LLC
          </p>
          <h2>Project 3|26</h2>
          <p>
            A guided Bible study platform founded by Brian Cooper. Project 3|26
            combines original teaching, audio, study resources, maps, and
            thoughtful AI-assisted tools into a daily journey through
            Scripture.
          </p>
          <p className="ep-case-note">
            Strategy · Product design · Web app · Admin systems · AI experience
          </p>
          <a
            className="text-link"
            href="https://project326.io"
            target="_blank"
            rel="noreferrer"
          >
            Visit Project 3|26
          </a>
        </div>
      </section>

      <section className="ep-speaking">
        <div className="ep-speaking-intro">
          <p className="eyebrow">Speaking</p>
          <h2>Bring Brian or Bethany into the room.</h2>
          <p>
            Available for churches, conferences, retreats, leadership
            gatherings, workshops, podcasts, and special events.
          </p>
        </div>
        <div className="ep-speaking-columns">
          <article>
            <p className="ep-service-kicker">Brian</p>
            <h3>Faith, leadership, creativity & innovation.</h3>
            <ul>
              <li>Biblical teaching and preaching</li>
              <li>Leadership and organizational vision</li>
              <li>Creativity, ideation, and innovation</li>
              <li>Apps and digital products</li>
            </ul>
            <Link className="text-link" href="/speaking">
              Book Brian
            </Link>
          </article>
          <article>
            <p className="ep-service-kicker">Bethany</p>
            <h3>Heart Work, relationships & personal growth.</h3>
            <ul>
              <li>Healthy relationships</li>
              <li>Self-awareness and emotional growth</li>
              <li>Heart Work principles</li>
              <li>Women&apos;s events and workshops</li>
            </ul>
            <Link className="text-link" href="/speaking">
              Book Bethany
            </Link>
          </article>
        </div>
      </section>

      <section className="ep-book">
        <div className="ep-book-object" aria-hidden="true">
          <span>BRIAN COOPER</span>
          <strong>Books & Writing</strong>
          <small>Ideas meant to be lived.</small>
        </div>
        <div className="ep-book-copy">
          <p className="eyebrow">Books & Writing</p>
          <h2>Thoughtful words for meaningful work.</h2>
          <p>
            Brian&apos;s writing is designed to help readers think deeply, live
            faithfully, and move forward with clarity and purpose.
          </p>
          <Link className="button" href="/book">
            Explore the book
          </Link>
        </div>
      </section>

      <section className="ep-final-cta">
        <p className="eyebrow">Start somewhere</p>
        <h2>Let&apos;s make something meaningful.</h2>
        <p>
          A speaking event, a coaching conversation, an app idea, a ministry
          concept, or a digital project. Tell us what you are trying to move
          forward.
        </p>
        <Link className="button" href="/contact">
          Start a conversation
        </Link>
      </section>
    </>
  );
}
