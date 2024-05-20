import { useState } from 'react'
import RoutesList from './RoutesList'
import Nav from './Nav'
import './App.css'

import {dogs} from './defaultDogData'

function App() {
  const [count, setCount] = useState(0)

  console.log(dogs)

  return (
    <>
      <div>
        <Nav dogs={dogs} />
        <RoutesList dogs={dogs} />
      </div>
    </>
  )
}

export default App;
