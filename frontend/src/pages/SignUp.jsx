import '../styles/Home.css';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';

function SignUp() {

    const [myIndex, setMyIndex] = useState(0);

    useEffect(() => {
      function carousel() {
        setMyIndex((prevIndex) => (prevIndex + 1) % 3);
      }
  
      const intervalId = setInterval(carousel, 4500);
  
      return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <div>
                <div className="halfsection tall center shadow" style={{ zIndex: 999 }}>
                    <div style={{ marginTop: '15%' }}>
                        <img src="https://assets.bettyblocks.com/d50a139e135346b6a3f784bade4500b8_assets/files/Mental_Startup_Logo" className="logo" />
                    </div>
                    <div style={{ marginTop: 50 }}>
                        <h1>Sign Up for Mental Startup</h1>
                    </div>
                    <div>
                        <form>
                            <input type="text" placeholder="Email" style={{ width: '60%', margin: '15px' }} /><br />
                            <input type="text" placeholder="Password" style={{ width: '60%', margin: '15px' }} /><br />
                            <input type="submit" className="blueback" value="Sign Up" />
                        </form>
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <h4 style={{ fontWeight: 800 }}>Already Have an Account? Log In</h4>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <h4>By signing up I agree to the Privacy Policy and the Terms of Service<br />
                            2020 All Rights Reserved. Mental Startup</h4>
                    </div>
                </div>

                <div className="slideshow halfsection tall center pinkgradient" style={{ display: myIndex === 0 ? 'block' : 'none' }}>
                    <div style={{ marginTop: '30%' }}>
                        <Icon icon="fa-solid:people-carry" style={{ width: '100px', fontSize: '100px', color: '#ffffff' }} /><br />
                    </div>
                    <div>
                        <h1 className="whitetext" style={{ lineHeight: '40px' }}>More Than a Social Network<br /><span style={{ fontWeight: 100 }}>You Need a Support Network</span></h1>
                    </div>
                    <div>
                        <h2 className="whitetext">Join for free access to other entrepreneurs and experts<br />to generate and validate ideas together.</h2>
                    </div>
                </div>
                <div className="slideshow halfsection tall center greengradient" style={{ display: myIndex === 1 ? 'block' : 'none' }}>
                    <div style={{ marginTop: '30%' }}>
                        <Icon icon="fa-regular:lightbulb" style={{ width: '100px', fontSize: '100px', color: '#ffffff' }} /><br />
                    </div>
                    <div>
                        <h1 className="whitetext" style={{ lineHeight: '40px' }}>From Idea to MVP<br /><span style={{ fontWeight: 100 }}>You Need a Project Guide</span></h1>
                    </div>
                    <div>
                        <h2 className="whitetext">Join for free access to the Mental Startup<br />Project Kit to help you get from idea to launch. </h2>
                    </div>
                </div>
                <div className="slideshow halfsection tall center bluegradient" style={{ display: myIndex === 2 ? 'block' : 'none' }}>
                    <div style={{ marginTop: '30%' }}>
                        <Icon icon="vaadin-handshake" style={{ width: '100px', fontSize: '100px', color: '#ffffff' }} /><br />
                    </div>
                    <div>
                        <h1 className="whitetext" style={{ lineHeight: '40px' }}>Use Your Skills to Help Others<br /><span style={{ fontWeight: 100 }}>You Need a Partnership</span></h1>
                    </div>
                    <div>
                        <h2 className="whitetext">Join for free access to partnership opportunities with<br />entrepreneurs looking for their other half.</h2>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SignUp;
