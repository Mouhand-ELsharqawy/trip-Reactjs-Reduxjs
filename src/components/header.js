import { Link } from 'react-router-dom';
import src1 from '../images/logo.png';

const Header = () => {
   
    return ( 
     
      <div className="header_section">
         <div className="header_main">
            <div className="mobile_menu">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="logo_mobile"><Link to="/"><img src = { src1 } alt='img' /></Link></div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link " to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link " to="/contact">Contact</Link>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
            <div className="container-fluid">
               <div className="logo"><Link to="/"><img src= { src1 } alt='img' /></Link></div>
               <div className="menu_main">
                  <ul>
                     <li className="active"><Link to="/">Home</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/services">Services</Link></li>
                     <li><Link to="/blog">Blog</Link></li>
                     <li><Link to="/contact">Contact us</Link></li>
                  </ul>
               </div>
            </div>
         </div>
         </div>
     );
}
 
export default Header;