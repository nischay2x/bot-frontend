import React from 'react';
import "./header.css";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <a href="/some" className="navbar-brand no-big" style={{ maxWidth : "5rem" }}>
                    <img src="./images/bot_main_180.png" alt="bot_main" width="100%" />
                </a>
                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-around w-100">
                        <li className="nav-item">
                            <a className="nav-link" href="/some">Why Us?</a>
                        </li>
                        <li className="nav-item">
                            <a href="/some" className="nav-link">FAQs</a>
                        </li>
                        <li className="nav-item no-mid">
                            <a href="/" className="nav-link" style={{ maxWidth : "8rem" }}>
                                <img src="./images/bot_main_180.png" width="100%" alt="Be on time" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/some">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/some" className="nav-link">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
