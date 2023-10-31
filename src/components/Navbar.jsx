import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setFilteredBooks } from "../redux/bookSlice";
import { useState } from "react";

function Navbar() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const cartTotal = carts.reduce((total, item) => total + item.quantity, 0);
  const books = useSelector((state) => state.book.books);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDisplay = () => {
    if (inputValue) {
      const filtredKitap = books.filter((book) =>
        book.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      dispatch(setFilteredBooks(filtredKitap));
    } else {
      dispatch(setFilteredBooks(null));
    }
    setInputValue("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => dispatch(setFilteredBooks(null))}
          >
            Anasayfa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => dispatch(setFilteredBooks(null))}
                >
                  Ürünler
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>({cartTotal})
                </Link>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={handleDisplay}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
