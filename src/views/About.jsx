// src/views/About.jsx
export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Sanida Amin Erin',
      title: 'Executive Director',
      image:' https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/587301089_1409038117495719_7324357321295543524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kcJQG27rqcoQ7kNvwGBNTDB&_nc_oc=AdmhEXYzv8ftOVHN0PIiEkq43sDwy5bZ8ujTCUqrzUSVbFuW4F-8sezbucJjLGhsl6k&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=OEvkJnuhp5yu1DMOCYuMUQ&oh=00_AflFN9lo-JOXZQCOinMIzw4dB6gTddG5V0PKuMpJLdE_rQ&oe=6954859D'
    },
    {
      name: 'Md. Adnan',
      title: 'Operations Director',
      image: 'https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/494805859_1226125179097800_6315146192530020805_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=l3NSM0J9_GkQ7kNvwG24Eog&_nc_oc=AdngW3uUiwCYxo94Xmt7Yn6W0cih4gbONqRY2-DGiqrvNXNynJFwq3GITQ4oZ3ZjnGo&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=BZdsoS7DJjipqZ1rypmrlw&oh=00_Afml-FJtNpr8oD3GGf6mJyFAoM_oURs0PLeisHxD7aRL6w&oe=6954B131'
    },
    {
      name: 'Reduan Rahman',
      title: 'Community Outreach Director',
      image: 'https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/585286489_810090661806136_1065699471590671630_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zwVcOA9Whi8Q7kNvwHUdNgl&_nc_oc=AdmwaAYnu0SdkMDxvXVOYRaBkSm3rl8lHk7AbybGZzr1cWzlLQ1fZucpzr5UZ2Z1Vf0&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=v6MraghF5Y042dTqceR4Fg&oh=00_Afk_Xr1G8Fc1di2qwftnnikuhj1eSndQitR7jGiFo3E7UA&oe=6954A0FB'
    },
  ];

  return (
    <section className="about-page">
      <div className="container">
        <h1 className="page-title">About Us</h1>

        <div className="about-content">
          {/* Our mission */}
          <div className="about-section">
            <h2>Our mission</h2>
            <p>
              Our mission is to rescue and rehome cats in need, providing loving forever homes through compassionate adoption processes.<br /><br />
              We connect hearts with paws by matching personalities, offering health checks, vaccinations, and post-adoption support for seamless transitions.<br /><br />
              Join us in transforming stray lives—adopt, foster, or donate today to make a difference for felines in our community.
            </p>
          </div>

          {/* Our history */}
          <div className="about-section">
            <h2>Our history</h2>
            <p>
              Founded in 2015, Purrfect Adoption began as a small volunteer group dedicated to helping stray cats in our local area. 
              Over the years, we've grown into a trusted organization, partnering with shelters and veterinarians to save thousands of feline lives. 
              Our journey is driven by passion and community support.
            </p>
          </div>

          {/* Our team - With updated images */}
          <div className="about-section">
            <h2>Our team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <img src={member.image} alt={member.name} className="team-photo" />
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}