import useCats from "../hooks/useCats.js";
import GridCats from "../components/GridCats.jsx";

const featuredCats = [
  { name: "Whiskers", age: "2" },
  { name: "Mittens", age: "2" },
  { name: "Shadow", age: "1" },
];

export default function Home() {
  const { cats } = useCats(featuredCats);

  return (
    <>
      <section className="d-flex justify-content-center mt-4">
        <div className="text-center" style={{ maxWidth: "720px" }}>
          <h2>Welcome to Purrfect Adoption</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </div>
      </section>

      <GridCats>
        <GridCats.Title>
          <h2>Featured cats</h2>
        </GridCats.Title>
        <GridCats.Content cats={cats} />
      </GridCats>
    </>
  );
}
