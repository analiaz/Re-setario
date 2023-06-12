import { Navigate, Route, Routes } from "react-router-dom"
import {LaReceta, VisorDeRectas} from "../pages/index"

export const RecetarioRoutes = () => {
  return (
    <Routes>
        {/*Listado de recetas, la persona ya esta autenticada*/}
        <Route path="/" element={<VisorDeRectas />} />

        <Route path="lareceta" element={<LaReceta />} />

        {/*por si esta en cualquier otro lado*/}
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}


