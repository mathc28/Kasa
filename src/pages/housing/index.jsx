import {useEffect, useState} from 'react'
import {useParams} from  'react-router-dom'
import ErrorPage from '../../components/error'
import Carrousel from '../../components/caroussel'
import Chargement from '../../components/loader'
import Host from '../../components/host'
import Tag from '../../components/tag'
import Rate from '../../components/rate'
import Collapse from '../../components/collapsible'
import './styles.scss'


function Logement (){
  
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isErrorNotFound, setIsErrorNotFound] = useState(true)
  const [logement, setLogement] = useState()

  useEffect(() => {
    // Quand on a récupérer les données, on modifie le logements avec le useState
    fetch('/data/logement.json')
      .then(response => response.json())
        .then(data => {
            setTimeout(() => {
              // Aller chercher le bon logement dans la liste data
              data.forEach(element => {
                if(element.id === id){
                  setIsErrorNotFound(false)
                  setLogement(element)
                }
              });
              setIsLoading(false)
            }, 2000)
        })
  }, [])

  if(isLoading){
    return <Chargement />
  }

  if(isErrorNotFound){
    return <ErrorPage />
  }
    
  return ( 
    <div className="logementContainer">
      <Carrousel slides={logement.pictures} />
      <section className="hostInfo">
				<div className="titleAndTags">
					<div className="title-container">
						<h1>{logement.title}</h1>
						<h3>{logement.location}</h3>
					</div>
          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
				</div>
				<div className="rateAndHost">
					<div> 
            <Host hostName={logement.host.name} hostPicture={logement.host.picture}/> 
          </div>
					<div className="rate-container"> 
            <Rate score={logement.rating}/> 
          </div>
				</div>
			</section>
      <div className="collapseContainer">
				<Collapse label="Description">
				  <p> {logement.description} </p>
				</Collapse>
        <Collapse label="Équipements">
          <ul className="equipements-list">
            {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
			</div>
    </div>
  )
}

export default Logement;