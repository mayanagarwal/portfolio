import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Upcoming portfolio for <code>Mayan Agarwal</code>.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/mayanagarwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile.
        </a>
      </header>
    </div>
  );
}

export default App;
