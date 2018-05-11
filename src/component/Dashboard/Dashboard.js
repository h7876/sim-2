import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super()
         this.setState = {
            houses: ''
        }
    
        
 }
      
 getInventory(){  
    let promise = axios.get('/api/inventory/')
    promise.then((response)=> {
      this.setState ({houses: response.data})
      console.log(response.data)
    })
} 
componentDidMount(){
    this.getInventory();
}

    render(){
        
  
    return(
        <div>Dashboard
          <House />  
          <Link to = '/wizard'><button>Add New Property</button></Link>
            <button onClick = {this.getInventory}>click meeeeee</button>
        </div>
    
    )
    }
}
