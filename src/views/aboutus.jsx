import { useEffect, useState } from 'react';

export default function AboutUs() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          [1, 2, 3].map(() =>
            fetch('https://randomuser.me/api/?gender=male').then((res) =>
              res.json()
            )
          )
        );

        setImages(
          responses.map((res) => res.results[0].picture.large)
        );
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mt-4">
      <section className="mb-5">
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>
      <section className="mb-5">
        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>
      <section>
        <h2>Our team</h2>
        <div className="team-grid mt-3">
          {[1, 2, 3].map((item, index) => (
            <div key={item} className="card shadow-sm team-card">
              <img
                src={images[index]}
                alt="Director"
                style={{
                  height: '250px',
                  width: '100%',
                  objectFit: 'cover',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              />
              <div className="card-footer bg-white text-center">
                <p className="mb-0 fw-bold">Bob Doe</p>
                <p className="small text-muted mb-0">Director</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
