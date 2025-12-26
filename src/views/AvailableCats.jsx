import useCats from "../hooks/useCats.js";
import GridView from "../components/GridView.jsx";

const availableCats = [
  { title: "Whiskers", sub: "Age: 2" },
  { title: "Mittens", sub: "Age: 2" },
  { title: "Shadow", sub: "Age: 1" },
  { title: "Pumpkin", sub: "Age: 3" },
  { title: "Luna", sub: "Age: 4" },
  { title: "Simba", sub: "Age: 2" },
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
