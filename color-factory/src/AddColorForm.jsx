import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './AddColorForm.css'

const AddColorForm = ({addColor}) => {
  const navigate = useNavigate();
  // const submit = useSubmit();

  const INITIAL_STATE = {
    colorName: '',
    colorValue: '#000000',
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    addColor({...formData});
    // setFormData(INITIAL_STATE);
    navigate('/colors')
  }

  return (
    <div className="AddColorForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorName">Color Name: </label>
        <input
          id="colorName"
          type="text"
          name="colorName"
          placeholder="Enter a name for the color"
          value={formData.colorName}
          onChange={handleChange}
        />

        <label htmlFor="colorValue">Color Value: </label>
        <input
          id="colorValue"
          type="color"
          name="colorValue"
          // placeholder="Color"
          value={formData.colorValue}
          onChange={handleChange}
        />

        <button>Add this color</button>
      </form>
    </div>
  )
};


export default AddColorForm;