import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signIn = (user) => {
        setCurrentUser(user);
    };

    const signOut = () => {
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        signIn,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
