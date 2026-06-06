import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-form-section">

      <div className="contact-form-wrapper">

        <div className="form-heading">

          <h2>
            Send us an enquiry
          </h2>

          <p>
            Share your requirements and our
            consultancy team will get in touch.
          </p>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Organization"
          />

          <textarea
            rows={6}
            placeholder="Describe your project or requirement"
          />

          <button type="submit">
            Submit Enquiry
          </button>

        </form>

      </div>

    </section>
  );
}