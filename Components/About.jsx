import "../Styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">
        Welcome to our website! This platform is built with React, and we are
        excited to showcase our skills and learn more about web development.
      </p>
      <section className="about-details">
        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-text">
          Our mission is to create an interactive, user-friendly web platform
          where users can explore various features and learn new technologies.
        </p>
        <h2 className="about-subheading">Why React?</h2>
        <p className="about-text">
          React is a powerful JavaScript library that allows us to build
          interactive UIs efficiently. It is modular, flexible, and makes
          building dynamic applications easier.
        </p>
      </section>
    </div>
  );
}

export default About;
