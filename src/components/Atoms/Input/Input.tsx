import React from 'react';
import './Input.css'; //css import

/*
input
-name: string 이름 값이 string
*/

type inputType={
    type: any;
    name: string;
}

export const Input:React.FC<inputType> =({type, name }) => {
    return (
        <>
        <input type={type} name={name}/>
        </>
    );
}