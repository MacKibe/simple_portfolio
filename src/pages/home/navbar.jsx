// 
// useState used for checking the states we are in 
import { useState, useEffect } from "react";
// 
// 
import {link} from "react-scroll"
// 
// Create our navbar section
export default function Navbar() {
    // 
    // navactive will be false to prevent it to be in active
    const {navActive, setNavActive} = useState(false);
    // 
    // Switches the nav if its not active
    const toggleNav = () => {
        setNavActive(!navActive);
    }
    // 
    // Close the nav if its active, so its goes back to it deault state
    const closeMenu = () => {
        setNavActive(false);
    }
    // 
    // checks ours resize of our nav
    useEffect(() => {
        // 
        // 
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu;
            }
        }
        // 
        // 
        window.addEventListener('resize', handleResize);
        // 
        // 
        return() => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    //
    // 
    useEffect(() => {
        if(innerWidth <= 1200){
            closeMenu;
        }
    }, []);
    // 
    // Return our html code to our application.
    return(
        // 
        // replace the quotes with curly brackets
        // Have the navbar if its active or not
        <nav className={`navbar ${navActive? "active" : ""}`}>
            <div>
                <img src="./img/logo.svg" alt="Kibe logo" />
            </div>
        </nav>
    )
}