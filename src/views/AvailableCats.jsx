import useCats from "../hooks/useCats.js";
import GridView from "../components/GridView.jsx";

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
    <GridView>
      <GridView.Title>
        <div className="fs-5 fw-bold mb-2">Available Cats</div>
        <p>Meet our adorable cats looking for their forever home!</p>
      </GridView.Title>
      <GridView.Content contents={cats} />
    </GridView>
  );
}
