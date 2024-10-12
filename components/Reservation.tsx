"use client";

import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Reservation = () => {
    const router = useRouter();

    // const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [person, setPerson] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className='container'>
            <div className="flex items-center justify-center bg-system">
                <div className='relative max-w-lg  mx-auto p-4 md:p-6 lg:p-8 rounded-md shadow-md shadow-gray-800 border'>
                    <h2 className="text-lg font-bold flex  justify-center mb-4">Book a Table</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-row gap-4">
                            <div className="mb-4">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="mb-4">
                                <Label htmlFor="number">Person</Label>
                                <Input type="number" id="person" value={person} onChange={(event) => setPerson(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="number">Timing</Label>
                                <Input type="time" id="time" value={time} onChange={(event) => setTime(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="number">Date</Label>
                                <Input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} />
                            </div>
                        </div>

                        <div className='flex justify-center gap-3 mt-5'>
                            <Button type="submit" className='border-2 w-40 border-[#FF8C00]' variant={'outline'}>Book Now</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Reservation