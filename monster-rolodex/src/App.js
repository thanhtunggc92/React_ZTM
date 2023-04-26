
import './App.css';
// import {Component} from 'react'
import { useState, useEffect } from 'react';
import Cardlist from './components/card-list/cat-list.components';
import SearchBox from './components/search-box/search-box.components'
import './components/search-box/SearchBox.css'
//*******************Functional Component**************************


function App(){
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonster]= useState([])
  


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonster(users));
    
  }, [])
  

  

  console.log(searchField)
  const onSearchChange=(event) =>{
        const searchFieldString = event.target.value.toLocaleLowerCase()
            setSearchField(searchFieldString)
        }
  const filterMonster = monsters.filter((monster)=>{
          return monster.name.toLocaleLowerCase().includes(searchField)
        });    
  return (      
    <div className='App'>
      <h1 className='title-app' >Monsters Rolodex </h1>
   
      <SearchBox className="monster search-box" onChangeHandler={onSearchChange} placeholder='search monster' />
            
            
      <Cardlist monsters={filterMonster}/>
    </div>
    )
}

export default App;
// ***********************class component******************************
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField:"",
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(user => this.setState(()=>{
//       return {monsters:user}
//     }))
//   }
//   onSearchChange=(event) =>{
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(()=>{
//       return {searchField}
//     })
//   }
//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filterMonster = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });
//     return (
//       <div className='App'>
//         <h1 className='title-app' >Monsters Rolodex </h1>
//         <SearchBox className="monster search-box" onChangeHandler={onSearchChange} placeholder='search monster' />
       
       
//         <Cardlist monsters={filterMonster}/>
//       </div>
//     );
//   }
// }

// export default App;