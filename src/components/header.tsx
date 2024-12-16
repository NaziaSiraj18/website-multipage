import Link from "next/link";
import "../style/header.css";
import About from "@/app/about/page";


function Header(){
    return(
        <div className="header">
         {/* left*/} 
         <div>
            `<img src="images/nazia pic.jpg" alt="Logo" className="logo" />`
         <span className="logo-des">Nazia Siraj</span>


        </div>  
         {/* right*/}
         <div className="header-right-div">
            <ul className="navbar-icons">
                <li>
                    <Link className="nav-links"   href={"/"}>Home</Link>
                </li>  
                <li>
                    <Link className="nav-links" href={"/about"}>About</Link>
                </li> 
                <li>  
                    <Link className="nav-links" href={"/contact"}>Contact</Link>
                </li>
                <li>    
                    <Link className="nav-links" href={"/education"}>Education</Link>
                </li>  
                <li>  
                    <Link className="nav-links" href={"/skills"}>Skills</Link>
                </li>
            </ul>
         </div>

        </div>
    );
}
export default Header