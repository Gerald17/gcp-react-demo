import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br />
          {`api: ${process.env.REACT_APP_API_URL}`}
          <br />
          {`demo: ${process.env.REACT_APP_DEMO}`}
          <br />
          {`demo two: ${process.env.REACT_APP_DEMO_TWO}`}
          <br />
          {`demo three: ${process.env.REACT_APP_DEMO_THREE}`}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
