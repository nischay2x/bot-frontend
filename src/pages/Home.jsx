import React, { useEffect } from 'react';
import CONFIG from "../config.json";
import "./home.css";

export default function Home() {
    useEffect(() => {
        console.log("Home");
    })
    return (
        <main>
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
        </main>
    );
}
