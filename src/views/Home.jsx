import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
];

export default function Home() {

  const [cats, setCats] = useState([]);



  useEffect(() => {

    const fetchCatImages = async () => {

      try {

        const responses = await Promise.all(

          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );



        const catsWithImages = featuredCats.map((cat, index) => ({

          ...cat,

          image: responses[index][0].url,

        }));



        setCats(catsWithImages);

      } catch (error) {

        console.error('Error fetching cat images:', error);

      }

    };



    fetchCatImages();

  }, []);



    return (



      <>



        <section className="mt-5">



                    <div className="container">



                      <div className="row justify-content-center">



                        <div className="col-md-10">



                          <div className="animated-box">



                                                        <h1



                                                          className="text-center mb-1 display-3"



                                                          style={{ fontFamily: "'Bangers', cursive" }}



                                                        >



                                                          Welcome to Purrfect Adoption



                                                        </h1>



                                                        <p className="text-center mt-0" style={{ fontFamily: "'Caveat', cursive", fontWeight: "700", fontSize: '1.5em' }}>



                                                          Find your perfect feline companion today!



                                                        </p>



                                                        <p className="text-center mt-3">



                                                          <a href="/available-cats" style={{ textDecoration: 'underline', color: 'white' }}>



                                                            View Available Cats



                                                          </a>



                                                        </p>



                          </div>



                        </div>



                      </div>



          </div>



        </section>



        



  



        <section className="mt-5">



          <h2 className="text-center">Our Featured Cats</h2>

                <div className="container mt-4" style={{ maxWidth: '800px', margin: 'auto' }}>

                  <div className="row g-4">

                    {cats.map((cat, i) => (

                                            <div key={i} className="col-4">

                                              <div className="card cat-card-unique">

                                                <img

                                                  src={cat.image}

                                                  className="card-img-top"

                                                  alt={cat.name}

                                                />

                                                <div className="card-body">

                                                  <h5 className="card-title">{cat.name}</h5>

                                                  <p className="card-text">Age: {cat.age}</p>

                                                </div>

                                              </div>

                                            </div>

                    ))}

                  </div>

        </div>

      </section>

    </>

  );

}