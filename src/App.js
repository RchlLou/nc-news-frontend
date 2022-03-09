import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Components/Title";
import NavBar from "./Components/NavBar.jsx/NavBar";
import TopicsList from "./Components/NavBar.jsx/TopicsList";
import ArticlesList from "./Components/ArticlesList";
import SingleTopic from "./Components/SlugArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <nav>
          <NavBar />
        </nav>
        <section>
          <Routes>
            <Route path={"/topics/:topic_slug"} element={<SingleTopic />} />
            <Route path="/" element={<ArticlesList />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
