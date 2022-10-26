import React, { useState, useEffect } from 'react';
import './style.css';

const Square = ({ top, left, onClick, difficultly }) => {

    const [ dimensions, setDimensions ] = useState({width: '200px', heigth: '200px'});

    function verifyDifficultly() {
        if(difficultly === 'easy') {
            setDimensions({width: '400px', heigth: '400px'});
        }
        else if(difficultly === 'hard') {
            setDimensions({width: '100px', heigth: '100px'});
        }
        else {
            setDimensions({width: '200px', heigth: '200px'});
        }
    }

    useEffect(() => {
        verifyDifficultly();
    }, [dimensions]);

    return (
        <>
            <div className='square' onClick={onClick} style={{marginTop: `${top}vh`, marginLeft: `${left}%`, height: `${dimensions.heigth}`, width: `${dimensions.width}`}}></div>
        </>
    );
}

export default Square;