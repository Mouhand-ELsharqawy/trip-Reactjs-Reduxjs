import { useEffect } from "react";
import src1 from '../images/play-icon.png';
import { Link } from "react-router-dom";

const Blog = () => {
    useEffect(()=>{
        document.title = "BLOG"   
    })
    return ( 
    <div className= "blog_section layout_padding margin_top_90">
            <div className= "container">
                <h1 className= "blog_taital">See Our  Video</h1>
                <p className= "blog_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which</p>
                <div className= "play_icon_main">
                <div className= "play_icon"><Link to= "#"><img src= { src1 } alt="img" /></Link></div>
                </div>
            </div>
      </div>
     );
}
 
export default Blog;