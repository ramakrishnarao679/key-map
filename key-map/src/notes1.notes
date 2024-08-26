import React from 'react';

const App =()=>{
  let number = [1,2,3,4,5,6,7,8,9,10]
  let details =[
    {name:'Nithin'},
    {name:'Rama krishna'},
    {name:'Mahesh'},
  ]

  return (
    <div>
      <ul>
        <h1>Number</h1>
        {number.map((num)=>{
          return (
            <li key={num}>
              {num}
            </li>
          )
        })}
      </ul>
      <div>
        <ul>
          <h1>Users</h1>
          {details.map((detail, index)=>{
            return(
              <li key={index}>
                {detail.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )

}
export default App;