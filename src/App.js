import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div>
      <AddProduct />
      <SearchProduct />
      <DeleteProduct />
      <ViewProduct />
    
    </div>
  );
}

export default App;
