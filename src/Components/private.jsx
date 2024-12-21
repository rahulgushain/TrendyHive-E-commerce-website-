import { Children } from "react";
import { Navigate } from "react-router-dom";


function Private({islogin,Children}){
   if(islogin){
    return Children
   }
   else{
    return <Navigate to="/login"/>
   }
}
export default Private;