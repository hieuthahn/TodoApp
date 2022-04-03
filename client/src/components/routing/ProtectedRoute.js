import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import Spinner from "react-bootstrap/esm/Spinner"

const ProtectedRoute = ({ children, ...rest }) => {
    const { authState } = useContext(AuthContext)
    const { authLoading, isAuthenticated } = authState
    if (authLoading) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        )
    }
    if (isAuthenticated) {
        return children
    } else {
        return <Navigate to={rest.redirectPath} replace />
    }
}

export default ProtectedRoute
