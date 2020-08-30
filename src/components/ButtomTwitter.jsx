import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/ButtomTwitter.css';
import ImgTwitter from './../images/logoTwitter.jpg';

const ButtomTwitter = () =>{
   return (
       <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><img className="icono mg-2 bg-white" style={{ 'padding': '20px' }, {'width': '30px'}} src={ImgTwitter} alt="logo Twitter"/>
        <button  className="btn btn-ligth" name="tweet" type="button"></button>
        </a>
        
       
    )}

export default ButtomTwitter;


