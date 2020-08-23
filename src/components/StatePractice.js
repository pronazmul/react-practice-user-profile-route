import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class StatePractice extends Component {

    constructor(){
        super()
        this.state ={
            name:'Nazmul Hdua',
            age: 24,
            profession:'Programmer'
        }
    }




    render() {
        return (
            <div>
                <h1 className='text-center'>Name: {this.state.name}</h1>
                <h1 className='text-center'>Age: {this.state.age}</h1>
                <h1 className='text-center'>Profession: {this.state.profession}</h1>
            </div>
        );
    }
}

export default StatePractice;