import React from 'react';
import Heading from './Heading/Heading';
import Testimonial from './Testimonial/Testimonial';
import Subscribe from './Subscribe/Subscribe';
import Partners from './Partners/Partners';
import Services from './Services/Services';
import Plans from './Plans/Plans';

const Home = () => {
    return (
        <>
            <Heading></Heading>
            <Services></Services>
            <Plans></Plans>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
            <Partners></Partners>
        </>
    );
};

export default Home;