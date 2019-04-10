import React, { Component } from 'react';
import style from './App.module.scss';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import UsersView from './views/UsersView/UsersView';


class App extends Component {

  render() {
    return (
      <div className={style.App}>
          <Switch>
            <Route path='/users' component={UsersView}/>
            <Route path='/posts' render={() => <h1>Hello World/ Posts</h1>}/>
            <Route path='/' exact render={() => <h1>Home</h1>}/>
            <Route path='/404' exact render={() => <h1>Page not found: 404</h1>}/>
            <Redirect to='/404'/>
          </Switch>

        <div>
          <Link to="/posts">Posts</Link>
          <br/>
          <Link to="/users">Users</Link>
          <br/>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default App;