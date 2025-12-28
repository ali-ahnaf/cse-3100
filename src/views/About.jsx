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
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop"
            alt="Liam Johnson"
            className="team-photo"
          />
          <h4>Liam Johnson</h4>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop"
            alt="Mike Wheeler"
            className="team-photo"
          />
          <h4>Mike Wheeler</h4>
          <p>Chief Operations Officer</p>
        </div>
        <div className="team-member">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop"
            alt="Will Hopper"
            className="team-photo"
          />
          <h4>Will Hopper</h4>
          <p>Head of Marketing</p>
        </div>
      </div>
    </section>
  );
}
