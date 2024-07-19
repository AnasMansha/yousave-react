const TableRow = ({ row, cols }) => {
  return (
    <tr className="border-b-2">
      {cols.map((col) => (
        <td className=" py-2  px-4">
          {col.type === "image" ? (
            <img
              className="w-12 h-12 rounded-sm"
              src={row[col.dataIndex] || col.alt}
              alt={"table-image"}
            ></img>
          ) : (
            <div className="text-xs sm:text-sm md:text-base">
              {row[col.dataIndex] || col.emptyMessage || "Not Found"}
            </div>
          )}
        </td>
      ))}
    </tr>
  );
};

const CustomTable = ({
  headings,
  rows,
  cols,
  emptyMessage = "No data to show",
}) => {
  return (
    <div className="overflow-x-auto px-4 md:px-10 mb-4 bg-transparent">
      <table
        className="w-full"
        data-toggle="table"
        data-pagination="true"
        data-page-size="5"
      >
        <thead className="border-t-[1px] border-solid border-gray-300 border-b-2 h-16">
          <tr>
            {headings.map((heading) => (
              <th
                key={heading}
                className="text-start text-sm sm:text-base md:text-lg px-4"
                data-sortable="true"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.length ? (
            rows.map((row, index) => (
              <TableRow key={index} row={row} cols={cols} />
            ))
          ) : (
            <tr>
              <td colSpan={headings.length} className="text-base text-center">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
        {rows?.length ? (
          <thead className="border-t-[1px] border-solid border-gray-300 border-b-2 h-16">
            <tr>
              {headings.map((heading) => (
                <th
                  key={heading}
                  className="text-start text-sm sm:text-base md:text-lg"
                  data-sortable="true"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
      </table>
    </div>
  );
};

export default CustomTable;
