"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { roles } from '@/utils';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [description, setDescription] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log({ name, email, password, role, description });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="max-w-md w-[100rem] mx-auto p-4 md:p-6 lg:p-8 rounded-md shadow-md">
                <h2 className="text-lg font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
                    </div>
                    <div className="mb-4">
                        <Label>Role</Label>
                        <Select value={role} onValueChange={(value) => setRole(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                            <SelectContent>
                                {roles.map((role) => (
                                    <SelectItem key={role.value} value={role.value}>{role.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                    </div>
                    <div className='flex items-end justify-between gap-3'>
                        <Button type="submit" variant="default">Register</Button>
                        <Button onClick={() => router.push('sign-in')} variant="outline">Already a Member?</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page