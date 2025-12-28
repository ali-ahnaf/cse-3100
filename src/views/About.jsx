import { useEffect, useState } from "react";

const teamMembers = ["AKIF", "Farhan", "nahraf"];

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          teamMembers.map(() =>
            fetch("https://api.thecatapi.com/v1/images/search").then(res =>
              res.json()
            )
          )
        );

        const teamWithImages = teamMembers.map((name, index) => ({
          name,
          image: responses[index][0].url,
        }));

        setTeam(teamWithImages);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Our mission</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h2 className="mt-5 mb-4">Our history</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h2 className="mt-5 mb-4">Our team</h2>

      <div className="row">
        {team.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center h-100">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top"
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">Director</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
