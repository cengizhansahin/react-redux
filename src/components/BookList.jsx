import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../redux/bookSlice";

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=10")
      .then((res) => dispatch(setBooks(res.data)));
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {books.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-12 my-3" key={item.id}>
              <div className="card m-auto rounded shadow">
                <img
                  className="card-img-top"
                  src={item.image_url}
                  height={300}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{item.title}</h5>
                  <p className="card-text">Yazar: {item.authors}</p>
                  <input
                    type="number"
                    min="1"
                    className="p-2 border rounded"
                    style={{ fontSize: "12px" }}
                  />
                  <button className="btn btn-success mt-2">Sepete Ekle</button>
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
