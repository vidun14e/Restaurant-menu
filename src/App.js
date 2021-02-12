import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Restaurant Menu</h2>
        <Categories/>
        <Menu/>
      </header>
    </div>
  );
}

export default App;
