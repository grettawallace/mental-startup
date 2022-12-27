import '../styles/Home.css';

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

                    <div className="navbutton">
                        <span className="iconify" data-icon="bx-bxs-user-circle" data-inline="false" style="width:50px;height:50px;color:#cccccc;padding:20px 0px;"></span><br />

                    </div>

                </div>

            </header>

            <section>

                <div className="onboard">
                </div>

            </section>



            <div className="contentsection center" style="margin-top:0px;">

                <h1>You're Signed Up!</h1>
                <h3>Here are a few next steps to get you started.</h3>

            </div>

            <section>

                <div className="contentsection" style="margin-top:20px;">

                    <div className="thirdsection center">
                        <div className="card center pinkback">
                            <h2 className="whitetext">Update Your Profile</h2>
                            <span className="iconify" data-icon="bx-bxs-user-circle" data-inline="false" style="width:100px;height:100px;color:#ffffff;"></span><br />
                        </div>
                    </div>

                    <div className="thirdsection center">
                        <div className="card center greenback">
                            <h2 className="whitetext">Jot Down Ideas</h2>
                            <span className="iconify" data-icon="fa-regular:lightbulb" data-inline="false" style="width:100px;height:100px;color:#ffffff;"></span><br />
                        </div>
                    </div>

                    <div className="thirdsection center">
                        <div className="card center blueback">
                            <h2 className="whitetext">Start a Project</h2>
                            <span className="iconify" data-icon="vs-gantt-o" data-inline="false" style="width:100px;height:100px;color:#ffffff;"></span><br />
                        </div>
                    </div>

                </div>


            </section>
        </>
    );
}

export default NextSteps;
