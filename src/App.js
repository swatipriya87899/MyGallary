import React,{useState} from 'react';
import Gallary from './Components/Gallary';
import Navbar from './Components/Navbar'

const App = () => {

  const [searchInput, setSearchInput] = useState("cat");

  function search_Input (input){
     setSearchInput(input)
  }

  return (
    <div>
      {/* Navbar Contains website name, search box and avatar */}
      <Navbar search_input={search_Input}></Navbar>

      {/* Shows the image according to search */}
      <Gallary searchInput={searchInput}></Gallary>
    </div>
  )
}

export default App