import {BrowserRouter, Routes, Route } from "react-router-dom";
import Romantic from "./components/categories/romantic";
import Fantasy from "./components/categories/fantasy";
import Horror from "./components/categories/horror";
import Humour from "./components/categories/Humor";
import ReadLater from "./components/Readlater";
import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar stays outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/romantic" element={<Romantic />} />
        <Route path="/category/fantasy" element={<Fantasy />} />
        <Route path="/category/horror" element={<Horror />} />
        <Route path="/category/humour" element={<Humour />} />
        <Route path="/readlater" element={<ReadLater />} />
        
      </Routes>
    </>
  );
}

export default App;
