const CustomInput = ({ type = "text", placeholder, onChange = () => {} }) => {
  return (
    <div className="m-2">
      <input
        className=""
        type={type}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </div>
  );
};

export default CustomInput;
