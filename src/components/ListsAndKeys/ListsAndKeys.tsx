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
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];

      const listItems = people.map(person => <li>{person}</li>);

  return (
    <>
    <div>ListsAndKeys</div>
    <ul>{listItems}</ul>;
    </>
  )
}
