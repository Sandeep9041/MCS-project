import"./footer.css";
import {BsFacebook,BsWhatsapp,BsInstagram} from "react-icons/bs";
import {BiLogoLinkedin} from "react-icons/bi";
const Footer =()=>{
    return (
        <div className="footer-bg">
            <div className="footer-card">
                <div className="footer-card-1st"> 
                <div className="footer-logo-card">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1697299559/image_1_1_ia6knx.png" alt=""/>
                    <p className="footer-logo-text">India's first platform dedicated to simplifying partner search</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Pricing</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h3>Solutions</h3>
                    <p>Search</p>
                    <p>Connect</p>
                    <p>Research</p>
                    <p>Academy</p>

                </div>
                <div>
                    <h3>Resources</h3>
                    <p>Blogs</p>
                    <p>Forms</p>
                </div>
                <div>
                    <h3>Support</h3>
                    <p>Help</p>
                    <p>Contact US</p>
                </div>
                <div>
                    <h3>Legal</h3>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Accessibility</p>
                </div>
               </div>
            <hr className="footer-break"/>
            <div className="footer-address">
            <p>
                Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra                 
            </p>
            <div className="footer-contact-icons">
                <BsFacebook className="footer-contact-icon"/>
                <BsInstagram className="footer-contact-icon"/>
                <BiLogoLinkedin className="footer-contact-icon"/>
                <BsWhatsapp className="footer-contact-icon"/>
            </div>
            </div>   
            </div>
            <div className="black-bg">
                <p>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer;