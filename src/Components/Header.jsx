import { NavLink } from "react-router";
import styles from '../CSS/Header.module.css'

function Header(){

    return(
        <header className={styles.header}>
            <div><h1>Markus Tunturivuori</h1></div>
            <div>
                <nav>
                    <ul>
                        <li> <NavLink to="#">Home</NavLink></li>
                        <li><NavLink to="#">About</NavLink></li>
                        <li><NavLink to="#">Services</NavLink></li>
                        <li><NavLink to="#">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
            <hr></hr>
        </header>
    );
}

export default Header