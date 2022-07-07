import React from 'react'
import "./navBar.css"

const navBar = () => {
  return (
    <nav className="nav">
        <a href="/" className="siteTitle">
            The Wizard, The King, & The Fool
        </a>
        <ul>
            <li>
                <a href="/About" className="title">About</a>
            </li>
            <li>
                <a href="/Blog" className="title">Blog</a>
            </li>
        </ul>
    </nav>
  )
}

export default navBar
