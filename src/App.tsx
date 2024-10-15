import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: FC = () => {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"About"} />
          <Route path="/projects" element={"Projects"} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
