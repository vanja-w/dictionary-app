import "./App.css";
import DictionarySearch from "../DictionarySearch/DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <DictionarySearch defaultWord="hello" />
        </main>
        <footer>
          <p className="text-center">
            <a
              href="https://github.com/vanja-w/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            {""} by Vanja Wallace
          </p>
        </footer>
      </div>
    </div>
  );
}
