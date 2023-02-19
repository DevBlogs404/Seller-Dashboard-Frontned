import React from "react";
import card1 from '../img/card1.png';
import card2 from '../img/card2.png';
import card3 from '../img/card3.png';
const Footer =()=>{

    const subscribe = ()=>{
        alert("thanks for subscribing");
    }
    return(
        <>
        <div className="footer">
            <div className="footer_container1">
                    <h3>&copy; PLANT</h3>
                    <h3>Suscribe to our weekly newsletter</h3>
                    <input type="email" name="newsletterInput" placeholder="Enter your email...." />
                    <button type="submit" onClick={subscribe} name="subscribe">Subscribe</button>
            </div>
            <div className="footer_container2">
                    <h3>Our Address</h3>
                    <p>1234-India</p>
                    <p>LA libertad - 43210</p>
                    <p>+999 888 777</p>
            </div>
            <div className="footer_container3">
                    <h3>We accept all credit cards</h3>
                    <div className="footer_container3_cards">
                        <img src={card1} alt="visa" />
                        <img src={card2} alt="mastercard" />
                        <img src={card3} alt="paypal" />
                    </div>
            </div>
        </div>
        {/* <div className="site_name"><h3>&copy;Plant || All Rights Reserved.</h3></div> */}
        </>
    )
};

export default Footer;