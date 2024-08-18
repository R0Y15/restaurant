"use client";


import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { intialDishes } from '@/utils';

const AdminUtils = () => {
    const [dishes, setDishes] = useState(intialDishes);

    const [newDishName, setNewDishName] = useState('');
    const [newDishPrice, setNewDishPrice] = useState('');

    const handleAddDish = () => {
        setDishes((prevDishes) => [...prevDishes, { id: prevDishes.length + 1, name: newDishName, price: parseFloat(newDishPrice) }]);
        setNewDishName('');
        setNewDishPrice('');
    };

    const handleRemoveDish = (dishId: number) => {
        setDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== dishId));
    };

    return (
        <section className='flex flex-col items-center justify-center min-h-screen bg-white'>
            <div className="max-w-md w-[100rem] mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-md shadow-md">
                <h2 className="text-lg font-bold mb-4">Admin</h2>
                <h3 className="text-lg font-bold mb-3">Modify Menu</h3>
                <div className="flex flex-col gap-3">
                    <Label htmlFor='text'>Dish Name</Label>
                    <Input type="text" value={newDishName} onChange={(event) => setNewDishName(event.target.value)} />
                    <Label htmlFor='number'>Price</Label>
                    <Input type="number" value={newDishPrice} onChange={(event) => setNewDishPrice(event.target.value)} />
                    <Button onClick={handleAddDish}>Add Dish</Button>
                </div>
            </div>
            <div className='mt-10'>
                <h3 className="text-lg font-bold mb-2">Availabe Dishes</h3>
                <div className="flex max-w-screen-xl">
                    <ul className='flex flex-wrap gap-5'>
                        {dishes.map((dish) => (
                            <li key={dish.id} className="flex flex-col mb-4 w-[15rem] rounded-xl p-3 gap-2 shadow-md">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-bold">{dish.name}</h3>
                                    <p>Price: ₹{dish.price}</p>
                                </div>
                                <div className="mt-auto">
                                    <Button onClick={() => handleRemoveDish(dish.id)}>Remove</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AdminUtils;