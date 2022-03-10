import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Components/Title/Title";
import NavBar from "./Components/NavBar.jsx/NavBar";
import ArticlesList from "./Components/ArticlesList/ArticlesList";
import ArticleById from "./Components/SingleArticle/SingleArticle";
import SingleTopic from "./Components/ArticlesList/SlugArticles";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path={"/topics/:topic_slug"} element={<SingleTopic />} />
          <Route path="/" element={<ArticlesList />} />
          {/* <Route path="/article/:id" element={<SingleArticle />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
