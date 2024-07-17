import emptyStar from "./emptystar.svg";
import fullStar from "./fullstar.svg";

import './styles.scss'

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate">
			{stars.map((starornot) =>score >= starornot ? (
					<img key={starornot.toString()} className="star" src={fullStar} alt="rating star"/>
				) : ( 
					<img key={starornot.toString()} className="star" src={emptyStar}alt="empty star"/>
				)
			)}
		</div>
	);
}