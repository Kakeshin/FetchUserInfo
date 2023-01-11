import React from "react";

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" />
    </div>
  );
};

export default Input;
