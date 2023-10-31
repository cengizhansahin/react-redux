import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import KitapDetay from "./components/KitapDetay";

function App() {
  const users = useSelector((state) => state.user.users);
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={users ? <BookList /> : <Login />} />
        <Route path="/cart" element={users ? <Cart /> : <Login />} />
        <Route
          path="/kitapdetay/:id"
          element={users ? <KitapDetay /> : <Login />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
