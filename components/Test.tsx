"use client";

import { useState } from 'react';
import { Camera } from "lucide-react";
import { Select, SelectContent, SelectItem } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { intialDishes } from '@/utils';
import { Cart } from '@/components';


const roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Sub Admin' },
    { id: 3, name: 'User' },
];

const Test = () => {
    const [cart, setCart] = useState<{ [key: number]: number }>({});
    const [newDish, setNewDish] = useState({ name: '', price: 0, image: '' });
    const [role, setRole] = useState('User');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleAddToCart = (dish: { id: number, name: string, price: number }) => {
        setCart((prevCart) => ({ ...prevCart, [dish.id]: (prevCart[dish.id] || 0) + 1 }));
    };

    const handleRemoveFromCart = (dish: { id: number, name: string, price: number }) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[dish.id] > 1) {
                newCart[dish.id]--;
            } else {
                delete newCart[dish.id];
            }
            return newCart;
        });
    };

    const handleAddNewDish = () => {
        if (isAdmin) {
            dishes.push({ id: dishes.length + 1, ...newDish });
            setNewDish({ name: '', price: 0, image: '' });
        }
    };

    const handleRemoveDish = (dish: { id: number, name: string, price: number }) => {
        if (isAdmin) {
            dishes.splice(dishes.indexOf(dish), 1);
        }
    };

    const handleRoleChange = (role: string) => {
        setRole(role);
        setIsAdmin(role === 'Admin');
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold">Restaurant App</h1>
                <Select value={role} onValueChange={(value) => handleRoleChange(value)}>
                    <SelectContent>
                        {roles.map((role) => (
                            <SelectItem key={role.id} value={role.name}>{role.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {isAdmin && (
                <div className="mb-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Dish</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input
                                type="text"
                                value={newDish.name}
                                onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
                                placeholder="Dish Name"
                            />
                            <Input
                                type="number"
                                value={newDish.price}
                                onChange={(e) => setNewDish({ ...newDish, price: Number(e.target.value) })}
                                placeholder="Price"
                            />
                            <Input
                                type="text"
                                value={newDish.image}
                                onChange={(e) => setNewDish({ ...newDish, image: e.target.value })}
                                placeholder="Image URL"
                            />
                            <Button onClick={handleAddNewDish}>Add Dish</Button>
                        </CardContent>
                    </Card>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dishes.map((dish) => (
                    <Card key={dish.id}>
                        <CardHeader>
                            <CardTitle>{dish.name}</CardTitle>
                            <p className="text-sm text-gray-500">₹{dish.price}</p>
                        </CardHeader>
                        <CardContent>
                            {/* <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" /> */}
                            <div className="flex justify-between mt-4">
                                <Button onClick={() => handleAddToCart(dish)}>Add to Cart</Button>
                                <Button variant="destructive" onClick={() => handleRemoveDish(dish)}>Remove</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
                <h2 className="text-lg font-bold mb-2">Cart</h2>
                <ul>
                    {Object.keys(cart).map((dishId) => (
                        <li key={dishId} className="flex justify-between mb-2">
                            <span>{dishes.find((dish) => dish.id === Number(dishId)).name}</span>
                            <span> x {cart[dishId]}</span>
                            <Button onClick={() => handleRemoveFromCart(dishes.find((dish) => dish.id === Number(dishId)))}>Remove</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Test;