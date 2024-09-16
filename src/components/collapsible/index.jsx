import React from 'react';
import {useState,} from 'react'
import './styles.scss'
import arrow from "../../assets/images/arrow_2back_ios-24px 2.svg"

const Collapsible = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  
  const toggle = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div className='collapse'>
      <div onClick={toggle} className='redLine'>
        <h2 className='collapseTitle'>{props.label}</h2>
        <img src={arrow} alt="collapseArrow" className={isOpened ? "arrow anim" : "arrow"}/>
      </div>
      {isOpened && (
        <div className="collapseText">{props.children}</div>
      )}
    </div>
  );
};
  
export default Collapsible;