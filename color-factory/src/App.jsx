import { useState } from 'react'
import Nav from './Nav'
import RoutesList from './RoutesList'
import './App.css'

import { colors } from './defaultColorData'

function App() {
  const defaultColors = [
    {
      colorName: 'red',
      colorValue: '#FF0000'
    },
    {
      colorName: 'blue',
      colorValue: '#0000FF'
    },
    {
      colorName: 'green',
      colorValue: '#00FF00'
    }
  ]
  const [colorsData, setColorsData] = useState(defaultColors)
  // const [colorsData, setColorsData] = useState([])

  const addColor = (newColor) => {
    // setColorsData(colorsData => [...colorsData, newColor])
    setColorsData(colorsData => [newColor, ...colorsData])
  }

  return (
      <div className='App'>
        <Nav colors={colorsData} />
        <RoutesList colors={colorsData} addColor={addColor} />
      </div>
  )
}

export default App
