

import './App.css';
import Carosel from './component/Carosel/Carosel';
import Navber from './component/Navbar/Navber';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Navber />
      <Carosel />
      <Cart />
    </div>
  );
}

export default App;
