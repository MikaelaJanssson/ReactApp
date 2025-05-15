import "../Styles/Contact.css";

function Contact() {
  const FontStyle = {
    heading: {
      color: "black",
      fontSize: "20px",
    },
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">
        If you have any questions or feedback, feel free to reach out to us. We
        are happy to help you with anything you need. You can contact us via
        email, phone, or through our social media channels.
      </p>

      <div className="contact-info">
        <h2>Email</h2>
        <p>contact@ourcompany.com</p>

        <h2>Phone</h2>
        <p>073-x xx xx xx</p>

        <h2>Social Media</h2>
        <p>
          Follow us on <a href="https://facebook.com">Facebook</a>,{" "}
          <a href="https://twitter.com">Twitter</a>, and{" "}
          <a href="https://instagram.com">Instagram</a>.
        </p>
      </div>
    </div>
  );
}

export default Contact;
