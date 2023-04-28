import Category from '../category-item/category-item.component'
import './directory-style.scss'
function Directory ({categories}){
    return(
        <div className="directory-container">
        {categories.map((category)=>(
          <Category key={category.id} category={category}/>
        
        ))}
       
       
      </div>
    )
}

export default Directory;