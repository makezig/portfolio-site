import profilePic from '../assets/ProfilePicture.jpg'
import '../CSS/card.css'
import { NavLink } from "react-router";

function Card(projects){
    return(
        <>
        <div>
            <div className="cardElements">
                <img className="projectPIC" src={projects.image} alt="project picture"></img>
                <h2 className="projectTitle"><NavLink to="#">{projects.name}</NavLink></h2>
                <p className="projectText">{projects.text}</p>
            </div>
        </div>
           
        </>
    );
}
export default Card