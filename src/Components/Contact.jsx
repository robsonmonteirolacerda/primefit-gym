function Contact() {
  return (
    <div id="contact">
      <form action="">
        <input type="text" placeholder="FUll Name" required />
        <input type="email" placeholder="Type Your E-Mail" required />
        <textarea placeholder="Write Here..." name="message"></textarea>
        <input type="submit" value="Send"></input>
      </form>
    </div>
  );
}

export default Contact;
