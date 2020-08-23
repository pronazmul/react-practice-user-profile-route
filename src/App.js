import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatePractice from './components/StatePractice';
import ConditionalReturnIfElse from './components/ConditionalReturnIfElse';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (  
          <div>
              <h1 className='text-center'>Conditional Return Using State value Check</h1>
              <ConditionalReturnIfElse></ConditionalReturnIfElse>
                <hr></hr>
              <h1 className='text-center'>State value set and Update</h1>
              <StatePractice></StatePractice>
          </div>
   )
}

export default App;
