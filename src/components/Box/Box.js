import React from 'react';
import style from './Box.module.scss';

const box = props => {
    return <div className={style.BoxContainer}>
        <div 
        className={style.Box}
        style={ {left: props.position}}
        ></div>
    </div>;
};


export default box;