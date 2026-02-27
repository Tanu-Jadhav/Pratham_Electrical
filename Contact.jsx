function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form>
        <input className="form-control mb-2" placeholder="Name" />
        <input className="form-control mb-2" placeholder="Email" />
        <textarea className="form-control mb-2" placeholder="Message"></textarea>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;
