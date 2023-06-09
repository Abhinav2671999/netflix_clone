import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
const[show,handleShow] = useState(false);
const history = useHistory();
console.log(useHistory);

const transitionNabBar =() =>{
    if(window.scrollY > 100){
        handleShow(true);
    }else{
        handleShow(false);
    }
};

useEffect(() => {
window.addEventListener("scroll", transitionNabBar);
return () => window.removeEventListener("scroll", transitionNabBar);
}, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
            <img 
                onClick={() => history.push('/')}
                className="nav_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix logo"
            />
            <img 
                onClick={() => history.push('/profile')}
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="avatar logo"
            />   
        </div>
    </div>
  );
}

export default Nav;
