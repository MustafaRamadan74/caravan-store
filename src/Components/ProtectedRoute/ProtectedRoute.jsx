import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {



    if (localStorage.getItem("users") === null) {
        return <Navigate to="/login" />;
    }
    else {
        return props.children
    }

}
