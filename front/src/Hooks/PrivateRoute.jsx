import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth.jsx";
import Spinner from "../Components/Spinner";
export default function PrivateRoute() {
    const { loggedIn, checking } = useAuth();
    if (checking) {
        return (
            <>
                <Spinner />
            </>
        );
    }

    return loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
}
