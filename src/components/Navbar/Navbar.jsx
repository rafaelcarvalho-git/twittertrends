function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="a" alt="" />Twitter Trends</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link" href="#">Trends</a>
                    <a className="nav-link" href="#">Informações</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;