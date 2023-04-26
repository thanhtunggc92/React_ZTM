
import './card.styles.css'



function CardComponent ({monster}){
  
        // const {monster} = props
        return(
            <div className="card-container" key={monster.id}>
          
            <img alt={`monsters ${monster.name}`}
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            ></img>
            <h2>{monster.name}</h2>
            <p>m{monster.email}</p>
       
        </div>
        )
    }

export default CardComponent;