import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Header />
            <Routes>
              <Route path="/order" element={<OrderPage /> }/>
              <Route path="/app/:title" element={ <GamePage /> }/>
              <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
