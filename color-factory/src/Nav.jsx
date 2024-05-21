import { NavLink } from "react-router-dom";
import {v4 as uuid} from 'uuid'
import './Nav.css'

const Nav = ({colors}) => {
  return (
    <nav className="Nav">
      <NavLink to='/colors'>Home</NavLink>
      {colors.map(color => (
        <NavLink key={uuid()} to={`/colors/${color.colorName}`}>{color.colorName}</NavLink>
      ))}
    </nav>
  )
};


export default Nav;