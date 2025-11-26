import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/navbar.jsx";

//pages
import BrowseBooks from "./pages/browseBooks.jsx";
import BorrowedHistory from "./pages/borrowedHistory.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BrowseBooks />} />
        <Route path="/borrowed" element={<BorrowedHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
