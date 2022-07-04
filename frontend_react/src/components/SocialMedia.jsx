import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
function social(item){
  if(item=="twitter"){
    window.open("https://twitter.com/", "_blank")
  }
  else if(item=="linkedIn"){
    window.open("https://twitter.com/", "_blank")
  }
  else if(item=="insta"){
    window.open("https://twitter.com/", "_blank")
  }
}
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter onClick={social("twitter")}/>
        </div>
        <div>
            <BsLinkedin onClick={social("linkedIn")}/>
        </div>
        <div>
            <BsInstagram onClick={social("insta")}/>
        </div>
    </div>
  )
}

export default SocialMedia