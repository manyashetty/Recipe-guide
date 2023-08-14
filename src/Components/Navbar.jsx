import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='h_full'>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg back">
                    <div className='navbar-brand head' >
                        <img src={require('../Images/BG-1.png')} alt='Logo' width={60} height={70} className='img-responsive me-3'></img>
                        TasteHealth
                    </div>
                    <div className="container">
                        <ul className="navbar-nav non-head">
                            <li className='nav-item'>
                                <a className='nav-link' href='/' id='text'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Plan' id='text'>Meal Plan</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Plan' id='text'>Recipes</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/About' id='text'>About Us</a>
                            </li>
                        </ul>
                        <div className="nav navbar-nav navbar-right">
                            <a href='Login'><button type="button" className="btn btn-lg l">Login</button></a>
                        </div>
                        <div className="nav navbar-nav navbar-right">
                            <a href='Signup'><button type="button" className="btn btn-lg l">Sign Up</button></a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <div className="input-group">
                <input type="search" className="form-control rounded me-3 bs" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn rounded search">Search</button>
            </div> */}
        </div>
    );
}

export default Navbar;