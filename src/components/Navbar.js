import "./Styles.css";
import logo from "../images/TrollFace.png"

function Nav(){
    return(
        <section className="nav">
            <img src={logo} className="nav-img"/>
            <h1 className="nav-heading">Meme Generator</h1>
            <p className="nav-text">React Course - Project 3</p>
        </section>
    )
}
export default Nav