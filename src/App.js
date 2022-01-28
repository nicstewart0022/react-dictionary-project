import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project is created by Nicole Stewart is {""}
            <a
              href="https://github.com/nicstewart0022/react-dictionary-project"
              target="_blank"
              rel="nonreferrer noopener"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://cocky-jepsen-76535c.netlify.app"
              target="_blank"
              rel="nonreferrer noopener"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
