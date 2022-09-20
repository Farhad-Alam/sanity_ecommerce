import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [productItems, setProductItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQnt, setTotalQnt] = useState(0);
  const [qnt, setQnt] = useState(1);
  let checkProduct;
  let index;

  const incQnt = () => {
    setQnt(qnt + 1);
  };
  const decQnt = () => {
    setQnt(qnt === 1 ? 1 : qnt - 1);
  };

  const addProduct = (product, quantity) => {
    const checkProduct = productItems.find((item) => item._id === product._id);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQnt((prevTotalQnt) => prevTotalQnt + quantity);
    if (checkProduct) {
      const updateProduct = productItems.map((item) => {
        if (item._id === product._id)
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
      });
      setProductItems(updateProduct);
    } else {
      product.quantity = quantity;
      setProductItems([...productItems, { ...product }]);
    }
    toast.success(`${qnt} ${product.name} added successfully`);
  };

  const toggleBtn = (id, value) => {
    checkProduct = productItems.find((item) => item._id === id);
    index = productItems.findIndex((item) => item._id === id);
    const updateProduct = productItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setProductItems([
        ...updateProduct,
        { ...checkProduct, quantity: checkProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + checkProduct.price);
      setTotalQnt((prevTotalQnt) => prevTotalQnt + 1);
    } else {
      if (checkProduct.quantity > 1) {
        setProductItems([
          ...updateProduct,
          { ...checkProduct, quantity: checkProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - checkProduct.price);
        setTotalQnt((prevTotalQnt) => prevTotalQnt - 1);
      }
    }
  };

  const removeProduct = (id) => {
    const checkProduct = productItems.find((item) => item._id === id);
    const newProduct = productItems.filter((item) => item._id !== id);
    setProductItems(newProduct);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - checkProduct.price * checkProduct.quantity
    );
    setTotalQnt((prevTotalQnt) => prevTotalQnt - checkProduct.quantity);
  };

  return (
    <Context.Provider
      value={{
        showModal,
        setShowModal,
        productItems,
        setProductItems,
        totalPrice,
        setTotalPrice,
        totalQnt,
        setTotalQnt,
        qnt,
        incQnt,
        decQnt,
        addProduct,
        toggleBtn,
        removeProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
