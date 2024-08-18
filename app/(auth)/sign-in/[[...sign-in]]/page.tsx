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
                <h2 className="text-lg font-bold mb-4">Login</h2>
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

            <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center">
                <p>Are you an Admin? <span className="cursor-pointer hover:text-blue-400 ease-in-out" onClick={() => router.push('admin-page')}>Login here</span></p>
            </div>
        </div>
    )
}

export default page