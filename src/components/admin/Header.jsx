import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <header className="mt-5 mb-5 hidden md:flex pt-10">
        <div className="w-full flex items-center  justify-between">
          <div className="w-1/4 flex justify-start">
            <a href="index.html">
              <img
                src="https://yousave.ai/img/new-logo.webp"
                alt="Logo"
                className="w-[200px]"
              />
            </a>
          </div>
          <div className="flex justify-center">
            <div
              className="mx-4 cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/admin/user-data")}
            >
              User Data
            </div>
            <div
              className="mx-4 cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/admin/search-data")}
            >
              Search Data
            </div>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <div className="flex items-center">
              <ul className="flex space-x-2">
                <li>
                  <div className="flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#ff9600] to-[#f44001] text-white font-dm-sans h-[44px] w-[160px]">
                    Account
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Header */}
      <header className="mt-5 mb-5 flex md:hidden pt-10">
        <div className="w-full flex items-center  justify-between">
          <div className="flex justify-center">
            <div
              className="mx-2 cursor-pointer hover:text-blue-600 text-xs bg-blue-300 rounded-md px-2 py-1"
              onClick={() => navigate("/admin/user-data")}
            >
              User Data
            </div>
            <div
              className="mx-2 cursor-pointer hover:text-blue-600 text-xs bg-blue-300 rounded-md px-2 py-1"
              onClick={() => navigate("/admin/search-data")}
            >
              Search Data
            </div>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <div className="flex items-center">
              <ul className="flex space-x-2">
                <li>
                  <div className="flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#ff9600] to-[#f44001] text-white text-xs font-dm-sans h-[34px] w-[80px]">
                    Account
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default AdminHeader;
