import { Person, Mail } from "@material-ui/icons"
import "./topbar.scss"


export default function TopBar({ menuOpen, setMenuOpen }) {
 return (
  <div className={"topbar " + (menuOpen && "active")}>
   <div className="wrapper">
    <div className="left">
    <a href="#intro" className="logo"> slntCoder;</a>
    <div className="itemContainer">
     <Person className="icon" />
     <span>+234 802 961 6767</span>
    </div>
    <div className="itemContainer">
     <Mail className="icon" />
     <span>adikasking@gmail.com</span>
    </div>
   </div>
   <div className="right">
    <div className="harmburger" onClick={()=>setMenuOpen(!menuOpen)}>
     <span className="line1"></span>
     <span className="line2"></span>
     <span className="line3"></span>
    </div>
   </div>
   </div>
   
   
  </div>
 )
}
