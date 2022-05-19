import React,{useState} from 'react';
import './Searchbar.css';
import search_icon from './../Images/search_icon.png'

const Searchbar = (props) => {

  const [search, setSearch] = useState(""); 

  const handleChange=(event)=>{
    const data=event.target.value; 
    console.log(data);
    if(data==="")
    props.search_input("cat");
    else
    props.search_input(data);
    setSearch(data)
  }

  return (
    <div style={{textAlign:'center', position:'relative'}}>
        <input type="text" placeholder={props.placeholder} value={search} onChange={handleChange} className="search_box_styling"></input>
        <div className='search_icon_box'>
        <img src={search_icon} style={{width:'100%'}}></img>
        </div>
    </div>
  )
}

export default Searchbar