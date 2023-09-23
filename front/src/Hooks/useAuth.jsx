import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useAuth() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);
    const { status } = useSelector((store) => {
        return store.user;
    });

    useEffect(() => {
        if (status) {
            setLoggedIn(true);
        }
        setChecking(false);
    }, [status]);
    return { loggedIn, checking };
}
