import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Components/Title";
import ArticlesList from "./Components/ArticlesList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <section>
          <Routes>
            <Route path="/" element={<ArticlesList />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
