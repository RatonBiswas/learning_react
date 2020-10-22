import React from 'react';
import {useState} from  'react'
const Hooks = () => {
    const [name,newName] =  useState({
        
        fristName : "Raton",
    })
    return (
        <div>
            <p>{name.fristName}</p>
            <button onClick ={() =>newName({fristName:"Raton Nana"})}>Change</button>
        </div>
    );
};

export default Hooks;