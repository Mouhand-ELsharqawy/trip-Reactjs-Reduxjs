import { useEffect } from "react";
import { Link } from "react-router-dom";
import src1 from '../images/client-img.png';
import src2 from '../images/quick-icon.png';


const Home = () => {
    useEffect(()=>{
        document.title = "HOME"   
    })
    return ( 
       <div>
         <div className= "banner_section layout_padding">
            <div className= "carousel slide" data-ride="carousel">
               <div className= "carousel-inner">
                  <div className= "carousel-item active">
                     <div className= "container">
                        <h1 className= "banner_taital">Adventure</h1>
                        <p className= "banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
                        <div className= "read_bt"><Link to="#">Get A Quote</Link></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
          
          <div className= "client_section layout_padding">
             <div className= "container">
                <h1 className= "client_taital">Testimonial</h1>
                <div className= "client_section_2">
                   <div id="carouselExampleIndicators" className= "carousel slide" data-ride="carousel">
                      <ol className= "carousel-indicators">
                         <li data-target="#carouselExampleIndicators" data-slide-to="0" className= "active"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div className= "carousel-inner">
                         <div className= "carousel-item active">
                            <div className= "client_main">
                               <div className= "box_left">
                                  <p className= "lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                               </div>
                               <div className= "box_right">
                                  <div className= "client_taital_left">
                                     <div className= "client_img"><img src= { src1 } alt="img" /></div>
                                     <div className= "quick_icon"><img src= { src2 } alt="img" /></div>
                                  </div>
                                  <div className= "client_taital_right">
                                     <h4 className= "client_name">Dame</h4>
                                     <p className= "customer_text">Customer</p>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className= "carousel-item">
                            <div className= "client_main">
                               <div className= "box_left">
                                  <p className= "lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                               </div>
                               <div className= "box_right">
                                  <div className= "client_taital_left">
                                     <div className= "client_img"><img src= { src1 } alt="img" /></div>
                                     <div className= "quick_icon"><img src= { src2 } alt="img" /></div>
                                  </div>
                                  <div className= "client_taital_right">
                                     <h4 className= "client_name">Dame</h4>
                                     <p className= "customer_text">Customer</p>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className= "carousel-item">
                            <div className= "client_main">
                               <div className= "box_left">
                                  <p className= "lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                               </div>
                               <div className= "box_right">
                                  <div className= "client_taital_left">
                                     <div className= "client_img"><img src= { src1 } alt="img" /></div>
                                     <div className= "quick_icon"><img src= { src2 } alt="img" /></div>
                                  </div>
                                  <div className= "client_taital_right">
                                     <h4 className= "client_name">Dame</h4>
                                     <p className= "customer_text">Customer</p>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className= "choose_section layout_padding">
             <div className= "container">
                <h1 className= "choose_taital">Why Choose Us</h1>
                <p className= "choose_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
                <div className= "read_bt_1"><Link to="#">Read More</Link></div>
                <div className= "newsletter_box">
                   <h1 className= "let_text">Let Start Talk with Us</h1>
                   <div className= "getquote_bt"><Link to="#">Get A Quote</Link></div>
                </div>
             </div>
          </div>
         </div>
     );
}
 
export default Home;