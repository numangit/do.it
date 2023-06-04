import React from 'react';
import Heading from './Heading/Heading';
import Testimonial from './Testimonial/Testimonial';
import Subscribe from './Subscribe/Subscribe';
import Partners from './Partners/Partners';
import Services from './Services/Services';
import Plans from './Plans/Plans';
import Higlights from './Higlights/Higlights';
import FAQ from './FAQ/FAQ';
import Team from './Team/Team';
import Stats from './Stats/Stats';

const Home = () => {
    return (
        <>
            <Heading></Heading>
            <Services></Services>
            <Higlights></Higlights>
            <Stats></Stats>
            <Plans></Plans>
            <Testimonial></Testimonial>
            <Team></Team>
            <FAQ></FAQ>
            <Partners></Partners>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;