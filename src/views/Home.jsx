import React, { useContext } from "react";
import { PizzasContext } from "../PizzaProvider";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { pizzas, addCarrito } = useContext(PizzasContext);
  const navigate = useNavigate();

  const pizzaDetail = (id) => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Pizzas Mamma Mia!</h1>
      </div>
      <div className="row">
        {pizzas &&
          pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-4">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "2px black solid",
                  marginTop: "10px",
                }}
              >
                <img src={pizza.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 className="card-title">{pizza.name}</h2>
                  <hr />
                  <h5>Ingredientes:</h5>
                  <ul className="card-text">
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>🍕{ingredient}</li>
                    ))}
                  </ul>
                  <hr />
                  <h5 style={{ textAlign: "center" }}>${pizza.price}</h5>
                  <div className="d-flex justify-content-around">
                    <button
                      className="btn btn-primary"
                      onClick={() => pizzaDetail(pizza.id)}
                    >
                      Ver Más
                    </button>
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
          ))}
      </div>
    </div>
  );
};

export default Home;
