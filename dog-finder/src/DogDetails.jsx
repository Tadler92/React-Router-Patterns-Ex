import { useParams } from "react-router-dom";
import {v4 as uuid} from 'uuid'
import { Navigate } from "react-router-dom";

const Dog = ({dogs}) => {
  const {name} = useParams();

  if (name) {
    const dog = dogs.find(
      d => d.name === name
    )

    if (!dog) return <Navigate to='/dogs' />

    return(
      <div>
        <img src={`${dog.src}`} />
        <h1>{dog.name}</h1>
        <p>{dog.age} years</p>
        <ul>
          {dog.facts.map(fact => (
            <li key={uuid()}>{fact}</li>
          ))}
        </ul>
      </div>
    )
  }
};


export default Dog;