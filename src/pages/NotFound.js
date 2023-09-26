import { useEffect } from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    useEffect(()=>{
        document.title = "PAGE 404"   
    })
    return ( 
        <div className= "banner_section layout_padding">
            <div className= "carousel slide" data-ride="carousel">
               <div className= "carousel-inner">
                  <div className= "carousel-item active">
                     <div className= "container">
                        <h1 className= "banner_taital">Ooops, Page Not Found</h1>
                        <div className= "read_bt"><Link to="/">Back To Home</Link></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
     );
}
 
export default NotFound;