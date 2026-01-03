
const teamInfo = [
  { 
    name: "Faiyaz Fardin", 
    desg: "Director", 
    img: "https://media.cnn.com/api/v1/images/stellar/prod/190517064417-01-grumpy-cat-file.jpg?q=x_0,y_0,h_1688,w_2999,c_fill/w_1280" 
  },
  { 
    name: "Imti Chan", 
    desg: "Moral Support", 
    img: "https://i.pinimg.com/1200x/55/22/d7/5522d773cb9b38ae74e603fff7fff46b.jpg" 
  },
  { 
    name: "Ratul D Great", 
    desg: "Yes, Moral Support", 
    img: "https://i.pinimg.com/736x/fd/8b/75/fd8b7571f2f35705a2f0d93365db32fe.jpg" 
  },
];



export default function AboutUs() {
  return (
    <div className="about mx-auto" style={{ maxWidth: "70%" }}>
      <section className="m-4 mt-3">
        <h2 className="mb-3 fw-bold">Our Mission</h2>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolores dignissimos 
          repudiandae praesentium necessitatibus, error tempora voluptatem rem vel fuga? Dolore, 
          alias vitae. Tempore quisquam assumenda accusantium aspernatur laudantium et?
        </p>
      </section>

      <section className="m-4 mt-3">
        <h2 className="mb-3 fw-bold">Our History</h2>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero vitae nihil laboriosam 
          exercitationem itaque labore, delectus minus quibusdam, iste neque dolorem nam ut similique
           aliquid cum, aperiam quae possimus odit?
        </p>
      </section>

      <section className="m-4 mt-3">
        <h2 className="mb-2 fw-bold">Our Team</h2>
        <div className="row g-4 mt-2">
          {teamInfo.map((teamMember, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3">
              <div className="team-card card text-center shadow-sm">
                <img
                  className="card-img-top team-img"
                  // CHANGE THIS LINE:
                  src={teamMember.img} 
                  alt={teamMember.name}
                  style={{ height: "200px", objectFit: "cover" }} // Optional: keeps images uniform
                />
                <div className="card-body p-3">
                  <h5 className="card-title mb-1 fw-bold" style={{ fontSize: "1.1rem" }}>
                    {teamMember.name}
                  </h5>
                  <p className="card-text text-muted">{teamMember.desg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
