import React from 'react';
import './Button.css'; 


type ButtonType={
    type: any;
    children: any;
}

export const Button:React.FC<ButtonType> =({type, children}) => {
    return (
        <>
        <button type={type}>{children}</button>
        </>
    );
} 