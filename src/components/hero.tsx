import "../style/hero.css";
import Typewriter from 'typewriter-effect';
import Image from "next/image";


function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left*/}
                <div>
                    
                    `<img src={"images/nazia pic.jpg"} 
                    width={200}
                    height={200}
                    className="header-image"
                    alt="Profile image" />`
                </div>

                    {/* right */}
                <div className="hero-right-div">
                <h1 className="hero-title">Hey I am Nazia Siraj 
                <span className="typewriter"> | </span>
                </h1>
                <p className="des-hero">
                I am a Frontend Developer passionate about crafting engaging, user-friendly websites. Skilled in HTML, CSS, JavaScript, and modern frameworks, I blend creativity with technical expertise to deliver responsive, visually appealing, and efficient web experiences.&quot;


                </p>
                <button className="hero-btn">Hire Me</button>
            </div>
          </div>
        </div>
    );
}
export default Hero