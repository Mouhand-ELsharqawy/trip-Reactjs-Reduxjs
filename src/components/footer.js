import { Link } from 'react-router-dom';
import src1 from '../images/call-icon.png';
import src2 from '../images/mail-icon.png';
import src3 from '../images/fb-icon.png';
import src4 from '../images/twitter-icon.png';
import src5 from '../images/linkedin-icon.png';
import src6 from '../images/instagram-icon.png';

const Footer = () => {
    return ( 
        <div>
        <div className= "footer_section layout_padding">
           <div className= "container">
              <div className= "input_btn_main">
                 <input type="text" className= "mail_text" placeholder="Enter your email" name="Enter your email" />
                 <div className= "subscribe_bt"><Link to="#">Subscribe</Link></div>
              </div>
              <div className= "location_main">
                 <div className= "call_text"><img src= { src1 } alt='img' /></div>
                 <div className= "call_text"><Link to="#">Call +01 1234567890</Link></div>
                 <div className= "call_text"><img src= { src2 } alt='img' /></div>
                 <div className= "call_text"><Link to="#">demo@gmail.com</Link></div>
              </div>
              <div className= "social_icon">
                 <ul>
                    <li><Link to="#"><img src= { src3 } alt='img' /></Link></li>
                    <li><Link to="#"><img src= { src4 } alt='img' /></Link></li>
                    <li><Link to="#"><img src= { src5 } alt='img' /></Link></li>
                    <li><Link to="#"><img src= { src6 } alt='img' /></Link></li>
                 </ul>
              </div>
           </div>
        </div>
        
        <div className= "copyright_section">
           <div className= "container">
              <p className= "copyright_text">2020 All Rights Reserved</p>
           </div>
        </div>
        </div>
     );
}
 
export default Footer;