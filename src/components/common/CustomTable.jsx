const CustomTable = ({ rows, cols }) => {
  return (
    <table
      className="w-full max-w-[1000px] px-4 md:px-10 mb-4 bg-transparent text-xs"
      data-toggle="table"
      data-pagination="true"
      data-page-size="5"
    >
      <thead className="border-t-[1px] border-solid border-gray-300 border-b-2 h-16">
        <tr>
          {rows.map((row) => (
            <th className="text-start" data-sortable="true">
              {row}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJ8oL2YNpxZ54xD2IlrSILns4UdVs2IDwZ7Foq6zUm7=s96-c"
              alt="Avatar"
              className="w-12 h-12 rounded-sm"
            />
          </td>
          <td>5bf4293d-593e-4dc4-89e5-f4dbefbf0ca9</td>
          <td>Sadam Ashraf</td>
          <td>sadamashraf001@gmail.com</td>
          <td>not found</td>
        </tr>
        <tr>
          <td>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJ8oL2YNpxZ54xD2IlrSILns4UdVs2IDwZ7Foq6zUm7=s96-c"
              alt="Avatar"
              className=" w-12 h-12"
            />
          </td>
          <td>5bf4293d-593e-4dc4-89e5-f4dbefbf0ca9</td>
          <td>Sadam Ashraf</td>
          <td>sadamashraf001@gmail.com</td>
          <td>not found</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomTable;
