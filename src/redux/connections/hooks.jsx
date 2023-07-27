import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setEmail, setToken } from "./reducer";

export const useConnection = () => {
    const connection = useSelector((state) => state.connection);
    const dispatch = useDispatch();

    const onSetTokens = useCallback((tokens) => {
        dispatch(setToken(tokens));
    }, [dispatch]);

    const onSetEmail = useCallback((email) => {
        dispatch(setEmail(email));
    }, [dispatch])

    return {
        connection,
        onSetEmail,
        onSetTokens,
    }
}