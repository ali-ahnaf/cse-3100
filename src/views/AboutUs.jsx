

const team = [
    {
        name: 'Bob Doe',
        role: 'Director',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Alice Smith',
        role: 'Veterinarian',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Charlie Lee',
        role: 'Volunteer',
        image: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
];

export default function AboutUs() {
    return (
        <section className="about-section wireframe">
            <div className="about-block">
                <h3 className="about-sub">Our mission</h3>
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
                </p>
            </div>
            <div className="about-block">
                <h3 className="about-sub">Our history</h3>
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
                </p>
            </div>
            <div className="about-block">
                <h3 className="about-sub">Our team</h3>
                <div className="cats-container mt-2">
                    {team.map((member, i) => (
                        <div className="cat-card" key={i}>
                            <img src={member.image} alt={member.name} className="cat-img" />
                            <div className="cat-info">
                                <h3 className="h5 mb-1">{member.name}</h3>
                                <p className="mb-0">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
