import React from 'react';

const App = ()=>{

  let name= React.createRef()
  let age = React.createRef()


  const getName = (event)=>{
    console.log(event.target.value);
  };

  const getAge = (event)=>{
    console.log(event.target.value);
  }
  const submit = ()=>{
    console.log(name.current.value);
    console.log(age.current.value);
  }
  return (
    <div>
      <input placeholder="Enter Name" ref={name} />
      <input placeholder="Enter age" ref={age} />

      <input placeholder='Enter name' onChange={getName} />
      <input placeholder='Enter age' onChange={getAge} />


      <button onClick={submit}>Submit</button>

    </div>
  )
}
export default App;