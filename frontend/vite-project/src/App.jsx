import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Generate from "./pages/Generate";
import WebsiteEditor from "./pages/WebsiteEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/editor/:id" element={<WebsiteEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
