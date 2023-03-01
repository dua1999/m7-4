import axios from 'axios'
import React, {useState} from 'react'
import Api from './Api'

function Input() {
  const [searchInput, setSearchInput] = useState('')
  const[repos,setRepo] = useState('')
  const handleChange = (value) =>{
    setSearchInput(value.target.value)
  }
  const handleClick = async() =>{
    console.log(searchInput)

    try {
      const result = await axios(`https://api.github.com/users/${searchInput}/repos`)
    setRepo(result)
      
    } catch (error) {
      console.log(error)
      
    } 
  }
   
  return (
    <>
    <div>
        <h3>Enter repo name:</h3>
        <input type="text" placeholder="Search" value={searchInput} onChange={handleChange}/>
        <br/>
        <button onClick={handleClick}>Search</button>
    </div>
    <Api repos = {repos}/>
    </>
  )
}

export default Input