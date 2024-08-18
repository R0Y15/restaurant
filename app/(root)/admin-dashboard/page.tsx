"use client";

import { useState } from 'react';
import { Lock, User } from "lucide-react";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const page = () => {

    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'user' },
    ]);

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userId = event.target.dataset.userId;
        const newRole = event.target.value;
        setUsers((prevUsers) => prevUsers.map((user) => user.id === parseInt(userId ?? "", 10) ? { ...user, role: newRole } : user));
    };


    return (
        <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-left">Email</th>
                        <th className="text-left">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <RadioGroup defaultValue={user.role} onChange={handleRoleChange} data-user-id={user.id}>
                                    <RadioGroupItem value="admin">Admin</RadioGroupItem>
                                    <RadioGroupItem value="sub-admin">Sub Admin</RadioGroupItem>
                                    <RadioGroupItem value="user">User</RadioGroupItem>
                                </RadioGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default page