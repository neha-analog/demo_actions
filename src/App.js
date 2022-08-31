import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://portal.azure.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Updated Link
        </a>
      </header>
    </div>
  );
}

export default App;
