import './App.css';
import {ThemeContextProvider} from './contexts/ThemeContext';
import Header from './components/Header';
import Footeer from './components/Footeer';
import ProductsList from './components/ProductsList';

function App() {

  
  return (
    <ThemeContextProvider>
      <div className="App">
        <Header/>
        <ProductsList/>
        <Footeer/>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
