import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}