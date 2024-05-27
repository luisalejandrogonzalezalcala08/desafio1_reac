import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzasContext } from "../PizzaProvider";

const Details = () => {
  const { id } = useParams();
  const { pizzas, addCarrito } = useContext(PizzasContext);
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    if (pizzas.length > 0) {
      const foundPizza = pizzas.find((pizza) => pizza.id === id);
      setPizza(foundPizza);
    }
  }, [pizzas, id]);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={pizza.img} className="img-fluid" alt={pizza.name} />
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{pizza.name}</h2>
              <hr />
              <p className="card-text">{pizza.desc}</p>
              <h5>Ingredientes:</h5>
              <ul className="card-text">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕{ingredient}</li>
                ))}
              </ul>
              <hr />
              <h5 className="card-text" style={{ textAlign: "center" }}>
                Precio: ${pizza.price}
              </h5>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-success"
                  onClick={() => addCarrito(pizza)}
                >
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
