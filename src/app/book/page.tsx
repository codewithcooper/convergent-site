export const metadata = { title: "Books" };

export default function BookPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Books by Brian Cooper</p>
        <h1>Ideas worth carrying with you.</h1>
        <p className="lede">
          A dedicated home for Brian&apos;s published work. Book details and
          direct Amazon purchasing will be connected here.
        </p>
      </section>
      <section className="section">
        <div className="venture-card">
          <div className="venture-mark">BOOK</div>
          <div className="venture-copy">
            <p className="eyebrow">Published work</p>
            <h2>Brian&apos;s book</h2>
            <p>
              The final cover, title, description, endorsements, and Amazon link
              will drop into this section without changing the layout. The page
              is already structured to expand for future books.
            </p>
            <span className="text-link">Amazon link coming soon</span>
          </div>
        </div>
      </section>
    </>
  );
}
