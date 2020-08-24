import React from 'react'
import ReactDOM from 'react-dom'

const DomRenderHydrade = () => {

    const changeDom= ()=> {
        const element = <h1>Front-end Designer Sania</h1>
        const container = document.getElementById('myComponent')
        const callBack = function(){
            alert('I am from React Dom')
        }
        ReactDOM.render(element, container, callBack)

    }


    return (
        <div>
            <h1 id='myComponent' className='text-center'>Back-end developer Nazmul</h1>
            <button onClick={changeDom} className='btn btn-success d-block mx-auto m-4'>Change DATA</button>
        </div>
    );
};

export default DomRenderHydrade;