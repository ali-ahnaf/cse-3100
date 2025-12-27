export default function About() {
  return (
    <section className="mt-4">
      <h2>About us</h2>

      <h3>Our mission</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h3>Our history</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

    <h3>Our team</h3>
      <div className="team-container">
        <div className="team-member">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Alice Johnson"
            className="team-photo"
          />
          <h4>Alice Johnson</h4>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Michael Smith"
            className="team-photo"
          />
          <h4>Michael Smith</h4>
          <p>Chief Operations Officer</p>
        </div>
        <div className="team-member">
          <img
            src="https://randomuser.me/api/portraits/women/55.jpg"
            alt="Sarah Williams"
            className="team-photo"
          />
          <h4>Sarah Williams</h4>
          <p>Head of Marketing</p>
        </div>
      </div>
    </section>
  );
}
