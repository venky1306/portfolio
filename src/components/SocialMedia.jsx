import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsLinkedin />
        </div>
    </div>
  )
}

export default SocialMedia