import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://twitter.com/V3nkateshwar' target='_'>
            <BsTwitter />
        </a>
        <a href='https://github.com/venky1306/' target='_'>
            <BsGithub />
        </a>
        <a href='https://www.linkedin.com/in/venkateshwar-reddy/' target='_'>
            <BsLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia