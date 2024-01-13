import { useContext } from "react";
import { ProductContext } from "./context/productContext";

function NietoApp () {
    const product = useContext(ProductContext)
    return (
        <>
        <h2>Nieto de App</h2>
        <p>Producto: {product.name}</p>
        </>
    )
}

export default NietoApp;