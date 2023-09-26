import { useEffect } from "react";
import { Link } from "react-router-dom";
import src1 from '../images/about-img.png';

const About = () => {
    useEffect(()=>{
        document.title = "ABOUT"   
    })
    return ( 
     
      <div className= "about_section layout_padding">
         <div className= "container-fluid">
            <div className= "row">
               <div className= "col-md-6">
                  <div className= "about_taital_main">
                     <h1 className= "about_taital">About Us</h1>
                     <p className= "about_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
                     <div className= "readmore_bt"><Link to= "#">Read More</Link></div>
                  </div>
               </div>
               <div className= "col-md-6 padding_right_0">
                  <div><img src= { src1 } alt="img" className= "about_img" /></div>
               </div>
            </div>
         </div>
      </div>
      
     );
}
 
export default About;