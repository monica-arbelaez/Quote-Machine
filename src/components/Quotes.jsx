import React from 'react';
 
const Quotes = (props) => {
    
    let {frase} = props
    return (
        <h2 id="text">{frase}</h2>
    )
}

export default Quotes; 