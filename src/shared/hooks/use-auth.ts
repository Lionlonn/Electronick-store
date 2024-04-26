
import { useStateSelector } from "./hooks";


export function useAuth() {
    const { email, token, id } = useStateSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}