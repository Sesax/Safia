import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        
        setIsLoading(true)
        setError(null)

        localStorage.setItem('user', 'Tester')

        dispatch({ type: 'LOGIN', payload: 'Tester' })

        setIsLoading(false)
    }

    return { login, isLoading, error }
}