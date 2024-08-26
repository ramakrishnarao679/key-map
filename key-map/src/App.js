import React, {useState, useEffect} from 'react';

const App= ()=>{
  const [numbers, setNumbers] =useState([1,2,3,4,5,6,7,8,9,10])
  const [users, setUsers] = useState([]);

  const mapData = ()=>{
    let numberlessthan5 = numbers.map((filtered)=>filtered*filtered)
    .filter((number)=>{
      return number<=50;
    })
    setNumbers(numberlessthan5);

    let filterData = users.filter((user)=>{
      return user.id<5;
    })
    setUsers(filterData);
  }

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>response.json())
    .then((json)=>setUsers(json))
  }, []);
  return (
    <div>
      <h1>Numbers</h1>
      {numbers.map((num)=>(
        <div>
          {num}
        </div>
        
      ))}

      <div>
        <h1>Users</h1>
        {users.map((user)=>(
          <div>
            <p>{user.id}</p>
              <p>{user.username}</p>
          </div>
        ))}
      </div>
      <button onClick={mapData}>MapData</button>
    </div>
  )
}
export default App;