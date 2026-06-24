import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Generate from "./pages/Generate";
import WebsiteEditor from "./pages/WebsiteEditor";
import LiveSite from "./pages/LiveSite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/editor/:id" element={<WebsiteEditor />} />
        <Route path='/site/:id' element={<LiveSite/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
