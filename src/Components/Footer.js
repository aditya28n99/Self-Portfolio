import React from 'react'
import '../Styles/Footer.css';
import SocialIcons from './SocialIcons';

function Footer() {

  return (
    <footer>
        <div className="Footer d-flex p-5 flex-column">
          <div className=' d-flex m-auto text-center'>
            <SocialIcons/>
          </div>

          <div className='m-auto my-2 col-white'>
            <p>Created using <strong>React and BootStrap</strong></p>
          </div>
          <div className='m-auto col-white'>
            <p> &copy; 2023 All Rights Reserved</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer;