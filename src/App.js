import logo from './logo.svg';
import './App.css';
import './Components/style.css';
// import TodoApp from "./TodoApp";
import Shop from "./Components/Shop";
import VShop from "./Components/Vshop";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Shop />
      <VShop />
    </div>
  );
}

export default App;
