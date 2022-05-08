import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
// import "./styles.css";
import TodoDetails from "./components/Todosh";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </div>
  );
}