import React from 'react';
import style from './Profile.module.scss';

const profile = props => {
    const icon = props.gender === 'male'? <i className="fas fa-dragon"></i> : <i className="fas fa-horse"></i>;
    
    return <div className={style.Profile}>
        {icon}<p>{props.name}</p>/
        <p>{props.username}</p>
    </div>;
};

export default profile;