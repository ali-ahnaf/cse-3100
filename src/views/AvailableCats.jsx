import { useEffect, useState } from 'react';

const catList = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Sphynx' },
  { name: 'Simba', age: '2', breed: 'Birman' },
  { name: 'Oreo', age: '1', breed: 'Peterbald' },
  { name: 'Bella', age: '5', breed: 'Persian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [typingName, setTypingName] = useState("");
  const [typingBreed, setTypingBreed] = useState("All");

  const [appliedName, setAppliedName] = useState("");
  const [appliedBreed, setAppliedBreed] = useState("All");

  useEffect(() => {
    async function loadAllCats() {
      try {
        let tempArray = [];
        for (let i = 0; i < catList.length; i++) {
          const response = await fetch('https://api.thecatapi.com/v1/images/search');
          const result = await response.json();
          
          tempArray.push({
            ...catList[i],
            image: result[0].url
          });
        }
        setCats(tempArray);
        setLoading(false);
      } catch (err) {
        console.log("Error loading data:", err);
        setLoading(false);
      }
    }
    loadAllCats();
  }, []);

  function handleSearch() {
    setAppliedName(typingName);
    setAppliedBreed(typingBreed);
  }

  const finalFilteredList = cats.filter((c) => {
    const matchName = c.name.toLowerCase().includes(appliedName.toLowerCase());
    const matchBreed = appliedBreed === "All" || c.breed === appliedBreed;
    return matchName && matchBreed;
  });

  return (
    <section>
      <h2 style={{ fontWeight: 'normal', marginBottom: '20px' }}>Available cats</h2>
      
      <div style={{ marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <select 
          onChange={(e) => setTypingBreed(e.target.value)}
          style={{ 
            padding: '8px', 
            borderRadius: '5px', 
            border: '1px solid #333',
            width: '130px',
            backgroundColor: '#fff'
          }}
        >
          <option value="All">select breed</option>
          <option value="Persian">Persian</option>
          <option value="Siamese">Siamese</option>
          <option value="Bengal">Bengal</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Birman">Birman</option>
          <option value="Peterbald">Peterbald</option>
        </select>

        <input 
          type="text"
          placeholder="search by name" 
          onChange={(e) => setTypingName(e.target.value)}
          style={{ 
            padding: '8px', 
            borderRadius: '5px', 
            border: '1px solid #333',
            width: '150px'
          }} 
        />

        <button 
          onClick={handleSearch}
          style={{ 
            padding: '8px 20px', 
            borderRadius: '5px', 
            backgroundColor: '#9ecaff', 
            border: '1px solid #333',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          search
        </button>
      </div>
      
      <hr style={{ border: 'none', borderTop: '2px solid #333', marginBottom: '30px' }} />

      <div className="cats-container">
        {loading ? (
          <p>Loading cats data...</p>
        ) : finalFilteredList.length > 0 ? (
          finalFilteredList.map((item, index) => (
            <div key={index} className="cat-card">
              <img 
                src={item.image} 
                alt="cat-pic" 
                style={{ height: '200px', width: '100%', objectFit: 'cover' }} 
              />
              <div className="cat-info" style={{ padding: '10px' }}>
                <p style={{ fontWeight: 'bold', margin: '0' }}>{item.name}</p>
                <p style={{ fontSize: '14px', margin: '0' }}>Age: {item.age}</p>
                <p style={{ fontSize: '14px', color: '#050505ff', margin: '0' }}>{item.breed}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found for your search.</p>
        )}
      </div>
    </section>
  );
}