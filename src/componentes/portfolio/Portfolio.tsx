import React from "react";
import PortfolioItem from "./portfolioItem/PortfolioItem";
import "./Portfolio.css";

function Portfolio() {
    function PortfolioDOM() {
        return(
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </div>
            </section>
        );
    }
    return(
        <>
            { PortfolioDOM() }
        </>
    );
}

export default Portfolio;