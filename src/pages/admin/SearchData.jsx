import AdminHeader from "components/admin/Header";
import CustomTable from "components/common/CustomTable";
import { useEffect, useState } from "react";
import { filterTopSearches } from "utils";
import { getAllSearches } from "utils/apis/admin";

const SearchData = () => {
  useEffect(() => {
    const fetchSearches = async () => {
      const searchData = await getAllSearches();
      setSearchData(
        filterTopSearches(searchData, 20).map((search, index) => {
          return { ...search, index: index + 1 };
        }),
      );
    };

    fetchSearches();
  }, []);

  const [searchData, setSearchData] = useState(null);
  const headings = ["#", "Search", "Count"];
  const tableCols = [
    {
      dataIndex: "index",
    },
    { dataIndex: "search_query" },
    { dataIndex: "query_count" },
  ];
  return (
    <div>
      <AdminHeader />
      <div className="text-center text-3xl font-bold mt-10 mb-5">
        Search Data
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-4/5 px-2 md:px-0 overflow-x-auto">
          <CustomTable
            headings={headings}
            rows={searchData || []}
            cols={tableCols}
            emptyMessage={
              searchData === null ? "Loading..." : "No search made yet"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SearchData;
