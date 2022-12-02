import { useState, createContext } from "react";

const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(itemData) {
    let itemFound = cart.find((itemInCart) => itemInCart.id === itemData.id);

    if (itemFound) {
      let newCart = cart.map((itemInCart) => {
        if (itemInCart.id === itemData.id) {
          itemInCart.count += itemData.count;
          return itemInCart;
        } else {
          return itemInCart;
        }
      });

      setCart(newCart);
    } else {
      const newCart = [...cart];
      newCart.push(itemData);
      setCart(newCart);
    }
  }

  function totalItemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function totalPriceInCart() {
    let totalPrice = 0;
    cart.forEach((itemInCart) => {
      totalPrice = totalPrice + itemInCart.count * Number(itemInCart.price);
    });
    return totalPrice;
  }

  function removeItem(itemId) {
    let itemFound = cart.find((itemInCart) => itemInCart.id === itemId.id);

    if (itemFound) {
      let newCart = cart.map((itemInCart) => {
        if (itemInCart.id === itemId.id) {
          itemInCart.count += itemId.count;
          return itemInCart;
        } else {
          return itemInCart;
        }
      });

      setCart(newCart);
    } else {
      const newCart = [...cart];
      newCart.pop(itemId);
      setCart(newCart);
    }
  }

  function clear() {
    setCart([]);
  }

  const value = {
    cart,
    addToCart,
    totalItemsInCart,
    removeItem,
    totalPriceInCart,
    clear,
  };


  return (

    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}

export default cartContext;