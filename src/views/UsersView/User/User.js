import React from 'react';
import style from './User.module.scss';
import {withRouter} from 'react-router-dom';

const user = props => {
    return <div>
        <h1>The selected user is {props.name}</h1>
    </div>
}

export default withRouter(user);