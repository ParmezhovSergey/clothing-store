import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Clothing from "./components/Clothing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clothing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
