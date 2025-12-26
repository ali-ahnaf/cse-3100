import { useEffect, useState } from 'react';
import people from '../assets/people.png';

const teamList = [
  { name: 'Alice Johnson', role: 'Founder & CEO', img: people },
  { name: 'Bob Smith', role: 'Head of Operations', img: people },
  { name: 'John Doe', role: 'Lead Veterinarian', img: people },
];

export default function AboutUs() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(teamList);
  }, []);

  return (
    <section className="about-us">
      <h2>Our Mission</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusantium recusandae obcaecati accusamus deleniti dignissimos nemo commodi, deserunt odit ipsum cumque placeat eligendi exercitationem ipsa dolor soluta! Vero ea, laboriosam expedita explicabo porro aliquid veniam voluptatem excepturi laborum fuga praesentium?</p>

      <h2>Our History</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusantium recusandae obcaecati accusamus deleniti dignissimos nemo commodi, deserunt odit ipsum cumque placeat eligendi exercitationem ipsa dolor soluta! Vero ea, laboriosam expedita explicabo porro aliquid veniam voluptatem excepturi laborum fuga praesentium?</p>

      <h2>Our Team</h2>

      <div className="simple-grid">
        {team.map((person, i) => (
          <div className="cat-card" key={i}>
            <img src={person.img} alt={person.name} className="img-fluid" />

            <div className="cat-info">
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
