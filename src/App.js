import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
