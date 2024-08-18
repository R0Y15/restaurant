"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './modeToggle';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <a href="#">Restaurant</a>
                </div>
                <div className="hidden md:flex space-x-4 justify-center items-center">
                    <a href="#" className="text-white hover:text-gray-400">Home</a>
                    <a href="#" className="text-white hover:text-gray-400">Menu</a>
                    <a href="#" className="text-white hover:text-gray-400">About</a>
                    <a href="#" className="text-white hover:text-gray-400">Contact</a>
                    <Button variant="outline" onClick={() => router.push('sign-in')}>Login</Button>
                    <ModeToggle />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-5">
                    <a href="#" className="block text-white hover:text-gray-400 p-2">Home</a>
                    <a href="#" className="block text-white hover:text-gray-400 p-2">Menu</a>
                    <a href="#" className="block text-white hover:text-gray-400 p-2">About</a>
                    <a href="#" className="block text-white hover:text-gray-400 p-2">Contact</a>
                    <Button variant="outline">Login</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;