import React from 'react'

const Api = (props) => {
  const {repos} = props
  console.log ("Repo: ", repos.data)

  const list= repos.length !== 0 ? repos.data.map((repos)=>
    <li>{repos.name}</li>
  ): <li>Sorry, no repos found!</li>
  return (
    <div>
       <ul>
        {list}
       </ul>
    </div>
  )
}

export default Api