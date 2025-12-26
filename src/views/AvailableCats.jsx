import useCats from "../hooks/useCats.js";
import GridView from "../components/GridView.jsx";
import Dropdown from "../components/Dropdown.jsx";
import { useEffect, useState } from "react";

const availableCats = [
  { title: "Whiskers", sub: "Age: 2 | Breed: Abyssinian", breed: "Abyssinian" },
  { title: "Mittens",  sub: "Age: 2 | Breed: Siamese",    breed: "Siamese" },
  { title: "Shadow",   sub: "Age: 1 | Breed:Persian ",    breed: "Persian" },
  { title: "Pumpkin",  sub: "Age: 3 | Breed: Bengal",     breed: "Bengal" },
  { title: "Luna",     sub: "Age: 4 | Breed: Persian",    breed: "Persian" },
  { title: "Simba",    sub: "Age: 2 | Breed: Sphynx",     breed: "Sphynx" },
];

export default function AvailableCats() {
  const { cats } = useCats(availableCats);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breed, setBreed] = useState("All cars");

  useEffect(() => {
    setFilteredCats(cats);
  }, [cats]);

  useEffect(() => {
    if (breed === "All cars") {
      setFilteredCats(cats);
    } else {
      setFilteredCats(cats.filter(c => c.breed === breed));
    }
  }, [breed]);

  return (
    <GridView>
      <GridView.Title>
        <div className="d-flex justify-content-between">
          <div className="fs-5 fw-bold mb-2">Available Cats</div>
          <div>
            <Dropdown breed={breed} setBreed={setBreed} />
          </div>
        </div>
        <p>Meet our adorable cats looking for their forever home!</p>
      </GridView.Title>
      <GridView.Content contents={filteredCats} />
    </GridView>
  );
}
