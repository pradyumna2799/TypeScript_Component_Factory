import React from 'react';
import { ButtonProps } from '../types/componentTypes';


const Button: React.FC<ButtonProps>=({color,size,onClick})=>{
    return (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'   onClick={onClick} style={{backgroundColor: color,padding: size}} type='submit'>Click me</button>
    );
}
export default Button;
