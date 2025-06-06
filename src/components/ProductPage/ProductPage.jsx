import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import automat1 from '../../assets/automat1.avif';
import automat2 from '../../assets/automat2.jpg';
import automat3 from '../../assets/automat3.jpg';
import automat4 from '../../assets/automat4.jpg';
import automat5 from '../../assets/automat5.avif';
import automat6 from '../../assets/automat6.png';
import automat7 from '../../assets/automat7.png';
import './ProductPage.css';

const products = [
  { id: 1, title: 'Automat Cafea Deluxe', image: automat1, descriere: 'Acest automat oferă cafea de specialitate pentru orice gust.' },
  { id: 2, title: 'Automat Espresso Touch', image: automat2, descriere: 'Perfect pentru espresso rapid și aromat.' },
  { id: 3, title: 'Automat Business Line', image: automat3, descriere: 'Ideal pentru birouri și spații comerciale aglomerate.' },
  { id: 4, title: 'Automat Compact', image: automat4, descriere: 'Design compact pentru spații restrânse.' },
  { id: 5, title: 'Automat Profesional', image: automat5, descriere: 'Oferă o gamă variată de băuturi calde.' },
  { id: 6, title: 'Automat Elegant Plus', image: automat6, descriere: 'Combinația perfectă între stil și funcționalitate.' },
  { id: 7, title: 'Automat Viteză Max', image: automat7, descriere: 'Servește cafeaua extrem de rapid.' },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const additionalImages = [product.image, product.image, product.image, product.image, product.image];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? additionalImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === additionalImages.length - 1 ? 0 : prev + 1));

  if (!product) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Produsul nu a fost găsit.</div>;
  }

  return (
    <div className="product-page" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>{product.title}</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '500px' }}
        />
        <div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{product.descriere}</p>
        </div>
      </div>

      <h3 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Galerie produs</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
        {additionalImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Mini ${index}`}
            onClick={() => openLightbox(index)}
            style={{
              width: '100%',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div className="lightbox-overlay">
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-prev" onClick={prevImage}>‹</button>
          <img src={additionalImages[currentIndex]} alt={`Preview ${currentIndex}`} className="lightbox-image" />
          <button className="lightbox-next" onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
