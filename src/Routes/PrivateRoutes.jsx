import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user?.email) {
        return children
    }

    else return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;