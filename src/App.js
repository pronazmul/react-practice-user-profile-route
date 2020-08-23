import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatePractice from './components/StatePractice';
import ConditionalReturnIfElse from './components/ConditionalReturnIfElse';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ConditionalReturnElementVarriable from './components/ConditionalReturnElementVarriable';
import RefreshNow from './components/RefreshNow';

function App() {
  return (  
          <div>
              <h1 className='text-center'>Automaitce Force Update</h1>
              <RefreshNow></RefreshNow>
              <hr></hr>
              <h1 className='text-center'>Conditional Return inside return block</h1>
              <ConditionalReturnElementVarriable></ConditionalReturnElementVarriable>
              <hr></hr>
              <h1 className='text-center'>Conditional Return Using State value Check</h1>
              <ConditionalReturnIfElse></ConditionalReturnIfElse>
                <hr></hr>
              <h1 className='text-center'>State value set and Update</h1>
              <StatePractice></StatePractice>
          </div>
   )
}

export default App;
