import React from "react";
import { handleBlogDataLoading, handleBlogDataSuccess, handleBlogDataErr} from "../redux/action";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


const BlogsList = () => {
    const dispatch=useDispatch()
    const token =useSelector(state=>state.token)
const {blogData}=useSelector(state=>state.blogData)
useEffect(()=>{
    BlogsDataFetch()
},[])
    const BlogsDataFetch=()=>{
        fetch(`http://localhost:8080/blogs`)
        .then(res=>res.json())
        .then(data=>dispatch(handleBlogDataSuccess(data)))
        .catch(err=>dispatch(handleBlogDataErr()))
    }
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>title</th><th>Author</th><th>publication</th><th>Date</th><th>Content</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                {blogData?.map(ele=> {return })}                
            </tbody>            
        </>
    )
}


export default BlogsList