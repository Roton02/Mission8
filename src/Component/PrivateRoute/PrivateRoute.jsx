import { useContext } from "react";
import { AuthProvider } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthProvider)
    if (loader) {
        return <div className="w-16  h-16 border-4 mx-auto  mt-20 border-black border-dotted rounded-full animate-spin "></div>
    }
    if(user){
        return children
    }
    return  <Navigate to='/SignIn'></Navigate> ;
};

export default PrivateRoute;