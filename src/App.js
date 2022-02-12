import logo from './flying-gg.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello and welcome.  This is a temporary landing page for teaching coding in a project called Flying GG.
        </p>
        Learn more about the work of
        <a
          className="App-link"
          href="https://faith-in-love.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Faith in Love here.  
        </a>
      </header>
    </div>
  );
}

export default App;
