
import React from "react";
import { NavLink, Link } from "react-router-dom";

import { Icon } from '@iconify/react';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <header>

        <div className="navheader center">

          <div className="navlogo">
            <Link to="/" relative="path">
              <img src="https://assets.bettyblocks.com/d50a139e135346b6a3f784bade4500b8_assets/files/Mental_Startup_Logo" className="navlogo" />
            </Link>
          </div>

          <nav className="navbar">
            <Link to="/idea_onboard" relative="path">Ideas</Link>
            <Link to="/next_steps" relative="path">Onboard</Link>
            <Link to="/project_onboard" relative="path">Project</Link>
            <Link to="/update_profile" relative="path">Profile</Link>
          </nav>

          <div className="navbutton" style={{top: '-54px'}}>
            <form action="http://mentalstartup.com/signup">
              <input type="submit" className="blueback" value="Sign Up" />
            </form>
          </div>

        </div>

      </header>




      <div className="contentsection">

        <div id="content-mobile">
          <h1>A Social Network for Entrepreneurs and Creators</h1>
          <h2>Join and follow hundreds of people who are building the future from applications to social programs.<br /><br />What's your project?</h2>
          <form action="http://mentalstartup.com/signup">
            <input type="submit" className="blueback" value="Sign Up" />
          </form>
        </div>

        <div className="halfsection">

          <div style={{ padding: "15% 0%" }} id="content-desktop">
            <h1>A Social Network for Entrepreneurs and Creators</h1>
            <h2>Join and follow hundreds of people who are building the future from applications to social programs.<br /><br />What's your project?</h2>
            <form action="http://mentalstartup.com/signup">
              <input type="submit" className="blueback" value="Sign Up" />
            </form>
          </div>

        </div>

        <div className="halfsection" id="content-desktop">
          <img src="https://assets.bettyblocks.com/d50a139e135346b6a3f784bade4500b8_assets/files/Creative_Thinkers" width="100%" />
        </div>

      </div>



      <div className="contentsection">

        <div className="quartersection">
          <div style={{ padding: '0px 10px' }}>
            <Icon icon="ion:bulb-outline" style={{ fontSize: '50px', color: '#cccccc' }} /><br />
            <h2>You have a great idea for a project and want to get started.</h2>
          </div>
        </div>

        <div className="quartersection">
          <div style={{ padding: '0px 10px' }}>
            <Icon icon="ion:newspaper-outline" style={{ fontSize: '50px', color: '#cccccc' }} /><br />
            <h2>You want to create a plan to start getting things done.</h2>
          </div>
        </div>

        <div className="quartersection">
          <div style={{ padding: '0px 10px' }}>
            <Icon icon="ion:thumbs-up-outline" style={{ fontSize: '50px', color: '#cccccc' }} /><br />
            <h2>You want to validate your ideas to stay on the right track.</h2>
          </div>
        </div>

        <div className="quartersection">
          <div style={{ padding: '0px 10px' }}>
            <Icon icon="ion-md-contacts" style={{ fontSize: '50px', color: '#cccccc' }} /><br />
            <h2>You want a network that can give you feedback and support.</h2>
          </div>
        </div>

      </div>






      <div className="contentsection pinkgradient roundtop" style={{ height: '450px' }}>

        <div style={{ padding: '30px 0px 0px 0px', textAlign: 'center' }}>
          <h1 className="whitetext"><b>Collaborate And Scale Your Project</b><br />With a Support Network</h1>
          <h2 className="whitetext">
            Draw inspiration from other great minds and validate your ideas together.<br />
            br/ing your project from idea to MVP using our organized framework for startups.<br />
            Join for free and see what other creators have already started.
          </h2><br />
          <form action="http://mentalstartup.com/signup">
            <input type="submit" className="yellowback" value="Sign Up" />
          </form>
        </div>

      </div>


      <div className="contentsection grayback" style={{ marginTop: '0px', padding: '20px 0px' }}>

        <div style={{ width: '70%', left: '15%' }}>

          <div className="thirdsection" style={{ textAlign: 'center' }}>
            <h3 className="pinktext">600</h3>
            <h2 className="pinktext">Projects</h2>
          </div>


          <div className="thirdsection" style={{ textAlign: 'center' }}>
            <h3 className="pinktext">600</h3>
            <h2 className="pinktext">Projects</h2>
          </div>


          <div className="thirdsection" style={{ textAlign: 'center' }}>
            <h3 className="pinktext">600</h3>
            <h2 className="pinktext">Projects</h2>
          </div>

        </div>

      </div>

      <div className="contentsection">
      </div>


    </>
  );
}

export default Home;
