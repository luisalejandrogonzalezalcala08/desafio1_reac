import React, { useContext } from "react";
import { PizzasContext } from "../PizzaProvider";

const ShoppingCar = () => {
  const { carrito, incrementQuantity, decrementQuantity } =
    useContext(PizzasContext);

  const total = carrito.reduce(
    (sum, item) => sum + (item.price || 0) * item.count,
    0
  );

  return (
    <div className="container mt-5">
      <h2>Detalles del pedido:</h2>
      <div className="list-group">
        {carrito.map((item) => (
          <div
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "50px", marginRight: "10px" }}
              />
              <span>{item.name}</span>
            </div>
            <span className="text-success">
              ${(item.price || 0).toFixed(2)}
            </span>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </button>
              <span className="mx-2">{item.count}</span>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <h4>Total: ${total.toFixed(2)}</h4>
        <button className="btn btn-success">Ir a Pagar</button>
      </div>
    </div>
  );
};

export default ShoppingCar;
