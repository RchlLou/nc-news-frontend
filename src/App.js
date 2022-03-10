import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Components/Title/Title";
import NavBar from "./Components/NavBar.jsx/NavBar";
import ArticlesList from "./Components/ArticlesList/ArticlesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Title />
        <NavBar />
        <Routes>
          <Route path="/articles" element={<ArticlesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
