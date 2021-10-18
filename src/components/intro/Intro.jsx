import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
 const textRef = useRef();

 useEffect(() => {
  init(textRef.current, { 
   showCursor: false,
   backDelay: 2000, 
   backSpeed: 60, 
   strings: ["Fullstack Developer", "UI/UX Designer","Devops Engineer", "Growth Hacker" ], 
  })
    
 }, [])


 return (
  <div className="intro" id="intro">

   <div className="left">
    <div className="imgContainer">
     <img src="assets/man.png" alt="" srcset="" />
    </div>
   </div>
   <div className="right">
    <div className="wrapper">
     <h2>Hi, my name is</h2>
     <h1>Adika King</h1>
     <h3>A Freelance " <span ref={textRef}></span> "</h3>
    </div>
    <a href="#portfolio">
     <img src="assets/down.png" alt="" />
    </a>
   </div>
   
  </div>
 )
}
