import "./App.css";
import "./sass/main.scss";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
function App() {
  const [totalList, setTotallist] = useState([
    {
      content: "first Todo",
      isDone: true,
    },
    {
      content: "Second Todo",
      isDone: false,
    },
  ]);
  const addTodDo = (content) => {
    const reorder = [...totalList, { content, isDone: false }];
    setTotallist(reorder);
  };

  const updateDone = (index) => {
    const reorder = [...totalList];
    reorder[index].isDone = !reorder[index].isDone;
    setTotallist(reorder);
  };

  const deleteTodo = (index) => {
    const reorder = [...totalList];
    reorder.splice(index, 1);
    setTotallist(reorder);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/todolist"
            element={
              <TodoList
                totalList={totalList}
                addTodDo={addTodDo}
                updateDone={updateDone}
                deleteTodo={deleteTodo}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
