import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../redux/bookSlice";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function BookList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const filteredBooks = useSelector((state) => state.book.filteredBooks);

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=10")
      .then((res) => dispatch(setBooks(res.data)));
  }, [dispatch]);

  const handleQuantityChange = (id, value) => {
    setQuantities({
      ...quantities,
      [id]: value,
    });
  };

  const handleAddToCart = (book) => {
    const quantity = quantities[book.id] || 1;
    dispatch(addToCart({ ...book, quantity: Number(quantity) }));
  };

  const handleAlert = () => {
    toast.success("Ürün sepete eklendi! 👍");
  };

  /********************************************************************************* */

  const displayBooks = filteredBooks ? filteredBooks : books;

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {displayBooks.map((book) => (
            <div className="col-lg-3 col-md-4 col-sm-12 my-3" key={book.id}>
              <div className="card m-auto rounded shadow">
                <img
                  className="card-img-top"
                  src={book.image_url}
                  height={300}
                  alt="Card cap"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/kitapdetay/${book.id}`)}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{book.title}</h5>
                  <p className="card-text">Yazar: {book.authors}</p>
                  <input
                    type="number"
                    min="1"
                    value={quantities[book.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(book.id, e.target.value)
                    }
                    className="p-2 border rounded mx-2"
                    style={{ fontSize: "12px", width: "60px" }}
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleAddToCart(book);
                      handleAlert();
                    }}
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookList;
