import './styles.scss'


function Host(props) {
	return (
		<div className="host">
			<div className="hostName">{props.hostName}</div>
			<div className="hostPicture">
				<img src={props.hostPicture} alt={"photo de l'hôte"} />
			</div>
		</div>
	);
}

export default Host