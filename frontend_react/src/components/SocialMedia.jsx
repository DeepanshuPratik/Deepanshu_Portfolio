import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://twitter.com/PratikDeepanshu' target='_blank' rel='noreferrer'><div>
            <BsTwitter />
        </div>
        </a>
        <a href='https://www.linkedin.com/in/deepanshupratik/' target='_blank' rel='noreferrer'><div>
            <BsLinkedin />
        </div></a>
        <a href='https://www.instagram.com/deepanshu_pratik/' target='_blank' rel='noreferrer'><div>
            <BsInstagram />
        </div></a>
        <a href='https://github.com/DeepanshuPratik' target='_blank' rel='noreferrer'><div>
            <BsGithub />
        </div></a>
    </div>
  )
}

export default SocialMedia