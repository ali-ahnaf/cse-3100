import React from 'react';
import '../views/aboutus.css';
import humanImage from '../assets/human.jpg';
export default function AboutUs() {
    const teamMembers = [
        { name: 'Maliha Rahman', title: 'Founder and Executive Director' },
        { name: 'Mahira Tahsin', title: 'Chief Veterinarian' },
        { name: 'Labibur Rahman', title: 'Adoption Coordinator' },
        { name: 'Nourin Islam', title: 'Volunteer Manager' },
    ];

    return (
        <section className="mt-4">
            <h2 className="text-center">About Us</h2>
            <div className="container">
                <div className="mb-4">
                    <h3>Our Mission</h3>
                    <p>
                        At Purrfect Adoption, our mission is to connect adorable felines with caring families, creating lasting bonds and happy homes. We believe every cat deserves a loving home, and we work tirelessly to make that a reality.
                    </p>
                </div>

                <div className="mb-4">
                    <h3>Our History</h3>
                    <p>
                        Purrfect Adoption has grown from a small, local initiative to a thriving adoption center. In our short history, we've successfully placed over 1,000 cats in loving homes, making a significant impact in our community.
                    </p>
                    <p>
                        Our journey began with a group of passionate cat lovers who saw the need for a dedicated adoption service. Since then, we've expanded our facilities, increased our volunteer base, and developed comprehensive adoption processes to ensure the best outcomes for both cats and their new families.
                    </p>
                </div>

                <div className="mb-4">
    <h3>Our Team</h3>
    <div className="team-grid">
        {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
                <div className="team-card-image">
                <img src={humanImage} alt={member.name} />

                </div>
                <div className="team-card-content">
                    <h4>{member.name}</h4>
                    <p>{member.title}</p>
                </div>
            </div>
        ))}
    </div>
</div>



            </div>
        </section>
    );
}
