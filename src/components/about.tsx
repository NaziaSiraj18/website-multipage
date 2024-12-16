import "../style/about.css";
import React from 'react';
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


export default function About() {
  return (
    <div>
      <section id="about"className="about">
      <div className="about-content">
     <span> Let Me Introduce</span>
     <h2> About Me</h2>
     <h3>A story of my journey!</h3>
     <p>
     I am a Frontend Developer with a passion for creating responsive, user-friendly web applications. Skilled in HTML, CSS, JavaScript, and Next.js, I blend design and functionality to build seamless digital experiences. With a background in digital marketing, I bring a unique approach to every project, focusing on visual appeal and optimized performance.
     </p>
     
     </div>
    {/* image */}
    <div className="img-about">
        `<img src={"images/nazia pic.jpg "}
        width={200}
        height={200}
        className="header-image"
        alt="Profile " />`
  
  
    <div className="social-icon">
    <FaFacebook  className="s-icon1"/>
    <FaSquareInstagram  className="s-icon2"/>
    <FaGithubSquare className="s-icon3" />
    <FaSquareTwitter  className="s-icon4"/>

      
      
    </div>
    </div>
    </section>
    </div>
        );
}
