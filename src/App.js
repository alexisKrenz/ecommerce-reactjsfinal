import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import "./components/ItemList/ItemListContainer.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import  { CartProvider } from './context/cartContext';


function App() {

    return (
        <>
        <BrowserRouter >
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={"Elija de nuestra seleccion de vinos."}/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer  />}/>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </>
        );
}
export default App;