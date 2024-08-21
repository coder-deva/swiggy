import { useEffect, useState } from "react";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded mb-4"
              />
              <div className="text-center">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No items in the cart.</p>
      )}
    </div>
  );
};
