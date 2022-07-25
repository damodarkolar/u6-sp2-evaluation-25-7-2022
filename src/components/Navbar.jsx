import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { Link } from "react-router-dom";
import PrivateRouter from "../components/PrivateRotes"
import { handleLogOut } from "../redux/action";


const Navbar = () => {
// const token=useSelector(state=>state.token);
const dispatch=useDispatch()
const token=0

const handleNavbarLogOut=()=>{
    dispatch(handleLogOut());
}

    return !!token?(
        <>
        <Link to="/">Home</Link>
        <Link to="/blogs/create">Create Blog</Link>
        <Link to="/blogs">Blogs List</Link>
        <button onClick={handleNavbarLogOut}>Log Out</button>
        </>
    ) : (
        (
            <>
            <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            </>
        )
    )
}


export default Navbar