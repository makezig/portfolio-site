import { NavLink } from "react-router";

function Header(){

    return(
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li> <NavLink to="#">Home</NavLink></li>
                    <li><NavLink to="#">About</NavLink></li>
                    <li><NavLink to="#">Services</NavLink></li>
                    <li><NavLink to="#">Contact</NavLink></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header