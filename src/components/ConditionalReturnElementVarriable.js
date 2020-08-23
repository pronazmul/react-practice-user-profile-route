import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ConditionalReturnElementVarriable extends Component {
    constructor() {
        super()
        this.state={
            login:true
        }
    }

    changeState(data){
        this.setState({login:data})
    }

    render() {
        return (
            <div>
                {this.state.login?<button onClick={()=>this.changeState(false)} className='btn btn-danger d-block mx-auto'>Logout</button>:<button onClick={()=>this.changeState(true)} className='btn btn-success d-block mx-auto'>Login</button>}
            </div>
        );
    }
}

export default ConditionalReturnElementVarriable;