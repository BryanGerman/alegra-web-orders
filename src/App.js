
import { NewOrder } from './components/orders/newOrder';
import './App.css';
import { ListOrders } from './components/orders/listOrders';


function App() {

  return (
    <div className="App">
      <NewOrder/>
      <ListOrders/>
    </div>
  );
}

export default App;
