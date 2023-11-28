import React from 'react';
import { useState } from 'react';


/* propers = {
    'name'= 'Emily'
    key2: value 2
    }
    props.name
    props.key2
}
*/


export default function Props(props) {
    const  [name, setName] = useState()
    return(
        <div>{name}</div>
    )
}