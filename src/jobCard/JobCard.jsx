import "../jobCard/jobCard.css";

import positions from "../info";
const JobCard = () => {
  return (
    <main>
      <h1 className="header">Open positions</h1>
      <div className="position-container">
        {positions.map((element) => {
          return (
            <div key={element.id} className="card">
              <div className="top">
                <img src={element.img} alt="" />
                <p>{element.name}</p>
              </div>
              <button className="position-btn">{element.openPositions}</button>
            </div>
          );
        })}
      </div>
      <p className="footer-text">
        We are proud to be an equal opportunity employer that values diversity.
        We do not discriminate on the basis of race, religion, color, national
        origin, gender, sexual orientation, age, marital status, veteran status,
        or disability status.
      </p>
    </main>
  );
};

export default JobCard;
