import { portfolioList } from "../data/DataPortfolio";
import "../styles/Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          {portfolioList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <Link to={`/portfolio/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
