import React from 'react';

const InputText = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
    className="input"
  />
);

const InputPassword = ({
  placeholder,
  value,
  onChange,
  name,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => (
  <input
    type="password"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
    className="input"
  />
);

const TextArea = ({
  placeholder,
  value,
  onChange,
  name,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name} 
    className="input"
  />
);

const Checkbox = ({
  label,
  checked,
  onChange,
  name,
}: {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => (
  <label className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      name={name}
      className="mr-2"
    />
    {label}
  </label>
);

const Select = ({
  options,
  value,
  onChange,
  name,
}: {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}) => (
  <select
    value={value}
    onChange={onChange}
    name={name}
    className="input"
  >
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const Button = ({
  text, variant = 'primary'
}: {
  text: string; variant?: 'primary' | 'secondary'
}) => (
  <button className={`button ${variant}`}>{text}</button>
);

const PlantifyForm = {
  InputText,
  InputPassword,
  TextArea,
  Checkbox,
  Select,
  Button,
};

export default PlantifyForm;
