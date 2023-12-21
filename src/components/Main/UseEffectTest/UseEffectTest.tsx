import React, { useState, useEffect } from 'react';


function UseEffectTest() {
  //used when communicating with external component
  const [resourceType,setResourceType] = useState('posts')
  const [items,setItems] = useState([])


  useEffect(() => {
    console.log('I run only on mount as it only changes when the stuff inside the [] changes.');
  }, []);

  useEffect(()=>{
    console.log('Posts or users changed')
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => setItems(json.slice(0, 10)))
  },[resourceType])

  return (
    <div>
      <div>
        <p>UseEffect expreimenting with API</p>
        <button onClick={()=> setResourceType('posts')}>Posts</button>
        <button onClick={()=> setResourceType('users')}>Users</button>
      </div>
      <p>{resourceType}</p>
      <div>
        {items.map(item =>{
          return <pre>{JSON.stringify(item)}</pre>
        })}
      </div>
    </div>
  );
}

export default UseEffectTest;
