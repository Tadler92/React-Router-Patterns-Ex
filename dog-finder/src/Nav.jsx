import { NavLink } from "react-router-dom";
import {v4 as uuid} from 'uuid'
import './Nav.css'

const Nav = ({dogs}) => {
  return (
    <nav className="Nav">
      <NavLink to='/dogs'>Home</NavLink>
      {dogs.map(dog => (
        <NavLink key={uuid()} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
      ))}
    </nav>
  )
};


export default Nav;