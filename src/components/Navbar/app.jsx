import './app.scss'
import {AiOutlineHome} from "react-icons/ai"
import {HiOutlineMail} from "react-icons/hi"
import {BsGear} from "react-icons/bs"
import {BsFillPersonFill} from "react-icons/bs"
import { NavLink, Link } from 'react-router-dom'
import {BsGithub} from "react-icons/bs"




export default function app() {


  return (
      <div className='menu-navbar'>
        <div className="logo">
          <Link to="/">
            <img src="/myLogo.png" />
        </Link></div>
        <div className="menu-icons">
         <NavLink to="/" exact="true" activeClassName = '' className='home-icon'><AiOutlineHome/></NavLink>
         <NavLink to="/contact" activeClassName = '' className='about-icon'><BsFillPersonFill/></NavLink>
         <NavLink to="/about" activeClassName = '' className='contact-icon'><HiOutlineMail /></NavLink>
         <NavLink to="/skills" activeClassName = '' className='skills-icon'><BsGear /></NavLink>
        </div>
        <div className="footerIcon">
          <NavLink to="https;//github.com" className='github-icon'><BsGithub /></NavLink>
          </div>
      </div>

  )
}
