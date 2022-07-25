import React from "react";
import { handleBlogDataLoading, handleBlogDataSuccess, handleBlogDataErr} from "../redux/action";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


const BlogsList = () => {
    const dispatch=useDispatch()
    const token =useSelector(state=>state.token)
const [data, setData]=useState();

    const BlogsDataFetch=()=>{
        fetch(``)
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>dispatch(handleBlogDataErr()))
    }
    return(
        <div>
            
        </div>
    )
}


export default BlogsList