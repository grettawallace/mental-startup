import '../styles/Home.css';
import { Icon } from '@iconify/react';


function ProjectOnboard() {
    return (
        <>
            <header>

                <div className="navheader center">

                    <div className="navlogo">
                        <img src="https://assets.bettyblocks.com/d50a139e135346b6a3f784bade4500b8_assets/files/Mental_Startup_Logo" className="navlogo" />
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

                <h1>Get Started with a Project</h1>
                <p>Don't worry. This project doesn't have to be a gem.<br />We won't show it to anyone until it's refined and published</p>

                <form>
                    <input type="text" placeholder="Project Name" className="forty" /><br />
                    <input type="text" placeholder="A Short Description of Your Project" className="forty multitext" /><br />
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

export default ProjectOnboard;
