import GridView from "../components/GridView.jsx";

const teammates = [
  { title: "Fuad",   sub: "CTO", image: "https://img.freepik.com/free-photo/close-up-shot-calm-confident-caucasian-male-model-striped-shirt-standing-casually-being-self-assured-while-volunteering-give-blood_176420-22381.jpg" },
  { title: "Sajid",  sub: "CMO", image: "https://img.freepik.com/premium-photo/portrait-man-against-white-background_1048944-8014307.jpg" },
  { title: "Rashed", sub: "CHRO", image: "https://img.freepik.com/free-photo/headshot-pleased-hipster-guy-dressed-maroon-t-shirt_176532-8161.jpg" },
];

export default function AboutUs() {
  return (
    <>
      <section className="mt-4">
        <div className="fs-5 fw-bold mb-2">Our mission</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
        <div className="fs-5 fw-bold mb-2">Our history</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <GridView>
        <GridView.Title>
          <div className="fs-5 fw-bold mb-2">Out team</div>
        </GridView.Title>
        <GridView.Content contents={teammates} />
      </GridView>
    </>
  );
}
