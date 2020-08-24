import React from 'react';
import ReactDOM from 'react-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const DomPractice = () => {
   const changeImage = ()=>{
            let img = document.getElementById('imgId')
            ReactDOM.findDOMNode(img).src="http://rabbil.com/storage/react.jpg"
   }
    return (
        <div>
            <img id='imgId' height='300' width='300' className='img-thumbnail d-block mx-auto my-4' src='http://rabbil.com/storage/blogpost.jpg' alt=''></img>
            <button onClick={changeImage} className='btn btn-primary d-block mx-auto'>Change Image</button>
        </div>
    );
};

export default DomPractice;