import './styles.scss'

/**
 * Extract the tags in the database and display each of them  
 */
function Tag(props) {
  return (
	<div>
	  <span className="tagText">{props.tag}</span>
	</div>
  );
}
export default Tag