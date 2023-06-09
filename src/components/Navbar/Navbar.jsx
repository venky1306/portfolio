import React,{ useState} from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Navbar.scss'
import { images } from '../../constants/index'
import resume from '../../assets/resume.pdf'

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo'></img>
      </div>
      <ul className='app__navbar-links '>
        { ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{capitalizeFirst(item)}</a>
          </li>
        ))}
        <li className='app__flex p-text'>
          <div />
          <a href={resume} target='_'>Resume</a>
        </li>
      </ul>
      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(!toggle)} />

          {toggle && (
            <motion.div
              whileInView={{x : [300, 0]}}
              transition={{duration: 0.85, ease: 'easeInOut'}}
            >
              <HiX onClick={() => setToggle(!toggle)}/>
              <ul>
                { ['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(!toggle)}>{capitalizeFirst(item)}</a>
                  </li>
                ))}
                <li>
                  <a href={resume}>Resume</a>
                </li>
              </ul>
            </motion.div>


          )}
      </div>
    </nav>
  )
}

export default Navbar