import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client';

import './About.scss'
import {images} from '../../constants'
import { AppWrap } from '../../wrapper'

// const abouts = [
//   { title: 'Web Development', imgUrl: images.about01 },
//   { title: 'Blockchain', imgUrl: images.about02 },
//   { title: 'Machine Learning', imgUrl: images.about03 },
// ]


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className='app__about'>

      <motion.div
        initial={{ x: -120, rotate: -90, opacity: 0, scale: 0.5 }}
        whileInView = {{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='app__about-title'
      >
        About
      </motion.div>

      <div className='app__about-content'>

        <div className='about-background'>
          <img src={images.profile} alt='profile'/>
          <div>Name is <br/><i>Venkateshwar Reddy Kandula,</i> <br/>Loves coding, writing blogs, and learning new things in the field of mathematics.</div>
        </div>

        <div className='about-education'>

          <div className='about-education-title'>Education</div>

          <div className='about-education-items'>
            <div className='about-education-item'>
              <div className='education-degree'>
                <div className='education-college-title'>University of Texas at Dallas</div>
                <div><i>Aug 2022 - May 2024</i></div>
              </div>
              <div className='education-degree-year'>~ Master's in Computer Science</div>
            </div>
            
            <div className='about-education-item'>
              <div className='education-degree'>
                <div className='education-college-title'>Indian Institute of Information Technology, Kottayam</div>
                <div><i>Aug 2018 - May 2022</i></div>
              </div>
              <div className='education-degree-year'>~ Bachelor's in Computer Science and Engineering</div>
            </div>
          </div>
          
        </div>

        <div className='about-interests'>

          <div className='about-interests-title'>Interests</div>
          <div className='app__profiles'>
            {abouts.map((about, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileInView = {{ opacity: 1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='app__profile-item'
                key={about.title+index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title}/>
                <div >{about.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default AppWrap(About, 'about')