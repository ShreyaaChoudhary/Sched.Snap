import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import './Homepage.css'; // Make sure to create and import a separate CSS file
import Clock from "../Components/Clock";
import Cursor from "../Components/Cursor";
function Homepage() {
    
    return (
        <>
        <Cursor/>
            <header>
                <nav className="navbar">
                    <div className="ll">
                        <h1 className="logo">Sched.Snap</h1>
                        <div className="logoimg"><img src="https://tricky-whale-c0c.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb998477-7e9c-4dd3-8599-22757da56f08%2F021d5faf-6cd3-4105-849a-e60e7ccb0774%2F8d48ec1e8e674e126c2da793328c125d-removebg-preview.png?table=block&id=2a9517c5-9245-4af0-84c9-951b68d7345a&spaceId=eb998477-7e9c-4dd3-8599-22757da56f08&width=250&userId=&cache=v2" alt="" /></div>
                    </div>
                    <div className="cl">
                        <Clock />
                    </div>

                </nav>
                <div className="homepage-section"></div>
                <div>
                    <div className="cute">
                        <img src="https://jet-rubidium-b1f.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4c58246c-9134-4307-9d37-cb174dab0f3b%2F7314acd2-f977-4c5a-a6fa-3e4be209448d%2Fsmiski_laptop.png?table=block&id=3ef29491-0c81-46a3-89f0-24be1bcfd90b&spaceId=4c58246c-9134-4307-9d37-cb174dab0f3b&width=250&userId=&cache=v2" id="cute1" alt="" />
                    </div>
                </div>
            </header>
            <section className="sec1">
                <div className="letters">
                <p4 id="con">Sophomore Year | FALL '24</p4>
                </div>
                <div className="row">

                    <div className="col">
                        <img src="https://i.pinimg.com/736x/85/b2/a5/85b2a507ff7a693f1f710a0bd5030143.jpg" alt="" width="250px" />
                        <div>
                            <p>Quick Links</p>
                        </div>
                        <div>
                            <p>Important Info</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="col">
                        <h3>My classes :</h3>
                        <div className="fin">
                            <div className="c1">
                                <div className="block">
                                    <div className="Wrapper">
                                        <img src="https://i.pinimg.com/736x/f1/b9/19/f1b9195e003623deea2a0ac836d751e2.jpg" alt="" width="180px" height="120px" />
                                    </div>
                                    <div className="caption">
                                        <p2 className="content"><FontAwesomeIcon icon={faFile} /><span>&nbsp;Class #1</span></p2>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="Wrapper">
                                        <img src="https://i.pinimg.com/enabled_lo/736x/8f/4a/01/8f4a01779a11aeab635c4b50133163b8.jpg" alt="" width="180px" height="130px" />

                                    </div>
                                    <div className="caption">
                                        <p2 className="content"><FontAwesomeIcon icon={faFile} /><span>&nbsp;Class #3</span></p2>
                                    </div>
                                </div>
                            </div>
                            <div className="c1">
                                <div className="block">
                                    <div className="Wrapper">
                                        <img src="https://i.pinimg.com/564x/6a/60/ee/6a60eee0a848654795c7b30e62b1f256.jpg" alt="" width="180px" height="120px" />
                                    </div>
                                    <div className="caption">
                                        <p2 className="content"><FontAwesomeIcon icon={faFile} /><span>&nbsp;Class #2</span></p2>

                                    </div>
                                </div>
                                <div className="block">
                                    <div className="Wrapper">
                                        <img src="https://i.pinimg.com/736x/27/c3/d9/27c3d9e80b083f5b969af4dd47b4240d.jpg" alt="" width="180px" height="120px" />

                                    </div>
                                    <div className="caption">
                                        <p2 className="content"><FontAwesomeIcon icon={faFile} /><span>&nbsp;Class #4</span></p2>

                                    </div>
                                </div>
                            </div>
                            <div className="c2">
                                <button type="button" class="button">
                                    <p class="button__text">more?</p>
                                    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <iframe
                            src="https://open.spotify.com/embed/playlist/6TMbuOUZduehKWfjgFnX4N?utm_source=generator"
                            width="260"
                            height="360"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media">
                        </iframe>
                    </div>
                </div>


            </section>
        </>
    );
}
export default Homepage;

