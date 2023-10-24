import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <Footer />
    </div>
  );
}

export default App;
