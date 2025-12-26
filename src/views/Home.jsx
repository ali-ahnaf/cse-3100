import { useEffect, useState } from 'react';

const featuredCatsData = [
  { name: 'Bob Doe', age: '3', breed: 'Siamese' },
  { name: 'Bob Doe', age: '4', breed: 'Persian' },
  { name: 'Bob Doe', age: '2 months', breed: 'Bengal' },
  { name: 'Bob Doe', age: '2 months', breed: 'Sphynx' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      try {
        let tempList = [];
        for (let i = 0; i < featuredCatsData.length; i++) {
          const response = await fetch('https://api.thecatapi.com/v1/images/search');
          const data = await response.json();
          
          tempList.push({
            ...featuredCatsData[i],
            image: data[0].url
          });
        }
        setCats(tempList);
        setLoading(false);
      } catch (err) {
        console.log("Error loading home data:", err);
        setLoading(false);
      }
    }
    loadFeatured();
  }, []);

  return (
    <div className="container" style={{ padding: '40px 15px' }}>
      
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: '15px' }}>
          Welcome to Purrfect Adoption
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ maxWidth: '650px', lineHeight: '1.6', color: '#333' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
          </p>
        </div>
      </section>

      <br />

      <section>
        <h2 style={{ marginBottom: '25px', fontWeight: 'normal' }}>Featured cats</h2>
        
        {loading ? (
          <p>Loading featured cats...</p>
        ) : (
          <div className="cats-grid">
            {cats.map((item, index) => (
              <div key={index} className="cat-item">
                <img
                  src={item.image}
                  alt="featured-cat"
                  style={{ 
                    height: '200px', 
                    width: '100%', 
                    objectFit: 'cover', 
                    display: 'block' 
                  }}
                />
                <div style={{ padding: '15px', border: '1px solid #ddd', borderTop: 'none' }}>
                  <h3 style={{ fontSize: '18px', margin: '0 0 5px 0' }}>{item.name}</h3>
                  <p style={{ margin: '0', fontSize: '14px' }}>Age: {item.age}</p>
                  <p style={{ margin: '0', fontSize: '14px', color: '#000000ff' }}>{item.breed}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <style>{`
        .cats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 20px;
        }
        .cat-item {
          border-radius: 8px;
          overflow: hidden;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
}