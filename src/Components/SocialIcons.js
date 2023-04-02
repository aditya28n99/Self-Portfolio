import React from 'react'
import '../Styles/SocialIcons.css';
import { Link } from 'react-router-dom';
import {BsGithub,BsInstagram,BsLinkedin,BsFacebook} from "react-icons/bs";
import {ImCodepen,ImMail4} from 'react-icons/im';

function SocialIcons() {

    return (
        <>
         <div className="d-flex Icons" >
            <Link to='mailto:adityawakale208@gmail.com' className='mx-2'><ImMail4 className='icon'/></Link>
            <Link to='https://github.com/aditya28n99?tab=repositories' target='_blank' className='mx-2'>< BsGithub className='icon' /></Link>
            <Link to="https://codepen.io/Swamfire" target='_blank' className='mx-2'><ImCodepen className='icon' /></Link>
            <Link to='https://www.linkedin.com/in/aditya-wakale-959368248' target='_blank' className='mx-2' >< BsLinkedin className='icon' /></Link>
            <Link to='https://www.instagram.com/swam_fire/?next=%2F' target='_blank' className='mx-2' >< BsInstagram className='icon' /></Link>
            <Link to='https://www.facebook.com/people/Aditya-Wakale/pfbid02VCevat2TMfYFuQvuTJxqpzqJquM23WxvNH9QHfagvzwqgC4DLsoHsoeD11LrLb3kl/' target='_blank' className='mx-2' >< BsFacebook className='icon' /></Link>
         </div>
        </>
    )
}

export default SocialIcons