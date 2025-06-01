import React from 'react';
import automat1 from "../../assets/automat1.avif";
import automat2 from "../../assets/automat2.jpg";
import automat3 from "../../assets/automat3.jpg";
import automat4 from "../../assets/automat4.jpg";
import automat5 from "../../assets/automat5.avif";
import automat6 from "../../assets/automat6.png";
import automat7 from "../../assets/automat7.png";
import './Home.css';

const Home = () => {
  return (
    <div className="home-page" id='home'>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          {/* <h1>Bine ai venit la Toddy Group</h1> */}
          <h1>Răsfățul unei dimineți reușite începe cu NESCAFÉ. <br /> Tu ai avut parte de momentul tău?</h1>
          {/* <p>Automate moderne de cafea pentru orice locație.</p> */}
        </div>
      </section>

      {/* IMAGE GRID SECTION */}
      <section className="image-grid-section">
        <h2>Modele disponibile</h2>
        <div className="image-grid">
          <div className="grid-item">
            <img src={automat1} alt="" />
          </div>
          <div className="grid-item">
            <img src={automat2} alt="" />
          </div>
          <div className="grid-item">
            <img src={automat3} alt="" />
          </div>
          <div className="grid-item">
            <img src={automat4} alt="" />
          </div>
          <div className="grid-item">
            <img src={automat5} alt="" />
          </div>
          <div className="grid-item">
            <img src={automat6} alt="" />
          </div>
          <div className="grid-item">
            <img src={automat7} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
