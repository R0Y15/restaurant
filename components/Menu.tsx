"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { intialDishes } from '@/utils';
import Image from 'next/image';


const Menu = () => {
    const [cart, setCart] = useState<{ [key: number]: number }>({});

    const handleAddToCart = (dishId: number) => {
        setCart((prevCart) => ({ ...prevCart, [dishId]: (prevCart[dishId] || 0) + 1 }));
    };

    const handleRemoveFromCart = (dishId: number) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[dishId] > 1) {
                newCart[dishId]--;
            } else {
                delete newCart[dishId];
            }
            return newCart;
        });
    };

    return (
        <section id='menu' className='flex flex-col mx-auto items-center justify-center mt-[10rem]'>
            <h2 className="text-xl font-light mb-2 border-b-2 border-t-2 border-[#FF8C00] tracking-widest">Menu</h2>
            <h1 className="text-4xl font-bold mb-2 tracking-wider">Today's Special</h1>
            <p className='text-md font-light mb-4'>Checkout the chef's Special and todays hot menus that are mind blowing and mouth watering at the same time</p>
            <div className="flex mx-[10rem] items-center justify-center lg:p-8 rounded-md">
                <div className='mx-auto items-center justify-center'>
                    <ul className='flex flex-wrap gap-5'>
                        {intialDishes.map((dish) => (
                            <li key={dish.id} className="mb-4 w-[20rem] rounded-xl shadow-lg">
                                <Image
                                    src={dish.img}
                                    alt={dish.name}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform ease-in-out duration-150"
                                />
                                <div className='p-3'>
                                    <h3 className="text-lg font-bold">{dish.name}</h3>
                                    <h5 className="text-md font-medium">{dish.desc}</h5>
                                    <p className='mt-5'>Price: ₹{dish.price}</p>
                                    <div className='flex justify-between'>
                                        <Button className='bg-[#FF8C00] hover:bg-[#9e6d31]' onClick={() => handleAddToCart(dish.id)}>Add to Cart</Button>
                                        {cart[dish.id] > 0 && (
                                            <div className=''>
                                                <Button className='bg-[#FF8C00] hover:bg-[#9e6d31]' onClick={() => handleRemoveFromCart(dish.id)}>-</Button>
                                                <span className="mx-2">{cart[dish.id]}</span>
                                                <Button className='bg-[#FF8C00] hover:bg-[#9e6d31]' onClick={() => handleAddToCart(dish.id)}>+</Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Menu;