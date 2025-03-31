import profilePic from '../assets/ProfilePicture.jpg'
import '../CSS/card.css'

function Card(){
    return(
        <div className="card">
            <img className="profPic" src={profilePic} alt="profile picture"></img>
            <h2>Marqus Tuntur</h2>
            <p>I play videogames and lay eggs</p>
        </div>
    );
}
export default Card