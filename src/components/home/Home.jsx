import React from 'react';
import { Link } from 'react-router-dom';

import automat1 from "../../assets/automat1.avif";
import automat2 from "../../assets/automat2.jpg";
import automat3 from "../../assets/automat3.jpg";
import automat4 from "../../assets/automat4.jpg";
import automat5 from "../../assets/automat5.avif";
import automat6 from "../../assets/automat6.png";
import automat7 from "../../assets/automat7.png";

import './Home.css';

const products = [
  { id: 1, image: automat1, name: "Automat 1" },
  { id: 2, image: automat2, name: "Automat 2" },
  { id: 3, image: automat3, name: "Automat 3" },
  { id: 4, image: automat4, name: "Automat 4" },
  { id: 5, image: automat5, name: "Automat 5" },
  { id: 6, image: automat6, name: "Automat 6" },
  { id: 7, image: automat7, name: "Automat 7" },
];

const Home = () => {
  return (
    <div className="home-page" id="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Răsfățul unei dimineți reușite începe cu NESCAFÉ. <br />
            Tu ai avut parte de momentul tău?
          </h1>
        </div>
      </section>

      {/* IMAGE GRID SECTION */}
      <section className="image-grid-section">
        <h2>Modele disponibile</h2>
        <div className="image-grid">
          {products.map(product => (
            <div className="grid-item" key={product.id}>
              <p>{product.name}</p>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
