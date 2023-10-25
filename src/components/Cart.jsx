import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Cart() {
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const handleAlert2 = () => {
    toast.success("Ürün listeden çıkartıldı! 😞");
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {carts.length > 0 ? (
            carts.map((book) => (
              <div className="col-lg-3 col-md-4 col-sm-12 my-3" key={book.id}>
                <div className="card m-auto rounded shadow">
                  <img
                    className="card-img-top"
                    src={book.image_url}
                    height={300}
                    alt="Card image cap"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/urundetay/${book.id}`)}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{book.title}</h5>
                    <p className="card-text">Ürün Miktarı: {book.quantity}</p>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        handleRemoveFromCart(book.id);
                        handleAlert2();
                      }}
                    >
                      Sepetten Çıkar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-danger" role="alert">
              SEPETE ÜRÜN YOK 😭
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
