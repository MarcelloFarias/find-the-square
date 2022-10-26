import React, { useState } from 'react';
import './style.css';

const Header = ({ score, restart, difficultly, onChange }) => {

    const [ isVisible, setIsVisible ] = useState(false);
    const difficultlies = ['easy', 'normal', 'hard'];

    return (
        <>
            <header>
                <h1>Score: {score}</h1>
                <div className='buttons'>
                    <button className='btn-restart' onClick={restart}>Restart</button>
                    <button className='btn-menu' onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Menu'}</button>
                </div>
            </header>
            <div className={isVisible ? 'menu-visible' : 'menu-hidden'} >
                <ul>
                    <li>
                        Difficulty: 
                        <select className='select-difficultly' value={difficultly} onChange={onChange}>
                            <optgroup>
                                {difficultlies.map((difficultly, index) => {
                                    return (
                                        <option key={index}>{difficultly}</option>
                                    );
                                })}    
                            </optgroup>    
                        </select> 
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;