import profilePic from '../assets/ProfilePicture.jpg'
import '../CSS/card.css'

function Card(){
    return(
        <>
        <div className="card">
            <div>
                <img className="profPic" src={profilePic} alt="profile picture"></img>
                <h2>Marqus Tuntur</h2>
            </div>

            <p className='myDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Natus iste qui sint omnis facilis ad enim culpa dolorem impedit vero, 
                tempora eius fuga aperiam delectus necessitatibus nihil magnam quasi labore!
            </p> 
        </div>
            <p>I'm an artiist</p>
        
        </>
    );
}
export default Card