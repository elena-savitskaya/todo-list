import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./app/components/footer";
import { Navbar } from "./app/components/navbar";
import { AboutPage } from "./app/pages/about-page";
import { TodosPage } from "./app/pages/todos-page";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/todo-list/" element={<TodosPage />} />
        <Route path="/todo-list/about/" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
