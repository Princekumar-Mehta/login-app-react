const Input = ({
  label,
  type,
  value,
  placeholder,
  name,
  onChange = undefined,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
