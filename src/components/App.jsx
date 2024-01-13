import HijoApp from "./HijoApp";
import { ProductProvider } from "./context/productContext";
import { UserProvider } from "./context/userContext";
//al importarlo por separadpo es como importar un objeto//

function App () {

    return (
        <ProductProvider>
            <UserProvider>
                <div>
                    Uso de UseContext
                </div>
                <HijoApp />
            </UserProvider>
        </ProductProvider>
    );

}

export default App;