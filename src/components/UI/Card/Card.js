import React from 'react';
import style from './Card.module.scss';

const card = props => {
    return <div {...props} className={style.Card}>
        {props.children}
    </div>
};

export default card;