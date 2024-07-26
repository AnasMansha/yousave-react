const CustomInput = ({ type = "text", placeholder, onChange = () => {} }) => {
  return (
    <div className="m-2">
      <input
        className="border w-full p-2"
        type={type}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </div>
  );
};

export default CustomInput;
