"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { intialDishes } from '@/utils';


const Cart = () => {
  const [cart, setCart] = useState<{ [key: number]: any }>({});

  const handleRemoveFromCart = (dishId: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[dishId];
      return newCart;
    });
  };

  const handleUpdateQuantity = (dishId: number, quantity: number) => {
    setCart((prevCart) => ({ ...prevCart, [dishId]: quantity }));
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      <ul>
        {Object.keys(cart).map((dishId) => (
          <li key={dishId} className="mb-4">
            <h3 className="text-lg font-bold">{intialDishes.find((dish) => dish.id === parseInt(dishId))?.name}</h3>
            <p>Price: ₹{intialDishes.find((dish) => dish.id === parseInt(dishId))?.price}</p>
            <div>
              <Button onClick={() => handleRemoveFromCart(parseInt(dishId))}>Remove</Button>
              <Input type="number" value={cart[parseInt(dishId)]} onChange={(event) => handleUpdateQuantity(parseInt(dishId), parseInt(event.target.value))} />
            </div>
          </li>
        ))}
      </ul>
      <Button>Checkout</Button>
    </div>
  );
};

export default Cart;