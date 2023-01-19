import React from "react";
import '../styles/Home.css';
import { Icon } from '@iconify/react';


function UpdateProfile() {
    return (
        <>
            <header>

                <div className="navheader center">

                    <div className="navlogo">
                        <img src="https://assets.bettyblocks.com/d50a139e135346b6a3f784bade4500b8_assets/files/Mental_Startup_Logo" className="navlogo" />
                    </div>

                    <nav className="navbar">
                    </nav>

                    <div className="navbutton" style={{ top: '-13px' }}>
                        <Icon icon="bx-bxs-user-circle" style={{ fontSize: '50px', color: '#cccccc', padding: '20px 0px' }} /><br />
                    </div>

                </div>

            </header>

            <section>

                <div className="onboard">
                </div>

            </section>



            <section>

                <div className="contentsection" style={{ marginTop: '0px' }}>

                    <div className="left">
                        <Icon icon="bx-bxs-user-circle" style={{ fontSize: '100px', color: '#cccccc', padding: '20px 0px' }} /><br />
                        <div className="right absolute" style={{ top: '65%', left: '65%' }}>
                            <div className="dot pinkback center">
                            <Icon icon="ic-baseline-edit" style={{ fontSize: '15px', color: '#ffffff', padding: '20% 0%' }} /><br />
                            </div>
                        </div>
                    </div>

                    <div className="left" style={{ padding: '0px 20px' }}>

                        <h1 style={{ marginBottom: 0 }}>Full Name</h1>
                        <p>I'm a creator who just signed up for Mental Startup.</p>
                    </div>

                </div>


            </section>


            <section>

                <div className="contentsection" style={{ marginTop: 0 }}>

                    <div className="left">
                        <h2 className="right">User Profile</h2>
                    </div>

                    <div className="left borderleft" style={{ marginLeft: 20, padding: 20, width: '80%' }}>

                        <form>

                            <div className="halfsection">

                                <div className="halfsection">
                                    <label>First Name</label><br />
                                    <input type="text" placeholder="Full" className="eighty" /><br />
                                </div>

                                <div className="halfsection">
                                    <label>Last Name</label><br />
                                    <input type="text" placeholder="Name" className="eighty" /><br />
                                </div>

                                <label>Email</label><br />
                                <input type="text" placeholder="fullname@email.com" className="ninety" /><br />

                                <label>Phone</label><br />
                                <input type="text" placeholder="" className="ninety" /><br />

                                <label>Location</label><br />
                                <input type="text" placeholder="" className="ninety" /><br />

                                <label>Tagline</label><br />
                                <input type="text" placeholder="I am a creator who just signed up for Mental Startup." className="ninety" /><br />

                                <input type="submit" className="blueback" value="Save" />


                            </div>

                            <div className="halfsection">

                                <div style={{ paddingLeft: 50 }}>
                                    <label>What Are You Looking For?</label><br />
                                    <label className="container">Idea Generation
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Idea Validation
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">A Support Network
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Being Mentored
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Being Mentored
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Mentoring Others
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Partnering Up
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Getting Funding
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Project Management
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Building an MVP
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="container">Launch Guidance
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </div>


                            </div>

                        </form>

                    </div>

                </div>


            </section>

            <section>
                <div className="contentsection">
                </div>
            </section>
        </>
    );
}

export default UpdateProfile;
