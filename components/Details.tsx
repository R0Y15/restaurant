import { RestaurantDetails } from '@/utils'
import React from 'react'

const Details = () => {
  return (
    <section className="container mt-[15rem] items-start justify-start">
      <div className="mx-auto md:w-[80%]">
        <ul className='flex flex-col gap-3 md:flex-row items-start justify-between'>
          {RestaurantDetails.map((item, idx) => (
            <li className='gap-10' key={idx}>
              <div className="flex items-center justify-center gap-3">
                <div className="flex rounded-full border border-red-500 p-2 bg-[#FF8C00]">
                  <img src={item.logo} alt="icon" className="w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{item.Heading}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Details