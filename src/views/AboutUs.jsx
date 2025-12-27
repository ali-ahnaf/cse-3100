import './AboutUs.css';
import manager from '../assets/manager.jpg';

const team = [
    { name: 'Bob Doe', role: 'Director', photo: manager },
    { name: 'Bob Doe', role: 'Director', photo: manager },
    { name: 'Bob Doe', role: 'Director', photo: manager },
];

export default function AboutUs() {
    return (
        <div className="about-page">
            <h3 className="about-title">Our mission</h3>
            <p className="about-text">
                We help cats find safe, loving homes by making adoption simple, 
                transparent, and friendly for everyone.
                From rescue to rehoming, we focus on care, 
                trust, and responsible matching.
            </p>

            <h3 className="about-title">Our history</h3>
            <p className="about-text">
                Purrfect Adoption started as a small local effort and grew into a community-driven platform that supports
                adopters and fosters. We work with volunteers to help cats get the second chance they deserve.
            </p>

            <h3 className="about-title">Our team</h3>

            <div className="about-team-grid">
                {team.map((t,i) => (
                    <div className="about-team-card" key={i}>
                        <div className="about-team-photo">
                            <img src={t.photo} alt={t.name} />
                        </div>

                        <div className="about-team-info">
                            <div className="about-team-name">{t.name}</div>
                            <div className="about-team-role">{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}