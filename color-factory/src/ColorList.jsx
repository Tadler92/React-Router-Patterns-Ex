import {Link, useNavigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

const ColorList = ({colors}) => {
  const navigate = useNavigate();


  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <button onClick={() => navigate('/colors/new')}>Add a color</button>
      <p>Please select a color.</p>
      <ul>
        {colors.map(color => (
          <li key={uuid()}><Link to={`/colors/${color.colorName}`}>{color.colorName}</Link></li>
        ))}
      </ul>
    </div>
  )
};


export default ColorList;