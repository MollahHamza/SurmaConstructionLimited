import { useState } from "react"
import "../Navbar.css"

import logox from "../assets/logox2.jpg"

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation" >
        <img src={logox} alt="" height={83} width={83} />
  
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a id="hoveer" href="/">Home</a>
          </li>
          <li>
            <a id="hoveer" href="/service">Services</a>
          </li>
          <li>
            <a id="hoveer" href="/construction">Construction</a>
          </li>
          <li>
            <a id="hoveer" href="/contact">Contact</a>
          </li>
        
          <button id="hire-us-button">
             <a href="/contact" target="_self" rel="noopener noreferrer">Hire Us</a>
           </button>
        </ul>
      </div>
    </nav>
  );
}