import React from 'react'

export default function ListsAndKeys() {

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        id:3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        id:4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];

      const listItems = people.map(person => (
        <li key={person.id}>
          <p>Name: {person.name}</p>
          <p>Profession: {person.profession}</p>
        </li>
      ));

  return (
    <>
    <div>ListsAndKeys</div>
    <ul>{listItems}</ul>;
    </>
  )
}
