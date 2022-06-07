import './App.css';
import Header from './containers/Header'
import ProductList from './containers/ProductList'
import ProductDetail from './containers/ProductDetail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>          
          <Route path='/' exact element={<ProductList/>}/>
          <Route path='/product/:productId' element={<ProductDetail/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
        
      </BrowserRouter>
        

        {/* <ProductList /> */}
    </div>
  );
}

export default App;
