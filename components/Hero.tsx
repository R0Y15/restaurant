import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <section className="flex items-center justify-between p-8 h-screen md:h-[50rem] bg-[#fef1e6]">
            <div className='flex container flex-row justify-between items-center mx-auto'>
                <div className="absolute left-10 md:left-20 max-w-xl">
                    <h1 className="text-6xl font-bold">
                        Welcome to <span className="text-[#ff8c00]">Restaurant</span>
                    </h1>
                    <p className="mt-4 text-gray-600">
                    Step into a world of flavors at Restaurant, where every dish is a masterpiece and every meal is an unforgettable experience. Nestled in the heart of Indore, our restaurant is a haven for food enthusiasts and casual diners alike.
                    </p>
                    <Button className='bg-[#FF8C00] hover:bg-[#9e6d31] mt-6' variant="default">
                        View Menu
                    </Button>
                </div>
                <div className="absolute right-0 hidden md:flex top-[7rem]">
                    <img
                        src="/hero.svg"
                        alt="Restaurant"
                        className="rounded-lg"
                        width="800"
                        height="500"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero