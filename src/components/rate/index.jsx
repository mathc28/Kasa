import emptyStar from "./emptystar.svg";
import fullStar from "./fullstar.svg";

import './styles.scss';

export default function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5];

  return (
	<div className="rate">
	  {stars.map((star) => {
		const starSrc = score >= star ? fullStar : emptyStar;
		return <img key={star} className="star" src={starSrc} alt={'host star rating'} />;
	  })}
	</div>
  );
}
