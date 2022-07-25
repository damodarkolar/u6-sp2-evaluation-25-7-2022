import { loginLoading, loginSuccess, loginErr, blogsDataLoading, blogsDataSuccess, blogsDataErr, logOut} from "./actionTypes";

export const handleLoginLoading=()=>{

    return {
        type: loginLoading
    }
}
export const handleLoginSuccess=(data)=>{

    return {
        type: loginSuccess,
        payload:data
    }
}

export const handleLoginErr=()=>{

    return {
        type: loginErr
    }
}

export const handleBlogDataLoading=()=>{

    return {
        type: blogsDataLoading
    }
}

export const handleBlogDataSuccess=(data)=>{

    return {
        type: blogsDataSuccess,
        payload: data
    }
}

export const handleBlogDataErr=()=>{

    return {
        type: blogsDataErr
    }
}
export const handleLogOut=()=>{

    return {
        type: logOut
    }
}

