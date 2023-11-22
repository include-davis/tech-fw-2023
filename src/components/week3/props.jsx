import React from 'react';
import { useState } from 'react';

export default function Props(props) {
    const [name, setName] = useState(props.name);
    return(
        <div>{name}</div>
    );
}