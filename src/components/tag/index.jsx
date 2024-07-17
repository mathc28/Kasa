import './styles.scss'

/**
 * on créer une fonction pour afficher les tags de la base de données 
 */
function Tag(props) {
	return (
		<div>
			<span className="tagText">{props.tag}</span>
		</div>
	);
}
export default Tag