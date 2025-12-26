import useCats from "../hooks/useCats.js";
import GridView from "../components/GridView.jsx";

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
        <div className="text-center">
          <div className="fs-3 fw-bold mb-2">Welcome to Purrfect Adoption</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </div>
      </section>

      <GridView>
        <GridView.Title>
          <div className="fs-5 fw-bold mb-2">Featured cats</div>
        </GridView.Title>
        <GridView.Content contents={cats} />
      </GridView>
    </>
  );
}
