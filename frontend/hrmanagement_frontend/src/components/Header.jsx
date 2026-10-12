import { Link } from "react-router-dom";
import './Header.css'
function Header(){
 
    return(
        <div className="header">
         <Link to="/">Home_page</Link>
         <Link to="/">About</Link>
         <Link to="/">contact</Link>
         
    

        </div>
    )
    
}
export default Header;