import { useState } from "react";
import arrowleft from "./leftarrow.svg";
import arrowright from "./rightarrow.svg";
import './styles.scss'


export default function Carrousel({ slides }) {
	//Usestate Index du premier slide à 0
	const [current, setCurrent] = useState(0); 
	// longueur du tableau de slides
	const length = slides.length;

	// on repart au premier slide quand on arrive au dernier sinon on ajoute +1
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	// on repart au dernier slide quand on est au premier sinon on retire -1
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); 
	};

	return (
		<section className="carrouselContainer">
			{length > 1 && (
				<img src={arrowleft} alt="gauche" onClick={prevSlide} className="leftArrow" />
			)}
			{length > 1 && (
				<img src={arrowright} alt="droite" onClick={nextSlide} className="rightArrow" />
			)}
			{slides.map((slide, index) => (
				<div
					key={index}
					className={current === index ? "slide carousselAnim" : "slide "}>
						{index === current && <img src={slide} alt="appartement à louer" />}
						{index === current && ( <span className="number"> {current + 1}/{length} </span>
					)}
				</div>
			))}
		</section>
	);
}