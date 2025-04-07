import profilePic from '../assets/ProfilePicture.jpg'
import nerd from '../assets/Nerd_emoji.jpg'
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

        <div className="card">
            <Card name="Project1" image={profilePic} text= "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."></Card>
            <Card name="Project2" image={nerd} text= "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section"></Card>
        </div>
        <div className="card">
            <Card name="Project1" image={profilePic} text= "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."></Card>
            <Card name="Project2" image={nerd} text= "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section"></Card>
        </div>
    </>
    //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
    );
}

export default HomePage