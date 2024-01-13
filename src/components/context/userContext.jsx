import PropTypes from "prop-types"
import {createContext} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

        const user = {
            name: "juanito",
            lastname: "castro"
        }
        return <UserContext.Provider value ={user}>
            {children}
        </UserContext.Provider>

} 

UserProvider.propTypes = {
    children: PropTypes.any
}
