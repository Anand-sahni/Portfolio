import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://twitter.com/Anandsahni57'><BsTwitter /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/anandsahni/"><FaLinkedin /></a>
        </div>
        <div>
            <a href="https://www.instagram.com/anand.sahni57/"><BsInstagram /></a>
        </div>
        <div>
            <a href="https://github.com/Anand-sahni"><FaGithub /></a>
        </div>
    </div>
  )
}

export default SocialMedia