import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice.jsx"; // ✅ ruta corregida

const CartItems = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  // 1️⃣ Calcular total de todos los artículos
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const price = parseFloat(item.cost.substring(1)); // "$12" -> 12
      total += price * item.quantity;
    });
    return total.toFixed(2);
  };

  // 2️⃣ Calcular subtotal de un producto
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  // 3️⃣ Continuar comprando
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  // 4️⃣ Incrementar cantidad
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // 5️⃣ Decrementar cantidad
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // 6️⃣ Eliminar producto
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // 7️⃣ Checkout (solo placeholder)
  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      {cart.map((item) => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} width="120" />
          <div>
            <h3>{item.name}</h3>
            <p>{item.cost}</p>
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
            <p>Total: ${calculateTotalCost(item)}</p>
            <button onClick={() => handleRemove(item)}>Delete</button>
          </div>
        </div>
      ))}

      <div className="cart-actions">
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
