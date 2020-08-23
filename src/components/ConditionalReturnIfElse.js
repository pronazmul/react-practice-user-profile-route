import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ConditionalReturnIfElse extends Component {
    constructor(){
        super()
        this.state={
            login:true
        }
    }
    changeState(data){

        this.setState({login:data})
    }

    render() {
        if(this.state.login==true){
            return <button onClick={()=>this.changeState(false)} className='btn btn-danger mx-auto d-block m-5'>Logout</button>
        }else{return <button onClick={()=>this.changeState(true)} className='btn btn-success mx-auto d-block m-5'>Login</button>}
    }
}

export default ConditionalReturnIfElse;