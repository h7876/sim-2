import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

  
handleName(e){
    this.setState ({name: e.target.value})
}

handleAddress(e){
    this.setState ({address: e.target.value})
}
handleCity(e){
    this.setState ({city: e.target.value})
}
handleState(e){
    this.setState ({state: e.target.value})
}
handleZip(e){
    this.setState ({zip: e.target.value})
}

render(){
    return(
        <div>
            Wizard
            <br>
            </br>
        <input type="text" onChange = {this.handleName}/>
        <input type="text" onChange = {this.handleAddress}/>
        <input type="text" onChange = {this.handleCity}/>
        <input type="text" onChange = {this.handleState}/>
        <input type="text" onChange = {this.handleZip}/>
        <Link to = '/'><button>Cancel</button></Link>    
        </div>
        
    )
    }

};