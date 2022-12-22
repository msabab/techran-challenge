import React from 'react'

interface InputTextProps {
  name: string;
  label: string;
  value: string | number;
  type?: React.HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputText = ({ name, label, value, type, onChange }: InputTextProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input className='border' type={type} name={name} value={value} onChange={onChange} />
    </div>
  )
}

export default InputText