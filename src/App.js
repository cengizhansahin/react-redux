import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
