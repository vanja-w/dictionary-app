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
          <p className="text-center">Coded by Vanja Wallace</p>
        </footer>
      </div>
    </div>
  );
}
