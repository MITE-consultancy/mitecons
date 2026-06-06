import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <section className="contact-info">

      <div className="info-card">

        <h3>Email</h3>

        <p>
          mitecons@mite.ac.in
        </p>

      </div>

      <div className="info-card">

        <h3>Phone</h3>

        <p>
          +91 XXXXX XXXXX
        </p>

      </div>

      <div className="info-card">

        <h3>Location</h3>

        <p>
          Mangalore Institute of Technology &
          Engineering, Moodabidri, Karnataka
        </p>

      </div>

    </section>
  );
}