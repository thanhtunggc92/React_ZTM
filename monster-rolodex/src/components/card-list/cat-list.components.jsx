
import CardComponent from "../card/card.component";
import './card-list.styles.css'


function Cardlist({monsters}){
 
 
        // const {monsters} = props;
        return(
            <div className="card-list">
                 {monsters.map(monster =>(
                    <CardComponent  monster={monster}/>
                 ))}
            </div>
        )

    }


export default Cardlist; 