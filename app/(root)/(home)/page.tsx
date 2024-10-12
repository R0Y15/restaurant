
import AdminUtils from '@/components/AdminUtils'
import Cart from '@/components/Cart'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Navbar from '@/components/navbar'
import Reservation from '@/components/Reservation'
import Service from '@/components/Service'
import React from 'react'


const page = () => {
    return (
        <section>
            <Navbar />
            <Hero />
            <Details />
            <Menu />
            {/* <Service /> */}
            {/* <AdminUtils /> */}
            {/* <Test /> */}
            {/* <Cart /> */}
            <Reservation />
            <Footer />
        </section>
    )
}

export default page