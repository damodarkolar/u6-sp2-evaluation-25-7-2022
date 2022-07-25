import { loginLoading, loginSuccess, loginErr, blogsDataLoading, blogsDataSuccess, blogsDataErr, logOut} from "./actionTypes";
const initialState={
    loginLoading:false,
    loginErr:false,
    token:"",
    blogDataLoading:false,
    blogDataErr:false ,
    blogData:[]   
}

export const reducer = (store=initialState, {type, payload})=>{
    switch (type) {
        case loginLoading:
            return {
                ...store,
                loginLoading:true
            }
        case loginErr:
            return {
                ...store,
                loginErr:true
                }
        case loginSuccess:
            return {
                ...store,
                token: payload
                }
        case blogsDataLoading:
                return {
                ...store,
                blogDataLoading:true
                }
        case blogsDataErr:
                return {
                ...store,
                blogDataErr:true
                }
        case blogsDataSuccess:
                return {
                ...store,
                blogData:[...store.blogData,payload]
                }
        case logOut:
                return {
                ...store,
                token:""
                }
        default:
            return{
                ...store
            } 
    }
}