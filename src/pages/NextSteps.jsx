import '../styles/Home.css';
import { Icon } from '@iconify/react';


function NextSteps() {
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



            <div className="contentsection center" style={{marginTop: '0px'}}>

                <h1>You're Signed Up!</h1>
                <h3>Here are a few next steps to get you started.</h3>

            </div>

            <section>

            <div className="contentsection" style={{marginTop: '20px'}}>

                    <div className="thirdsection center">
                        <div className="card center pinkback">
                            <h2 className="whitetext">Update Your Profile</h2>
                            <Icon icon="bx-bxs-user-circle" style={{ fontSize: '100px', color: '#ffffff'}} /><br />
                        </div>
                    </div>

                    <div className="thirdsection center">
                        <div className="card center greenback">
                            <h2 className="whitetext">Jot Down Ideas</h2>
                            <Icon icon="fa-regular:lightbulb" style={{ fontSize: '100px', color: '#ffffff'}} /><br />
                        </div>
                    </div>

                    <div className="thirdsection center">
                        <div className="card center blueback">
                            <h2 className="whitetext">Start a Project</h2>
                            <Icon icon="vs-gantt-o" style={{ fontSize: '100px', color: '#ffffff'}} /><br />
                        </div>
                    </div>

                </div>


            </section>
        </>
    );
}

export default NextSteps;
