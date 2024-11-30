import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({children}) => {

          const {value}  =useContext(AuthContext)
  if(!value){
   return  <Navigate to='/login'></Navigate>
  }

  return (
    <div>{children}</div>
  )
}

export default PrivateRoute