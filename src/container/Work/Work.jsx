import React from 'react'
import {motion} from 'framer-motion'
import './Work.scss'
import { AppWrap } from '../../wrapper'

const projects = [
  { title: 'Twitter Account Analysis', description: 'Application used to track top twitter user account and do sentiment analysis on tweets', tools: 'React, TailwindCSS, MongoDB, Flask, Azure', github: 'https://github.com/venky1306/TAA-Frontend', website: 'https://twitteraa.vercel.app/users' },
  { title: 'Amazon Clone', description: 'Amazon clone built using React, Redux, Firebase, Stripe', tools: 'React, Redux, Firebase, Stripe', github: 'https://github.com/venky1306/amazon_clone', website: '' },
  { title: 'Sorting Visualizer', description: 'Application used to visualize different sorting algorithms', tools: 'Javascript, TailwindCSS', github: 'https://github.com/venky1306/sorting_visualizer', website: 'https://venky1306.github.io/sorting_visualizer/' },
  { title: 'GoHelp', description: 'Application used to connect workman to consumers', tools: 'React, TailwindCSS, MongoDB, Flask, Azure', github: 'https://github.com/venky1306/GOHELP', website: '' },
  { title: 'Federated Learning for High Utility Item Set Mining', description: 'Application used to do federated learning on high utility data', tools: 'Python, PyTorch, Flask', github: 'https://github.com/venky1306/HighUtilityItementMining', website: '' },
  { title: 'Youtube Summarizer', description: 'Application used to summarize youtube videos', tools: 'Python, Flask, Azure', github: 'https://github.com/venky1306/Youtube_summarizer', website: '' },
  { title: 'Harris Corner Detection', description: 'Application used to detect corners in images', tools: 'Python, OpenCV', github: 'https://github.com/venky1306/Harris-Corner-Detection', website: 'https://medium.com/@venkateshwar13/introduction-to-harris-corner-detection-and-python-implementation-from-scratch-a9d8161bdf78' },
]

const Work = () => {
  return (
    <div className='app__work'>
      <div className='app__work-projects'>
        <div className='app__work-projects-title'>
          PROJECTS
          <svg className="blinking">
            <circle cx="20" cy="20" r="10" fill="red" />
            Sorry, your browser does not support inline SVG.  
          </svg> 
        </div>
        <div className='app__work-projects-list'>
          {projects.map((project, index) => (
            <motion.div
                whileHover={{ scale: 1.008 }}
                whileInView = {{x: index % 2 === 0 ? [-50, 0] : [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='app__work-projects-item'
                key={index}
              >
                <div className='app__work-projects-s1'>
                  <div className='app__work-projects-item-title'>{project.title}</div>
                  <div className='app__work-projects-item-description'>{project.description}</div>
                  <div className='app__work-projects-item-tools'>{project.tools}</div>
                </div>
                <div className='app__work-projects-s2'>
                  <div className='app__work-projects-item-links'>
                    <a href={project.github} target='_blank' rel='noreferrer'> <span>Repository</span> </a>
                    {project.website!=='' ? (
                      <a href={project.website} target='_blank' rel='noreferrer'> <span>Try It Out</span> </a>
                    ) : (
                      <></>
                    )
                    }
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='app__work-experience'>
        <div className='app__work-experience-title'>
          EXPERIENCE
        </div>
        <div className='app__work-experience-list'>
          <motion.div
            whileHover={{ scale: 1.008 }}
            whileInView = {{x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__work-experience-item'
          >
            <div className='app__work-experience-s1'>
              <div className='' style={{display: 'flex'}}>
                <div className='app__work-experience-item-title'>Data Analytics Intern,</div>
                <div className='app__work-experience-item-company'>The Shaadhi Times</div>
              </div>
              
              <div className='app__work-experience-item-date'>May 2020 - Jun 2020</div>
            </div>
            <div className='app__work-experience-item-description'>Data analysis comparing the Pre-COVID and Post-COVID eating habits and trends to identify shifts and insights that could inform future decision-making.</div>  
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Work, 'work')