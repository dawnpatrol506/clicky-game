import React from 'react';
import Image from './Image';

const Board = function(props){
    return(
        <div className="row" onClick={props.ClickHandler}>
            {props.images.map((image, i) => {
            return <Image key={props.images[i].name} src={props.images[i].src} alt={props.images[i].name} onClick={props.onClick} /> })}      
        </div>
    )
}

export default Board;