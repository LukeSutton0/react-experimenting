import styles from "./ListsAndKeys.module.css"


interface Person {
  id: number;
  name: string;
  profession: string;
}


export default function ListsAndKeys() {
  const people: Person[] = [
    {
      id: 0,
      name: 'Creola Katherine Johnson',
      profession: 'mathematician',
    },
    {
      id: 1,
      name: 'Mario José Henríquez',
      profession: 'chemist',
    },
    {
      id: 2,
      name: 'Mohammad Salam',
      profession: 'physicist',
    },
    {
      id: 3,
      name: 'Percy',
      profession: 'chemist',
    },
    {
      id: 4,
      name: 'Subrahmanyan Chandrasekhar',
      profession: 'physicist',
    },
  ];


  const listItems = people.map((person) => (
    <li className={styles.listPeople} key={person.id}>
      <p className={styles.reducedPadding}>Name: {person.name}</p>
      <p className={[getProfessionClass(person.profession),styles.reducedMargin].join(' ')}>
        Profession: {person.profession}
      </p>
    </li>
  ));

  return (
    <div>
      <div>Lists And Keys</div>
      <ul className={styles.ulPad}>{listItems}</ul>
    </div>
  );
}

//should i move this to seperate file to keep purity?
function getProfessionClass(profession: string): string { 
  switch (profession) {
    case 'mathematician':
      return styles.blueText; 
    case 'chemist':
      return styles.yellowText; 
    case 'physicist':
      return styles.redText; 
    default:
      return ''; 
  }
}
