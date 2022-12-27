import '../styles/Home.css';
import { Icon } from '@iconify/react';


function IdeaOnboard() {
    return (
        <>
            <header>

                <div className="navheader center">

                    <div className="navlogo">
                        <img src="https://assets.bettyblocks.com/d50a139e135346b6a3f784bade4500b8_assets/files/Mental_Startup_Logo" className="navlogo"/>
                    </div>

                    <nav className="navbar">
                    </nav>

                    <div className="navbutton" style={{top: '-13px'}}>
                    <Icon icon="bx-bxs-user-circle" style={{ fontSize: '50px', color: '#cccccc', padding: '20px 0px' }} /><br />

                    </div>

                </div>

            </header>

            <section>

                <div className="onboard">
                </div>

            </section>



            <div className="contentsection center" style={{ marginTop: '0px' }}>

                <h1>Get Started with Some Ideas</h1>
                <p>Don't worry. These ideas don't have to be gems.<br />We won't show them to anyone until they're refined and published</p>

                <form>
                    <input type="text" placeholder="A Dog Rescue" className="forty" /><br />
                    <input type="text" placeholder="Tinder for Recipes" className="forty" /><br />
                    <input type="text" placeholder="A Lawncare Business" className="forty" /><br />
                    <input type="submit" className="blueback" value="Next Step" />
                </form>
            </div>

            <section>

                <div className="contentsection">
                </div>

            </section>
        </>
    );
}

export default IdeaOnboard;
