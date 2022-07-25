import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRouter =({children})=>{
const token =useSelector(state=>state.token)

    return !!token? (children) :(
        <Navigate to="/login" />
    )

}

export default PrivateRouter