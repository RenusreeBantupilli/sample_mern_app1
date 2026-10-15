import { Link } from "react-router-dom";
import './Header.css'
function Header(){
 
    return(
        <div className="header">
         <Link to="/">Home_page</Link>
         <Link to="/About">About</Link>
         <Link to="/Contact_page">Contact_page</Link>
         <Link to="/adminlogin">AdminLogin</Link>
         
    

        </div>
    )
    
}
export default Header;