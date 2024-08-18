"use client";

import { useState } from 'react';
import { Lock, User } from "lucide-react";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className='relative max-w-md w-[100rem] mx-auto p-4 md:p-6 lg:p-8 rounded-md shadow-md'>
                <h2 className="text-lg font-bold mb-4">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div className='flex items-end justify-between gap-3'>
                        <Button type="submit" variant="default">Login</Button>
                        <Button onClick={() => router.push('sign-up')} variant="outline">Don't have an account?</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page