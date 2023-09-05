import './Home.css'
import './Recipe.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='h_full'>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg back">
                    <div className='navbar-brand head'id="Recipe" >
                        <img src={require('../Images/chef.png')} alt='Logo' width={60} height={70} className='img-responsive me-3'></img>
                        Recipe Master
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
                                <a className='nav-link' href='/Recipe' to="/Recipe" id='text'>Recipes</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/create-recipe' to="/create-recipe" id='text'>Create Recipes</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/saved-recipe' to="/saved-recipe" id='text'>Saved Recipes</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Home1s' to="/Home1s" id='text'>Show Recipes</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Publish' to="/Publish" id='text'>CookBook</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Aboutus' id='text'>About Us</a>
                            </li>
                        </ul>
                        <div className="nav navbar-nav navbar-right">
                            <a href='Login'><button type="button" className="btn btn-dark ms-auto px-4 rounded-pill">Login</button></a>
                        </div>
                        <div className="nav navbar-nav navbar-right">
                            <a href='SignUp'><button type="button" className="btn btn-dark ms-auto px-4 rounded-pill">Sign-up</button></a>
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