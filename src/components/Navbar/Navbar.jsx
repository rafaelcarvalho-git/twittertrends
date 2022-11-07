import './Navbar.css'
import {Link} from 'react-router-dom';
import twitter from './twitter.svg'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark align-items-center">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className="logo-twitter me-2" src={twitter} alt="" />Twitter Trends</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link text-white item-hover" to="/">Trends</Link>
                    <Link className="nav-link text-white" to="/informations">Informações</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;