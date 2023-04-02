import React from 'react'
import '../Styles/Projects.css';
import { useState } from 'react';
import QuizApp from '../Images/Project Images/web-QuizApp.png'
import calsy from '../Images/Project Images/web-calculator.png';
import slp from '../Images/Project Images/web-stunningLP.png';
import resume from '../Images/Project Images/web-resume.png';
import edyodaStories from '../Images/Project Images/web-EdyodaStories.png';
import Nukk from '../Images/Project Images/web-Nukk.png';
import FevFood from '../Images/Project Images/web-FevFood.png';
import Cards from './Cards';
function BasicProjects() {
    const [basicWebs] = useState([
        {
            img: Nukk,
            name: "Nukk Web Page",
            typeofcard: "basic",
            link: "https://codepen.io/Swamfire/full/xxJZBNW",
            repo: "https://codepen.io/Swamfire/pen/xxJZBNW",
        },
        {
            img: resume,
            name: "Self Resume using Bootstrap",
            typeofcard: "react",
            link: "https://new-webs-aswwebhosting.on.drv.tw/Bootstrap Resume/",
            repo: "https://drive.google.com/drive/folders/1pynpeuwGppMOeDP3vwLnU5w6Btn3y6jy?usp=share_link"
        },
        {
            img: calsy,
            name: "Basic 2D Calculator",
            typeofcard: "basic",
            link: "https://new-webs-aswwebhosting.on.drv.tw/Basic_Calculator/Main_Index.html",
            repo: "https://drive.google.com/drive/folders/1C5_8yREbq5dLg3iYDwzQEE1NfZT8KBeJ?usp=share_link"
        },
        {
            img: slp,
            name: "Stunning Landing Page",
            typeofcard: "res",
            link: "https://new-webs-aswwebhosting.on.drv.tw/Stunning Landing Page/Index.html",
            repo: "https://drive.google.com/drive/folders/1YiuPAFsb2yj2Gkq258TVKTTlsyKtec3a?usp=share_link"
        },
        {
            img: edyodaStories,
            name: "Edyoda Stories",
            typeofcard: "res",
            link: "https://codepen.io/Swamfire/full/abKrjgL",
            repo: "https://codepen.io/Swamfire/pen/abKrjgL"
        },
        {
            img: QuizApp,
            name: "The Quiz App",
            typeofcard: "basic",
            link: "https://codepen.io/Swamfire/full/MWBqWYK",
            repo: "https://codepen.io/Swamfire/pen/MWBqWYK"
        },
        
        {
            img: FevFood,
            name: "Fevorate Food web",
            typeofcard: "react",
            link: "https://codepen.io/Swamfire/full/VwdVdWG",
            repo: "https://codepen.io/Swamfire/pen/VwdVdWG"
        }
    ])
    const [items, setItems] = useState(basicWebs);
    
    // const checkboxEvent = ()=>{
        //     if(document.getElementById("basic").checked){
            //         console.log("Got Checked");
            //         basicWebs.filter(typeofcards => typeofcards.typeofcard.includes('basic')).map((card, i) => (
                //             <Cards key={i} name={card.name} typeofcard={card.typeofcard} img={card.img} text={card.text} link={card.link} repo={card.repo} />
                //           ))
                //     }else{
                    //         console.log("Not checked");
    //     }
    // }

    // function funOne(){
    //     return(
    //         basicWebs.filter(typeofcards => typeofcards.typeofcard.includes('basic')).map((card, i) => (
    //             <Cards key={i} name={card.name} typeofcard={card.typeofcard} img={card.img} text={card.text} link={card.link} repo={card.repo} />
    //             ))
    //             )
    //         }
    //         function clck(){
    //             console.log(funOne())
    //             return(
    //                 funOne()
    //                 )
    // }
    function reactWebs(filterValue){
        // console.log(filterValue);
        setItems(basicWebs.filter(eachItem => eachItem.typeofcard.includes(filterValue)
        ));
    }
    function allWebs(){
        // console.log(filterValue);
        const filterCards = basicWebs.filter((e) =>{
            return e.typeofcard;
        });
        setItems(filterCards);
    }

  return (
    <>
        
        <div className="project_title m-3" >
        <button onClick={()=> reactWebs("react") }>React</button>
        <button onClick={()=> allWebs() }>All</button>
        </div>
            <div className="project_box border-top rounded-5">
                {items.map((card, i) => (
                <Cards key={i} name={card.name} typeofcard={card.typeofcard} img={card.img} text={card.text} link={card.link} repo={card.repo} />
                ))
                }
            </div>
    </>
  )
}

export default BasicProjects