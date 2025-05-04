import React from "react";
import { InputProps } from "../types/componentTypes";

const Input: React.FC<InputProps>=({placeholder,value,onChange,type})=>{
    return (
        <input className="border-2 border-black focus:outline-none focus:border-blue-500" type={type} value={value} placeholder={placeholder} onChange={onChange} />
    );
}
export default Input;