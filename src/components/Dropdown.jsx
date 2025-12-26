const availableBreeds = [
  "All cars", "Sphynx", "Peterbald", "Birman", "Abyssinian", "Persian", "Bengal", "Siamese"
];

const Dropdown = ({ breed, setBreed }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {breed}
      </button>
      <ul className="dropdown-menu overflow-x-hidden">
        {availableBreeds.map((b, i) =>
          <li key={i}>
            <a className={`dropdown-item ${breed === b ? "active" : ""}`} onClick={() => setBreed(b)} href="#">
              {b}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
