
import './App.css';
import Header from './customer/components/Navigation/Header';
import Product from './customer/components/Product/Product';
import ProductCard from './customer/components/Product/ProductCard';
import HomePage from './customer/pages/HomePage';


function App() {
  return (
    
    <div className="text-lg font-bold">
      {/* <Header/>
      <HomePage/> */}
      <Product/>
      
    </div>
  );
}

export default App;
