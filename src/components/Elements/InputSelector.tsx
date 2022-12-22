import React from 'react'

interface InputSelectorProps {
  name: string;
  label: string;
  value: string | number | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { id: string; value: string }[];
}

const InputSelector = ({ label, name, value, onChange, options }: InputSelectorProps) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <select name={name} value={value} onChange={onChange} className=''>
        {options.map((option) => <option key={option.id}>
          {option.value}
        </option>
        )}
      </select>
    </div>
  )
}

export default InputSelector