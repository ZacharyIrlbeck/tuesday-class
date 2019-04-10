import React, {Component} from 'react';
import style from './UsersView.module.scss';
import axios from 'axios';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import Card from '../../components/UI/Card/Card';
import Profile from '../../components/Profile/Profile';
import User from './User/User';

class UsersView extends Component {
    state = {
        persons: [],
      };
    
      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => this.setState({persons: response.data}));
      };
    
    
      handleDelete = id => {  
        const newPeople = [...this.state.persons];
        const selectedPerson = newPeople.findIndex(person => {
          return person.id === id
        });
        newPeople.splice(selectedPerson, 1);  
        this.setState({persons: newPeople});
      };
    

    render(){
        console.log(this.props.location.pathname);
        return <div>
            <Switch>
            <Route path='/users/test' exact render={() => <h1>This is a test for nested routes</h1>}/>
            <Route path='/users/:id' render={() => <User name={this.state.persons.find(person => person.id === +this.props.match.params.id)}/>}/>
          </Switch>

            {this.state.persons.map( person => <Link to={"/users/" + person.id}>
                <Card 
                //   onClick={() => this.handleDelete(person.id)}
                key={person.id}>
                <Profile
                name={person.name}
                username={person.username}/>
                </Card>
            </Link>)}
        </div>;
    }
};

export default UsersView;
