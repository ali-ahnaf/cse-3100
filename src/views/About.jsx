// About Us page component - displays organization information
export default function About() {
  // Team member data - can be expanded with more members
  const teamMembers = [
    { 
      name: 'Md Sazid', 
      role: 'Founder ',
      image: 'https://tse3.mm.bing.net/th/id/OIP.Z_Xiik9jjwezToJ_PK7imwHaIL?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    { 
      name: 'Abrar Ahmed', 
      role: 'Director',
      image: 'https://tse3.mm.bing.net/th/id/OIP.Z_Xiik9jjwezToJ_PK7imwHaIL?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    { 
      name: 'Irfan Sadi', 
      role: 'Assistant Director',
      image: 'https://tse3.mm.bing.net/th/id/OIP.Z_Xiik9jjwezToJ_PK7imwHaIL?rs=1&pid=ImgDetMain&o=7&rm=3'
    }
  ];

  return (
    <div className="about-page-modern">
      {/* Page Header - main title and subtitle */}
      <div className="about-header">
        <h1>About Purrfect Adoption</h1>
        <p className="about-subtitle">Finding forever homes for cats, one paw at a time</p>
      </div>

      {/* Mission Section - organization's primary goal */}
      <div className="about-section">
        <h2>Our mission</h2>
        <p>
          Our mission is to provide every cat with a second chance at life by connecting them with 
          caring families who will give them the love and care they deserve. We believe that every 
          cat deserves a forever home where they can thrive and bring joy to their human companions.
        </p>
      </div>

      {/* History Section - organization's background story */}
      <div className="about-section">
        <h2>Our history</h2>
        <p>
          Founded in 2015, Purrfect Adoption has been dedicated to rescuing and rehoming cats 
          in need throughout Bangladesh. What started as a small volunteer effort has grown into 
          a comprehensive adoption center, serving hundreds of cats and families each year with 
          compassion and expertise.
        </p>
      </div>

      {/* Team Section - displays team member cards */}
      <div className="about-section team-section">
        <h2>Our team</h2>
        <div className="team-grid">
          {/* Loop through team members and create a card for each */}
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              {/* Team member image - displays profile photo */}
              <img src={member.image} alt={member.name} className="team-image" />
              {/* Team member info - name and role */}
              <div className="team-footer">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cat Breeds Section - list of breeds available */}
      <div className="about-section">
        <h2>Cat Breeds We Work With</h2>
        <p>Our diverse collection includes popular breeds such as:</p>
        <ul>
          <li><strong>Siamese</strong> - Intelligent, vocal, and social companions</li>
          <li><strong>Persian</strong> - Gentle, calm, with luxurious long coats</li>
          <li><strong>Bengal</strong> - Active, playful, with striking wild appearance</li>
          <li><strong>Sphynx</strong> - Hairless, energetic, and affectionate</li>
          <li><strong>Birman</strong> - Docile, friendly, with beautiful blue eyes</li>
          <li><strong>Abyssinian</strong> - Curious, athletic, and highly interactive</li>
          <li><strong>Peterbald</strong> - Elegant, intelligent, and people-oriented</li>
        </ul>
      </div>

      {/* Services Section - what the organization does */}
      <div className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>Rescue cats from shelters and difficult situations</li>
          <li>Provide veterinary care and breed-specific health assessments</li>
          <li>Match cats with suitable adoptive families based on breed characteristics</li>
          <li>Offer post-adoption support and breed-specific care guidance</li>
          <li>Educate the community about responsible pet ownership and breed traits</li>
        </ul>
      </div>

      {/* Why Choose Us Section - organization's unique value */}
      <div className="about-section">
        <h2>Why Choose Us</h2>
        <p>
          With years of experience in cat rescue and adoption, our team of dedicated volunteers 
          works tirelessly to ensure each cat receives the individual attention they need. We 
          understand the unique characteristics of different breeds and carefully screen all potential 
          adopters to ensure the best possible match between cat breed temperament and family lifestyle.
        </p>
      </div>
    </div>
  );
}
