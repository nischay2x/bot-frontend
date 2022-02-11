import React, { useEffect } from 'react';
import CONFIG from "../config.json";
import "./home.css";

export default function Home() {
    useEffect(() => {
        console.log("Home");
    })
    return (
        <main className='home-main'>
            <section style={{ height: '100vh' }} className="hero">
                <div id="hero-carousel" className="carousel carousel-fade slide" data-interval="2500" data-ride="carousel" data-pause="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ backgroundImage: `url(${CONFIG.imgBase + '/honda_1280.jpg'})` }}>
                            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                <div>
                                    <h1 className="display-3 text-center text-white hero-text">
                                        Don't Buy, Just Rent It
                                    </h1>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ backgroundImage: `url(${CONFIG.imgBase + '/enfield_1280.jpg'})` }}>
                            <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                <div className="text-center">
                                    <h1 className="display-3 text-white hero-text">Book. <br /> Use. <br />  Return.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ backgroundImage: `url(${CONFIG.imgBase + '/harley_1280.jpg'})` }}>
                            <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                <div className="text-center">
                                    <h1 className="display-3 text-white hero-text">Monthly Subscriptions</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper">
                <div className="container rounded">
                    <div className="text-center py-4">
                        <h1>About Us</h1>
                    </div>
                    <div className="about-info bg-dark p-4">
                        <p>
                            <span className='text-big'>Be On Time</span> is Chhattisgarh’s first licensed rental bike service startup that
                            offers diversified and wide range of two-wheelers on rent. We are committed in
                            providing flexible and smooth service to our customers. Bike Riders who have
                            passion to ride different bikes have landed in the right place. We offer hourly,
                            daily, weekly, monthly packages to our riders so you can choose your ride
                            duration according to your preference.
                        </p>
                        <p>
                            Go on a ride and make memories by hiring your favorite bike with <span className='text-big'> Be On Time </span> at affordable rates. We aim at maximizing our customer’s satisfaction
                            and comfort by providing great deals with minimum documentation. Prioritizing
                            customer’s safely and wellness with our every ride. <span className='text-big'> Be On Time </span> has solution
                            for all your problems, either running out of time or short of money, we will <span className='text-big'> Be On Time </span> with our hassle free services.
                        </p>
                        <p>
                            Bored with quietude of life? So why stop yourself because of the hitches! Stop
                            binding yourself and let’s get started! We are offering services all across the city
                            of <span className="text-big"> Bilaspur, Chhattisgarh.</span>
                        </p>
                        <div className="text-center bg-warning py-1">
                            <span className='text-big text-dark'>
                                Race the Rain, 
                                Ride the Wind, 
                                Chase Sunset, 
                                Only a Biker Understands.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
