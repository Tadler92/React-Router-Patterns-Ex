import { Routes, Route, Navigate } from "react-router-dom";

import DogList from "./DogList";
import DogDetails from './DogDetails'

const RoutesList = ({dogs}) => {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="*" element={<Navigate to='/dogs' replace />} />
    </Routes>
  )
};


export default RoutesList;