import Link from "next/link";

export const metadata = { title: "Convergent Studio" };

const services = [
  [
    "01",
    "Idea Sprint",
    "Turn a half-formed idea into a clear problem statement, audience, product concept, feature map, and practical MVP plan.",
  ],
  [
    "02",
    "App & MVP Build",
    "Design and build a working digital product with the core experience, backend, authentication, payments, and deployment needed for the first real users.",
  ],
  [
    "03",
    "Web Experience",
    "Create a premium website that communicates clearly, looks credible, and moves people toward the right next action.",
  ],
  [
    "04",
    "Ministry Innovation",
    "Develop new ministry concepts, systems, digital tools, experiences, and strategies with someone who understands ministry from the inside.",
  ],
  [
    "05",
    "Creative Problem Solving",
    "Bring a stubborn problem, opportunity, or messy idea. We will explore possibilities, pressure-test assumptions, and develop a useful path forward.",
  ],
  [
    "06",
    "Product Direction",
    "For teams already building something, get a fresh outside perspective on positioning, user experience, priorities, and what should happen next.",
  ],
];

export default function StudioPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Convergent Studio</p>
        <h1>Build what should exist.</h1>
        <p className="lede">
          Creative product development for people with ideas. Strategy,
          ideation, websites, apps, digital products, and ministry innovation.
        </p>
      </section>
      <section className="section studio">
        <div className="content-grid">
          <p className="sticky-note">How we help</p>
          <div>
            <h2>You do not need a technical specification to start.</h2>
            <div className="prose" style={{ marginTop: 30 }}>
              <p>
                You may have a sketch, a problem, a sentence, or simply a
                persistent feeling that there has to be a better way. That is
                enough to begin.
              </p>
              <p>
                Convergent Studio helps translate the raw idea into something
                clear enough to evaluate, test, and build.
              </p>
            </div>
          </div>
        </div>
        <div className="service-cards">
          {services.map(([n, t, d]) => (
            <article className="service-card" key={n}>
              <span className="num">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-panel">
        <div>
          <p className="eyebrow">Especially interested in apps?</p>
          <h2>So are we.</h2>
          <p>
            If you have an app idea, we can begin with the idea itself and work
            toward a real MVP rather than asking you to arrive with all the
            technical answers.
          </p>
        </div>
        <Link className="button" href="/contact">
          Tell us the idea
        </Link>
      </section>
    </>
  );
}
