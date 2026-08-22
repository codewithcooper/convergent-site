export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Start a conversation</p>
        <h1>What are you working on?</h1>
        <p className="lede">
          Speaking, coaching, an app, a website, a ministry idea, or something
          that does not fit neatly into a category. Tell us where you are
          starting.
        </p>
      </section>
      <section className="section">
        <form className="contact-form">
          <label>
            First name
            <input name="firstName" autoComplete="given-name" />
          </label>
          <label>
            Last name
            <input name="lastName" autoComplete="family-name" />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            I&apos;m interested in
            <select name="interest" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Booking Brian</option>
              <option>Booking Bethany</option>
              <option>App development</option>
              <option>Website development</option>
              <option>Ideation / creative consulting</option>
              <option>Ministry innovation</option>
              <option>Other</option>
            </select>
          </label>
          <label className="full">
            Tell us about it
            <textarea name="message" />
          </label>
          <div className="full">
            <button className="button" type="button">
              Inquiry form connection coming next
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
