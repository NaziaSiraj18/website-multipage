import "../style/contact.css";
import React from 'react';



 function Contact () {
  return (

       <div>
        <section id="contact" className="contact">
        <div className="text">
            <span>ask me question !</span>
            <h3>Contact me!</h3>
        </div>
        <form action="#">
            <input className="input" type="text" name="" id="name" placeholder="Your Name"/> <br />
            <input className="input" type="text" name="" id="email" placeholder="Your Email" /><br />
            <input type="text" name="" id="address" placeholder="Your ADDRESS"/><br />
            <input type="number" name="" id="phone" placeholder="PHONE NUMBER" /><br />
            <textarea name="" cols={30} rows={10} id="message" placeholder="Your Message"></textarea><br />
            <div className="btn-box formBtn">
                <button id="submit-btn" type="submit" className="btn">Send message</button>
            </div>
        </form>
        </section>
    </div> 

  );
}
export default Contact