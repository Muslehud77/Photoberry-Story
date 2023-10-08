import { createContext } from 'react';
import PropTypes from "prop-types";




export const AuthContext = new createContext(null)




const ContextProvider = ({children}) => {



    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
};
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export default ContextProvider;







