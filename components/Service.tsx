import { services } from '@/utils'
import Image from 'next/image'
import React from 'react'

const Service = () => {
    return (
        <section className='container h-[20rem] bg-[#FFF6EA] p-12'>
            <div className="flex flex-row mx-auto items-center justify-between gap-8">
                <div className="flex flex-col items-start w-[30%]">
                    <h3 className='border-b-2 border-t-2 border-black'>What we offer</h3>
                    <h1 className='font-bold text-4xl'>Our Awesome Services</h1>
                    <p className='font-medium'>Please feel free to ask anything that you have in your mind Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex w-[60%] mx-auto left-[50%]">
                    <ul className='flex flex-row gap-10'>
                        {services.map((service, idx) => (
                            <li key={idx} className='flex flex-col'>
                                <div className='border border-red-500 bg-[#292E36] p-10 items-center justify-center'>
                                    <Image
                                        src={service.logo}
                                        alt='service'
                                        width={50}
                                        height={50}
                                    />
                                    <p className='text-white'>{service.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Service