import React from 'react'
import {motion} from 'framer-motion'

import './Skills.scss'
import {images} from '../../constants'
import { AppWrap } from '../../wrapper'

const abouts = [
  { title: 'React', imgUrl: images.react },
  { title: 'Python', imgUrl: images.python },
  { title: 'Flask', imgUrl: images.flask },
  { title: 'Tensorflow', imgUrl: images.tensorflow },
  { title: 'MySQL', imgUrl: images.mysql },
  { title: 'MongoDB', imgUrl: images.mongodb },
  { title: 'Git', imgUrl: images.git },
  { title: 'Node', imgUrl: images.node },
  { title: 'HTML', imgUrl: images.html },
  { title: 'CSS', imgUrl: images.css },
  { title: 'Sass', imgUrl: images.sass },
  { title: 'Javascript', imgUrl: images.javascript },
  { title: 'C++', imgUrl: images.cpp },
  { title: 'Mu5', imgUrl: images.mu5},
  { title: 'Linux', imgUrl: images.linux }, 
  { title: 'Azure', imgUrl: images.azure },
  { title: 'Tailwindcss', imgUrl: images.tailwindcss },
  { title: 'VSCode', imgUrl: images.vscode },

]


const Skills = () => {
  return (
    <div className='app__skills'>

      <motion.div
        initial={{ opacity: 0.5, scale: 0.9, x: 20 }}
        whileInView = {{ opacity: 1, scale: 1, x: 0}}
        transition={{ duration: .5 }}
        className='app__skills-title'
      >
        Skills
      </motion.div>

      <div className='app__skills-content'>
        {abouts.map((about, index) => (
          <motion.div
            className='app__skills-content-item'
            key={index}
          >
            <img src={about.imgUrl} alt={about.title} className='app__skills-content-item-img grayscale-image' />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(Skills, 'skills')