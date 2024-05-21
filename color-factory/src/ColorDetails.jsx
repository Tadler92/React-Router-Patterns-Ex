import {useParams, useNavigate, Navigate} from 'react-router-dom'
import { colors } from './defaultColorData';
import './ColorDetails.css'

const ColorDetails = ({colors}) => {
  const {color} = useParams();
  const navigate = useNavigate();
  // console.log(navigate);
  // console.log('currColor in ColorDetails', currColor)

  if (color) {
    console.log('currColor in ColorDetails', color)

    const currColor = colors.find(
      c => c.colorName === color
    )

    if (!currColor) return <Navigate to='/colors' />

    return (
      <div className='ColorDetails' style={{backgroundColor: currColor.colorValue}}>
        <h1>THIS IS {color.toUpperCase()}.</h1>
        <h1>ISN'T IT BEAUTIFUL?</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    )
  }
};


export default ColorDetails;