import { Navigate } from "react-router-dom";
import { get_token } from "../components/login/auth/auth";

export default function PrivateRoute({children}) {
  if(get_token()){
    return children; //welcome page
  } 
  else {
    return <Navigate to="/" replace />; 
  }
}
