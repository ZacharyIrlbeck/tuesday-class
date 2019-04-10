





import React from 'react';

const button = (props) => {
    return <button onClick={props.handleClick}>{props.children}</button>;
};


export default button;
