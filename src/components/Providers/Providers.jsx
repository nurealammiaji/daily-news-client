import { getAuth } from "firebase/auth";
import { createContext } from "react";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const Providers = ({children}) => {

    const user = {displayName: "Nure Alam"};

    const authInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Providers;