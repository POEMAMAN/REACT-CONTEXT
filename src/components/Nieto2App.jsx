import { useContext } from "react";
import { UserContext } from "./context/userContext";

function Nieto2App () {
    const user = useContext(UserContext)
    return (
        <>
        <h2>Nieto de App</h2>
        <p>Nombre {user.name}, {user.lastname}</p>
        </>
    )
}

export default Nieto2App;