const FilterButton = ({ text, onClick, className = "" }) => {
  return (
    <div
      className={
        "w-full px-2 h-10 flex items-center justify-center rounded-lg bg-sky-500 hover:bg-sky-600 text-base text-white cursor-pointer border-[1px] border-sky-600 font-normal " +
        className
      }
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default FilterButton;
