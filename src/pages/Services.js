import { useEffect } from "react";
import src1 from '../images/img-1.png';
import src2 from '../images/img-2.png';
import src3 from '../images/img-3.png';
import { Link } from "react-router-dom";

const Services = () => {
    useEffect(()=>{
        document.title = "SERVICES"   
    })
    return ( 
        <div className= "services_section layout_padding">
         <div className= "container">
            <h1 className= "services_taital">Services </h1>
            <p className= "services_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
            <div className= "services_section_2">
               <div className= "row">
                  <div className= "col-md-4">
                     <div><img src= { src1 } className= "services_img" alt="img" /></div>
                     <div className= "btn_main"><Link to="#">Rafting</Link></div>
                  </div>
                  <div className= "col-md-4">
                     <div><img src= { src2 } className= "services_img" alt="img" /></div>
                     <div className= "btn_main active"><Link to="#">Hiking</Link></div>
                  </div>
                  <div className= "col-md-4">
                     <div><img src= { src3 } className= "services_img" alt="img" /></div>
                     <div className= "btn_main"><Link to="#">Camping</Link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     );
}
 
export default Services;