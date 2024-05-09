"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext();

function ProductProvider({ children }) {
  const [cart, setCart] = useState(function () {
    const storedData = localStorage.getItem("cart") || [];
    return JSON.parse(storedData);
  });
  console.log(cart);

  function addToCart(newProduct) {
    // Update cart state immutably by creating a new array with the newProduct added
    const searchCart = cart?.find((pro) => pro.id === newProduct.id);
    if (searchCart === undefined) {
      setCart([...cart, newProduct]);
    } else {
      return null;
    }
  }

  function updateCartPrice(id) {
    const selectedItem = cart.find((item) => item.id === id);
    const updatePrice =
      Number(selectedItem.price) * Number(selectedItem.quantity);
    return updatePrice;
  }

  function calcTotalPrice() {
    const priceArr = cart.map(
      (cartItem) => +cartItem.price * +cartItem.quantity
    );
    return priceArr.reduce((acc, cur) => acc + cur, 0);
  }

  function increaseQuantity(id) {
    // Update cart state immutably by mapping over the cart array
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    // Update cart state immutably by mapping over the cart array
    const selectedItem = cart.find((item) => item.id === id);

    selectedItem.quantity > 1
      ? setCart(
          cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        )
      : setCart((cart) => cart.filter((item) => item.id !== id));
    updateCartPrice(id);
  }

  useEffect(() => {
    // Update local storage whenever cart state changes
    localStorage.setItem("cart", JSON.stringify(cart));
    // Calculate total price whenever cart state changes
  }, [cart]);

  return (
    <productContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        calcTotalPrice,
        updateCartPrice,
      }}
    >
      {children}
    </productContext.Provider>
  );
}

function useProducts() {
  const context = useContext(productContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}

export { useProducts, ProductProvider };
