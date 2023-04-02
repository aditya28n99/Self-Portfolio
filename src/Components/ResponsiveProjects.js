import React from 'react'
import { useState } from 'react';
import svpReact from '../Images/Project Images/web-SVP.png';
import ShopLane from '../Images/Project Images/web-Shoplane.png';
import storeMS from '../Images/Project Images/web-storeMS.png'
import Cards from './Cards';
function ResponsiveProjects() {

    const [responsiveWebs] = useState([
        
        {
            img: ShopLane,
            name: "ShopLane Website",
            text: "Designed a Online shoping web. In this web user can select the product then view the complete specification of each product and also find the Total bill. user can also make the orders for selected products.This web usese Product API. Front-end is Developed with HTML, Css and Javascript. Implimented Mobile Responsive User Experiance with Css3. This web is Hosted with the help of Google drive",
            link: "https://new-webs-aswwebhosting.on.drv.tw/ShoplaneWeb/home_page.html",
            repo: "https://drive.google.com/drive/folders/10mvOc1trx0jzs099yzqXf8QwAqj9ianQ?usp=share_link"
        },
        {
            img: storeMS,
            name: "Store Management System",
            text: "Users must sign in to this website using a valid username and password (both must be the same). The user can find the products and the user details by searching and filtering some values. The data is rendered using AJAX. Wesite's front-end is developed with HTML, CSS, and Javascript. Improving Mobile Responsive User Experience with CSS 3 This website is hosted with the help of Google Drive",
            link: "https://new-webs-aswwebhosting.on.drv.tw/Store Management System/SignInPage.html",
            repo: "https://drive.google.com/drive/folders/1Wg94_rE8R16tyBPqk5lPIzEiCWOcYlfq?usp=share_link"
        },
        {
            img: svpReact,
            name: "Shree Vidya Pratishtan School Pune",
            text: "Developed the front-end with HTML, CSS, and Js. enhanced mobile responsiveness and user experience with CSS3, and performed various animations and styling. Build an app with the React Router DOM to allow nested routing. This website is hosted on GitHub on Google Drive.",
            link: "https://new-webs-aswwebhosting.on.drv.tw/SVP-Pune/schoolPage.html",
            repo: "https://github.com/aditya28n99/SVP-Pune.git"
        }
        
    ])
  return (
    <>
        <div className="project_title m-3" id="pt">RESPONSIVE-PROJECTS</div>
            <div className=" project_box border-top rounded-5 ">
                {responsiveWebs.map((card, i) => (
                    <Cards key={i} name={card.name} img={card.img} text={card.text} link={card.link} />
                    ))}
            </div>
    </>
  )
}

export default ResponsiveProjects