import React from 'react'
import Button from 'react-bootstrap/Button';
import {VscChevronUp} from 'react-icons/vsc'

function Scrollbtn() {

    function scrolltop(){
        window.scrollTo({top: 0, behavior:"smooth"});
    }
    function hideBtn(){ 
        let scrollbtn = document.getElementById("scroll_btn");
        if(window.pageYOffset < 150){
            scrollbtn.classList.add("hide");
        }else{
            scrollbtn.classList.remove("hide");
        }
    }
    window.addEventListener("scroll", hideBtn);
  return (
    <>
        <div className="scrollbtn-bg">
        <Button id='scroll_btn' className='scrollbtn' variant="outline-warning" onClick={scrolltop} ><VscChevronUp/></Button>
        </div>
    </> 
  )
}

export default Scrollbtn;