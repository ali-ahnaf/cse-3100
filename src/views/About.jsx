// src/views/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="about-wrapper">
      {/* GLOW BACKGROUND */}
      <div className="about-glow" />

      {/* HEADER */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>About Purrfect Adoption</h1>
        <p>
          We are passionate about connecting cats with loving families and
          creating lifelong bonds built on care and compassion.
        </p>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="about-grid">
        {/* HISTORY CARD */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Our History</h3>
          <p>
            Founded by passionate animal lovers, Purrfect Adoption has helped
            hundreds of cats find safe, loving homes since its beginning.
          </p>
        </motion.div>

        {/* MISSION CARD */}
        <motion.div
          className="about-card accent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Our Mission</h3>
          <p>
            To rescue, care for, and rehome cats ethically — ensuring every cat
            gets the forever home it deserves.
          </p>
        </motion.div>
      </div>

      {/* TEAM SECTION */}
      <section className="team-section">
        <motion.h2
          className="team-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        <div className="team-grid">
          {['Bob Doe', 'Jane Smith', 'Alex Johnson'].map((name, i) => (
            <motion.div
              key={i}
              className="team-card-pro"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                rotateX: -4,
                rotateY: 4,
              }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              viewport={{ once: true }}
            >
              <div className="team-image-glow">
                <div className="team-image-placeholder" />
              </div>

              <div className="team-info">
                <h3>{name}</h3>
                <p>Director</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
