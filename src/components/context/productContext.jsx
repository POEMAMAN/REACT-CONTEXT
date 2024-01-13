import PropTypes from "prop-types"
//aqui usar siempre camle Case para los nombres de ARchivo
import {createContext, useState} from "react";
//los contextos pueden ser datos y funciones en conjunto, lo nombramos js porque aqui no usamos html, no es un componente
//Exportamos y creamos a la vez, las variables de contexto empiezan tb con mayusculas
export const ProductContext = createContext();

//vamos a hacer un **Hook personalizado**
export const ProductProvider = ({children}) => {
        ///Normalmente los datos son variables, viene  de un fetch, o un formulario...aqui se ponen para ejempñlo didactico
        const [product, setProduct] = useState({
            name: "coca cola",
            price: 2
        })
        
        return <ProductContext.Provider value ={product}>
            {children}
        </ProductContext.Provider>

} 
ProductProvider.propTypes = {
    children: PropTypes.any
}


