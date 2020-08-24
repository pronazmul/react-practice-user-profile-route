import React from 'react';
import './App.css';
import DomPractice from './components/DomPractice';
import StatePractice from './components/StatePractice';
import ConditionalReturnIfElse from './components/ConditionalReturnIfElse';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ConditionalReturnElementVarriable from './components/ConditionalReturnElementVarriable';
import RefreshNow from './components/RefreshNow';
import DomRenderHydrade from './components/DomRenderHydrade';


function App() {
  return (   
          <div>
              <h5 className='text-center'>Change DOM using findDOMNode</h5>
              <DomPractice></DomPractice>
              <hr></hr>
              <h5 className='text-center'>Change Container Using DOM render() or hydrade()</h5>
              <DomRenderHydrade></DomRenderHydrade>
              <hr></hr>
              <h5 className='text-center'>Automaitce Force Update this.forceUpdate()</h5>
              <RefreshNow></RefreshNow>
              <hr></hr>
              <h5 className='text-center'>Conditional Return inside return block</h5>
              <ConditionalReturnElementVarriable></ConditionalReturnElementVarriable>
              <hr></hr>
              <h5 className='text-center'>Conditional Return Using State value Check</h5>
              <ConditionalReturnIfElse></ConditionalReturnIfElse>
              <hr></hr>
              <h5 className='text-center'>State value set and Update</h5>
              <StatePractice></StatePractice>
          </div>
   )
}

export default App;
