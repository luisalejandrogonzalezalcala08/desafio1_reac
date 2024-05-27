import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const addCarrito = (pizza) => {
    const { id, price, name, img } = pizza;
    const productEncontrado = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productEncontrado >= 0) {
      carrito[productEncontrado].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const incrementQuantity = (id) => {
    const updatedCarrito = carrito.map((p) =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    );
    setCarrito(updatedCarrito);
  };

  const decrementQuantity = (id) => {
    const updatedCarrito = carrito
      .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
      .filter((p) => p.count > 0);

    setCarrito(updatedCarrito);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/pizzas.json");
      const pizzas = await response.json();
      setPizzas(pizzas);
    };
    getData();
  }, []);

  return (
    <PizzasContext.Provider
      value={{
        pizzas,
        carrito,
        setPizzas,
        addCarrito,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
