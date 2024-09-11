import { useState } from "react";
import arrowleft from "./leftarrow.svg";
import arrowright from "./rightarrow.svg";
import './styles.scss';

export default function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handleSlide = (direction) => {
    setCurrent((prev) => 
      direction === "next" ? (prev + 1) % length : (prev - 1 + length) % length
    );
  };

  return (
    length > 0 && (
      <section className="carrouselContainer">
        {length > 1 && (
          <>
            <img src={arrowleft} alt="gauche" onClick={() => handleSlide("prev")} className="leftArrow" />
            <img src={arrowright} alt="droite" onClick={() => handleSlide("next")} className="rightArrow" />
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
    )
  );
}
