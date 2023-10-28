import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ? <BookList /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
