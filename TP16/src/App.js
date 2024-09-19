import './App.css';
import {ThemeContextProvider} from './contexts/ThemeContext';
import {CartContextProvider} from './contexts/CartContext';
import Routing from './routing/Routing';

function App() {
  
  return (
    <ThemeContextProvider>
      <CartContextProvider>
      <div className="App ">
        <Routing/>
      </div>
      </CartContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
