import profilePic from '../assets/ProfilePicture.jpg'
import '../CSS/HomePage.css'
import { NavLink } from "react-router";
import styles from '../CSS/Header.module.css'
import Card from '../Components/Card.jsx';

function HomePage(){
return(
    <>
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

        <div className="description">
            <div>
                <img className="profPic" src={profilePic} alt="profile picture"></img>
            </div>

            <p className='myDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Natus iste qui sint omnis facilis ad enim culpa dolorem impedit vero, 
                tempora eius fuga aperiam delectus necessitatibus nihil magnam quasi labore!
            </p> 
        </div>

        <div>
            <Card name="Project1" image={profilePic} text= "Description of the project."></Card>
        </div>

        
    </>
    );
}

export default HomePage