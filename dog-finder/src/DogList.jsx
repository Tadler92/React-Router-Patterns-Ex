import { Link } from "react-router-dom";
import {v4 as uuid} from 'uuid'

const Dogs = ({dogs}) => {
  return (
    <div>
      <h1>Welcome!  Check out our Dogs!</h1>
      <ul>
        {dogs.map(dog => (
          // <li key={dog.name}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
          <li key={uuid()}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
        ))}
      </ul>
    </div>
  )
};


export default Dogs;