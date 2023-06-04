import React from 'react';
import Heading from './Heading/Heading';
import Testimonial from './Testimonial/Testimonial';
import Subscribe from './Subscribe/Subscribe';
import Partners from './Partners/Partners';
import Services from './Services/Services';
import Plans from './Plans/Plans';
import Higlights from './Higlights/Higlights';
import FAQ from './FAQ/FAQ';

const Home = () => {
    return (
        <>
            <Heading></Heading>
            <Services></Services>
            <Higlights></Higlights>
            <Plans></Plans>
            <Testimonial></Testimonial>
            <FAQ></FAQ>
            <Subscribe></Subscribe>
            <Partners></Partners>
        </>
    );
};

export default Home;