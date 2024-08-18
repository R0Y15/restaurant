"use client";

import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Reservation = () => {
    const router = useRouter();

    const [text, setText] = useState('');
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [person, setPerson] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className='container'>
            <div className="flex items-center justify-center bg-white">
                <div className='relative max-w-md w-[200rem] mx-auto p-4 md:p-6 lg:p-8 rounded-md shadow-md'>
                    <h2 className="text-lg font-bold mb-4">Book a Table</h2>
                    <form>
                        <div className="flex flex-row gap-4">
                            <div className="mb-4">
                                <Label htmlFor="text">Name</Label>
                                <Input type="text" id="name" value={text} onChange={(event) => setName(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="mb-4">
                                <Label htmlFor="number">Person</Label>
                                <Input type="number" id="person" value={text} onChange={(event) => setPerson(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="number">Timing</Label>
                                <Input type="time" id="time" value={text} onChange={(event) => setTime(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="number">Date</Label>
                                <Input type="date" id="date" value={text} onChange={(event) => setDate(event.target.value)} />
                            </div>
                        </div>

                        <div className='flex items-end justify-between gap-3 mt-5'>
                            <Button type="submit" className='border-2 border-[#FF8C00]' variant={'outline'}>Book Now</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Reservation