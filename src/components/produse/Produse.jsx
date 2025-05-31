import React from 'react';
import './Produse.css';

const produse = [
  {
    id: 1,
    titlu: 'Cafea 3in1',
    detalii: 'Amestec instant de cafea, zahăr și lapte praf pentru o băutură rapidă și gustoasă.',
    imagine: ''
  },
  {
    id: 2,
    titlu: 'Cafea boabe Selezione',
    detalii: 'Cafea boabe premium, ideală pentru espresso cu gust echilibrat.',
    imagine: ''
  },
  {
    id: 3,
    titlu: 'Cafea boabe Organic',
    detalii: 'Cafea certificată organic, cultivată sustenabil pentru un gust natural.',
    imagine: ''
  },
  {
    id: 4,
    titlu: 'Cafea boabe Intenso',
    detalii: 'Blend intens, puternic și aromat pentru iubitorii de espresso concentrat.',
    imagine: ''
  },
  {
    id: 5,
    titlu: 'Cafea solubilă',
    detalii: 'Soluție practică pentru un consum rapid, păstrând aroma bogată a cafelei.',
    imagine: ''
  },
  {
    id: 6,
    titlu: 'Lapte praf',
    detalii: 'Lapte praf de înaltă calitate pentru băuturi cremoase și fine.',
    imagine: ''
  },
  {
    id: 7,
    titlu: 'Nequick',
    detalii: 'Pudră de ciocolată pentru băuturi calde delicioase, adorată de copii și adulți.',
    imagine: ''
  },
  {
    id: 8,
    titlu: 'Irish Coffee',
    detalii: 'Pudră cu aromă de Irish Cream – o opțiune rafinată pentru automate.',
    imagine: ''
  },
];

const Produse = () => {
  return (
    <div className="produse-page">
      <h1>Produsele Noastre</h1>
      <div className="produse-grid">
        {produse.map((produs) => (
          <div key={produs.id} className="produs-card">
            <div className="produs-img">
              {produs.imagine ? (
                <img src={produs.imagine} alt={produs.titlu} />
              ) : (
                <div className="placeholder">Imagine produs</div>
              )}
            </div>
            <h2>{produs.titlu}</h2>
            <p>{produs.detalii}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produse;
