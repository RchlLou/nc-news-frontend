import "./App.css";
import { useState } from "react";
import { UserContext } from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Components/Title/Title";
import NavBar from "./Components/NavBar.jsx/NavBar";
import ArticlesList from "./Components/ArticlesList/ArticlesList";
import ArticleById from "./Components/SingleArticle/ArticleById";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const [user, setUser] = useState({ user_id: 1, username: "tickle122" });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Title />
          <NavBar />
          <Routes>
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:article_id" element={<ArticleById />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
