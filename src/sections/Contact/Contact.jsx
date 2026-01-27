function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <h2>GET IN TOUCH</h2>

        <p className="contact__subtitle">
          Have questions or want to start training with us? Send us a message
          and our team will get back to you.
        </p>

        <form className="contact__form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit" className="btn-primary">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
