import useCats from "../hooks/useCats.js";
import GridCats from "../components/GridCats.jsx";

const availableCats = [
  { name: "Whiskers", age: "2" },
  { name: "Mittens", age: "2" },
  { name: "Shadow", age: "1" },
  { name: "Pumpkin", age: "3" },
  { name: "Luna", age: "4" },
  { name: "Simba", age: "2" },
];

export default function AvailableCats() {
  const { cats } = useCats(availableCats);
  return (
    <GridCats>
      <GridCats.Title>
        <h2>Available Cats</h2>
        <p>Meet our adorable cats looking for their forever home!</p>
      </GridCats.Title>
      <GridCats.Content cats={cats} />
    </GridCats>
  );
}
