import { useState } from "react";
import arrowleft from "../../assets/images/leftarrow.svg"
import arrowright from "../../assets/images/rightarrow.svg";
import './styles.scss';

export default function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const slideDir = (direction) => {
    setCurrent((prev) => 
      direction === "next" ? (prev + 1) % length : (prev - 1 + length) % length
    );
  };

  return (
    <section className="carrouselContainer">
      {length > 1 && (
        <>
          <img src={arrowleft} alt="flèche gauche" onClick={() => slideDir("prev")} className="leftArrow" />
          <img src={arrowright} alt="flèche droite" onClick={() => slideDir("next")} className="rightArrow" />
        </>
      )}
      {slides.map((slide, index) => (
        current === index && (
          <div key={index} className="slide carousselAnim">
            <img src={slide} alt={`appartement ${index + 1}`} />
            <span className="number">{current + 1}/{length}</span>
          </div>
        )
      ))}
    </section>
  );
}

