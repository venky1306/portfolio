import React from 'react'
import './Header.scss'
import { motion} from 'framer-motion'

import { AppWrap } from '../../wrapper'

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut'
//     }
//   }
// }

const text = "Glad you're here!";

const Letter = ({ letter, index }) => {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      animate={{ y: 0, transition: { duration: 0.5, delay: index * 0.05 } }}
      initial={{ y: "100vh" }}
    >
      {letter}
    </motion.span>
  );
};

const Header = () => {
  return (
    <div className='app__header'>

      <div className='app__header-infoL'>
        <div className='app__header-greeting'>
          {text.split("").map((letter, index) => (
            <span key={index}>
              <Letter letter={letter} index={index} />
              {letter === " " && <span>&nbsp;</span>}
            </span>
          ))}
        </div>
      </div>

      <div className='app__header-infoR'>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__header-info'
          >
            <div className='app__header-badge'>
              <div className='badge-cmp app__flex'>
                <div style={{ marginLeft: 20}}>
                  <p className='p-text'>I am</p>
                  <p className='app_header-name'>Venkateshwar</p>
                </div>
              </div>

              <div className='tag-cmp app__flex'>
                <p className='p-text'>Grad Student at UT Dallas</p>
                <p className='p-text'>Full-Stack Developer</p>
                <p className='p-text'>Blogger</p>
              </div>
            </div>
          </motion.div>
      </div>

      {/* <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className='p-text'> Glad you're here!, I am</p>
              <h1 className='head-text'>Venkateshwar</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full-Stack Develper</p>
            <p className='p-text'>Blogger</p>
          </div>
        </div>
      </motion.div> */}

      {/* <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile'/>
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{ duration: 0.5, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile-circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div> */}
    </div>
  )
}

export default AppWrap(Header, 'home')