import { Routes, Route, Navigate } from "react-router-dom";

import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import AddColorForm from "./AddColorForm";

const RoutesList = ({colors, addColor}) => {
  return (
    <Routes>
      <Route path="/colors" element={<ColorList colors={colors} />} />
      <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
      <Route path="/colors/new" element={<AddColorForm addColor={addColor} />} />
      <Route path="*" element={<Navigate to='/colors' replace />} />
    </Routes>
  )
};


export default RoutesList;