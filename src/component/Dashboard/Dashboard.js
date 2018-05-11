import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'

export  class Dashboard extends Component {
    constructor(){
        super()
         this.state = {
            houses: []
        }
        
 }


componentDidMount() {
    axios.get('/api/inventory').then( res => {
        this.setState({
            houses: res.data
        })

    })
}



    render(){
        let inventoryDisplay = this.state.houses.map((element, index)=> {
            return(
                <div key = {element}>
                
                
                <House/>
                
            </div> 
            
            )

        })
        console.log(inventoryDisplay)
    return(
        <div>Dashboard
          
          <Link to = '/wizard'><button>Add New Property</button></Link>
            
        </div>
    
    )
    }
}
function mapStateToProps(state) {
    return {
      houses: state.houses
    };
  }
  
  export default connect(mapStateToProps)(Dashboard);
  