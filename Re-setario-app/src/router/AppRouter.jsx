import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RecetarioRoutes } from "../resetas/routes/RecetarioRoutes"


export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/*Hacia login y registro */}
        <Route path="/auth/*" element={ <AuthRoutes />} />

          {/*dentro del recetario*/}
        <Route path="/*" element={ <RecetarioRoutes />} />

      </Routes>
    </>
  )
}
