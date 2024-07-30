import React from "react";
import { PortfolioData } from "../portoData";


const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2">Portfolio</h3>
          <h4 className="subtitle is-5">My latest works</h4>
        </div>
        <br />
        <div className="container portfolio-container">
          <div className="columns is-multiline">
            {PortfolioData.map((item, index) => (
              <div key={index} className="column is-4">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      <span>{item.title}</span>
                      <span className="is-pulled-right">
                        <a href="#">
                          <span className="tag is-default">{item.version}</span>
                        </a>
                        {item.platform.map((plat, i) => (
                          <span key={i} className="tag is-default">
                            {plat}
                          </span>
                        ))}
                        {item.status && (
                          <span className="tag is-danger">{item.status}</span>
                        )}
                      </span>
                    </p>
                  </header>
                  <div className="card-content">
                    <figure className="image">
                      <img src={item.image} alt={`${item.title} template screenshot`} />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
