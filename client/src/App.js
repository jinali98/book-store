import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Book } from "./pages/Book";
import { Add } from "./pages/Add";
import { Update } from "./pages/Update";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/update" element={<Update />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
