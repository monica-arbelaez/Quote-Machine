  
import React from 'react';

const Author = (props) =>{
    let {authorQuota} = props  
    return (
        <h4 id="author">{authorQuota}
        </h4>
    )
}

export default Author;