// ... importuri
import React, { useEffect, useState, useRef } from "react";
import "./About.css";

const useCountUp = (target, speed = 50, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [target, speed, start]);

  return count;
};

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const years = useCountUp(15, 35, startCount);
  const clients = useCountUp(10000, 15, startCount) + "+";
  const activeYear = useCountUp(2025, 10, startCount);

  const testimonials = [
    "Cea mai bună cafea de la automat! – Andrei P.",
    "Seriozitate și calitate înaltă. – Maria L.",
    "Automatele sunt moderne și rapide. – Bogdan T.",
    "Cafeaua Tody e preferata colegilor mei! – Alina M.",
    "Serviciu prompt și de încredere. – Radu I.",
    "Design excelent al automatelor! – Claudia G.",
    "Personal amabil și suport rapid. – Marius S.",
    "Automatele funcționează impecabil. – Irina T.",
    "Cafeaua e mereu proaspătă și aromată. – Alex C.",
    "Configurare ușoară și rapidă. – Ionuț D.",
    "Gust excelent, preț corect. – Georgiana F.",
    "Recomand 100%! – Robert N.",
    "Colaborare eficientă și prietenoasă. – Anca H.",
    "Automate versatile pentru orice spațiu. – Sorin L.",
    "Automatele Tody ne-au schimbat complet rutina zilnică. – Elena M.",
    "Cafeaua este întotdeauna proaspătă și gustoasă. – Mihai D.",
    "Eficiență și calitate într-un singur pachet. – Cristina V.",
    "Colaborarea a fost simplă și profesională. – Alexandru S.",
    "Produsele sunt durabile și ușor de întreținut. – Ioana T.",
    "Varietate mare de opțiuni și calitate superioară. – Vlad P.",
  ].map((text) => ({
    text,
    rating: Math.floor(Math.random() * 2) + 4, // între 4 și 5 stele
  }));

  return (
    <div className="about-page" id="about">
      <section className="about-intro">
        <h1>Despre Tody Group</h1>
        <p>
          Tody Group oferă automate de cafea moderne, echipate cu tehnologie de
          ultimă generație, și o selecție premium de băuturi calde: cafea
          proaspăt măcinată pe loc, specialități 3în1, ciocolată caldă, cafea
          Irish și multe altele. Cu o experiență solidă de peste 15 ani pe
          piață, ne adresăm clienților exigenți care apreciază calitatea și
          fiabilitatea. Ne diferențiem prin servicii rapide de mentenanță – intervenim în maximum o oră de la semnalarea unui incident, inclusiv
          în zilele de sâmbătă și duminică. Suntem dedicați excelenței
          operaționale și satisfacției fiecărui partener cu care colaborăm.
        </p>
      </section>

      <section className="about-stats" ref={statsRef}>
        <div className="stat-card">
          <h2>{years}</h2>
          <p>Ani de experiență</p>
        </div>
        <div className="stat-card">
          <h2>{clients}</h2>
          <p>Clienți mulțumiți</p>
        </div>
        <div className="stat-card">
          <h2>{activeYear}</h2>
          <p>Activitate continuă</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>Ce spun clienții noștri</h2>
        <div className="testimonial-grid">
          {testimonials.map(({ text, rating }, index) => (
            <div
              key={index}
              className={`testimonial ${index % 2 === 0 ? "even" : "odd"}`}
            >
              <p>{text}</p>
              <div className="stars">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
