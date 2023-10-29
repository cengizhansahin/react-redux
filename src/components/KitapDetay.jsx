import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function KitapDetay() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="display-2">{items.title}</h1>
        <div className="row my-4 align-items-center">
          <div className="col-md-4">
            <img className="rounded" src={items.image_url} alt={items.title} />
          </div>
          <div className="col-md-8 ps-5">
            <h2>Kategori: {items.genres}</h2>
            <h3>Açıklama</h3>
            <p>{items.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitapDetay;
